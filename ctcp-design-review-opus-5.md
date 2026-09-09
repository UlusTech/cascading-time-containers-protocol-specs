# CTCP Design Review

Review of the prototype plan *"CTCP prototype: `*` derived containers, ordinal plugins,
recurrence"*.

## Provenance

This document was produced in a **chat session between Bilgehan and Claude on 2026-09-09**. It
reviews a plan written by a separate implementing session. It is a review, not authority: the
repo is not authority either, and nothing here has been implemented.

The two voices are separated deliberately, because they carry different weight:

| Marker | Meaning | Weight |
| --- | --- | --- |
| **`[B]`** | Bilgehan's position, question, or requirement | Binding. Treat as a decision or a stated need. |
| **`[C]`** | Claude's observation from the review | Not binding. An argument to be accepted or rejected. |
| `>` note | Claude's suggested resolution | **Not decided.** One way out, recorded so the finding is actionable. Discarding it leaves the finding intact. |

Each finding carries an **Origin** line naming who raised it and who elaborated it. Where the
two disagree or where Bilgehan has not yet accepted a `[C]` finding, that is stated in the
finding itself rather than smoothed over.

Companion documents, both written by Claude in the same session and reviewed by Bilgehan:
`dates-and-recurrence.md` (ordinal math, generator/predicate duality),
`hierarchical-date-addressing.md` (normalization, the plugin capacity contract).

---

## 0. Not under review

**`[B]`** All settled by Bilgehan, in the implementing session or in this chat. Nothing below
disturbs them.

- Id is one `.`-separated string. `*` as an element means "the plugin fills this in".
  `utc.minute.*` is a stored row; `utc.minute.35` never is.
- Segment is one occurrence. Cascade is an ordered member list.
- A segment whose containerId contains `*` is an occurrence of the derived container itself,
  and everything under it lands in every instance. This is recurrence.
- Merge priority: stored-under-concrete > stored-under-`*` > derived.
- Week, "tuesday", "every 2 days" are functions over an ordinal, not levels of the gregorian
  tree.
- Anchoring by placement: a rule's start is the ordinal of its own walk-up.
- Linear scan over rule segments is accepted for this round. **`[B]`** Everything past it is an
  optimisation, and optimisations are abstractions; no index this round.
- Nested `*` (`gregorian.year.*/gregorian.month.*/gregorian.day.1` = the first of every month)
  is a requirement, not an accident, and needs a test.

---

## 1. Findings on the `Resolver` contract

The contract under review:

```ts
type Resolver = {
	id: PluginID;
	accepts(id: ContainerID): boolean;
	derive(owner: readonly ContainerID[]): ContainerID[];
	ordinal(path: readonly ContainerID[]): number | null;
	applies(rule: readonly ContainerID[], target: readonly ContainerID[], all: Resolvers): boolean;
};
type Resolvers = Map<PluginID, Resolver>;
```

Bilgehan annotated this type field by field. The findings below follow his annotations.

### 1.1 The engine routes by plugin id

**Origin:** `[B]` raised — event handling cannot dispatch by auto-detecting a plugin id; there
can be a filter function, not a static handler key. `[C]` elaborated.

**`[B]`** A plugin id may exist, but it means nothing to the engine by default. `utc.*` is not
related to any plugin by virtue of its name. The plugin should decide what it handles.

**`[C]`** As written, `Resolvers = Map<PluginID, Resolver>` plus `pluginOf(id)` makes the head
element a static handler key derived from a naming convention. Consequences: two plugins cannot
share a namespace, one plugin cannot claim two, and no plugin can claim ids by shape rather than
prefix. This reaches step 1, which currently exports `pluginOf` as a routing primitive.

> **Claude, suggestion — not decided.** Replace `id: PluginID` with
> `handles(id: ContainerID): boolean` and make `Resolvers` an array. Lookup becomes a scan over
> resolvers, cheap at this plugin count. If taken, registration order becomes meaningful and
> needs documenting; `pluginOf` can survive as a convenience helper as long as the engine never
> calls it.

### 1.2 Three of the five methods are the same relation

**Origin:** `[B]` raised — `accepts` "feels similar to my invoke idea", and asked why `derive`
and `applies` are separate things. `[C]` elaborated.

**`[C]`** There is one relation in the model, containment, read in different directions and at
different scopes:

| | Question | Method |
| --- | --- | --- |
| Forward | Given P, what are its members? | `derive` |
| Reverse | Given P and C, is C a member of P? | `applies` |
| Reverse, one level | Is `utc.minute.35` a member of this hour? | `accepts` |

Presenting them as unrelated hides two things. Which plugins can implement what: `week` and
`every` answer the reverse direction naturally and the forward direction only with an inverse
ordinal (§2), while `gregorian` can do both. And the contract has no way to say "I do not answer
this direction" — `false` and `[]` currently mean both "answered, empty" and "cannot answer".

This is the generator/predicate pair from `dates-and-recurrence.md` §6.

> **Claude, suggestion — not decided.** Collapse to `members(parent)` and
> `contains(parent, target)`, each able to return `null` for "I do not answer this direction" as
> distinct from an empty answer.

### 1.3 `derive` is under-specified, and its name is weak

**Origin:** `[B]` raised — "derive çok ghost bir mantığa sahip", and asked whether `derive` is
the right wording and how it works under the hood. `[C]` answered.

**`[C]`** The concept is sound: `derive` answers "what does this contain" from a rule rather
than from storage, because 60 minute rows per hour for all time cannot be stored. The mechanism
is: read the chain, take the innermost element, consult the unit's capacity, emit one
containerId per index in range (`hierarchical-date-addressing.md` §3). What makes it feel like
hidden machinery is its return value (§3) and the fact that the plan states the above nowhere.

> **Claude, suggestion — not decided.** `members` says what it returns; `derive` says how it was
> obtained. A rename costs nothing at this stage.

### 1.4 There is only one ordinal, and it does not name what it counts

**Origin:** `[B]` raised — why a single ordinal at all, and why only days; minutes, hours and
months are all orderable. `[C]` elaborated with the failure mode.

**`[C]`** A chain that reaches a minute has a day ordinal *and* a minute ordinal, and they are
different numbers; the contract cannot express this. The failure is silent rather than loud: if
any plugin returns a bare number counting something other than days, `week` computes `mod 7` on
it and reports a weekday that means nothing. Nothing in the types prevents this. This also
blocks §5, since an event's length is measured in minutes.

**`[B]`** On interoperability: any calendar built on CTCP is built with some framework, and
calendars sharing a framework share this vocabulary. Calendars from different frameworks are
different concepts and are under no obligation to interoperate. There is no useful distinction
between a framework, a plugin and a library — a framework is a plugin. A calendar may decline to
propose a day structure at all, and a framework may allow swapping the part that does.

**`[C]`** That position resolves the harder version of this problem (a sol-based calendar
returning sol counts into a day-shaped API) without inventing a universal time standard, but it
does not by itself stop the silent mismatch inside one framework.

> **Claude, suggestion — not decided.** `ordinals(chain): readonly Ordinal[]` where
> `Ordinal = { axis, value }`, with the rule that two ordinals are comparable only when their
> axes are equal, turns the mismatch into a `null` instead of a wrong number. Axes are then
> framework vocabulary, matching `[B]` above. A plugin that names no axis is an island —
> storable, addressable, listable, but not translatable and not a valid target for another
> plugin's rule. That is a legitimate state, not an error, and worth stating somewhere.

### 1.5 "Rule" appears in the contract but not in the model

**Origin:** `[B]` raised — how does `applies` work, why does it exist, and why is there a
concept called "rule" at all. `[C]` answered.

**`[C]`** The model has no such thing as a rule. A rule segment is a segment whose chain happens
to contain a `*` element or a formula container; it is discovered by the engine, never declared.
Naming it in the signature implies a category that storage, validation and listing all have to
agree on, and they currently do not.

**`[B]`** Asked why recurrence is not done by creating a container like `every.days.2` and
attaching the event to it, which would also make "which events recur every two days" answerable.

**`[C]`** That is already what the plan does: `every.days.2` **is** a container, its occurrence
sits under the start day, and the workout lives in that occurrence's cascade. Nothing about it
is special-cased. The reverse query works as an ordinary listing over occurrences of that
container — but only while the step stays inside the container id (`every.days.2`,
`every.days.3`) rather than becoming a parameter stored elsewhere. The "ghost" quality
Bilgehan is reacting to belongs to `derive` (§1.3, §3), not to `every`.

> **Claude, suggestion — not decided.** If `applies` becomes `contains(parent, target)`, the
> word "rule" leaves the contract, and engine step 3 reads: for every stored segment, ask
> whether it contains the target. "Rule" becomes a description, not a category.

---

## 2. Gregorian exposes only one direction

**Origin:** `[C]` raised. **`[B]` accepted** — "kaygıların yerinde", and asked for it to be
recorded in a report.

**`[C]`** `ordinal(chain) → number` answers every question of the form *is this day X?* — is it
a Tuesday, does it fall on the recurrence step, how far apart are these two. It answers none of
the form *which day is X?* — the 60th day of the year, 45 days after this, every Tuesday in a
window. Those need the inverse, `fromDayNumber` in `dates-and-recurrence.md` §4, which is
written but is not in the contract.

The plan's note that root-level `derive` is out of scope because "years are infinite, the engine
asks for a window later" is this same gap from the other side: a window query is an inverse
lookup over a range.

This does not bite in this round's tests. `contains` is enough to paint a month view, since a
month has 30 fixed cells to ask about. What has no fixed set of cells is "the next five
occurrences" and any agenda-style view. Those are the first things that cannot be built.

> **Claude, suggestion — not decided.** `locate(ordinal): Chain | null` on the contract,
> implemented for gregorian by the function that already exists. It also gives root-level
> windowing for free.

---

## 3. Derived occurrences have no identity

**Origin:** `[C]` raised. **`[B]` disputed the premise** — "şu anki sistemde türetilmiş bir
occurrence olabileceğini sanmıyorum bile; tüm segmentler bir ID sistemine sahip değil mi?"

**`[C]`** That disagreement is itself the finding. The engine returns synthetic entries as
`{ containerId, segmentId: null }`, and the plan's closing note records that "two identity
schemes stay: stored occurrences by segment id, derived ones by (owner, containerId)". So under
Bilgehan's reading a derived occurrence cannot exist, and under the engine's return type it must.
Both readings are defensible against the current plan, which is what makes this a contradiction
rather than a loose end.

Everything downstream inherits the ambiguity: what a link to an unmaterialised day points at,
whether a reference survives materialisation, and what `meta` and `engine` are keyed by in the
window between.

> **Claude, suggestion — not decided.** A computed id, `derivedID(owner, containerId)` — a pure
> function with no storage — leaves one identity scheme instead of two, which matches Bilgehan's
> reading that everything has an id. Materialising becomes inserting a row with the id it
> already had, so references taken beforehand stay valid and the transition stops being
> observable. The one-way rule (derived occurrences cannot carry data without becoming stored)
> is unaffected. `segmentId: null` disappears from the engine's output.

---

## 4. Exceptions have no representation

**Origin:** `[C]` raised. **`[B]` set the constraint on any solution.**

**`[C]`** "Every Tuesday, except 15 September" cannot be expressed. This is the most common
thing asked of a recurrence system and the plan does not mention it.

**`[B]`** The exception must be known to the system doing the generation. Leaving it to a path
segment is a problem: a hidden information hierarchy produces unexpected results.

**`[C]`** That constraint rules out the obvious implementation — a tombstone discovered under
the target during a scan — but does not by itself supply another one.

> **Claude, suggestion — not decided.** Hold the exclusion on the **rule occurrence** rather
> than the target: the rule's cascade already exists, the exclusion set lives beside it in
> engine data keyed by the rule's segment id, and `contains` consults it before answering true.
> Two consequences follow and both look correct — deleting the rule deletes its exceptions, and
> nothing outside the rule has to learn that an exception exists. Naming target occurrences in
> the exclusion set depends on §3.

---

## 5. There is no concept of length

**Origin:** `[B]` raised, in full, as a prototype-stage requirement.

**`[B]`** An event comes into existence and sits at a position, but how long it lasts is not
known. There is no span concept and no notion of an end. Computing length matters. One possible
shape: a cascade owned by the event, something like `span.dinner-party`, saying "I also continue
across these" — so a dinner party is not only at 16:30.

**`[C]`** Two consequences of the absence. No overlap or conflict can ever be detected, which is
the specific gap that motivated the project. And §6 is not expressible at all without it, since
"after A" requires A to have an end. This is a core gap rather than a plugin gap: it changes
what a segment is, so it cannot be added later purely as a plugin.

**`[C]`** On the `span.dinner-party` shape: it is uniform with the rest of the model and it
works, but stored as an enumeration a 90-minute meeting becomes 90 rows and a year-long all-day
event becomes 365.

> **Claude, suggestion — not decided.** Declare a length on an axis — `Extent = { axis, length }`
> — and compute the cover on demand, keeping the cascade shape available as a view rather than
> as storage. Both ends are then ordinals on one axis, so overlap and containment are
> subtraction. This adds no new machinery: "what does this event cover" is `members`, "does it
> cover that" is `contains`, so an extent is a new producer of the existing relation, not a
> fourth merge source. It does make §1.4 a prerequisite, since a minute-scale extent cannot be
> expressed on a day ordinal.

---

## 6. Dependent placement breaks the identity assumption

**Origin:** `[B]` raised, in full, with the motivating case.

**`[B]`** Two meetings in sequence: if the first starts late or runs late, the second becomes
impossible. Google Calendar was ruled out over exactly this. Can a path be dynamic — can a
container's position depend on another container's? It could be done through engine data with a
plugin, but the core needs some of it, because there is currently no span concept and no
end-of-thing logic, and that is now needed at prototype stage.

**`[C]`** It cannot be added quietly, because the model currently makes an occurrence's identity
*be* its position, the walk-up chain. `every`'s anchoring depends on exactly that. If a position
can be computed from another occurrence, position is no longer stable, so it can no longer serve
as identity.

**`[C]`** Whatever shape this takes drags in the following, each to be accepted deliberately or
the feature dropped:

- **Cycles.** A after B after A. Resolution must detect this and fail with a tagged error rather
  than loop.
- **Ordering.** Dependent segments must resolve in topological order.
- **Propagation.** Moving A moves everything downstream. Recomputing on read is adequate and
  costs nothing extra given the scan already in place.
- **Unsatisfiability.** B may resolve into a conflicting position. The system must report that
  rather than silently produce it — the payoff, but it means a listing can return a diagnosis
  and not only a list.
- **Anchor interaction.** `every`'s start is the ordinal of its own walk-up. If that walk-up is
  itself relative, the recurrence anchor moves when the anchor event moves. Probably correct,
  but it must be a decision with a test, not a side effect.

**`[C]`** Worth stating plainly: with §5 and §6 together, this stops being a calendar and becomes
a scheduler. That appears to be the intent, and it changes what "correct" means for the engine,
since a scheduler's listing must be able to say *this cannot happen*.

> **Claude, suggestion — not decided.** Separate identity from placement: the segment keeps a
> stable id, and its placement is either `{ kind: "fixed", chain }` or
> `{ kind: "relative", anchor, edge, offset }`. `walkUp` becomes a resolution step that may
> consult other segments; everything downstream still receives a chain and does not change. The
> four edge combinations plus an offset are the same model as project-scheduling dependency
> types (finish-to-start, start-to-start, finish-to-finish, start-to-finish, each with a lag),
> worth reading before fixing a vocabulary.

---

## 7. The day/hour binding is hard-coded

**Origin:** `[C]` raised. **`[B]` supplied the position that sharpens it.**

**`[C]`** Step 6 has gregorian derive `utc.hour.00..23`, so "a day contains hours, and those
hours are UTC's" lives inside gregorian's code. It also silently drops the earlier phrasing
`[gregorian, day] has 24 [utc, hour]`, which was a statement *about two namespaces*, not a fact
belonging to one of them.

**`[B]`** The goal is that people can use whatever date and time system they want, including
something atomic-clock based rather than UTC, and that translation between them is possible. A
calendar system may propose no day structure; part-swapping inside a framework is legitimate.
Plugins are also not prevented from taking data from outside.

**`[C]`** Under that goal, the alternative is currently reachable only by forking gregorian.

> **Claude, suggestion — not decided.** Hold the binding in the framework —
> `{ parent: ContainerID, child: ContainerID }` — consulted by `members` when it reaches the end
> of its own namespace. This restores the earlier phrasing as data. Allowing several bindings on
> one parent means a container has more than one valid subdivision at different resolutions,
> which is likely the mechanism cross-calendar translation ends up using.

---

## 8. Where the findings land in the plan

**`[C]`** Mapping only; no new claims.

| Step | Findings that touch it |
| --- | --- |
| 1 `containers.ts` | §1.1 — `pluginOf` as a routing primitive |
| 2 `path.ts` | none |
| 3 `cascade.ts` | none |
| 4 `store.ts` | §1.2 (validation is a containment question), §3 (identity), §6 (placement resolution) |
| 5 `plugin.ts` | §1.1–§1.5, §2, and the types §5 needs |
| 6 `gregorian.ts` | §1.4 (axes), §2 (inverse), §7 (binding) |
| 7 `utc.ts` | §1.4 — a minute axis is required, not `null`, once §5 lands |
| 8 `week.ts` | §1.4 — must request an axis by name rather than trust a bare number |
| 9 `every.ts` | §1.5 (keep the step in the id), §6 (anchor interaction) |
| 10 `engine.ts` | §3 (no `segmentId: null`), §1.5 (no "rule" category), §9.1 |
| 11 `main.ts` | fixtures for nested `*` and for an extent |

---

## 9. Unanswered

1. **`[C]` raised, `[B]` did not follow it** — needs restating before it can be decided. Two
   producers matching the same target have no defined order, so the same query can return two
   orderings. Concretely: if a Wednesday is claimed both by a `week.*/week.day.3` rule and by an
   `every.days.2` rule, the members contributed by each are appended in cascade order, but the
   order *between* the two rules is undefined. A tie-break has to be chosen and written down.
2. **`[C]`** Does an occurrence's extent have to be on the same axis as its placement? An event
   placed at a minute with a length in days is meaningful; allowing it implies a conversion
   layer.
3. **`[C]`** Is extent a property of the segment, or a separate record? On the segment is
   simpler; separate leaves the segment type untouched and matches how meta and engine data are
   already split.
4. **`[C]`** Does a relative placement resolve against the anchor's declared position or its
   resolved one? Only the second reading makes chained dependencies transitive.
5. **`[C]`** What does a listing return when a dependency is unsatisfiable — a list plus
   diagnostics, or a tagged failure? This decides the engine's return type, so it is cheaper to
   settle before step 10 than after.

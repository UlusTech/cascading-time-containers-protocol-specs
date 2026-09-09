# CTCP: Two Primitives and What Falls Out of Them

*A design report. Written to be inspected, not agreed with.*

This is my attempt to write down, in one place, the model I've been proposing for CTCP (Cascading Time Containers Protocol) across our conversation — what problems I think each piece solves, and where I'm making a choice rather than solving anything. Where I introduced something confusing (`local:dinner-party` is the obvious one), I've tried to explain it plainly and say what it is and isn't.

The constraint I'm working under, which I think is the right one: **the protocol has exactly two primitives — Containers (boxes) and Cascades (ordered lists).** Everything else has to be expressible as those two, or as a computation over them.

---

## 1. The primitives

### Container

A container is an identity. At rest, that is all it is: a name that other things can point at. It may *have* a cascade (things inside it), or it may not.

A container is a **definition**, not an occurrence. `gregorian:month` is one container. There are not twelve month containers per year — there is one, and it occurs twelve times per year. This is the "2025 doesn't exist, it's a name" idea from your talk, taken literally.

### Cascade

A cascade is an ordered list. Its position in the list is its only coordinate: index 0, 1, 2… Two things cannot be at the same position because a list has no such position. Order is meaning; in the time tree, order is time.

### Entry (what a cascade is made of)

A cascade is a list of **entries**. An entry is:

- a reference to a container (which definition is occurring here), and
- data that belongs to *this placement only*: a label, a description, a photo, a role.

The entry is what I earlier called a "segment" and what your talk calls an occurrence. It is **not a third primitive**. It's just what a list of containers looks like once you admit that the same container can appear in many lists and look different in each. If you want to say the protocol has two primitives, this is still true: a cascade is a list, and its elements happen to be (container, local data) pairs.

That's the whole static model. Everything below is either a rule for producing cascades, or a question you can ask about them.

---

## 2. Problem: we cannot store every minute of every year

**The problem.** If a day is a container with 24 hours inside, and an hour has 60 minutes inside, then materialising the tree means storing 525,600 minute rows per year, forever, for every calendar.

**The solution: cascades have two sources.**

A cascade is either

- **stored** — a literal list somebody wrote down: the four items of the dinner party, the contents of the shopping list; or
- **derived** — produced by a rule: the 12 months of a year, the days of a month, the 24 hours of a day.

Static data contains only stored cascades. An **engine** supplies derived cascades on demand and merges any stored entries into them. Without an engine you still have valid data — you just can't see the months, because nothing is there to compute them.

A rule is code (or declarative data — see §11) registered against a *container id*, saying what that container's cascade is:

```
cascade of gregorian:year  → 12 × gregorian:month
cascade of gregorian:month → N × gregorian:day, N depends on which month, which year
cascade of gregorian:day   → 24 × utc:hour
cascade of utc:hour        → 60 × utc:minute
```

The third line is your "`["gregorian","day"] has 24 ["utc","hour"]`" statement. It is one registration, contributed by whichever plugin cares (the utc plugin, probably). It is not a DB entry and never needs to be one.

Rules receive the **path** to the container, not just the container, because "how many days are in this month" depends on which year the month is in. The rule for `gregorian:month` looks up the tree to find the year index and answers 28 or 29 for February.

**What this does and doesn't solve.** It solves the storage problem completely: zero rows for time units. It does not, by itself, solve identity — see next section.

---

## 3. Problem: "30" is everywhere, and "every 9 is the same 9"

**The problem.** The path `year/2026/month/09/day/09/hour/01/minute/30` has two flaws. First, every "09" is a bare string; nothing in the data says the first is a month and the second a day. Second, minute 30 occurs once per hour, so "30" is not an identifier of anything specific.

Your first proposal was to make the id an array like `["utc", "minute", "30"]`. My objection was: that's not unique either (which hour?), and if it's not meant to be unique — if it means "the minute-30 slot in general" — then it's a *definition*, and that is exactly what a container is.

**The solution: split definition from address.**

- A **container id** names a definition. `utc:minute` is the id. The "30" is not part of the id at all.
- An **address** names one occurrence. It is the path of indices from a root:

```
gregorian:time / 2025 / 8 / 6 / 16 / 30
```

Read as: root container `gregorian:time`; entry at index 2025 of its cascade (a `gregorian:year`); entry at index 8 of *that* cascade (a `gregorian:month`, September because 0-based); index 6 (a day); index 16 (an hour); index 30 (a minute).

Every position in this path is *typed by the rule that produced it*. You never need to write "month" or "day" in the address because the year's rule says "my children are months". The "every 9 is the same 9" problem is gone because a 9 at depth 2 and a 9 at depth 3 are produced by different rules and are different kinds of thing.

**Labels are derived.** The plugin turns an index into a name: index 2025 → "2025" (or "2026" if the epoch is chosen differently, or "1447" in a Hijri plugin), index 8 → "September" or "Eylül". The name is presentation. The index is the coordinate.

**Nothing on this path is stored.** It is a pure coordinate. When you attach a dinner party to that minute, you store the party and you store the *address* — you do not create rows for 2025, September, the 6th, 16:00, or :30.

---

## 4. Problem: what does the part before the colon mean (`gregorian:`, `utc:`, `local:`)

This is where I made things worse, so let me be exact.

A container id has two parts: `namespace:name`. The namespace answers one question: **who defines this container?**

- `gregorian:year` — defined by the gregorian plugin. Any engine loading that plugin knows what this is and knows its cascade rule.
- `utc:hour` — defined by the utc plugin.
- `hijri:month` — defined by a hijri plugin, if one exists.

Now: the dinner party is also a container. Who defines it? No plugin does. It's defined by *this particular dataset* — your file, your database, your instance. It needs a namespace too, or else `dinner-party` could collide with a plugin's `dinner-party` some day. I wrote `local:dinner-party` to mean "a container this dataset defines for itself, no plugin involved."

That is all `local:` means. It is a placeholder for "the namespace of containers that aren't from a plugin". It could equally be:

- `own:dinner-party`
- `data:dinner-party`
- a content hash: `sha:8f3a2c…` — no human name at all
- or, if the protocol says plugin namespaces are reserved words and everything else is free, just `dinner-party` with no prefix

There is **no "user" concept** in this. I used the word "user" in an earlier draft and it was wrong for CTCP; the protocol doesn't know who made anything. The only distinction the protocol needs is *plugin-defined* (has a rule the engine can run) versus *dataset-defined* (stored, no rule). The namespace is how an engine tells which is which when it sees an id.

**Choose the spelling you like. The requirement is only that plugin containers and dataset containers can't collide, and that an engine can tell them apart.**

---

## 5. Problem: the same thing looks different in different places

**The problem.** Your talk: "Entry Talk" inside the dinner party's list is the same Entry Talk as the marker at 16:35 on the calendar. Only the position data differs. And two Entry Talks in the same party should be renameable independently ("Closing Words").

**The solution: meta lives on the entry, not the container.**

Because an entry is (container, local data), the same container can carry different labels, photos and descriptions in each place it appears. The container itself can hold *defaults* — a name to use when the entry doesn't override — but the entry wins.

This is why the entry has to exist as a concept even if it isn't a primitive. If meta lived on the container, "one container, many occurrences with different names" would be impossible.

---

## 6. Problem: placing an event in time

**The problem.** The dinner party runs from 16:30 to 18:10. Cascades are discrete lists; a minute doesn't have "width". How does an event with duration exist in a tree of instants?

**The solution: anchors.**

The party is a container with a stored cascade (Entry Talk, Entry Meal, Meal, Dessert). To put it in time, it appears as an entry in the time tree:

- an entry in the cascade at `gregorian:time/2025/8/6/16/30` with role `start`
- an entry in the cascade at `gregorian:time/2025/8/6/18/10` with role `end`

Its **extent** is whatever lies between its anchors. Something that occurs at one instant (a log line, a photo taken) has a single entry with role `at`.

Your XML had `point="start"` / `point="end"` attributes on the marker containers. I've kept exactly that idea and called the attribute `role`. You said the XML was visualisation and points aren't stored specially. I'd push back gently: *something* must be stored to distinguish "this container appears twice because it spans" from "this container appears twice because it repeats". A one-field role on the entry is the smallest thing that does it.

**Precision is the depth of the anchor.** An anchor at minute depth is minute-precise. A log system whose plugin derives nanoseconds under seconds can anchor at nanosecond depth. A historical record that only knows the year anchors at year depth. Same mechanism; the tree just goes as deep as the plugin defines.

---

## 7. Problem: things without a time

**The problem.** "Milk" in the shopping list has no time. But you bought it during a shopping trip, and the trip is anchored. Entry Meal has no anchor, but it's between Entry Talk and Meal inside a party that has an extent.

**The solution: the engine infers extents from structure.**

An un-anchored entry's extent is bounded by:

1. the extent of the container it's inside (the parent's anchors), and
2. its neighbours in that container's cascade — it comes after the previous entry's extent and before the next entry's.

"When did I buy milk?" → milk has no anchor → its parent (the shopping trip) is anchored at 20 Sep 19:48 → answer: during that trip. "When is Entry Meal?" → after Entry Talk ends (16:40), before Meal starts (whenever that's anchored), within the party (16:30–18:10).

This is derivation running upward and sideways instead of downward. It's the same engine, answering the same kind of question ("what is the extent of this entry?") with a different strategy when no anchor is present. Nothing extra is stored.

---

## 8. Problem: recurrence

**The problem.** "Day 5 at 09:00 of *any* month." "Every second year." "Every year ending in 0."

**The solution: a pattern is a path with holes.**

```
gregorian:time / * / * / 4 / 9          → day 5 at 09:00 of every month of every year
gregorian:time / (n → n % 2 == 0) / …   → every second year
gregorian:time / (n → n % 10 == 0) / …  → years ending in 0
```

A pattern is an address where some indices are a wildcard or a predicate. The engine expands it lazily when asked ("what's in October 2026?"), never eagerly.

The reason I like this: it is the *same mechanism* the plugins already use. "A year has 12 months" is a pattern the gregorian plugin owns. A person writing "every second Tuesday" is writing a pattern one level up. The difference is authority, not kind.

---

## 9. Problem: calendars are plugins, and people use different ones

**The problem.** Someone wants 13 months. Someone wants year 0 to be 2000. Someone in another country uses a different calendar entirely. Their data should be viewable in yours and vice versa.

**The solution: a calendar plugin is four things, one optional.**

1. A set of container ids it defines (`hijri:year`, `hijri:month`, …).
2. Cascade rules for them (§2).
3. A labeller: index → display name.
4. *Optionally:* a mapping to and from a shared linear **axis**.

The axis is an integer count of some unit since some epoch — nanoseconds since a fixed instant, say. Converting a gregorian address to a 13-month address is `gregorian.toAxis(path)` followed by `thirteen.fromAxis(value, depth)`. Data anchored in one calendar is *viewed* in another at render time. Nothing is re-stored.

Plugins that skip the axis are still valid. A "reigns of Ottoman sultans" chronology, or a game's in-world calendar, is a perfectly good tree with no absolute time. It just can't be converted to anything else, which is honest: it genuinely can't.

**What I'm claiming:** the protocol shouldn't mandate a time model. It should offer one optional meeting point (the axis) and let plugins decide whether to meet there.

---

## 10. Problem: engine versus static data

**The solution:** the split is clean once §2 is accepted.

**Static data** is: stored containers (ids plus default meta) and stored cascades (an owner address, an ordered list of entries). Stored cascades are keyed by the *address* of their owner. The owner needs no row — `gregorian:time/2025/8/6/16/30` can own a stored cascade containing the dinner party's start anchor, and no row for that minute exists anywhere.

**An engine**, given static data plus a set of plugins, can:

- `resolve(address)` → the entry there, deriving as needed
- `list(address)` → the cascade there: derived entries plus stored entries, in order
- `expand(pattern, within)` → concrete addresses matching a pattern
- `extent(address)` → start/end, anchored or inferred (§7)
- `convert(address, toPlugin)` → the same instant in another calendar (§9)

Clients talk only to an engine. A client showing a calendar view asks `list` for a month and gets days; asks `list` for a day and gets hours plus whatever events are anchored in them.

**Scheduling is a plugin.** Your "availability to work" container — holding sleep, meals, other work, all with extents — is ordinary data. A scheduler plugin reads extents, finds gaps, and *writes anchors* for un-anchored tasks so they don't overlap. "Tidy the flat, open-ended, whenever I'm free" is an un-anchored entry that a scheduler resolves into an anchored one. Nothing about it is in the core.

---

## 11. Expressing rules as data, not code

You said the "day has 24 hours" statement doesn't need to be a single DB entry but there should be a logic. I've described rules as code. They could instead be declarative, which would make them shareable between engines in different languages:

```json
{ "owner": "gregorian:day",  "child": "utc:hour",   "count": 24 }
{ "owner": "utc:hour",       "child": "utc:minute", "count": 60 }
{ "owner": "gregorian:year", "child": "gregorian:month", "count": 12 }
{ "owner": "gregorian:month","child": "gregorian:day",
  "count": { "fn": "gregorian.daysInMonth", "args": ["$path[-1]", "$path[-2]"] } }
```

Constant counts are pure data. Variable counts reference a named function the plugin must provide. This keeps the *shape* of the tree in the protocol and only the arithmetic in code. I think this is where a real protocol spec would land, but I'm noting it as a direction, not something I've worked through.

---

## 12. The whole thing, as types

```ts
// ── static ────────────────────────────────────────────────────────────────
type ContainerId = `${string}:${string}`;   // namespace:name  (§4)
type Address = [ContainerId, ...number[]];  // root, then indices  (§3)

interface Container { id: ContainerId; meta?: Meta }        // defaults only

interface Entry {
  container: ContainerId;
  role?: "at" | "start" | "end";            // §6; only matters in time cascades
  meta?: Meta;                              // §5; overrides container defaults
}

interface StoredCascade { owner: Address; entries: Entry[] }   // §10

type Pattern = [ContainerId, ...(number | "*" | ((i: number) => boolean))[]];  // §8

// ── plugins ───────────────────────────────────────────────────────────────
interface Plugin {
  namespace: string;                        // "gregorian", "utc", "hijri"
  containers: ContainerId[];
  cascade?(owner: ContainerId, at: Address): Entry[] | null;   // §2 derived cascades
  label?(owner: ContainerId, index: number, at: Address): string;
  toAxis?(at: Address): bigint;             // §9, optional
  fromAxis?(t: bigint, depth: number): Address;
}

// ── engine ────────────────────────────────────────────────────────────────
interface Engine {
  resolve(at: Address): Entry;
  list(at: Address): Entry[];               // derived + stored, ordered
  expand(p: Pattern, within: Address): Address[];
  extent(at: Address): { start?: Address; end?: Address };
  convert(at: Address, to: string): Address;
}
```

---

## 13. The dinner party, end to end

Static data, in full:

```json
{
  "containers": [
    { "id": "own:dinner-party", "meta": { "name": "Dinner Party" } },
    { "id": "own:entry-talk",   "meta": { "name": "Entry Talk" } },
    { "id": "own:entry-meal" },
    { "id": "own:meal" },
    { "id": "own:dessert" }
  ],
  "cascades": [
    { "owner": ["own:dinner-party"],
      "entries": [
        { "container": "own:entry-talk" },
        { "container": "own:entry-meal", "meta": { "name": "Entry Meal" } },
        { "container": "own:meal",       "meta": { "name": "Meal" } },
        { "container": "own:dessert",    "meta": { "name": "Dessert" } }
      ] },

    { "owner": ["gregorian:time", 2025, 8, 6, 16, 30],
      "entries": [ { "container": "own:dinner-party", "role": "start" } ] },
    { "owner": ["gregorian:time", 2025, 8, 6, 16, 35],
      "entries": [ { "container": "own:entry-talk",   "role": "start" } ] },
    { "owner": ["gregorian:time", 2025, 8, 6, 16, 40],
      "entries": [ { "container": "own:entry-talk",   "role": "end" } ] },
    { "owner": ["gregorian:time", 2025, 8, 6, 18, 10],
      "entries": [ { "container": "own:dinner-party", "role": "end" } ] }
  ]
}
```

Nine rows. No year, month, day, hour or minute exists in storage. Questions an engine answers from this:

- *What's on the calendar at 16:30?* → `list(["gregorian:time",2025,8,6,16,30])` → the derived 60 seconds (if the plugin goes that deep) plus the stored entry: dinner party starts.
- *When is Entry Meal?* → `extent(["own:dinner-party", 1])` → no anchor; parent extent 16:30–18:10; previous sibling ends 16:40; next sibling has no anchor either → "between 16:40 and 18:10".
- *Show this in a 13-month calendar* → `convert` each anchor via the axis.
- *Rename the Entry Talk that's on the calendar but not the one in the party's list* → set `meta` on the entry at 16:35; the entry at `["own:dinner-party", 0]` is untouched.

---

## 14. What I have not solved

**Where anchors are stored — path or axis?** Storing `start` as a gregorian address is faithful to "calendars are plugins" but makes the data depend on the gregorian plugin being present to read it. Storing it as an axis value is calendar-neutral but makes the axis mandatory. I lean toward storing the address the author actually wrote, tagged with the plugin, and converting on read. This is a choice, not a solution.

**Order of stored entries inside a derived cascade.** If two events are both anchored at 16:30, which comes first in `list`? Stored order, presumably — but then the stored cascade owns a sub-ordering within the minute that the time tree doesn't express. Probably fine; noting it.

**Role vocabulary.** `at` / `start` / `end` covers events. Investigations ("seen at", "left at", "last known") and logs might want more. Whether that's a fixed enum or open strings is undecided.

**Naming.** `own:` vs `local:` vs hash vs no prefix (§4). I have no preference beyond "don't collide with plugins."

**Whether `Entry` needs its own id.** Right now an entry is addressed by position. If you need to point at a *specific entry* from outside (a comment on the 16:35 marker), position is fragile under reorder. Stored entries could carry an optional stable id; derived ones can't and shouldn't.

---

## 15. Summary of claims

| Problem | Mechanism | Stored? |
|---|---|---|
| Infinite time units | Derived cascades via plugin rules | No |
| "30" isn't unique | Container = definition; address = path of indices | No (address is a coordinate) |
| "Every 9 is the same 9" | Positions typed by the rule that produced them | — |
| Same thing, different names | Meta on the entry, not the container | Yes, per entry |
| Events have duration | `start`/`end` anchors in time cascades | Yes, one entry per anchor |
| Things with no time | Extent inferred from parent and siblings | No |
| Recurrence | Patterns = addresses with wildcards/predicates | Yes, the pattern |
| Many calendars | Plugins; optional shared axis for conversion | No |
| Static vs live | Static = containers + stored cascades; engine adds the rest | — |
| Scheduling, availability | A plugin that reads extents and writes anchors | Yes, its output |

If any row of that table looks wrong to you, that's the row to attack.

# CTCP — The Span Problem

**Session report — 18 September 2026**

**How to read this document.** Everything in normal text is Bilgehan's — his
design, his diagnosis, his constraints, his rejected options. Everything in a
`>` blockquote marked **[Claude proposal — not decided]** is Claude's
suggestion. Those blockquotes can be deleted without touching anything else in
this document. Nothing in them has been accepted.

If this file is handed to another AI session: do not fold the blockquoted
proposals into the design. They are external suggestions awaiting judgement.

---

## 1. The problem in one sentence

CTCP currently has no way to express **how long a thing is**.

A cascade is an ordered list. Ordering answers "what comes after what". It does
not answer "how much", "how far apart", or "how big". Length — span — is absent
from the model, and every feature that depends on it is therefore impossible.

---

## 2. Statement of the problem as originally given

- CTCP does not have its necessary span logic right now.
- The span logic that previously existed stored pointers to containers as
  **start** and **end**. That approach is considered not workable.
- The reason it breaks is structural: CTCP is **not** a normal single
  delta-based line. It is a **tree-like system**. The cascade's flat array shape
  does not naturally introduce a span concept.
- What is needed is a new data / numerical system that can express **the span of
  a container on a cascade** — and not only on a cascade, since cascades are
  containers too.
- The length must be expressible **as data**, but **without writing exact time
  numbers**, because the system is dynamic.
- Current failure mode: a single container can be placed on a single container
  and can only be there. If the same container is placed on other containers /
  cascades, it does not mean anything.

---

## 3. What was abandoned, and why

### 3.1 The old model

Positions used to be stored as data inside the container:

> "this container is inside that container, at this position"

This gave real expressive power. Worked example, as given:

- There is an **Entry Talk** (giriş konuşması).
- The Entry Talk lasts ten minutes.
- It was possible to say, as a stored position, **between which minute
  containers** of the clock system it sits.
- **Important:** those minute containers obey the exact same container logic.
  Time itself is containers in CTCP. This is not a separate mechanism.
- So an **interval** was expressible: a start and an end.

### 3.2 Why it was dropped

**Drift.** When you keep, as pure data, the fact that something sits between
point X and point Y, you have to keep verifying it:

- Is this still correct?
- Is that still correct?
- Did something get added, and did this silently shift?

Because the data can drift and slide, constant checking is required, so the
approach was let go.

### 3.3 Reassessment

This may have been a mistake. The engine runs continuously in the background
anyway, so it is possible that the drift concern did not need to be avoided at
the data level at all.

### 3.4 Current state

In the current system:

- An interval cannot be expressed at all. **This is the core problem.**
- Separately, there is the **relation** problem: one thing's position needs to
  depend on another thing's position. There is no confidence that this is
  expressible today either.

---

## 4. Why this matters — the concrete scenario

Given as the motivating case:

1. A meeting runs ten minutes long.
2. It pushes the next meeting. Fine — that much happens.
3. But the next meeting perhaps **had to end by midnight**.
4. Because of the delay, there is now a time problem.
5. A system in the background should **detect and evaluate** this.

That background system should be able to ask, on its own:

> "Should we cancel this? It is going past midnight."

And the evaluation should not necessarily be a hard true/false. It could be a
**score** — how cancellable is this, how much should it be cancelled, on what
basis. Something should be computed in the background.

**None of this is buildable, because there is no length concept.**

What happens today instead: a container can only push another container **inside
a container**. When you put two containers inside the same minute, they push each
other because logically they cannot occupy the same position.

But it is meaningless:

- Push it and then what?
- Push it **where**?
- Push it **how**?

There are no answers to these questions.

### 4.1 Clarification on what does exist

There **is** a position concept. There **is** a delta concept. There are several
properties of this kind assigned to the calendar frame.

But those do not carry the **general span concept** that CTCP needs internally.
The length concept is entirely dead. It has to be brought back somehow.

---

## 5. The two candidate directions

### 5.1 Length as a cascade

If a thing's length is held as its own separate cascade, then it can say **which
times it occupies**:

> minute 10 — yes
> minute 11 — yes
> minute 12 — yes
> minute 13 — no
> minute 14 — no
> minute 15 — yes
> minute 16 — yes

This gives something valuable: **the exclusion concept becomes easy**. "Not
present at this time" is directly expressible — the minute's ID is simply not in
the list.

That gap can also be produced by **prediction / computation**, not only by hand.
The minute does not have to be added to the container manually. From a UI
standpoint it renders a scenario where the event is absent during minute 13.

### 5.2 Length as a reference number

A reference-number concept still feels necessary alongside the cascade approach.

Reason: if it is done purely as cascades, then for **every single thing's
length** you are storing an additional cascade. Counting a reference between one
thing and another is a solution in itself, and can also be read as an
**optimization**.

### 5.3 The tension

It does not have to be thought of strictly as stored data. The span concept has
to be **introduced into the system** somehow — and the specific data types
currently in hand can be changed to do it.

But if it is expressed in the cascade concept:

- Exclusion works well.
- One cascade is stored per span.
- Cascade members can no longer be plain container IDs — they become **objects
  that carry an ID** plus a size/width.

And that last point returns to **the old data type**. Previously, the position
inside a cascade was stored inside that cascade. So this route arrives back where
it started.

---

## 6. Rejected: absolute units

An absolute unit is definitively out.

- It kills the calendar concept and several other parts of the design.
- It creates paradoxical data references: a box being one unit big in one place
  and two units big inside another box.

Set aside. Not a candidate.

---

## 7. The model actually put forward

This is Bilgehan's own construction.

A cascade holds **two kinds of data**:

1. Containers
2. Gaps (boşluklar)

When a cascade is formed, it may contain both kinds, **in any order**.

Worked example, as given:

- There is an eating action.
- There is a gap between it and the next thing.
- The next thing is computer use.

All of this is shown inside **one single cascade**, and there is no other data —
as expected.

Mechanically:

- The gap between eating and working is placed into the cascade's array **as an
  object**.
- Eating and working are **also** objects.
- The object states which container it points to, and it states its **size**.

So in reality **one single object type is stored**:

- One variant has an ID.
- One variant does not.
- **Both carry a size / magnitude / width value.**

These are what cause each other to be pushed.

**What this buys:** the distance between things and the size of a thing can be
expressed **without the drift concept** — that is, without the numbers being
directly bound to each other.

**Caveat as stated:** it is not yet known what exactly this solves. The focus
should stay on solving the span concept.

### 7.1 This is already in the repository

`src/runtime/cascade.ts` in
`cascading-time-containers-protocol-specs` already contains exactly this:

```ts
type CascadeChildiren = { size: number } | { size: number; id: ContainerID };

export type Cascade = { parent: ContainerID; childiren: CascadeChildiren[] };
```

The size-bearing member, the ID-less gap variant, the single object type — all
written. The model described in conversation is not new work; it exists in code.

### 7.2 Revision made during the session

Proposed by Bilgehan, replacing `ContainerID` with `PathSegmentID`:

```ts
type CascadeChildiren = { size: number } | { size: number; id: PathSegmentID };

export type Cascade = { parent: PathSegmentID; childiren: CascadeChildiren[] };
```

Effect: a cascade member stops being a *container* and becomes an *occurrence*.
This matters for span, because length then belongs to the occurrence rather than
to the container — the same container can have different lengths in different
places, at the type level.

---

## 8. Relativity, and where it breaks

### 8.1 How magnitudes are meant to work

A thing can be size 1, size 10, or size 1000. The value acquires meaning
**contextually, within the cascade**.

Example as given:

- "Something I will do that day" is size 10 within that day.
- Size 10 does **not** have to be read in terms of hours, minutes, seconds, or
  anything else.
- A work event of size 2, an eating event of size 1 — one is simply bigger than
  the other. It exists to depict proportion.
- There is no absolute number.
- If a gap is size 10 and the others are size 1 and 2, this means the gap between
  them is as large as ten eating actions, or five work actions.

There is a **relation / relativity concept internal to the cascade**.

Open question raised at the time: what will this actually be good for? Depiction
of the gap works, yes — but to what end?

### 8.2 One possible use

- Put an action inside a minute container.
- That action is in a relation, by those epic-or-small numbers, with other things
  relative to the whole container.
- So the numbers effectively describe **where inside that minute** they sit.

### 8.3 Where it breaks — the seconds problem

But: how will a second be represented?

When saying where a thing is in time, you are talking about the **sub-units
within a unit**. A box being size 1000 — where does that land in seconds? What
about the gap before it, the gap after it, where is it relatively?

The position inside a minute cannot be converted to seconds. The position inside
an hour cannot be converted to minutes.

Partial retraction as stated: there may be no such demand in the first place.

### 8.4 The deeper reason this bites

The reason CTCP has no unit concept is that **the units were turned into
containers**. Containers themselves therefore carry unit-like meaning.

Consequence: a container being size 1000 is normally nonsense. A container's size
should be **as large as the seconds beneath it**. That is what actually
constitutes the container's size and the positions within it.

If seconds are wanted, seconds must be knowable.

**So the situation is: the units — the thing that forms the timeline — were
converted into containers, and the system is currently only able to state a
position within a single unit.**

---

## 9. The overflow wall

This is the hard structural blocker.

A minute is a box. If your position is inside the minute, **you cannot cross from
minute 1 to minute 2.**

To cross from minute 1 to minute 2, your position **within the hour's cascade**
must also change. Then:

- Crossing between hours → happens within the day.
- Crossing between days → happens within the month.
- Crossing between months → years.
- And upward.

A one-week event must traverse those days, that week, that month. This has to be
representable **as data**.

The **delta** concept was introduced for exactly this. But that was the
framework's business, not the protocol's.

Concrete statement of the wall:

> To represent an event that starts on the 6th of the month at 16:00 and ends on
> the 6th of the 7th month at 15:00, you have to put that container one level
> below the hour cascade. How is a thing beneath the hour cascade supposed to
> exceed that hour?

And: it cannot push the other elements inside it.

### 9.1 The unit-propagation trap

A base-unit concept is not needed for all containers. It is needed only for
**time containers** — calendar containers.

But if a unit logic is placed on calendar containers, then a unit logic also has
to be given to the sub-events beneath, e.g., the eating event.

**Assessment as given: this is where it falls apart.**

---

## 10. The real obstacle: representation

The concept can be stated. There are a few sensible answers on the table. What
matters is **how to represent them in writing**:

- TypeScript types
- Storage in the database
- Processing at runtime

"Advance N sub-units from this point" is an understandable idea, but there is no
known way to show it as data. A cascade states the position of containers. It
cannot state which positions something occupies *within* a container.

Two blockers on the old route:

1. The drift problem.
2. Engine philosophy: the engine is meant to continuously perform mathematical
   operations on containers and push them. Going to the container for every
   single operation is **not optimized**.

---

## 11. Path / Segment — the prior good idea

Recalled during the session as one of the design's strong points.

The Path/Segment concept worked like this:

- Position information was **shared** between cascades rather than being rebuilt
  as a full path every time.
- A task on, e.g., the 16th day of the 16th month shared an ID with other tasks
  on that same day, because they are on the same day.
- This suited database storage well.
- The path was split into segments.
- Because of that splitting, a container could exist in **several different
  places** — a container could have several different position segments, and the
  same container could be reused again and again.

Assessment: this was one of the design's great pieces.

### 11.1 Current state in the repo

`src/runtime/path.ts` exists and carries unresolved notes written in place:

- Module doc: paths are stored separately in the DB — "Why? Not sure as im
  writing this."
- `PathRecord.containerSegment`: was `ContainerID`, then switched to storing the
  segment; "do we have it in the `segments`? I dont know if this makes sens but
  we need this for indexin? idk."
- `ContainerPath`: since segments have their own IDs, paths should now be made up
  from segment IDs — but that is not user friendly and not easy to use on other
  systems. Carries an explicit `TODO: Fix this segment crysis.`

So segment reuse works, but whether a path is built from segment IDs or container
IDs is undecided.

---

## 12. Other repository findings

Findings only. No fixes applied.

- `src/runtime/engine/engine.ts` is **empty**. `src/runtime/runtime.ts` is
  **empty**. There is no place yet to test the "the engine computes the end, it
  is not stored" idea. `StoreTable.Engine` exists in storage with nothing writing
  to it.
- `Container` is nearly empty. Its `childirens` and `parents` fields are marked in
  their own JSDoc as "I dont plan to use this, they sit here dummy". The real
  structure lives in cascades; the container is effectively just a name.
- `size: number` has **no unit attached anywhere in the type system**. As written,
  it can be read either as a relative share or as a count of minutes. These are
  different things and the code does not distinguish them. This is precisely the
  gap discussed in §8.
- There is **no hook for overflow**. `Cascade` has a `parent` and its members live
  inside that parent. A member cannot leave its parent, because no field says so.
  The type is the wall described in §9.
- Spelling inconsistency: `Cascade.childiren` vs `Container.childirens` — two
  different misspellings. This will break greps later.
- Storage is in-memory only, with tables for Container, Segment, Path, Cascade,
  Meta, Engine.
- `ROADMAP.md` is three lines and contains no span material.

---

## 13. Claude's proposals

> **[Claude proposal — not decided]**
>
> **Layer separation.** The measure (a number plus a unit reference) is the
> stored truth; the cascade is what the engine derives from it. Under this
> reading the number is not stored as a cascade — it *generates* one. The two
> candidates in §5 are then not rivals but layers.

> **[Claude proposal — not decided]**
>
> **Option A — span as a field on the segment.**
>
> ```ts
> type Span = {
> 	level: ContainerId   // what we count in: "utc.minute.*"
> 	amount: number       // how many steps
> }
>
> type Segment = {
> 	containerId: ContainerId
> 	cascadeId: CascadeId
> 	span?: Span          // absent: point-like, or inherited from parent
> }
> ```
>
> Strengths: length sits on the occurrence, so the same container can have
> different lengths in different cascades. The end is **computed, not stored**,
> so there is no drift. Because counting is in terms of `level` rather than of
> the containing box, exceeding the box is not a problem — "400 at minute level"
> does not care about the day boundary. This is a direct answer to §9.
>
> Weakness: **no holes.** "Absent at minute 13" is inexpressible, because the
> span is a single contiguous amount. It loses what §5.1 buys.

> **[Claude proposal — not decided]**
>
> **Option B — span as a container in its own right.**
>
> ```ts
> type SpanContainer = {
> 	id: ContainerId        // "span.entry-talk.0"
> 	of: SegmentId          // whose occurrence's length this is
> 	members: ContainerId[] // unit containers occupied; absent = gap
> }
> ```
>
> Strengths: holes and exclusion come for free — a unit not in the member list is
> a gap. The span is itself a container, so it is queryable and reusable, which
> fits the "cascades are containers too" position in §2.
>
> Weakness: a one-week event at minute precision is tens of thousands of members.
> And when the event shifts, that list must be regenerated — which reintroduces
> the drift work through a different door.

> **[Claude proposal — not decided]**
>
> **Hybrid leaning.** A is the stored truth; B is written only when an exception
> exists. If there is no hole, no `SpanContainer` row exists at all and the engine
> derives occupancy from A. If there is a hole, a B row is opened for that
> occurrence and overrides A. Normal events cost two fields; holed events cost a
> full list.

> **[Claude proposal — not decided]**
>
> **Minimal repo change.** Rather than replacing the existing cascade type,
> widen `size: number` to `{ level: ContainerID; amount: number }`. The gap
> variant stays as-is and the cascade's shape does not change, so Option A enters
> the repo with zero structural breakage.

> **[Claude proposal — not decided]**
>
> **Membership as the natural home for span.** Cascade membership currently
> carries only an ID. Both a thing's own size and the gap before it live exactly
> there — they are the same kind of number, one being inside-the-box and the
> other between-boxes. If membership is a relation object, both become
> expressible in one place. (Note: the repo already does this, per §7.1 — this
> proposal was made before the repo was read, and is largely already satisfied.)

---

## 14. Open questions

These are unresolved. The first is the one that closes span.

1. **What is `size` counted in?** There is currently no field in the type that
   says. Until this is answered, §8 and §9 both stay open.
2. Which of A or B (or neither) is the centre, and which is the exception?
3. How is `level` resolved at runtime?
4. What is the type of the gap member under whichever model wins?
5. Does `Cascade.parent` stay mandatory? A one-week event's cascade — does it sit
   under the day, under the week, or is it a parentless cascade?
6. Is the hole ("absent at minute 13") authored data or computed output? Both
   were said to be possible; the model has to state which is canonical.
7. The relation problem (§3.4): one container's position deriving from another's
   end. Not addressed this session beyond being named.
8. The `segment crysis` in `path.ts`: are paths built from segment IDs or
   container IDs?

---

## 15. Summary

The span concept is dead in CTCP and has to be brought back. Absolute units are
ruled out. The cascade-with-sized-members model — containers and gaps as a single
object type carrying size — is the standing proposal, and it is already written in
`cascade.ts`. What is missing is not the shape but the **unit**: nothing in the
system says what a size is counted in, and because of that, a span cannot cross
the boundary of the box it sits in. That crossing — minute to minute, hour to
hour, day to week — is the wall. The obstacle is no longer conceptual but
representational: TypeScript types, database rows, runtime processing.

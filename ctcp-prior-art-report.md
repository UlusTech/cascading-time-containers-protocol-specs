# CTCP — Prior Art Report

**Date:** 2026-09-11
**Question:** Does anything close to CTCP already exist? Is "iCalendar but dynamic" already taken?

---

## How to read this document

This report may be handed to another session or another person. Authorship is marked throughout:

| Marker | Meaning |
|---|---|
| **[B]** | Bilgehan's design position. Part of CTCP. Not up for reinterpretation. |
| **Finding** | External prior art. Researched, sourced, verifiable. Neither his nor mine — it's what exists. |
| `>` blockquote marked **Claude — not decided** | My own proposal, reading, or opinion. Not part of CTCP. Discard freely; discarding it does not touch the finding above it. |

Nothing in the Findings sections is a design proposal. Where I have an opinion about what a finding *means* for CTCP, it is in a blockquote.

---

## 0. Summary

Nothing exists that does what CTCP is trying to do. But the claim "iCalendar is old and singular-event-shaped, we can do better" is **no longer a differentiator**, because the IETF has been actively replacing iCalendar's data model since 2021 and three of CTCP's headline features — hierarchy, dependent placement, and federated negotiation — already exist as published standards.

The honest landscape:

- **Format** — occupied. JSCalendar 2.0 is in active draft as of July 2026.
- **Relations / dependencies** — occupied on paper. RFC 9253 (2022) defines finish-to-start style dependencies with lead/lag gaps.
- **Federated negotiation** — occupied on paper since 1998. iTIP's COUNTER method is exactly "can we push this 30 minutes?"
- **Pluggable calendars** — partially occupied, and actively *retreating*. TC39 removed custom calendars from `Temporal` in 2024.
- **Runtime that resolves all of the above** — **empty.** No one ships an engine. Every standard describes relations and leaves resolution to the client.
- **Time as an addressable namespace** — **empty.** No prior art found.
- **Containment as the sole primitive** — **empty.** Every standard bolts each feature onto an event object separately.

> **Claude — not decided:** my read is that the strongest CTCP positioning is not "better than iCalendar" but "the engine layer nobody built." The specs below are, in several cases, better designed than their adoption suggests; they failed on implementation, not on modelling. That is a different competitive problem and I think it changes what the pitch should emphasize. Discard if the framing isn't yours.

---

## 1. The format slot is occupied

### Finding: JSCalendar is the IETF's own iCalendar replacement

JSCalendar (RFC 8984, published July 2021) defines a calendar data model and JSON representation intended as an alternative to, and over time a successor to, iCalendar. Explicitly **not** a syntax mapping of iCalendar — unlike jCal, it defines the data model independently and expands semantics where the authors judged it necessary. The stated motivation is that iCalendar contains ambiguities and pitfalls that cannot be fixed without backward-incompatible changes: multiple formats for local/UTC/date values, per-component timezone definitions, and parser divergence over CRLF line folding.

Authored out of Fastmail. Multiple implementations existed before publication.

### Finding: JSCalendar 2.0 is in active draft right now

`draft-ietf-calext-jscalendarbis` — latest revisions dated July and September 2026 — defines version 2.0 and **obsoletes RFC 8984**. Stated aims: better interoperability with existing iCalendar-based systems, and alignment with JSContact on registry policy, validation and versioning.

Notable for CTCP: 2.0's object model has Event, **Task** (with `due`, `estimatedDuration`, `percentComplete`, `progress`), and **Group** (with `entries`, `source`). So tasks-with-duration and grouping are in the base model, not extensions.

### Finding: there is a sync protocol and a conversion spec alongside it

- `draft-ietf-jmap-calendars` (rev 24 Sept 2025, rev 28 Aug 2026) — JMAP for Calendars. Client/server sync of JSCalendar objects, push notifications, sharing, multi-user change tracking. Servers can expand recurrences server-side for simple clients and convert to UTC so the client never touches timezone logic.
- `draft-ietf-calext-jscalendar-icalendar` (Sept 2026) — bidirectional conversion, with explicit lossy and lossless modes.

### What this means against CTCP's stated target

**[B]** The explicit target is to beat iCalendar: iCal has no natural way to express cascading containers and treats every event as singular.

The first half of that holds against JSCalendar 2.0 as well — it is still an object-per-event model with a `recurrenceRules` field, not a containment model. The second half is weaker than it was: JSCalendar already fixed the ambiguity, parser and timezone complaints, and JMAP already moved recurrence expansion server-side.

> **Claude — not decided:** the comparison table in any CTCP writeup should be against **JSCalendar 2.0 + JMAP + RFC 9253**, not RFC 5545. Comparing against 1998 iCalendar will read as not having checked, to exactly the audience (calext/CalConnect people) who'd otherwise be the best early readers.

---

## 2. Dependent placement already exists as a standard

**[B]** CTCP wants dependent placement — one container's position derived from another's end ("technical meeting = marketing meeting end + 10 min"). The missing dependency between events is the reason Google Calendar didn't work for him.

### Finding: RFC 9253, "Support for iCalendar Relationships" (2022)

Extends `RELTYPE` on the `RELATED-TO` property with the four project-management temporal relationships: **FINISHTOSTART, FINISHTOFINISH, STARTTOFINISH, STARTTOSTART**. The relationship lives on the predecessor and points at the successor.

Adds a **GAP** parameter carrying a duration: positive = lag, negative = lead. The spec's own example is painting a room, then a one-day gap for the paint to dry, then laying the carpet. Lead example: a negative gap so two tasks finish together.

Also in the same RFC:

- `RELTYPE=PARENT` / `CHILD` / `SIBLING` — hierarchy, though the value type must be UID for these, for backwards compatibility.
- `RELTYPE=DEPENDS-ON` — a component this one is blocked on.
- **REFID** — a new property letting arbitrary groups of components share a key, so components related to an aggregating component can be retrieved by that key.
- `RELATED-TO` extended to accept URI values, plus `LINKREL` and XML-reference value types.

So: hierarchy, dependency with lead/lag, and arbitrary keyed grouping are all expressible in iCalendar today.

### Finding: adoption is thin and lossy

`ical4android` (the library behind DAVx5) collapses unknown RELTYPEs to `PARENT`, per RFC 5545 §3.2.15's forward-compatibility rule — which makes it **incompatible with RFC 9253** and can silently destroy relationship data on round-trip to a server. Open issue, unresolved. The `collective/icalendar` Python library has an open issue for implementing 9253 at all.

Where 9253 *is* implemented it is mostly in task tools rather than calendars — e.g. TaskNotes (Obsidian) stores `blockedBy` entries with `reltype` defaulting to FINISHTOSTART and an optional ISO-8601 `gap`.

### The actual gap

RFC 9253 records the relation **as metadata**. Nothing in the spec says a server or client must compute Task-B's position from Task-A's end. There is no defined resolution semantics, no conflict rule, no re-cascade on change. That work is left entirely to the implementation, and essentially no calendar implementation does it.

> **Claude — not decided:** this is the single most important finding in the report. The idea CTCP treats as its differentiator is *specified*; what's missing is the **engine that evaluates it**. If that's right, the CTCP line is "9253 wrote down the relation and stopped; CTCP resolves it" — which is a claim about runtime, not about format, and it lines up with your three-way split (format / storage / runtime). Yours to accept or throw out.

---

## 3. Federated scheduling negotiation also already exists

**[B]** "CTCP Server" idea: federated like mail. Servers negotiate on your behalf — someone's server asks "I'll be late, can we push the meeting 30 minutes?", yours checks availability and answers.

### Finding: iTIP (RFC 5546) has this, including counter-proposals

iTIP defines the methods calendar systems use to negotiate: REQUEST, REPLY, ADD, CANCEL, REFRESH, **COUNTER**, DECLINECOUNTER. COUNTER is precisely "I propose a different time"; DECLINECOUNTER is the organizer rejecting it. JSCalendar 2.0 carries the iTIP method in a `method` property when the object represents a scheduling message, so the negotiation model survives into the new format.

Transports:

- **iMIP** (RFC 6047) — iTIP over email. Server-to-server, federated, no shared infrastructure. This is the mail-analogy federation, shipped in 2010.
- **CalDAV scheduling** (RFC 6638) — iTIP over CalDAV, with automatic server-side processing.

### Finding: the related availability primitives exist too

- **VAVAILABILITY** (RFC 7953) — publishing when a user is *generally* available, distinct from busy-time from actual events.
- **Free/busy** queries in CalDAV (RFC 4791 / 6638).
- **RSCALE** (RFC 7529) — non-Gregorian recurrence rules, i.e. recurrence evaluated in a named calendar scale other than Gregorian.
- **Event publishing extensions** (RFC 9073) — structured participants, locations, resources as first-class sub-components.
- **VALARM extensions** (RFC 9074).

### Why it doesn't feel like it exists

iTIP counter-proposals are implemented inconsistently and surfaced badly in clients; most users have never seen one. The failure is client UX and server implementation, not the negotiation model.

> **Claude — not decided:** if CTCP's federation pitch is "servers negotiate on your behalf," a reader from the calendaring world will answer "that's COUNTER, we've had it since 1998." I'd suggest the defensible version is *what* is negotiated — CTCP can negotiate against constraint containers and cascade the consequences to dependent events, where iTIP negotiates a single DTSTART on a single VEVENT. Not a design proposal, just where I think the daylight is. Discard freely.

---

## 4. Pluggable calendars — partially occupied, and retreating

**[B]** Calendars (gregorian, utc, 13-month, year-0-at-2000) are plugins; time units come from one formula, not stored individually; a converter lets people on different calendars translate each other's data. A framework should itself be a plugin, and a calendar may decline to propose a day structure.

### Finding: the formula-per-calendar approach is well-trodden

- **Calendrical Calculations** (Reingold & Dershowitz) — the canonical work; ~40 calendar systems each reduced to conversion functions over a fixed day count. This is the academic version of "a gregorian-year holds 12 gregorian-months, and 2025 is just a name."
- **Unicode CLDR / ICU** — ships many calendar systems behind one interface, used by essentially every platform.
- **RFC 7529 (RSCALE)** — pluggable calendar scale for recurrence inside iCalendar.
- **W3C OWL-Time** — temporal entities with an explicit **TRS** (temporal reference system) hook, so positions can be expressed in arbitrary calendars or non-calendar reference frames. Closest existing thing to "calendar as plugin" in a formal model, and it also supports nominal (named) positions rather than numeric ones.

### Finding: JavaScript's Temporal removed exactly this feature

TC39 removed the `Temporal.Calendar` class **and the calendar protocol** from the proposal, concluded at the champions meeting 2024-04-18 and adopted at the June 2024 TC39 meeting. Custom calendars are gone; calendars are now identified by strings naming built-ins. Same for custom time zones.

Reasons given, which are directly relevant to CTCP's plugin engine:

- Engine implementers (Android, Apple Watch cited) objected to install and memory size.
- The callable hooks in the calendar and timezone protocols were the part implementations were **most uncomfortable with**, and removing them gave the largest complexity reduction for the least loss of use cases.
- A design assumption — that computing each calendar field separately via getters would be efficient — **did not hold up in practice**, per the ICU4X team's experience. Per-getter calls into user code made optimization hard unless implementations kept separate code paths for built-in vs user-supplied calendars.
- A suggested alternative that was not pursued for v1: have a custom calendar compute **all fields eagerly in one `calculate()` call** at construction, rather than 14 separate getters. TC39 explicitly noted this as the direction a future custom-calendar proposal should look at.

There is stated interest in a follow-up proposal, but as of now nothing has shipped.

> **Claude — not decided:** the ICU4X finding is a free lesson for the CTCP engine. If plugin calendars are called per-field at query time, the same performance wall is likely. The eager-`calculate()`-once shape is the thing TC39 pointed at and never built — it is compatible with your filter-function dispatch **[B]**, since a filter still decides *which* plugin handles a segment; it only changes *how much* that plugin returns per call. Flagging, not deciding.

---

## 5. Feature-by-feature map

| CTCP element **[B]** | Closest prior art | How close |
|---|---|---|
| Time as boxes; day holds events | Allen's interval algebra (13 interval relations: during, meets, overlaps…); OWL-Time built on it | Formal semantics exist for containment/overlap. No system makes containment the *only* primitive. |
| Containers + cascades as sole primitives | schema.org `subEvent`/`superEvent`; RFC 9253 PARENT/CHILD/REFID; JSCalendar 2.0 Group + `entries` | Hierarchy exists everywhere as an *attribute of events*. Nowhere as the base of the model. |
| Dependent placement / position from another's end | RFC 9253 RELTYPE + GAP; CPM/PERT; MS Project; Gantt tooling generally | Expressible in the standard. No resolving runtime in the calendar world; project-management tools do resolve it, but only inside one closed app. |
| Span/extent distinct from position | JSCalendar `duration` / `estimatedDuration`; OWL-Time `hasDuration` vs `hasBeginning`/`hasEnd` | OWL-Time separates duration from interval identity, which is near your "a container is a period whose length isn't known" note. |
| Constraint / availability containers | VAVAILABILITY (RFC 7953); free/busy | Availability as a publishable object exists. It's a query input, not a container that holds the conflicting activities. |
| Occupancy: two members of one capacity container can't overlap | PostgreSQL `EXCLUDE USING gist (resource WITH =, period WITH &&)`; SQL:2011 temporal tables | This is *exactly* your exclusion rule, implemented as a database constraint. Storage-layer only; no protocol exposes it. |
| Auto-slotting chores into free gaps ("ADHD fix") | Reclaim.ai, Motion, SkedPal, Trevor, Sunsama | Shipping products. All constraint solvers sitting on top of Google Calendar's iCal-shaped model — i.e. they solve it *despite* the format. None is a protocol. |
| ns/ms precision, static records, nested spans for logs | OpenTelemetry traces and spans | Very close in shape: parent/child spans, arbitrary attributes, start + duration, ns precision, federated collectors. Different domain, no calendar semantics, no recurrence. |
| Calendars as plugins with a converter | Calendrical Calculations; CLDR/ICU; OWL-Time TRS; RFC 7529 RSCALE; TC39 Temporal (removed) | Conversion is solved. Pluggability is the part the ecosystem is actively backing away from. |
| Federated server-to-server negotiation | iTIP COUNTER (RFC 5546), iMIP (RFC 6047), CalDAV scheduling (RFC 6638), JMAP | Standardized for decades, poorly implemented. |
| Recurrence attached to a real container (`every.days.2`) rather than derive-magic | RRULE / JSCalendar `recurrenceRules`; `RELTYPE=REFID` grouping | REFID gets partway — arbitrary components share a retrievable key. But recurrence itself is universally a rule on an object, and "all events that recur every 2 days" is not answerable in any of them. |
| Bitemporal / "what did we believe when" | XTDB, Datomic, SQL:2011 system-versioned tables | Mature, outside calendaring entirely. |

---

## 6. Where I found no prior art

1. **Time as an addressable namespace.** `year.2026/month.12/day.31`, with `*` marking a level the plugin fills in, and a segment whose id contains `*` being the recurrence mechanism. Temporal databases address time as *values* in columns; time-series databases bucket by key for storage efficiency, not as identity. Addressing a time position as a path that can be partially bound is not something I found in any standard or product.

2. **Ids that resolve as variables/functions at runtime.** "Bus arrival as a range rather than a point" as an *identifier*, not a value. RFC 9253 encodes the relation and stops; nothing evaluates an identifier.

3. **Containment as the sole primitive from which extent, recurrence, conflict and calendar are all derived.** Every standard reviewed adds each of these as a separate feature on an event object. The nearest philosophical cousin is OWL-Time, and it still has separate properties for duration, position and relation.

4. **Exclusion-as-containment.** "One thing can't be in the same place as another is a property of capacity containers, not of time itself" **[B]** — the Postgres exclusion constraint has identical *semantics* but zero of the modelling stance; it's a table-level rule, not a thing you can hand to someone.

5. **A protocol whose runtime is normative.** Every spec found defines a format and leaves resolution to implementations. None says "here is what the engine must compute."

---

## 7. Open questions this research raises

These are mine, not findings, and not design decisions.

> **Claude — not decided:**
>
> 1. **Does CTCP claim the runtime as normative?** The specs all stopped at the format boundary and the features died there. If the engine's resolution semantics are normative in CTCP, that's the novel contribution and it should probably be stated as such in the spec's first paragraph. If not, CTCP risks reproducing 9253's fate.
> 2. **Is there an interop story with JSCalendar?** There's a published lossy/lossless conversion spec pattern (iCal↔JSCalendar) to copy the shape of. A CTCP↔JSCalendar converter plugin would let CTCP be adopted without abandoning existing calendars. Possibly out of scope for prototype; noting it because the ecosystem has shown it's how formats get in.
> 3. **Does the plugin interface call per-field or per-position?** See §4 — ICU4X's experience says per-field getters into user code don't optimize.
> 4. **Which iCalendar concepts is CTCP deliberately refusing?** VTIMEZONE, VALARM, attendees/participants, privacy/sharing (JMAP has `privacy: public/private/secret`). Some of these are user-shaped, and **[B]** there is no "user" concept in the protocol. Worth an explicit non-goals section so it reads as a decision, not an omission.
> 5. **Is OpenTelemetry a validation or a competitor for the logging use case?** It already does nested ns-precision spans at industrial scale. Possibly CTCP should cite it as proof the shape works, and not chase that use case in v1.

---

## Sources

**Published standards**
- RFC 5545 — iCalendar
- RFC 5546 — iTIP (scheduling: REQUEST/REPLY/COUNTER/DECLINECOUNTER)
- RFC 6047 — iMIP (iTIP over email)
- RFC 4791 / 6638 — CalDAV, CalDAV scheduling
- RFC 7529 — non-Gregorian recurrence (RSCALE)
- RFC 7953 — Calendar Availability (VAVAILABILITY)
- RFC 8984 — JSCalendar 1.0
- RFC 9073 — event publishing extensions
- RFC 9074 — VALARM extensions
- RFC 9253 — Support for iCalendar Relationships
- W3C OWL-Time
- SQL:2011 temporal tables

**Active drafts (as of Sept 2026)**
- `draft-ietf-calext-jscalendarbis-17/19` — JSCalendar 2.0, obsoletes RFC 8984
- `draft-ietf-jmap-calendars-24/28` — JMAP for Calendars
- `draft-ietf-calext-jscalendar-icalendar-26` — conversion

**Other**
- tc39/proposal-temporal issues #2851, #2852, #2854 — removal of `Temporal.Calendar` and the calendar protocol
- bitfireAT/ical4android issue #115 — RFC 9253 incompatibility in the DAVx5 stack
- collective/icalendar issue #658 — RFC 9253 not yet implemented
- OpenTelemetry trace/span model
- Reingold & Dershowitz, *Calendrical Calculations*
- Allen, "Maintaining Knowledge about Temporal Intervals" (1983)

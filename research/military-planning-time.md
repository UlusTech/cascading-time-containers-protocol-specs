---
topic: How military and emergency-management planning expresses and coordinates time (benchmark for CTCP)
date: 2026-09-30
sources read with dates:
  - "2026-09-30 — https://en.wikipedia.org/wiki/D-Day_(military_term) (fetched, summarized by fetch tool)"
  - "2026-09-30 — https://en.wikipedia.org/wiki/Air_tasking_order (fetched; page has NO cycle/overlap detail)"
  - "2026-09-30 — https://en.wikipedia.org/wiki/Date-time_group (fetched)"
  - "2026-09-30 — https://en.wikipedia.org/wiki/Incident_Command_System (fetched)"
  - "2026-09-30 — https://en.wikipedia.org/wiki/Operational_planning (fetched; business-oriented, not military doctrine, not used for claims)"
  - "2026-09-30 — https://en.wikipedia.org/wiki/Military_Decision_Making_Process (fetched 2026-09-30 via curl, read from local copy)"
  - "2026-09-30 — https://en.wikipedia.org/wiki/Operations_order (fetched 2026-09-30 via curl, read from local copy)"
  - "2026-09-30 — https://en.wikipedia.org/wiki/Air_tasking_order (fetched 2026-09-30 via curl, read from local copy)"
  - "2026-09-30 — https://en.wikipedia.org/wiki/D-Day_%28military_term%29 (fetched 2026-09-30 via curl, read from local copy)"
  - "2026-09-30 — https://en.wikipedia.org/wiki/Date%E2%80%93time_group (fetched 2026-09-30 via curl, read from local copy)"
  - "2026-09-30 — https://en.wikipedia.org/wiki/Troop_Leading_Procedures (fetched 2026-09-30 via curl, read from local copy)"
  - "2026-09-30 — https://en.wikipedia.org/wiki/Military_operation_plan (fetched 2026-09-30 via curl, read from local copy)"
  - "2026-09-30 — https://en.wikipedia.org/wiki/Incident_Command_System (fetched 2026-09-30 via curl, read from local copy)"
  - "FAILED 2026-09-30: armypubs.army.mil (DNS failure), jcs.mil (DNS failure), training.fema.gov ICS PDF (404), fema.gov NIMS (403), Wikipedia pages for Battle rhythm / MDMP / JP 5-0 / COPD / Planning P (404 at guessed URLs)"
status: research — not yet promoted to .context/
---

# Military and emergency-management planning: how time is expressed and coordinated

> **Verification pass (2026-09-30).** Eight Wikipedia pages were re-read from local copies (URLs in the frontmatter). Of 49 claims: **20 sourced** (13 in section A, 7 section-B claims now cited), **2 corrected** (TLP scope, multiple H-hours; see B1 and B2), **27 remain memory**. Doctrine documents (FM 5-0, JP 5-0, JP 3-30, COPD, FEMA) were not available, so nothing in them is newly supported. **The ATO cycle length and stage names still need JP 3-30.** Wikipedia is a secondary source; "sourced" here means the page says it, not that doctrine was read.

## 0. Read this first: evidence quality

Only Wikipedia pages were read. **No primary doctrine (FM 5-0, ATP 5-0.1, JP 5-0, COPD, FEMA ICS training) could be reached.** Section B is from model memory of public doctrine except where marked `[sourced: ...]` or `[corrected: ...]` after the verification pass; unmarked or `[memory]` items remain unverified. Treat section B as candidate claims to be checked against the primary publications named there. Page fetches were summarized by a small model, so quotes are as returned by that tool, not re-read from the page.

## A. Verified facts (fetched 2026-09-30)

| # | Fact | URL |
|---|------|-----|
| A1 | D-Day is "the day on which a combat attack or operation is to be initiated"; H-Hour does for the hour what D-Day does for the day. | https://en.wikipedia.org/wiki/D-Day_(military_term) |
| A2 | The terms "designate the day and hour of the operation when the day and hour have not yet been determined, or where secrecy is essential." | same |
| A3 | Offsets are signed: "H−3 means 3 hours before H-Hour, and D+3 means 3 days after D-Day"; "H+75 minutes" is a valid form. | same |
| A4 | "At the appropriate time, a subsequent order is issued that states the actual day and times." Planning documents use relative timing in advance. | same |
| A5 | Other operation-specific letters exist (A-Day at Leyte, L-Day at Okinawa) to avoid confusion with Normandy's D-Day. | same |
| A6 | US date-time group format is DD HHMM (SS) Z MON YY, e.g. 051100Z = 5th day 11:00 UTC; 091630Tjul11 = 9 July 2011 16:30 zone T. | https://en.wikipedia.org/wiki/Date-time_group |
| A7 | Z is Zulu (UTC+-0). Military zone letters run Y (UTC-12) through M (UTC+12), with Z at UTC. | same |
| A8 | An ATO is used by the Joint Force Air Component Commander to control air operations; it specifies sorties over a 24-hour period (aircraft types, call signs, mission categories). | https://en.wikipedia.org/wiki/Air_tasking_order |
| A9 | An Air Operations Center creates the ATO; the Combat Plans Division builds it with the Airspace Control Order and Special Instructions. Standardized as XML since 2004 (NATO ADatP-3, MIL-STD-6040). | same |
| A10 | ATO is historically a "fragmentary order"; "as fragged" means executed per the original document without change. | same |
| A11 | ICS: an Incident Action Plan sets goals for an operational period, "usually 12 hours but can be any length of time." | https://en.wikipedia.org/wiki/Incident_Command_System |
| A12 | IAP answers: what to accomplish, who is responsible, how to communicate, what if someone is hurt. Simple incidents may use verbal instructions; hazmat requires written plans. | same |
| A13 | Transfer of command "always includes a transfer of command briefing, which may be oral, written, or a combination"; triggered by expansion/contraction, jurisdiction change, or rotation on long operations. | same |

## B. From memory (NOT verified this session)

Primary sources to check: FM 5-0 (Planning and Orders Production, 2022) and ATP 5-0.1 at armypubs.army.mil; JP 5-0 (Joint Planning) at jcs.mil/Doctrine; JP 3-30 (Joint Air Operations); NATO COPD (Allied Command Operations); FEMA ICS-300/IS-200 material at training.fema.gov.

### B1. Planning processes
- **MDMP** (Army): seven steps — receipt of mission, mission analysis, course of action development, COA analysis (war-gaming), COA comparison, COA approval, orders production/dissemination/transition. `[sourced: https://en.wikipedia.org/wiki/Military_Decision_Making_Process]` Linked to Troop Leading Procedures and operations orders; intended for the primary staff of battalion-sized units and larger, not conducted below battalion level per doctrine (same source). "Iterative; commander can compress it under time pressure" `[memory]`.
- **Troop leading procedures**: small-unit parallel process, eight steps: receive the mission, issue a warning order, make a tentative plan, initiate movement, conduct reconnaissance, complete the plan, issue the order, supervise and refine. Steps can be completed in any order or concurrently. `[sourced: https://en.wikipedia.org/wiki/Troop_Leading_Procedures]` `[corrected: memory said "company and below" and "overlaps with MDMP at the higher level"; the sources say TLP is used by units subordinate to battalion, and that it extends MDMP down to small-unit level (MDMP page: not conducted below battalion). Last step is "Supervise and Refine", not just "supervise".]`
- **Warning order**: a preliminary order that informs units an OPORD may be forthcoming, issued to subordinate leaders immediately after receipt of the mission (time and circumstances permitting) so they can develop their own warning and operations orders. `[sourced: https://en.wikipedia.org/wiki/Operations_order]` Also the second TLP step (TLP page). "With relative times" and "central to parallel planning" `[memory]`. Related orders (same source): an OPORD uses a five-paragraph format (Situation, Mission, Execution, Sustainment, Command and Signal); a fragmentary order (FRAGORD) states only the changes to a base order.
- **Joint planning process** (JP 5-0): planning functions/steps — planning initiation, mission analysis, COA development, COA analysis and wargaming, COA comparison, COA approval, plan/order development. Contingency and crisis-action variants exist; the latter is compressed and time-driven. `[memory]` The operation-plan page confirms only that an OPLAN is executed on an OPORD or an EXORD, that a CONPLAN is an OPLAN in concept form, and that NATO planning doctrine sits in AJP-5 (https://en.wikipedia.org/wiki/Military_operation_plan); the step list is unverified.
- **NATO COPD**: phased, roughly: situation awareness, strategic orientation, operations-level planning, and execution/assessment, with strategic-level and operational-level interaction. Details (phase numbers/names) uncertain from memory. `[memory]` The local source names AJP-5, not COPD, as NATO's operational-level planning doctrine; the relation between the two is unchecked.

### B2. Relative time
- Named references: D-day (operation day), H-hour (operation hour); C-day (deployment start), L-hour (specific operation hour, e.g. a landing/air assault in some contexts), M-day (mobilization). Notation D-1, H+2, D+3, H-30min. The exact definitions of C/L/M are from memory. Each operation may define its own letter. `[sourced for D-day, H-hour, signed offsets and per-operation letters: https://en.wikipedia.org/wiki/D-Day_%28military_term%29, see A1-A5]` `[memory for C/L/M definitions]`
- **Actual time set later**: a subsequent order fixes D-day and H-hour. Until then every planning product (sync matrix, movement tables, fire support, logistics) stays in offsets. When set, all offsets resolve at once.
- **Multiple anchors**: `[corrected: memory said one operation can have several hour designators, e.g. an air H-hour differing from a ground H-hour. The D-Day page states "For a given operation, the same D-Day and H-Hour apply for all units participating in it." (https://en.wikipedia.org/wiki/D-Day_%28military_term%29). What the source does support is several anchors across operations: each operation gets its own letter (A-Day at Leyte, L-Day at Okinawa, planned X-Day and Y-Day for Japan). Component-specific hour designators within one operation remain unverified memory.]`
- **DTG**: `[sourced: https://en.wikipedia.org/wiki/Date%E2%80%93time_group]` format DD HHMM (SS) Z MON YY, three forms: DDHHMMSSZmmmYY (full, software timestamps), DDHHMMZmmmYY (shortened), DDHHMMZ (short, e.g. planning). The letter selects the zone (Y = UTC-12 through M = UTC+12, no J, Z = UTC). "Z used for coalition and multinational products so no party's local clock is ambiguous" and "local time appears in parallel with Zulu in schedules" `[memory]`.

### B3. Backward planning and 1/3-2/3
- **Reverse planning**: start from a fixed time (e.g. H-hour or an assault time) and work back, allotting time to each step so the total fits. Identifies the latest start of each step.
- **One-third / two-thirds rule**: a headquarters uses no more than one-third of available time to produce its plan and order, leaving two-thirds for subordinates to plan, rehearse, and prepare. The available time is measured from receipt of the mission to execution.
- Consequence: a headquarters that overruns its third steals from every subordinate level, and the effect compounds down the chain.

### B4. Phases and transitions
- Operations are divided into phases (joint doctrine uses Shape, Deter, Seize initiative, Dominate, Stabilize, Enable civil authority — six-phase model in JP 5-0, from memory; older texts use 0-V). Each phase has objectives and end conditions.
- **Transitions**: condition-based (phase ends when a stated condition is met) versus time-based (phase ends at a stated time). Doctrine generally prefers condition-based transitions for campaigns, and time-based for tightly scripted actions. Planners may define both: the earlier of a condition or a latest time. (Combination form is a memory-level inference.)
- Phases can overlap; a later phase's preparation often starts during the earlier.

### B5. Synchronization
- **Synchronization matrix**: a table (time windows or events across the top, units/functions down the side) recording what each unit or warfighting function does in each window. Rows depend on other rows (e.g. a crossing cannot begin until a smoke/cover task has begun). Produced during COA development and wargaming.
- **Branch**: contingency option built into the plan, prepared in advance, activated by a decision. **Sequel**: what follows an operation depending on its outcome (success, failure, partial). Branches change what happens inside the phase; sequels are what comes after.
- **Decision point (DP)**: a place, time or event where the commander decides to act. **Decision support template/matrix**: ties decision points to named areas of interest and the time by which a decision is required so an action still arrives in time.
- **CCIR**: commander's critical information requirements, comprising priority intelligence requirements and friendly force information requirements (essential elements of friendly information are a separate protective list). Meeting a CCIR is a trigger for a decision. `[sourced in part: the OPORD format lists CCIR and EEFI as separate items under Coordinating Instructions, alongside "time or condition when the plan or order becomes effective" (https://en.wikipedia.org/wiki/Operations_order); the PIR/FFIR composition and the trigger role are memory]`
- **Execution/decision-time tension**: a decision point has a latest useful time; information arriving after it has no value.

### B6. Routines and cycles
- **Battle rhythm**: the recurring schedule of meetings, briefings, reports and decision forums of a headquarters (boards, working groups, situation updates), synchronized to the operational cycle and to higher/lower/adjacent headquarters. Outputs of one meeting feed inputs of the next; meetings are ordered so information flows up before a decision meeting and down after.
- **ATO cycle** (JP 3-30, from memory `[memory]`; the local ATO page confirms only a fixed 24-hour ATO period, not the cycle length or stages): a repeating planning cycle of roughly 72 hours per ATO — objectives/guidance, target development, weaponeering/allocation, master air attack plan, ATO production and dissemination, execution, and assessment. Because a new ATO starts each day, at any moment three or more ATOs are at different stages: one executing, one being produced, one being planned. The 24-hour ATO day covers a defined period, often with a start time set by the JFACC, not midnight. Stage times are quoted relative to the ATO's execution start.
- **Rehearsals**: types include confirmation brief, back-brief, combined arms, support, and battle drills. Scheduled inside the preparation window (hence the 2/3 rule); rehearsal time is protected and its results can change the plan.

### B7. Coordination measures
- **Phase line**: a line used for control and reporting; units report crossing. It marks progress in space, and is used for coordinating time-space relations (e.g. "not to cross before"), tying position to time.
- **Time-based coordination**: "time on target"-style arrivals from separate sources at one instant, "no earlier than / no later than" windows, check-points and time gates.
- **Deconfliction** `[memory; the ACO's existence and its creation by the AOC Combat Plans Division alongside the ATO are sourced, https://en.wikipedia.org/wiki/Air_tasking_order]`: shared airspace via the Airspace Control Order (ACO) — blocks of airspace with altitude and time bounds assigned to users; shared routes and road use via movement tables and traffic control; shared radio frequencies and shared support assets assigned by time slot. Exclusive use per window; overlap is a conflict to detect.
- **Fire/airspace control measures** exist as time-bounded, activatable measures (active from-to, or on call).

### B8. Logistics, time zones, coalitions
- **Logistics timelines**: sustainment planned as consumption rates (days of supply) over time, resupply windows, lead times, and "culminating points" where sustainment limits the operation. Deployment flow is expressed against C-day offsets (time-phased force and deployment data, TPFDD — memory).
- **Sustainment windows**: resupply/refuel/maintenance only possible in slots; a delay in one slot pushes the following ones in the same sequence.
- **Coalition**: Zulu as common reference; national holidays, workdays and prayer/rest patterns differ; liaison officers; combined battle rhythm across national headquarters in different zones; different staff hours and national approval delays before a partner can commit. Specific practices are from memory, low-to-medium confidence.

### B9. Security and uncertainty
- **OPSEC**: patterns in schedules (repeated timings, movement of supplies, changes in routine) reveal intent to an observer; countermeasures include maintaining normal patterns and using relative designators so a document does not disclose a date (A2 verified: "where secrecy is essential"). Only the planning-side concept is covered here.
- **Uncertainty/fog**: friction, incomplete information, and enemy or environmental action mean durations and start times are ranges, and plans are assumptions-based. Doctrine records planning assumptions and their validity, and includes reserves and flexibility, with branches for the likely deviations.

### B10. Civil analogue (ICS)
- **Planning P** (FEMA) `[memory; the local ICS page does not mention it]`: a lifecycle diagram of the ICS planning cycle. The initial response phase (notification, initial response and assessment, incident briefing, initial unified command meeting) forms the stem of the P. The looping part per operational period: objectives meeting, command and general staff meeting, preparing for the planning meeting, planning meeting, IAP preparation and approval, operations briefing, execute plan and assess progress, then back to new objectives. (Step names from memory; the shape and cycle are high confidence.)
- **Operational period**: the time the IAP covers (verified A11: usually 12 hours, any length). Each period's planning is done during the previous period, so planning for period N+1 overlaps execution of period N.
- **Shift change/handover**: transfer of command briefing on change of command (verified A13). ICS forms `[sourced: https://en.wikipedia.org/wiki/Incident_Command_System]`: 201 Incident Briefing, 202 Incident Objectives, 203 Organization Assignment List, 204 Assignment List, 205 Incident Radio Communications Plan. "Operations briefing at the start of each period" `[memory]`.

## C. Gaps
- No primary doctrine text read; the `[memory]` items in B are unconfirmed (27 of 49 claims).
- The ATO cycle length and its stage names must be verified in JP 3-30.
- C-day/L-hour/M-day definitions must be verified in JP 1-02 (DOD Dictionary).
- COPD phase names and NATO time conventions unverified.
- Planning P step names unverified. (ICS form numbers 201-205 now sourced from the ICS page.)
- Whether component-specific hour designators exist inside one operation is unverified; the D-Day page says the same D-Day and H-Hour apply to all units.
- Whether phase-transition rules combine condition and time is inference.
- Coalition calendar practice has no public source identified.

## D. Observations relevant to CTCP's premise

Observations only, not design.

1. **Relative time is a first-class habit.** Planning is done in offsets from an anchor (D, H) whose real value is unknown or secret, and every product stays valid when the anchor is set (A1-A4). This matches the premise of ordering and relations without clock time. The anchor is set once, later, by an order, and everything resolves together.
2. **Several anchors coexist.** Different letters (D, H, C, L, M; C/L/M are memory) and per-operation letters (A5) mean the world carries more than one reference, each with its own set-time. `[corrected: within one operation the sourced rule is that the same D-Day and H-Hour apply to all units; earlier text said one plan carries several hour anchors, which only memory supports.]`
3. **Anchor moves.** Slipping H-hour shifts everything defined against it; some things (a tide, daylight, an external deadline) do not shift. Both kinds appear in the same plan.
4. **Time budgets are inherited downward.** The one-third/two-thirds rule and backward planning treat a fixed end time as the given and derive latest start times. Overrun at one level shrinks the budget of the next.
5. **Transitions come in two kinds** (condition and time), and the pairing "whichever first" appears natural.
6. **Contingencies are prepared before they are needed** (branches), with decision points carrying a latest useful time. Cancelling or moving work on failed conditions is ordinary.
7. **Tables of who-does-what-when with inter-row dependencies** (synchronization matrix) are the working artifact; they express dependence on another party's row.
8. **Cycles overlap themselves.** The ATO cycle and Planning P both run planning for the next period while executing the current one. Any stage of one iteration is simultaneous with a different stage of another.
9. **Recurring meetings form a rhythm** whose members depend on each other's outputs, and they are laid over multiple time zones, hence Zulu (A6-A7).
10. **Handovers carry a defined package** (briefing, IAP) at a boundary of the period (A13).
11. **Time itself is shared and exclusive.** Airspace, routes, frequencies and logistics slots are assigned in windows; the coordination problem is detecting overlap without every party seeing every plan.
12. **Schedules leak.** The regularity of a schedule can reveal intent, so parties may want to share a window or an offset without sharing the plan behind it (A2).
13. **Uncertainty is normal**: durations are ranges and estimates that get replaced by reports; fog is a planning input, not an exception.
14. **Different parties, different calendars**, with a neutral reference (Zulu) for exchange but local time for living.
15. **Verified vs memory imbalance**: the strongest parts of this benchmark (sync matrices, ATO overlap, phases) are exactly the ones unverified here; check before promotion.

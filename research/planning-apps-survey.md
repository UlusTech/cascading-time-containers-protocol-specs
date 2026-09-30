---
topic: Survey of planning, scheduling, task and time apps against CTCP's premise (nesting, pushing, order without time, kinds of time, plugins/federation)
date: 2026-09-30
versions: |
  Pages actually read this session (2026-09-30):
  - https://orgmode.org/manual/Repeated-tasks.html (2026-09-30)
  - https://taskwarrior.org/docs/recurrence/ (2026-09-30)
  - https://developers.google.com/calendar/api/guides/sync (2026-09-30)
  - https://support.google.com/calendar/answer/37111 (2026-09-30)
  - https://github.com/obsidian-tasks-group/obsidian-tasks (2026-09-30)
  - https://support.atlassian.com/jira-software-cloud/docs/what-is-an-issue/ (2026-09-30)
  - https://www.rfc-editor.org/rfc/rfc5545 and /rfc4791 (2026-09-30)
  - https://developer.todoist.com/rest/v2/ (2026-09-30, overview only)
  - https://cal.com/docs/platform/quick-start (2026-09-30, little of use)
  Fetch failures (404 / DNS / no content): Todoist sub-task help article (returned an unrelated article), Reclaim help article, Microsoft Project dependencies article, Asana dependencies docs, TaskJuggler manual (frameset only), OpenProject docs host, taskwarrior.org/docs/design/recurrence.
  Search was rate-limited; no WebSearch was used. No forum or feature-request board was successfully read.
status: research — not yet promoted to .context/
---

# Planning apps survey

## How to read this

- **[V]** = verified this session, with URL. Only a handful of claims are [V]; see the list at the end of this section.
- **[M]** = from model memory (knowledge to mid-2026), unverified, may be stale. Every per-app line below is [M] unless it carries [V].
- Complaints are recollections of recurring themes in reviews and forums, not measured counts.
- This is coverage, not depth: about 65 apps, a few lines each. Pricing and feature tiers change; treat all as needing re-checking before reliance.

### Verified facts [V]

1. Org-mode has three repeater kinds: `+` shifts by a fixed interval from the old date; `++` shifts until the date is in the future; `.+` shifts relative to today (completion). Warning period follows the repeater (`+1m -3d`). https://orgmode.org/manual/Repeated-tasks.html
2. Taskwarrior recurrence uses a hidden template task plus generated instances; `recurrence.limit` defaults to 1 (only next instance generated); a `mask` string tracks instance states; `until` ends the series. https://taskwarrior.org/docs/recurrence/
3. Google Calendar API sync: full sync yields a `nextSyncToken`; incremental sync returns changes including deletions; HTTP 410 means the token is invalid and the client must wipe local data and fully resync. https://developers.google.com/calendar/api/guides/sync
4. Google Calendar export is a `.zip` of `.ics` files, needs a computer and "Make changes and manage sharing" permission; a "Feed processing error" can occur with the public iCal address, secret address is suggested. https://support.google.com/calendar/answer/37111
5. Obsidian Tasks stores tasks as Markdown checkboxes with emoji-marked due, scheduled and recurrence fields; supports checklist sub-items. https://github.com/obsidian-tasks-group/obsidian-tasks
6. Jira calls its unit a "work item"; boards display up to 5,000 items at a time. https://support.atlassian.com/jira-software-cloud/docs/what-is-an-issue/
7. iCalendar (RFC 5545): RRULE with FREQ; DTSTART with TZID must be given when the value is neither UTC nor floating; VTODO supports DUE or DURATION. https://www.rfc-editor.org/rfc/rfc5545
8. CalDAV (RFC 4791) requires a strong DAV:getetag on calendar object resources; ETags are how clients detect server-side change. https://www.rfc-editor.org/rfc/rfc4791
9. Todoist has a REST API and a Sync API (batching), OAuth 2.0 or personal tokens, and an MCP integration. https://developer.todoist.com/rest/v2/

## Calendars

Common shape [M]: an event is a fixed block with start, end, timezone, optional RRULE recurrence; no nesting, no dependencies; one event lives in one calendar. Sharing via iCal feed URLs (read-only, slow refresh) and CalDAV where offered.

- **Google Calendar** [M]: events + "tasks" (separate list, subtasks one level, date-only or date+time). No dependencies. Recurring events edit "this / this and following / all". Free/busy sharing, ICS export (V4), open API with sync tokens (V3), CalDAV supported but Google has restricted it (OAuth). Duration exact only. Complaints: tasks are second-class; "this and following" edits fragment series; timezone display confusion; iCal-subscribed feeds update with multi-hour lag.
- **Outlook** [M]: events, tasks moved into To Do / Planner. Exact times, recurrence with exceptions; meeting invites via iTIP over email. ICS export/import, Graph API. Complaints: recurring-series exception handling, timezone mapping across Windows/IANA names, duplicate events after sync of shared mailboxes, no CalDAV.
- **Apple Calendar** [M]: events + Reminders app (subtasks one level, since iOS 13; lists nest as groups). Full CalDAV/iCloud. Travel time as a per-event field. Complaints: sync delays with iCloud, invitation spam, shared calendar conflicts show up without a conflict resolution view.
- **Fantastical** [M]: client on top of system/Google/iCloud/Exchange accounts; natural-language entry; "Openings" scheduling links. Uses CalDAV. Complaints: subscription price, rests on the backend's model.
- **Notion Calendar (Cron)** [M]: client over Google Calendar plus Notion databases (date property shown as events). Complaints: Google-only backend historically, database dates and calendar events are two separate sources.
- **Amie** [M]: calendar + todos + notes; todos can be dragged into slots. Google backend. Complaints: reliability, thin exports.
- **Proton Calendar** [M]: end-to-end encrypted events; ICS import, shared calendars in the Proton ecosystem, limited CalDAV (no third-party CalDAV client access at time of memory). Complaints: no CalDAV/API for clients, feature lag.
- **Nextcloud Calendar** [M]: self-hosted CalDAV server (SabreDAV) with Tasks app as VTODO; full iCal feeds. Best open baseline. Complaints: sync setup, Tasks app UI, subtask support via RELATED-TO is inconsistent across clients.
- **Thunderbird** [M]: local/CalDAV calendars, tasks as VTODO, "Lightning" built in. Complaints: CalDAV sync quirks, slow UI, no dependencies.

## Auto-schedulers

Common shape [M]: tasks with duration, priority, due date, and hours-of-availability are placed into calendar gaps; the calendar is the output. Dependencies are absent or shallow; manual moves often fight the scheduler. Lock-in: data lives in vendor plus the connected calendar.

- **Motion** [M]: tasks have duration, deadline, priority; auto-placed; projects with task dependencies ("blockers") in newer versions. Recurrence yes. Complaints: expensive, reshuffling surprises, mobile rough, cancels/refunds.
- **Reclaim** [M]: habits, tasks (duration, min/max chunk, due), focus time, buffers, smart meetings; Google/Outlook calendars; syncs to other calendars via "sync". Complaints: creates duplicate blocks when syncing across calendars, moves things you did not expect, task subtasks absent.
- **SkedPal** [M]: time maps (named availability windows), task duration, priority, deadlines, parent/child "dependencies" via subtasks that must precede. Complaints: steep learning curve, dated UI.
- **Clockwise** [M]: optimises teams' meeting placement and focus time; no tasks. Complaints: moves other people's meetings, team-wide side effects.
- **Morgen** [M]: calendar + tasks from several sources (Todoist, Notion, Linear...), plan-my-day; frames. Complaints: task source sync limits.
- **Akiflow** [M]: task inbox from many tools, time blocking into Google calendars; no true auto-rescheduling (manual "plan"). Complaints: price, daily-planning discipline required.
- **Sunsama** [M]: daily planning ritual with estimate per task, guided workload cap; subtasks; imports from Asana/Trello/Notion. Complaints: no automatic placement, price.
- **Structured** [M]: visual day timeline mixing events and tasks, Apple ecosystem, task durations, inbox; subtasks. Complaints: no recurring-by-completion nuance, limited sharing.
- **Tiimo** [M]: visual planner for ADHD; tasks with durations, subtasks as steps, reminders. Complaints: sync to other calendars is one-way.
- **Llama Life** [M]: list of tasks each with a time estimate and a countdown timer; running over pushes the day's end. This is one of the few explicit "one runs long, the rest move" models [M]. Complaints: single-day scope, no calendar depth.

## Task managers

- **Todoist** [M]: projects nest (up to 4 levels), tasks nest as subtasks (documented up to 4 levels, [M]); due date/time, duration (since 2023), natural-language recurrence with "every!" (from completion) vs "every" (fixed). No dependencies. REST + Sync API (V9), CalDAV feed read-only ICS. Export CSV per project (subtask indent kept, recurrence text). Complaints: no dependencies, no time-of-day overlap view, premium reminders.
- **TickTick** [M]: subtasks (one level in lists, more in some views), Pomodoro, calendar view, habits; duration for time blocking; CalDAV feed subscription. Complaints: recurrence "repeat from due vs completion" confusions, sync duplicates with calendars.
- **Things** [M]: Areas > Projects > headings > to-dos > checklist (one checklist level). "When" date (Today/Evening/Someday) versus deadline: order without clock. No API besides URL scheme; Apple-only; no dependency. Export minimal. Complaints: no sharing/collab, no recurring-from-completion parity, no Windows/Android.
- **OmniFocus** [M]: projects with sequential vs parallel action groups, nested to arbitrary depth; defer date (hidden until), due date, estimated duration; perspectives; first-class "next action" derived from sequence. Repeats "from completion" or "fixed schedule". AppleScript automation; sync via WebDAV/Omni Sync Server (self-hostable WebDAV). Complaints: price, Apple only, steep model.
- **Microsoft To Do** [M]: lists, steps (one level), My Day; due, reminders, repeat. Graph API. Complaints: no duration, no sub-hierarchy, no dependencies.
- **Any.do** [M]: lists, subtasks, calendar integrations, "Moment" daily planner. Complaints: paywall, sync bugs.
- **Remember The Milk** [M]: lists, subtasks, "time estimate" field, "repeat every / after", API; older, robust. Complaints: dated UI, subtasks one level.
- **Taskwarrior** [M+V]: CLI, local JSON/sqlite, tasks with `depends:` (many-to-many), `wait`, `scheduled`, `due`, `until`, `recur` (V2). No native nesting apart from dependency graph or projects with dot names (`home.kitchen`). Sync via taskserver / taskchampion. Export JSON. Complaints: recurrence oddities, sync setup (V2 template model).
- **org-mode** [M+V]: headline tree of unlimited depth; SCHEDULED, DEADLINE, repeaters (V1), CLOCK entries, effort property, dependencies via `BLOCKER`/`TRIGGERED` (org-edna add-on) and `ORDERED` property (siblings in order). Plain text, fully open. Complaints: mobile sync, learning curve, agenda speed at scale, no shared editing.
- **Obsidian Tasks** [M+V]: checkboxes in markdown with due, scheduled, start, recurrence (V5); dependsOn/id fields exist in newer versions [M]. Sub-items via indentation (unbounded). No duration. Plain markdown, no lock-in. Complaints: query performance in big vaults, recurrence handling when multi-line.
- **Logseq** [M]: outliner of blocks with unlimited nesting; TODO/DOING/DONE markers, SCHEDULED/DEADLINE org-like repeater. Complaints: sync (file vs database version transition), performance.

## Project tools

- **Jira** [M+V]: hierarchy epic > story/task > subtask; newer plans allow more levels above epic (Advanced Roadmaps / "Plans"); issue links (blocks / is blocked by) are informational and do not move dates in core Jira. Estimates in story points or time. Board limit 5,000 (V6). REST API; XML/CSV export. Complaints: configuration sprawl, links don't reschedule.
- **Linear** [M]: issues with sub-issues (nested), projects, cycles (fixed-length iterations); "blocked by / blocking" relations; estimates; project timeline. Open GraphQL API. Complaints: limited dependency scheduling, no Gantt, cycles' rollover behaviour.
- **Asana** [M]: tasks > subtasks (deep nesting, multi-homing: a task can sit in several projects); dependencies (blocking) and timeline view that can shift dependent dates when "Reschedule" is chosen. Recurrence per task. API. Complaints: dependencies shift only on prompt, timeline is premium.
- **Trello** [M]: boards > lists > cards > checklists (one level); Butler automation; Power-Ups; card dates. No dependencies natively (Power-Up for links). JSON export. Complaints: no hierarchy above cards, limited reporting.
- **ClickUp** [M]: Space > Folder > List > Task > Subtask (up to 7 levels historically, multi-level subtasks) ; tasks can be in multiple lists; dependencies with "reschedule dependencies" toggle; time estimates and tracking. Complaints: overwhelming, performance, feature bloat.
- **Monday** [M]: boards with items and subitems (one level); dependency column that can auto-shift dates on the timeline/Gantt; timeline with durations. Complaints: price per seat minimums, subitems limited.
- **Basecamp** [M]: to-do lists with items, no subtasks by design, no dependencies; schedule; hill charts for progress instead of estimates. Complaints: no subtasks, no Gantt.
- **Notion databases** [M]: pages nest arbitrarily; relations link databases (one item in many); sub-items property; date property with start/end; timeline view; dependency property exists on timeline ("Dependencies") that shifts dates [M]. Formula for calculations. API. Complaints: recurring tasks weak, offline weak, performance at scale, export loses relations.
- **MS Project** [M]: WBS outline (up to 65 levels [M]); FS/SS/FF/SF dependencies with lag; auto-scheduled tasks recompute when a predecessor moves; duration vs work vs units; estimated durations flagged with "?"; resource leveling; critical path. `.mpp` proprietary, XML export. Complaints: price, complexity, manually scheduled vs auto tasks confusion.
- **OpenProject** [M]: work packages with parent/child hierarchy, relations (precedes/follows with lag, blocks, relates); automatic vs manual scheduling mode per package; open source, self-hostable, API. Complaints: UI heaviness, Gantt edge cases with non-working days.
- **Taiga** [M]: user stories, tasks, epics, sprints; open source; no dependency scheduling. Complaints: slow development pace in recent years.
- **Plane** [M]: open-source Linear/Jira alternative: issues, sub-issues, cycles, modules, relations (blocked-by). Self-hostable. Complaints: young, some features paywalled.
- **TaskJuggler** [M]: plain-text project language; tasks nested arbitrarily; `depends`, `precedes`, `effort` (person-time) vs `duration` vs `length` (working time); scheduler resolves ALAP/ASAP from resource availability and vacations; reports. Open source. Complaints: steep learning, no GUI. (Manual fetch returned only a frameset; claims unverified.)

## Habits and focus

- **Habitica** [M]: gamified habits, dailies, to-dos with checklists; dailies repeat with "every N days/weeks"; missing dailies costs HP. Open-source, API. Complaints: cron/day-start rollover bugs across timezones, punishing missed days.
- **Streaks** [M]: Apple-only habit tracker, daily/weekly targets, Health integration. Complaints: 12-habit cap.
- **Loop Habit Tracker** [M]: Android open source, habit strength score instead of a streak; CSV/SQLite export. Complaints: Android only.
- **Forest** [M]: focus timer that grows a tree; fails if you leave the app. Complaints: sync of stats across devices.
- **Focusmate** [M]: booked 25/50-minute video co-working slots with a stranger; scheduling at fixed slot boundaries; Google Calendar sync. Complaints: slot availability at odd hours.
- **Routinery** [M]: routines as ordered steps with durations and a running timer; steps chain, the routine's end time is the sum. Complaints: iOS/Android only, limited calendar integration.

## Time tracking

- **Toggl** [M]: start/stop timers on projects/tasks; estimates on projects in Plan; manual entries; API and CSV/PDF reports. Complaints: forgotten timers, rounding, timezone shift of entries at day boundary.
- **RescueTime** [M]: automatic app/site categorisation, goals; API. Complaints: privacy, categories, fewer updates.
- **Clockify** [M]: free timesheets, projects, tasks, estimates; approvals; API. Complaints: performance with large data.
- **ActivityWatch** [M]: open source local automatic tracker (watchers, buckets); REST API; self-hosted only. Complaints: setup, no sync across devices by default.
- **Timing** [M]: macOS automatic tracker with rule-based project assignment. Complaints: Mac-only, rule maintenance.

## Scheduling links

- **Calendly** [M]: event types with duration, buffers, min notice, daily limits, reads busy from connected calendars; "collective/round-robin". Complaints: double-booking when calendar sync lags or the calendar checked is not the one events are on; timezone displays; price.
- **Cal.com** [M+V thin]: open source, self-hostable Calendly alternative; API; multiple calendars conflict check; docs read gave only platform token facts (V, https://cal.com/docs/platform/quick-start). Complaints: setup complexity, calendar-sync delays.
- **Doodle** [M]: poll of candidate slots; participants mark yes/if-need-be; organiser picks. Complaints: ads, paywall.
- **When2meet** [M]: grid availability heat map, no accounts, no calendar link. Complaints: timezone handling by the viewer, dated.

## Family

- **Cozi** [M]: shared family calendar with per-member colours, lists, meal planner; no CalDAV write. Complaints: ads, no proper sync to other calendars.
- **TimeTree** [M]: shared calendars with chat per event, memos; import/export partial. Complaints: notifications, ads.
- **FamilyWall** [M]: calendar, lists, location; Complaints: premium tier walls.

## What no app does

Observations from the survey, [M] unless cited; "no app" means none I know of, not proven.

1. Order without time as a first-class idea appears only in fragments: OmniFocus sequential groups, org `ORDERED`, Things "Someday", Routinery chains. None mixes ordered-but-unclocked items freely with clocked ones in the same calendar view.
2. A duration or start that is an exact value, a range, an estimate, or a live prediction, all of them representable in the same field: apps hold a single number, MS Project's "?" flag being the closest; none shows a range of outcomes.
3. Pushing that crosses application boundaries: dependencies that shift dates exist inside a tool (MS Project, OpenProject, ClickUp, Monday, Asana, Notion) but never shift an event in another person's calendar.
4. One item nested in several parents with consistent scheduling: Asana and ClickUp multi-home, Notion relations, but timing is not reconciled among the parents.
5. Federation of planning state: CalDAV/iCal carry events and VTODO but not dependencies or nesting reliably; no app negotiates schedule changes between two people's own servers beyond iTIP email invites and scheduling links.
6. Predictions that update from live data (travel time, actual progress, historical durations) are mostly absent; time trackers know actuals but do not feed estimates back into a schedule in other tools.
7. Import/export round-trips: recurrence, subtasks and dependencies lose fidelity in CSV; only plain-text systems (org, Taskwarrior JSON, Obsidian) round-trip fully.
8. Conflict visibility in shared calendars is by eye; no app explains "why" something moved.

## Mechanisms relevant to CTCP's premise

Observations, not recommendations.

- **Recurrence semantics**: org-mode distinguishes fixed-interval, catch-up-to-future and from-completion repeaters (V1); Todoist "every" vs "every!" [M]; OmniFocus repeat-from-completion [M]. Taskwarrior generates instances from a template with a limit (V2). These are three different answers to "what does a missed occurrence do".
- **Sync tokens and tombstones**: Google's incremental sync returns deletions and invalidates with 410 forcing full resync (V3); CalDAV relies on strong ETags (V8). Together they describe how two servers detect change and how silent divergence can occur when tokens expire.
- **Sequential vs parallel grouping**: OmniFocus and org `ORDERED` treat order as a property of a group, not of dates [M].
- **Dependency propagation modes**: OpenProject automatic/manual mode, ClickUp/Monday/Asana "reschedule dependents" toggle, MS Project auto vs manual tasks [M]: pushing is optional per item in every tool that has it.
- **Effort vs duration vs length**: TaskJuggler and MS Project separate person-effort from elapsed time from working-time [M].
- **Availability windows**: SkedPal time maps, Reclaim hours, Calendly availability rules [M].
- **Timer-driven overrun**: Llama Life and Routinery let a running timer extend a step and shift what follows [M].
- **iCalendar as lowest common denominator**: RRULE + TZID + VTODO DURATION/DUE (V7) can express recurrence and timezone, but not nested order or dependencies natively; RELATED-TO exists for parent/child in the standard [M].
- **Plain-text stores** (org, Obsidian Tasks, Taskwarrior) carry all metadata in the user's own files and are extended by community add-ons (V1, V2, V5).
- **Automation/extension surfaces**: Todoist REST+Sync API and MCP (V9), Notion/Linear/Asana APIs [M], OmniFocus AppleScript [M].

## Gaps

No forum, review or feature-request page was successfully read. Vendor-limit numbers (Todoist 4 levels, ClickUp levels, MS Project 65) are memory. The Reclaim, Motion, Calendly, Asana, Notion, Linear, OpenProject pages were not fetched successfully; all their lines are memory.

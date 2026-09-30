---
topic: How release schedules, LTS and support windows, rolling releases and company calendars work
date: 2026-09-30
versions/pages read with dates: >-
  All read 2026-09-30 via WebFetch, which returns a small-model summary of the page, not raw text.
  nodejs.org/en/about/previous-releases; github.com/nodejs/Release (README); docs.deno.com/runtime/fundamentals/stability_and_releases/;
  peps.python.org/pep-0602/; www.python.org/downloads/; ubuntu.com/about/release-cycle; kubernetes.io/releases/;
  endoflife.date/docs/api/v1/; endoflife.date/nodejs; go.dev/doc/devel/release; forge.rust-lang.org/release/process.html;
  wiki.debian.org/DebianReleases; whattrainisitnow.com/calendar/; learn.microsoft.com/en-us/windows/release-health/release-information.
  Failed (403, Anubis block, or empty): oracle.com Java roadmap, docs.fedoraproject.org, chromiumdash, wiki.archlinux.org, en.opensuse.org.
status: research — not yet promoted to .context/
---

# Release calendars, LTS and support windows

## 0. How to read this report

- **[V]** verified: read on the URL given, 2026-09-30. Caveat: WebFetch summarises; a figure marked [V] was in the summary, not read character by character. Load-bearing numbers should be re-read on the page before promotion.
- **[M]** from memory (training data, not checked today). Treat as candidate.
- **[I]** inference by me.
- Several fetched pages show 2026 dates that are later than some of my memory (Node.js 26 released, Go 1.27, Kubernetes 1.37, Firefox 158). I trust the pages over memory where they disagree.
- Gaps are listed in section 12.

## 1. Runtimes

### Deno [V unless marked]
Source: https://docs.deno.com/runtime/fundamentals/stability_and_releases/
- Cadence: a new stable minor "on a 12 week schedule"; patches as needed. Four channels: stable, lts, rc, canary (canary several times daily).
- LTS: a single line, backwards-compatible fixes, security patches, critical fixes only; "API changes and major new features will not be backported". Aimed at enterprise users.
- LTS windows listed (start to end): v2.1 2025-02-01 to 2025-04-30; v2.2 2025-05-01 to 2025-10-31; v2.5 2025-11-01 to 2026-04-30; v2.9 2026-07-01 to 2027-01-31 (current, "starting with v2.9.3").
- Observation: the windows are aligned to month boundaries and are of unequal length (3, 6, 6, 7 months). LTS start is tied to a patch number (v2.9.3), not only a date.
- Not verified: how Deno announces a slip; whether an LTS pick can be revoked; whether the table is generated from a data file. The docs.deno.com page was the only one read; I did not find deno.com's own calendar page.

### Node.js [V]
Sources: https://nodejs.org/en/about/previous-releases ; https://github.com/nodejs/Release ; https://endoflife.date/nodejs
- Historic rule (to Node.js 26): majors branch from main every six months, even in April, odd in October. Odd: Current only, unsupported after about six months. Even: Current, then Active LTS, then Maintenance.
- Repo README: even versions get 12 months active, then 18 months maintenance (30 months total). LTS promotion happens by a semver-minor release in coordination with the new odd major.
- Phases named on the page: Current (6 months), Active LTS, Maintenance LTS, End-of-Life. Every LTS line has a codename (v24 Krypton, v22 Jod, v20 Iron, v18 Hydrogen); upcoming codenames are pre-listed in CODENAMES.md in the repo.
- New rule from Node.js 27: annual releases, every major moves to LTS after 6 months Current "plus 6 additional months of Alpha phase" (page wording; the summary was ambiguous on ordering). The page states this "starting Node.js 27".
- Date discipline (README quote, [V]): "The exact date that a release will be moved to LTS, moved between LTS modes, or deprecated will be chosen no later than the first day of the month it is to change. If the release team plans to change the release date, it will be done with no less than 14 days notice." So the calendar has a stated notice period for changes, and dates are month-granular until they are pinned.
- Published as: web table, schedule.json and schedule.svg in the repo, and endoflife.date. iCal: not verified for nodejs.org itself.
- endoflife.date/nodejs shows (odd for "Node.js 26 (Upcoming LTS)" label): v26 released 2026-05-05, active support to 2027-10-27, security to 2029-04-30; v24 released 2025-05-06, active to 2026-10-20, security to 2028-04-30; v22 active ended 2025-10-21, security to 2027-04-30; v20 security ended 2026-04-30.
- Note: v22 first released 2024-04-24 per nodejs.org, but endoflife.date summary says v20 released "April 18, 2023" while nodejs.org says Apr 17, 2023. One day difference between sources, plausibly timezone or first-tag vs announcement. [I] Unresolved.

### Python [V]
Sources: https://peps.python.org/pep-0602/ ; https://www.python.org/downloads/
- PEP 602 (created 2019-06-04, status Active): annual, October, 12-month delta. About 17 months of development per version: pre-alpha 5 months (overlaps previous version's beta/RC), alpha 7, beta 3, release candidates 2. "No new features" freeze at Beta 1 (PEP example: beta 1 2020-05-18, final 2020-10-05).
- Support: 24 months bugfix (about bimonthly releases), then 36 months security-only source releases; final release 5 years after 3.X.0. Applies to 3.13 onward; 3.9 to 3.12 had 1.5 years bugfix plus 3.5 years security.
- PEP does not define a slip procedure beyond "RCs can exceed two".
- python.org/downloads (2026-09-30): 3.15 pre-release, planned 2026-10-01, end of support 2031-10; 3.14 bugfix (2025-10-07 to 2030-10); 3.13 bugfix; 3.12 and 3.11 security; 3.10 security to 2026-10; 3.9 EOL 2025-10-31. Latest 3.14.7 and 3.13.15 (2026-08-05).
- Observation: the downloads page shows a planned date ("2026-10-01 (planned)") for a version that is in pre-release; EOL is given only as year-month.

## 2. Languages and toolchains

### Rust [V for process; M for editions]
Source: https://forge.rust-lang.org/release/process.html
- Six-week trains: nightly, beta, stable. Branch promotion on a Monday; stable released Thursday; release must start and finish within the release day in UTC; takes about 75 to 90 minutes.
- Slip handling: not addressed on the page. [M] The train is strict; a bad release is fixed by a point release (1.x.1); the next train date does not move.
- Editions [M]: 2015, 2018, 2021, 2024; roughly every three years; opt-in per crate; not a version branch. Only the latest stable is supported [M]; no LTS.

### Go [V]
Source: https://go.dev/doc/devel/release
- Major every six months (February and August). Each major is supported until two newer majors exist. Security fixes via minor revisions (1.x.y).
- Page at fetch time listed Go 1.27.0 (2026-08-19), 1.27.1 and 1.26.8 (2026-09-01), 1.25.14 (2026-08-19). The summariser called these template data; I read them as real 2026 data. [I]
- Observation: support end is not a date; it is "when release N+2 ships". The EOL of 1.25 therefore is a function of when 1.27 shipped.

### Java [M; official page 403]
- Feature release every six months (March, September). LTS every two years since 2021 (8, 11, 17, 21, 25). Oracle "Premier" and "Extended" support; other vendors (Temurin, Corretto, Red Hat, Azul) publish their own EOL dates, often longer. Non-LTS supported six months. Roadmap page fetch failed; do not quote dates from this report.
- Gap: Oracle disclaimers ("subject to change") not verified.

## 3. Distributions

### Ubuntu [V]
Source: https://ubuntu.com/about/release-cycle
- Six-monthly, YY.MM naming. LTS every two years (April even years): 20.04, 22.04, 24.04, 26.04 (released April 2026).
- LTS: 5 years standard security maintenance; ESM up to 10 years via Ubuntu Pro; Legacy add-on for a further 5 years, 15 years total. Interim: 9 months.
- [M] Freeze stages in each cycle: Feature Freeze, UI Freeze, Beta Freeze, Final Freeze, Release Candidate; point releases of LTS (.1 in August of the year after) ; slips of days occur and are shown on the release schedule wiki. Not fetched today.

### Debian [V]
Source: https://wiki.debian.org/DebianReleases
- No fixed cadence; "about 2 years". Freeze cycle 7 +/- 1 months; Debian 13 (Trixie) had a 116-day freeze; released 2025-08-09.
- Support: 3 years full; then LTS (volunteer/funded), then ELTS (commercial, Freexian). Table: Bookworm 12 released 2023-06-10, standard EOL 2026-07-12, ELTS end 2033-06-30; Bullseye 11 released 2021-08-14, EOL 2024-08-14, LTS end 2026-08-31, ELTS 2031-06-30; Buster 10: 2019-07-06, EOL 2022-09-10, LTS end 2024-06-30, ELTS 2029-06-30.
- Observation: standard-EOL date for Bookworm (2026-07-12) is one year after its successor's release pattern ("about one year to upgrade"); the date depends on when Trixie shipped.
- [M] Freeze stages: transition freeze, soft freeze, hard freeze (packages), full freeze; "release when ready", release-critical bug count decides.

### Fedora [M; page blocked]
- Two releases a year (April/May and October/November). Each supported until four weeks after release N+2 (about 13 months). Schedule has "Early Target Date #1", "Target Date #1", "#2"; a Go/No-Go meeting the Thursday before decides; a slip moves the release by exactly one week (target dates are on Tuesdays) and the schedule page updates. Branch from Rawhide, Beta freeze, Final freeze. Fedora Linux 42 slipped a week [M, unverified]. Treat all as unverified.

## 4. Rolling releases [M; both pages blocked]
- Arch Linux: no versions of the distribution; packages updated continuously; monthly ISO snapshot named by date (2026.10.01 style) exists only as an installer. No EOL of "a release"; individual packages have their own upstream EOL. Manual interventions announced in news.
- openSUSE Tumbleweed: rolling; snapshots that pass openQA automated tests are published; snapshot identified by date (e.g. 20260929). Leap (point release, aligned with SUSE Linux Enterprise) and Slowroll exist beside it.
- Difference from point releases [I]: a point release has an identity (version), a start, a support window and an end. A rolling distribution has an identity but no end for the whole; each part has a version and an end. "Supported until" turns into "supported while it keeps moving", and a machine falls out of support by not updating, not by a date.
- Gap: I could not read either project's own statements. Confirm before promoting.

## 5. Browsers

### Firefox [V for schedule]
Source: https://whattrainisitnow.com/calendar/
- 4-week cycle. Page shows: Firefox 158 nightly Sept 13, beta Sept 24, release Oct 13; 159 release Oct 27; 160 Nov 10; 161 Nov 24; 162 Dec 8; 163 Jan 12 (six weeks, holiday gap); 164 Jan 26. So the cadence is 28 days but is stretched at year end. Each version is nightly then beta then release.
- ESR: paired release e.g. "153.5 + 115.43.0" as listed by the page summary (ESR 153 and 115 both receive updates). [M] ESR about 12 months plus an overlap of a few release cycles of the next ESR.
- Published by Mozilla's "Firefox Release Calendar" wiki and whattrainisitnow (JSON API); [M].

### Chrome [M; fetch failed]
- Milestones (M1xx) every 4 weeks; branch point, beta, stable roll-out (staged percentages), Extended Stable every 8 weeks for enterprise; early stable to a small share a week before. Chromium Dash publishes JSON for schedule. Enterprise release notes and a Chrome Enterprise "Extended stable" channel exist. Verify.

## 6. Platforms

### Kubernetes [V]
Source: https://kubernetes.io/releases/
- Release branches maintained for the three most recent minors. From 1.19: about a year of patch support (the older 9 months). The user's "about 14 months" premise: the page says about one year of patch support plus an end-of-life period; the page's EOL column shows 1.37 EOL 2027-10-28, 1.36 EOL 2027-06-28, 1.35 EOL 2027-02-28, and 1.34 EOL 2026-10-27 with the star "in end-of-life phase". [I] The extra weeks/months over 12 come from a 2-month maintenance mode; not stated on the summary I read. [M] Original policy text: "one year of patch support, plus two months maintenance mode".
- Patch releases on a published monthly schedule (kubernetes.io/releases/patch-releases/), all four branches on one day (2026-09-15 for all four).
- 1.38 schedule lives in kubernetes/sig-release (release-1.38 folder). [M] Cadence: three per year, roughly April, August, December. The cycle has enhancement freeze, code freeze, test freeze, RC, and the release date; shifted by a "release lead" decision and announced on dev mailing list.
- Published as: web page + patch-releases page + GitHub repo YAML/markdown + endoflife.date.

### Android and iOS [M; not fetched]
- iOS: major in September with the new iPhones announced at a September event; betas from June (WWDC). Point updates x.1 to x.6; devices dropped by hardware. No formal support window; security fixes for latest and sometimes previous major, not publicly committed.
- Android: yearly major (AOSP release timing changed in 2025 to Q2 with Q4 minor), Pixel support window is 7 years for recent Pixels, per device. Monthly security bulletins with patch level dates (2026-10-05 style). Support belongs to the device maker, not the OS. Verify.

### Windows [V for servicing summary; rest M]
Source: https://learn.microsoft.com/en-us/windows/release-health/release-information (page shown was Windows 10)
- Channels: General Availability Channel, Long-Term Servicing Channel (LTSC), legacy LTSB; the Semi-Annual Channel folded into GAC.
- Home/Pro about 18 to 24 months per version; Enterprise/Education longer. Windows 10 22H2 ended 2025-10-14. LTSC 2021: mainstream to 2027-01-12, IoT Enterprise extended 2032-01-13. LTSC 2019 (1809): extended to 2029-01-09. Dates ISO 8601.
- Extended Security Updates (consumer ESU for Windows 10, [M]) sold per year after end of servicing.
- Second Tuesday patch cycle ("Patch Tuesday") [M].

## 7. Enterprise support tiers [M with some V]
- Pattern across vendors: (1) full support / mainstream, (2) maintenance / security-only, (3) paid extended security (Ubuntu Pro ESM [V], Debian ELTS [V], Windows ESU [M], RHEL ELS [M], Node.js commercial support [V, listed by endoflife.date as "commercial support available"], Java vendor extended support [M]).
- Red Hat: RHEL major about 10 years; phases Full Support, Maintenance, Extended Life; minor releases with EUS. [M]
- Observation [I]: the extended tier is often sold by a third party, not the project; the calendar the project publishes ends earlier than the calendar customers actually live on.

## 8. endoflife.date as a shared data source [V/M]
Sources: https://endoflife.date/docs/api/v1/ ; https://endoflife.date/nodejs
- Community-maintained (open source, GitHub) per-product pages and an API v1 with Swagger UI. Fields per release cycle: release date, eol, lts, support (active), extendedSupport, latest version. Date fields can be a date, a boolean, or unknown/null (a boolean "true"/"false" means "supported, no date yet" or "no longer/never"). iCal export exists per the summary. [V from summary; check field names against the schema before use.]
- It normalises very different vocabularies (Node's Current/Active/Maintenance, Ubuntu's standard/ESM, Kubernetes's patch support) to a few columns, losing the phase names and rules; it has a per-product "Release policy" text. [I]
- Data entered by maintainers with citations; the upstream may not endorse it. [M]

## 9. Versioning and models
- Semantic versioning [M]: MAJOR.MINOR.PATCH. Tells about API compatibility, not about time. Calendar versioning (Ubuntu 26.04, pip 26.2, Python's minor is de facto annual) puts the time in the name.
- Release trains [V Rust, Firefox, Kubernetes, Go]: the date is fixed, content is whatever is ready. Feature-based [M]: Debian ("when it is ready"), older Python and Linux kernels (about 9 to 10 weeks, merge window then rc1 to rc7/8, Linus decides). Hybrids: Node.js pre-27 (date fixed, LTS promotion date chosen in the month before).
- Code freeze and RC [V/M]: Python (beta 1 = feature freeze, 2 RCs [V]); Debian freeze 7 +/- 1 months [V]; Kubernetes code freeze [M]; Fedora branch and freezes [M]; Ubuntu freezes [M]; Rust beta branch six weeks before [V].
- Security backports [V/M]: Go fixes supported N and N-1 by minor revision [V]; Deno LTS gets backports only [V]; Python security-only phase [V]; Debian security team and LTS [V/M]; Kubernetes patch on all supported branches same day [V]; Ubuntu security via ESM on universe/main [M]. The backport target list is the support window made concrete.

## 10. Slips and moving dates
What was verified:
- Node.js: move dates are announced with at least 14 days notice and dates are pinned by the 1st of the month [V].
- Rust: single-day process in UTC [V]; slips not described.
- Python PEP 602: additional RCs allowed, no rule that later dates move [V].
- Debian: no date to slip; freeze length varies [V].
What is from memory:
- Fedora slips one week at a time and later milestones shift with it [M].
- Ubuntu and Kubernetes publish revised schedule pages and announce on lists [M].
- Kernel: an extra rc week pushes everything. [M]
Gap: I did not find any project stating whether later dates "move with" a slipped one as a general rule, other than Fedora (M). This is a real gap.

## 11. Company calendars for users and shareholders [M; nothing fetched]
- Product roadmaps: quarter or half labels ("Q3", "H2"), often with "planned", "subject to change" disclaimers; some use Now / Next / Later buckets with no date at all. Public roadmaps (GitHub Projects, Microsoft 365 Roadmap with "rolling out" and "launched"; Android/Apple do not publish dates).
- Launch events: date announced weeks ahead by invitation (Apple in September, Google I/O in May, Microsoft Build, AWS re:Invent in Dec, WWDC in June); the event date is a commitment; product ship dates are declared at the event.
- Investor relations: earnings dates are "expected" until the company issues a press release with the "confirmed" date and dial-in; aggregators (Nasdaq, Yahoo, Wall Street Horizon) mark dates as "estimated" or "confirmed". Quarterly cadence tied to the fiscal calendar (fiscal year need not equal calendar year). Annual general meeting date fixed by bylaws/law, proxy statement sets the record date; in US, 10-Q within 40 days (large accelerated filers) and 10-K within 60. [M, verify.]
- Quiet period: company restricts communications with investors and analysts before earnings (typically two to four weeks); also the SEC "quiet period" around an IPO and Regulation FD (selective disclosure). Effect: a product announcement date can be forced away from the days before earnings. [M]
- Forward-looking statements: companies attach safe-harbor language so "planned" carries no promise. [M]
- Gap: no company IR page was read.

## 12. Gaps
- Java, Fedora, Chrome, Arch, openSUSE pages not read (403, Anubis block, or empty).
- No deno.com/blog or LTS announcement page read.
- No iCal feed inspected (Ubuntu, Fedora, Kubernetes iCal feeds exist [M]).
- No IR page, roadmap page, or SEC rule read.
- WebFetch results are summaries; numbers such as Kubernetes "about a year" vs the user's "about 14 months" should be re-read on the page.

## 13. Observations relevant to CTCP's premise
Observations only.

1. A support end is stated in three different ways: a fixed date (Deno, Debian, Windows), relative to another release (Go: until two newer majors; Fedora: four weeks after N+2), or relative to a phase (Node.js: 12 months then 18). The same end date is then derived from another release's date, so it moves when that release moves.
2. Phases are named states with a duration attached (Current 6 months, Active LTS, Maintenance, EOL); the start of a phase can be a date or an event ("with v2.9.3", "when the next odd major ships").
3. Dates come with a commitment level that changes over time: Node.js pins the exact date no later than the 1st of the month and gives 14 days notice on change; Python page says "(planned)"; endoflife.date allows date, boolean or unknown; IR calendars say expected then confirmed. A date is a claim by someone at a time.
4. A calendar is a projection of another thing: the Firefox cadence is 28 days, stretched to 42 days over the year end. Node.js switching from even/odd to annual from 27 shows the calendar rule itself changes at a version boundary.
5. Order without time appears as codenames lists (Node.js upcoming codenames), Debian's "release when ready", and Go's "two newer majors". The rolling release has order (snapshots) and identity by date but no end.
6. The same product has several audiences with different calendars: project EOL, vendor ESM (Ubuntu Pro, ELTS), commercial support, cloud provider support, and a customer's own upgrade calendar. One dependency's EOL becomes another product's forced date.
7. Publishing is many-to-many: repository JSON/SVG (Node.js), web table (Deno, Kubernetes), wiki (Debian), community aggregator (endoflife.date), iCal, and press release. Aggregators lose phase vocabulary.
8. Timezones show up in the definition of a release day (Rust: UTC day, 75 to 90 minutes), and date-only fields hide it (Node.js first-release differing by one day across two sources, unresolved).
9. Slip behaviour is rarely written down; where it is (Node.js 14 days notice, Fedora one week [M]) it is a rule of the calendar, not an exception.
10. Company calendars add a second kind of constraint: a legal or contractual constraint (quiet period, AGM by bylaw) that does not come from the product at all but blocks or forces product dates.

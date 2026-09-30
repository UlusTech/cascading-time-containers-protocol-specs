---
topic: How time works in stock exchanges and financial markets (sessions, calendars, settlement, corporate events, derivatives, macro, bonds, fiscal periods, clocks, zones, shared calendar data)
date: 2026-09-30
sources read with dates:
  - https://www.nyse.com/markets/hours-calendars — fetched 2026-09-30 (via summarising fetch, not raw page)
  - https://www.sec.gov/newsroom/press-releases/2023-29 — fetched 2026-09-30 (SEC T+1 adoption press release)
  - https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm — fetched 2026-09-30
  - https://github.com/gerrymanoim/exchange_calendars — fetched 2026-09-30 (README summary)
  - FAILED 2026-09-30: borsaistanbul.com trading-hours pages (socket hang up); eur-lex.europa.eu RTS 25 (Delegated Regulation 2017/574) returned empty content; ESMA PDF was unreadable (image-encoded). No search was attempted (rate limit warning).
  - pandas_market_calendars and SIFMA pages were NOT read; everything about them is from memory.
status: research — not yet promoted to .context/
---

# Financial markets and time

Method note. Only four pages were actually read, and each through a summarising fetch tool, so "verified" below means "stated by that summary of that page on 2026-09-30", not "read verbatim". Everything else is **[memory]**: training-data recall, unverified, possibly stale. Section 14 lists gaps. Nothing here is investment advice.

## 1. Verified facts (with URLs)

### 1.1 NYSE hours and holidays — https://www.nyse.com/markets/hours-calendars
- Core session 09:30-16:00 ET, with opening and closing auctions.
- Pre-open sessions differ per venue in the NYSE group: from 02:30 ET (NYSE Arca) to 06:30 ET (NYSE, American, National, Texas). Late sessions run to 20:00 ET on select markets.
- 2026 closures: 1 Jan (Thu), 19 Jan (Mon), 16 Feb (Mon), 3 Apr (Fri, Good Friday), 25 May (Mon), 19 Jun (Fri), 3 Jul (Fri, Independence Day observed, because 4 Jul is a Saturday), 7 Sep (Mon), 26 Nov (Thu), 25 Dec (Fri).
- 2027 closures: 1 Jan (Fri), 18 Jan, 15 Feb, 26 Mar (Good Friday), 31 May, 18 Jun (Juneteenth observed, since 19 Jun is a Saturday), 5 Jul (Mon, observed), 6 Sep, 25 Nov, 24 Dec (Fri, Christmas observed).
- Early close 13:00 ET: day after Thanksgiving (both years); 3 Jul 2026 is listed by the fetch summary as an early close as well as a closure — this is contradictory in the summary and is probably a summarisation error (a day cannot be both). Treat as unresolved. 24 Dec 2026 (Thursday) early close.
- Observation: a Saturday holiday moves to the Friday before, a Sunday holiday to the Monday after, but not uniformly (New Year's Day falling on a Saturday is famously not moved by NYSE **[memory]**).

### 1.2 SEC T+1 — https://www.sec.gov/newsroom/press-releases/2023-29
- SEC shortened the standard settlement cycle for most broker-dealer securities transactions from T+2 to T+1. Compliance date 28 May 2024.
- Institutional trade processing: allocations, confirmations and affirmations due "as soon as technologically practicable and no later than the end of trade date".
- Central matching service providers must facilitate straight-through processing and report annually.

### 1.3 FOMC — https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm
- 2026 meetings: 27-28 Jan, 17-18 Mar (projections), 28-29 Apr, 16-17 Jun (projections), 28-29 Jul, 15-16 Sep (projections), 27-28 Oct, 8-9 Dec (projections).
- 2027: 26-27 Jan, 16-17 Mar, 27-28 Apr, 8-9 Jun, 27-28 Jul, 14-15 Sep, 26-27 Oct, 7-8 Dec. Also 25-26 Jan 2028.
- All are two-day meetings. Minutes are released three weeks after the policy decision. "Each meeting date is tentative until confirmed at the meeting immediately preceding it." The FOMC also holds other meetings as needed.

### 1.4 exchange_calendars — https://github.com/gerrymanoim/exchange_calendars
- Python library, 50+ exchange calendars identified by ISO 10383 MIC (XNYS, XTKS, XHKG ...).
- A **session** is a whole trading day; sessions are separate from the intraday minutes. Lunch breaks and other intraday closures are modelled separately from holidays. Pre-trading, post-trading and auction periods are treated as closed.
- Minute granularity (trading minutes, break minutes, custom-length trading index). All timestamps UTC-aware; local open/close preserved.
- (From the summary only: the README's treatment of ad hoc closures and special opens/closes was not confirmed; from memory the library has `adhoc_holidays`, `special_opens`, `special_closes`, and a `changes` mechanism for schedule changes over history.)

## 2. Trading sessions [memory unless noted]

A trading day is not one interval but a sequence of phases with different rules (order types accepted, whether matching occurs, whether prices are public):

| Venue | Phases (local time) — all [memory] |
|---|---|
| NYSE / Nasdaq | Pre-market from about 04:00 (Nasdaq) with venue-specific starts (verified above for NYSE group); opening auction/cross at 09:30; continuous to 16:00; closing auction/cross at 16:00; post-market to 20:00. |
| LSE (SETS) | Opening auction 07:50-08:00; continuous 08:00-16:30; closing auction 16:30-16:35; random uncrossing end of each auction (a randomised end within a 30-second window) **[memory]**; a periodic intraday auction on stocks that hit volatility limits. |
| Xetra | Opening auction from 08:50 to about 09:00; continuous 09:00-17:30; closing auction 17:30-17:35; intraday auction at 12:00 for some; volatility interruptions convert continuous trading into an auction. |
| Tokyo (TSE) | Morning 09:00-11:30, lunch break, afternoon 12:30-15:30 (closing extended from 15:00 to 15:30 in Nov 2024 **[memory, verify]**). Opening and closing call auctions ("itayose"). |
| Borsa Istanbul (BIST) | Pre-open order-entry and opening session before 10:00; continuous 10:00-18:00; closing session to about 18:10 **[memory, low confidence; fetch failed]**. Half-days before religious holidays with a shortened continuous session. |

Key structural points:
- Auctions are mini-events with their own internal ordering (call phase, then uncross, then continuous). Their end may be randomised, and may be extended if imbalance or price limits are breached **[memory]**.
- Different venues trading the same stock have different phases at the same instant (US pre-market vs. lunch break in Tokyo).
- "The close" is ambiguous: last continuous trade, closing auction price, or official closing price computed by a rule (VWAP of a window on some venues) **[memory]**.

## 3. Holidays, early closes, halts

- Holiday calendars are per exchange, not per country: NYSE closes on Good Friday, LSE and Xetra also do, but Nasdaq Nordic and others differ; Japan closes for its own public holidays and "Golden Week"; Turkey has religious holidays (Ramazan/Kurban Bayramı) whose dates depend on the lunar calendar and are announced by the state, often with a bridging administrative leave decided late (sometimes extending to 9 days) **[memory]**.
- Early closes: US 13:00 ET (verified above); LSE 12:30 on 24 and 31 Dec **[memory]**; Xetra closes on 24 and 31 Dec **[memory]**; BIST half-days on the eve of bayrams **[memory]**.
- Unscheduled closures happen: US national days of mourning (Reagan 2004, Ford 2007, G.H.W. Bush 5 Dec 2018, and a closure for Carter on 9 Jan 2025) **[memory]**; hurricane Sandy closed US equities on 29-30 Oct 2012 **[memory]**; the 11 Sep 2001 closure lasted until 17 Sep **[memory]**; LSE was closed for the Queen's funeral bank holiday 19 Sep 2022 **[memory]**. When a market is closed unexpectedly, settlement, option expiry, dividend dates and interest accrue by rules made up or restated after the fact (US regulators/SIFMA/DTCC issue notices) **[memory]**.
- Market-wide circuit breakers (US) **[memory]**: Level 1 at 7%, Level 2 at 13% and Level 3 at 20% decline of the S&P 500 versus the prior close. L1 and L2 halt trading 15 minutes if triggered before 15:25 ET, and do nothing after 15:25; L3 halts for the rest of the day at any time.
- Single-stock Limit Up-Limit Down (LULD) **[memory]**: price bands (about 5% for larger names, 10% for others, wider for low-priced stocks and doubled in the first and last 25 minutes); if price stays at a band for 15 seconds, trading pauses 5 minutes. Other venues use fixed daily price limits (BIST ±10%, TSE daily limits by price) **[memory]**.
- A halt during an auction is a real design problem for venues: the auction is suspended and resumes, extends, or is replaced by a reopening auction **[memory]**.

## 4. Settlement [mostly memory; US verified in 1.2]

- US: T+1 since 28 May 2024 (verified). Canada and Mexico moved 27-28 May 2024, alongside **[memory]**. Earlier: T+3 → T+2 in Sep 2017; T+5 → T+3 in 1995 **[memory]**.
- UK and EU: both planned to move to T+1 on **11 Oct 2027** **[memory; the UK Accelerated Settlement Taskforce and ESMA recommended this date; I have not verified after that]**. Switzerland aligns with the EU **[memory]**. India moved to T+1 in stages 2022-2023 **[memory]**.
- "T+n" is counted in business days, and a business day depends on more than one calendar: the securities market being traded, the currency's payment system (Fedwire/TARGET2/CHAPS), and the settlement depository. A trade in a Japanese stock bought with dollars needs both a Japanese business day and a US dollar business day for the money leg (this is why FX has "spot = T+2 counted in business days in both currencies, with US holidays skipped only for the day-counting of USD legs" **[memory]**).
- Misaligned cycles: ETF settlement vs. its underlying, US ADR vs. home-market shares, and FX legs (FX spot is still T+2) all produce mismatches after T+1 **[memory]**.
- Fail dates and buy-ins follow after the intended settlement date, with penalties in the EU (CSDR settlement discipline) **[memory]**.

## 5. Corporate calendars [memory]

Dividend timeline (all dates set by the company board and/or exchange rule):
- Declaration date → ex-dividend date → record date → payment date.
- The ex-dividend date is derived, not chosen: the record date minus one settlement cycle. Under T+2 the ex-date was record date minus 1 business day; under T+1 the ex-date and record date coincide (US, since 28 May 2024). Buy on or after the ex-date and you do not get the dividend. If a holiday sits between, business days (not calendar days) are counted, so a change in the holiday calendar moves the ex-date.
- In markets with different cycles or different record-date mechanisms, the derived ex-date differs for the same corporate announcement across cross-listings (e.g. a cross-listed company in the US and Xetra).

Earnings:
- Companies report quarterly on dates near, but not on, the fiscal quarter's end; data vendors distinguish "confirmed" (the company announced) from "estimated" (projected from last year's pattern) dates. An estimated date can be wrong by weeks; a confirmed date can be moved. Before-market-open / after-market-close timing matters as to which trading day reacts **[memory]**.
- Earnings seasons: about 2-6 weeks after quarter end, clustered, with big banks first (mid-January/April/July/October) **[memory]**.

AGMs:
- Annual general meetings have legal notice periods (e.g. 21-30 days before the meeting in many jurisdictions) and record dates for voting eligibility; the AGM date is fixed by the board within a statutory deadline after the fiscal year end (e.g. Turkey: within 3 months after year end for the ordinary general assembly **[memory, low confidence]**). Dividends are often proposed at the board, approved at the AGM, and paid afterwards.

Insider windows / quiet periods:
- Firms set blackout windows for insiders, typically starting some weeks before quarter-end or before earnings and ending 1-2 trading days after release. Rule 10b5-1 plans have cooling-off periods **[memory]**. The window is anchored to an event (the earnings release) and to a quarter end, so a moved earnings date moves the window.
- Quiet periods around IPOs (the 25-day research quiet period after IPO was shortened by JOBS Act changes; the term "quiet period" also refers to pre-filing publicity limits) **[memory]**.

IPO and lock-up:
- Timeline: filing, roadshow, pricing, first trade, then settlement (T+1 after pricing/first trade for IPOs, T+2 traditional) **[memory]**. Lock-up expiry typically 90-180 days after the IPO date, sometimes with staged or earnings-linked early releases, e.g. "release if the stock trades 25% above IPO price for 10 of 15 days" (event-conditioned) **[memory]**.

## 6. Derivatives [memory]

- US listed equity options expire on the third Friday of the month (standard monthlies); if that Friday is a holiday, expiry moves to Thursday. Weekly and daily expiries also exist. Since 2015, standard monthly expiry stopped being Saturday.
- "Quad witching" = third Friday of March, June, September, December: index futures, index options, single-stock futures and options expire together. Sept 2026: Friday 18 Sep. Dec 2026: Friday 18 Dec. Mar 2027: Friday 19 Mar.
- Futures: contract months (e.g. quarterly H/M/U/Z = Mar/Jun/Sep/Dec), last trading day and first notice day differ per contract; most traders roll to the next contract before the front expires. Roll dates are a convention (e.g. 8 days before expiry for the "roll" in some index trackers), not a fact of the exchange **[memory]**.
- Index rebalancing/reconstitution: S&P quarterly rebalances effective after the close of the third Friday of Mar/Jun/Sep/Dec; Russell reconstitution annually in late June (moved to semi-annual from 2026 **[memory, low confidence]**); MSCI semi-annual reviews. Announcements come days to weeks before; effective dates are on the close.
- Expiry timestamps: exchange settlement prices can be defined by opening prints (SOQ) or closes; an early close changes the price time.

## 7. Macro calendars

- FOMC: eight per year, all two-day in 2026/27 (verified). The market-relevant moment is the statement release at 14:00 ET on day two **[memory]**, not the meeting date. Minutes three weeks later (verified).
- ECB Governing Council monetary policy meetings: eight per year, published years ahead **[memory]**.
- TCMB (Turkey's central bank) Monetary Policy Committee: eight meetings a year since 2024, having been twelve previously **[memory, low confidence]**; the calendar is published in advance for the year.
- Data releases (CPI, NFP, GDP): published on agency release calendars set a year ahead; revisions later restate the same figure for the same period. Embargo times are exact to the second, with "lock-up" rooms for journalists **[memory]**. Releases are cancelled or delayed (e.g. US government shutdowns delayed releases, Oct-Nov 2025 **[memory]**).

## 8. Bonds and ISDA-style date arithmetic [memory]

- Coupon schedule: generated backward from maturity at fixed intervals (e.g. every 6 months) — "unadjusted" schedule dates — then each date adjusted to a business day; accrual periods may use unadjusted dates.
- Business-day conventions: Following (next business day), Modified Following (next business day unless it crosses into next month, then previous), Preceding (previous). Also "no adjustment".
- Day counts: ACT/360 (money markets), ACT/365 Fixed (sterling, some others), ACT/ACT (ISDA / ICMA), 30/360 (US corporates, "Bond basis"; variants for end-of-February and 31st). Leap years change ACT/ACT and can change ACT/365 by a day across 29 Feb. In ACT/ACT ISDA, days in a leap year part are divided by 366 and the rest by 365.
- End-of-month rule: a bond whose maturity is on the last day of a month keeps that "end-of-month" property.
- Business days here depend on named holiday centres (e.g. "London + New York"), and the ISDA definitions specify the centres per trade.
- Accrued interest at settlement depends on the settlement date (business-day arithmetic) and the day-count.

## 9. Fiscal and tax periods [memory]

- Fiscal years: US federal government 1 Oct-30 Sep; many firms use retail-oriented or off-calendar years (Apple, Microsoft on 30 Jun year end, etc.); Japan common fiscal year 1 Apr-31 Mar; UK personal tax year 6 Apr-5 Apr; India 1 Apr-31 Mar. Turkey: calendar year is standard, with special fiscal periods allowed with approval.
- Fiscal quarters (Q1 of a June FY = Jul-Sep) label the same instants differently, so "Q3 earnings" from two firms may report on different months.
- Tax-year end drives behaviours (tax-loss selling in Dec in the US, wash-sale windows spanning the year boundary of 30 days each side, UK ISA allowance reset on 6 Apr).

## 10. Clocks and timestamps

- MiFID II RTS 25 (Commission Delegated Regulation (EU) 2017/574) **[memory; source fetch failed]**: trading venues and members must synchronise business clocks to UTC (traceable to a UTC time source such as GPS or a national lab). Maximum divergence and timestamp granularity depend on activity: high-frequency algorithmic trading: 100 microseconds divergence, 1 microsecond or better granularity; venue operators whose gateway-to-gateway latency is 1 ms or less: 100 µs / 1 µs; venue operators with latency above 1 ms: 1 ms / 1 ms; voice trading: 1 second / 1 second; other: 1 second. Records must show traceability to UTC and be documentable. The exact tier boundaries need checking against the regulation text before use.
- US equivalent: FINRA Rule 4590 requires synchronising to NIST within 50 ms (reduced from 1 second in 2016), and CAT (Consolidated Audit Trail) requires 50 ms for most and finer for electronic-system participants **[memory]**.
- Timestamps are taken at defined points (order receipt, matching, gateway out) so "when did it happen" has several answers.
- Leap seconds: UTC leap seconds cause problems; exchanges and the ITU decided in 2022 to phase leap seconds out by 2035 **[memory]**.

## 11. Time zones and "which day does a trade belong to"

- Each venue has a local day; a global instrument (FX, crypto, futures on CME Globex trading nearly 23 hours) has a trading day that begins at a fixed clock time (CME: 17:00 CT previous calendar day) **[memory]**. A trade at 20:00 New York time on Monday is in "Tuesday's" CME trade date.
- Trade date vs. settlement date vs. value date are each attributed in a specific calendar.
- DST mismatch: US clocks change on different dates than UK/EU (2026: US 8 Mar and 1 Nov; UK/EU 29 Mar and 25 Oct). For about three weeks in March and one week in Oct/Nov, New York is 4 hours behind London instead of 5, and the LSE/NYSE overlap changes from 14:30-16:30 London to 13:30-16:30 London **[calculated from standard rules; the 2026 DST dates are by rule, not read from a source]**.
- Asia has no DST, so its overlap with Europe/US shifts twice a year in local terms.
- FX rollover is at 17:00 New York time regardless of UTC, which floats against UTC with US DST **[memory]**.

## 12. Calendars as shared data

- exchange_calendars (verified in 1.4): per-MIC calendars, sessions, breaks, special closes, UTC timestamps.
- pandas_market_calendars **[memory]**: separate library, built originally on top of zipline calendars; supports "market_time" abstractions like `market_open`, `market_close`, `break_start`, and includes pre/post-market; uses the exchange_calendars data for many exchanges in newer versions. Not read.
- SIFMA **[memory]**: publishes recommended holiday and early-close schedules for the US bond market (recommends full or early close, e.g. 14:00 ET on the day before certain holidays). Recommendations, not law; firms and venues can differ. Not read.
- Both libraries are volunteer-maintained; exchange announcements of ad hoc closures propagate late, which produces windows in which downstream systems disagree about whether a day was a session.
- Holiday data has history: a calendar needs to say what was true then, since exchange hours and holidays change (e.g. Saturday trading ended; hours extended) **[memory]**.

## 13. Gaps

- Borsa Istanbul hours and the Turkish half-day/holiday rules: fetch failed, all memory.
- RTS 25 text: fetch failed; tier figures are memory.
- LSE, Xetra, Tokyo, Nasdaq phase times: memory only.
- UK/EU T+1 date (11 Oct 2027): memory, unconfirmed.
- The NYSE fetch reported 3 Jul 2026 as both a holiday and an early close: unresolved.
- pandas_market_calendars and SIFMA pages not read.
- TCMB and ECB calendars not read.
- ISDA definitions not read; convention descriptions are memory.

## Observations relevant to CTCP's premise

- **Nesting and sharing.** One instant belongs to many overlapping frames at once: a Tokyo lunch break, a New York pre-market, an options expiry day, a fiscal quarter of one company and a different fiscal quarter of another, an insider window. None of these frames owns the others.
- **Sequences that push.** Real events form chains that move each other: an unscheduled closure pushes settlement, which pushes the ex-dividend date, which pushes the payment. A halt pushes an auction, an auction pushes the close, the close pushes the price used at expiry. The push is often by counting business days, not by adding a duration.
- **Order without a clock.** Declaration comes before ex-date comes before record date comes before payment is a fixed order even when a date is unknown; "lock-up ends after earnings" and "insider window ends after the release" are orders anchored to another event, not to a date.
- **Kinds of time.** Financial data already separates exact (statement at 14:00:00 ET), range (an auction window with random end), estimate ("estimated" earnings date), confirmed (upgrade of an estimate to a fact), and rule-derived (the ex-date). A date can change kind without changing its value, and later a fact can be revised (tentative FOMC dates, "tentative until confirmed at the meeting immediately preceding").
- **Calendars are per-purpose, not global.** A "business day" depends on the venue, the currency, the depository, and the trade's named holiday centres. T+1 in one market and T+2 in another meet inside a single transaction. Calendars change over time (T+3 → T+1; Saturday holidays; closing time changed in Tokyo) and history has to keep the old meaning.
- **Counting rules.** ACT/360, 30/360, modified following, third Friday, "record date minus one settlement cycle" are all ways to divide or step through time that are agreed by convention, are named, and are chosen per contract.
- **Servers and partial disclosure.** Each exchange, depository, company and data vendor holds its own authoritative view (its own holiday list, its own confirmed dates); the shared libraries exist because reconciling them is hard, and they lag ad hoc changes. Parties disclose outcomes (a closing price, a confirmed date) rather than internal schedules.
- **Time zones.** A "day" is local; global instruments choose a fixed clock point. Overlap between two frames varies through the year because two governments shift clocks on different days.
- **Precision as regulation.** The required accuracy of a timestamp is itself a rule that varies by activity, and a record of an event is only as exact as the point at which it was stamped.

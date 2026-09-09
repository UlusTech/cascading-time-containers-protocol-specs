# Dates and Recurrence Without a Date Library

A design note on computing weekdays from `(year, month, day)` and expressing repeating
schedules like "every 2 days starting on X", using nothing but integer arithmetic.

---

## 1. The core idea

Two problems look different but reduce to the same thing:

- *"What weekday is 9 September 2026?"*
- *"Is this day part of an every-2-days schedule that started on 1 March?"*

Both become trivial once a date is represented as **a single integer**: the number of days
elapsed since a fixed reference day. Call it the *day number*.

Once you have that:

- weekday is `dayNumber mod 7`
- distance between two dates is a subtraction
- "in 45 days" is an addition
- a recurring schedule is a residue class modulo `step`

Everything below follows from that one move. The calendar (years, months, day names) becomes
a *presentation layer* on top of the integer, not the storage format.

---

## 2. Why the arithmetic works

Two facts do all the heavy lifting.

**The Gregorian calendar repeats every 400 years, weekdays included.**
400 years contain 146,097 days, and 146,097 = 7 × 20,871. Because the day count is divisible
by 7, the whole pattern of dates *and* weekdays resets every 400 years. This makes a 400-year
block ("era") the natural unit of computation.

**Shifting the year to start in March removes the leap-day special case.**
If you treat January and February as months 13 and 14 of the *previous* year, the leap day
lands at the very end of the year instead of in the middle. Two consequences:

- Leap years no longer perturb the offsets of later months.
- Month lengths from March onward follow a regular 31/30/31/30/31 pattern that repeats every
  5 months, which is captured exactly by the closed form `floor((153·m + 2) / 5)`.

The remaining leap-year contribution is the standard `y/4 − y/100 + y/400`.

---

## 3. Approach A — weekday only (Sakamoto's algorithm)

If the *only* thing needed is the name of the day, this is the shortest correct answer. The
table holds the cumulative month offsets, pre-reduced mod 7.

```ts
const T = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];

/** 0 = Sunday, 1 = Monday, ... 6 = Saturday */
export function dayOfWeek(y: number, m: number, d: number): number {
  if (m < 3) y -= 1;
  const s =
    y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + T[m - 1] + d;
  return ((s % 7) + 7) % 7;
}
```

`dayOfWeek(2026, 9, 9) === 3` (Wednesday).

Zeller's congruence solves the same problem by generating the table with a formula instead of
storing it. It is harder to read and offers no advantage.

**What this buys us:** a constant-time weekday with no dependencies and no `Date` object.
**What it does not buy us:** date arithmetic. It is a one-way function.

---

## 4. Approach B — a bidirectional day number

A calendar engine needs more than weekday names: differences between dates, offsets, and
stepping through a schedule. That requires converting *both ways*. The algorithm below is
Howard Hinnant's `days_from_civil` / `civil_from_days` pair. It works for the proleptic
Gregorian calendar over any year, including negative ones, using only integer operations.

```ts
const mod = (a: number, n: number) => ((a % n) + n) % n;

/** (y, m, d) -> days elapsed since 1970-01-01 */
export function toDayNumber(y: number, m: number, d: number): number {
  y -= m <= 2 ? 1 : 0;
  const era = Math.floor(y / 400);
  const yoe = y - era * 400;                                        // [0, 399]
  const doy = Math.floor((153 * (m + (m > 2 ? -3 : 9)) + 2) / 5) + d - 1;
  const doe = yoe * 365 + Math.floor(yoe / 4) - Math.floor(yoe / 100) + doy;
  return era * 146097 + doe - 719468;
}

/** inverse: day number -> (y, m, d) */
export function fromDayNumber(z: number): { y: number; m: number; d: number } {
  z += 719468;
  const era = Math.floor(z / 146097);
  const doe = z - era * 146097;
  const yoe = Math.floor(
    (doe - Math.floor(doe / 1460) + Math.floor(doe / 36524) - Math.floor(doe / 146096)) / 365
  );
  const doy = doe - (365 * yoe + Math.floor(yoe / 4) - Math.floor(yoe / 100));
  const mp = Math.floor((5 * doy + 2) / 153);
  const d = doy - Math.floor((153 * mp + 2) / 5) + 1;
  const m = mp + (mp < 10 ? 3 : -9);
  return { y: yoe + era * 400 + (m <= 2 ? 1 : 0), m, d };
}

/** 1970-01-01 was a Thursday, so the offset is 4 when Sunday = 0 */
export const weekdayOf = (z: number) => mod(z + 4, 7);
```

The constant `719468` is the number of days between 0000-03-01 and 1970-01-01. Changing the
epoch means changing that constant and the `+4` weekday offset — nothing else.

**What this buys us:** one representation that answers every date question. Weekday, interval
length, "N days later", ordering, and recurrence all collapse into integer arithmetic. The
calendar formatting code becomes replaceable without touching any of the logic.

---

## 5. Enumerating specific weekdays

Naive approach: iterate over every day in the range and test it. Unnecessary. Find the first
match, then step by 7.

```ts
export const enum WD { Sun, Mon, Tue, Wed, Thu, Fri, Sat }

export function* weekdaysInRange(
  start: { y: number; m: number; d: number },
  end: { y: number; m: number; d: number },
  target: WD
) {
  const endZ = toDayNumber(end.y, end.m, end.d);
  let z = toDayNumber(start.y, start.m, start.d);
  z += mod(target - weekdayOf(z), 7);           // first target day on or after start
  for (; z <= endZ; z += 7) yield fromDayNumber(z);
}
```

The same alignment trick gives "the nth Tuesday of a month" and "the last Tuesday of a month"
with no loop at all:

```ts
/** nth occurrence (n = 1..5) of a weekday in a month, or null if it doesn't exist */
export function nthWeekday(y: number, m: number, target: WD, n: number) {
  const first = toDayNumber(y, m, 1);
  const z = first + mod(target - weekdayOf(first), 7) + (n - 1) * 7;
  const c = fromDayNumber(z);
  return c.y === y && c.m === m ? c : null;
}

/** last occurrence of a weekday in a month */
export function lastWeekday(y: number, m: number, target: WD) {
  const nextMonth = toDayNumber(m === 12 ? y + 1 : y, m === 12 ? 1 : m + 1, 1);
  const last = nextMonth - 1;
  return fromDayNumber(last - mod(weekdayOf(last) - target, 7));
}
```

**What this buys us:** the cost of listing occurrences becomes proportional to the number of
*results*, not to the length of the range. Rendering a year of Tuesdays is 52 steps, not 365
tests. And `lastWeekday` needs no month-length table — "day before the 1st of next month" is
already correct for February in leap years.

---

## 6. Recurrence as an arithmetic progression

"Every 2 days" is not a set of dates; it is an arithmetic progression. Every progression can
be written two equivalent ways:

| Form | Shape | Used when |
| --- | --- | --- |
| **Generator** | `f(k) = anchor + k · step` | listing the next N occurrences |
| **Predicate** | `(z − anchor) mod step === 0` | highlighting cells in a rendered month |

They are inverses of each other, and a good API exposes both, because the two call sites have
genuinely different shapes.

An important consequence: **"every 2 days" alone is meaningless.** *Which* two days? A phase
is required. The minimum model is therefore:

```ts
type Recurrence = { anchor: number; step: number };  // step >= 1
```

Mathematically this is the congruence `z ≡ anchor (mod step)` — a residue class of the
integers.

---

## 7. Bounding it from below: "every 2 days starting on X"

A bare congruence defines a set that extends infinitely in *both* directions. With
`anchor = 10 September, step = 2`, the 8th of September also satisfies the modular test.
"Starting on X" means taking only half of the residue class: a **half-infinite ray**, bounded
below and open above.

That is the union of two conditions, and the whole implementation is three lines:

```ts
type Recurrence = { start: number; step: number };  // start = day number, step >= 1

export function matches(r: Recurrence, z: number): boolean {
  const diff = z - r.start;
  return diff >= 0 && diff % r.step === 0;
}
```

`diff >= 0` supplies the lower bound; `% step === 0` supplies the phase.

A pleasant side effect: because `diff` is guaranteed non-negative before the modulo runs, the
usual negative-number correction `((a % n) + n) % n` is no longer needed. The bound check
cleans up the arithmetic as well.

### anchor vs. start

In an unbounded series the anchor's actual value is irrelevant — only `anchor mod step`
matters, so 1 January and 3 January generate the identical set. The moment a lower bound
exists, the anchor does **two jobs at once**: it fixes the phase *and* the floor. It can no
longer be shifted freely.

Separating the two is only worth it in one situation: keeping the phase fixed while listing
from a later date (a medication started on 1 March, but the UI is showing only this month).

```ts
type Recurrence = { anchor: number; step: number; from?: number };

export function matches(r: Recurrence, z: number): boolean {
  if (r.from !== undefined && z < r.from) return false;
  return ((z - r.anchor) % r.step + r.step) % r.step === 0;
}
```

If that case is not needed, the single-`start` version is preferable: fewer fields, fewer
ways to get it wrong.

---

## 8. What else falls out of the same structure

```ts
/** which occurrence is this? null if not in the series */
export function indexOf(r: Recurrence, z: number): number | null {
  const diff = z - r.start;
  return diff >= 0 && diff % r.step === 0 ? diff / r.step : null;
}

/** the first occurrence on or after z */
export function nextOnOrAfter(r: Recurrence, z: number): number {
  if (z <= r.start) return r.start;
  return r.start + Math.ceil((z - r.start) / r.step) * r.step;
}
```

`indexOf` answers "this is dose #14" with no scanning. `nextOnOrAfter` avoids the common
mistake of starting at the anchor and walking forward one occurrence at a time — the anchor
may be decades before the window being rendered. Filling a month view becomes: compute the
first hit, then step by `step`.

```ts
export function* between(r: Recurrence, from: number, to: number) {
  for (let z = nextOnOrAfter(r, from); z <= to; z += r.step) yield z;
}
```

**What this buys us:** "every day", "every 2 days" and "every 17 days" stop being separate
code paths. They are one function with a different integer.

---

## 9. The units problem

Days are a fixed size, so modular arithmetic on day numbers works directly. Weeks are too:
**"every 3 weeks" is simply `step = 21`**, not a separate feature.

Months and years are *not* fixed-length, so they cannot live on the day axis. The fix is not a
new algorithm but a **different axis**, with the same three functions applied to it:

```ts
const monthIndex = (y: number, m: number) => y * 12 + (m - 1);
```

On the month axis, "every 2 months" is again `index ≡ anchor (mod 2)`. Yearly recurrence is
the same axis with `step = 12`.

This reduces the whole design to a small number of axes:

| Axis | Index function | Covers |
| --- | --- | --- |
| Day | `toDayNumber(y, m, d)` | daily, weekly, biweekly, "every N days" |
| Month | `y * 12 + (m - 1)` | monthly, quarterly, yearly |
| Sub-day | seconds / ms since epoch | hourly, every-N-minutes |

Converting a month index back to a real date requires clamping the day (31 January + 1 month →
28 or 29 February). That clamping rule is a **policy decision, not mathematics** — keep it in
its own function so it can be swapped without touching the recurrence logic.

---

## 10. Composing rules

Complex schedules do not need new formulas. Intersect predicates instead.

```ts
type Predicate = (z: number) => boolean;

const every    = (r: Recurrence): Predicate => (z) => matches(r, z);
const onWeekday = (wd: WD): Predicate      => (z) => weekdayOf(z) === wd;

const all  = (...ps: Predicate[]): Predicate => (z) => ps.every(p => p(z));
const none = (...ps: Predicate[]): Predicate => (z) => !ps.some(p => p(z));
```

"Every 2 days, but not on weekends" becomes:

```ts
all(every(r), none(onWeekday(WD.Sun), onWeekday(WD.Sat)));
```

One caveat: an intersection is generally **no longer a regular arithmetic progression**, so
the `nextOnOrAfter` jump is not valid for the composed rule. The practical pattern is to use
the narrowest progression as the *generator* and apply the rest as *filters*:

```ts
export function* filtered(
  r: Recurrence, from: number, to: number, ...ps: Predicate[]
) {
  for (const z of between(r, from, to)) if (ps.every(p => p(z))) yield z;
}
```

This still walks only the members of the series, not every day in the range.

---

## 11. Caveats

- **Proleptic Gregorian only.** The conversions extend the Gregorian calendar backwards
  without interruption. The real Julian-to-Gregorian switch (1582 onward, at different dates in
  different countries) is not modelled. For historical records this needs to be an explicit
  flag or a separate calendar implementation.
- **No time zones or DST.** Day numbers are civil dates. Anything involving local wall-clock
  time needs a separate layer; do not try to fold it into the day arithmetic.
- **Bounds are deliberately omitted here.** If a schedule needs an end, prefer either a count
  or an until-date, not both. RFC 5545 (iCalendar) permits both and creates ambiguity as a
  result.

---

## 12. Summary of what was gained

1. **One representation.** Dates become integers; weekday, difference, offset and recurrence
   are all arithmetic on that integer.
2. **No date library, no `Date` object.** Pure integer math, deterministic, testable, and
   portable across languages.
3. **No leap-year branching.** The March-shifted year and the 400-year era absorb it into the
   closed form.
4. **Enumeration proportional to results.** Aligning to the first hit and stepping replaces
   scanning a range.
5. **Recurrence is one function.** Daily, weekly and every-N-days differ only by an integer;
   monthly and yearly reuse the same code on a different axis.
6. **Two dual views of a schedule.** A generator for listing, a predicate for testing —
   derived from the same two fields.
7. **Composition instead of special cases.** Complex rules are intersections of simple
   predicates, so the rule set grows without the algorithm growing.
8. **Policy separated from math.** Month-end clamping, calendar systems, and formatting are
   pluggable; the integer core stays fixed.

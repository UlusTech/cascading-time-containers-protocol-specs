# Hierarchical Date Addressing: Overflow, Carrying, and Normalization

A companion note to `dates-and-recurrence.md`. That document assumes a date is already an
integer. This one deals with the case where dates are stored as **hierarchical paths** —
`year.2026 / month.12 / day.31` — and asks what happens when a value exceeds its unit.

---

## 1. The real problem: an address is not a number

`year.2026/month.12/day.31` is an **address**. It names a position in a tree. Addition is not
defined on addresses, which is why "skip one month" has no direct representation: there is no
field to increment that means *the next month*.

But the address space and the integers are in **bijection**. Every valid path corresponds to
exactly one position on a line, and vice versa. So the working rule is:

> Arithmetic happens on the line. The path is a name for the result.

The two directions of that bijection are the only real work.

And `day.32` is not an invalid address. It is an **unnormalized intermediate form** — the same
way `10·10² + 5` is a legitimate but unsimplified way to write `1005`, or `25:30` is a
legitimate way to say `01:30 the next day`. It should be *accepted* as input and *never
stored*.

---

## 2. Why calendars are harder than clocks

A clock is a regular mixed-radix number system: `s / 60 / 60 / 24`. Every digit has a fixed
base, so carrying is elementary-school arithmetic.

A calendar is a **state-dependent** mixed-radix system: the base of the day digit depends on
the value of the month digit, and (for February) on the year digit too. That single difference
is the entire source of complexity.

From it comes a constraint that must be enforced at the protocol level:

> **A unit's capacity may depend only on units strictly outside it.**

Days may consult month and year. Months may not consult days. Without this rule, normalization
has no well-defined evaluation order and is not guaranteed to terminate. Fortunately every
real calendar obeys it.

---

## 3. The minimum plugin contract

The statement *"a gregorian-year holds 12 gregorian-months"* must be stored as a **function**,
not a constant. That one change is what makes a single engine able to run arbitrary calendars.

```ts
interface Unit {
  name: string;
  min: number;                       // first legal value: 1 for day/month, 0 for hour
  size(outer: number[]): number;     // how many values exist at this level
}

interface Calendar {
  units: Unit[];                     // ordered outermost -> innermost
}

const gregorian: Calendar = {
  units: [
    { name: "year",  min: 0, size: () => Infinity },      // root: carrying stops here
    { name: "month", min: 1, size: () => 12 },
    { name: "day",   min: 1, size: ([y, m]) => daysInMonth(y, m) },
    { name: "hour",  min: 0, size: () => 24 },
  ],
};
```

`Infinity` at the root is the clean way to say "years do not overflow". Everything else about
a calendar — 13-month schemes, variable month lengths, a different epoch — is expressible by
changing `size` and `min`.

---

## 4. Normalization

```ts
function normalizeUpTo(cal: Calendar, p: number[], depth: number): void {
  for (let i = 1; i <= depth; i++) {
    const u = cal.units[i];
    for (;;) {
      const size = u.size(p.slice(0, i));       // prefix is already normalized here
      if (!isFinite(size)) break;

      const offset = p[i] - u.min;
      if (offset >= 0 && offset < size) break;  // in range, done with this level

      const carry = Math.floor(offset / size);
      p[i] = u.min + offset - carry * size;
      p[i - 1] += carry;
      normalizeUpTo(cal, p, i - 1);             // the carry may have broken the prefix
    }
  }
}

export function normalize(cal: Calendar, path: number[]): number[] {
  const p = [...path];
  normalizeUpTo(cal, p, p.length - 1);
  return p;
}
```

Two things make this correct, and both are worth stating explicitly:

**`size` is only ever evaluated on an already-normalized prefix.** When level `i` is processed,
levels `0..i-1` are in range — guaranteed by the outer loop's induction and by the recursive
re-normalization after each carry. This is exactly what the outer-dependency rule from §2 buys.

**A single pass is not enough.** `2026 / 02 / day.60` carries to `2026 / 03 / day.32`, and 32 is
still out of range for March. The inner `for(;;)` re-checks after every carry. It terminates
because the magnitude of the out-of-range offset strictly decreases.

**Negative values come for free.** `Math.floor` rounds toward negative infinity, so borrowing
works without a special case: `day.0` resolves to the last day of the previous month,
`month.-1` to the previous year. No separate subtraction path is needed.

---

## 5. Arithmetic on any level

With normalization in place, "skip a month" needs no stored data at all:

```ts
export function add(cal: Calendar, path: number[], level: number, n: number) {
  const p = [...path];
  p[level] += n;
  return normalize(cal, p);
}
```

`add(gregorian, [2026, 12, 31], 2, 45)` adds 45 days and carries through into 2027.
`add(gregorian, [2026, 12, 31], 1, 1)` skips a month. Same function, different index.

### Clamping is policy, not arithmetic

`[2026, 1, 31]` plus one month normalizes to `[2026, 3, 3]`, because `month.2 / day.31`
overflows. Most users expect 28 February. Both answers are defensible, which is precisely why
the choice must not be buried inside `normalize`:

```ts
type Overflow = "carry" | "clamp" | "reject";
```

Under `clamp`, after modifying an outer level, inner levels are truncated to their new `size`
instead of carrying. Keep this as an explicit parameter of the *operation*, not a property of
the calendar.

### Order of operations matters

Level-wise addition is not commutative:

```
(31 Jan + 1 month) + 1 day  ≠  (31 Jan + 1 day) + 1 month
```

There is no way to make it commutative, so the only option is to fix a convention and document
it. The standard one, and the one worth adopting: **apply largest unit first, then clamp, then
smaller units.**

---

## 6. The ordinal fast path

The generic `normalize` is correct but does work proportional to the structure it walks. Let a
plugin optionally supply the bijection directly:

```ts
interface Calendar {
  units: Unit[];
  toOrdinal?(path: number[]): number;      // address -> integer
  fromOrdinal?(z: number): number[];       // integer -> address
}
```

For the Gregorian calendar these already exist: `toDayNumber` / `fromDayNumber` from the
companion document. The engine then uses `fromOrdinal(toOrdinal(p) + n)` when available and
falls back to `normalize` otherwise. Writing a new calendar plugin requires only `size`; adding
the bijection is an optional performance upgrade.

The correctness contract is a single sentence — *both paths must produce the same result* —
which is directly testable as a property, by generating random paths and comparing.

Note that the fast path only applies to the **innermost** unit being incremented. Adding one
month is not an ordinal offset, because months are not a constant number of days. Level-wise
addition on outer units always goes through normalization and clamping.

### The ordinal is the identity

The larger benefit is not speed. Once the bijection exists, the integer becomes the
container's **identity**: comparison, equality, ordering, distance and recurrence all operate
on it, while `year.2026 / month.12 / day.31` is demoted to a display name.

This is what makes cross-calendar translation cheap. If two calendar plugins describe the same
moment, their ordinals are equal and their addresses differ. Nothing needs to be reconciled
structurally — the shared language is a single integer.

It also removes a subtle bug class: lexicographic comparison of paths is only valid when both
paths are normalized. Comparing ordinals is unconditionally valid.

---

## 7. What this model cannot represent

The scheme assumes a **strict tree**: every day belongs to exactly one month, every month to
exactly one year.

Weeks violate that assumption. A week can straddle two months, and in late December, two
years. Trying to model it as a level — `year / month / week / day` — breaks the hierarchy and
produces incoherent carries.

The correct treatment is that a week is **not a level, it is a view derived from the ordinal**:

```ts
const weekOf = (z: number) => Math.floor((z + offset) / 7);
```

The same applies to ISO week numbers, fiscal quarters that don't align to calendar months, moon
phases, and any other cycle that does not nest. The rule:

> Anything that does not nest cleanly must be a function over the ordinal, never a level in
> the tree.

---

## 8. What was gained

1. **Overflow stops being an error.** `day.32` becomes a legal intermediate form that
   normalizes to a canonical address, so callers can do naive arithmetic and let the engine
   settle it.
2. **"Skip a month" needs no stored data.** It is `add(path, monthLevel, 1)` — the same code
   path as adding days, differing only by an index.
3. **One engine, many calendars.** Turning "12 months in a year" from a constant into a
   `size(outer)` function is the entire abstraction; 13-month calendars and custom epochs need
   no new engine code.
4. **Subtraction for free.** Floor division makes negative values borrow correctly, so there is
   no separate reverse path to write or test.
5. **Policy separated from mathematics.** Clamping and operation ordering are explicit choices
   at the call site, not behaviour hidden inside normalization.
6. **A single identity for a moment in time.** The ordinal gives free comparison, ordering,
   distance, and cross-calendar translation; the path becomes presentation.
7. **A stated termination condition.** The outer-dependency rule is what makes normalization
   well-defined, and it is cheap to enforce when new calendar plugins are written.
8. **A clear boundary.** Non-nesting cycles like weeks are ruled out of the tree by
   construction, which prevents the most common structural mistake in calendar systems.

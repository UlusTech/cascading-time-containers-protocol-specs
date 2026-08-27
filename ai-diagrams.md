# `ai-*` — the model, drawn

Mermaid source. Renders as SVG on GitHub, in Obsidian, and in any Neovim
previewer. Readable as plain text without one.

Each diagram names the file it comes from.

---

## 1 · The recursion

Containers do not contain containers. They contain a **cascade**, and the
cascade contains containers. The tree strictly alternates.

A cascade has no id of its own — it is named by the container that owns it.
That is why `SpaceID = ContainerID`.

```mermaid
flowchart TD
    time["container · time"]
    time_casc(["cascade · the interior of time"])
    y2026["container · gregorian-year 2026<br/><i>generated</i>"]
    y2026_casc(["cascade · the interior of 2026"])
    m12["container · gregorian-month 12<br/><i>generated</i>"]
    dinner["container · dinner-party<br/><i>stored row</i>"]
    dinner_casc(["cascade · the interior of dinner-party"])
    talk["container · Entry Talk<br/><i>stored row</i>"]

    time --> time_casc --> y2026 --> y2026_casc --> m12
    m12 -.->|"…day, hour, minute…"| dinner
    dinner --> dinner_casc --> talk

    classDef space fill:none,stroke-dasharray:4 3
    class time_casc,y2026_casc,dinner_casc space
```

Year and dinner party are the same kind of thing. Time is not privileged —
it is one container whose plugin generates an unbounded interior.

---

## 2 · One row, many spaces

`ai-example.xml`. The load-bearing diagram.

One stored row holds one placement per space. The positions are independent:
Entry Talk is *always* course 1, whatever time it starts.

```mermaid
flowchart LR
    row["<b>row</b><br/>dinner-entry-talk<br/>Entry Talk"]

    subgraph dinner_space["space · dinner-party"]
        slot1["slot/1"]
    end

    subgraph time_space["space · time"]
        t1["…/utc-hour/16/utc-minute/30<br/>↓<br/>…/utc-hour/16/utc-minute/40"]
    end

    row -->|"at space=dinner-party"| slot1
    row -->|"at space=time"| t1
```

Rendered into a tree, that one row appears **three** times — once as course 1,
once as a `point="start"` marker at 16:30, once as `point="end"` at 16:40.
A tree cannot hold an interval, only points. The row can.

---

## 3 · Store versus projection

`ai-example.xml`. Seven rows produce a calendar with no end.

```mermaid
flowchart LR
    subgraph store["store · what the DB holds"]
        r1["time"]
        r2["dinner-party"]
        r3["dinner-entry-talk"]
        r4["dinner-entry-meal"]
        r5["dinner-main-meal"]
        r6["dinner-dessert"]
        r7["last-day-note"]
    end

    subgraph plugins["plugins"]
        greg["gregorian"]
        utc["utc-clock"]
    end

    proj["projection · what you see<br/>years, months, days, hours,<br/>minutes, seconds, ms…"]

    r2 --> proj
    greg -->|"generate the grid on demand"| proj
    utc  --> proj
```

Not one row for 2026. `gregorian-year` is a single row that *makes* 2026 when
asked. The whole year costs nothing until someone looks at it.

---

## 4 · Resolution — "süt almıştım, ne zaman aldım?"

`ai-inheritance.xml`. Milk has three parents and no time of its own.

Walk up **every** chain. Chains that reach the space you asked for contribute
a constraint; chains that don't drop out silently. Intersect what landed.

```mermaid
flowchart TD
    milk["buy-milk<br/><i>no placement in space=time</i>"]

    list["shopping-list<br/>root, no time"]
    trip["shopping-trip-2026-09-20<br/>09/20 19:48 → 20:30"]
    budget["grocery-budget-2026-09<br/>all of September"]

    drop(["contributes nothing<br/>drops out"])
    c1(["constraint<br/>19:48 → 20:30"])
    c2(["constraint<br/>September"])

    answer["<b>19:48 → 20:30</b><br/>tag: in"]

    milk -->|"via space=shopping-list"| list --> drop
    milk -->|"via space=shopping-trip"| trip --> c1
    milk -->|"via space=grocery-budget"| budget --> c2

    c1 -->|intersect| answer
    c2 -->|intersect| answer
```

Ten parents is not ambiguity — it is ten chances to narrow. No overlap at all
gives `tag: conflict`, which for org logs is the misplaced-entry detector.
Never silently pick a winner.

---

## 5 · Exclusion is containment

`ai-capacity.xml`. No conflict edges, no resource declarations, no new concept.

One missing membership produces the whole toilet/phone rule.

```mermaid
flowchart TD
    work["work-capacity<br/><i>bir şey üstünde çalışmaya uygunluğu</i>"]
    phone["phone-capacity<br/><i>telefon kullanma</i>"]

    sleep["sleep"]
    eat["eat"]
    toilet["toilet"]
    code["write-code-ctcp"]
    msg["check-messages"]

    work --> sleep
    work --> eat
    work --> toilet
    work --> code

    phone --> sleep
    phone --> msg

    toilet -.->|"NOT a member"| phone
```

`toilet` is in `work-capacity` and not in `phone-capacity`. That single absence
is why you cannot code on the toilet but can read messages. Conflict = two
occupants of one cascade wanting overlapping time.

---

## 6 · The plugin boundary

The engine stops knowing what a slot means. It needs exactly two functions.

```mermaid
flowchart LR
    subgraph core["engine · the protocol"]
        e1["identity"]
        e2["containment"]
        e3["ordering"]
        e4["conflict"]
    end

    subgraph api["the whole surface"]
        f1["compare(space, a, b) → -1 | 0 | 1"]
        f2["normalize(space, path) → path"]
    end

    subgraph plug["plugins · WASM"]
        greg["gregorian<br/>leap years, month lengths"]
        utc["utc-clock<br/>24 / 60 / 60 / 1000"]
        mono["monotonic<br/>flat ns counter"]
        ord["ordinal<br/>slot 1, 2, 3…"]
    end

    core --> api --> plug
```

Behind the wall: leap years, labels, locale, `her 2 yılda bir`. In front of it:
nothing that knows what a year is. Both functions sync, so WASM works.

---

## 7 · Depth is precision

`ai-scales.xml`. Every path is an interval; where it stops decides how wide.
No precision field, no granularity field, no unit field.

```
                        the interval each path denotes

gregorian-century/14    ├──────────────────────────────────────────────┤   100 years
 …/gregorian-year/1347     ├────────────────────────────────────┤             1 year
  …/gregorian-month/09        ├──────────────────────────┤                   ~30 days
   …/gregorian-day/20            ├──────────────────┤                           1 day
    …/utc-hour/19                   ├──────────┤                               1 hour
     …/utc-minute/48                   ├────┤                                    60 s
      …/utc-second/00                   ├──┤                                      1 s
       …/utc-ms/000                      ├┤                                        1 ms

each level nests strictly inside the one above it.
stop early and you have said something true but coarse.


start / end add an EXPLICIT span on top of that implicit width:

  start = gregorian-year/1347
  end   = gregorian-year/1351     ├────────── 5 years ──────────┤
```

Two mechanisms, both needed. Depth gives implicit width; `start`/`end` gives
explicit span. The Black Death and a 4-microsecond HTTP request are the same
kind of statement.

---

## 8 · Bridging spaces

`ai-scales.xml`. Not a conversion table — a **container placed in both spaces**.

```mermaid
flowchart TD
    bridge["boot-42-epoch<br/><i>one row, two placements</i>"]

    subgraph mono["space · mono-boot-42"]
        ns0["mono-ns/0"]
        log["log-req-8f21a<br/>ns 9182773310041"]
    end

    subgraph time["space · time"]
        wall["2026/08/26 14:00:00.000"]
    end

    bridge --> ns0
    bridge --> wall
    log -.->|"shares an ancestor,<br/>inherits the correspondence"| ns0
```

Bridges are data. A plugin wanting a dense bridge ships containers. The same
mechanism relates `time` to `roman-consular-year`, to a geological epoch space,
to "reign of X". No calendar maths in the core, ever.

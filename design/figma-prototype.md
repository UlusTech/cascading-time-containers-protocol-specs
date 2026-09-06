# CTCP web UI — Figma

Handoff notes. Read before touching the file.

**File:** https://www.figma.com/design/4U38gzvhDE0DKIJwsOsW7V/website
**Pages:** `CTCP · Calendar v2` (three prototype frames), `CTCP · Components` (the library).
**Team:** Ulus (`team::1661088497363490813`) — the only plan with a Full seat.

Dead, kept only so you can compare: page `CTCP · Calendar` (v1) and the local
variable collection `CTCP Tokens`. Both are superseded. Delete when you're happy.

## The one idea

**A pane is one container's interior. That is the only content primitive.**

No calendar view, no inspector, no special-cased time. `ai-README.md` says there
is no field named `time`, `timestamp`, `clock`, or `defaultSpace` — so there is no
region of the UI reserved for one either. v1 violated this: it had a centre column
that was the time grid. v2 does not.

What follows from that:

- Opening a container opens a pane. Zoom-descend and multi-cascade are one gesture.
- There is no inspector. A container's detail *is* a pane showing it.
- `Day / Week / Month` is not chrome. The gregorian plugin puts it in a **pane header
  slot**, and it only appears on panes rendering a gregorian space.
- The renderer name is printed in every pane header (`gregorian-grid`, `ordinal-list`).
  That visibility is deliberate — it is what makes time non-special. `dinner-party`
  falls back to the core `ordinal-list` because no plugin claims its kind.

## Navigation

Decided, implement this way:

- Open a container **from inside a pane** → **split** (new pane beside it, both stay).
- Navigate **from the address bar** → **replace** (that pane navigates).
- Back / forward act on the focused pane.

The address bar is a URL bar. Its content is literally the `Path` type —
`[{kind, key}, …]` — rendered as `Crumb` instances behind a `ctcp://` scheme.

## Tokens — three layers, we own one

| Layer | Where | Rule |
|---|---|---|
| `Primitives` | DesignSystem library | Tailwind ramps + alpha. **Never write to it.** |
| `CTCP Theme` | this file, `VariableCollectionId:51:2` | 43 semantic vars, **every value an alias**. No hex anywhere. |
| Components | this file | Bind colour to Theme only. Never to a primitive, never to a literal. |

Modes: **`Dark` is modes[0], the default.** `Light` exists and is defined but has
never been visually checked.

Spacing, radius and font-size bind **directly to Primitives** (`space/2`, `radius/md`,
`font-size/xs`). Only colour goes through Theme, because only colour is themed.

### Cascade colour is indexed, not named

`cascade/1..8`, each with `base` / `fill` / `border`. Hues in order: indigo, orange,
teal, violet, amber, rose, lime, cyan.

There is deliberately **no `cascade/dinner-party`**. Cascades are user- and
plugin-created and unbounded in number, so the theme carries a ramp and the engine
assigns an index. Naming a cascade in the theme would be the same mistake as
reserving a column for time, one layer down.

A container's colour is an **instance fill override**, the Figma equivalent of setting
`--cascade-color` on the element. Not a variant.

## Components

| Component | Node | Notes |
|---|---|---|
| `Container` | `54:30` | `State = Default / Selected / Conflict / Ghost`. Props: Title, Meta, Sub, Show sub. |
| `Pane` | `60:24` | `Focused = True / False`. **`Body` is a SLOT.** |
| `PaneHeader` | `59:20` | `Focused`. Props: Name, Renderer. **`Plugin slot` is a SLOT.** |
| `SlotRow` | `55:31` | The core `ordinal-list` renderer's row. `State = Default / Selected`. |
| `CascadeRow` | `55:22` | Rail row. `Active = On / Off`. |
| `Crumb` | `55:13` | One `{kind, key}` path segment. `State = Default / Current`. |
| `Chip` | `53:9` | `tone = neutral / accent / conflict`. |
| `Slot/ViewSwitch` | `57:24` | `Active = Day / Week / Month`. Gregorian plugin's contribution. |

It is called `Container`, not `Block`. The model has one entity and the component
library uses its name.

**Interactions are wired** (`ON_CLICK`, `CHANGE_TO`, smart animate 150ms): ViewSwitch
switches Day/Week/Month, CascadeRow toggles on/off, Container and SlotRow select.

## Auto layout — and the one honest exception

Chrome, rail, pane headers, the ordinal-list: all auto layout, all components.

**Inside a cascade viewport the renderer positions absolutely.** A time grid computes
`top` from a coordinate; auto layout cannot express `y = f(path)`. In the real app this
is `position: absolute` inside a `position: relative` viewport, so the Figma file
mirrors it rather than faking it. The Container itself is still an auto-layout
component — padding, hug, truncation, variants — and the renderer sets only `x/y/w/h`.

Grid geometry currently on the page:

```
time pane      y = ((h-15)*60 + m) * (88/60) + 12     gutter 52
work / phone   y = ((h-16)*60 + m) * (76/60) + 10     gutter 52 / 46
```

Hour lines use `constraints: {horizontal: STRETCH}` so they survive pane resize.

## Figma gotchas that cost real time

1. **A variable-bound paint's `opacity` is dropped on an unparented node.** Append
   first, then set fills, then read back and reassign with opacity. Better: use the
   `alpha` primitives (`color/sky/alpha/500/20`) and skip opacity entirely.
2. **`setProperties` needs the full property key**, `Title#54:0`, not `Title`. Look it
   up from `componentPropertyDefinitions` on the COMPONENT_SET.
3. **`INSTANCE_SWAP` defaults take the component's node id** for unpublished local
   components — `.key` is empty and throws.
4. **Slot nodes default to a white fill.** Clear it or every pane body is a white box.
5. **`node.query()` selectors break on spaces in layer names.** Use `findOne` instead.

## Prototype — three frames, three URLs

Frames are pages. Back / forward move between them. Start point is A.

| Frame | Node | Panes | Address |
|---|---|---|---|
| `A · gün görünümü` | `83:258` | time (focused), work, phone | `ctcp:// root/gregorian-time · gregorian-year/2026 · …/utc-hour/16` |
| `B · dinner-party açık` | `64:19` | + dinner (focused) | `ctcp:// root/gregorian-time · container/dinner-party` |
| `C · Entry Talk açık` | `86:472` | + Entry Talk (focused) | `ctcp:// … · container/dinner-party · slot/1` |

Wired reactions (`ON_CLICK`, `NAVIGATE`, smart animate 300ms):

```
A  Akşam Yemeği container  → B      A  forward ›        → B
B  back ‹                  → A      B  forward ›        → C
B  dinner pane  ✕          → A      B  Entry Talk row   → C
C  back ‹                  → B      C  Entry Talk ✕     → B
```

The address is not decoration — it changes per frame because the focused pane
changed, and the resolution readout changes with it (`resolved · 1 interval` →
`4 occupants · ordinal` → `leaf · 2 placements`).

Opening from inside a pane **splits**; the address bar would **replace** (not yet
wired — crumbs are not click targets).

`C` is the proof that dropping the inspector was right: a leaf container's detail
view is just a pane, with renderer `container-detail`, showing its two placements
and what it occupies. Nothing about it is special-cased.

## Scrolling

Every renderer frame is a real scroll container: `clipsContent = true` +
`overflowDirection = "VERTICAL"`, with content taller than the pane.

- time grid draws 15:00→23:00 in a ~478px pane
- work / phone grids draw 16:00→22:00 in a ~214px pane
- `ordinal-list` and `container-detail` scroll too

## Icons

Lucide, from the DesignSystem library, imported by component key:

| Use | Component | Key |
|---|---|---|
| back | `lucide/chevron-left` | `5f0e8672c40cc73129b680626520f92f66cdea08` |
| forward, open container | `lucide/chevron-right` | `eb846921a1bbfe63cd124b3d0f9ec3d418b0e1ed` |
| new container | `lucide/plus` | `88724e88b01ea5d71d35a46c405d7fb6f03cf02d` |
| close pane | `lucide/x` | `50ff76416683c8ec26a7f7295d20a857fd7a5ac1` |
| split pane | `lucide/panel-right-open` | `b8306c5d9263a038c3c12665e822aeaf6387b91d` |
| account | `lucide/circle-user` | `725ad78e99147788a3bc74374bf641dfe26291c0` |
| (unused yet) | `lucide/eye` | `ace4d3e02de07e59d1bcd59c58a795abfca685e0` |

Recolour by walking the instance and reassigning **both** `strokes` and `fills` —
Lucide icons are stroked vectors, so setting fills alone does nothing.

`search_design_system` is fuzzy on descriptions; querying the **exact name**
(`lucide/plus`, `lucide/x`) is what actually returns the component you want.

## Not built yet


- Address bar crumbs are not click targets, so replace-navigation is undemonstrated.
- Pane resize / fullscreen. Split is shown as a result (A→B→C), not as a drag.
- Week and Month renderers. The ViewSwitch changes variant but not the grid.
- Hover states on anything.
- Recurrence authoring (`*` and formula segments) has no UI at all.
- Light mode is defined but never checked.
- `Container` has no nesting affordance — a container that holds a cascade shows
  `4 slots ›` and you open a pane. That is intentional, but the `›` is not wired.

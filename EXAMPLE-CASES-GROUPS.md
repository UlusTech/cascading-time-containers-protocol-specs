# CTCP Example Case Groups

Groups over `EXAMPLE-CASES.md`. The case file is the text; this file only says
how cases relate. Grouping can change without touching a single case, and
other groupings can live beside this one.

Group names are in world language, never in CTCP terms. A group says "these
people want the same kind of thing", not "CTCP solves these the same way".

## How to read a group

| column | meaning |
|---|---|
| case | case number in `EXAMPLE-CASES.md`; numbers never change |
| role | `main`, `sub` or `link` |
| adds | for a sub: what it asks beyond the main; `same` if it is another example of the same want. For a link: what it shares |

- **main**: Bilgehan's case if the group has one, otherwise the simplest one.
- **sub**: the same want in another setting, or the same want plus one more ask.
- **link**: just similar. It shares something with the group but wants a
  different thing.
- A case can sit in more than one group when it asks more than one thing.
- **Elsewhere** notes record how other tools handle a case, where a case says so.

Status: pilot. These groups come from cases 82 to 149 and the families found
around them, each member read against its main. The rest of the file is not
grouped yet.

## G1 · Something runs long and what comes after moves

| case | role | adds |
|---|---|---|
| 1 | main | the next thing starts from the previous one's end; its end stays a predicted range |
| 44 | sub | telling it what just happened moves the times after it |
| 45 | sub | the start follows when I actually woke up |
| 82 | sub | the slide shows the collision with a hard stop at the end of the day |
| 150 | sub | things not connected to the morning stay where they are |
| 914 | sub | the next block starts late, or is visibly squeezed |
| 2559 | sub | same. Elsewhere: Google Calendar leaves later events in place |
| 1736 | sub | the next session shifts, or is flagged as clashing, never overlapping silently |
| 103 | sub | a task split around a break moves with the break |
| 1217 | sub | a later fixed thing does not move; a warning when the slide reaches it |
| 1165 | sub | my start depends on how long the people before me take |
| 2517 | sub | the slide is in days: rest days pushed, and the point of relief shown |
| 140 | link | a push that goes one way only |
| 86 | link | the push travels through a shared person, not through order |
| 269 | link | the push stays on one pitch |
| 110 | link | missing a slot lands on the next slot, a week later |
| 2548 | link | the push is counted in working days |
| 1785 | link | finishing early must not pull later things earlier |
| 108 | link | starting after another's end, and the other party is told |
| 141 | link | a whole outing delayed, with its parts inside |
| 2 | link | the push breaks a deadline further down; ask whether to cancel |
| 16 | link | only things in the same flow push each other |
| 43 | link | the people waiting are told, live |

## G2 · A gap takes up the delay

| case | role | adds |
|---|---|---|
| 83 | main | a gap absorbs the overrun and the slide stops there |
| 962 | sub | same |
| 84 | sub | the gap was already partly used |
| 915 | sub | the gap is low-priority work, free only when nothing overran |
| 302 | sub | the slack left after absorbing is shown |
| 303 | sub | small slips eat the slack until the task decides the end date |
| 221 | sub | something inside the gap shrinks, and the couple choose what gives |
| 111 | link | who used the margin |
| 112 | link | a gap that must not be eaten |
| 136 | link | padding added at every step |

## G3 · The end is fixed, so something inside gives

| case | role | adds |
|---|---|---|
| 4 | main | the last part shrinks to absorb the delay |
| 87 | sub | ask which parts to shrink or drop |
| 143 | sub | options side by side, with what each costs |
| 132 | sub | a leftover part shrinks or vanishes, and its owner is told |
| 221 | sub | an inner part shrinks while the fixed thing after it holds |
| 222 | link | the fixed thing can wait, but only so long |
| 88 | link | warn early, while there is still time to act |
| 2478 | link | will the last slip still make the closing hour |
| 92 | link | shrinking has a floor |
| 149 | link | less time than planned, keep the order of what remains |

## G4 · It can never fit: say so, and by how much

| case | role | adds |
|---|---|---|
| 89 | main | told at booking time that it can never fit, and by how much |
| 151 | sub | choose what to drop |
| 324 | sub | what could be given up to make it fit |
| 930 | sub | which tasks are the ones that overflow |
| 1834 | sub | the constraints come from two people; which are mine to give up |
| 1779 | sub | which weekdays fall short, and by how much |
| 1003 | sub | it stopped fitting after a priority change |
| 139 | sub | one thing at a time; which orders would fit |
| 464 | sub | the person made the contradiction themselves |
| 135 | link | fits in the good case, not in the worst |

## G5 · Plan and what happened, both kept

| case | role | adds |
|---|---|---|
| 123 | main | plan and reality side by side, with what pushed what |
| 158 | sub | same |
| 298 | sub | same |
| 902 | sub | same |
| 969 | sub | same, logged later in the day |
| 289 | sub | reality rebuilt from partial phone timestamps |
| 462 | sub | other people are told only what concerns them |
| 1257 | sub | work done at another time still counts |
| 1710 | sub | the overrun made another client late |
| 2220 | sub | at a shift handover, with dependent tasks marked at risk |
| 817 | sub | planned, the alarm, and what actually happened are three things |
| 1072 | sub | every change to the plan carries its reason |
| 972 | link | where the gap between plan and reality is |
| 6 | link | one thing carries its plan and its record of what happened |

## G6 · Where the gap between plan and reality is

| case | role | adds |
|---|---|---|
| 972 | main | the gap by day and by kind of task |
| 1258 | sub | the drift over a year, per topic |

## G7 · Future plans learn from what really happened

| case | role | adds |
|---|---|---|
| 501 | main | the plan becomes honest about the real duration |
| 1124 | sub | plan at the rate I really achieve |
| 973 | sub | next estimates shown next to the history |
| 1007 | sub | the prediction tightens as the work goes on |
| 1089 | sub | the remaining time re-estimated from progress so far |

## G8 · A past fact is fixed, and what depended on it is re-checked

| case | role | adds |
|---|---|---|
| 122 | main | fix the record and see what relied on the wrong times |
| 321 | sub | same |
| 1777 | sub | same, years later |
| 1562 | sub | some things were already done based on the wrong date |
| 124 | sub | ask whether the thing after it also changed |
| 1650 | sub | reasons added to old days, marked as added afterwards |
| 460 | sub | every copy of the record agrees, and the planned time stays visible |
| 1256 | link | a decision made on the wrong value |
| 572 | link | the old version stays visible |

## G9 · A wrong log entry is fixed, and the numbers built on it follow

| case | role | adds |
|---|---|---|
| 157 | main | fix yesterday, and streak, totals and reminders recalculate |
| 1936 | sub | same |
| 1125 | sub | the correction is visible |
| 1172 | sub | later estimates of my pace use the corrected value |
| 1255 | sub | the old value is not lost |
| 1399 | sub | the fix shows as a fix |
| 767 | sub | the statistics before and after, with the correction as the cause |
| 768 | sub | the number changed, and I can see why |
| 1400 | sub | a late entry is marked as remembered afterwards |
| 572 | link | the old version stays visible |

## G10 · A correction keeps the old version

| case | role | adds |
|---|---|---|
| 572 | main | change the time and still see what it was and when it changed |
| 766 | sub | a report keeps what it said when it was sent |
| 1708 | sub | a paid invoice is not rewritten; the correction is dated |
| 366 | sub | a closed period is not rewritten; the change lands in the next one |
| 273 | sub | what was played and what was later decided |
| 1067 | sub | a claim that turned out wrong stays in the record |
| 1046 | sub | wrong dates visible as wrong, not deleted |
| 1255 | sub | a corrected score keeps the old one |
| 1125 | sub | a corrected log keeps the correction visible |

## G11 · People who relied on it are told

| case | role | adds |
|---|---|---|
| 1126 | main | the teacher sees the correction and what it changes |
| 1757 | sub | the effect on the coach's own decision |
| 461 | sub | the right person makes the correction |
| 780 | sub | a shared copy is marked as superseded |
| 499 | sub | a wrong prediction is marked as wrong |

## G12 · A decision made on a wrong value stays a fact

| case | role | adds |
|---|---|---|
| 1256 | main | the rest day stays a fact, and now looks unnecessary |
| 1297 | sub | I was told "on track" at the time, and that stays |

## G13 · Two sources disagree about one fact

| case | role | adds |
|---|---|---|
| 189 | main | both times kept, the difference shown, neither overwriting |
| 182 | sub | the next thing is not calculated from a guess |
| 198 | sub | the record shows what I did, not only their version |
| 749 | sub | which one is used, with the other still visible |
| 754 | sub | my choice of which to report is recorded as a choice |
| 756 | sub | the team total says how it treated the difference |
| 805 | sub | the answer is reported as a range |
| 1674 | sub | two carers' accounts side by side |
| 1744 | sub | I say which source I trust today |
| 290 | sub | one account accepted as the working answer |
| 310 | sub | who holds which date, and what explains the difference |
| 372 | sub | what else depends on the earlier date |
| 2039 | sub | choose which vendor's date applies |
| 541 | sub | use the wider range until it settles |
| 490 | sub | one agreed time before anyone sets off |
| 565 | sub | exact and approximate sources side by side |
| 581 | sub | a known offset applied to one source |
| 579 | sub | aligned by a shared event, the leftover difference kept |
| 574 | sub | two orders that cannot both be true, until a recording decides |
| 460 | link | records disagree after a correction |

## G14 · Others see that I am busy, not why

| case | role | adds |
|---|---|---|
| 385 | main | unavailable and for how long, never why |
| 1250 | sub | same |
| 2224 | sub | same, between two organisations' servers |
| 1203 | sub | one person may know the reason |
| 1602 | sub | the reason must not be guessable from the pattern |
| 1402 | sub | only a total is shared, no days or reasons |
| 127 | sub | no sign of how the busy time changed |
| 126 | sub | a delay is shown without its cause |
| 101 | sub | a cancellation is told without revealing the other event |
| 404 | sub | a "no" that gives no reason |
| 406 | sub | an answer that reveals nothing about where I am |
| 2571 | sub | private time still blocks bookings made in another app |
| 402 | link | many narrow questions add up to the whole calendar |
| 967 | link | a task overflowing into a personal block |
| 407 | link | a private meeting showing in a shared view |
| 50 | link | sharing at a chosen level of detail |
| 80 | link | sharing only what is needed |

## G15 · The start waits on something nobody controls

| case | role | adds |
|---|---|---|
| 95 | main | the start follows the outside event when its date is chosen |
| 97 | sub | a cut-off after which it is called off |
| 129 | sub | the outside event also limits how long it can last |
| 96 | sub | a warning before cancelling becomes costly |
| 282 | sub | what can stay firm while waiting |
| 2493 | sub | the thing it has to reach is fixed |
| 2174 | sub | the latest the condition can come before other things break |
| 98 | sub | the event never happens: still waiting, and I am asked |
| 107 | link | follows another's start, not an outside event |
| 147 | link | waits on a person's decision |
| 130 | link | starts when enough people are there |

## G16 · It goes ahead only if enough people take part

| case | role | adds |
|---|---|---|
| 120 | main | at risk, not cancelled; how many more, and by when |
| 121 | sub | the condition is met after it was cancelled |
| 130 | sub | it starts at the moment the count is reached |
| 394 | sub | the count is reachable only if people move something |
| 395 | sub | the count is lost after people accepted |
| 2165 | sub | the people are in three time zones; the chance of making the deadline |
| 35 | link | conditions not met, so it is cancelled on its own |

## G17 · A streak broken by something that should not count

| case | role | adds |
|---|---|---|
| 154 | main | not broken by something I could not do, and the record stays honest |
| 2561 | sub | same |
| 977 | sub | I choose whether it counts |
| 1123 | sub | it survives if I choose, while the record shows the missed days |
| 2564 | sub | an interruption during the session |
| 1122 | sub | the day counted is the day I lived, across time zones |
| 157 | link | the day was done, only not logged |
| 768 | link | a late entry joins two streaks |

## G18 · A required gap between two things

| case | role | adds |
|---|---|---|
| 109 | main | a required wait after one thing moves the next thing's start |
| 112 | link | the required gap is squeezed from the other side |
| 1851 | link | the required gap carries over to the next day |

## Links outside the groups

| cases | what they share |
|---|---|
| 90, 91 | choosing who gives way, and what each choice costs |
| 105, 106 | a partial overlap, serious for one and harmless for the other |
| 1, 133, 135 | a time known only as a range |

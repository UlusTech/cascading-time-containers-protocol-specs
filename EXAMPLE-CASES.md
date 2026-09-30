# CTCP Example Cases

Example cases CTCP may one day have to answer. Names, times and numbers are
placeholders; the idea of each case is what matters. CTCP does not have to
answer any of these yet. This is where we see what it would need to.

The first section is Bilgehan's own examples, each tagged with where it came
from. Every other section was drafted by research agents, mostly from general
knowledge because web search was rate-limited. Each section's entry under
Sources says what was actually fetched. None of those cases is a decision.

Case numbers are fixed. How cases relate (main cases, sub cases and links)
lives in `EXAMPLE-CASES-GROUPS.md`, not here.

## From Bilgehan's own examples

Every case in this section comes from Bilgehan's own words. The tag at the end
of each case says where: `whos-talk` (the August talk), `README v1` (the first
README), `old prompts`, `span report` (his parts only), `example.ts`,
`talk 2026-09` (the September session transcript) or `this session`.

### 1 · Next meeting starts from the previous one's end, with a predicted length
Marketing meeting starts at 12:00 and ends at 13:00. Technical meeting starts 10 minutes after marketing ends, so 13:10. It ends about 50 minutes after it starts, because the slides take 30 and the talks take 20 in total. That end is a prediction, with a range.
**Wants:** when marketing runs late, technical moves with it, and technical's end stays a predicted range, never a typed number. `talk 2026-09`

### 2 · A push breaks a deadline further down
A meeting runs ten minutes long and pushes the next meeting. The next meeting had to end by midnight, and now it won't.
**Wants:** something in the background notices and asks "should we cancel this? It is going past midnight". The answer is a score (how cancellable, on what basis), not a yes/no. `span report`

### 3 · Parts of an event with ranged lengths
Dinner party. The entry talk is 10 to 15 minutes, and the entry meal is 30. Nobody writes down when the entry meal starts.
**Wants:** the talk's length can be a range, and the meal's start follows from what comes before it. `example.ts`

### 4 · Fixed end, so the last part shrinks
The dinner party has a fixed end time. The entry talk runs long.
**Wants:** dessert gets shorter to absorb the delay, instead of the party running over. `example.ts`

### 5 · Conditions on an event's parts
The dinner party has parts with conditions. For example, dessert is only served if there are at least 20 minutes left.
**Wants:** a way to say "only if…" about a part, and for it to be checked as things move. `example.ts`

### 6 · Before, during and after data on one thing
The entry talk has a description written beforehand. It might also have a pre-made script, shared files such as `talkscript.md`, and afterwards a transcript of what was actually said.
**Wants:** one thing carries its plan, its materials and its record of what happened. `example.ts`

### 7 · Details about a meal
The entry meal has notes on what the food contains and whether it is vegan.
**Wants:** any detail can hang on any part of an event, and the time logic doesn't care about it. `example.ts`

### 8 · Ranges with no hard limits
The entry talk is "about 10 to about 20" minutes, not a hard 10–20. Another thing is simply "about 15".
**Wants:** fuzzy ranges, exact ranges and fuzzy single values can all be written, and none of them force a hard limit. `talk 2026-09`

### 9 · One sub-part needs finer precision than its parent
The dinner party is planned in minutes, but one part inside it needs second-level precision.
**Wants:** the part can go deeper than its parent without the whole party changing precision. `talk 2026-09`

### 10 · Sub-parts are not on the clock unless they say so
The dinner party is on the clock, from 16:30 to 18:10. Its parts are only in order inside it. The entry talk says it starts when the dinner party starts, and the entry meal says it starts when the entry talk ends.
**Wants:** only the parts that explicitly tie themselves to something get a place in time. The others just have their order. `talk 2026-09`

### 11 · Same thing, two positions
At the Big Ulus Dinner, the entry talk is first in the dinner's order no matter when it happens. In clock time it is at 16:30, or maybe 16:35, because the talk doesn't start the moment the event starts.
**Wants:** the same entry talk has its position in the dinner's order and its position in time, as one thing. `whos-talk`

### 12 · Start and end in different places
The dinner party starts in minute 30 of hour 16 and ends in minute 10 of hour 18.
**Wants:** a thing can start in one box of time and end in another. `whos-talk`

### 13 · A sub-part slides from one part into the next
At the dinner party, a music show is inside the entry meal. The entry meal runs short, so the show continues into the main meal.
**Wants:** the show can flow from one part into the next, starting in one and ending in the other. `talk 2026-09`

### 14 · A task moves between two separate work sessions
There are two separate work sessions with a gap between them. "Review Bob's PR" runs long, so "work on issue 2543" no longer fits in session 1.
**Wants:** issue 2543 continues in session 2, with nothing counted in the gap between them. `talk 2026-09`

### 15 · A book read across sittings
You have book-reading times. You go through pages, stop mid-page and come back to it later.
**Wants:** the reading continues where it stopped, across separate sittings. `talk 2026-09`

### 16 · Things in the same flow push each other; others don't
Two meetings are in the same stream, and a third is in an unrelated one. The first meeting grows.
**Wants:** only the meeting in the same stream moves. Things in other streams stay put, even when they are close in time. `old prompts`

### 17 · Same stream, far apart
Two things are in the same stream but two days apart, with no special rules between them.
**Wants:** they don't touch each other until one of them actually runs into the other. `talk 2026-09`

### 18 · Two containers in the same minute
Two things are put into the same minute.
**Wants:** they push each other, because they can't sit in the same position. The push has to go somewhere, and it has to be clear where and how. `span report`

### 19 · The first one moves because the second can't
Something inside the 2nd thing needs more time. The 2nd can't grow into its future, because of a condition, so it grows backwards and moves the 1st.
**Wants:** a push can go backwards when forward is blocked. `old prompts`

### 20 · Both push each other
Two things each need to move into the other.
**Wants:** the calendar either picks one on its own and moves it to a non-conflicting future, or hands the choice to you. `old prompts`

### 21 · Streams that must cascade
Days, hours, minutes and seconds must always flow into each other. Someone breaks this in their own data.
**Wants:** that is the owner's problem, not a conflict the system has to resolve. `old prompts`

### 22 · An event that crosses unit boundaries
An event starts on the 6th of the month at 16:00 and ends on the 6th of the 7th month at 15:00. A one-week event crosses days, the week and the month.
**Wants:** the event is not trapped inside the hour, day or month it started in. `span report`

### 23 · Absent in the middle
An event runs across minutes 10, 11 and 12, is absent during minutes 13 and 14, and runs again during 15 and 16. The gap could be typed in or come from a prediction.
**Wants:** "not present during this time" is expressible, and a UI can render the gap. `span report`

### 24 · Gaps with size
There is eating, then a gap, then computer use. The gap is as big as ten eating actions, or five work actions.
**Wants:** the space between things is itself something with a size, relative to the things around it. `span report`

### 25 · Where inside the minute
An action sits inside a minute, alongside other things.
**Wants:** it is possible to say where inside that minute each thing sits, relative to the others. `span report`

### 26 · An entry talk between two minutes
The entry talk lasts ten minutes, and it sits between two specific minutes of the clock.
**Wants:** an interval, with a start and an end, on time that is itself made of the same kind of boxes. `span report`

### 27 · The expo and its talks
An expo has presentations at specific times, and they are part of the expo, not separate things.
**Wants:** when the expo is cancelled, its presentations go too. `old prompts`

### 28 · Late to the expo, you land mid-talk
You arrive at the expo late.
**Wants:** the system knows you arrived in the middle of a presentation. `old prompts`

### 29 · Details that appear over time
The expo's presentations will have their own titles, but those are revealed as time goes on.
**Wants:** parts of an event can be added later without re-planning it. `old prompts`

### 30 · Every tiny action can be recorded
At the expo, even someone walking to the stage, and their small actions, can be stored.
**Wants:** no limit on how detailed or deep an event can go. `old prompts`

### 31 · A car crash has sub-events
Two cars collide. Inside the crash there is the moment both cars' headlights hit each other, and more.
**Wants:** a real-world event can have sub-events inside it, to any depth. `old prompts`

### 32 · Spanning the rest of an hour and whole hours
The expo runs from 13:30 to the end of hour 13, all of hour 14 and all of hour 15.
**Wants:** the event covers parts of some time boxes and the whole of others, at whatever depth you choose, down to minutes, seconds, ms or ns. `old prompts`

### 33 · Share a container by link
You give someone a link to a container on your server, like a mail address:
`ctcp://who.ulus.org/containers/expo-2026/keynote/speaker-intro`.
**Wants:** they can read that part, and only that part, from your server. `old prompts`

### 34 · Subscribe and get changes
You subscribe to the expo. It gets cancelled.
**Wants:** your client receives only the change, not a full re-fetch. `old prompts`

### 35 · Conditions not met, so the thing is deleted
You should go to a city but you can't.
**Wants:** the calendar deletes or cancels the trip on its own, because its conditions are not met. `old prompts`

### 36 · A crucial person can't come
The meeting can move only as far as each required person allows. A person crucial to the meeting can't come.
**Wants:** the meeting is cancelled, or moved to a time that works for the others' calendars. `old prompts`

### 37 · A key person gives only a window
While you and your coworkers plan a meeting, a key person says "I can't come at that time. The only possible hours are 10:00 to 12:00."
**Wants:** that becomes a condition. The maker's server sends everyone's server the options, and each server chooses by asking its person ("should we move X for this?") or by calculating. When everyone agrees, the meeting is set. `this session`

### 38 · Someone asks to join
A meeting is already planned, and someone wants to join.
**Wants:** the maker has a rule for that too. Other servers are only asked narrow questions like "are you free 10:00 to 11:00?" or "is 10:00 to 11:00 okay?". `this session`

### 39 · "I'll be late, can we push?"
Your friend's server sends yours: "I'll be 30 minutes late, can we push the meeting?"
**Wants:** your server checks whether it can, maybe asks you, answers "yes" and moves the meeting. `talk 2026-09`

### 40 · Oversleeping moves the meeting, and others' gaps count
You oversleep, so you will be late.
**Wants:** the meeting is postponed by a simple rule that takes the other people's free gaps into account. Each server reads the news its own way and makes new offers. Your data never leaves you. `README v1`

### 41 · Missing the bus
You miss the bus.
**Wants:** the calendar knows, checks whether the meeting should move, and moves it if it should and can. `talk 2026-09`

### 42 · Metro with a range
You take the metro to a meeting, and the trip takes 13 to 25 minutes. You might catch the first train or miss it and take the next.
**Wants:** the plan includes getting there and how, and the arrival is a range. `this session`

### 43 · Late bus, live
You take the bus to a meeting, and buses get stuck in traffic. The plan predicts the trip and compares it with real-time data. The bus runs late.
**Wants:** your plan updates by itself, and the people you're meeting get "he'll be 20–30 minutes late, cancel or wait?". `this session`

### 44 · Telling the calendar what just happened
You tell the calendar you started work, or that you just got on the bus.
**Wants:** the calculated times after it change based on that. `README v1`

### 45 · Waking time moves the workday
You wake up later than usual.
**Wants:** the time you leave for work moves, because it depends on when you woke up. `README v1`

### 46 · A partly predictable day
Your shower time, sleep, getting out of bed and breakfast are all predicted, not fixed.
**Wants:** when you plan anything, those predictions of when you're free help you. `this session`

### 47 · Sleep and health
The system that knows your sleep sees how much you sleep and how you move while sleeping.
**Wants:** it can watch your health from that. `this session`

### 48 · How much sleep you need
**Wants:** the system calculates when you should sleep. An assistant or AI can build you a custom calendar that follows your ideas. `README v1`

### 49 · Food: planned, entered, photographed or told
You plan what you'll eat in advance, type it in, take a photo, or tell your assistant.
**Wants:** calories, carbs and protein are counted. An AI can work out the food from the photo. `this session`

### 50 · Sharing with a dietician at the right detail
You share your eating data with your dietician.
**Wants:** you pick the detail you share: weekly without hours or days, day-based only, or everything. That includes what you ate, how long it took, and what you were doing then. `README v1`

### 51 · Restaurant orders show up on their own
You order at a restaurant.
**Wants:** it shows up in your food record without you entering it. `talk 2026-09`

### 52 · Food with expiry dates
Food gets added automatically when you buy it.
**Wants:** you can check from your phone what has expired. `talk 2026-09`

### 53 · A recipe that is a to-do and a timer
A recipe is instructions, a to-do list with no time.
**Wants:** it can sync with real time and set an alarm when the dish in the oven is done. `talk 2026-09`

### 54 · Menstrual cycle prediction
A cycle tracker knows from event data about food, events, big meetings and big fights.
**Wants:** it predicts the next period, maybe even its intensity. It shows the prediction as a blurred block, or as a probability over the whole day. `talk 2026-09`

### 55 · Shopping list items join the next trip
Milk and other things sit on a shopping list with no time. Each one says "be in the first shopping trip ahead".
**Wants:** when you go shopping (detected, or you press a button), the list for that trip is ready. The milk has no time of its own. `whos-talk`

### 56 · When did I buy the milk?
"When did I buy the milk?" The milk-buying isn't marked in time, but the trip is: 20 September, 19:48.
**Wants:** the answer is "during the 20 September 19:48 trip". Something with no time of its own takes its time from what it is inside. `whos-talk`

### 57 · "Run 10 minutes": when?
You add "run 10 minutes" with no time.
**Wants:** it goes into the first free time. List everything, and it all gets placed and planned. `whos-talk`

### 58 · Suitability for work
"Being able to work on something" holds your sleep, eating and toilet time. You can't write code while on the toilet, while sleeping, or while working on other code. A new task looks at the gap between two things. If the gap is too small, maybe off by 15 minutes, it hops to the next gap, and at worst it lands after all your other work.
**Wants:** things you can't do at the same time never overlap, and a new task finds its own place. `whos-talk`

### 59 · Phone use finds its own time
You can't code on the toilet, but you can use your phone. "Phone use" knows the times it can't happen, and finds times in the day that the other things don't cover.
**Wants:** phone use gets its own place in the day, before and after the right things. Inside it, "check messages" and other tasks can be placed, so your message-reading time is set automatically. `whos-talk`

### 60 · Clean the house: open-ended
"Clean the house" has no fixed end.
**Wants:** it gets a time when you're free, taking your tiredness into account. For people with ADHD, the calendar tells them when they'll clean their room. `whos-talk`

### 61 · Order without time: car repair
To fix your car you change the oil and change the oil filter, but you lift the car first.
**Wants:** order that has nothing to do with time. `talk 2026-09`

### 62 · Crime scene
You put what happened, and when, into a crime scene, then fix the conflicts.
**Wants:** the exact order, maybe times relative to each other, maybe no exact clock time, but something in hand. You can talk about times you don't remember exactly. `talk 2026-09`

### 63 · Stabbing time as a calculation
Each stab takes about 4 seconds, and there are 20 wounds.
**Wants:** the whole stabbing is calculated as about 20 × 4 seconds. The fuzziness carries through the maths. `talk 2026-09`

### 64 · Every year, month and day exists without being entered
No year 2025 is stored. It is just a Gregorian year, and a rule says every year holds 12 months, and each month holds as many days as its number says. The same goes down to hours, minutes, seconds and ms.
**Wants:** unlimited days and months, with nothing stored for each one. `whos-talk`

### 65 · Leaving a level open repeats the thing
You say something is in a month, on day 12, at hour 23, without saying which month.
**Wants:** it happens every month, on every 12th, at 23:00. Leaving the year out makes it happen every year. `whos-talk`

### 66 · Rules on the year
**Wants:** "every 2 years" or "every year ending in 0", written where the year would be. `whos-talk`

### 67 · Monthly party on the 12th, except one month
There is a party on the 12th of every month in 2026, but not in December.
**Wants:** the December 12th is empty while every other month's 12th has the party. `talk 2026-09`

### 68 · One occurrence gets its own photo
The monthly party happens on every 12th.
**Wants:** you can change the photo, or other details, for one specific month's 12th only. `talk 2026-09`

### 69 · Invalid dates are rejected
Someone puts something on day 31 of month 9.
**Wants:** it is rejected, because September has no 31st. `talk 2026-09`

### 70 · A day is in a month, and in a week
Days sit inside months and years, but also inside weeks.
**Wants:** the same day belongs to several time boxes at once. `talk 2026-09`

### 71 · Calendars that follow the moon, the sun, or nothing
Some calendars follow the moon, some solar days, and some people make their own.
**Wants:** none of them is forced as the base, and all of them work. `talk 2026-09`

### 72 · 30-day months, two solar days as one day
You use a 30-day month system, or count two solar days as one day.
**Wants:** the only thing needed is a converter to calendars other people know. `old prompts`

### 73 · Inventing a unit
You invent "decade" in your own system. Someone asks what it is, and you say "1 decade = 10 years".
**Wants:** you are fully compatible as long as you can say what your time equals in a calendar someone else knows. `README v1`

### 74 · A complex, self-collapsing time system
You build a time system that needs deep maths.
**Wants:** it is fine, as long as your server tells others the time in a compatible way. `README v1`

### 75 · Beyond milliseconds
Most people use Unix ms time, but you have an atomic clock.
**Wants:** you can go lower than ms, and it still matches or converts for others. `old prompts`

### 76 · Tomorrow isn't needed yet
You don't need tomorrow right now.
**Wants:** tomorrow doesn't exist until something needs it, but by your logic there can be a tomorrow. `old prompts`

### 77 · You can't be in two years at once
**Wants:** years push each other, and one moment can't sit in two years. `README v1`

### 78 · Naming a specific day and moment
In December 31 there is "last day of this year", and at 00:00 of that day, "start of the last day of this year".
**Wants:** any day or moment can hold named things of its own. `whos-talk`

### 79 · History static, personal life dynamic
Historical events are shown as fixed, while a personal calendar keeps changing.
**Wants:** both live in the same system. A server can be static, sending history, or live, running a full calendar. `README v1`, `talk 2026-09`

### 80 · Sharing sleep and records with a doctor
You share sleep data, or any "record book", with your doctor.
**Wants:** you share what's needed and nothing more, and the data stays in your hands. `README v1`

### 81 · Company plans are pushed the same way
A company plan has steps in order.
**Wants:** the same pushing that moves meetings in time also moves steps in a company plan, with no calendar involved. `talk 2026-09`

## Push, dependency and limits

### 82 · One overrun pushes a whole afternoon of back-to-back meetings
Deniz has four meetings on Tuesday: 13:00, 14:00, 15:00 and 16:00, each an hour, no gaps. The 13:00 one runs 25 minutes over. The others each have different people in them. The 16:00 one ends at 17:00 when Deniz must leave for a school pickup.
**Wants:** To see that everything after the first meeting slips by 25 minutes, and to see immediately that the last one now collides with the pickup.

### 83 · A gap absorbs the overrun and the ripple stops
Same as above, but there is a 30-minute coffee gap between the 14:00 and 15:00 meetings. The 13:00 meeting runs 25 minutes over.
**Wants:** The 14:00 meeting starts late, the 15:00 and 16:00 meetings stay where they were, and the gap is shown as used up.

### 84 · Gap already eaten by an earlier slip
Same day and gap as case 83. At 09:00 an unrelated early meeting overran, and Deniz spent 20 of the 30 gap minutes on an urgent call instead. Now the 13:00 meeting runs 25 over.
**Wants:** To be told that only 10 minutes of slack remain and that the 15:00 meeting will now start about 15 minutes late.

### 85 · Unrelated days do not push each other
Aylin runs a workshop that overruns by 40 minutes. Her book club is at 20:00 the same evening with a different group of people, and the workshop ends at 17:00 normally.
**Wants:** Nothing to change for the book club, since the workshop cannot reach it.

### 86 · Two things in the same evening that only look unrelated
Kerem's workshop overruns 40 minutes. It ends at 17:00 normally, but Kerem is also the only driver for the group's shared van that leaves at 17:30 for the evening trip.
**Wants:** To see that the trip is affected because Kerem is in both, even though nobody drew a link between the workshop and the trip.

### 87 · A hard stop that will not move
A community hall must be empty by 22:00 because the caretaker locks it. The wedding party has a dinner, speeches and a dance. The dinner starts 50 minutes late because the bride's train was delayed.
**Wants:** To see which parts of the evening can no longer fit before 22:00 and to be asked which to shrink or drop, instead of the whole evening silently sliding past the lock time.

### 88 · Must be done before the shop closes
Selin needs a cake decoration bought before the craft shop closes at 18:00. She has a 15:00 to 17:15 dentist visit that could overrun and a 25-minute walk to the shop.
**Wants:** A warning as soon as the dentist visit's expected end makes the shop trip impossible, while there is still time to phone the shop or send someone else.

### 89 · Impossible constraints from the start
An organiser books three talks of 90 minutes each into a room that is only available 10:00 to 13:00, with a mandatory 20-minute break between talks.
**Wants:** To be told at booking time that the sum can never fit, and by how much, rather than discovering it on the day.

### 90 · Who gives way: the rigid one or the soft one
A parent has a dentist appointment at 15:00 (booked five weeks ago, costs a fee if missed) and a flexible catch-up with a friend at 15:00 the same day. Both were accepted.
**Wants:** To have the friend's catch-up offered for moving first, and the reason (fee, waiting list) visible when choosing.

### 91 · Cancel, shrink or move: comparing how bad each is
The Friday team lunch was planned 12:00 to 14:00, but a client call now takes 12:30 to 13:15. The lunch could be cancelled, cut to 45 minutes, or moved to Monday.
**Wants:** To see all three options side by side with what each costs the others (who loses travel money, who has to rebook, who is left out).

### 92 · Shrinking has a floor
A driving lesson is normally 60 minutes but the instructor's earlier lesson overran. The school says anything under 45 minutes doesn't count toward the required hours.
**Wants:** To be told that shortening to 40 minutes would waste the lesson, so the options are 45+ minutes or moving, not just "whatever fits".

### 93 · Mutual push that happens to settle
Two friends, Ece and Barış, agree that whoever arrives second at the cafe will make the other wait for the first coffee order. Ece is 10 minutes late, which makes Barış's later meeting 10 minutes late, which makes his lift home for Ece 10 minutes later, which makes her next meeting later still.
**Wants:** To see how far the delay travels and where it ends, even though the chain loops back through the same people.

### 94 · A circular chain of jobs
A builder says the plaster can't go on until the electrician is done, the electrician says he can't finish until the plumber is done, and the plumber says he can't start until the plaster is dry.
**Wants:** To be shown the loop clearly and to state which one is actually willing to start first, with the others adjusting.

### 95 · Waiting on an outside event: sunset
A photographer plans a wedding portrait session to start 45 minutes before sunset. Sunset is at 17:42 in October and 19:58 in June. The wedding date has not been fixed.
**Wants:** The session to be tied to sunset itself, and when the date is chosen to see the start time follow it.

### 96 · Waiting on a delivery
A kitchen fitter is booked for Thursday morning but the worktop delivery is "sometime Wednesday to Friday". The fitter charges for a cancelled day.
**Wants:** To see the fitting stay pencilled and shift whenever the delivery window narrows, and to be warned before the point where cancelling becomes costly.

### 97 · Waiting on the rain to stop
An outdoor football match for 24 children can start only when it hasn't rained for 20 minutes. It is drizzling at the planned 10:00 kick-off. The pitch is booked until 12:00 and the after-match barbecue is at 12:15.
**Wants:** To see how a late start eats the match, the barbecue's start and a possible cut-off after which the match is called off.

### 98 · Outside event never happens
An event depends on "first snowfall of the winter". By March there hasn't been any.
**Wants:** The thing to be shown as still waiting, not silently dropped and not silently invented for a date, and the person to be asked what to do with it.

### 99 · One talk cancelled, the expo continues
A speaker at the same expo drops out of a 10:00 to 11:00 talk on day 2. The expo and the other talks stand.
**Wants:** Only that hour to be affected: to see a hole in the schedule, and attendees who planned for it to be told.

### 100 · A sub-part that belongs to two parents at once
A workshop on data privacy is counted both as part of a company's Learning Week and as part of a city Tech Festival. Learning Week is cancelled; the festival is not.
**Wants:** The workshop to remain because one of its parents still stands, and to be shown clearly what was lost (the company's sponsorship, the paid time-off for staff).

### 101 · Both parents cancelled, but only one is private
The same workshop as case 100. Both events are cancelled. One of them was an internal company event whose name and attendee list are confidential.
**Wants:** People from the festival side to be told the workshop is off without learning anything about the company event.

### 102 · A task that spans two work sessions and skips lunch
Emre works on a report from 09:00 to 12:00, breaks for lunch 12:00 to 13:00, then works 13:00 to 17:00. The report needs 5 hours of work in total, and he starts at 10:30.
**Wants:** To see that the report is worked on for 1.5 hours before lunch, resumed after lunch, and finishes at 16:30, with the lunch shown as not counting toward it.

### 103 · The lunch runs long and the task moves with it
Same as case 102, but lunch lasts until 14:00 because Emre's colleague was celebrating a birthday.
**Wants:** The report's remaining hours to shift and end at 17:30, and to see this clashes with the 17:15 close of the office.

### 104 · Absent for the crucial part
Yusuf is on a 3-day training course. On day 2 he plans to leave from 10:00 to 13:00 for his daughter's school play. The mandatory exam briefing is at 11:00 that day.
**Wants:** A warning that his absence overlaps something he must attend, before he commits.

### 105 · Partial overlap of two commitments
Zeynep is due at a board meeting 14:00 to 16:00 and at a teacher meeting 15:30 to 16:30. Both are important and neither is optional.
**Wants:** To see a 30-minute overlap rather than a full clash, with options such as arriving late to one or leaving early from the other.

### 106 · Partial overlap that is fine for one side
A lunch break runs 12:00 to 13:00 and a webinar Ali wants to half-watch runs 12:45 to 14:00.
**Wants:** The 15-minute overlap to be accepted as harmless, since he doesn't need to be present at the start of the webinar.

### 107 · Dependent on another's start, not end
A film crew starts filming the sunrise scene when the sun rises; the sound recordist starts recording when filming starts. Rain delays filming by 90 minutes.
**Wants:** The recordist's start to follow the filming start, while her end (set by a hard 12:00 rental return) does not move.

### 108 · Dependent on another's end
The cleaning crew may only enter the ballroom after the last guest leaves. The party planned to end at 23:00 but the band plays an encore till 23:40.
**Wants:** The cleaners to be told their start moved to 23:40 (or a bit later) and to see whether that breaks their bus home.

### 109 · Must finish before another starts, with a mandatory rest
Concrete for a foundation must cure 48 hours before the bricklayers begin. The pour finishes Friday 15:00 instead of Friday 11:00.
**Wants:** The bricklayers' start to move from Sunday 11:00 to Sunday 15:00 automatically.

### 110 · Ripple through a chain of hand-offs
A shipment moves Istanbul warehouse, then truck, then port, then ship, then delivery. The truck breaks down for six hours. The ship sails at a fixed time, with the next sailing a week later.
**Wants:** To see whether six hours is absorbed by the port waiting time or whether the shipment now misses the sailing by a week.

### 111 · A buffer nobody remembers adding
Ayşe plans a flight with a 3-hour margin, then a colleague uses 2 of those hours for a coffee meeting nobody told her was in the margin.
**Wants:** To be able to see what has been taking up the margin, and who did it.

### 112 · A buffer that is a promise
A caterer needs 60 minutes between setting up and the first guests arriving for food safety checks. Guests arrive 20 minutes early.
**Wants:** To see this as a squeeze on a necessary buffer, not on spare time, and to be told that short of delaying entry, something has to be dropped.

### 113 · Reordering an unclocked list
A shopping list: bread, eggs, milk, a birthday candle. The shop is one-way; the candles are at the front and the milk at the back.
**Wants:** To change the order freely, and nothing else to think it has moved in time.

### 114 · An unclocked list gets a clock later
Same list. Hakan realises the shop closes in 40 minutes, and he takes about 5 minutes per item.
**Wants:** The list to start being a schedule with an end time, without losing the order he made.

### 115 · Milliseconds pushing milliseconds
A game server has a hit registered 40 ms after the shot, and a reaction animation that must start 15 ms after the hit. Lag of 80 ms on one player delays the shot.
**Wants:** All later effects for that player to shift by 80 ms, and those for other players not to.

### 116 · Centuries: a construction that outlives its planners
A cathedral is started in 1210; the crypt is to be finished before the nave is begun; the tower is meant to follow the nave. A plague halts building for 40 years.
**Wants:** Everything downstream to shift by 40 years, while the century-scale plan remains readable, without pretending the exact days are known.

### 117 · Forever: something that never ends
A person makes a lifelong promise to visit a grave every Sunday. A relative's wedding falls on a Sunday.
**Wants:** The promise to remain open-ended, with this Sunday flagged as in conflict, and a decision recorded as one exception, not a change to the promise.

### 118 · Recurrence exception that pushes others
A weekly Thursday 18:00 choir rehearsal is cancelled on 14 November for the concert hall test. The choir's rehearsal normally frees the hall for a badminton club at 20:00.
**Wants:** The badminton club to be told they may start early that one evening, if they want.

### 119 · The key person is late, not gone
A five-person interview panel meets Monday 10:00 to 12:00. The only member who speaks the candidate's language will be 50 minutes late.
**Wants:** The interviews to be reordered so the parts that don't need her go first, and the ones that do go after 10:50.

### 120 · Cancellation by condition, silently unmet
A picnic is agreed "only if at least 8 of the 12 invitees come". By Friday, 6 said yes, 3 have not answered.
**Wants:** To see the picnic as at risk, not cancelled, along with how many more yeses it needs and by when the answer is due.

### 121 · Condition met late, after the thing was cancelled
The picnic above is cancelled on Friday morning. On Friday afternoon three more people say yes.
**Wants:** To be offered the choice of reviving the picnic, with a note of what was already told to people.

### 122 · Correcting the past after the fact
Lale's team meeting was recorded as 10:00 to 11:00, but it actually started at 10:20 because of a fire drill and ended at 11:05. She notices two weeks later. The invoices for the hall were based on the record.
**Wants:** The record to be fixed, and to see which billing and follow-up things had relied on the wrong times.

### 123 · Plan versus what actually happened
Alper planned a day of 6 tasks. He did 3 of them, one for double the planned time, and 2 new things came up.
**Wants:** To see the plan and what happened side by side, with what pushed what, and not the plan overwritten as if it had always been that way.

### 124 · The past changed and the future must follow
A festival's set 3 was recorded as ending at 21:40, later corrected to 21:10. Set 4 had been recorded as starting after set 3's end.
**Wants:** To be asked whether set 4 also really started earlier, or whether the gap is real.

### 125 · Two time zones and a deadline
A translator in Izmir must deliver "by end of day" to a client in Lisbon. Izmir is two hours ahead of Lisbon in winter, three in summer, and the spring clock change falls between order and due date.
**Wants:** The deadline to be unambiguous to both, and to see the effective hours the translator gains or loses.

### 126 · Privacy leak by a ripple
Doctor Sena's clinic day is a series of appointments. A patient's 14:00 appointment overruns and a shared calendar shows Sena's 15:00 lunch guest "delayed 40 minutes, because of the 14:00".
**Wants:** The lunch guest to learn only that Sena is late, not why or what the earlier appointment was.

### 127 · Privacy leak by absence
Kaan blocks 13:00 to 15:00 as busy because of a therapy session. His manager's team, seeing a two-hour gap in a chain of tasks, can see the block moved when the session ran long.
**Wants:** Others to see a generic busy period, without any sign of what or how it changed.

### 128 · "Can I push you by 30 minutes?" from a boss
A director asks an intern to shift their one-on-one back by 30 minutes; the intern has a bus to catch at 17:00 and the moved meeting would end at 17:10.
**Wants:** The shift to be shown with what it breaks for the intern and an easy way to say "only if it ends by 16:55" without explaining why.

### 129 · A sleeping baby as an outside event
A parent plans a 90-minute work call to begin "when the baby falls asleep, usually 13:00 to 13:30", and to end before the baby wakes, up to 2 hours later.
**Wants:** The call's start to follow the nap, and a warning when the call runs longer than the nap could plausibly last.

### 130 · Starting depends on a quorum
A village assembly can only begin when 30 of 45 members are present. At 19:00 there are 22; people trickle in until 19:35.
**Wants:** The assembly's start to be the moment the count is reached, and everything after it (the vote, the tea, the caretaker locking at 21:00) to follow.

### 131 · Cancelling one item makes a later one impossible
A wedding cake is ordered to be picked up after the florist has delivered the table setting, because the cake is placed on that table. The florist cancels.
**Wants:** The cake pickup to be flagged as dependent on something that no longer exists, without deleting it.

### 132 · One slot shrinking leaves a leftover shrinking too
A speaker's slot is cut from 30 to 20 minutes to make room. The moderator's Q&A that followed was planned as "the remaining time of the slot", which was 10 minutes.
**Wants:** The Q&A to be seen as a leftover which is now shorter (or vanishes) and for the moderator to be told.

### 133 · Prediction that updates from live data
A parcel courier says "arriving between 14:00 and 18:00", then, after a tracking update, "16:10 to 16:40". A plumber is booked for 15:30 at the same address.
**Wants:** The plumber's booking to be judged against the moving estimate, and a warning when the two windows have started to overlap.

### 134 · Estimate that grows with each check
A student says her thesis chapter will take "about 2 weeks". After 5 weeks she says "about 2 more". The next deadlines are set on the old guess.
**Wants:** To see the pattern of growth and later items marked as less trustworthy.

### 135 · Range of duration that decides feasibility
A surgery takes 2 to 5 hours. The surgeon must catch a flight at 20:00 and the operation starts at 12:00, with a 90-minute travel to the airport.
**Wants:** To see the plan as fine in the good case, impossible in the worst case, and where in the range it flips.

### 136 · Buffer versus estimate: padding twice
A manager says "add a safety margin to every task", and each of the 6 people in a chain adds 30 minutes on top of their own estimates. The final deadline is 4 hours away and the sum of estimates is 2.5 hours.
**Wants:** To see how much of the total is real work and how much is padding, so nobody accidentally wastes 3 hours.

### 137 · Someone's deadline is another's start, and they disagree about the deadline
A designer says "done by Wednesday" meaning Wednesday morning. The printer reads it as Wednesday night and books the press for Thursday morning. The customer expects the flyers Wednesday afternoon.
**Wants:** The mismatch to be visible before the customer is disappointed.

### 138 · Long-running thing interrupted by many small things
A three-hour exam includes toilet breaks for 3 of 20 students, each 5 to 10 minutes. The invigilator must note the times to give those students extra time.
**Wants:** Each student's absence recorded inside the exam, and their individual end times to differ while the room's end does not.

### 139 · The room is the constraint
A bakery oven can only run one batch at a time. Six trays of bread must be done by 07:00 and each needs 40 minutes; the first can start at 04:30.
**Wants:** To be shown that the sixth tray finishes at 08:30 at the earliest, so 6 trays can't be done, and which two orders would fit.

### 140 · Pushing that is one-directional
A dinner that runs late pushes the taxi home, but the taxi being late shouldn't push the dinner.
**Wants:** The dinner unaffected by the taxi's delay, while the taxi's wait is affected by the dinner.

### 141 · A sub-part still happens when its parent is delayed, but shifted
A school trip departs 08:00 and includes a museum visit at 10:30 and a picnic at 12:30. The bus is 45 minutes late.
**Wants:** The museum visit and the picnic to move by 45 minutes unless the museum has a fixed entry slot, in which case that one to be flagged.

### 142 · Fixed slot inside a moving parent
Same trip, the museum has a booked entry slot of 10:30 that cannot move; the bus arrives at 11:15.
**Wants:** To see that the slot is lost, and to be shown the choice of rebooking, skipping, or the museum letting them in.

### 143 · A late start eats the end of something with a fixed finish
A 60-minute exam is set to end at 12:00 in a hall used by another exam from 12:15. The first exam starts 20 minutes late because of a missing paper.
**Wants:** The options to be shown: shorten by 20 minutes (unfair), end at 12:20 (hits the next), or move the other exam — with what each costs.

### 144 · Retroactive change to a hard limit
The city moves the noise curfew from 23:00 to 22:00 with effect from next month. A band has four booked concerts, two of which end at 22:45.
**Wants:** The two concerts to be flagged as newly breaking a rule, while the two that end at 21:30 are left alone.

### 145 · A skipped occurrence that other things had counted on
A weekly Tuesday tutoring session is skipped this week. A student's homework was due "at the next tutoring session" and the tutor's own billing counts sessions per month.
**Wants:** The homework's due moment to move to the next real session, and the month's session count to be shown as one less.

### 146 · Absence that lengthens the whole
A team of 5 plans a 20-hour job by dividing it evenly. Two people are out sick for the last two days.
**Wants:** To see the job's end move later, or a list of how much of the job can't be done, and by whom.

### 147 · Dependency on somebody's decision, not on a time
A family cannot book flights until Grandma says whether she will travel. Prices rise weekly and Grandma tends to answer after about ten days.
**Wants:** The booking to be seen as waiting on a person, with a way to nudge, and to see the effect on the price and the trip start if the answer is late.

### 148 · Something that had to happen first didn't, but later things did
A mechanic replaced the brake pads on a car and only afterwards did the customer learn that the wheel bearing inspection, which was meant to come first, was skipped.
**Wants:** The record to show that the later work was done out of its proper order, and the skipped step to remain an open obligation rather than becoming untrue history.

### 149 · A shorter version of the day still respects order
A tourist has 4 hours in a city and wanted: the tower, the market, lunch, the old bridge. Only 2.5 hours remain when they arrive.
**Wants:** To pick which to keep, with the order they kept respecting the walking sequence, without the schedule pretending they had 4 hours.

## Personal life, routines and health

### 150 · Shower runs long and everything after it slides
Mert's shower is planned for 10 minutes but takes 25. Breakfast, the walk to the bus and the school drop-off of his daughter follow it in order. Nothing else in his day is connected to that morning.
**Wants:** the rest of the morning to shift by 15 minutes while his afternoon gym class and his sister's unrelated errands stay exactly where they were.

### 151 · Impossible morning
Aylin needs 45 minutes for breakfast, 20 for a shower, 30 for a commute and 15 to get the kids ready, all in order, and must leave by 7:40. She wakes at 6:50 at the earliest. The ranges add up to at least 110 minutes; she has 50.
**Wants:** to be told plainly that the morning cannot fit and by how much, and to choose what to drop rather than have the day silently overrun.

### 152 · Chore offered only when energy allows
The room-cleaning chore is free to happen Tuesday evening, but Selin's usual Tuesday is a double shift and she is exhausted by 19:00.
**Wants:** the chore not to be suggested for Tuesday evening, and to be offered on a day when she tends to have energy left.

### 153 · Listening while walking is allowed, coding is not
Ozan walks the dog 17:00–17:40 and wants to hear a podcast, but also has a 17:15 coding task.
**Wants:** the podcast and walk to coexist, and the coding task to be flagged as impossible during the walk.

### 154 · Streak broken by a day in hospital
Leyla has a 212-day language-practice streak. She is admitted to hospital for two days with no phone.
**Wants:** the streak not to read as broken by something she could not do, and her records of the 212 days to remain honest.

### 155 · Streak with one legitimate skip day per week
Hakan runs Monday, Wednesday, Friday, Saturday. He skips Wednesday when he has a night shift.
**Wants:** the skip to count as expected, not as a miss, and the streak to continue.

### 156 · Streak by count versus streak by days
Mira drinks 8 glasses of water a day. Some days she drinks 6 and one day 12.
**Wants:** to choose whether a streak means "at least 8" or "roughly 8", and to see the 12 not compensate for a later 6.

### 157 · Correcting the past: she did do the habit yesterday
Tuba forgot to tick off her evening stretch yesterday, and today it shows as a break in her 40-day streak.
**Wants:** to fix yesterday afterwards and have the streak, the weekly totals and any reminders she received recalculate.

### 158 · Plan versus what actually happened for sleep
Emre planned to sleep 23:00–07:00. His watch says he fell asleep at 00:40 and woke at 06:10.
**Wants:** both the plan and the reality kept side by side, with the 2.5-hour shortfall visible, and not one replacing the other.

### 159 · Sleep debt builds over a week
Nil sleeps 6 hours on weekdays against a need of 8, five nights in a row, then sleeps 10 hours on Saturday.
**Wants:** to see the accumulated debt of 10 hours, that Saturday repaid only part of it, and how that changes what she should attempt on Sunday.

### 160 · Fatigue moves the whole day
After a 4-hour night, Ada's usual 10:00–12:00 focused work is likely slow. She has three tasks in that window, each pushing the next.
**Wants:** the tasks to be shown as likely to run long and pushing the rest of the day, not presented as certain to finish on time.

### 161 · Energy as a range across the day
Barış is sharp from 9 to 11, dips 14 to 15:30, and recovers a little at 17:00. He wants to place hard tasks in the good stretches.
**Wants:** the day to show these stretches as soft and personal, changing from week to week, not as fixed slots.

### 162 · Medication with a window, not a moment
Osman takes blood pressure tablets "in the morning, with food, 8–10 am". He eats at 9:40 on Monday.
**Wants:** the dose recorded as on time, and the next dose 24 hours later calculated from when he actually took it, if the label says so.

### 163 · Missed dose with two possible rules
Hatice missed her antibiotic at 14:00 and remembers at 17:30. The next dose is at 22:00. The instructions say: if less than half the interval has passed, take it; otherwise skip.
**Wants:** to be told which applies, and what the rest of the doses do afterwards.

### 164 · Missed dose must not be doubled
Ferit takes a medicine at 08:00 and 20:00. At 21:30 he is unsure whether he took the evening dose. His wife also thinks she saw him take it.
**Wants:** a clear record of whether it was taken and by whom, not a guess, and no prompt to take a second dose.

### 165 · Two carers give the same tablet
Elder Nur takes a heart tablet at 9:00. Her daughter gives it at 9:00 and the home nurse gives it at 9:10 because neither knew.
**Wants:** the second person to see, before acting, that it was already given.

### 166 · Medication handover at shift end
Carer Sevgi finishes at 14:00, leaving Jale for the evening. Nur had her tablets at 08:00 and 12:00, refused the 13:30 one and vomited at 13:45.
**Wants:** Jale to see what was given, what was refused and what happened afterward, without needing to phone Sevgi.

### 167 · Carer drops out at the last minute
Jale calls in sick at 13:00 for a 14:00 handover. Nur's evening carer slot is empty, and her son is in another city.
**Wants:** to see what must still happen that evening (meds at 18:00 and 21:00, dinner, night checks), who could cover, and what is most urgent.

### 168 · Elder cannot take pills on an empty stomach
Grandfather Ismail has a tablet that must be taken 30 minutes before food, and food is delayed from 12:00 to 13:30 because the outing ran late.
**Wants:** the tablet's time to move with the meal, not sit at 11:30 on its own.

### 169 · Medication clashes with another medication
Aunt Filiz takes iron at 8:00 and thyroid tablets at 8:15. They should be separated by at least 4 hours.
**Wants:** the conflict to be noticed and one of them moved without breaking the rest of the day.

### 170 · Refill runs out during a trip
Kerem has 6 tablets left and leaves for a 10-day trip on the 14th. He takes one daily.
**Wants:** a warning that he will run out on the 20th, well before he returns on the 24th, in time to get a refill.

### 171 · Sharing a medication list with a pharmacist without the diary
Ruya's pharmacist may see which medicines she takes and their doses, but not when she sleeps, where she goes or her cycle.
**Wants:** the pharmacist to see only the medicines and nothing else she keeps.

### 172 · Late period after a very stressful fortnight
Gül's period is due on the 12th. Between the 1st and the 14th she had two fights with her mother, a night in hospital with her father and three important meetings. Her period has not arrived by the 15th.
**Wants:** the prediction to move later with the reasons named, not to treat her as simply late.

### 173 · Predicted intensity affects tomorrow's plan
Bade's heavy first day usually leaves her in pain for a day. Her cycle predicts a heavy start on Thursday. She has a long flight planned.
**Wants:** to be warned gently about the overlap and to see which of her other plans are affected.

### 174 · Cycle data shared with a partner as a vague window
Mine is willing to tell her partner that she will be "unavailable for hiking sometime 10th–14th", but not the reason.
**Wants:** her partner to see only that vague window and never the cycle.

### 175 · Cycle leaks through an odd pattern
Gizem hides her cycle from her colleague Tolga, but has told him she is "unavailable" for three days every month. He notices the pattern.
**Wants:** to be able to keep what she shares from betraying what it stands for, for example by not repeating on the same rhythm.

### 176 · Missed logging then bulk correction
Ceren forgot to log her period for a week, then enters the start date as the 3rd when she remembers on the 10th.
**Wants:** past predictions, warnings she got in that week and averages to update after the fact, without her having to redo anything.

### 177 · Pregnancy due date as a range
Aslı's last period was March 1, her dating scan on April 20 says 8 weeks and 4 days. The two give due dates 12 days apart.
**Wants:** the due date shown as a range that narrows when the scan and later checks arrive.

### 178 · Due date range affects everything else
Aslı's due date range is December 2–14. Her sister's wedding is December 10 and her leave request starts December 1.
**Wants:** to see the wedding sits inside the birth range, and to plan leave and travel for the whole range.

### 179 · Baby arrives early
Birth happens at 36 weeks with everything planned for 40. Prenatal appointments, leave arrangements and a hospital bag reminder are still queued.
**Wants:** the past plan to be replaced by a newborn routine, and the appointments no longer to nag.

### 180 · Newborn feeding every 2–3 hours
Baby Ali feeds every 2 to 3 hours, day and night. Sometimes 4 hours, sometimes 90 minutes. Both parents share nights.
**Wants:** the next feed shown as a range that adjusts from the last actual one, and to see whose turn it is.

### 181 · Toddler nap that varies
Lina's daughter naps 12:30–14:30 on most days but 13:15–14:00 when she skipped the morning walk. Lunch is before, and a playdate at 15:00.
**Wants:** the playdate not to be marked at risk unless the nap runs past 14:45.

### 182 · Two parents disagree about when the baby last ate
Ece says Baby Zeynep was fed at 14:10. Her husband entered 13:40 on his side. Both clocks were correct for their own devices.
**Wants:** the disagreement to be visible, not silently resolved, and the next feed not calculated from a guess.

### 183 · Child sick, whole family schedule moves
Six-year-old Can has a fever on Tuesday morning. School is out, one parent must stay home, and both have meetings. Grandparents are away.
**Wants:** to see what has to move, who can take it, and for the other parent's unrelated work not to be disturbed.

### 184 · School-day routine with a late bus
Mia's bus normally arrives at 7:32 but today is 20 minutes late. Her mother's train, her brother's breakfast and her own homework check depend on her being seen off.
**Wants:** the parts that actually depend on the bus to move, and her brother's breakfast to stay.

### 185 · Child's routines at two homes
Twins Eren and Defne live at their mother's on weekdays and father's on weekends. Bedtimes are 20:30 versus 21:30, and their asthma inhaler is at both.
**Wants:** the inhaler doses to be one shared record, not two, and each parent to see the other's home rules only if allowed.

### 186 · Dog walk that depends on rain
Mehmet walks Karabaş at 7:00 and 18:30. Heavy rain is forecast at 18:30. Karabaş needs at least two walks.
**Wants:** the second walk to move to a dry stretch, not disappear, and for both walks to stay in the same day.

### 187 · Vet visit and fasting
Poyraz the cat has a vet appointment at 10:00 where she must not have eaten since 22:00 the night before. The family usually feeds her at 6:30.
**Wants:** the morning feeding to be held back, and everyone in the house who might feed her to know.

### 188 · Pet medication with a syringe twice a day
Fındık the rabbit needs 0.5 ml at 8:00 and 20:00 for ten days. On day 4 the owner is away, and a neighbour steps in.
**Wants:** the neighbour to see the doses only for this pet and this period, and the owner to see each dose as it is given.

### 189 · Pet insurance and a vet visit two clocks
Nazlı's vet clinic says the visit was at 15:20; her own diary says 15:00. The insurance form needs the actual time.
**Wants:** both times kept, with the discrepancy shown, not the clinic's overwriting hers.

### 190 · Food planned in advance versus what was eaten
Berk planned salmon and rice for dinner. A friend called and he ate pizza at 21:15 instead.
**Wants:** the plan and the meal both recorded, and the day's calories to use the pizza.

### 191 · Meal photographed with uncertain portion
Umut photographs a plate of pasta. The portion could be 350 to 550 kcal.
**Wants:** the calories shown as a range, with a way to narrow it after he remembers it was the small bowl.

### 192 · Expiry date before it is used
Chicken bought Monday expires Thursday. Dinner plans for Wednesday and Friday call for chicken.
**Wants:** to be told the Friday plan uses chicken past its date, and to reshuffle the meals.

### 193 · Daily protein target unreachable late in the day
Tarık needs 120 g of protein a day and by 20:00 has eaten 60 g. He has no meals left before bed.
**Wants:** to be told the target is unlikely to be reached, and offered what is realistic, without judgement.

### 194 · Carbs matter for a diabetic with insulin timing
Jülide injects insulin 15 minutes before meals based on carbs. Her lunch is delayed from 12:30 to 13:15 after she injected.
**Wants:** a warning right away that the injection and meal have drifted apart.

### 195 · Sharing goes too far
Kuzey's weekly total falls to 400 kcal one week with a single meal logged. A dietician looking at the total could tell that he ate only once.
**Wants:** to know before sharing that small amounts of data can give away more than intended.

### 196 · Doctor sees medication and sleep but not food
Dr. Aksoy has access to Nazan's sleep and medication for a month before a visit. Nazan does not want him to see her meals.
**Wants:** the doctor to get sleep and medication in full detail, with food absent, not marked as "hidden".

### 197 · Access ends after the appointment
Nazan agreed to share three weeks of data until her appointment on the 20th.
**Wants:** the doctor's view to end at the appointment without her having to remember, and for him not to keep a copy in her name.

### 198 · Doctor's clock and patient's clock disagree
The clinic recorded a blood draw at 08:05, but Yusuf's own fasting record says he ate a biscuit at 07:50. A fasting test is required.
**Wants:** the discrepancy raised, and the record showing what he did rather than only the clinic's version.

### 199 · Fitness plan with rest days
Gökhan follows a 4-day strength plan: Monday legs, Tuesday push, Thursday pull, Saturday full body. He misses Tuesday.
**Wants:** the plan to offer him a way to keep rest days between hard sessions, not to stack Tuesday's on Wednesday if that breaks recovery.

### 200 · Injury cancels part of the plan
Damla twists her ankle on Sunday, and the doctor says no running for 2–4 weeks. Her 10 km race is in 5 weeks.
**Wants:** running to disappear from the plan for the range, upper-body work to remain, and to see whether the race is still possible if healing is at the fast or slow end.

### 201 · Return from injury ramps up slowly
After 3 weeks Damla is cleared to run again but must start at 10 minutes and add no more than 10 percent weekly.
**Wants:** the plan to rebuild in small steps and show that the race day is now unreachable at the target distance.

### 202 · Fatigue plus heavy training week
Serkan trained hard five days in a row, slept badly two nights and has a work deadline Friday. His Saturday long run is planned for 25 km.
**Wants:** the plan to suggest lowering or moving the run, with his own reasons shown.

### 203 · Gym class fixed by someone else
Pilates class is Thursday 18:00 at a studio that cancels at random. Dilek's whole evening is arranged around it.
**Wants:** the cancellation to move only what depended on it, such as dinner and the babysitter.

### 204 · Mental health check-in at low mood
Emir does a daily 1-to-5 mood check-in. For nine days he entered 2 or lower.
**Wants:** a gentle notice that shows the pattern, offers to share it with his therapist, and never sends it anywhere without his consent.

### 205 · Mood check-in that his employer must never see
Emir's calendar is shared with his manager as free or busy.
**Wants:** his therapy hour to appear as busy and nothing more, and his low-mood days not to show up as "unavailable" on days he was still working.

### 206 · ADHD: task never started because the start time feels vague
Kaya writes "do taxes" for Saturday. He never starts. The task has no first step and no time.
**Wants:** the task to be broken into a very small first step that has a clear time and can be done in five minutes, without shaming him.

### 207 · ADHD: things take longer than he thinks
Kaya believes replying to email takes 15 minutes. His history says it takes 40 to 60.
**Wants:** his own estimate shown beside what has actually happened, and future plans to use the realistic range.

### 208 · ADHD: transitions
Ilkay hyperfocuses on a game from 21:00 and loses track. Bedtime is 23:00 and tomorrow she has an early exam.
**Wants:** a warning that grows more insistent as bedtime nears, and the exam prep to be sequenced for what still fits.

### 209 · Body doubling session with a friend
Ada and Tuna agree to work side by side on video for 90 minutes, each on their own task. Ada leaves after 40 minutes because of a call.
**Wants:** Tuna's session to remain his own while Ada's absence is visible to him, and Ada's private call to stay private.

### 210 · Recurring habit with an exception for holidays
Ceyda meditates every morning at 7:00 except during her yearly trip abroad when the time zone changes and there is no fixed morning.
**Wants:** the habit to pause or adapt for the trip without her creating it again.

### 211 · Time zone change during a medication schedule
Volkan takes a pill every 24 hours at 08:00. He flies from Istanbul to Tokyo and lands at 06:00 local time, 6 hours ahead.
**Wants:** the next dose kept safely apart from the last while the day shifts, and to be told what to do over the transition days.

### 212 · Elder and family disagree about good times
Grandma Hanife wants lunch at 11:30 and her insulin at 11:00. Her daughter wants everything to be at 13:00 to suit her work.
**Wants:** to see the two wishes side by side and the clash with the insulin, so a real conversation can happen.

### 213 · Extreme scale: a care home
A home has 60 residents, each with 6 to 12 medications at different times, 4 shifts of 5 carers and constant changes.
**Wants:** each carer to see only their own residents and shift, and a missed dose or double dose across the home to be spotted quickly.

### 214 · Extreme scale: years of history
Melis has tracked sleep, meals, cycle and mood daily for 12 years, over 4,000 days. She asks what her worst winters looked like.
**Wants:** to answer that across years in seconds without being swamped by daily detail.

### 215 · Death or leaving of a shared person
Hüsnü, who shared his routines with his carer, family and doctor, passes away. Several people still hold reminders, pending shared plans and records.
**Wants:** the things that were his to end, and each person to keep only their own records, with the rest handled carefully and no more pushing on the living.

### 216 · Dependent on a person who dropped out for the whole plan
Every morning Ayten, a stroke patient, needs help with washing, dressing and eating in that order from her carer Hale, who goes on leave for two weeks.
**Wants:** the morning to show as unfilled, with the order and durations preserved, so a substitute can step in.

### 217 · Sleeping in as a choice, not a failure
On Sunday Iris plans to wake at 6:30 for a walk, then decides to sleep in until 9.
**Wants:** the walk removed or moved without the missing wake-up counting as a broken routine.

## Events and celebrations

### 218 · Wedding date fixed, everything else counted backwards from it
Deniz and Arda marry on Saturday 14 June. The caterer needs final numbers 14 days before, invitations go out 8 weeks before, RSVPs close 3 weeks before, and the tailor needs 10 weeks for alterations. None of these have a date the couple picked; each is only "this long before the wedding". The venue then offers 21 June instead. every one of those deadlines is now a week off.
**Wants:** to move the wedding once and see every dependent deadline land on its new day, without retyping them.

### 219 · Vendor deadline already inside the notice period
The couple books the florist on 20 May for a 14 June wedding. The florist's contract says flowers must be ordered 4 weeks ahead, which was 17 May. the plan asks for something that is already in the past.
**Wants:** to be told plainly that this deadline cannot be met and by how much, and still to see the rest of the plan.

### 220 · Deposit schedule with penalties
Ten vendors, each with a deposit and a balance due date, 19 payments in total. Missing the photographer's second payment by more than 7 days voids the contract. the balance due date sits on a Sunday and the bank moves the money on Monday.
**Wants:** to see the real last safe day for each payment, and a warning as it approaches.

### 221 · Ceremony overruns and the cocktail hour absorbs it
Ceremony 16:00, planned 30 min, cocktail hour 16:30–17:30 with 40 min of family photos inside it, reception dinner at 17:30. The priest talks for 55 min. the ceremony ends at 16:55. Guests still need drinks time, and the caterer's roast is ready at 17:30.
**Wants:** to see that the photos shrink but dinner stays at 17:30, and to be able to say which of those two the couple would rather give up.

### 222 · Ceremony overruns and dinner has to move
Same wedding, but the catering contract says food may wait at most 20 min before it must be served or is lost. the ceremony runs 90 min over instead of 25.
**Wants:** to learn that dinner cannot simply slide, and to see what the day looks like if dinner moves versus if the kitchen is asked to do something else.

### 223 · Rain plan with a decision time
Outdoor ceremony at 15:00 on a lawn, indoor barn as backup. Setting up the barn takes 90 min and the chairs on the lawn take 60. The forecast at 11:00 gives 55% rain. the decision has to be made by 12:30 for the barn setup to finish.
**Wants:** the day to show a moment where a choice must be made, what the choice depends on, and what each answer does to the rest of the day.

### 224 · Rain arrives mid-ceremony
Outdoor ceremony started at 15:00 under clear skies. At 15:12 rain begins. the ceremony moves indoors while still going, and 120 guests need to move.
**Wants:** the record afterward to say what really happened, indoors from 15:20, and the outdoor plan to show as abandoned rather than as still valid.

### 225 · Order of speeches with no clock
The best man, the bride's father, the maid of honour and the groom's grandmother will speak. The couple wants exactly that order but does not want to fix any times. the grandmother is 91 and may tire; the best man is nervous and may want to go earlier.
**Wants:** the order kept and shown to everyone involved, with no times attached unless someone adds them.

### 226 · Speeches that push the first dance
Four speeches planned at 5 min each, first dance at 21:00 straight after. Speeches begin at 20:35. the father speaks for 12 min and the best man for 9.
**Wants:** the first dance to move later on its own and the DJ to see the new start, while the cake cutting, which is not in that sequence, stays put.

### 227 · Officiant drops out the morning of
The registrar who was to marry Selin and Kaan at 14:00 calls at 07:30 with a fever. civil ceremonies need a registrar, no one else is booked, and the venue is paid until 23:00.
**Wants:** to find who else could do it and when, and to see what breaks in the day if the ceremony slips to 17:00 or moves to the next day.

### 228 · Bride's flight is late and everything waits on her
The bride flies in from Frankfurt, landing 11:20, ceremony 16:00. Hair and makeup take 2 h 15 min, the drive from the airport takes 50 min, and there is a 30 min photo session before the ceremony. the flight is delayed by 90 min while she is in the air.
**Wants:** to see the day shift as a consequence, which pieces can still start and which cannot.

### 229 · Hair and makeup running late
Six women need hair and makeup, 45 min each, one artist, starting 08:00. The artist is 25 min late and the fourth woman needs 70 min. the bride is last.
**Wants:** the bride's start time to reflect the sum of everything ahead of her, even though no one edited her time.

### 230 · Guest list must not leak
The couple's guest list has 140 names, including an ex-partner and a colleague who was told the wedding is small. The DJ, caterer and photographer each need parts of it. the DJ asks for the full list to prepare name announcements.
**Wants:** every vendor to get what they need, and nobody to see who else is invited.

### 231 · Who is seated where
Table 7 seats 8: two feuding cousins and six neutral friends. The venue manager only needs to know that table 7 has 8 seats. the manager asks who sits at 7 in order to prepare allergy cards.
**Wants:** the manager to see the allergies and nothing about the feud.

### 232 · RSVP counts change after the caterer's deadline
The caterer's cut-off for numbers was 3 June: 118 guests. On 9 June, 6 people cancel and 4 new ones must be added. the caterer's contract allows a variation of plus or minus 5.
**Wants:** to see that the net change of minus 2 fits and the caterer only needs to hear the net number, not who came and went.

### 233 · Plus-one chosen late
Guest Melis was invited alone. Three days before the wedding she asks to bring her partner. the seat plan is fixed, the place cards printed, and the meal choices sent.
**Wants:** to see what this one addition touches: seat, meal, headcount, and the deadline it may have already missed.

### 234 · Guests in different timezones for a live broadcast
The ceremony at 16:00 Istanbul is streamed to grandparents in Los Angeles, cousins in Sydney and friends in Berlin. each of them asks when to be online.
**Wants:** each person sees the start in their own local time and date, including the Sydney guests seeing the next day.

### 235 · Timezone change between ceremony and reception
Ceremony in Istanbul at 16:00 and reception in a village across the border that is one hour ahead. the couple tells guests to arrive at the reception at 18:00 and half turn up an hour late.
**Wants:** every time in the invitation to be unambiguous about which clock it is on.

### 236 · Sunset time changes with the date
A photo shoot is set for "golden hour". The wedding date moves from 14 June to 20 September. golden hour was around 20:30 and is now about 18:15.
**Wants:** the photo slot to follow the sun, not to stay at a clock time nobody meant.

### 237 · Wedding party arrival estimate that updates
Guests come by chartered bus from town, "about 40 min". Traffic data shows the bus is 25 min behind. the string quartet is waiting on the lawn to start when guests are seated.
**Wants:** the quartet's start to show the currently predicted arrival, and to update as the bus moves.

### 238 · A show that starts only when the room is ready
The musicians will start "when the last guest has sat down", but the ceremony must start by 16:00 for the church's next booking at 17:30. at 15:58 twelve guests are still in the car park.
**Wants:** to see the open-ended start together with the hard limit, and what gives if they clash.

### 239 · Surprise party the guest of honour must not see
Cem turns 40. 25 friends will hide in the flat from 19:30. His wife Ayşe takes him out for dinner from 18:00 and must bring him back at about 20:00, "give or take 15 min". the guests arrive from 18:45, and the restaurant is slow.
**Wants:** Ayşe to see what she must do and by when; Cem to see none of it, including his own calendar showing an evening out.

### 240 · Surprise party where the honoree's own calendar leaks it
Cem's shared family calendar shows "Cem – flat, 19:30, decoration team". he opens it while checking for a dentist appointment.
**Wants:** the organisers' preparation to be visible to them and hidden from him without an empty gap that looks suspicious.

### 241 · Surprise party cancelled the day before
Cem's mother is taken to hospital on Friday. The party was Saturday 19:30. 25 guests, a caterer, a balloon supplier and a cake all need to know, but Cem must still not learn about the party from the cancellation.
**Wants:** everyone involved told what they need, and the cover story kept, plus a record of what was already paid for.

### 242 · Children's birthday with parents waiting
Party at a soft-play centre, 14:00–16:00 with 12 children. The entertainer books 45 min in the middle. the entertainer arrives 20 min late and the pizza is due at 15:00.
**Wants:** to see the entertainer's slot slide, the pizza stay put, and the overlap between them shown clearly.

### 243 · Annual event that skips one year
A neighbourhood street festival has been held every second Saturday of July for nine years. The council skips it in 2027 for road works. it returns in 2028 as normal.
**Wants:** the yearly event to keep going while 2027 is shown as skipped with a reason, not deleted from history.

### 244 · One occurrence of a series moved
A yearly reunion is normally on the last Saturday of August. This year the venue is only free on the first Saturday of September. invitations for the whole series still say August.
**Wants:** this one year to differ without changing the years before or after.

### 245 · The expo is cancelled but its talks are not
Regional craft expo, Saturday 09:00–18:00, with 14 talks, 3 workshops, a lunch and a prize-giving. the whole expo is cancelled on Thursday due to a storm warning, but two speakers had already planned to come and hold their talk for a smaller audience elsewhere.
**Wants:** most things to go away with the expo, the two talks to survive if the speakers say so, and everyone affected to be told.

### 246 · Keynote running late in a parallel conference
A keynote in the main hall (09:00–10:00) is followed by coffee (10:00–10:30). Three side rooms start at 10:30. the keynote finishes at 10:20 and 900 people leave the hall.
**Wants:** coffee shortened rather than side rooms delayed, unless the coffee has a minimum, and side rooms with speakers at other events to be affected only where the same people are involved.

### 247 · Parallel rooms sharing a speaker
Dr Aydın is speaking in Room A at 11:00 and on a panel in Room C at 11:45. The rooms are 6 min apart on foot. Room A's session begins 20 min late.
**Wants:** to see that Dr Aydın now cannot make the panel start, and by how much.

### 248 · Two rooms that do not affect each other
Room A runs long by 30 min. Room B has an unrelated workshop with a different audience and speakers. the organiser worries B has to move too.
**Wants:** B to stay where it is, with no warning, while the shared lunch break shows the effect.

### 249 · Attendee who wants two parallel talks
Zeynep is registered for talk X (11:00–11:45, Room 1) and talk Y (11:30–12:15, Room 2). she does not notice.
**Wants:** the overlap flagged to her and only to her, and to see which one loses if she chooses.

### 250 · Speaker no-show
Speaker for the 14:00 session on the second day does not appear. It is 14:07 and 180 people are seated. the organiser must fill 45 min.
**Wants:** to see who is free and near, what it does to the next sessions, and the empty slot recorded honestly afterward.

### 251 · Virtual keynote speaker in the wrong timezone
Speaker in Auckland was told "09:00". The conference is in Lisbon and 09:00 was Lisbon time. the speaker expects it at 21:00 local.
**Wants:** the slot to show a single moment that both sides read in their own clock.

### 252 · Mandatory break that can never disappear
Union rules for interpreters give them 15 min rest after every 45 min of speech. A panel of 6 speakers is planned for 2 h with no break. the plan cannot be satisfied.
**Wants:** to be told which rule is violated and by whom before the day.

### 253 · Lunch has to fit a big crowd
Lunch is planned for 12:30–13:30 for 1,200 people with four serving points, each serving about 6 people per minute. a delegate asks whether the last person can eat and still get to a 13:30 session.
**Wants:** an honest estimate that the last person is served around 13:20 and that the 13:30 session will start with people missing.

### 254 · Talks assigned to a room too small for them
A popular talk with 400 registrations is scheduled into a room seating 150, from 15:00 to 16:00. registration data grows every hour.
**Wants:** to see the mismatch as it appears and what other rooms are free at 15:00.

### 255 · Multi-day festival with three stages
Friday to Sunday, stages A, B and C each with 8 acts a day. a storm delays everything on Saturday for 2 hours starting at 17:00.
**Wants:** the acts after 17:00 on all stages to move, and those before it to remain, including the sound checks between them.

### 256 · Headliner delayed and a curfew
Headliner is due on at 22:30 with a 90-minute set. The stage curfew is 00:00 sharp. the previous act runs 25 min over and the headliner is not ready.
**Wants:** the show to say the headliner will have roughly 65 min, not 90, and to see who is told.

### 257 · Curfew is fixed by law but the fine is negotiable
Same festival. The council will accept sound up to 00:20 with a fine of 2,000 per started 10 min.
the organiser thinks the fine is worth it.
**Wants:** the difference between a wall and a price to be visible.

### 258 · Impossible schedule
An outdoor festival has two headliners each demanding the last slot on Saturday, 21:30–23:00, on the main stage. both contracts say the slot is guaranteed.
**Wants:** the contradiction shown as it is, not resolved silently in favour of the first one entered.

### 259 · Changeover time between acts
Stage changeovers are 20 min, but the drummer of the third act needs 35 min for their kit. the act before overruns by 10 min.
**Wants:** the next start time to be the sum of the whole chain and not just the published times.

### 260 · Performers who miss their slot because of another festival
A band plays Stage B at 17:00, in the same afternoon it is due at another festival 40 km away at 14:30, 60 min set. the earlier gig is delayed.
**Wants:** the band's two obligations to be seen to rub together, though each organiser sees only their own.

### 261 · Set time announced then quietly changed
The schedule says a band plays 18:45. The organiser moves it to 18:15 but nobody tells the fans. 300 fans arrive at 18:40.
**Wants:** to see who has been told and who has not, and whether the change was received by the people who care.

### 262 · Volunteer shifts that hand over
Volunteer Ece works the gate 10:00–14:00 and Bora takes over at 14:00. Bora's train is delayed and the gate needs cover at all times.
**Wants:** Ece to see that her shift may extend and Bora to see when he really begins, and both to be able to agree.

### 263 · A volunteer who is over their limit
A volunteer signs up for shifts totalling 11 hours on Saturday, though the festival promises no more than 8. each shift is fine alone.
**Wants:** the sum to be noticed without anyone reading every shift.

### 264 · Setup window before, teardown after
Marquee crew has the field from Thursday 08:00 to Friday 12:00 for setup, gates open Friday 14:00. the electrician cannot come until Friday 09:00 and cabling takes 5 hours.
**Wants:** to see that sound checks at 12:00 and gates at 14:00 are now at risk and by what margin.

### 265 · Teardown against a venue lease
The hall is rented until 02:00 for a party ending at 00:30, with 90 min to clear. the party's final speech ends at 01:10.
**Wants:** to see that clearing will end at 02:40, which is 40 min beyond the lease.

### 266 · Noise limit that changes by hour
Amplified music is allowed at up to 85 dB until 22:00, then 60 dB (acoustic only). A band's set starts at 21:30 and ends at 23:00. the second half has to be unplugged.
**Wants:** the set to be shown as legal for half an hour and then requiring a different kind of show.

### 267 · Weather and a festival's condition
An open-air concert is to be cancelled if winds exceed 60 km/h at 16:00. At 15:00 the forecast says 55 km/h and rising. ticket holders ask whether to travel.
**Wants:** a live statement of the chances and the decision time, updating as the wind does.

### 268 · Cancellation with partial refund
The second day of a two-day festival is cancelled. The first day took place. ticket holders had one combined ticket.
**Wants:** the record to say that day one happened, day two did not, and each fact to stay true afterward.

### 269 · Tournament bracket with extra time
Eight-team knockout: four quarter-finals, two semi-finals and a final, with one pitch and 2 hours per match. quarter-final 2 goes to extra time and penalties, taking 40 min longer.
**Wants:** quarter-final 3 to move, then everything after it on that pitch, and nothing on the second pitch.

### 270 · Winners change who plays whom
The semi-final pairs are unknown until the quarter-finals finish. Team Kırmızı's players are also in another team at a later match. they win the quarter-final.
**Wants:** the semi-final slot to be drawn for that team only once they win, and until then to show as "to be decided".

### 271 · Match times unknown, order known
A youth football day: match 1, then 2, then 3 on a single pitch, with no fixed times because the referee decides length by weather. parents ask when to bring their child.
**Wants:** the order to be shared and a rough hour to appear as each match finishes.

### 272 · Referee walk-out
The referee for the 15:00 final is injured in the warm-up of the previous match. Only two other qualified referees are in town. one is refereeing the parallel match.
**Wants:** to see who could step in and what it would cost the other match.

### 273 · Correcting the result after the fact
A team wins on Sunday. On Wednesday, the league finds that a player was ineligible and awards the match to the opponent. the bracket, the next round and the prize giving were all based on the first result.
**Wants:** history to show what was played and what was later decided, without erasing either.

### 274 · Live prediction of a match end
A basketball game is scheduled for 2 hours; with four minutes left and a 12-point gap, the model predicts the end in about 9 min. The TV slot is booked to 21:00. a run of fouls stops the clock.
**Wants:** the predicted end to move with the game, with the TV slot's margin visible.

### 275 · Graduation with a long alphabet
420 graduates, 20 seconds each to cross the stage, opening speech 15 min, closing 10 min. the dean announces that two families are late and the reading is paused.
**Wants:** the total to be known as a range, and the finish time to update as names are read.

### 276 · Award ceremony with a category dropped
An awards evening has 12 categories, each about 6 min. on the night, one nominee is disqualified and the category is cut, but the pre-printed running order names it.
**Wants:** the remaining categories to close up and the missing one recorded as removed.

### 277 · Winner is not there
The best supporting actor is told to be seated by 21:15 and is stuck on a plane. The category is announced at 21:20. the host has to fill.
**Wants:** the presenter, the stage manager and the runner to see the same change, and the acceptance speech to be left as unknown.

### 278 · Graduation held in the rain hall
An outdoor graduation on a Saturday with 1,800 guests is moved indoors where the hall seats 1,000. each graduate gets 2 tickets rather than 5.
**Wants:** guest counts to be recomputed for each family and each family to be told only their own number.

### 279 · Funeral within a day
A death happens at 06:00 on a Tuesday. Religious custom asks for burial the same day or as soon as possible, funeral prayer after midday prayer, at 13:10. Washing takes 2 h, transport to the cemetery 45 min, and the imam is available from 12:30. relatives from Ankara can arrive at 15:00 at the earliest.
**Wants:** to see what is possible by the deadline and what conflicts, and the choice to be theirs.

### 280 · Funeral tied to prayer times
The funeral prayer is not to be held at sunset, and sunset today is 17:42. The paperwork office closes at 16:00. the death certificate is issued at 15:40.
**Wants:** the cemetery slot to be placed within the window between certificate and sunset, with the time left shown.

### 281 · Funeral on a Friday
Death on Thursday night. Friday prayer is at 13:20 and the community prefers the funeral prayer right after it. the cemetery can only accept burials at 14:00 and 15:30.
**Wants:** to see that after-Friday-prayer only fits one of the two, and that the family has to decide.

### 282 · Autopsy delays the burial
A coroner's investigation holds the body for 36 hours. The family had planned the funeral for the next day and had booked 60 mourners' travel. the release time is unknown.
**Wants:** every booking to show as waiting on the release, with what can stay firm and what cannot.

### 283 · Mourners who cannot make it in time
Sister in Sydney can fly to arrive after 41 hours. The funeral is planned within 24. the family decides to hold a memorial for those who could not come, a week later.
**Wants:** two events tied to the same person's death, one done and one in the future, without one being mistaken for the other.

### 284 · Wedding at a religious hour
A couple wants the ceremony in the ninth hour after sunrise, as their tradition says. Sunrise is at 05:47. the date is moved by three weeks and sunrise shifts by 40 min.
**Wants:** the ceremony time to move with the sun as the date moves.

### 285 · Fasting month affecting a party
An engagement party is planned in the fasting month. Guests break their fast at 19:52. the venue is booked from 18:00 to 23:00 and food is due at 18:30.
**Wants:** the food to be served at sunset, not at 18:30, and the date's sunset to control it.

### 286 · Two ceremonies on the same day for one couple
A civil ceremony at 11:00 in the town hall and a religious blessing at 15:00 in a mosque 30 km away, with 60 guests at both and 30 at only one. the civil ceremony ends 50 min late.
**Wants:** to see who is affected among those going to both, and the blessing not to be pushed unless someone who cannot be replaced is in both.

### 287 · Wedding planning inside another family's wedding
Two cousins' weddings are two weeks apart, and both have the same 35 relatives, the same aunt as cook, and the same photographer's assistant. one wedding moves a week later.
**Wants:** to see the new overlap for the aunt and the assistant, without either family seeing the other's plan.

### 288 · Livestream schedule that differs from the room
The stream starts 5 min before the ceremony with a title card, and cuts at the end of the reception speeches. speeches finish at 21:35 instead of 21:15.
**Wants:** the streaming volunteer and the far-away viewers to see the true end, and the stream's own plan to follow.

### 289 · Plan versus what actually happened
The run sheet for a wedding said cake cutting at 21:00. It happened at 21:40. Six months later the couple wants a timeline of the day for an album. they have the plan, and only some people's phone photos have a time.
**Wants:** the day as it was, with the planned time alongside.

### 290 · Correcting the past
The photographer says the ceremony started at 16:20, but the venue log says 16:35 and the officiant recalls 16:30. the insurance claim about a delayed guest needs one agreed time.
**Wants:** the three claims kept and marked by whose they are, with one accepted as the working answer.

### 291 · Guests who might come
A charity gala has 200 confirmed, 60 "maybe" and 40 on a waiting list. The caterer wants a number, the venue fire limit is 260. the numbers change daily.
**Wants:** the range 200 to 260 and the current best guess, with the fire limit as a ceiling.

### 292 · Wedding cancelled after a death in the family
Four days before the wedding, the groom's father dies. the funeral is on the day before the wedding, the wedding has 130 guests, and the couple has paid 70% of vendors.
**Wants:** to see the day-by-day consequences of postponing, and each vendor's own terms, without seeing the family's private situation shared beyond those who need it.

### 293 · Seating the hall's capacity across two sittings
A banquet for 300 in a hall that seats 180. Two sittings, 18:30 and 20:30, each with 90 min. the first sitting takes 110 min.
**Wants:** the second group waiting in the lobby to be told the new time, and the hall's cleaning time between sittings to be respected.

## Work, projects and operations

### 294 · A review that runs long holds up the merge and the release behind it
Priya opens a pull request on Monday and expects Tomas to review it by Tuesday noon. The merge is meant to happen Tuesday afternoon, and the release is cut Wednesday 09:00. Tomas is pulled into a customer call and finishes the review Thursday 15:00.
**Wants:** To see that the merge slid to Thursday and the release moved with it, while everything unrelated to that pull request stayed where it was.

### 295 · Two developers' work does not push each other
Ana's payment-page work and Ben's search-page work sit in the same sprint but share no dependency. Ana's work overruns by three days.
**Wants:** Ben's dates to stay exactly as planned, and no warning to appear on his side.

### 296 · A code freeze that swallows a planned deploy
The company freezes all deploys from 20 December to 3 January. Kim's database migration was planned for 22 December, 10:00. Nothing else about the migration has changed.
**Wants:** To be told the migration cannot happen on 22 December and to see the first date on which it can, together with everything that waits on it.

### 297 · An incident tears a hole in the sprint
Sprint 41 runs ten working days with five engineers and about 50 points planned. On day four a production outage takes three of them fully for two days and two of them half-time for a further day.
**Wants:** To see how much sprint capacity was really lost, which committed items are now at risk, and which are still safe.

### 298 · Planned versus actual after an incident
The plan said Ravi would finish the export feature on Friday. He actually spent Tuesday to Thursday on an outage and finished the feature the following Wednesday.
**Wants:** Both the original plan and what really happened to stay visible side by side, so the team can see where the time went.

### 299 · Finish-to-start with a lag for concrete curing
The crew pours the foundation slab on Tuesday. The next trade may only start 7 days after the pour finishes, and nothing may load the slab before then. The pour is delayed by two days by rain.
**Wants:** The framing start to move by exactly the same two days, with the seven-day wait still intact.

### 300 · Start-to-start overlap that moves only when the leader starts late
Electricians may begin rough-in two days after the plumbers begin, not after they finish. The plumbers are ready Monday but do not start until Wednesday because materials arrived late.
**Wants:** The electricians' start to move to Friday. If the plumbers later take longer to finish, the electricians' start should not change.

### 301 · A start-to-start link and a finish constraint at the same time
Painting may start two days after drywall starts, but may not finish before drywall finishes. Drywall takes 10 days and painting is planned for 6.
**Wants:** To see that painting cannot end before drywall does, and to see the real duration painting must now span.

### 302 · Float the team can spend
The longest chain of tasks finishes on 30 June. Marketing's landing page has 9 working days of slack before it would hold up the launch. The designer takes 6 days extra.
**Wants:** To see the launch date unchanged and 3 days of slack left, not a false alarm.

### 303 · Float that quietly runs out
A task shows 5 days of slack. Over three weeks, four small slips of 1 to 2 days pile up on it.
**Wants:** To be shown, at the moment the slack hits zero, that this task has now become part of the chain that decides the end date.

### 304 · The longest chain changes when something else shrinks
Two chains of work lead to the same milestone: A takes 40 days, B takes 38. The A team finds a shortcut and finishes in 30 days.
**Wants:** To see that the milestone is now driven by B, and that B has become the one to watch.

### 305 · Three-point estimate shown as it is
A task carries optimistic 4 days, likely 6 days, pessimistic 15 days. The whole project has 60 such tasks in sequence.
**Wants:** To see a finish as a spread of possible dates, not one date, and to see which tasks contribute most to the spread.

### 306 · Estimates that were only guesses versus estimates from history
One task says "about 10 days" from someone's gut. Another says "10 days" because the last six identical tasks took 9, 10, 10, 11, 10 and 12.
**Wants:** To tell the two apart and to see that the second carries far more trust.

### 307 · A range that never narrows
The vendor says the hardware ships in "10 to 20 days" and never says more, even after 15 days have passed with nothing shipped.
**Wants:** To see that the remaining range has shrunk to the days that are still possible, and not to keep showing an arrival date that has already passed.

### 308 · Prediction that keeps updating from live data
A data migration copies 4 million rows. After the first hour, 300,000 rows are done. After the second hour, 500,000. The speed is falling as the tables get busier.
**Wants:** The predicted finish to keep moving with the real speed, and downstream tasks to shift along as it does.

### 309 · A milestone is a point, not work
The contract says "beta delivered" on 15 March. It takes no time itself, but three customers' payments and two teams' plans hang from it.
**Wants:** To see it as a moment that has things depending on it, with no duration, and to see all of them move if the moment moves.

### 310 · A milestone moved by two parties who disagree
The client says acceptance testing ends 12 May. The contractor believes it ends 19 May, because a public holiday and a client sign-off delay in their own plan were not included by the client.
**Wants:** To see both dates, who holds which, and exactly what accounts for the difference.

### 311 · Resource leveling pushes work back
Dana is booked on three tasks at the same time in the same week, 40 hours of work in 3 overlapping tasks worth 100 hours. Nobody is added to the team.
**Wants:** To see which tasks would have to wait for Dana and by how much, and what that does to the end date.

### 312 · Leveling shifts the longest chain
Removing an overload on the only certified welder delays the welding by two weeks. Before that, welding had six weeks of slack.
**Wants:** To see that the welder, not the original chain, now decides the end date.

### 313 · Splitting a task around a gap
A four-day analysis task starts Monday, but the analyst is pulled away Tuesday and Wednesday for a mandatory training. She returns Thursday.
**Wants:** To see the work resume Thursday with two days remaining, finishing Friday, not restarted and not counted as finished Wednesday.

### 314 · Splitting that must not happen
A concrete pour must run in one go. A crew break, a truck shortage or rain in the middle would ruin the slab.
**Wants:** To be told this task cannot be paused and resumed, so the whole task must find a single long enough window.

### 315 · Trades that cannot overlap
The plasterers and the floor sanders cannot work in the same room on the same day. Room 3 needs both this week, and each needs three days.
**Wants:** To see the two trades taking turns in room 3, not a schedule that puts them there together.

### 316 · One resource sitting in two projects
A crane is shared between the Harbour Tower job and the Riverside Bridge job. Riverside slips by a week and needs the crane during Harbour Tower's booked days.
**Wants:** To see that Harbour Tower is now affected, and by how much, even though the two projects are otherwise unrelated.

### 317 · Rain days and the shape of what is affected
Site work stops on days when the wind is above 40 km/h or there is more than 5 mm of rain. Tuesday and Wednesday of a week are rain days. Interior work goes on, exterior brickwork does not.
**Wants:** Only the exterior work to move, and the interior work to stay on schedule.

### 318 · Contract gives 8 weather days and the ninth is real
The building contract allows 8 weather days per year without penalty. On the ninth weather day, the roofing crew is idle and the deadline is at risk.
**Wants:** To see that this ninth day is treated differently from the first eight, in who carries the cost and in the deadline.

### 319 · Inspection slot taken by someone else
The inspector's office has a wait of 5 working days. The plumber books a rough-in inspection for the 14th. On the 12th the office cancels because the inspector is ill and the next slot is on the 22nd.
**Wants:** To see all work that had to wait for this inspection move to the 22nd or later, while the work that did not depend on it kept going.

### 320 · Failed inspection returns work backwards
The framing inspection on Friday fails: two joists are wrong. The drywall crew was booked to start Monday.
**Wants:** To see the fix as new work that must come before the inspection is repeated, and drywall pushed behind both.

### 321 · Correcting the past
A supervisor discovers on the 20th that the concrete on the 3rd was actually poured on the 2nd, so it has cured one extra day. Other work had already been planned based on the wrong date.
**Wants:** To fix the recorded pour date and see anything that depended on it re-evaluated, with the change of record visible to everyone who relied on it.

### 322 · A delay that is two parties' fault at once
The steel arrives 10 days late because of a supplier fault. In the same 10 days the owner had also not yet approved the drawings. Both delays overlap in 6 of those days.
**Wants:** To see the 10 days broken down into what belongs to the supplier, what belongs to the owner and what overlaps.

### 323 · A delay that costs time but not money
A contractor is granted 12 extra days because of an unusually cold winter, but the owner refuses to pay for the idle equipment.
**Wants:** To see the deadline move by 12 days while the cost stays where it was.

### 324 · Impossible constraint
A permit takes at least 20 working days to issue, must be in hand before work starts, and work must start in 12 working days to meet a contractual milestone.
**Wants:** To be told plainly the plan cannot be met, by how many days, and what could be given up to make it work.

### 325 · Two tasks that each wait for the other
Team A cannot finish its interface spec until Team B finishes its data model. Team B cannot finish its data model until A finishes its interface spec.
**Wants:** To be told this is a standoff, which two things are involved, and not to see either given a date.

### 326 · Deadline inherited from a fixed date
The trade fair opens on 3 October. The booth must be built, shipped (10 days, of which 4 are customs) and unpacked (1 day) before that.
**Wants:** To work backwards and see the latest date the build can be finished, and how much slack, if any, remains.

### 327 · A key person drops out
Mara is the only person who can sign off electrical work on a hospital site. She breaks her leg on the 5th and will be out for 6 weeks. 14 tasks name her.
**Wants:** To see every task that waits on her, which of them someone else may take over, and the new end date if nobody can.

### 328 · A key person drops out and the backup has less time
Mara's backup Joe can do her tasks but only 2 days a week, because the rest of his week belongs to another site.
**Wants:** To see Mara's work stretched across Joe's available days, and the other site's dates checked against it.

### 329 · Turnaround rule between shoot days
Actor Lena wraps at 23:30 on Wednesday. Her contract requires 12 hours of rest before her next call. Thursday's call time is 09:00.
**Wants:** To be told the call breaks the rest rule, the earliest legal call time (11:30), and the scenes affected by moving it.

### 330 · Weekend turnaround
Friday's shoot runs to 02:00 Saturday. The crew contract requires 54 hours' rest over the weekend. Monday's call is 06:00.
**Wants:** To be told the earliest legal Monday call (08:00) and the effect on every scene planned for that morning.

### 331 · Actor available only for four days in a window
A supporting actor is free 3 to 6 June only. He appears in scenes at two locations, each needing a permit, and in one night scene.
**Wants:** To see all his scenes fit inside those four days, or be told which cannot, and why.

### 332 · Location permit with hours and limits
The city permits filming in the market square from 06:00 to 14:00 on 14 and 15 July only, with no more than 25 crew. A rain delay on the 14th pushes the scene to the 16th.
**Wants:** To be told that the 16th is not allowed for this location and to see what other options exist for the scene.

### 333 · Rain cover
A scene outside is planned for Tuesday. An indoor scene at a set that is available all week can replace it if it rains. The forecast says 70 percent rain.
**Wants:** To see Tuesday's plan with the alternative attached, and the alternative used automatically if the rain actually comes.

### 334 · Day out of days shrinks when a scene is dropped
A lead actor is on contract for 14 shooting days, paid per day held. The director cuts three scenes that only he was in.
**Wants:** To see the days he is now not needed, so they can be released to others or refunded.

### 335 · Child performer limits
A 9-year-old actor may work at most 5 hours on set per day, with mandatory school time, and never after 19:00. A scene needs him for a sequence of 7 shots.
**Wants:** To see whether the scene fits in one day or must be spread over two, and what it does to the other actors' schedules.

### 336 · Magic hour
The final scene needs the sun low over the sea, which is only right for about 40 minutes, starting 19:12 on the planned day. The previous scene runs 25 minutes over.
**Wants:** To be told the shot has fallen outside the light window and the next date the window is available.

### 337 · A shoot day lost, the schedule reshuffled
A storm cancels the whole day on the 9th. That day had three scenes at two locations and involved 11 actors, four of whom have hard stops on the 15th.
**Wants:** To see which of the four actors' scenes are now at risk and which scenes can move without affecting them.

### 338 · Restaurant kitchen prep before service
A restaurant opens for dinner at 18:00. Stock takes 4 hours, the sauce takes 6 hours to reduce (it may be started and left), and the fish arrives at 14:00 and must be cut within 2 hours of arriving.
**Wants:** To see the latest start time of each prep item and which ones can run at the same time on two cooks.

### 339 · Supplier delay hits service
The fish delivery arrives at 16:30 instead of 14:00. The cutting deadline is now 18:30, and the first orders are at 18:15.
**Wants:** To see that dishes with fish are at risk for the first minutes of service and that other dishes are untouched.

### 340 · Oven that can only do one thing at a time
The kitchen has one oven. The bread needs 45 minutes at 220 degrees. The roast needs 90 minutes at 160 degrees. Both are needed by 17:30.
**Wants:** To be told the two cannot share the oven at those temperatures, and the order that fits.

### 341 · Production line changeover
A bottling line fills apple juice on Monday and orange juice from Tuesday. Switching flavours requires a 3-hour clean. A rush order for apple juice arrives Tuesday afternoon.
**Wants:** To see the cost in time of squeezing the rush order in, including the extra changeover it forces.

### 342 · Machine maintenance stops a line
A press is due for maintenance every 500 running hours. It reaches 490 hours on Thursday. A big order needs 40 hours on it before Friday.
**Wants:** To be told the press will need maintenance in the middle of the order and how that changes the delivery date.

### 343 · Shift rota and rest law
Sam worked a late shift ending 23:00 and is rostered for an early shift starting 06:00 the next morning. The law requires 11 hours between shifts.
**Wants:** To be told this pair of shifts is not allowed, by how much, and whose swap would fix it.

### 344 · Overtime cap reached mid-week
Nurses may work at most 48 hours per week averaged over 17 weeks. Ola has worked 52 hours in each of the last 4 weeks. A colleague calls in sick for Saturday.
**Wants:** To be told Ola cannot be offered the extra shift without breaking the average, and who can.

### 345 · Rotating on-call handoff
Five engineers rotate one week each, handing over Monday 10:00. The engineer whose week ends is in the middle of a live incident at 10:00.
**Wants:** To see that the incident stays with the original engineer until it is resolved or explicitly handed over, without the week structure being rewritten.

### 346 · On-call swap
Nia wants to swap her Tuesday-to-Thursday on-call with Omar's Friday-to-Sunday. Omar has a flight on Saturday.
**Wants:** To be told the swap leaves Saturday uncovered and who else could take it.

### 347 · On-call load steals sprint capacity
An engineer on call spends about 40 percent of the week on pages. The sprint plan gave her 8 points of feature work.
**Wants:** To see her real capacity for the sprint, and her feature work at risk when pages are frequent.

### 348 · Follow-the-sun on-call across three offices
Support is covered by Sydney (00:00-08:00 UTC), Berlin (08:00-16:00 UTC) and Austin (16:00-24:00 UTC). Berlin's clocks change in October, Sydney's and Austin's on different dates.
**Wants:** To see on each week who is on call when, so that there is never a gap nor an overlap of hours in the coverage.

### 349 · Leaving no one on call
On the 26th, three of the four people on the rota are on holiday. The fourth is the one whose on-call turn it already is.
**Wants:** To be told there is no one for the following week's cover, and to see who is out and when they return.

### 350 · Recurring event with an exception that later cancels
The monthly release happens on the first Tuesday. The March release moved to Thursday because of an incident. Later the release manager cancels the whole March release.
**Wants:** To see March as cancelled and the April release unaffected.

### 351 · Business days from a start date
A contract says the supplier must respond within 30 business days of receiving a notice. The notice arrives on Friday 6 December. There are public holidays on 25 and 26 December and 1 January.
**Wants:** To see the exact last day for a response, and how it changes if the notice is judged to have arrived on Monday instead.

### 352 · Deadline lands on a holiday
A court filing is due 21 days after the judgment on 2 June. Day 21 falls on a Saturday.
**Wants:** To see the deadline as the next court business day, and to see that the rule and not a person moved it.

### 353 · Different courts, different holidays
A filing is due in a court in Ohio and another in Ontario, each 14 days after the same event. A holiday, Family Day, falls on one of the last days in Ontario only.
**Wants:** To see two different last days from the same trigger.

### 354 · Counting days excludes the trigger day
A notice period of 30 days starts "from receipt". The notice is delivered at 23:50 on the 31st, but the recipient opens it at 08:00 on the 1st.
**Wants:** To see which moment counts as receipt, under which rule, and the resulting last day of the 30.

### 355 · Statute of limitations for a claim
A claim can be brought within 6 years of the breach. The breach occurred on 29 February 2020. The company wants to know the last day.
**Wants:** To see the last day computed under the applicable rule, with the reason why that day and not the day before or after.

### 356 · Limitation period paused
A limitation period of 3 years runs from 1 May 2023, but the parties agree a standstill from 1 February 2025 to 30 June 2025 while they negotiate.
**Wants:** To see the new last day with the paused months not counted, and the earlier last day still visible.

### 357 · Contract renewal window
A contract auto-renews for a year on 1 September unless notice is given 90 days before, and only in writing to a stated address. The customer sends a notice on 3 June.
**Wants:** To be told whether the notice was in time, and the last day it could have been sent.

### 358 · Notice period differs by employee
A notice period is one month for the first two years and three months after five years, depending on employment start. Anders started 4 April 2019 and resigns on 12 March 2025.
**Wants:** To see the notice length that applies to him and his last working day.

### 359 · Notice period paused by sick leave
An employee is on a 3-month notice period and falls ill for 10 days. Local law says such illness does not extend a notice period in one country but does in another.
**Wants:** The end date to follow the law of the country that governs this contract.

### 360 · SLA clock that only runs in business hours
A ticket has a 4-business-hour response SLA, business hours 09:00-17:00 Monday to Friday. A customer files it at 15:30 on Friday.
**Wants:** To see the response due Monday 11:30, and to see how much of the time was used.

### 361 · SLA clock that stops while waiting on the customer
The SLA is 8 business hours for resolution. After 3 hours the agent asks the customer a question. The customer answers 2 days later.
**Wants:** To see the paused time not counted and the remaining 5 hours resume when the answer comes.

### 362 · SLA across a customer in another time zone
A customer in Auckland has a 24x5 support SLA "Monday to Friday". The provider's week starts at Monday 00:00 in Frankfurt. A ticket arrives Friday 20:00 in Auckland, which is Friday morning in Frankfurt.
**Wants:** To see whether the ticket is inside the SLA week, and by whose clock, and for both sides to be able to see the same answer.

### 363 · Fiscal quarter different from calendar quarter
A company's fiscal year starts on 1 July, and its quarters end on 30 September, 31 December, 31 March and 30 June. A report is "due 15 days after the end of Q2".
**Wants:** To get 15 January and not 15 July, and to see which quarter the report covers.

### 364 · 4-4-5 retail fiscal calendar
A retailer divides the year into quarters of 4, 4 and 5 weeks. Its fiscal year ends on the Saturday nearest 31 January, so some years have 53 weeks.
**Wants:** To see periods lined up to the retailer's own weeks, and the extra week of the long year flagged.

### 365 · Payroll cutoff
Payroll for the month closes on the 20th, and payment is made on the last business day. The 20th is a Sunday this month and the last day is on a bank holiday weekend.
**Wants:** To see the cutoff and the payment day that result, and which employees' late timesheets missed the cutoff.

### 366 · A timesheet entry corrected after payroll ran
Ines' hours for the 12th are corrected from 8 to 10 on the 24th, after the payroll of the 20th was closed.
**Wants:** The correction to show up as a change to a closed period, paid in the next run, without the closed period's records being silently rewritten.

### 367 · Public holidays for a distributed team
A team has members in Munich, Bangalore and Toronto. Ascension Day is on Thursday, which is a holiday only in Munich. Diwali is a holiday only in Bangalore the following Monday.
**Wants:** To see each person's availability per day, and to see the days when the whole team is present.

### 368 · Bridge day and regional holidays
In Bavaria a city-specific holiday (Mariä Himmelfahrt) is on Friday 15 August, but not in Berlin. The team has two people in each city.
**Wants:** To see the same date working for some members and not for others, without needing to know which the deployment plan should follow.

### 369 · Cross-team dependency that one team keeps private
Team Orion depends on the auth team's login rewrite. Auth will not reveal its internal task list, staffing or sick leave, only that the rewrite will "probably land in week 12, and definitely before week 15".
**Wants:** Orion to be able to plan from those two statements alone and to be told when they change, without seeing anything else about the auth team.

### 370 · Vendor delay pushes a launch, and the vendor's other clients must not be revealed
A vendor's manufacturing delay of 3 weeks pushes Halden Ltd's product launch. The vendor also builds for Halden's competitor, which has the same delay.
**Wants:** Halden to learn only that its own delivery slipped, and not who else is affected or why they are.

### 371 · Two companies measuring the same deadline in different clocks
Party A's contract clock is in UTC, Party B's in Tokyo time. The deliverable is due "by end of day 30 April". A delivers at 23:30 UTC on 30 April, which is 08:30 on 1 May in Tokyo.
**Wants:** To see whether the delivery was on time under the clock the contract names, and for both parties to see the same verdict.

### 372 · A subcontractor's plan and the general contractor's plan disagree
The general contractor's plan says the electricians start on 3 March. The electrician's own plan says 10 March, and it is not willing to share the reason.
**Wants:** To see both dates and that they disagree, and to be told the general contractor's downstream tasks depend on the earlier date.

### 373 · A task that belongs to two projects
Arif's security audit is part of a product release and also part of the company's yearly compliance programme. The release slips two weeks, while the compliance programme has a fixed external date.
**Wants:** The audit to be seen in both places, the release slip not to move the compliance date, and a warning if the audit can no longer meet it.

### 374 · Dependency cancelled when its condition fails
The mobile app's "offline mode" task exists only if the customer signs the premium contract by 15 May. The contract is not signed.
**Wants:** The offline mode task and everything only it required to be marked as cancelled, and the remaining plan to close up around them.

### 375 · A conditional task that may or may not run
If the load test on the 10th shows more than 500 ms, a two-week performance sprint is added before launch. Otherwise launch stays as planned.
**Wants:** To see the launch date as two possible dates, until the load test result decides between them.

### 376 · Multi-decade project
A nuclear plant decommissioning is planned over 45 years, with 5-yearly reviews, a legal handover of a licence every 10 years, and tasks planned by people who will have retired long before they happen.
**Wants:** To have plans that far ahead stay legible and connectable to their reasons, and to be able to change a distant step without breaking the near ones.

### 377 · Multi-decade rule change
A 30-year infrastructure lease says "annual inspection within 60 days of 1 January". In year 12 the country changes its public holiday rules and its definition of a working day.
**Wants:** To see which years' deadlines follow the old rule and which the new one, with earlier years unchanged.

### 378 · Estimates drifting over a long project
A three-year software programme has a history: every yearly estimate for the final delivery has been 5 to 8 months later than the previous one.
**Wants:** To see that pattern of drift and its effect on the promised date, not only the latest estimate.

### 379 · Change order after work started
Half of the tiling in a hotel has been laid when the owner changes the tile type for the rest. The new tiles arrive in 6 weeks.
**Wants:** To see the work done kept as done, the remaining work re-planned, and the cost of the change linked to the change decision.

### 380 · Something that finished earlier than planned
The plumber finishes rough-in in 3 days instead of 5, on Monday afternoon. The electrician is not booked until Wednesday.
**Wants:** To see whether earlier finish creates gain for anyone, and to see the electrician's original booking respected unless the electrician agrees to come sooner.

### 381 · Lag in working days versus calendar days
A paint coat needs 24 hours before the next coat. On Friday at 16:00 the painter finishes the first coat. Nobody works on weekends.
**Wants:** To see the second coat as possible from Saturday 16:00 by the clock, but only start on Monday because that is when the crew works, and for the two facts not to be confused.

### 382 · Work that continues through nights and weekends on some tasks only
Curing goes on around the clock; the crew's work runs 07:00-15:00 on weekdays. A 5-day curing period starts Thursday 15:00.
**Wants:** The curing end to be Tuesday 15:00 (calendar days), while crew tasks after it count only their own working hours.

### 383 · Two calendars for one task
A task needs a German engineer (German holidays) and an Indian engineer (Indian holidays) working together for 6 days.
**Wants:** To see only the days both are available count, and the task finish date to reflect that.

### 384 · Vacation approved after the plan was published
Kofi's two-week leave, from the 20th, is approved on the 12th, after the sprint plan was already sent to the client. His tasks make up 30 percent of the sprint.
**Wants:** To see what changes in the plan and be able to tell the client the earlier promise is affected, without the client seeing why Kofi is away.

### 385 · Team member's absence reason stays private
A designer is out for three weeks for a medical reason. The other teams that rely on her work need to know her deliverable moves.
**Wants:** Others to see that she is unavailable and for how long, but never why.

### 386 · Earliest and latest bounds on one milestone
A permit approval is expected "no earlier than 1 October and no later than 15 December", and the site work can start 5 days after. A concrete supplier needs 3 weeks' notice for the pour.
**Wants:** To see the range of possible pour dates and the last day by which the supplier must be told for each end of the range.

### 387 · Rolling back a plan change
A manager moved 20 tasks by four weeks to explore an option, then decides against it two days later. Meanwhile three people have already reacted by rearranging their own work.
**Wants:** To restore the earlier plan for those 20 tasks and see which of the three people's reactions now need to be reconsidered.

### 388 · Milestone payment tied to a date that moves
A contractor is paid 20 percent on completion of the roof, and the loan interest is calculated per day until the building is finished. The roof completion date moves by 18 days.
**Wants:** To see what the 18 days do to the payment date, and to the interest, with one number changed in one place.

### 389 · Sprint that spans a public holiday in one country
A two-week sprint starts Monday. The Lisbon half of the team has a public holiday on Wednesday, the Warsaw half has none. Both halves' stories are equally sized.
**Wants:** The sprint's capacity per person and per site, with the Lisbon half's lower capacity showing, but a single sprint end for everyone.

### 390 · Hotfix that jumps the queue
A senior engineer has 3 tasks in a strict sequence. A critical security fix takes 6 hours and must be done today. It has no relation to the three tasks.
**Wants:** To see the three tasks shifted by 6 hours, with no reordering among them, and the fix marked as an interruption.

### 391 · Planned merge freeze around a big release, with an exception
The team freezes merges from 09:00 on release day to noon. A one-line fix for an outage is needed at 10:30.
**Wants:** To see an allowed exception to the freeze, who approved it, and to keep the rule itself in force for everything else.

## Coordination between people and servers

### 392 · One key person narrows the window after everyone agreed
Ayşe organises a design review Thursday 14:00–15:00 with five people who all said yes. On Wednesday evening the director, Mert, says he can only do 10:00–12:00 that day. Two of the others have a dentist appointment 10:00–11:00 and a client call 11:30–12:30 respectively, both movable only with a reason.
**Wants:** A new time that suits Mert and everyone else, with each person asked only about what they would have to give up, and everyone told the final outcome.

### 393 · The key person's condition cannot be met by anyone
Ayşe needs Mert, and Mert says "Thursday 10:00–12:00 only". The other four are all in a workshop they cannot leave that whole morning; Mert is away Friday.
**Wants:** To be told plainly that no time works and why in general terms (not whose calendar is blocking), and to be offered which condition is the cheapest to relax.

### 394 · Required, optional and quorum in one meeting
A tenants' association meeting has 9 members. Quorum is 5, the chair and treasurer are required, and 4 others are optional. At the best slot the chair, treasurer and 3 members are free; 2 more could be free if they move something.
**Wants:** The organiser to see that quorum is reachable only by asking two people to move something, and to choose whether to ask them.

### 395 · Quorum lost after acceptance
Twelve board members accepted a vote for Monday 10:00, quorum 7. By Sunday night 4 have withdrawn with illness or travel, leaving 8; at 09:30 Monday a fifth is stuck in traffic.
**Wants:** The organiser told the moment the meeting can no longer legally proceed, and the remaining people told before they travel.

### 396 · Stranger asks to join
Deniz sees a public community garden meeting on a poster and asks to join. The organiser's rule is "residents of the street only, max 20". Deniz lives one street over. There are 19 confirmed.
**Wants:** An answer according to the organiser's rule, with Deniz not learning who else is attending.

### 397 · Join request that needs the organiser's approval while the organiser is offline
Ela requests to join Saturday's neighbourhood watch meeting on Friday at 22:00. The organiser's server accepts joins only after asking the organiser, who is on a night flight until Saturday 09:00; the meeting is at 10:00.
**Wants:** Ela to get a clear yes or no in time, or at least know it is still undecided, rather than silence.

### 398 · Invitee adds a plus-one
Tolga accepted a dinner for 8 at a restaurant booked by Selin, then asks to bring his partner. The restaurant's table holds 8 exactly.
**Wants:** Selin asked only when her answer matters, and the restaurant's limit respected without Tolga seeing who else is coming.

### 399 · Late by 30 minutes, the next thing is also someone else's
Emre texts that he will be 30 minutes late to a 10:00 meeting with Gül. Gül has a call at 11:00 that another person, Hakan, organised, and the 10:00 meeting was planned to end at 10:50.
**Wants:** Gül's side to decide whether to wait, shorten or move, and to warn Hakan only if the 11:00 call is actually at risk.

### 400 · Two people push each other
Ali and Berk have back-to-back meetings with each other: Ali's review of Berk's work at 10:00–11:00 and Berk's review of Ali's work at 11:00–12:00. Ali asks to start 20 minutes late; Berk, at the same moment, asks to start the second one 30 minutes early because of a lunch appointment.
**Wants:** The two requests noticed as conflicting and settled to a single arrangement, not two contradictory ones applied.

### 401 · Push that bumps a meeting into a colleague's untouchable slot
A stand-up at 09:00 runs long by 40 minutes on Tuesday. The next thing for one attendee, Selma, is a fixed court hearing at 09:45 that cannot move.
**Wants:** Selma to leave on time and the meeting to carry on or be cut for her, with the organiser told why she left.

### 402 · Answering "are you free?" reveals too much by repetition
A recruiter's server asks Nur's server "are you free 09:00–10:00?" then "09:00–09:30?", then "09:30–10:00?", then every half hour for a month.
**Wants:** Nur not to end up with her whole calendar mapped by someone who only ever asked narrow questions.

### 403 · Busy versus details for different people
Nur's manager can see "busy: therapy" on Wednesdays 16:00, her colleagues can see "busy", and outsiders can see nothing but yes or no to a specific slot.
**Wants:** Each person to see exactly the level of detail Nur set for them, and nobody to be able to deduce a higher level from a lower one.

### 404 · Denying a slot reveals a reason
Kerem asks Nur whether 12:00–13:00 Friday is okay for a meeting; Nur's server says "no, that's Friday prayer". Kerem is a client who did not know her religion.
**Wants:** A no that does not disclose why.

### 405 · Free answer leaks that you are not where you said
Selin told her team she works from home Monday, but her server answers a meeting request for 14:00 in a city 300 km away with "free, but I will need 2 hours' notice to arrive".
**Wants:** Selin's location and travel never to appear in an answer to someone who was not meant to know.

### 406 · A person who does not want to reveal where they are
Omar has a restraining order and is in a shelter in another city. His employer's system wants to schedule an on-site meeting and asks his server whether he can be at the office by 09:00.
**Wants:** Omar's server to give an answer that reveals nothing about his current whereabouts or the reason for a no.

### 407 · Miscalibrated privacy: a "private" meeting shows up in a shared view
Aylin marked a 15:00 IVF appointment "private", but the family calendar she shares with her mother-in-law shows the free/busy block, and her mother-in-law's server asks if she can take Aylin's slot for a family lunch.
**Wants:** The block not to invite explanations or requests that make the private meeting guessable.

### 408 · Probing a large organisation to find who is in a secret merger
An outsider asks the servers of 30 executives at Company A whether each is free 10:00–18:00 on three consecutive days. All say "busy".
**Wants:** The pattern of "everyone senior is busy at once" not to be readable by an outsider, while real meeting requests still get honest answers.

### 409 · An assistant books for an executive
Pınar, assistant to CEO Levent, is asked by an investor for "any hour next Tuesday". Levent's schedule has a family thing at 12:00 he does not want the office to know about. Pınar does see everything.
**Wants:** Pınar to book Levent's time properly while some entries stay hidden from her but are still respected.

### 410 · Assistant books something the executive would refuse
Pınar accepts a 45-minute call for Levent with a vendor Levent ignores. He notices at 07:00 the same morning.
**Wants:** Levent to be able to undo it and the vendor to be told, without Pınar's standing to book for him being silently cancelled.

### 411 · A parent books for a child
Fatma books a doctor's appointment for her 14-year-old Can at 15:00 Wednesday. Can has school sports until 16:30 and told his own server so.
**Wants:** Fatma to see that Can has a school commitment without seeing all his private plans, and to choose to book anyway or not.

### 412 · A child's own account and a parent's view disagree
Can (14) has arranged a study session with a friend at 18:00 on his own server; his parents' family calendar shows him as free and they book a dinner at 18:30.
**Wants:** The dinner to be scheduled with awareness of Can's plans, Can to be asked before being overridden, and his friend not exposed.

### 413 · A carer books for an elderly person
Sevim visits her grandmother Nine (86) on Tuesdays 10:00. The carer, Hakan, tries to book a physiotherapist for Nine at 10:30 Tuesday, with Nine's consent on record but not Sevim's.
**Wants:** Sevim to be told her visit will be interrupted, and Nine to keep the final say.

### 414 · Delegate's authority ends mid-booking
Pınar started arranging a 5-city trip for Levent. On Wednesday Levent replaces her with a new assistant, Zeynep, while six half-confirmed bookings are pending.
**Wants:** Pending bookings to continue under Zeynep with nothing lost, and Pınar to lose access from that moment.

### 415 · 2-2-3 custody rotation
Parents Derya and Cem split time 2-2-3: Derya Monday and Tuesday, Cem Wednesday and Thursday, then alternating Friday–Sunday between them week by week. Their child Ada (7) has a school trip departing Thursday 07:00 and returning Friday 19:00.
**Wants:** The trip to be recognised as overlapping both parents' days, with each parent told who handles which drop-off and pick-up.

### 416 · Week on, week off, and a mid-week handover
Melis has her daughter Zeynep (9) one week, and Kaan has her the next, with handover Sunday 18:00. One Sunday Kaan's flight is delayed and he will arrive at 20:30.
**Wants:** Melis's server to accept or decline the shift, and the change to flow to any pick-ups and activities from that evening on.

### 417 · Holiday splits override the rotation
Under a court order, Christmas Eve until noon Christmas Day goes to Derya in even years, Cem in odd years, and that holiday overrides the 2-2-3 rotation. This year Christmas Eve falls on Derya's regular Friday off.
**Wants:** The holiday to win over the normal pattern, with the days around it recomputed so nobody loses their agreed total.

### 418 · Swap of custody days requested by one parent
Cem asks to swap his Wednesday with Derya's next Saturday. Derya says yes to the swap, but the following Monday's school pick-up was arranged by Derya's mother who then has one fewer day.
**Wants:** Everyone who depended on the old arrangement told of the change, without each needing to see the custody order itself.

### 419 · Custody schedule not shown to school
The school needs to know who collects Ada on which day but must not see the wider arrangement, holiday terms or reasons for swaps.
**Wants:** The school to learn only who is responsible today and tomorrow.

### 420 · Extended family sharing and a shared family calendar
Five adults across three households share the "Yılmaz family" outings: Grandparents, two siblings' families. Each has private items and a few shared ones. A cousin's birthday on Saturday clashes with one household's custody weekend.
**Wants:** The clash to show for the household affected without disclosing the custody arrangement to the rest.

### 421 · A repair technician's 4-hour window
Ahmet books a washing-machine repair for Thursday 08:00–12:00. The technician's server knows the job before is running long. Ahmet has a 10:30 call he cannot miss.
**Wants:** To be told as the window narrows, with an honest updated arrival estimate, and to be able to say "not before 11:00" without losing his place.

### 422 · Technician arrives inside the window but not when the customer stepped out
The technician arrives at 09:40 while Ahmet has stepped out to buy bread for 20 minutes. He waits five minutes, then marks it a missed visit.
**Wants:** A missed visit not to be recorded against Ahmet when the visit came earlier than a reasonable hour of the window predicted by the technician.

### 423 · Clinic double-booking discovered by two patients
A dental clinic's front-desk system and its online booking both give 11:00 Tuesday to two different patients, Yasemin and Burak.
**Wants:** Both told before they travel, one kept, the other offered the nearest alternatives, and neither told the other's name.

### 424 · Deliberate overbooking by a clinic
A clinic books 12 patients into 10 slots because 20 percent usually no-show. Today all 12 arrive.
**Wants:** The extra patients told honestly about the delay and offered the choice to wait, reschedule or leave.

### 425 · No-show that was the organiser's fault
Neslihan arrives at a barber, Kemal, for 16:00, but the barber's server had moved her to 15:00 the day before and the message never got through. She is charged a no-show fee.
**Wants:** The fee cancelled, and a record that the move was never delivered.

### 426 · Repeated no-shows by a customer
Oğuz has missed 3 of his last 4 restaurant reservations. The restaurant's rule is "no more than two per quarter".
**Wants:** The restaurant to refuse or ask for a deposit without telling other restaurants his full history, and Oğuz to know why.

### 427 · Restaurant table for 10, three accept, four decline late
Ece books a table for 10 at 20:00 for Saturday. The restaurant requires a final headcount 24 hours ahead. At that deadline six have accepted, two are silent and two have declined.
**Wants:** The deadline handled the way Ece's rule says, with the silent two neither counted nor forgotten, and the restaurant given a number.

### 428 · Restaurant waiting list and a released table
A restaurant has a 20:00 table for 4 that a customer cancels at 17:00. Three people on a waiting list all respond "yes" within seconds.
**Wants:** Exactly one to get it, in the order the restaurant's rule says, and the other two told promptly.

### 429 · A carpool with three drivers
Four colleagues share a daily commute: Elif drives Mondays and Thursdays, Hasan Tuesdays, Volkan Wednesdays and Fridays. Elif's kid is sick on Thursday and she cannot drive.
**Wants:** The others to be asked to cover and the pick-up times for the four adjusted, without each person's home address becoming visible to anyone who did not already have it.

### 430 · Carpool member changes their work hours
In the same carpool, Hasan is moved to a 10:00 start on Tuesdays, while the other three start at 08:30.
**Wants:** The carpool to show it can no longer run on Tuesdays for Hasan and to let the group decide.

### 431 · Group trip: 8 friends, three different leave allowances
Serkan is organising a four-day trip for 8 friends. Each has different days off; two can only travel Friday to Sunday; one can go only if a colleague covers the Thursday.
**Wants:** The dates that keep the most people who can genuinely go, with no one having to reveal their leave balance.

### 432 · Group trip: one member's flight leg is the problem
On the same trip 6 of the 8 fly together; Melike's flight is delayed 5 hours on departure day, so she will miss the group's 15:00 check-in and a prepaid 17:00 boat tour.
**Wants:** The rest to be told what changes for them, and Melike to see what she will miss, without the whole itinerary being reshuffled by default.

### 433 · Two organisers ask for the same slot at the same moment
Zeynep and Tarık both ask Murat's server for Thursday 14:00–15:00 at almost the same second. Each of their servers has been told "yes, free".
**Wants:** Exactly one of them to get it and the other to be told immediately, not to find out at 13:55.

### 434 · Two organisers, each half-confirmed on different people
Zeynep has confirmed Murat and Nihal for a workshop; Tarık has confirmed Murat and Onur for a different workshop, the same slot. Murat had said yes to both because each asked before the other.
**Wants:** The conflict surfaced to both organisers as a shared problem, with Murat's preference deciding.

### 435 · Counter-proposal loop
Cansu proposes 10:00. Deniz says "how about 11:00". Cansu says "11:00 is bad, 10:30?". Deniz says "10:30 is bad, 10:00?". The two servers have each auto-answered eight times in an hour.
**Wants:** The loop to stop and the two people to be shown that they keep disagreeing, before anyone's inbox is flooded.

### 436 · Counter-proposal loop between 3 servers
Three colleagues' servers each try to shift the meeting to fit themselves, each shift breaking one other person's fit.
**Wants:** The group told that no fit is likely and asked for a human decision.

### 437 · Cancellation spreads to everyone
Aslı cancels a Friday team offsite for 22 people. Three had already booked a train; two had cancelled other commitments; one had arranged childcare.
**Wants:** Every participant told, and each told only of the consequences relevant to them, with the freed time returned to their calendars.

### 438 · Cancellation from a person who was not the organiser
Ferhat, a participant of a 6-person meeting, deletes it from his own calendar without declining.
**Wants:** It to be clear whether that means he is not coming, or that he wants the meeting cancelled, and the organiser not to be misled.

### 439 · Organiser's server was offline when the cancellation was sent
Aslı cancels at 08:00 but her server was down 07:55–09:00; participants' servers went on assuming the meeting was on, and two people arrived.
**Wants:** People arriving to find out quickly, and a cancelled meeting to eventually be recognised as cancelled everywhere.

### 440 · Who may move my things automatically
Cem's server allows his manager's server to move any "internal" meeting without asking; a contractor, Murat, is added to the manager's team and moves a client meeting Cem cares about, calling it "internal".
**Wants:** Cem to have moved only what he agreed to be moved, by whom he agreed.

### 441 · Trust that expires
Gizem let her project lead's server move her meetings for the duration of a launch, ending 30 November. On 3 December it is still moving them.
**Wants:** The permission to end when Gizem meant it to.

### 442 · A manager overrides everyone
A regional director, Süleyman, needs a "mandatory" 15:00 meeting on Wednesday, overriding a customer workshop Ilgın has been preparing for two months with an external client.
**Wants:** The override to be allowed, Ilgın's client to be told (without internal reasoning being disclosed), and Ilgın to know who decided it.

### 443 · Manager overrides that the employee's rule forbids
Ilgın has a rule that nothing may be scheduled over her sleeping hours after night shifts; a manager's override request says 06:00.
**Wants:** The conflict between the manager's authority and her protected hours resolved by a defined answer, and a person to be told when a rule was overridden.

### 444 · Cross-company meeting between rival servers
Company A's product lead and Company B's sales lead arrange a joint workshop. Neither company will let the other's server see any internal free/busy beyond a yes or no.
**Wants:** A workable time found without either company learning anything about the other's calendar.

### 445 · A partner company's server is slow to answer
Ayşe asks 12 external participants' servers; 11 answer in seconds and the 12th, a small firm, takes 40 minutes.
**Wants:** Ayşe to make progress with what she knows and to be able to see that one answer is still pending.

### 446 · A partner's server is offline for two days
An accountant, Recep, runs his own server which is down over a weekend. A client asks for a Monday 09:00 slot on Friday evening.
**Wants:** The client told the server is unreachable, and a sensible outcome (hold tentatively, or wait) rather than a false "free" or "busy".

### 447 · Server comes back and finds a different past
Recep's server returns Monday and learns two meetings were arranged for him at 09:00 by different people while it was down.
**Wants:** Recep asked which to keep, the two organisers told, and neither silently dropped.

### 448 · The two servers disagree about the time zone of the meeting
Ayşe in Istanbul (UTC+3, no daylight time) invites Jonas in Berlin for "10:00 on Monday 30 March". Berlin clocks changed to summer time on Sunday 29 March; Istanbul's did not change at all.
**Wants:** Both to arrive at the same real moment, with each side's person seeing it in their own local time.

### 449 · A recurring meeting across a daylight change
A weekly Tuesday 09:00 meeting between London and New York is set in March. The US changes clocks on 8 March, the UK on 29 March. For three weeks the gap between the two cities is different.
**Wants:** The meeting to stay at the local time the organiser meant, and everybody warned about the three odd weeks.

### 450 · Clock drift between two servers
Deniz's server thinks it is 14:02 when Cansu's says 13:57. A meeting is planned to start "in 5 minutes" and one of them says it has already begun.
**Wants:** Agreement about when the meeting is, without either person feeling late.

### 451 · One side uses a lunar calendar for the date
Fatma's family in Malaysia fixes a family gathering on "the first day of the tenth lunar month"; her cousin Hasan's server counts the same event on a different Gregorian date because the month begins a day later depending on moon sighting.
**Wants:** Everyone to arrive on the same day, and to be told when the date is still uncertain.

### 452 · Ramadan-based recurrence and work meetings
A weekly meeting is fixed "after iftar". Iftar is at 17:12 this week and 17:03 in two weeks. A colleague in a different country sees a different iftar.
**Wants:** The meeting to slide by the right amount for each person while still meeting together.

### 453 · Change "this and all following" but one attendee had an earlier exception
Organiser moves a fortnightly meeting from Monday to Wednesday from June. Nihal already had her own agreed exception for 15 June.
**Wants:** Nihal's exception not to be lost or duplicated.

### 454 · A person joins a series halfway
Aylin joins a recurring Wednesday 16:00 meeting in September; the series started in January and has 22 past meetings.
**Wants:** To see and appear in future meetings only, not to be shown as absent from earlier ones.

### 455 · The 500-person all-hands
A company all-hands for 500 people across 9 time zones has 3 candidate slots. 60 percent of the company must be in the working day; 40 people are shift workers, and 12 are on leave.
**Wants:** A time chosen without 500 answers being sent back to a person, with some people told it is outside their hours and asked whether they want to attend anyway.

### 456 · The 500-person all-hands moves an hour
Two days before the all-hands, the CEO's flight forces it to start an hour later. 500 servers get the change; 80 people had planned a 17:00 pickup, 30 have a fixed handover at 16:00.
**Wants:** People only bothered if the hour actually matters for them, and the ones it breaks helped to decide.

### 457 · The all-hands request spam
An unknown server sends 20,000 "join this meeting" requests to a company's servers, each with a different real-looking name.
**Wants:** People's calendars not filled with junk, and real join requests still visible.

### 458 · A bad actor books every slot at a small clinic
A malicious party makes 300 bookings under fake names for the coming two weeks at a two-person physiotherapy practice.
**Wants:** The real patients to still be able to book, and the fake ones to disappear without penalising anyone real.

### 459 · A bad actor asks to move a meeting to a scam link
Someone whose server is new asks Nur to "push the meeting 30 minutes" and includes a new location that is a phishing address.
**Wants:** Nur not to be led to an untrusted place by a time change that was not requested by someone she knows.

### 460 · Correcting the past: the meeting really started 25 minutes late
A meeting planned for 10:00–11:00 actually ran 10:25–11:20. Afterwards the organiser fixes the record so an invoice for consulting time is right; two participants' own records still show 10:00–11:00.
**Wants:** All records to agree on what actually happened, without erasing that it was planned for 10:00.

### 461 · Correcting the past: someone who was marked present was not
Yasemin was recorded as attending a workshop, but had left an hour earlier; the record affects a training certificate.
**Wants:** The record corrected by the right person, and all who relied on it told.

### 462 · Plan versus actual across a whole day
Cengiz planned a day of five meetings, but a train delay made him miss the first two, so the third was cut and the fourth ran over.
**Wants:** At day's end, a truthful account of what happened alongside the plan, and other people told only what concerns them.

### 463 · Estimated duration fills up the next meeting
A doctor's consultation is estimated at 20 minutes but the patient's first visit historically takes 35 minutes; the next four patients are told 20-minute gaps.
**Wants:** Patients told an honest arrival window, and later ones warned as the day drifts.

### 464 · An impossible constraint made on purpose
Someone sets "only within 10:00–10:15, and only if the other participants agree to be there for at least 30 minutes".
**Wants:** The contradiction pointed out to the person who made it, not silently failing.

### 465 · Consent withdrawn after acceptance
Kaan agreed on Monday for his server to share his availability with a research study team; on Wednesday he withdraws consent. The team has 6 meetings already scheduled based on his earlier answers.
**Wants:** No further questions answered, the future meetings dealt with fairly, and past answers not clawed back.

### 466 · A person who does not want to be invited at all
Berna has asked a former colleague never to invite her to anything. The former colleague's assistant, using a different server, invites her to a company reunion.
**Wants:** The invitation not to reach her or, if it must, to arrive without pressure and be declinable without any reply going back.

### 467 · Same person, two servers
Emine has a work server and a personal server. A work meeting at 14:00 and a personal dental appointment at 14:00 exist, and neither server can see the other.
**Wants:** The clash noticed and shown to Emine, without either organisation learning of the other's entry.

### 468 · Mutual acceptance race
Two people, Dilan and Kaya, each send the other a "let's meet Thursday 15:00" request at the same time from their own servers, each with a different location.
**Wants:** One meeting, not two, at one place, agreed by both.

### 469 · A server answers "okay" then its person says no
Nur's server, calculating on its own, says "yes, 14:00–16:00 is okay" to a training organiser at 09:00. At 11:00 Nur, unaware, accepts a hospital appointment at 15:00 that her server also thought was fine.
**Wants:** The clash detected, Nur asked which matters, and the organiser told quickly if the answer changes.

### 470 · Person leaves the organisation, their meetings remain
Selçuk, who organised 14 future meetings for his department, leaves the company on Friday. His account is closed.
**Wants:** Each meeting to have an owner afterwards or be cleanly cancelled, and participants not left with orphans.

### 471 · Ownership of a meeting handed over
Zerrin passes a monthly steering committee to Kadir. The rules she set (quorum, who can join, who may be pushed) and who is permitted to move it are hers.
**Wants:** Kadir to see and change the rules from now on, Zerrin to lose her rights, and the participants not to be re-invited.

## Travel, transport and prediction

### 472 · Range narrows as the trip goes on
Ayşe's trip starts as "arrive between 17:45 and 18:05". She boards the 17:26 train; by the second stop the range is "17:51 to 17:56". the wider range is still what Deniz sees.
**Wants:** Deniz's view to tighten as the ride progresses, without Ayşe doing anything.

### 473 · Selin says wait, then changes her mind
Selin answers "wait" at 18:40 when Mert is predicted 20 minutes late. At 18:55 the bus is predicted 45 minutes late; she has a 19:30 dinner reservation elsewhere.
**Wants:** A new question to Selin, not a silent continuation of her earlier "wait".

### 474 · Frequency-based line, no timetable
Line M4 runs "every 4–6 minutes" with no published times. Kaan plans to arrive at a 09:00 meeting. the plan shows a made-up departure time of 08:36.
**Wants:** To be told "just turn up, wait 0–6 minutes" rather than a fake exact departure.

### 475 · Timetabled line where missing it costs an hour
The regional train to Bolu leaves at 07:12 and 08:12 only. Elif's walk to the station takes 9–14 minutes. She leaves home at 06:55.
**Wants:** To be warned that 06:55 means a coin-flip on losing a full hour, and what leaving at 06:45 gets her.

### 476 · Leave time for 90% on-time
Onur must be at the notary by 10:00 and wants to be there on time nine days out of ten. The bus trip usually takes 28 minutes but has taken 55 on bad days.
**Wants:** One leave time that reflects that 90% wish, and to see what 99% or 75% would cost him in earlier waking.

### 477 · Wanting certainty that cannot exist
Nilay says she must arrive at the hospital by 08:00 with 100% certainty. The only route includes a ferry that is cancelled about 2% of days in winter.
**Wants:** To be told plainly that certainty is not available and what the closest option is.

### 478 · Walking to the stop, slow companion
Baran's walk to the bus stop is 7 minutes alone. Today he walks with his grandmother, who walks at half his speed.
**Wants:** The leave time to move earlier for today only, and go back to normal tomorrow.

### 479 · Transfer with a tight connection
Zeynep takes a bus (arrives 08:41 at the interchange) then a tram (departs 08:45, next at 08:55). The bus is running 3 minutes late, the platform change takes 4 minutes.
**Wants:** To know the 08:45 tram is now unlikely, and the plan to show 08:55 as the working arrival without her opening a map.

### 480 · Missed connection turns the rest of the day
Zeynep misses the 08:45 tram. The next arrives 08:55, and her 09:00 class becomes a 09:20 arrival. She then has a 10:00 to 11:00 lab.
**Wants:** The whole morning re-predicted: late for class, still on time for lab, and the class teacher told.

### 481 · Two legs pushing each other
Leg one is a 25–40 minute taxi to the airport, leg two is a check-in that closes at 14:00 and leg three is a lounge meeting at 14:30. The taxi runs 40 minutes.
**Wants:** The lounge meeting to slide or drop as a consequence, and to see it happen when the taxi slips, not when check-in fails.

### 482 · Check-in cutoff versus boarding cutoff
Ali's flight departs 16:20. Bag drop closes 15:20, security closes 15:35 in practice, gate closes 15:50. He has hand luggage only.
**Wants:** The plan to use the cutoffs that apply to him (no bag drop), not the strictest one.

### 483 · Airport security queue prediction
Security at the terminal is 8 minutes at 06:00 and up to 45 minutes at 07:30 on Mondays. Leyla's flight is at 09:10 and she arrives at 07:15.
**Wants:** To see that the queue estimate changes with the time she will actually arrive, and gets updated when the live queue figure changes.

### 484 · Boarding closes while the queue is still long
Live data at 15:10 says security wait is 50 minutes, gate closes 15:50, and Ali is at the queue's start.
**Wants:** An honest "you will probably miss this flight" with the next available options, not a cheerful "on time".

### 485 · Border crossing with queue
Emre drives from Edirne toward Bulgaria and must reach Sofia by 19:00. The border queue is 20 minutes on the crossing's live camera and 90 minutes an hour later after a truck jam.
**Wants:** The arrival range to widen sharply when the queue grows, and a suggestion to check the other crossing.

### 486 · Border with unknown document check
Sema is driving through a crossing where a second-stage document check happens to about 1 in 8 cars and adds 30 minutes.
**Wants:** The plan to carry that chance without pretending it will or will not happen.

### 487 · Timezone crossing mid-trip
Cem flies Istanbul 22:40 to Tokyo, arrives "next day 16:35 local". He has a call at 09:00 Istanbul on the day of arrival.
**Wants:** To see the call as landing mid-flight and be asked what to do, not silently overlapping the flight.

### 488 · Arrival day that does not exist as expected
Nora flies Auckland to Los Angeles, leaving 18:00 on the 14th and landing 11:00 on the 14th. Her hotel checks in from 15:00 on the 14th.
**Wants:** A day with two evenings on it to be understood correctly, and the hotel check-in to be placed after arrival.

### 489 · Jet lag day
Nora lands in Tokyo at 16:35 with a 09:00 conference session the next morning. Her body clock says 03:00.
**Wants:** The first day after arrival to be treated as a lower-capacity day, with meetings not stacked on it unless she overrides.

### 490 · Clocks that disagree
Ozan's phone says 14:03, the station clock says 14:06, the train app is based on the operator's time and says 14:04. His train is at 14:05.
**Wants:** One agreed time for the plan, and not two people arriving with different beliefs about when "14:05" is.

### 491 · Daylight-saving night on a train
The night train from Vienna to Zurich leaves 22:00 on the last Saturday of October, when clocks go back. Duration is normally 9h20.
**Wants:** The arrival to read as the correct local time (which is an hour later than it looks), and the meeting at 08:00 judged accordingly.

### 492 · Destination timezone differs from the person's own
Ece in Istanbul agrees to meet Jan in Berlin "at 17:00" without naming a city. They both mean their own local time.
**Wants:** The ambiguity surfaced before either person sets off.

### 493 · Holiday timetable exception
Bus 34 runs every 10 minutes on weekdays, every 20 on Sundays and holidays. Tomorrow is a public holiday that falls on a Wednesday.
**Wants:** Tomorrow's trip planned with the holiday frequency, without the person changing a weekly recurring plan.

### 494 · Strike announced for next week
The metro union announces a strike Tuesday, service at roughly a third of normal. Lale has a Tuesday 09:00 interview across town.
**Wants:** Warning days ahead, with a plan for Tuesday made from the reduced service, and a refresh when the strike is called off.

### 495 · Cancelled service, no alternative announced
The 17:15 train is cancelled at 17:05 with no replacement. Murat is already on the platform and must reach Ankara by 21:00.
**Wants:** Options with arrival ranges, ranked by likelihood of getting there by 21:00.

### 496 · Weather slowing a road trip
Snow starts on the D100 at 15:00. Banu's 2-hour drive is expected to become 3.5–5 hours. She needs to pick up her son at 18:00.
**Wants:** The pickup to be flagged at risk, her ex-partner to be asked to cover it if he is closer, and her son's school told.

### 497 · Fog cancels flights, delay grows
Fog delays Haluk's 11:00 flight to 12:30, then 14:00, then "unknown". Each update was correct at the time.
**Wants:** The plan to stay usable across repeated revisions, without notifying his dinner host six times.

### 498 · Notification fatigue
Mert's bus drifts from 2 minutes late to 4 to 5 to 3 over ten minutes. Selin is waiting.
**Wants:** Selin to be told when the change matters to her decision, not each wobble.

### 499 · Correcting the past: train left on time
The board said the 13:10 train was delayed 15 minutes, so Gül relaxed in the café. It in fact left at 13:10. Afterward the operator's data shows an on-time departure.
**Wants:** The record to show what really happened, the wrong prediction marked as wrong, and the people told the correct story.

### 500 · Predicted arrival versus actual arrival
Emir was predicted to arrive between 17:50 and 18:10. He arrived at 18:24. Two weeks later he asks why he keeps being late on Fridays.
**Wants:** Past predictions and past reality both kept, so that the misses can be seen.

### 501 · Plan versus actual on a recurring route
The plan says the school run takes 22 minutes. Over the last 20 mornings it took 22 five times and 31–38 fifteen times.
**Wants:** The plan to become honest about the real duration without being told to adjust it manually.

### 502 · Key person drops out
Six colleagues travel by minibus to a site visit, Cansu is driving and gets ill at 06:00. Pickup order and timing depended on her car.
**Wants:** The trip to be replanned around who is left, with pickups reordered and the site visit time judged again.

### 503 · Driver rest rule
Hakan drives a lorry, 4.5 hours behind the wheel forces a 45-minute break. His delivery to Konya is 6 hours out, and a traffic jam adds 40 minutes.
**Wants:** The arrival to include the mandatory break and the break to move to a real rest area, not the middle of the motorway.

### 504 · Charging stops
Irmak drives an EV from Ankara to Izmir (about 580 km), battery range at 90% is 340 km in cold weather. Charger A has 2 of 6 bays working.
**Wants:** A charging stop chosen and timed, its wait and charging time treated as ranges, and a fallback if the charger is full.

### 505 · Charger occupied, plan shifts
Irmak arrives at the charger at 13:40 and all bays are taken; the average wait is 25 minutes.
**Wants:** The rest of the trip, including the lunch booking in Izmir, to shift automatically and the host told.

### 506 · Fuel stop versus time
Taner has 45 km of fuel left, next station is 38 km away and the tank will empty before the one after. He is 2 hours from a wedding.
**Wants:** A fuel stop to be planned in as a necessity, not an optional extra.

### 507 · Parking time
Sevgi drives to the hospital, where parking takes 5 minutes at 06:00 and 25 minutes at 10:00, then a 6-minute walk from the car park.
**Wants:** The appointment time to be judged on time-to-the-door, not time-to-the-car-park.

### 508 · Ride-hailing wait
Kerem books a ride at 08:10. The app says "car in 4 minutes", then 7, then the driver cancels and a new one is 11 minutes away.
**Wants:** His arrival prediction to reflect a car that has not yet been secured, and a nudge if a metro alternative is now faster.

### 509 · Ride-hailing surge and cost limit
Kerem's morning ride usually costs 180 TL; today it is 420 TL. His limit for a commute is 250 TL.
**Wants:** The alternative modes shown with arrival ranges, decided by him against his own limit.

### 510 · School run with three children
Aylin drops Ada at nursery (08:00), Bora at primary (08:20) and Cem at secondary (08:35) before reaching work at 09:00. Each drop takes 5 minutes plus queue.
**Wants:** The whole run judged as one morning, and a queue of 12 extra minutes at the first stop to shift all following stops and the work start.

### 511 · One child is late out of the house
Bora is not ready at 07:50 when Aylin needs to leave. The nursery is at 08:00, primary at 08:20.
**Wants:** Options: leave without Bora and have someone else bring him, or change the order of drops, with the effects on each school and on work.

### 512 · School pickup with a different adult
On Wednesdays Aylin's brother collects Bora at 15:30. Today his bus is 20 minutes late.
**Wants:** The school told by whoever is best placed, and Aylin asked whether she can cover.

### 513 · Multi-leg errand run
Fatma has to visit the bank (open 09:00–17:00), the post office (closes 17:30, queue 5–40 min) and the pharmacy (open late), moving by bus.
**Wants:** An order that fits the opening hours, with the queues as ranges, and a warning if the post office may close before she reaches the front.

### 514 · Errand that is impossible today
Fatma also needs to reach the tax office, open 09:00–12:00, but she is at work until 17:00 and it is Friday.
**Wants:** To be told directly that it cannot be done today and the earliest day it can, not a plan with a hidden failure.

### 515 · Six-leg trip around the world
Pelin flies Istanbul, Doha, Singapore, Sydney, Auckland, Santiago, then Buenos Aires over 5 days, each on a different airline with a different booking. Total scheduled transit is 92 hours.
**Wants:** One view of the whole trip, with the weakest connection shown, and the effect of a delay on leg 2 on legs 3 to 6.

### 516 · Long layover in a foreign city
Pelin has 9 hours in Singapore. Immigration is 15–50 minutes each way, and she wants to see the gardens.
**Wants:** The outing kept, with its start and end set by the time she clears immigration and the return check-in cutoff.

### 517 · Separate tickets, no protection
Kaya's flight to Frankfurt is on one booking and the onward flight on another, with 2h10 between them. The first flight lands 1h30 late.
**Wants:** To know at once that this connection is not covered by anyone, before he lands.

### 518 · Single booking, airline rebooks
Same as the last, but both flights are on one booking. The first lands 1h30 late and the second is missed.
**Wants:** The rebooked flight to appear in the plan when it is assigned, and the rest of the trip to move.

### 519 · Minimum connection time versus what actually happens
The airline's stated minimum connection at Heathrow is 60 minutes but Defne, with a terminal change, needs about 85 to feel safe.
**Wants:** The plan to use a realistic time for her, not the published minimum.

### 520 · Luggage arrival
Hazal lands at 11:05, bags take 10–35 minutes to appear. A courier is waiting for a handover at 11:30 outside.
**Wants:** The handover to be shown as a range, the courier asked for flexibility, and hand luggage as an alternative if she had any.

### 521 · Courier waiting
A courier arrives at Selim's house at 14:00 for a signature and Selim is still on the bus, 15 minutes away.
**Wants:** The courier to be told "15 min, please wait", or to leave the parcel with a neighbour if the courier prefers, agreed without Selim typing.

### 522 · Delivery window that keeps sliding
A furniture delivery is "between 10:00 and 14:00". At 10:30 it becomes 12:00 to 15:00, at 13:00 it is 15:00 to 17:00. Sude needs to be home for it, and has a dentist at 16:00.
**Wants:** The dentist and the delivery to be noticed as colliding as soon as it happens, and options.

### 523 · Delivery that needs a person present versus one that does not
Two parcels come today: one needs a signature, one can be left at the door. Both have windows of 9–17.
**Wants:** Only the signed one to hold her at home.

### 524 · Food delivery ETA
Burak orders food at 19:12, the app says 30–40 minutes. He has an 20:00 video call. At 19:40 the courier is still 12 minutes from the restaurant.
**Wants:** An honest range, an early flag that the call is at risk, and a suggestion (move call by 10 minutes).

### 525 · Food delivery ETA that lies
The restaurant's estimated delivery is 25 minutes on every order, and the last six orders took 41, 38, 47, 35, 52 and 40.
**Wants:** His own history to overrule the app's number.

### 526 · Food arrives while the person is away
Burak's food arrives at 19:35 but he is in the lift with no signal.
**Wants:** The courier to know he is close, and the door left with a neighbour if that was agreed earlier.

### 527 · Live location leak
Selin can see that Mert's bus is 20 minutes late. She can also, from the same updates, see that he is still at his ex-partner's district when he said he was at the office.
**Wants:** Selin to receive only "late by 20–30 minutes", never where Mert is.

### 528 · Location shared once, forever
Deniz let a friend see his live position for one trip in March. In September it is still being used to predict his arrival.
**Wants:** The permission to have ended when the trip ended.

### 529 · Precision of the delay
Mert would like Selin to know he is late but not why, since the reason is a job interview.
**Wants:** Selin to get the delay and no cause.

### 530 · Sharing an estimate but not the route
Kaan will arrive at Hakan's between 14:10 and 14:40. Hakan does not need to know Kaan is changing at Şişli or that he is on the tram.
**Wants:** Only the range shared, with the mode of travel kept private unless Kaan agrees.

### 531 · Several people converging on one meeting
Five friends travel from five districts to a dinner at 20:00. Each has a different range: 19:45–20:10, 19:50–20:25, 19:40–19:55, 20:00–20:40 and 19:55–20:05.
**Wants:** One combined answer of when the table will be complete, and the restaurant told the hold time.

### 532 · One late person makes the group choose
The last friend is predicted at 20:40 while the restaurant holds tables to 20:15.
**Wants:** The group asked once: wait, start without them, or move, and the answer applied for all.

### 533 · Host cancels while guests are en route
Hakan cancels at 13:50 with Kaan already 15 minutes into his tram ride.
**Wants:** Kaan told at once, and his afternoon replanned from where he is now, not from home.

### 534 · Nobody there yet
Selin arrives at the meeting point at 18:55, Mert is due 19:00, and he has not shared any information at all.
**Wants:** Her wait to be treated as unknown, not as on-time, and an easy way to ask him.

### 535 · Early arrival
Zeynep's train arrives 35 minutes early, at 08:25 instead of 09:00, for a 09:30 interview.
**Wants:** The extra time recognised, with the walk and interview moved earlier only if the other side agrees.

### 536 · Early arrival that hurts someone else
Onur's driver arrives at his house 40 minutes early and Onur's mother, who is bedridden, is not yet dressed.
**Wants:** An early arrival to be treated as a problem to warn about, not only a late one.

### 537 · Trip plan disappears with the destination
Ali's flight to Izmir is cancelled and he decides to drive instead. His hotel check-in, a taxi, and a lunch with a colleague were all built on the flight.
**Wants:** Every dependent plan re-examined under the road trip, with those that no longer make sense shown, not silently deleted.

### 538 · Trip on a wrong day
Leyla planned her trip for the 14th but her ticket is for the 15th, and everything else in her plan is set for the 14th.
**Wants:** The mismatch caught early, before she reaches the airport.

### 539 · Overnight trip bridging two days
Ferry leaves at 23:30, arrives 06:10 next day. Ayşe has "day 1" and "day 2" plans and sleeps on board.
**Wants:** The night not to count as free time on either day, and her sleep to be treated as sleep.

### 540 · Live data source goes dark
The bus operator's live feed stops at 08:14 for 30 minutes. Mert's last known prediction was "5 minutes late".
**Wants:** The prediction to grow less certain as the data ages, and to show that it is stale.

### 541 · Live data and timetable disagree
The live feed says the metro is on time but the station display and three other travellers in the same train report a 12-minute hold.
**Wants:** The disagreement shown, and the wider range used until it settles.

### 542 · Route with no valid arrival
Cengiz needs to be at the port by 18:00 for a ferry and the last bus leaves 17:20 and takes 55 minutes.
**Wants:** To be told it cannot be done by bus and what could: a taxi, an earlier bus, or the next ferry.

### 543 · Time already gone
Sena realises at 09:15 that her 09:00 interview across town was today. The trip takes 40 minutes.
**Wants:** The fastest realistic option now shown at once, the interviewer offered a message, and her afternoon adjusted.

### 544 · Vehicle switch mid-plan
Ozan plans to bike to the office (24 minutes) but at 07:50 it rains hard.
**Wants:** The mode swap offered with the new leave time and the earlier alarm effect, not just a different arrival.

### 545 · Bike or scooter availability
Ozan's plan needs a shared bike at the stop next to the office. The station shows 0 bikes and 6 empty docks now, and last Tuesday it was empty at the same hour.
**Wants:** The risk of no bike at the far end included in the prediction, with a walking fallback time.

### 546 · Confidence that does not narrow
Halil's ride crosses a river with a lift bridge that opens at unpredictable times, adding 0 or 15 minutes. His range stays "22–37" till the very end.
**Wants:** The range to stay wide, honest that it will not narrow until he reaches the bridge, and the leave time to cover the worst case if it matters.

### 547 · Arrival shift changes what comes after
Ece's late train pushes her arrival at the client from 10:00 to 10:35. Her 11:00 meeting with another client, across town, needs 30 minutes to reach.
**Wants:** The second meeting shown as at risk and its own participants pre-warned, with the choice to shorten the first meeting.

### 548 · A whole day re-predicted from the morning bus
Melis's day is: 08:30 bus, 09:15 clinic shift, 12:00 lunch with a friend, 14:00 delivery at home, 17:00 pick up her niece. The bus is 25 minutes late.
**Wants:** Every later item re-examined at once, with only those that are truly affected changing.

### 549 · Bus and metro that both rely on the same jam
Two of Ali's legs (bus, then a second bus in the same district) share one traffic jam, and both run late together.
**Wants:** The delays not to be counted as if they were independent and unrelated.

### 550 · Delay that recovers
The tram is 9 minutes late at the first stop but usually makes back 5 by the terminus.
**Wants:** The prediction not to carry the 9 minutes forward blindly, and to show the expected recovery.

### 551 · Person holding the plan is offline
Kemal's phone is off during a 3-hour flight. His sister expects him for 15:00 dinner and his flight lands 40 minutes late.
**Wants:** His sister to learn of the delay from what the airline reports, without needing his phone on.

### 552 · Two travellers, one vehicle, different fates
Ela and Cem share a car to a wedding but Ela must leave at 16:00 for a trip after, Cem at 19:00.
**Wants:** The return plan to allow for that, and cost of one of them going by another route to be shown.

### 553 · Accessibility of the route
Gönül uses a wheelchair. The metro station on her route has its lift out of order today.
**Wants:** The route replanned around what she can use, with the new time, and not simply "delay".

### 554 · Time to the door, not to the stop
The bus stops at the mall entrance, but Furkan's meeting is on the 9th floor of the opposite tower, which is a 7–12 minute walk plus lift wait.
**Wants:** The last stretch counted in the trip, with the range shown.

### 555 · Family visit across two cities in one day
Nesrin visits her parents in Bursa (ferry + bus, 3 hours each way) and must be home by 21:00 for her son. The last ferry back leaves 19:30.
**Wants:** The visit length worked out from the return, and shown to shrink if the outbound ferry is late.

### 556 · Rebooked ticket does not fit what came before
The airline moves Pelin's flight in Singapore from 21:00 to 06:00 next day, forcing a night. Her hotel in Sydney starts that same night.
**Wants:** The lost night, the Sydney hotel cost, and the downstream meeting all shown together as the result of one change.

## Reconstructing the past

### 557 · Order known, clock time unknown
Detective Arda Kaya interviews three neighbours about the night of a break-in. Ela heard the dog bark before the glass broke. Mert saw the van leave after the glass broke. Nobody looked at a clock. Arda has three events and no times.
**Wants:** To put the three events in order and keep that order as a real result, without being forced to invent a time for any of them.

### 558 · One event inside several bigger ones
During a bank robbery, the guard Selin Aydın pressed the silent alarm. The same moment falls inside the robbery, inside Selin's shift, and inside the 4-minute window the vault door was open.
**Wants:** To describe the alarm once and have it belong to all three larger happenings, so a correction to any one of them is visible from the alarm.

### 559 · Two suspects each claimed to arrive first
Both Barış and Cem told police they reached the warehouse first. Barış says he found the door open; Cem says he unlocked it. Neither statement is confirmed.
**Wants:** To record both claims of being first as claims, see that they cannot both hold, and keep both until evidence decides.

### 560 · Alibi that holds only under one clock
Gül's alibi is a supermarket receipt stamped 21:47. The victim's phone call to emergency services was logged at 21:52. The supermarket is 4 minutes away by car.
**Wants:** To see whether Gül could have been at both places, given the uncertainty on the till's clock, and how much clock error would break the alibi.

### 561 · CCTV clock runs eight minutes fast
The corner shop camera shows a masked man at 02:14. A police officer checks the recorder against the phone network time and finds it ahead by 8 minutes, plus or minus 30 seconds.
**Wants:** To keep the camera's raw stamp, state the correction, and see the corrected time as a narrow range that flows into everything else the camera shows.

### 562 · CCTV set to the wrong timezone
A camera in a hotel lobby in Istanbul was installed by a vendor who left it on UTC. Footage of the guest's arrival reads 17:05. The hotel register says check-in was 20:10 local time.
**Wants:** To reconcile a stamp that is off by a whole number of hours, without losing the original stamp.

### 563 · Camera drifting a little more each week
A camera was checked against a reference on 1 March (2 seconds slow) and on 29 March (14 seconds slow). The incident of interest was on 15 March.
**Wants:** An estimate of the error on 15 March as a range, and to see that it is an estimate rather than a measured fact.

### 564 · Cell-tower ping only gives a window
A phone connected to the tower on Elm Hill at 23:10, then to the tower at the harbour at 23:41. Nothing was logged between them. Investigators want to know where the phone's owner, Kerem, was at 23:25.
**Wants:** To say that at 23:25 Kerem was somewhere between the two, without pretending to a position or a moment the logs never gave.

### 565 · Smart-home log against a witness
A smart lock logged the front door unlocking at 18:32. The neighbour, Fatma, says she heard the door at "about half past six, maybe a bit after." The thermostat log shows the heating turned on at 18:30.
**Wants:** To see the three items sit together, the lock exact, the neighbour approximate, the heating exact, and check they agree.

### 566 · Fitness tracker shows a heartbeat at death
A smartwatch shows Levent's heart rate falling to zero at 03:12. His sister says she spoke to him by phone at 03:20. The watch may have come off his wrist earlier.
**Wants:** To hold the contradiction, and to record that the watch reports when it stopped sensing, not necessarily when the man died.

### 567 · Body temperature estimate with wide error
A body is found at 07:00 in a room at 16 degrees. The rectal temperature is 29 degrees. A rule of thumb gives an estimate of death 8 hours earlier, with an error of plus or minus 3 hours.
**Wants:** To get "between about 20:00 and 02:00" as the time of death, marked as an estimate, and not confuse it with the found-at time which is exact.

### 568 · Rigor and cooling disagree
A body found at 06:00 has full rigor mortis, suggesting death 8 to 12 hours before. The cooling calculation says 4 to 6 hours before. The room heater had been on.
**Wants:** To keep both estimates, see that they do not overlap, and record that the heater is the likely reason so the cooling estimate can be discounted.

### 569 · Stomach contents narrow the window
The examiner finds a partly digested meal in the stomach. The restaurant receipt says the meal ended at 19:20. Digestion state suggests death 2 to 4 hours after eating.
**Wants:** The meal time, exact, to move the time-of-death window to about 21:20 to 23:20, and to combine that with the cooling window.

### 570 · One new fact shrinks many ranges
Five people give vague times for a party: "around ten," "after midnight," "before the cake," "when the band left," "about an hour after dinner." Then a photo with a phone stamp of 22:41 is found showing the band leaving.
**Wants:** The single exact fact to tighten all the ranges that depended on the band leaving, without redoing the work by hand.

### 571 · A key witness retracts
Ayşe told police she saw the defendant at the bus stop at 22:00. Three weeks later she retracts, saying she was mistaken about the day. Two other timelines were built on her statement.
**Wants:** To withdraw her statement and see exactly which conclusions depended on it, without deleting the fact that she once said it.

### 572 · Correcting the past after the fact
The police timeline said the alarm sounded at 01:10. The alarm company's server log, delivered a month later, shows 01:04. The old timeline was used in a court filing.
**Wants:** To change the alarm time and still be able to see what the earlier version was and when it was replaced.

### 573 · Witness memory as a story, not a schedule
Tuncay describes the evening: "I got home, made tea, the news started, then I heard the shout." He cannot give any hour.
**Wants:** To record his account as a sequence of things with order and rough neighbours in time, and later attach hours if they turn up.

### 574 · Two witnesses give opposite orders
Witness A says the shot came before the scream. Witness B says the scream came before the shot. A doorbell camera recorded a sound but not which one.
**Wants:** To keep both orders as competing accounts, mark them as impossible together, and let a later recording pick one.

### 575 · Wound counts that shift with a second examination
The first autopsy counted 20 wounds; a second examiner found 23 after cleaning the body. The estimated duration of the attack was based on 20.
**Wants:** The duration to be recomputed from 23, with the old figure still viewable as the earlier result.

### 576 · Ranges that must not be added like exact numbers
The attacker stabbed for 60 to 100 seconds, then washed for 3 to 5 minutes, then left. A neighbour says the whole thing was over in under 5 minutes.
**Wants:** To see whether the neighbour's claim fits, given all three ranges together.

### 577 · Skid marks to seconds before impact
A car left 38 metres of skid marks on dry road before hitting a wall. The reconstructor estimates 50 to 60 km/h at braking start. The driver's phone shows a text sent 4 seconds before the crash.
**Wants:** The time from brake start to impact as a range from distance and speed, and to check that the text came before braking began.

### 578 · Milliseconds inside a crash
A dashcam records 30 frames per second. It shows the truck's brake lights at frame 412, the pedestrian entering the crossing at frame 405 and the impact at frame 450. The dashcam clock is set only to the second.
**Wants:** The order and the gaps in milliseconds between the three moments, even though the absolute time is known only to the second.

### 579 · Black box and cockpit voice recorder disagree
An aviation investigation has a flight data recorder with times in flight seconds, and a voice recorder with its own time base. The captain's line "pull up" appears 12.4 seconds before the stall warning on one, and 11.9 seconds before on the other.
**Wants:** To line the two recordings up by a shared event, record the leftover disagreement, and not force it to zero.

### 580 · Air traffic radar and aircraft clock
The aircraft's own recorder shows a turn at 14:03:20 by its clock. Radar shows the turn at 14:03:41 by the radar clock. The two clocks were last checked at different times.
**Wants:** To see the turn as one event with two observations, with a stated uncertainty on each.

### 581 · Server clocks disagree during an outage
In an outage review, the load balancer log shows the request at 10:00:02.400, the app server logged receiving it at 10:00:02.150, and the database logged the query at 10:00:02.900. The app server clock is known to run about 300 ms slow.
**Wants:** To apply the known offset to one machine's log and see that the request order now makes sense.

### 582 · Cause appears to come after its effect
In a postmortem, a cache reply is logged 80 ms before the request that caused it. Both machines claim to sync to a time service, but one lost sync at 09:12.
**Wants:** To flag that the order in the logs is impossible and mark the log times of the drifting machine as unreliable from 09:12.

### 583 · Leap second in the middle of an incident
A service failed at 23:59:60 on the day a leap second was inserted. Some machines logged it as 23:59:59 twice, some as 00:00:00.
**Wants:** To place the failure in a single order across machines despite the repeated or missing second.

### 584 · An incident with no timestamps at all
The paper notes from a factory fire only say: "alarm sounded, then Ahmet left, then the second alarm, then the power went out, then the fire brigade arrived." There are no times.
**Wants:** To keep this as an ordered story and later slot it against the fire brigade's radio log when that arrives.

### 585 · Historical date "c. 1450"
A chronicle says the printing house was set up "about 1450." Another source says it was operating "by 1455." A third says the founder died "before the great flood."
**Wants:** To store each date with the kind of vagueness it has and see how they constrain each other.

### 586 · During the reign of a ruler
A charter is dated only "in the reign of King Aldric." The reign is dated from 1102 to 1127, but one source says he was only crowned in 1105.
**Wants:** The charter to inherit a range from the reign, and that range to change when the reign's dates change.

### 587 · Before the fire
A town record says a bridge was built "before the fire." Another says a mill was built "after the fire." The fire's year is unknown.
**Wants:** To put the bridge, the fire and the mill in order and let the fire act as a landmark, even without a year.

### 588 · Conflicting chronicles
Chronicle A says the siege lasted 40 days and ended in autumn. Chronicle B says it began in spring and ended after 90 days. Both name the same commander.
**Wants:** To record both accounts side by side, see the contradiction in length and season, and not silently merge them.

### 589 · Julian and Gregorian dates in old records
An English parish register dates a baptism to 3 March 1651. A Continental letter refers to the same event as 13 March 1651. A third record starts the year on 25 March.
**Wants:** To place all records on one comparable scale, keeping what each source actually wrote.

### 590 · Two rulers each claimed to be first
Two dynasties each say their founder was the first king of the region. One list dates the founding to 650, the other to 640. Archaeology finds nothing that settles it.
**Wants:** To hold both "first" claims without ranking them and see what depends on each.

### 591 · Regnal year dating
A clay tablet is dated "year 7 of King Ur-Nammu." Another is dated "year 3 of King Shulgi." The gap between the two reigns is disputed.
**Wants:** The tablets to be ordered by the reigns, with the distance between them shown as uncertain rather than hidden.

### 592 · Layers in a dig
An excavation records: layer C lies under layer B, a pit cut through B and C, a wall sits on top of B, and a later floor covers the wall. No dates.
**Wants:** The relative order of all of these to be derived and shown, including which things are older than which and which are unrelated.

### 593 · A pit that cuts through layers
A pit is found cutting through layers B and C and filled with rubbish that contains a coin. The coin is from 1780.
**Wants:** To say that the pit, and therefore everything younger than the pit, cannot be older than 1780, and see that pass to layers that lie above it.

### 594 · Two trenches that cannot be compared
Trench 1 has layers A, B, C. Trench 2 has layers X, Y. Nothing shows how they connect.
**Wants:** To keep two separate orders without inventing a link, and connect them later when a shared find appears.

### 595 · Radiocarbon range
A charcoal sample from layer B gives 1230 to 1290 CE at 95 percent probability. A sample from layer A above it gives 1260 to 1330 CE.
**Wants:** To use the fact that A is above B to narrow both ranges where they overlap.

### 596 · Radiocarbon plateau
A sample is dated to 800 to 400 BCE, a wide range because the calibration curve is flat there. A stray inscription in the same layer names a king known to reign around 600 BCE.
**Wants:** The inscription to narrow the sample's range and to show why the range was wide in the first place.

### 597 · Old wood problem
A beam dated by tree rings to 1140 was used in a building whose documents suggest construction in 1190. The beam might have been reused.
**Wants:** To keep the beam's felling date separate from the building's date, with the second not earlier than the first.

### 598 · Geological deep time
A rock formation is dated to 66 million years ago, with an error of 0.1 million years. Below it lies a layer 252 million years old, plus or minus 0.3 million. A researcher asks how long the gap between them was.
**Wants:** A duration in the hundreds of millions of years with its uncertainty carried through, alongside the previous cases measured in seconds.

### 599 · Mass event across millions of years
An extinction is spread over 60 000 to 200 000 years, and within it a volcanic eruption phase lasted an unknown time. A researcher wants to say the eruption began before the extinction peaked.
**Wants:** To state order between two spans without either having a defined start or end.

### 600 · Unit mixing at extreme scale
A paper lists a fossil's age in millions of years, the sediment layer thickness in metres and the deposit rate in millimetres per thousand years. The reader asks how long the layer took to form.
**Wants:** A duration calculated from thickness and rate, with the uncertainties shown, without confusing years and millions of years.

### 601 · Genealogy: birth "about 1820"
A family tree has Osman Yıldız's birth as "about 1820" from a census listing him as 30 in 1851. His marriage record in 1845 gives his age as 26.
**Wants:** The birth to be a range consistent with both records, and to see that the two ages point to slightly different years.

### 602 · Baptism before birth is impossible
A parish record shows a baptism on 4 May 1802 for a child whose birth is recorded as 9 May 1802, in a family tree copied from another site.
**Wants:** The impossible order to be flagged and traced to the source, without deleting either record.

### 603 · Baptism date used for birth date
A genealogist has a baptism date of 12 June 1765, and knows infants were usually baptised within a week or two of birth in this parish.
**Wants:** The birth to be an estimate of a few days to two weeks before the baptism, marked as an inference, not a recorded fact.

### 604 · Two people with the same name
Records mention "Ali Demir, weaver, married 1830" and "Ali Demir, farmer, died 1841." The village had two men of that name, or one who changed trade.
**Wants:** To keep both possibilities open and see how each choice changes the timeline of the family.

### 605 · Child born nine months after a death
A record shows the father died on 2 January 1855 and the child was born on 19 November 1855. This is possible but tight.
**Wants:** To check the gap against ordinary limits and to be warned when a claim strains them.

### 606 · Medical history from memory
Patient Zeynep tells a doctor: "The rash started sometime last summer, the fever came a few weeks later, I had the surgery in autumn, and the cough has been going on since before the surgery."
**Wants:** These to be entered with approximate times and correct order, and the doctor to see the constraints.

### 607 · Doctor's note overrides memory
Zeynep remembers the surgery as in October. Her hospital record shows it on 14 September.
**Wants:** The record to replace the memory as the anchor, with everything that was placed relative to the surgery moving with it.

### 608 · Privacy of a victim's medical record
An investigator has a victim's clinic visit dates, which help date an injury, but the family has not consented to sharing them with the wider inquiry team.
**Wants:** For the timeline to be usable by most people while the private items are hidden or blurred, without breaking the order they establish.

### 609 · Privacy of a witness
A witness who saw the crash asks that her name and home address are not shared with the defence, but her sightings must still be part of the timeline.
**Wants:** The time and order of her observation to be visible while who made it is protected.

### 610 · Journal memories without dates
A retired teacher, Nermin, writes a memoir. She remembers: "the flood was the year I started teaching, my sister married two summers before my first child, and the flood came after the wedding."
**Wants:** To place her life events relative to each other and let dates appear when one of them can be fixed.

### 611 · Anchoring memory to a public event
Nermin recalls that she heard the news of a moon landing while at her aunt's house, and the wedding was two summers before that.
**Wants:** The moon landing date, a known fixed point, to set the whole chain of her memories in calendar time.

### 612 · Insurance claim with a fuzzy loss time
A homeowner, Dilek, files a claim: the burst pipe happened "some time between leaving for holiday on 3 July and returning on 17 July." The water meter shows a spike beginning at about 11 July.
**Wants:** The meter reading to narrow the loss window, and a check whether it falls inside the policy period.

### 613 · Insurance claim: policy starts the day after
A theft is reported as discovered on 12 May. The policy began on 10 May. The thief could have come any time in the previous three weeks.
**Wants:** To see what fraction of the possible theft window lies inside the policy and what would resolve the question.

### 614 · Storm damage before or after a repair
A roof was repaired on 20 September. A storm hit the region between 14 and 22 September. A photo of the damaged roof has no date.
**Wants:** To see that the damage may have come before or after the repair, and what evidence would tell them apart.

### 615 · Estimate that later becomes exact
Investigators first say the fire started "around 3 a.m., give or take an hour." Then an internet doorbell recording shows the first flames at 02:37:12.
**Wants:** The estimate to be replaced by the exact time, and to see what the estimate used to be.

### 616 · Estimate that turns out wrong
Investigators say death occurred 8 to 12 hours before discovery. A grocery receipt found in the victim's pocket shows a purchase 3 hours before discovery.
**Wants:** The estimate to be contradicted openly and the conclusions built on it to be flagged.

### 617 · Confidence differs between statements
One statement says "definitely before noon." Another says "I think it was before noon, but I might be mixing up days."
**Wants:** To record how sure each witness was, next to what they said, without turning that into a number nobody asked for.

### 618 · The same event reported by three sources with three clocks
A door slam is heard by a neighbour (approximate), captured by a microphone on a phone (phone clock) and logged by a door sensor (hub clock, known to be 5 seconds slow).
**Wants:** One event with three observations, and a best combined time that shows the spread.

### 619 · Phone clock set by hand
A suspect's phone clock was set manually and is 11 minutes behind the network time. Its photos carry those stamps.
**Wants:** The photos to be corrected by the offset, and the correction to be visible on each so nobody mistakes it for the original.

### 620 · Daylight saving switch during the night
A crime is said to have happened at 01:30 on the night clocks went back. That local time happened twice.
**Wants:** To say which of the two 01:30s is meant, or to leave it open if nobody can tell.

### 621 · Evidence recorded in local time abroad
A ship's log, kept in the ship's local time, and a port authority's log in UTC, describe a collision. The ship crossed a timezone boundary that evening and moved its clocks at an unrecorded moment.
**Wants:** To put the collision at one instant with the uncertainty from the clock change.

### 622 · Sunrise as a clock
A witness says the shots came "just as it started getting light." The place and day are known.
**Wants:** To turn "getting light" into a window from known sunrise and twilight, and mark it as derived from natural events.

### 623 · Moon phase as a clock
A diary entry says the attack happened "under a full moon," without a date. The year is known to be 1893.
**Wants:** To narrow the date to the few nights that year when the moon was full.

### 624 · Duration claimed by a witness
A witness says the argument in the flat "went on for maybe ten minutes." Noise complaints logged at 22:05 and 22:40 mention shouting.
**Wants:** To see that the log suggests the noise could have lasted longer than the witness said and to keep both figures.

### 625 · Overlapping alibis
Two suspects give each other alibis: Suna says she was with Tolga from 20:00 to 23:00, and Tolga says he was with Suna from 21:00 to midnight. The crime was at 22:30.
**Wants:** To see that the alibis overlap over 21:00 to 23:00, and that each depends on the other's word.

### 626 · An alibi that depends on a retraction
The alibi for a man, Ercan, relied on a colleague who said they were in a meeting from 14:00 to 15:30. The colleague later says the meeting was cancelled and they only had coffee at 15:00.
**Wants:** The alibi to shrink to what is still supported, and the retraction to be recorded without erasing the original statement.

### 627 · Sequence with a gap that matters
A timeline of a hospital patient shows medication given at 08:00, next recorded check at 14:00, and a collapse at 11:00 reported by a family member but not in the chart.
**Wants:** The unrecorded collapse to be placed inside the six-hour gap, flagged as unrecorded by the hospital.

### 628 · Everything relative to one unknown
A hunting party's members say: "the deer appeared, then we fired, then we heard the second shot, then we found the body." No one knows when the deer appeared, but the coroner says the man died within minutes of being shot.
**Wants:** Once the coroner's estimate fixes one event, the rest to be placed relative to it.

### 629 · The "last seen" and "first found" bracket
The missing hiker, Yiğit, was last seen alive at the trailhead at 09:15 on Saturday and found at 16:00 on Monday. A phone with no signal recorded a fall alert at some unknown time.
**Wants:** The bracket between last seen and found, with sub-events, as narrower windows arrive.

### 630 · Reconstruction that changes after a new witness
A traffic accident timeline was built from two drivers' statements. A delivery cyclist, Bora, comes forward, saying he saw one car run the light before the other braked.
**Wants:** To add his sighting, watch the order change, and see which earlier conclusions are now in doubt.

### 631 · Conflicting evidence that cannot all be true
A shop's receipt shows a sale at 15:02 to the accused; a bank logs the accused's card being used in another city at 15:00; a court has a photo of the accused at the shop at 15:05.
**Wants:** The three to be held together, flagged as impossible together, and each traceable to its source.

### 632 · Same moment, different level of detail
A prosecutor's timeline treats "the fight" as one event of 5 minutes. The defence's timeline breaks it into 14 moments with the accused entering only at the eleventh.
**Wants:** Both views to coexist so one can zoom in on what the other treats as a single event.

### 633 · Sharing a reconstruction and keeping doubts
A police analyst hands a reconstruction to a court. Some times are exact, some derived from estimates, some resting on one witness.
**Wants:** The recipient to see which times are exact and which are estimates, and where a time rests on a single source.

### 634 · A timeline rebuilt from a stranger's notes
An archivist inherits a dead detective's notebook with entries such as "after the phone call," "same day as the funeral," "Tuesday?" and "two weeks after Ilker left."
**Wants:** To capture the notebook's relations and doubts as written, including the question mark, and see what can be pinned down.

## Calendars, clocks and recurrence

### 635 · Feb 29 birthday in a non-leap year
Deniz was born on 29 February 2016. In 2027 there is no 29 February. Her family disagrees: her mother celebrates on 28 Feb, her father on 1 March. A reminder set for "her birthday" fires on neither.
**Wants:** to see the birthday land on a day of her choosing each non-leap year, and on the real 29 Feb in leap years, without deciding it separately every time.

### 636 · The 31st in a 30-day month
Kemal's rent is due on the 31st. April, June, September and November have 30 days; February has 28 or 29.
**Wants:** to say what should happen in short months (last day, first of next month, skip) and have that respected each year, not only the months with 31 days.

### 637 · Spring-forward gap at 02:30
In Berlin on 28 March 2027 clocks jump from 02:00 to 03:00. Ece has a daily 02:30 medication reminder.
**Wants:** the reminder to still happen that day, at a time she can predict, and not be dropped or doubled.

### 638 · Autumn overlap at 01:30
In New York on 7 November 2027, 01:30 happens twice. Sam's server backup is scheduled for "01:30 local". It ran twice and overwrote the first backup with a half-finished one.
**Wants:** to say whether he means the first, the second, or both, and to tell the two apart when reading history.

### 639 · Daily 09:00 meeting across DST
A team in London has a 09:00 stand-up every weekday. A colleague in Phoenix (no DST) sees it as 02:00, then 01:00, in different months.
**Wants:** each person to see the meeting at the time that is right for the rule it was made under, with the London people always at 09:00 local.

### 640 · Same recurrence pinned to UTC
Leyla created a weekly "16:00 UTC" call. After the clocks changed in her city, the call moved from 17:00 to 18:00 on her wall clock. She meant "16:00 where I live".
**Wants:** to be able to express the difference between "same instant on the world clock" and "same hour on my wall clock".

### 641 · Timezone rule changes retroactively
A country announces in March that its DST began three weeks earlier than previously recorded. Ahmet's records for those three weeks show 14:00 meetings that now happened an hour off.
**Wants:** old entries to stay truthful about what was recorded, while showing what the corrected time would have been.

### 642 · Country abolishes DST with two weeks notice
A government announces it will stay on summer time permanently, effective in 12 days. Selin has 400 future appointments in that country.
**Wants:** appointments made as "10:00 there" to stay at 10:00 there, and appointments made by someone abroad as fixed instants to be visibly flagged as shifted.

### 643 · A day that never happened
Samoa skipped 30 December 2011. Tomas has a yearly reminder on 30 December and a birth record for that date in another calendar.
**Wants:** a way to see that the day is missing for that place, and what happens to things scheduled on it.

### 644 · Two servers, two timezones, one midnight
A server in Tokyo and one in Los Angeles both run a "daily report at midnight". At 23:30 Los Angeles time the Tokyo one already believes it is the next day. A report is generated twice for one date and never for another.
**Wants:** both to agree on which day a report belongs to.

### 645 · Two servers, two calendars
A Saudi server counts days by Umm al-Qura Hijri, an Indonesian server by local moon sighting. For Ramadan 2027 they disagree by one day on the first fast.
**Wants:** each to show its own answer and to be told they differ, rather than one overwriting the other.

### 646 · Hijri month starts on moon sighting
Zeynep asks when Ramadan begins next year. Astronomers say the crescent is not visible on the 29th; the committee decides only on the evening before.
**Wants:** an answer now that says "expected on X, could be X+1", and an update to firm when the sighting is announced.

### 647 · Regions disagree on Eid
Turkey, Morocco and Malaysia announce Eid on three different days. A global family group wants one "Eid dinner".
**Wants:** each member to see the date for their own region and to see that the others differ.

### 648 · Hijri month with 29 or 30 days
Bilal's Islamic-calendar anniversary is the 30th of Safar. Some years Safar has only 29 days.
**Wants:** to choose what happens then, and to see which years fell back.

### 649 · Hijri day begins at sunset
A Hijri date changes at sunset, not midnight. Hasan is told "the 1st of Rajab" applies from Tuesday evening. A dinner at 21:00 Tuesday is on the 1st by Hijri and on Tuesday's date by Gregorian.
**Wants:** the dinner to be reported on both without a contradiction.

### 650 · Umm al-Qura versus tabular Hijri
An app shows 15 Shaban as Friday; a printed calendar using arithmetic rules shows Saturday. Both are called "Hijri".
**Wants:** to know which variant each date is in, and to see them as two different calendars, not an error.

### 651 · Sabbath from sunset to sunset
Rivka observes Shabbat from Friday sunset to Saturday nightfall. In Tromsø in June the sun does not set. In Jerusalem the time shifts by minutes each week.
**Wants:** the start and end each week to be right for her place, and a stated rule for places where the sun does not set.

### 652 · Prayer times move daily
Yusuf's five daily prayers follow the sun. Fajr in Istanbul is 04:12 in June and 06:40 in December. A recurrence "every day at Fajr" is used for an alarm.
**Wants:** each day's alarm at that day's real Fajr time, and the choice of calculation method he follows kept.

### 653 · Fajr when twilight never ends
At 65 degrees north in summer, Fajr and Isha by standard angles never occur.
**Wants:** a stated fallback that the user chose, and not a silent gap.

### 654 · Jewish leap month
Noa's father died on 20 Adar, in a Hebrew year with no Adar I. In a leap year there are two Adars. She observes the memorial yearly.
**Wants:** to say which Adar in leap years and have it followed every year.

### 655 · Hebrew birthday against the Gregorian one
David's bar mitzvah is on his Hebrew birthday, 13 years on. The Hebrew date falls on a different Gregorian date each year, between mid-September and mid-October for a Tishrei birth.
**Wants:** the Gregorian date for a specific year, and a way to see the shifting drift.

### 656 · Hebrew month lengths that change
Cheshvan and Kislev can have 29 or 30 days depending on the year. A "30 Kislev" event does not exist in some years.
**Wants:** the event to behave as declared in those years.

### 657 · Orthodox and Western Easter
Katya and her husband Martin celebrate Easter on different days: 2027-05-02 for Orthodox, 2027-03-28 for Western. Their kids' school holidays follow the Western one.
**Wants:** both dates in one place, each attributed to its church, and neither treated as an error.

### 658 · Julian date and its Gregorian mapping
A Russian church records Christmas on 25 December Julian, which is 7 January Gregorian in the 20th and 21st centuries but 6 January in the 19th.
**Wants:** the correct mapping for each century, so historical dates land on the right day.

### 659 · Countries that switched calendars at different times
An archive holds a letter dated 2 September 1752 from London and one dated 2 September 1752 from Paris. Britain had eleven days removed that month; France had switched in 1582.
**Wants:** the two letters ordered by real time, and missing days in September 1752 to be rejected for England.

### 660 · Year that begins on 25 March
An English record from 10 February 1700 is written "1699" in the local custom, because the year began on 25 March.
**Wants:** the record shown under the correct year in both conventions.

### 661 · Chinese lunisolar leap month
Wei's grandmother's birthday is on the 5th of the 4th month. In 2028 there is a leap 4th month.
**Wants:** to say whether the celebration is in the regular month, the leap month, or both, and have that persist.

### 662 · Chinese New Year date moves
Chinese New Year is on 29 January 2025 and 17 February 2026. A shop closes for 7 days from it every year.
**Wants:** the closure to move with the lunar date without a manual entry.

### 663 · Chinese solar terms
A farm plans planting "on Qingming", one of the 24 solar terms that fall on the 4th or 5th of April.
**Wants:** the term to be found by the sun's position and not by a fixed Gregorian day.

### 664 · Nowruz at the equinox moment
Nowruz begins at the instant of the vernal equinox, which in 2027 is at 20:25 UTC on 20 March. In Tehran (UTC+3:30) that is 23:55; in Kabul it is the next day.
**Wants:** the moment, and the New Year to fall on the right day in each place.

### 665 · Persian calendar leap year
The Solar Hijri calendar is not a four-year cycle; 1403 was a leap year and 1399 was as well, five years earlier. Parisa's birthday is 30 Esfand.
**Wants:** the birthday to work in non-leap years and the leap years to be correct against astronomical rules.

### 666 · Ethiopian thirteenth month
Abebe was born on 5 Pagume (the short 13th month), which has five days, or six in a leap year. His Gregorian friends ask when his birthday is.
**Wants:** to see both dates for any year, and to ask for the 13th month without a workaround.

### 667 · Ethiopian year offset
The Ethiopian year 2019 started in September 2026. A form asks for a year and Abebe enters 2019.
**Wants:** the system to know which calendar the number belongs to, and not read it as year 2019 Gregorian.

### 668 · Ottoman Rumi calendar
A 1908 Ottoman tax ledger has an entry for 1 Mart 1324. The Rumi year began on 1 March, its numbering runs 584 behind Gregorian until 1917, and it later turned into a different mapping.
**Wants:** the entry to convert to the correct Gregorian date and be shown with its original date.

### 669 · Ottoman Hijri and Rumi in one document
A firman is dated by Hijri; the accounts attached to it by Rumi.
**Wants:** both dates lined up against the same real day.

### 670 · Turkey's time: permanent +03
Turkey stopped DST in 2016 and stays on +03 all year, though earlier records used +02 and +03 seasonally. A 2014 photograph is stamped 14:00 local.
**Wants:** the 2014 record to be read with the rules of 2014, not today's.

### 671 · ISO week 53
Some years have 53 ISO weeks. 2026-12-31 falls in week 53 of 2026; 2027-01-01 is also in week 53 of 2026. A payroll is set "week 1 of each year".
**Wants:** week 1 to be found correctly and the days at the year edges to be attributed to the year the week belongs to.

### 672 · ISO week-year versus calendar year
A report for "2027" includes 1-3 January 2027 belonging to ISO week-year 2026. Another group excludes them.
**Wants:** to see which week-year system produced each report so they can be reconciled.

### 673 · Weeks that begin on different days
The US treats Sunday as day one of the week, ISO says Monday, and many countries start on Saturday. A weekly goal set by a user in Cairo resets on Saturday; a teammate in Berlin sees it reset on Monday.
**Wants:** each to see the week as they define it and shared totals to be reconciled.

### 674 · Fiscal year not on January
Osman's company has a fiscal year from 1 July to 30 June, named after the year it ends. FY2027 runs from 1 July 2026.
**Wants:** dates to find their fiscal year and quarter, and for the name to follow the company's convention.

### 675 · 4-4-5 retail calendar
A retailer's year is 52 weeks in quarters of 4, 4 and 5 week months, and every 5 or 6 years adds a 53rd week. Mia asks for "last week of the fiscal year" in 2028.
**Wants:** the extra week to be placed correctly, and her sales to compare like with like.

### 676 · Fiscal month that starts on a Saturday
A fiscal month ends on the last Saturday of the calendar month. The 2027 January period ends on 30 January and the next begins on the 31st.
**Wants:** a date to belong to only one period, with nothing in between.

### 677 · School terms with different names
A university has an autumn term of 14 weeks, a spring term of 15, and a summer school of 6, and a public holiday inside each. A student planner wants "week 3 of autumn".
**Wants:** that to resolve to a real date range each year that changes with the academic calendar.

### 678 · Academic year spans two Gregorian years
The 2026/27 school year starts 1 September 2026 and ends 30 June 2027. "Year 2027" in the school's records means different things to admissions and to accounting.
**Wants:** both meanings to be kept apart.

### 679 · Mars sol
A rover team works to Mars solar time: a sol is 24 h 39 min 35 s. Their shifts drift against the Earth clock by 39 minutes daily. A meeting is "at 09:00 sol time" every sol.
**Wants:** the meeting to appear on Earth clocks at drifting times, and the team to see wall time on both worlds.

### 680 · Sol-day count and Earth-day count disagree
On sol 100 of a mission, the Earth date is one thing; on Earth day 100 the sol is 97. A report says "day 100".
**Wants:** the number to tell which kind of day it means.

### 681 · Ship's watches
A ship keeps watches of four hours, and a dog watch of two, so the number of watches per day is seven. A crew rotation "every third watch" needs to run for a week.
**Wants:** the rotation to cycle correctly, even though the day does not divide evenly.

### 682 · Game world with a moon-based calendar
A fantasy game has three moons cycling at 8, 13 and 21 days. An event happens when all are full.
**Wants:** the next time this happens to be found, even if it is thousands of years away, and shown with its uncertainty as the game changes.

### 683 · Every last Friday
Ilker's club meets on the last Friday of every month. In some months there are four Fridays; in others five.
**Wants:** the meeting on the final Friday each time.

### 684 · Third Monday
A holiday is the third Monday of January. In 2027 January 1 is a Friday, so the first Monday is the 4th.
**Wants:** the correct date each year (the 18th), including years where the month begins on a Monday.

### 685 · Fifth Friday that doesn't exist
Nadia's group meets on the "5th Friday of the month". Only four months in 2027 have one.
**Wants:** the meeting only on those months, and a clear statement that other months have none.

### 686 · Years ending in 0
A plant holds a big inspection in every year ending in 0.
**Wants:** 2030, 2040, 2050 and so on, indefinitely.

### 687 · Every 2 years, starting from a leap day
An insurance renewal is every 2 years from 29 Feb 2024.
**Wants:** the day each renewal falls on, since 2026 and 2028 differ.

### 688 · Every 4 years on 29 Feb
A recurrence tied to 29 February every four years meets 2100, which is not a leap year, and 2400, which is.
**Wants:** 2100 to be skipped or handled as declared, and 2400 included.

### 689 · Every 400 years
A monument society commemorates every 400 years from the founding in 1626.
**Wants:** the next date, 2026, and later ones, on the right day.

### 690 · Next business day if weekend
A payment due on the 15th moves to the next business day when the 15th is on a weekend, and again if Monday is a holiday. In one month, the 15th is Saturday and Monday 17th is a bank holiday.
**Wants:** the payment on Tuesday the 18th, while the following month's payment is still due on its own 15th, not shifted from the 18th.

### 691 · Moved instance of a recurrence
A weekly Thursday class is moved once to Friday. The next Thursday should stay.
**Wants:** only that one occurrence moved, without changing the rest.

### 692 · Deleted single occurrence
Jonas cancels the third occurrence of a weekly meeting. Later he changes the time of the whole series.
**Wants:** the cancelled occurrence to stay cancelled after the series changed.

### 693 · Editing "this and all future"
Ada changes the room for a weekly class from 1 March onward. Earlier weeks keep the old room.
**Wants:** the past unchanged and the future new, with the history readable.

### 694 · Exception on a date that no longer exists
A rule "every 12th except 12 December 2027" and later the user moves the base rule to "every 13th".
**Wants:** to be told what happens to the exception.

### 695 · Recurrence with a count across DST
"10 occurrences, daily at 02:30" begins on 25 March 2027 in Berlin. One of the days has no 02:30.
**Wants:** to know whether the count of 10 includes the missing day.

### 696 · Until date in a different timezone
A series ends "until 31 December 2027 23:59". The organiser is in Auckland; an attendee is in Honolulu, where the end is still 30 December.
**Wants:** the final occurrence to be the same for everyone.

### 697 · Recurrence that runs forever
A lighthouse maintenance check is "every 6 months, forever". A calendar view is asked to show the year 9999.
**Wants:** the view to work without listing infinite entries, and to answer "what is the 10,000th check?".

### 698 · Forever series and changing calendar rules
A perpetual charity payment is "every 1 Muharram". Hijri rules change how the year length is computed after a decade.
**Wants:** to know that predicted future dates are predictions, and to see them firm as time approaches.

### 699 · 4-on-4-off shift rotation
A nurse works 4 days on, then 4 off, from 3 October 2026. Her colleague Tarik is on the same pattern but offset by 4 days.
**Wants:** every date to show who is on, including across month boundaries and DST, with no reset at the month end.

### 700 · DuPont 28-day rotation
A plant runs the DuPont rotation: a 28-day cycle with four crews, night shifts, and long rest blocks. A new crew starts on day 15 of the cycle.
**Wants:** each crew's schedule for a year, and a check that no one exceeds the legal hours.

### 701 · Night shift crossing midnight
Rahim's shift is 22:00 to 06:00. It starts on Friday and ends on Saturday. Payroll wants hours per day.
**Wants:** the shift to belong to one date for pay purposes while showing the split by calendar day if asked.

### 702 · Shift on the DST change night
A night shift from 22:00 to 06:00 on the spring-forward night lasts 7 hours; on the autumn one 9.
**Wants:** the true duration to show, and the wall-clock span to show as well.

### 703 · Sunrise-tied recurrence
Ola wants a light to switch on "30 minutes before sunrise" every day in Bergen. Sunrise is 04:00 in June and 09:00 in December.
**Wants:** each day's instant to be right for her latitude, updated when she moves.

### 704 · Sunrise at a place with no sunrise
In Longyearbyen the sun does not rise between mid-November and late January.
**Wants:** the rule to state what happens on those days instead of firing at a wrong time or never.

### 705 · Solstice and equinox events
A garden club meets on each solstice and equinox. The June solstice moves between the 20th and 21st, and by timezone may fall on a different date.
**Wants:** the event on the correct local date in each member's city.

### 706 · Eclipse in the future
A tour company sells a trip for the total solar eclipse of 2 August 2027 and the annular one of 6 February 2027.
**Wants:** the exact local times for each site, given as predictions with a range that narrows over time.

### 707 · Leap second
On the day a leap second is added, the clock reads 23:59:60. A logging system rejects it and another repeats 23:59:59.
**Wants:** the extra second to be a valid moment and events in it to stay in order.

### 708 · Nanosecond precision across clocks
A trading firm stamps events to the nanosecond. Two machines disagree by 300 ns.
**Wants:** the order to be judged with the uncertainty stated, not as false exactness.

### 709 · Estimated versus exact time
Historian Pelin knows a treaty was signed "in spring 1071" and a battle "on 26 August 1071".
**Wants:** to ask what came first and get a valid answer despite the differing precision.

### 710 · Time far in the future
A nuclear waste site records safety inspections every 1000 years for 100,000 years, in a calendar no one may use by then.
**Wants:** dates to be kept meaningful and convertible whatever calendar is in use.

### 711 · Year 10000 and five-digit years
A system prints years with four digits. A geologic project schedules a check for 12026 CE.
**Wants:** the year to be accepted, sorted after 9999 and printed unambiguously.

### 712 · Year zero and BCE
A historian writes 1 BCE, then 1 CE. Astronomers count year 0.
**Wants:** the gap between 44 BCE and 14 CE to be 57 years, and both conventions to be readable.

### 713 · A decade that is not ten years
A game world defines "decade" as 12 years and a "century" as 100 of its years. Users ask for "next decade".
**Wants:** the spans to follow the world's definitions and be mapped to the outside ones.

### 714 · Overlapping calendars on one week
A family runs a Gregorian school calendar, a Hijri religious one and a Chinese one for grandparents. A week contains a school exam, Laylat al-Qadr and a lunar festival.
**Wants:** one view where each event carries its own calendar's date and none is converted away.

### 715 · Same event, calendar disagreement about the year
A person born on 10 Muharram 1400 AH asks their age on 1 January 2027 Gregorian. Hijri years are about 11 days shorter.
**Wants:** an age that is correct in the calendar she chooses, and both are shown.

### 716 · Time-of-day on a non-24-hour day
On the day Lord Howe Island changes clocks, the change is 30 minutes rather than an hour. A rule "every 30 minutes" is running.
**Wants:** the runs to keep to true half-hour intervals and to land on times that exist.

### 717 · Timezone that changes offset mid-recurrence
Paraguay adopted permanent summer time in 2024. Carlos has a yearly appointment on 15 October at 08:00 local.
**Wants:** the appointment to stay at 08:00 local in the years before and after the change, for every year known.

### 718 · Historic local mean time
An 1880 record from Amsterdam gives 12:00 local time, when the city used a local mean time of +0:19:32.
**Wants:** the moment to be placed correctly in UTC, with the offset of that era.

### 719 · Recurring on a day count from a date
A vaccination schedule says "every 28 days from the first dose" and another says "every month". The first dose is 31 January.
**Wants:** both to give clear and different results, and the user to see which is which.

### 720 · Last day of every month
A billing run happens on the last day of each month, including 29 February in leap years.
**Wants:** the 28th or 29th of February as appropriate, and not the 30th or a skip.

## Measuring and analysing time

### 721 · Estimates that are systematically too short
Deniz planned her thesis chapters at 34 days each and finished the last six at 55, 61, 48, 57, 52 and 59 days. She is about to plan chapter seven at 30 days. She wants to know how far off her guesses usually are and to see a corrected forecast next to her own number.
**Wants:** Her 30-day plan shown beside a forecast based on how her past guesses compared to reality, with the size of the past gap visible.

### 722 · Best case and worst case both wrong
Kaan wrote "best case 27 days, worst case 49 days" for a report. The report took 56 days. Over his last ten reports, the actual time exceeded his own worst case seven times. He wants his stated worst cases taken with the right amount of salt.
**Wants:** To see how often his worst-case guesses were beaten, and a range for the next report that reflects that.

### 723 · Confidence claimed versus confidence earned
Selin marks half her estimates "99% sure I finish by then". Of 40 such estimates, 18 were met. She wants to know what her "99%" really means.
**Wants:** A plain statement of how often her stated confidence level was met, per level, and future estimates shown with her real hit rate.

### 724 · Bias is different for different kinds of work
Mert underestimates writing by about 60% but overestimates errands by about 20%. Averaged over everything he looks accurate. He asks for one correction for his whole life.
**Wants:** Separate corrections for writing and errands, and a warning that the overall figure hides two opposite habits.

### 725 · Too little history to learn from
Ayla has done her new job's weekly report exactly twice, in 3h and 5h. Her calendar now claims a forecast of "3h50 to 4h10".
**Wants:** The forecast to admit that two samples cannot support a range that narrow, and to show a wider or clearly labelled uncertain one.

### 726 · Haircut forecast from history
Emre has had 14 haircuts: 25 to 40 minutes, once 65 when the barber was short-staffed. He is booking the next one and wants to know how long to block.
**Wants:** A range like "25 to 40 minutes, occasionally longer" with the outlier acknowledged rather than dropped or averaged in.

### 727 · The average that nobody experiences
Berk's commute is 22 minutes on 80% of days and 70 minutes on the 20% of days with a bridge closure. The average is 31.6 minutes, which has never happened once.
**Wants:** To see the shape of his commute times, two clumps rather than one number, and to plan around the right one.

### 728 · The 90th percentile commute
Zeynep must never be late to her shift. Her commute over 200 days has a median of 34 minutes and a 90th percentile of 51. She wants to leave early enough to be on time nine days out of ten.
**Wants:** The departure time worked out from the 90th percentile, and the ability to ask for 95th or 99th instead.

### 729 · Percentiles of percentiles do not add
Cem's morning has three steps, each with a 90th-percentile time: shower 12 min, breakfast 20, walk 25. The sum, 57 minutes, is far more than his actual 90th percentile for the whole morning, which is 44.
**Wants:** The morning's realistic worst case shown as it really behaves over past mornings, not as the sum of each step's worst case.

### 730 · Ranges multiplied
A dentist estimates one filling at 20 to 30 minutes and today's list has 6 fillings. The clinic wants to know when the last patient leaves.
**Wants:** A finishing time as a range whose width honestly reflects six uncertain jobs, not six times the width of one.

### 731 · Short tasks hidden by rounding
Nil logs "about 4 seconds" for each of 20 badge scans per hour and wants a daily figure. Her tracker rounds each to the nearest 5 seconds, giving 0 seconds a day.
**Wants:** A daily figure of roughly 80 seconds per hour with the spread from rounding acknowledged, not zero.

### 732 · Minutes into weeks with a partial week
Ozan tracked from minute level: Monday 6h12m, Tuesday 7h03m, Wednesday to Friday nothing recorded because his phone died. The weekly summary reads "13h15m worked".
**Wants:** The week shown as incomplete, with the three empty days marked as unknown rather than zero.

### 733 · Weeks that straddle two months
Hilal's March has 4 full weeks and 3 days of the next. Her time-tracking report shows 152 hours for "week-based March" and 171 for "calendar-month March". She asks which is right.
**Wants:** Both totals available, clearly named, with the days that make up the difference visible.

### 734 · Which week is week one
Two colleagues compare "week 1" hours for a year that begins on a Thursday. One counts weeks starting Monday with the first four-day week as week 1, the other counts the week containing 1 January. Their yearly totals differ.
**Wants:** Each person's totals to be stated with the week rule used, and a way to compare them on the same footing.

### 735 · A 53-week year
Aslı compares 2026 to 2025 week by week. One of the years has 53 weeks by ISO counting, so week 53 has no partner in the other year.
**Wants:** The extra week shown honestly, not silently dropped or added to the wrong place in the comparison.

### 736 · Month totals of unequal length
Barış worked 168 hours in February and 184 in March and feels he slacked. February has 28 days, March 31.
**Wants:** The comparison to also show per-day rates so he can see he worked the same pace.

### 737 · Hijri versus Gregorian month totals
Fatma prays and volunteers on a schedule tied to Islamic months. Her report shows 41 hours for "Ramadan" but the Gregorian-month report splits those same days across March and April, so neither month looks like Ramadan.
**Wants:** Monthly totals in either calendar, with the same underlying days, and the ability to see Ramadan alone as its own total.

### 738 · Hijri month starts differently by place
Two family members in different countries begin Ramadan on different days because of moon sighting. Their shared "family Ramadan hours" total differs depending on whose calendar is used.
**Wants:** The shared total to say whose month boundaries it is using, and to be recomputable under the other's.

### 739 · Rolling seven days
Kerem looks at the last 7 days of study time each morning. Yesterday it read 31 hours, today it reads 24, though he studied 5 hours yesterday. He is confused by the drop.
**Wants:** To see what left the window as well as what entered it, so a drop is explainable.

### 740 · Rolling window across a gap in data
Pelin wears a sleep tracker. Her 14-day average of sleep is 7h10m, but she forgot to wear it on 6 of the 14 nights.
**Wants:** The average shown with the number of nights it is based on, not presented like a full window.

### 741 · Weekday versus weekend rhythm
Gizem's data over 90 days: weekday wake time 06:50 plus or minus 15 minutes, weekend wake time 09:40 plus or minus 70. A single "typical wake time" of 07:55 fits neither.
**Wants:** Weekday and weekend patterns separated in what she sees.

### 742 · Seasonal drift in sleep
Tolga's wake time has slid 40 minutes later since October, across a winter with later sunrise. He wants to know if it is real drift or the season.
**Wants:** The trend compared to same weeks of previous years so seasonal shift can be told apart from a real change.

### 743 · Only one year of history and it is unusual
Sena moved cities in May. Her first year of data includes a house move, a broken arm and a wedding. She is asked for a "typical month".
**Wants:** Months flagged as unusual so she can choose to exclude them, and a stated warning that one year cannot show seasonality.

### 744 · Waking at 11 when it is usually 7
Burak has woken between 06:45 and 07:15 for 300 days. Today he woke at 11:05. He wants to be told it is unusual, but not woken by a notification about it, and not if he was on a night shift.
**Wants:** The day noted as unusual against his own history, held back when he has said he worked overnight.

### 745 · Anomaly that is really a time zone
Elif flew from Istanbul to Tokyo. The next morning her records show she woke at 01:10. She actually woke at 07:10 local time.
**Wants:** The wake time read as local, not flagged as a crazy anomaly against her Istanbul-hour history.

### 746 · Anomaly that is a clock change
On the last Sunday of October, Ali's sleep tracker shows a night of 9h05m for a person who normally sleeps 8h. The clocks went back one hour that night.
**Wants:** The extra hour recognised as the clock change, not as oversleeping.

### 747 · The day with 23 hours
In March, Yıldız's daily totals sum to 23 hours for the day clocks moved forward. Her time-tracking chart shows a "missing hour" as an unaccounted gap.
**Wants:** The short day treated as short, not as one hour of lost time.

### 748 · The same hour twice
When clocks moved back, Volkan logged a task from 01:30 to 01:50 and another from 01:40 to 02:10, but both 01:30s were the first one and second one, so the end times look before the start times.
**Wants:** Durations correct across the repeated hour, and no task shown as ending before it began.

### 749 · Phone and watch disagree by four minutes
Jale's phone says she started a run at 06:02, her watch says 06:06. Both show the run ending at 06:49 by their own clocks. She wants one duration and one record.
**Wants:** To see that the two sources disagree, and which duration is used, with the other source's version still visible.

### 750 · Devices in different zones logging one event
Onur's laptop is still on the timezone of his last trip; his phone is on local time. His meeting at 15:00 appears at both 15:00 and 12:00 in his data as two meetings.
**Wants:** The two to be recognised as the same meeting and counted once.

### 751 · Server clock jumps backward
A shared family tablet's clock was reset by a firmware update: entries made at 20:10, 20:12 are followed by entries stamped 19:00, 19:02 that were clearly made afterwards.
**Wants:** The later entries not to be counted as earlier, and the disorder shown, not silently sorted into a wrong story.

### 752 · Impossible: task ends before it starts
Hakan's imported spreadsheet has a task that starts at 14:30 and ends at 14:05 on the same day.
**Wants:** The entry flagged as impossible, with his original figures preserved, rather than discarded or shown as a negative duration.

### 753 · Impossible: 27 hours in a day
Sevgi's time tracker, with several timers left running on different projects, shows 27 hours worked on one calendar day.
**Wants:** The day flagged as exceeding what is possible, showing which entries overlap.

### 754 · Two records of one night's sleep
Melis's ring says she slept 6h10m. Her partner-shared bedside sensor says 7h30m. The sleep clinic asks for one number.
**Wants:** Both readings visible with their sources, and her own choice of which is reported recorded as a choice.

### 755 · A pill taken and a pill not taken, both recorded
İrem's tablet reminder log says she took her morning tablet at 08:02. Her pill box sensor says the lid never opened before noon.
**Wants:** The contradiction surfaced instead of one silently winning, and her adherence statistics to say which source they used.

### 756 · Two people's calendars disagree about a meeting length
Mehmet's calendar says the meeting ran 10:00 to 11:00, Aylin's own log says 10:10 to 11:35. The team's total meeting hours must be a single figure.
**Wants:** The disagreement kept visible and the team total to say how it treated it.

### 757 · Overlap: a call during a drive
Taner was on a work call from 09:00 to 09:50 while driving 09:10 to 09:40. His day summary says 50 minutes of calls plus 30 minutes of driving, a total of 80 minutes for a 50 minute span.
**Wants:** Overall time not double counted, while each activity still shows its own total.

### 758 · Double counting one task under two projects
Cansu's hour of code review counts toward both the "Website" project and the "Onboarding" project. A client invoice is built from each project's total, and the sum of projects is 1 hour more than the hours she worked that week.
**Wants:** Each project to show the hour, the weekly total to count it once, and the overlap explained.

### 759 · Meets, not overlaps
Nazlı finishes lunch at 12:30 and starts a meeting at 12:30. Her tool reports "1 minute of overlap" because it treated both boundaries as inclusive.
**Wants:** Back-to-back events shown as touching, not overlapping.

### 760 · One event inside another
Doruk's dinner from 19:00 to 21:00 has, inside it, a phone call from 19:40 to 19:55. His "eating" total is meant to exclude the call, and his "social" total to include both.
**Wants:** Time in the containing event, in the contained one, and in the remainder each calculable.

### 761 · Two events start together and one ends earlier
Ece's yoga class and her wearable's "exercise" period both start at 18:00; the class ends at 19:00, the wearable's period at 18:47. She wants to know if they are the same thing.
**Wants:** The relation between the two described in world terms, that one begins with the other and finishes sooner, not just "overlap".

### 762 · Partial overlap between shifts
Nurse Derya's shift is 19:00 to 07:00. Her colleague Ahmet's is 23:00 to 09:00. The hospital asks how many hours both were on the ward together.
**Wants:** The 8-hour shared span and the hours each was alone, without hand calculation.

### 763 · Gaps between appointments
Barbara has appointments 09:00 to 09:30, 10:15 to 11:00, 11:10 to 12:00. She asks how much of her morning was left unbooked and in what lumps.
**Wants:** The free stretches (45 min, 15 min, 10 min) listed so she can see which were usable.

### 764 · Idle time that is really thinking
An automatic tracker marked Ege as idle from 14:00 to 14:50 because no keys were pressed. He was reading a printed paper and taking notes.
**Wants:** The stretch to be corrected by him after the fact, and the daily totals to update, without hiding that it was corrected.

### 765 · Idle time that is really away
Yusuf's tracker counted a lunch break as 1h40 of "working" because he left an application open with music playing.
**Wants:** Some way for him to say afterwards that he was away, and his weekly working total to change accordingly.

### 766 · Correcting the past changes last month's report
Gül remembers on the 15th that she forgot to log a 3-hour client task from the 4th. She adds it. Her already-sent monthly report for the previous month now disagrees with her records.
**Wants:** To see what the report said when it was sent, what the record says now, and that the difference comes from a late addition.

### 767 · A correction that moves an average
After Levent fixes a mistyped 14-hour day that was really 4 hours, his 3-month average, trend line and best-week ranking all change.
**Wants:** A clear before and after of the statistics, with the correction named as the cause.

### 768 · Backfilled data changes a streak
Tuba had a 22-day exercise streak. She then adds a workout she forgot from 12 days ago, joining two streaks (9 days and 12 days) into one of 22 days.
**Wants:** The streak to update, and to know that it used to say 12 and now says 22 because of the added record.

### 769 · Retroactively changing an estimate
Sinan realises the estimate he wrote for a task last month was actually written after he had already started. He wants his plan-versus-actual accuracy not to count it.
**Wants:** To mark that estimate as unreliable so it is left out of his bias figures, with the exclusion visible.

### 770 · Plan changed before it started
İpek planned a 2-hour task for Monday, replanned it to 3 hours on Sunday night, and it took 2h45. She asks whether she under or overestimated.
**Wants:** Both the first and revised estimates against actual, so she can see whether revising helped.

### 771 · Estimated but never done
Mustafa put 40 tasks in his plan last quarter; 11 were never started, 4 were dropped. His plan-versus-actual accuracy is worked out only from the 25 that finished.
**Wants:** The figures to state that unfinished work is excluded, and how many were, since ignoring them hides the worst underestimates.

### 772 · Task started, abandoned, restarted
Nisan started a report on Monday for 1h20, abandoned it, restarted Thursday for 3h. Her tool calls it two tasks, each with no estimate history.
**Wants:** The report seen as one job with two attempts, total effort 4h20, in the plan-versus-actual figures.

### 773 · Interrupted work versus continuous work
Rıza's 2-hour task actually took 2 hours over 11 sittings, with phone interruptions. His colleague finished the same task in one 2-hour sitting.
**Wants:** To distinguish elapsed time from focused time and to see how many times he was pulled away.

### 774 · Sleep under six hours and the next day
Over 6 months, on days after fewer than 6 hours of sleep, Aras's tasks took on average 20% longer than planned. There are only 17 such days.
**Wants:** The finding shown together with how many days it rests on and how sure it is, not presented as a law.

### 775 · Correlation that is really the calendar
Yasemin sees that she runs 30% late every Monday and also sleeps less on Sunday nights. Both patterns are caused by her Monday planning meeting.
**Wants:** The link to sleep shown as possibly coincidental, and other explanations for Mondays visible.

### 776 · Comparing myself to people like me
Furkan wants to see how his weekly reading time compares to a group of 300 volunteers aged 25 to 34 sharing similar data.
**Wants:** His position in the group's spread, not just the group average, without seeing any person's data.

### 777 · A cohort of two
A neighbourhood study group asks for "average bedtime of people who study after 22:00". Only two members do.
**Wants:** The figure withheld or blurred because it would reveal what those two people do.

### 778 · Privacy leaked by subtraction
A dietician receives weekly eating-hour totals. Aslan also shares his monthly total with his gym. The gym and dietician together can subtract to find the one week not covered, plus his four Sunday fasting hours.
**Wants:** Sharing to consider what recipients can work out by combining what they were given.

### 779 · Privacy leaked by a small difference
Ceren shares her weekly totals with her manager, hiding days. One week her total is exactly 40 hours minus 1h30, and everyone knows she had a doctor's appointment that week of that length.
**Wants:** To know when a total is small enough or specific enough to reveal a single event.

### 780 · Aggregates that change when the past is corrected
Ferhat shared his month's totals with a nutritionist. Two days later he corrected a mislogged meal. The nutritionist's copy is now out of date.
**Wants:** To know the shared figures were superseded and to send the update, and the nutritionist to see that something changed.

### 781 · Revoking access to past data
Nalan shared her running log with a coach for a year, then ended the arrangement. The coach's earlier weekly summaries remain in the coach's records.
**Wants:** Clear understanding of what stops being shared and what cannot be taken back.

### 782 · A calendar heatmap
Sude wants a year-at-a-glance showing how many hours per day she spent on her language practice. Some days were tracked by minute, some only as "morning".
**Wants:** A picture of the year where days with rough or missing data look different from days with exact data.

### 783 · Heatmap dominated by an outlier
One 19-hour hackathon day makes every other cell of Kutay's heatmap look nearly empty.
**Wants:** The outlier visible without flattening the everyday pattern.

### 784 · Export for a researcher
Nurten agrees to give a university study a year of her time-use data. She wants it in a form the researcher can open in ordinary analysis tools, with the precision noted.
**Wants:** An export that keeps ranges, estimates and gaps distinguishable from exact values and does not turn them into false precision.

### 785 · Export loses the meaning of "about"
Tarık's entry "about 20 minutes" exports to a spreadsheet as 20. His analyst later computes standard deviations as if exact.
**Wants:** The export to carry that this figure was approximate.

### 786 · Mixed precision in one month
Melike has minute-level data for 11 days, "morning/afternoon/evening" for 12 days, and only "worked" for 8 days. She asks for her total time spent working on the novel.
**Wants:** A total as a range that reflects the coarse days, not an exact number.

### 787 · Ranges added up
Nihat wrote a week's tasks as "1 to 2 hours", "30 to 45 minutes", "about 3 hours", "2 hours exactly", and "somewhere in the afternoon, maybe 90 minutes". He asks how long the week is.
**Wants:** A total as a range, with the exact, loose and vague contributions all reflected.

### 788 · A prediction that updates as it goes
Pınar is running a marathon planned for 4h10. At 10 km she is 3 minutes behind pace. The finishing forecast on her wrist and the forecast in her life plan disagree.
**Wants:** One updating finishing time everywhere, and to see how it shifted over the run.

### 789 · Live glucose against meal times
Bora's glucose monitor sends a reading every 5 minutes. He wants to know how long after dinner his glucose is above 10 mmol/L. His dinner start is recorded only as "around 19:30" and the monitor dropped signal for 40 minutes.
**Wants:** The duration above threshold as a range that includes the dropout and the vague dinner time.

### 790 · Heart rate, years of it
Reyhan has a heart rate reading every second for 6 years: about 190 million readings. She asks for her resting heart rate trend by month and her worst hour of the last year.
**Wants:** Answers without waiting or hitting a limit, and without losing the ability to zoom into the worst hour at full detail.

### 791 · Sensor with a drifting clock
A cheap sleep sensor gains 90 seconds a day. After a month it is 45 minutes ahead of Sabri's phone, and his "bedtime" trend shows a slow fictional creep later.
**Wants:** The drift recognised and the data corrected against a trusted clock, with the original still available.

### 792 · Sensor gap filled with a guess
Duygu's tracker lost 2 hours of heart rate overnight. Some app fills it with the average of the neighbouring readings. Her nightly resting heart rate now looks smoother than it was.
**Wants:** Filled-in values never mistaken for real readings in later statistics.

### 793 · How long does a habit last
Recep has started and lost a daily meditation habit five times: after 9, 14, 31, 6 and 20 days. He is on day 12 of the sixth try.
**Wants:** From his history, the chance the habit is still going at day 30, and the point at which it typically breaks.

### 794 · Habit that is still going
Aylin has three habits started 40, 90 and 200 days ago and none has broken yet. Her tool computes a "median habit life" of 40 days from the broken ones only.
**Wants:** Habits still running counted properly, not treated as if they had ended today or been ignored.

### 795 · Waiting at the clinic
Tülin's clinic sees 30 patients on Thursday from 08:00 to 16:00. Waiting times range from 4 minutes to 2h10. The manager asks about the wait people face in the 10:00 to 11:00 hour compared to 14:00, and how busy each doctor was.
**Wants:** Waiting time by arrival hour, the worst waits, and the share of each doctor's day spent with patients.

### 796 · Room used but not booked
A meeting room is booked for 40 hours a week but the door sensor shows it occupied for 22, and 6 more hours it was occupied with no booking.
**Wants:** Booked, used and unbooked-but-used time reported side by side.

### 797 · Person over-utilised and under-utilised at once
A team lead is in meetings 34 hours a week, but 9 of those hours are as a listener with no speaking. Her own work needs 30 hours. The week has 40 working hours.
**Wants:** The impossibility of fitting everything shown, with the meeting hours split by how much they needed her.

### 798 · Tracking that changes behaviour
Doğan started logging phone use in January. His use fell from 4h20 to 2h05 per day in the first two weeks, and then crept back. He wonders if the fall is real or a result of being watched.
**Wants:** The trend shown in a way that separates the first weeks of tracking from the settled level.

### 799 · Half a life on paper diaries
Nermin transcribes 1996 to 2010 from paper diaries in which she wrote only bedtime and a note for each day. She wants those years in the same statistics as the later minute-level years.
**Wants:** Old sparse data comparable to new dense data without pretending it has the same detail.

### 800 · Birthday and leap day
Tuncay's data spans 29 February. His "same day last year" comparison for 1 March, and his "yearly total" for a leap year, do not line up with ordinary years.
**Wants:** Yearly comparisons that state how the extra day was handled.

### 801 · Timezone of a report versus timezone of a life
Gökhan lives in Istanbul but tracks work for a client in Los Angeles. His "day" for client billing ends at 10:00 Istanbul time. His personal day ends at midnight.
**Wants:** The same hours totalled per day under either day boundary, with neither being wrong.

### 802 · Working across midnight
Şule's night shift is 22:00 to 06:00. Her daily totals say 2 hours on Monday and 6 on Tuesday, and her weekly average per day looks like she works part-time.
**Wants:** The shift understood as one shift, and totals available by the day it started.

### 803 · Rounding at the boundary
Hasan's tool rounds each entry up to the next 15 minutes for billing. Fifty-two 4-minute calls are billed as 13 hours. His actual total is 3h28.
**Wants:** The real total and the billed total both shown, with the gap between them attributed to rounding.

### 804 · Time in a place
Feride's location history shows she was at "home" 61% of the last year. Time in a lift, in transit through the building, and one weeks of holiday at her sister's house all count as "elsewhere" or "home" depending on the moment.
**Wants:** Time at places totalled with the fuzzy boundaries visible rather than a single confident percentage.

### 805 · Meals and mixed sources
Kadir's food diary says dinner was at 20:00. His card payment shows the restaurant bill at 21:35. His photo timestamps show a plate at 20:41.
**Wants:** The three sources kept, and a dinner time reported as a range or with the disagreement noted.

### 806 · A projection past what is knowable
Lale asks when she will finish reading her 300 remaining books at her current pace. The answer is 41 years, given ranges on her pace, from 33 to 58.
**Wants:** The answer given as a wide range, with a note that a pace measured over one year cannot justify predicting decades.

## Order without time

### 807 · A procedure with order and no clock at all
Deniz writes "fix the bike": remove the wheel, patch the tube, refit the wheel, pump the tyre. Four steps, no dates, no durations. She does the first two on a Saturday and the last two on a Tuesday.
**Wants:** To see the steps in their order, see which are done, and see that the whole job started on Saturday and ended on Tuesday, without ever having entered a time.

### 808 · Item that ends up on a different trip
Milk sits on Thursday's trip. Mert is at the corner shop on Wednesday and buys it there.
**Wants:** The milk to show as bought Wednesday at the corner shop, Thursday's trip to have one item fewer, and the original intention still visible.

### 809 · An item on two lists at once
"Screws" is on the shopping list for the shelf build and also on the list for the fence repair. Ayla buys one box.
**Wants:** One purchase to satisfy both lists, and both lists to show it done.

### 810 · One box, half the need
The shelf build needs 20 screws and the fence repair needs 50; the box holds 60. Ayla uses 20 on the shelf.
**Wants:** The fence repair to know 40 remain and 10 are still short, not to simply show "screws: done".

### 811 · Jack stands trip him halfway
Emre has lifted the car and drained the oil when the garage closes for the night. The car stays up on stands until Sunday.
**Wants:** The job to read as "paused with the car up and oil out", so nobody treats it as finished or forgets the car is raised.

### 812 · Order between two people's steps
Selin drains the coolant; Kaan cannot start on the radiator until she is finished. Kaan is at work when she finishes.
**Wants:** Kaan to see when he can start, without Selin having to message him.

### 813 · Dough that must rest 1 to 2 hours
Zeynep kneads dough at 10:00. The recipe says rise 1 to 2 hours, until doubled. It is doubled at 11:20 in a warm kitchen.
**Wants:** The rising step to be finished when she says it is, not when the clock passes a fixed mark, and the next step to become available then.

### 814 · Same dough, cold kitchen
In winter Zeynep's dough takes 3 hours. The recipe still says 1 to 2.
**Wants:** The plan to stay honest when the wait runs over the stated range, and later steps to slide accordingly.

### 815 · Working back from dinner time
Dinner is at 19:00. Roast 90 minutes, potatoes 45, gravy 15, salad 10, rolls 12. Aylin wants everything hot at 19:00.
**Wants:** To see when to start each dish, working back from the meal.

### 816 · One oven, two dishes at different heats
The roast needs 200 degrees and the rolls need 180. One oven. Both must be ready by 19:00.
**Wants:** To be shown that the two cannot share the oven as planned, and what must give.

### 817 · Timer and reality disagree
The alarm rings at 18:47 but Ece is on a phone call and takes the tray out at 18:59. The edges are dark.
**Wants:** The record to say 47 minutes were planned and 47 minutes were the alarm, but 59 minutes actually happened.

### 818 · Power cut mid-bake
At minute 20 of a 35 minute bake the power goes for 10 minutes and then returns.
**Wants:** The remaining time not to be a naive 15 minutes; the person to be able to say "restart the count" or "add 10".

### 819 · Steps that can happen in parallel
Onions are chopped while rice simmers, and neither depends on the other. Both must be done before the sauce.
**Wants:** The recipe to show neither before the other, and both before the sauce, and not force a fake single line.

### 820 · Two cooks, one recipe
Baran and Cem cook the same recipe together. Baran takes the vegetable steps, Cem takes the sauce steps.
**Wants:** Each to see their own steps first, and both to see the shared last step waiting for both.

### 821 · Missing ingredient discovered midway
Halfway through the cake Nil finds there is no baking powder. Flour, sugar and eggs are already mixed.
**Wants:** The recipe to show she is blocked, on what, and which steps still can go ahead.

### 822 · Substitution changes the steps
Nil replaces butter with oil. The oil version has no creaming step and skips the "soften butter 30 minutes" wait.
**Wants:** The recipe as she is actually making it, with the old wait gone, and the original still kept.

### 823 · Scaling a recipe
A recipe for 4 people is made for 12. Oven bake stays 35 minutes but chopping takes three times as long and the pot must be bigger.
**Wants:** Quantities to scale, and the steps whose length does not scale to stay as they were.

### 824 · Cooking a recipe twice on different days
Lentil soup is cooked on 3 March and on 17 March. On the second time Ali skips the "soak overnight" step.
**Wants:** The two runs to be separate histories of one recipe, each with its own ticks and skipped steps.

### 825 · Recipe changed after cooking began
Ali copied a recipe, then the author edits it to add a resting step after he has already passed that point.
**Wants:** His run to keep the version he started, with a notice that something changed.

### 826 · Dish needs an earlier dish
The lasagne needs béchamel and ragù, each made in its own recipe.
**Wants:** The lasagne to show those two as things that must be done first, yet each recipe to remain usable alone.

### 827 · Marinade the night before
Chicken marinates for at least 8 hours. Selma is cooking Saturday at 19:00 and forgot until Saturday 15:00.
**Wants:** To be told the prerequisite is already impossible in time, and how far short it is.

### 828 · Optional garnish
A recipe ends with "garnish with parsley, if you have it". Halit has none.
**Wants:** The recipe to count as complete without the garnish, and not show a nagging unfinished step.

### 829 · Step that can be undone
Sena added salt to a soup and it is too salty; she adds a potato to soak it up, then removes it. Another time, an egg cracked into a bowl cannot be uncracked.
**Wants:** Reversible steps to be distinguishable from ones that cannot be taken back.

### 830 · Two steps in any order but not together
Mixing the dry ingredients and warming the milk can go either way round, but there is one counter and one pair of hands, so only one at a time.
**Wants:** Either order to be accepted, and overlap to be flagged.

### 831 · Cycle: each step needs the other first
A friend's recipe says "add the egg once the mixture is cooled" and, two lines later, "cool the mixture after adding the egg".
**Wants:** To be told the two steps wait on each other, and which lines cause it, instead of silently stalling.

### 832 · Cycle that only appears after two lists are joined
List A says "paint before hanging the door". A separate list for the same room says "hang the door before painting the frame". Neither is wrong alone.
**Wants:** The conflict to appear when the two meet, with each list still intact.

### 833 · Furniture assembly with leftover screws
Wardrobe instructions have 14 steps. After step 14 there are four screws left over.
**Wants:** To be able to note that something was skipped or misplaced, and to point back to the likely step.

### 834 · Step done in the wrong order
Ozan fitted the back panel before the shelf supports. The instructions say the opposite. It already went in.
**Wants:** The record to show what really happened and the procedure to tell him what now needs undoing.

### 835 · A step thought to be done that was not
Ozan believed he had tightened the cam locks. Two days later he finds they are loose.
**Wants:** To correct the past: the step reopens, later steps that assumed it are marked doubtful, and the earlier mistaken tick is still visible.

### 836 · Step known done but not when
Berna is sure she bled the brakes before the trip, but not which day.
**Wants:** To mark it as done "sometime before the trip" without inventing a date.

### 837 · Furniture pieces in a box out of order
Delivery brought parts labelled 1 to 9, but part 6 is missing and steps 7 to 12 need it.
**Wants:** To see which steps can go ahead now, which are blocked by part 6, and to leave the blocked ones waiting until it arrives.

### 838 · Two people assembling one bed
Tuna and Elif each take a side of the bed frame. Both sides join at step 8.
**Wants:** Each to progress on their side, and the joining step to appear only once both sides are done.

### 839 · Preflight checklist, strict order
A pilot's preflight has 32 items: fuel valve on, master switch on, flaps checked, and so on. The order matters for some, not for others.
**Wants:** To show which items truly need to follow each other and which can be flowed through in the order of the walk-round.

### 840 · Checklist interrupted by the tower
Halfway through the before-start list the tower calls with a clearance change. Sixteen items are done.
**Wants:** To return and see exactly where she was, and to be able to redo the last few if in doubt.

### 841 · Two-person challenge and response
One pilot reads an item, the other answers. Both must agree before the item counts.
**Wants:** An item to count only when both have confirmed, and disagreement to be kept visible.

### 842 · Checklist run every flight
The same 32 item checklist is run before each of 200 flights.
**Wants:** Each flight to have its own record, and the checklist itself to stay one thing that can be improved.

### 843 · Checklist item found faulty
During the run the landing light does not work. The flight is still allowed with a note.
**Wants:** The item to be marked failed-but-accepted with its reason, distinct from passed.

### 844 · Emergency list that must be memorised, not consulted
A fire-in-the-motor list is memorised and done in seconds, then confirmed afterwards from the paper list.
**Wants:** Items to be tickable afterwards, in bulk, without pretending each was read out in real time.

### 845 · Packing list for a trip
Goksel's packing list has 40 items for 5 days away: passport, charger, boots, sunscreen. Some go in the carry-on and some in the hold.
**Wants:** To see what is packed, what is left, and which bag each item is in.

### 846 · Packing item that comes from another list
"Charger" is not bought but is also on the list "things to unplug at home before leaving".
**Wants:** One item to appear where it matters in both places without being counted twice.

### 847 · Packing list reused across trips
Goksel reuses the same list for a winter trip and a summer trip, swapping coats for shorts.
**Wants:** The common part to be shared, and the seasonal parts not to leak into the other trip.

### 848 · Item packed then removed
The umbrella was packed, then taken out at the airport for weight.
**Wants:** It to show as no longer packed, and the history not to claim it was never packed.

### 849 · To-do list item with no place in time
"Call the dentist" sits on Ayten's list for six weeks. She never sets a date. She finally does it on a Wednesday at lunch.
**Wants:** The list to stay dateless while waiting, and to take Wednesday only once it is done.

### 850 · To-do items that push each other
Ayten's list has "get quote", "book plumber", "pay deposit". She does "get quote" three weeks late.
**Wants:** The later two to move along behind it without her editing them.

### 851 · A to-do that stops mattering
"Renew library card" sits three months. She moves house and the library no longer applies.
**Wants:** To drop it as cancelled, not as done, and have that distinction remembered.

### 852 · A shared shopping list, one owner's item is private
Kemal, Sude and Nur share a household list. Kemal adds a personal gift, "birthday present for Sude", that Sude must not see.
**Wants:** Sude to see the trip and the rest of the list but never the gift, and the shop still to be visited as a stop for Kemal.

### 853 · Shared list, two people buy the same thing
Sude and Nur both buy milk at different shops on the same evening.
**Wants:** To notice the duplicate, and to keep who bought which.

### 854 · Shared list, one person ticks off another's item
Nur buys the bread that Kemal claimed. Kemal did not know.
**Wants:** The list to show who really bought it and clear Kemal's claim.

### 855 · Book left for a year
A book stays at page 212 from March until next March.
**Wants:** It to still be "in progress" at 212, without any pressure to be behind schedule, and an easy way to say restart from the beginning.

### 856 · Rereading the same book
Deniz reads the same novel again ten years later.
**Wants:** The second reading to be a new pass, distinct from the first, and not to overwrite where he stopped before.

### 857 · Book series with order
Seven books that should be read in order, though book 3 stands alone and book 5 is a prequel to be read anywhere after book 1.
**Wants:** The stated order, the loose ones, and the difference between them to be visible.

### 858 · Book read by two people, different pace
Ilke and her mother read the same book, one ahead of the other. They want to talk about chapter 8 without spoilers.
**Wants:** Each to see own position, and to know when the other has caught up to a given chapter.

### 859 · Audiobook and paper book of the same title
Cem listens on the commute to chapter 5 and reads at night from the paper copy.
**Wants:** One reading position, whichever form moved it.

### 860 · Course with prerequisites
A university degree: Calculus I, then Calculus II, then Differential Equations. Physics II also needs Calculus II. Poet has passed Calculus I only.
**Wants:** To see what is available now, what is blocked, and by what.

### 861 · Prerequisite passed with a different course
Poet did an equivalent maths course elsewhere. It does not carry the same name.
**Wants:** To count it as satisfying Calculus II without pretending it was that course.

### 862 · Prerequisite failed
Poet fails Calculus II. Differential Equations and Physics II were planned for next term.
**Wants:** The dependent courses to fall back to waiting, and the retake to slot in front of them.

### 863 · Either of two courses satisfies a prerequisite
Statistics needs either Probability or Data Analysis, not both.
**Wants:** Either one to unlock it, and doing both not to be an error.

### 864 · Three-year course
A part-time diploma runs for 36 months, 24 modules, most of which have prerequisites. The student takes a year off after month 14.
**Wants:** The gap to leave nothing broken, the ordering intact, and the total elapsed time not to swallow the year off as study time.

### 865 · Curriculum taught to a class
A teacher plans a curriculum of 30 lessons in a set order for 25 pupils. Six pupils are absent for lessons 9 to 12.
**Wants:** The class to move on, and the six to be shown as having missed those lessons.

### 866 · Learning without a syllabus
Hakan teaches himself Rust: chapters of a book, some exercises, a project. He goes back to chapter 4 after failing the project.
**Wants:** Going back not to look like failing or to erase the chapters he completed.

### 867 · Game quest chain
An RPG has quest chain "Find the sword", "Reforge the sword", "Slay the dragon". Levi has done the second quest but skipped the first through a glitch.
**Wants:** The chain to accept what happened and show it is out of the intended order.

### 868 · Quest with branching choices
In one quest you can side with the guild or the thieves; each leads to different next quests, and neither can be undone.
**Wants:** Both branches to be visible, the unchosen one shown as closed off, not just blank.

### 869 · Quest with real-time wait
A crafting quest says "the forge is ready in 8 hours". Levi logs off at 21:00 and comes back at 09:30.
**Wants:** The wait to be done when he returns, and the next quest step available without doing anything.

### 870 · Legal procedure with mandatory steps
Filing an appeal needs a notice of appeal, then a record, then a brief, with a court deadline after each. Sibel misses one filing by a day.
**Wants:** The consequence for the following steps to be visible, and the missed one to be shown as late, not as never.

### 871 · Legal steps that wait on someone else
Sibel's lawyer waits for the other side to respond, with no fixed date. The reply arrives 11 weeks later.
**Wants:** The waiting step to sit open with nothing scheduled, then close when the reply comes.

### 872 · Medical protocol with repeated doses
A treatment gives a drug every 8 hours for 5 days, but must pause if a blood result is abnormal. 15 doses.
**Wants:** The doses in order, the pause visible, and the count of doses given versus intended.

### 873 · Dose given late
Dose 6 was due at 14:00 but given at 15:40. Dose 7 is due 8 hours after the last one.
**Wants:** The record to say the true time given, and the next dose's timing to be a decision the nurse can see, not a silent shift.

### 874 · Medical steps needing signed-off
A procedure needs two clinicians to confirm the patient identity before anaesthesia. One is called away.
**Wants:** The anaesthesia step to stay waiting on the missing confirmation.

### 875 · Lab protocol with incubation
A lab protocol: mix at 09:00, incubate 45 minutes at 37 degrees, then stain, then wash three times. Incubation is at least 45, at most 60.
**Wants:** A window, not a point: too early and too late both flagged, and the wash steps to follow.

### 876 · Lab protocol overnight then next day
Cells are grown overnight, 16 to 18 hours, then split. The technician leaves at 17:00 and returns at 08:00.
**Wants:** The overnight step to span her absence, and the next step to become ready in the window.

### 877 · Lab protocol run on 96 samples
The same 12 steps are done for 96 samples in a plate, some steps done for all at once, some one by one.
**Wants:** To see the whole plate progress together where steps are shared and each sample where they are not.

### 878 · Sample fails partway
Sample 41 shows contamination at step 6 of 12; the other 95 continue.
**Wants:** That sample to stop, the others unaffected, and the reason to stay attached to sample 41.

### 879 · Gardening: seeds before last frost
Tomatoes are sown indoors 6 to 8 weeks before the last frost, hardened off for a week, then moved outside 1 to 2 weeks after it. The frost date is a guess that changes each year.
**Wants:** The order fixed, the dates left loose, and a late frost to push the outside steps without redoing the sowing.

### 880 · Gardening: a late frost after transplanting
Ridvan planted 12 seedlings on 5 May. On 9 May a frost kills 7.
**Wants:** The transplant step to stay as a fact, with a loss noted, and a resow step to appear behind it.

### 881 · Farming crop across years
A field goes wheat, then beans, then fallow, repeating every three years. Ridvan's father farmed it the same way.
**Wants:** A repeating sequence that is not tied to a year, where "this year is beans" is a place in the sequence.

### 882 · Season instead of date
"Prune in late winter" has no date. This year late winter came three weeks early.
**Wants:** The pruning to belong to the season, not to a guessed calendar day.

### 883 · Brewing with long waits
Beer: brew day, primary fermentation 10 to 14 days, bottle, condition 2 to 4 weeks. Lale brews on 1 June.
**Wants:** To see roughly when bottling and drinking can happen, held as ranges, and to correct them when the airlock stops early.

### 884 · Fermentation checked, not just waited out
Fermentation is finished when gravity is stable for 3 days, not after a set time.
**Wants:** A step that is done when a condition holds, not when time passes.

### 885 · Knitting pattern with repeats
A scarf: cast on 40, then repeat rows 1 to 4 until the scarf measures 150 cm, then cast off. Rows 1 to 4 have a fixed order.
**Wants:** To know where she is inside the repeat, and how many repeats she has done, even though the total is not known ahead.

### 886 · Knitting: dropped stitch found 20 rows later
Reyhan finds a mistake 20 rows back. She undoes 20 rows.
**Wants:** The rows to go back to undone and the repeat count to fall back with them.

### 887 · Knitting pattern shared
A pattern published by one person, knitted by hundreds, each stopping at different rows.
**Wants:** The pattern to stay one thing; each knitter's progress private to them unless they choose to share.

### 888 · Home renovation order
A kitchen refit: strip out, rough plumbing, rough electrics, inspection, plaster, tile, cabinets, worktops, final connections. Plaster cannot happen before both roughs pass inspection.
**Wants:** Plaster to be held until both have passed, and the order not to depend on which trade turns up first.

### 889 · Trade arrives out of order
The plasterer arrives Monday but the electrician's inspection is booked for Wednesday.
**Wants:** The plasterer's slot to show as not yet possible, and what could be done instead that day.

### 890 · Rework after the wall is closed
After plastering, the plumber finds a pipe was missed. The wall must be opened.
**Wants:** Plastering to reopen as needing redo, and the steps after it to stay waiting.

### 891 · Renovation across rooms
Three rooms share the same electrician. Bathroom, kitchen, hall. The electrician does all three rough-ins in one visit.
**Wants:** One visit to serve three rooms' steps at once, without the rooms losing their own order.

### 892 · Moving house
Move steps: give notice on the old flat, book a van, pack boxes, hand back keys, connect internet at the new flat. Packing boxes are by room, and the kitchen must be packed last.
**Wants:** The order between rooms, the last-minute steps, and the fixed date of key handover to sit together.

### 893 · Boxes unpacked in the new place
Fifty boxes arrive. Unpacking has no order except that the bed and the kettle come first.
**Wants:** Loose items to be done whenever, with a few marked as urgent, and each box's contents to show where they ended up.

### 894 · Key handover date moves
The landlord moves the handover from 30th to 25th. Packing needs to be done five days sooner.
**Wants:** The change to reach every step that leans on the handover.

### 895 · Relay hand-off
A four-leg relay: Arda runs leg 1, hands the baton to Berk, who hands to Can, who hands to Dila. Arda finishes in 11:02, Berk in 10:48.
**Wants:** Each leg to follow the last, take its start from the hand-over, and the team total to come from all four.

### 896 · Hand-off dropped
The baton is dropped at the second exchange and recovered 4 seconds later.
**Wants:** The exchange to be marked as a fault without breaking the order.

### 897 · Assembly line hand-off
A workshop assembles 100 toys: cut, sand, paint, pack. Four people, each at one stage, working on different toys at once.
**Wants:** Each toy to have its own order through the four stages while the four people work at the same time.

### 898 · Line jams
The painter is 2 hours slow. The sanders keep sanding and the pile grows to 30 toys.
**Wants:** The backlog to be visible in front of painting, without the sanders' steps being changed.

### 899 · Hand-off with an unknown next person
A night nurse hands over patients to "whoever is on the morning shift". Nobody is assigned yet.
**Wants:** The hand-off to exist with no name in it, and gain one when the shift starts.

### 900 · A 10,000-step procedure
An aircraft maintenance check has about 10,000 numbered steps, some in strict order, most in groups that can be done in any order by different crews over 3 weeks.
**Wants:** To open it and still find, quickly, what is next for the person and what is blocking them, without scrolling ten thousand lines.

### 901 · Procedure revised while in progress
Midway through the 10,000-step check, the manufacturer issues a revision affecting 200 steps, 60 of which are already done.
**Wants:** To see exactly which done steps are now in doubt.

### 902 · Plan versus actual
The plan for a weekend paint job says 8 hours over Saturday. The person actually works 3 hours Saturday, 6 hours Sunday, and skips a second coat.
**Wants:** The plan and what happened side by side, neither replacing the other.

### 903 · List where items get times only when done
A "things I did today" list is built by adding each item after it is done, in the order they happened, with no plan beforehand.
**Wants:** The list to behave like any other list, with times arriving only when things happen, and items done "around lunchtime" placed roughly.

### 904 · Sequence inside a sequence inside a sequence
A wedding: the ceremony, inside it the vows, inside them the ring exchange; the reception has its own food order. The caterer's steps sit in both the reception and the shopping run.
**Wants:** A step to belong to several sequences at once and follow the order of each.

### 905 · Step spanning two days
A cure step: "let the concrete set 48 hours". Poured at 16:00 Friday.
**Wants:** The step to end Sunday afternoon and hold anything that depends on it until then.

### 906 · Rain interrupts an outdoor step
The concrete pour is rained on for 20 minutes of a 3 hour pour.
**Wants:** A note against that step and the effect on the cure to be visible to whoever decides.

### 907 · Someone else changes your step
A neighbour on the shared garden list marks "prune apple tree" as done. Emine had not done it and planned to.
**Wants:** Emine's own record to show she did not do it, next to the neighbour's claim.

### 908 · Deleting a list that others are inside
Mert deletes his shopping list. Ayla's fence repair had linked a "screws" item from it.
**Wants:** Ayla's list not to lose the item, and Mert's choice to be respected.

### 909 · Private step inside a public procedure
A clinic publishes a protocol. A doctor adds a private note to step 5, "patient X reacted badly last time".
**Wants:** The protocol to be visible to all colleagues and the note only to that doctor.

### 910 · Same step done by several people separately
"Sign the form" has to be done by all 5 tenants, in any order, before the lease starts on 1 October.
**Wants:** To see who has signed and who has not, and the lease start to hold until all five have.

### 911 · Someone signs twice, someone never
Tenant 3 signs two copies by mistake. Tenant 5 is abroad and never signs.
**Wants:** The duplicate to be harmless and the missing signature to stay clearly missing.

### 912 · Step done in the past that the list did not know about
Dilek finds an old moving-house list and realises she had already changed her address two months ago.
**Wants:** To mark it done at the earlier time and have later steps that depended on it recognise it.

### 913 · Repeating item with a missed occurrence
Halil misses one watering while travelling for a week.
**Wants:** The missed one to remain missed, and the rhythm to continue from when he is back, not with a backlog of five waterings.

## Productivity and self-planning

### 914 · Time block whose task runs over into the next block
Deniz blocks 09:00–11:00 "Write report" and 11:00–12:00 "Answer email". The report takes until 11:40. Email is now 40 minutes late and lunch at 12:00 is unchanged.
**Wants:** To see that the email block now starts at 11:40 and is 20 minutes long, or is visibly squeezed, without retyping anything.

### 915 · Overflow block that only exists to absorb overrun
Ayla puts a 30-minute "Overflow: tidy inbox" after every deep-work block. When the block before runs 25 minutes over, the overflow is nearly gone; when it ends on time, the overflow is real free time.
**Wants:** The calendar to show the overflow as available time for the block before it, and as ordinary low-priority work when nothing overran.

### 916 · Timebox that ends with the task unfinished
Mert timeboxes "Draft proposal" for exactly 90 minutes, 14:00–15:30. At 15:30 the draft is about 60% done. He stops, as the method says, and does not extend.
**Wants:** The task to remain open with its remaining part, and the 90 minutes recorded as spent, not as a failure.

### 917 · Timebox versus estimate
Selin estimates "Prepare slides" at 3 hours but only gives it a 1-hour box today. She wants to know whether the box or the estimate is the plan.
**Wants:** To see both numbers side by side and what is left after the box, without either overwriting the other.

### 918 · Pomodoro cycle with a long break
Kaan runs four 25-minute focus sessions with 5-minute breaks, then a 20-minute break, starting at 10:00. A 10:50 call falls in the middle of the second break.
**Wants:** The rest of the cycle to shift or split around the call and still show how many focus sessions are left before the long break.

### 919 · Interrupted pomodoro
Elif is 14 minutes into a 25-minute session when a colleague stands at her desk for 9 minutes.
**Wants:** To mark the session as interrupted, keep the 14 minutes as real work, and choose whether the remaining 11 minutes restart, resume or are dropped.

### 920 · Pomodoro count for the day versus what fits
Tolga plans 12 pomodoros today but has meetings that leave room for 7.
**Wants:** To be told 5 do not fit and see which ones, instead of the plan quietly showing 12.

### 921 · Deep-work block with notifications off
Ece has a 2-hour deep-work block, 09:00–11:00, in which no messages should reach her. Her child's school is allowed to call.
**Wants:** The block to show as unavailable for ordinary requests while still letting the named exception through.

### 922 · Deep work shortened by an earlier meeting
A 4-hour deep-work block is planned Tuesday 08:00–12:00. A meeting lands at 09:30, leaving 90 minutes and 150 minutes on either side.
**Wants:** To see the deep-work time as two pieces, with the total, and a note that neither piece is the length she planned.

### 923 · Minimum useful block length
Bora's rule says a work session under 45 minutes is useless for writing. Free gaps today are 30, 40 and 50 minutes.
**Wants:** Writing to go only in the 50-minute gap, and shorter gaps left for other kinds of work.

### 924 · Task longer than any gap
"Migrate the database" needs 6 hours. No free stretch today is longer than 2 hours 15 minutes.
**Wants:** The work to be spread over several stretches, with each continuation obviously belonging to the same job.

### 925 · Task that must not be split
"Oven-bake sourdough loaf" needs 90 uninterrupted minutes once started. The only gaps this week are 60 minutes.
**Wants:** To be told plainly there is no place for it this week, rather than getting two 45-minute halves.

### 926 · Split across days with a cap per session
"Read thesis draft" is 8 hours. Nur will do at most 2 hours at a time and at most one session a day.
**Wants:** Four sessions on four separate days, and to see the finish date.

### 927 · Deadline versus do-date
Report is due Friday 17:00. Cem wants to do it Wednesday, and does not want it in his face Monday.
**Wants:** Two different dates on the same task, one for when it must be done and one for when he plans to do it, and to see when they drift apart.

### 928 · Do-date passed, deadline not
The report's do-date was Wednesday; it is now Thursday morning and it is not done. The deadline is still Friday.
**Wants:** It to show as late against his own plan but not against the real deadline.

### 929 · Deadline earlier than the planned finish
Yasemin's talk is Thursday 10:00. The scheduler places the last preparation session Thursday 14:00, after it.
**Wants:** A clear warning that the plan ends after the deadline, and which work would have to move or be dropped.

### 930 · More work than time this week
Ozan has tasks totalling 50 hours and only 30 free hours between meetings and sleep.
**Wants:** To be told the gap of 20 hours early in the week, not discover it on Friday, and to see which tasks are the ones that overflow.

### 931 · Overload with hard deadlines on all of it
All 50 hours are due by Friday and nothing can be dropped, according to the person.
**Wants:** The impossibility stated honestly, with the smallest set of things that would have to give.

### 932 · Overcommitment measured against usable hours, not calendar hours
Leyla has 40 hours between 08:00 and 17:00 but only about 24 of them are focus-capable after meals, meetings and breaks.
**Wants:** The "free hours" figure to be the 24, not the 40.

### 933 · Weekly review inventories everything
Every Friday at 16:00 Hakan does a 45-minute review: empty the inbox, check each project has a next step, look at the coming two weeks.
**Wants:** The review to be an event of its own that other work respects, and to see when it was last skipped.

### 934 · Weekly review skipped three weeks in a row
Hakan has not done the review in three weeks. The backlog has 61 items nobody has looked at.
**Wants:** To see the age of the last review and the count of items untouched since then.

### 935 · Task tied to a place or device
"Print tax form" can only happen when Irem is near the printer, at the office.
**Wants:** It to be offered only on days and times she is at the office, and not on her home days.

### 936 · Contexts that clash
"Write code" needs a computer and calm. "Reply to messages" needs a phone or computer. At 10:00 he is on a train with only a phone.
**Wants:** The messages to be offered, and the code to be kept for later.

### 937 · Task that can happen while something else happens
Berk can listen to a podcast while cooking dinner, but cannot read a report while cooking.
**Wants:** The podcast to be allowed to overlap the cooking; the report not.

### 938 · Urgent message during a no-messages window
A message from her manager arrives at 10:15 saying "prod is down", while Aslı's messages are set for 13:00.
**Wants:** A way for some senders or words to break through without turning the whole rule off.

### 939 · Unpredictable interruption in the list of stoppers
The toilet has no fixed time but averages 4 times a day for about 5 minutes.
**Wants:** The average to reduce available work a little without booking exact slots.

### 940 · Gap gets smaller after the task was placed
A 60-minute gap holds "Prepare invoice" (50 minutes). A colleague books 25 minutes of it.
**Wants:** The invoice to move to another gap by itself, and the person to see that it moved.

### 941 · Tiredness pushes hard work out of the afternoon
After 15:00 Selim's focus is poor. A 1-hour "Debug payment issue" and a 20-minute "File expenses" both need a slot; free gaps are 10:00 and 16:00.
**Wants:** The debugging in the morning gap and the expenses in the late one.

### 942 · Tiredness changes after a bad night
Selim slept 4 hours. The morning peak he usually has is not there today.
**Wants:** To say so once and see today's hard work move to lighter tasks or to another day.

### 943 · Energy pattern differs by weekday
Zeynep's best hours are 08:00–11:00 Monday to Thursday, but on Fridays she is at her best after 14:00.
**Wants:** The same kind of task to be placed differently on Friday without re-entering the rule each week.

### 944 · Tiredness accumulates during the day
After three back-to-back 90-minute deep blocks Volkan is done, though the calendar shows a fourth.
**Wants:** The fourth block not to be treated as full-strength time.

### 945 · Eat the frog
Duygu wants her most dreaded task, "Call the tax office", first thing each day.
**Wants:** It to be first at the start of the day and never to slip behind easier work.

### 946 · Frog keeps being pushed
The tax office call has been the first item Monday, Tuesday and Wednesday and has not happened three times.
**Wants:** To see it has been moved three times, and to be asked what is blocking it rather than moving it a fourth.

### 947 · Rescheduled five times
"Renew passport" has had its date pushed five times over five weeks. The passport expires in 8 weeks.
**Wants:** The pattern to be visible, and the remaining time before expiry to be shown with it.

### 948 · Eisenhower quadrant changes over time
"Book flights" is important but not urgent in March; by the last week before travel it becomes urgent.
**Wants:** It to change place in the ranking on its own as the date approaches.

### 949 · Urgent but unimportant task competes
A colleague asks for "quick feedback" due in an hour. It is urgent, low importance. Stella is in the middle of her most important task.
**Wants:** To see clearly what would be pushed if she does it now, before she agrees.

### 950 · Batching similar tasks
Baran has 14 small admin jobs (forms, receipts, replies) scattered across the week.
**Wants:** Them to be gathered into one 90-minute admin session, and to see which day they came from.

### 951 · Batch that grows beyond its slot
The 90-minute admin batch now has 22 items totalling 130 minutes.
**Wants:** The extra items to move into a second batch rather than the first one being silently longer.

### 952 · Waiting-for item
Nazlı sent designs to the printer on Monday; nothing can be done on the poster until they reply.
**Wants:** The poster work to be held aside, not scheduled, and to come back when the reply comes.

### 953 · Waiting-for with no reply
Two weeks pass without the printer replying.
**Wants:** To be reminded to chase, and to see how long it has been waiting.

### 954 · Waiting-for item with a known return date
The client says "I will send the contract by the 12th".
**Wants:** The dependent work to be pencilled in for the 13th, and to move if the client's date moves.

### 955 · Someone else finishing late blocks my task
Erdem cannot start his review until Gül finishes her part. Gül was due Tuesday and now says Thursday.
**Wants:** Erdem's review to move to Thursday or later, and anything after it to move too.

### 956 · Auto-scheduler reshuffles the whole week
Tarık adds a 3-hour meeting on Tuesday. The scheduler moves 11 tasks across Tuesday to Friday, including one he had rehearsed for Wednesday morning.
**Wants:** To see what moved and why, and for tasks he cares about to stay where he put them.

### 957 · Pinned block untouched by the scheduler
Gökçe pins "Piano practice" every day at 19:00. The scheduler wants that time for an urgent task.
**Wants:** The piano to stay, and the urgent task to go somewhere else or be reported as not fitting.

### 958 · Pinned block collides with a new pinned block
Two pinned items, "Gym" and "Parent call", both fixed at Thursday 18:00.
**Wants:** The clash to be shown, and neither to be silently moved.

### 959 · Priority conflict between two auto-placed tasks
"Quarterly report" (priority high) and "Client demo prep" (priority high) both need Thursday morning, which fits one.
**Wants:** The one that loses to go to the next best time, with a reason he can read.

### 960 · Manual move treated as intent
Fatma drags "Write intro" from Tuesday to Thursday. The scheduler would prefer Tuesday.
**Wants:** Thursday to hold, until she says otherwise.

### 961 · Buffer between meetings
Ali wants 10 minutes free before and after every meeting of more than 30 minutes. A meeting is added at 11:00–12:00 with another at 12:05.
**Wants:** The buffer to be respected or the shortfall shown, without the meetings being moved.

### 962 · Buffer eaten by an overrun
A 10-minute buffer follows a call that overran by 25 minutes.
**Wants:** The buffer to give way first, and the next meeting to show that it will start 15 minutes late.

### 963 · Travel time between places
Pınar has a meeting downtown at 10:00 and one at the office at 11:00; travel takes 35 minutes.
**Wants:** The 35 minutes to appear as time that cannot be used for work.

### 964 · Meeting-free day
Wednesdays are meeting-free for Caner. Someone's invitation arrives for Wednesday 14:00.
**Wants:** The clash to be noticed before he accepts, and the rule to be overridable once.

### 965 · Focus mode that changes what can be scheduled
During a "focus" day, only tasks marked deep may be placed; all shallow tasks wait.
**Wants:** The shallow tasks to accumulate in a clear place and be visible the next day.

### 966 · Coworker sees only busy
Ebru blocks "Therapy" 15:00–16:00 on a calendar her coworkers can view.
**Wants:** Coworkers to see she is busy, not what or why, while she sees the full title.

### 967 · Coworker sees a personal block through a task that overflowed into it
Ebru's private "Doctor" appointment is Thursday 15:00. A work task that overran was rescheduled to sit right after it, and its title mentions "after doctor".
**Wants:** The work item not to leak what the private block is.

### 968 · Different visibility for different people
Her partner may see "Dentist", her team only "Busy", the public nothing.
**Wants:** The same block to look different to each viewer.

### 969 · Correcting the past
Ilker planned to work 09:00–11:00 but actually started at 09:40 and stopped at 10:50. He logs it at 18:00.
**Wants:** The record to show the real times, with the plan still visible next to it.

### 970 · Logging something that never was planned
He also spent 45 minutes helping a neighbour at 15:00, which was never on the calendar.
**Wants:** To add it after the fact, and see what else it would have pushed.

### 971 · Logging time that overlaps other logged time
He says he was on a call from 14:00 to 15:00 and also wrote code 14:30 to 15:30.
**Wants:** The overlap to be accepted or questioned, with his choice recorded, not silently cut.

### 972 · Plan versus actual for the week
At the end of the week Nilay planned 32 hours of focus work and logged 21.
**Wants:** To see the gap by day and by kind of task, so she can see which promise she keeps breaking.

### 973 · Estimate versus actual across many tasks
Over the last 30 tasks, Cenk's estimates were too low by 40% on average, more for writing than for phone calls.
**Wants:** The next estimates to be shown next to that history.

### 974 · Estimate that is only a range
"Clean the flat" takes between 2 and 4 hours.
**Wants:** To plan using the range, seeing both an early and a late finish.

### 975 · Estimate that is a guess about someone else
"Wait for landlord's visit" — he might come Tuesday morning or Thursday.
**Wants:** The uncertainty on the calendar itself, with everything that depends on it labelled tentative.

### 976 · Exact versus vague date
"Dentist Monday 14:30" sits next to "Sometime in October, fix the roof".
**Wants:** Each to keep the precision it was given and not be turned into an exact time.

### 977 · Streak break
Merve has meditated 42 days in a row and skips one day because of a flight.
**Wants:** To see the streak was broken by travel, and to choose whether that counts against it.

### 978 · Habit stacked on another habit
"After morning coffee, floss" and "After flossing, ten minutes of Spanish".
**Wants:** The two to follow the coffee wherever it moves, and vanish when there is no coffee.

### 979 · Habit stack when the anchor never happens
She is ill and skips coffee for three days.
**Wants:** The stacked habits not to appear at random times, but to show as not done because the anchor was missing.

### 980 · Recurring task that keeps being skipped
"Water the plants, every 3 days" was done on day 1, then day 6, then day 12.
**Wants:** The next due date to follow the real last date, not the original rhythm.

### 981 · Annual goal down to a day
Goal: "Publish a book by December". It becomes 4 quarterly milestones, 12 monthly targets, weekly word counts, and a daily 500 words.
**Wants:** To see any day's 500 words as part of the year's goal, and to see the year's goal drift when days are missed.

### 982 · Same task serving two goals
"Attend the conference" counts for both "Learn Rust" and "Meet 20 new people".
**Wants:** One block on the calendar that both goals count, without being double-booked.

### 983 · Quarterly goal that no longer fits
By week 9 of a 13-week quarter, the target needs 20 hours a week and Sinan has been doing 8.
**Wants:** To be told the goal can no longer be reached at current pace, and what pace would still make it.

### 984 · AI plans the day
Deniz says "plan my day" with 7 tasks, 4 meetings and a 16:00 school pickup.
**Wants:** A day he can read at a glance, with the reasoning for each choice, and the ability to change any part.

### 985 · AI adds an event from a message
A message says "Let's meet next Thursday around 3, at the usual place". Today is Sunday.
**Wants:** A proposed entry marked as tentative for the coming Thursday, about 15:00, with "usual place" left for him to confirm.

### 986 · AI misreads a message
The message said "next Friday" and the AI put it on the nearest Friday, though the sender meant the following week.
**Wants:** An easy way to see what was assumed, and to undo it without a trail of wrong entries.

### 987 · Context switch cost
Damla jumps from code to a 10-minute call to code again. She says each switch costs her about 15 minutes to recover.
**Wants:** The lost 15 minutes on either side to be visible when a short task is dropped into a long block.

### 988 · Small task dropped into a deep block
A 5-minute "Sign form" is offered at 10:30 in the middle of a deep-work block.
**Wants:** The system to prefer placing it before or after the block.

### 989 · Backlog of 400 tasks
Recep has 400 tasks: 12 due this month, 40 someday, 250 undated, 98 waiting or blocked.
**Wants:** Today's view to stay small and fast, and the rest reachable without scrolling through them.

### 990 · Bulk reschedule of the backlog
After a sick week, 60 tasks that were due are now overdue.
**Wants:** To deal with them as a group, seeing which truly still matter, not 60 separate decisions.

### 991 · Inbox capture with no time
Gizem types "call mum re birthday" on her phone in a lift. No time, no date, no length.
**Wants:** It to exist immediately and later be placed without her having to describe it further.

### 992 · Daily planning ritual
Every morning at 08:30, Ahmet reviews yesterday's leftovers, picks today's tasks and sees the total hours against the day.
**Wants:** The leftovers to be listed with how many times they were left, and the total to show if today is already too full.

### 993 · Task that becomes irrelevant
A meeting was cancelled, so its three preparation tasks are pointless.
**Wants:** Those tasks to disappear or ask to be closed, rather than silently sitting on the calendar.

### 994 · Two people sharing a household task list
Hande and her partner share "Buy groceries", which one of them does whenever they are free. She does it Tuesday.
**Wants:** It to disappear from his list too, and to not be done twice.

### 995 · Time zone travel
Onur flies from Istanbul to Lisbon (two hours behind) on Thursday. His "Daily review at 08:30" and a call "at 10:00 Istanbul time" are both on Friday.
**Wants:** The review to be at local 08:30 and the call at local 08:00, with no confusion about which is which.

## Programming projects: issues, PRs and releases

### 996 · Issue blocked by an issue in another repository
Issue web#412 "Dark mode toggle" is blocked by api#88 "Expose user theme setting", in a different repository owned by a different team. api#88 has no milestone and no estimate. web#412 is in the sprint ending Friday. Wednesday api#88 is still untouched.
**Wants:** web#412 to show that its Friday finish depends on something the web team does not schedule, and to see when the api team says it will land.

### 997 · Two issues that block each other
Issue #201 says "blocked by #202" and #202 says "blocked by #201", added by two different people a month apart. Both sit in the 2.4 milestone due on the 15th. neither can ever start.
**Wants:** the contradiction to be visible as a contradiction, not as two quiet, forever-late items.

### 998 · Epic with no dates, only order
Epic #50 "Migrate auth" has 14 sub-issues. The team agrees on order (schema, then tokens, then sessions, then cleanup) but refuses to give dates. the sub-issues are worked in that order over an unknown number of weeks.
**Wants:** the order to be respected and shown with no clock, and a date to appear only once real work gives one.

### 999 · Sub-issue in two parents
Issue #310 "Rate limiter" is a sub-issue of epic #300 "Public API" and of epic #305 "SOC2 controls". The two epics have different owners and different deadlines, March 31 and June 30. #310 slips 3 weeks.
**Wants:** both epics to feel the slip, each against its own deadline, and neither owner to be able to hide it from the other.

### 1000 · Duplicate found after work started
Issue #77 and #91 describe the same crash. #77 has a draft PR from Ana with 3 days of work; #91 has a comment thread with the reproduction and 40 thumbs-up. a triager closes #91 as a duplicate of #77 on day 4.
**Wants:** the history and the interest of #91 to carry into #77, and the effort already spent not to be counted twice.

### 1001 · Stale bot closes a slow-burning issue
The repo's bot marks issues stale after 60 days without activity and closes them 7 days later. Issue #145 has been waiting for an upstream fix for 90 days; the last comment says "waiting on upstream v3". the bot closes it on day 67.
**Wants:** the issue to be recognised as waiting for something specific, not idle, and to come back when the upstream release appears.

### 1002 · Stale clock reset by a bot comment
Issue #160 has no human activity for 5 months. A labeling bot adds a label every 50 days. the stale timer never runs out.
**Wants:** the real age of the issue to be knowable, separate from bot noise.

### 1003 · Priority changes mid-sprint
Issue #230 is P3 with no date. On Tuesday a customer escalates and it becomes P1 with "this week". Three other issues in the sprint were planned for that developer. the developer starts #230 Wednesday morning.
**Wants:** to see which of the three planned issues now do not fit, and by how much, without anyone re-planning by hand.

### 1004 · Triage inbox with a service window
Linear-style triage: new issues land in an inbox and the team promises to triage everything within 2 business days. 23 issues arrive over a long weekend with the triage owner on leave until Tuesday. on Tuesday morning 9 issues are past their promise.
**Wants:** to see the breach and who was meant to cover, and whether the promise was measured in business days or calendar days.

### 1005 · Label change reclassifies old work
The team renames the label "bug" to "defect" and splits "chore" into "chore" and "tech-debt". 2,100 closed issues carry the old labels. last quarter's report of bugs fixed changes when re-run.
**Wants:** history to answer both "what did we call it then" and "what would we call it now".

### 1006 · Story points that mean different things
Team A estimates in points where 1 point is about half a day. Team B estimates in t-shirt sizes. Team C gives hours. Epic #500 has issues from all three. a manager asks when #500 will be done.
**Wants:** an answer with an honest range, not a false sum of unlike units.

### 1007 · Estimate that learns from actuals
Chen estimates issues at 2 days. Across his last 30 issues, his real time has been 3.1 days on average with a wide spread. Issue #220 is estimated at 2 days. the sprint plan uses 2.
**Wants:** the plan to show 2 as his estimate and a prediction from his history side by side, and the prediction to tighten as #220 progresses.

### 1008 · Draft PR with no promise
Priya opens draft PR #601 on Monday "so I do not lose the branch". No reviewer, no target date. on Thursday she marks it ready.
**Wants:** the draft period not to count as review waiting time, and the ready moment to start the review clock.

### 1009 · Review requested from someone 9 hours ahead
Liam in Auckland opens PR #620 at 17:00 his time. The only CODEOWNER for that directory is Marta in Lisbon, where it is 05:00. The team promises first review within 1 working day. Marta starts work at 09:00 Lisbon.
**Wants:** the promise measured in the reviewer's working hours, and to see that Liam's day ends before her reply arrives.

### 1010 · Changes requested, author on holiday
Reviewer Sam requests changes on PR #633 on Friday. Author Oleg is on leave for 2 weeks starting Saturday. The PR blocks release 3.2 cut-off on the 10th. nobody else owns the branch.
**Wants:** the release to see that a blocker will not move for 2 weeks and to be offered the choice of reassigning or dropping.

### 1011 · Re-review loop
PR #640 goes through review three times. Each round the reviewer takes about 1 day and the author about 2 days. the third round reveals a design objection that invalidates round one's approval.
**Wants:** the elapsed time and number of rounds to be visible, and the earlier approval to be shown as no longer counting.

### 1012 · Force-push wipes approvals
PR #655 has 2 approvals. The author rebases and force-pushes to tidy history; repository settings dismiss approvals on new commits. both approvals vanish though the diff is identical.
**Wants:** the work of the reviewers not to be silently lost, and the plan to reflect that the PR is back to waiting.

### 1013 · Stack of five PRs, bottom one changes
Stacked PRs #701 to #705, each depending on the one below. #701 receives a review change that alters an interface. #702 to #705 all need to be rebased and their CI re-run; each CI run takes 25 minutes and queues for 10.
**Wants:** to see the ripple, the earliest the top of the stack can land, and how that moves as each level is redone.

### 1014 · Middle of the stack merges, bottom does not
In a stack of four, the author lands #802 alone by mistake, or the platform allows it, while #801 below is still open. #803 and #804 now sit on a base that is neither the old nor the new state.
**Wants:** the order among the four to still be known even though the actual sequence broke it.

### 1015 · Stack split between two reviewers in different zones
A stack of three: #901 for reviewer in Berlin, #902 for reviewer in Bangalore, #903 for Berlin again. Each review takes about 4 working hours but the overlap between the two zones is 2 hours per day. the stack bounces between reviewers.
**Wants:** an honest earliest date that accounts for hand-offs, not the sum of review hours.

### 1016 · Merge conflict from a PR that merged first
PR #950 and PR #951 both touch billing.ts. #950 was approved yesterday, #951 last week. #950 merges first and #951 now conflicts. The author of #951 is asleep.
**Wants:** #951's new state (needs rework, date unknown) to be visible immediately and its downstream items to be warned.

### 1017 · PR that sat eight months
Contributor Yuki opened PR #310 in January. Maintainers never reviewed it. In September it conflicts with 41 files. Yuki returns and asks if it is still wanted.
**Wants:** the long wait to be recorded as the project's delay, not Yuki's, and the age to be shown without shaming.

### 1018 · Abandoned PR that another person adopts
Author Deniz vanishes after PR #420 gets changes requested. Three months later Ivo picks up the branch and pushes 5 commits. credit and history now span two people and a gap.
**Wants:** the time to show who worked when, and the gap to be plain, not counted as active effort.

### 1019 · Good first issue claimed and ghosted
Issue #88 has the label good first issue. Newcomer Kofi comments "I will take this" on March 3. Nothing happens for 6 weeks; another newcomer asks on April 14. a maintainer wants to release the claim politely.
**Wants:** the claim to be seen as a soft promise with an age, and the maintainer's release to be recorded.

### 1020 · Maintainer with 4 hours a week
The only maintainer of a library can give 4 hours per week on Sundays. 37 PRs are open, average review 40 minutes. the queue would take 25 hours to clear, over 6 weeks, while new PRs keep arriving at 5 per week.
**Wants:** an honest statement that the queue is not shrinking, and which PRs are reached and when.

### 1021 · Contributors from everywhere, one maintainer's clock
A contributor in Lagos comments at 03:00 UTC, one in Vancouver at 20:00 UTC, the maintainer in Seoul reads at 22:00 UTC. A discussion needs 3 back-and-forths. each round trip takes 24 hours because nobody overlaps.
**Wants:** the conversation's real calendar length to be predictable from who can answer when.

### 1022 · Key reviewer leaves the company
Reviewer Hanna owns 12 open reviews and is the only CODEOWNER of payments/. Her last day is the 20th. on the 21st those 12 PRs have no valid reviewer and payments/ PRs cannot merge.
**Wants:** the team to see the cliff coming in advance, per PR, with the ones due before the 20th separated from the rest.

### 1023 · CODEOWNERS approval from a team that is on vacation
PR #1010 touches a file owned by the team @infra. The team has 3 members; 2 are on leave this week and the third is the author. the author cannot approve their own PR.
**Wants:** to see that the approval is impossible before next Monday, not just missing.

### 1024 · CODEOWNERS file changed while PRs are open
On Tuesday a PR changes CODEOWNERS to add a new required team for src/ledger/. 8 open PRs touch that directory and had already been approved. they all need an extra approval that did not exist when they were reviewed.
**Wants:** to see which approvals were valid under old rules and which need redoing, with times.

### 1025 · Flaky test decides the merge time
Test checkout_e2e fails about 1 run in 6 with no code cause. PR #1100 fails on the first run, passes on the second. Each run is 18 minutes with a queue wait of 5 to 30. the PR ends up merging 2 hours after approval.
**Wants:** flakiness to be taken as part of the expected time, a range rather than a single number.

### 1026 · CI queue wait dominated by a monorepo build
Shared runners: 40 PRs push at once at 16:55 on Friday. Each needs 12 runners-minutes and the pool has 8 slots. the last PRs start CI at 18:20.
**Wants:** each PR's finish estimate to update from the live queue, not from a fixed 20 minutes.

### 1027 · Merge queue ejects one PR and re-tests the rest
Merge queue holds PRs #1201 to #1206 in order. #1203 fails its checks. #1203 is removed, and #1204 to #1206 must be re-tested against a base without it, adding about 20 minutes each.
**Wants:** each remaining PR's expected merge time to move and #1203's owner to be told exactly what pushed whom.

### 1028 · Required check that is not run on the target branch
A required check "e2e" is only triggered on branches named main and release/*. PR #1230 targets a branch called next. the check is required and never appears, so the PR waits forever.
**Wants:** the wait to be marked as unsatisfiable, not as merely slow.

### 1029 · Merge queue timeout vs long CI
Merge queue is set to consider checks failed after 60 minutes. Because of a runner outage CI takes 75 minutes for the first PR in the queue. the PR is ejected as failed though it would have passed.
**Wants:** the record to show an ejection caused by time, not by code.

### 1030 · Release train departing on a fixed schedule
The project ships every second Tuesday at 14:00 UTC. Anything not merged 48 hours earlier waits for the next train. PR #1300 merges 47 hours 30 minutes before. it misses the train by 30 minutes.
**Wants:** the missed departure and the next one to be plain, with 14 days of extra wait clearly attributed to that 30 minutes.

### 1031 · Weekly release skipping a holiday
Releases happen every Thursday. Thursday, November 26 is a public holiday for the release manager and half the team. the release is either moved to Wednesday or skipped.
**Wants:** the recurring pattern to survive the exception without the whole series shifting permanently.

### 1032 · Release branch cut with PRs half-merged
Branch release/5.1 is cut Monday 09:00 from main. At that moment PR #1400 is approved and in the merge queue at position 2. it lands 4 minutes after the cut and is not in 5.1.
**Wants:** the boundary to be exact, and #1400's fate to be clear: 5.2 rather than 5.1.

### 1033 · Feature flag decouples merge from release
Feature "new-checkout" is merged on the 3rd behind a flag off. Marketing wants it on for the 15th at 10:00 in each region, gradually: 5 percent, then 25, then 100 over 3 days. the code date and the user-visible date are different, and the rollout has three steps.
**Wants:** both dates to be visible and the ramp to be a sequence with its own timing.

### 1034 · Feature flag left on for two years
Flag legacy-export was meant to be removed in release 4.0, tracked by issue #77. Issue #77 was closed by a stale bot. The flag is still in code. a new dev asks if it is safe to delete.
**Wants:** the promised removal to be seen as overdue, not as forgotten history.

### 1035 · Hotfix must land on three release branches
A security bug is fixed on main as PR #1500. Supported branches: release/3.x, release/4.x, release/5.x. three backport PRs are needed, each with different conflicts; 3.x is on a different CI system that takes 3 hours.
**Wants:** to see the fix as one piece of work with three landings, each with its own time, and which users are unprotected until each lands.

### 1036 · Backport that cannot apply
The fix in #1500 relies on a refactor that only exists in 5.x. The 3.x backport would need 2 weeks of rewriting. Support policy says 3.x gets security fixes within 7 days. the constraint cannot be met.
**Wants:** the impossibility to be stated with the numbers, and the choice (end-of-life 3.x, rewrite, ask for exception) to be visible.

### 1037 · Security fix under embargo
A vulnerability is reported privately. The fix is prepared in a private fork, coordinated disclosure date is the 12th at 15:00 UTC, when distributions publish simultaneously. 5 people know, the public tracker shows nothing, yet downstream distros expect the patch on the 10th.
**Wants:** the private work to have a real schedule visible to those who are inside and to leave no trace for those who are outside.

### 1038 · Embargo date moves after leak
On the 8th a reporter posts a hint of the bug. The team pulls the disclosure from the 12th to the 9th. the private fork work planned for 4 more days has 1 day left.
**Wants:** the compressed plan to show what will be skipped, and who has to be told, without the public side learning why.

### 1039 · Semantic version bump decided by what merged
The last release was 2.7.3. Between then and the cut, one PR is labelled breaking, three are features, and eleven are fixes. the release manager reverts the breaking PR on the day before the cut.
**Wants:** the next number to be recognised as 2.8.0 instead of 3.0.0 as soon as the change is made, and the changelog to follow.

### 1040 · Changelog promised for a version that got skipped
The changelog says "3.1.0 - Feb 12" but 3.1.0 was never tagged; 3.1.1 was released Feb 20 to fix a botched publish. users asking when a feature arrived get two different answers.
**Wants:** the record to say plainly that the promised date did not happen and what happened instead.

### 1041 · Renovate wave
On the 1st Renovate opens 46 dependency PRs at once across 6 repositories. Each needs CI (15 minutes) and a human glance (5 minutes). The team has 2 people this week. the wave collides with real feature work.
**Wants:** the wave to be seen as one thing with a total cost, and its effect on planned work to be clear.

### 1042 · Dependency update that must go in a particular order
Updating library A to v4 requires B to be v3 first, which requires C to be v2 first. Each of them opens a separate bot PR. merging in the bot's opening order fails twice.
**Wants:** the correct order to be known even though the bots do not know it.

### 1043 · Waiting on an upstream release
PR #1600 needs a fix from upstream library zlib-ng, which has a merged fix but no release. Upstream releases "when ready", roughly every 8 to 12 weeks, last one 7 weeks ago. the PR is otherwise done.
**Wants:** a prediction of the unblock date with honest error bars, and it to tighten if upstream announces a candidate.

### 1044 · Upstream yanks a release
The team's PR #1650 was written against upstream v2.5.0. Upstream yanks v2.5.0 and re-publishes as v2.5.1 with a different API. PR #1650 and two follow-ups are now based on something that officially never existed.
**Wants:** the affected work to be identified and the delay to be attributed to the upstream event.

### 1045 · Merge reverted after release
PR #1700 merged Monday and was included in release 6.2 on Tuesday. Wednesday it is reverted because of a data loss report. The revert ships in 6.2.1 on Thursday. for a day, users had a bad build.
**Wants:** the record to show the merge, the release, the revert and the window of exposure, and that "done on Monday" was later corrected.

### 1046 · Commit dated wrong
A developer's laptop clock was 3 days behind for a week. Her 9 commits carry dates 3 days earlier than reality; cycle-time reports show PR #1750 as merged before it was opened. the metrics show a negative lead time.
**Wants:** the real timeline to be recoverable and the wrong dates to be visible as wrong, not deleted.

### 1047 · Author date vs commit date
Commit abc123 was authored on the 2nd, rebased on the 20th and cherry-picked to a release branch on the 25th. Author date says the 2nd, commit date says the 25th. two tools disagree about when the work happened.
**Wants:** both moments to exist, with a clear answer to "when was it written" and "when did it reach users".

### 1048 · Commits as evidence of work time
Issue #1800 has 14 commits over 5 days: bursts of 2 hours on Monday, 20 minutes Tuesday, 3 hours Thursday, a 1 a.m. commit Friday. No timer was running. the manager asks how many hours it took.
**Wants:** an estimate with a range from the evidence, clearly marked as inferred, not measured.

### 1049 · Work done without commits
Developer Rui spent Wednesday reading code and talking to two colleagues about issue #1810 and produced one commit of 3 lines on Thursday. the commit history shows almost no effort.
**Wants:** the day of investigation to be recordable and counted as time on the issue without pretending there was output.

### 1050 · One sitting spread across several issues
During a 3-hour session Nina pushes commits for #1820, #1822 and #1830, switching back and forth. the 3 hours must be accounted for.
**Wants:** to say honestly that the time is shared, and not have the same 3 hours counted three times.

### 1051 · Sittings across time zones for a traveller
Amir works on #1850 in Tokyo, then on a flight, then in Lisbon. The commit timestamps have three different offsets in three days. reports place a commit "before" the previous one.
**Wants:** the true order of his work to hold regardless of the offset in each timestamp.

### 1052 · Pair session credited to two people
Two developers pair on #1900 for 4 hours; only one is the commit author, the other appears as co-author. capacity planning counts 4 hours for one and 0 for the other.
**Wants:** both people to be busy for that time, and the 4 hours to count as one piece of progress on the issue.

### 1053 · Mob session with six people
A mob of 6 works on the flaky checkout tests for 2 hours. 12 person-hours are spent and one issue moves. velocity per person looks terrible.
**Wants:** the session to be represented as what it was, a shared block of time that all six were in.

### 1054 · On-call page mid-review
Reviewer Tomas is halfway through a 90-minute review of PR #1950 when he is paged for an outage and spends 5 hours on it. the review is left half-read and his promise to review by end of day is broken through no fault of his own.
**Wants:** the review's new expected time to move and the cause to be tied to the incident, not to Tomas.

### 1055 · Kanban WIP limit blocks a start
The In Progress column has a limit of 4 and holds 4 items. Urgent issue #2000 needs to start now. either an item is pushed out or the limit is broken.
**Wants:** to see which item would pay, and the trade-off written down, not hidden.

### 1056 · Item sits idle in a column
Issue #2010 is In Review for 11 days. Actual review work is 25 minutes; the rest is waiting. cycle time says 14 days.
**Wants:** the split between touch time and waiting time so the team sees where the days go.

### 1057 · Lead time vs cycle time on one issue
Issue #2020 was filed on March 1, prioritised on March 20, started on April 2, merged on April 9, released on April 30. the team is asked for the lead time.
**Wants:** each of those moments to be recoverable so that lead time, cycle time and time-to-user are all answerable from one history.

### 1058 · Burndown on a sprint whose scope changed
Sprint 22 starts with 40 points. Day 3 adds 8, day 6 removes 5, and one 5-point issue splits into 3 and 3. the burndown flattens, then dips.
**Wants:** the plan at start and the plan now to both be kept, so that the answer to "did we deliver what we promised" is not rewritten.

### 1059 · Linear cycle rollover
In Linear, cycles are 2 weeks long and unfinished issues roll into the next automatically. Issue #2050 rolls over 4 cycles in a row. it appears in each cycle as new work.
**Wants:** its age across cycles to be visible and the repeated slip to be surfaced as a pattern.

### 1060 · Cycle with a cooldown gap
The team runs 6-week cycles followed by a 1-week cooldown with no planned work, during which small fixes are still merged. issue #2060 lands in the cooldown.
**Wants:** the gap not to be counted as either late or early, and its work to belong to neither cycle.

### 1061 · Roadmap milestone with a due date and a moving scope
Milestone "Beta" is due October 31, holds 60 issues, and 12 more are added in the last month. Completion is 70 percent. a stakeholder asks if October 31 is safe.
**Wants:** an answer that separates progress on the old scope from the added scope.

### 1062 · Milestone due date that is a promise to a customer
Milestone "Acme import" has a contractual date of Nov 15. Internal estimates say Nov 22 with a 4 day error. The customer can only see the milestone. the team cannot show Nov 22 to the customer.
**Wants:** one date to be visible externally and another kept internally, with the gap known to those inside.

### 1063 · Code review in a hurry before a holiday
Everyone leaves on December 23; PR #2100 must merge by then to hit the January release. Reviewer availability: Alice until the 20th, Bruno until the 22nd. the review can happen only in a window of 3 days.
**Wants:** to see the window as the real constraint and the risk that a change request consumes it.

### 1064 · Reviewer bottleneck across many PRs
Senior reviewer Zoe is the required approver for 9 of the 14 open PRs and has 6 hours per week for review. Each needs about 90 minutes. 13.5 hours of review chase 6 hours per week.
**Wants:** the queue order and the resulting merge dates for each to be visible, and the result of moving one reviewer elsewhere.

### 1065 · Monorepo with 3,000 open PRs
A monorepo has 3,041 open PRs, 800 of them stale drafts and 1,100 touching generated files. A change to a shared header file invalidates the CI cache of about 600. one merge triggers 600 CI reruns.
**Wants:** the system to stay usable at that size, and a view of what a single merge disturbs without listing 600 things one by one.

### 1066 · Squash merge erases stack relationships
Stacked PRs #2201 to #2203 are squash-merged bottom-up. After each squash, the next PR's branch contains commits that no longer exist upstream. the tool sees the top PR as containing everything again.
**Wants:** the fact that the work was already delivered to be known, and not double-counted in lead time.

### 1067 · Reopened issue after "fixed"
Issue #2300 is closed by PR #2299 on the 5th. On the 19th the same symptom returns and it is reopened. the closed period is 14 days.
**Wants:** the first close to remain part of the record as a claim that turned out wrong, and cycle time to be recorded per attempt.

### 1068 · Issue closed by a PR that is later reverted
PR #2310 says "Fixes #2311". It merges and the issue auto-closes. The PR is reverted 2 days later, but the issue stays closed. the milestone shows 100 percent while the problem exists.
**Wants:** the milestone to be corrected as soon as the revert lands, with the earlier claim kept in history.

### 1069 · Issue transferred to another repository
Issue web#2400 with 3 sub-issues, 12 comments and a due date of the 20th is transferred on the 9th to the api repository, whose team plans in 3-week cycles that start on the 14th. the issue arrives under a different team's rhythm and a different numbering.
**Wants:** its age, order among its siblings and the date it was promised to stay intact, and to see how the new team's cycle changes when it can happen.

### 1070 · Auto-merge waiting on a condition that never fires
PR #2410 has auto-merge on, waiting for approval by a user who has since been removed from the org. the PR is otherwise green and sits for 3 weeks.
**Wants:** the wait to be seen as dead, not slow, and cancelled or reassigned when its condition can no longer happen.

### 1071 · Conditional PR cancelled when its issue is dropped
PR #2420 implements issue #2419. The product owner closes #2419 as won't-do on Thursday at 17:00, while the PR has 2 approvals and is next in the merge queue. the queue would merge it at 17:20.
**Wants:** the PR's plan to be cancelled or paused because its reason vanished, before the merge.

### 1072 · Planned vs actual for a whole release
Release 7.0 was planned in January for June 1 with 80 issues. It shipped on July 19 with 61 issues, 9 added late and 28 moved to 7.1. the retrospective needs an honest picture.
**Wants:** the original plan, the changes to it and the outcome to be all present, with each date change carrying its reason.

### 1073 · Two servers, two organisations, one shared upstream issue
Company A's team and Company B's team both depend on upstream issue lib#900 and both run their own trackers. Neither wants to expose its full roadmap. A learns from a public comment that the fix lands next month and wants B to know its own downstream date will move.
**Wants:** each to learn only what affects it about the other's dates, and nothing more.

### 1074 · Fork that diverges from upstream on a different release rhythm
A company keeps a private fork tracking upstream but adds 30 patches. Upstream ships every 6 weeks; the fork rebases onto each release, taking about 3 days and breaking a few patches. upstream release 9.0 is a big rewrite and the rebase is estimated at 3 weeks.
**Wants:** the fork's schedule to be shown moving with upstream's, and the internal patches to be at risk where upstream changed.

### 1075 · Time-boxed spike whose answer is a date
Issue #2500 is a 2-day spike whose output is an estimate for a 6-week project. The project is due in 8 weeks. the spike ends and says 9 weeks.
**Wants:** the project's date to be a range that only becomes narrower once the spike returns, and its deadline conflict to appear at that moment.

## Studying and school

### 1076 · National exam season with several sittings
A student prepares for LGS in June, but also sits two school-set mock sittings in March and April that are run by the district on their own dates. The mock results are supposed to tell her which topics to spend May on.
**Wants:** The May plan to be built from the March and April results once they arrive, and to stay blank-but-reserved until then.

### 1077 · Revision timetable built from what is weak
After a mock, Mert scored 12 of 40 in geometry and 35 of 40 in Turkish. He has 3 hours a day free. He wants geometry to get more of them until the next mock in two weeks.
**Wants:** His hours to be shifted toward geometry automatically after each result, and shifted back when geometry improves.

### 1078 · Mock-exam result that arrives days after the sitting
Ayşe took a private-school mock exam on Sunday; the school posts the results on Thursday. She has already studied Monday to Wednesday according to a plan that assumed a different weak subject.
**Wants:** The plan for Monday to Wednesday to be shown as having been made without the result, and the days from Thursday to adapt to it.

### 1079 · Exam day that crosses midnight for a student abroad
Emre studies in Sydney for a Turkish university online entrance exam that starts at 01:30 on Sunday in his time zone, which is Saturday afternoon in Istanbul. His parents in Istanbul plan the weekend around Saturday.
**Wants:** The exam to appear on the day that is true for each person looking at it, and sleep to be planned around it for Emre.

### 1080 · Anki-style review intervals that grow
Selin learns a card on Monday. It comes back after 1 day, then 3, then 8, then 20, as she answers correctly. If she answers wrong it goes back to 1 day.
**Wants:** For each card, to know when it is next due, and for the growth of gaps to be respected rather than being flattened into a weekly slot.

### 1081 · Review pile after a missed week
Kaan has 180 cards due each day. He is ill for 7 days and returns to 1,260 overdue cards, and on top of that 20 new cards he was supposed to add each day.
**Wants:** A workable way back, such as a sensible daily amount that clears the pile by a date he can see, with new cards paused, and not a wall of 1,260.

### 1082 · 20,000 flashcards
Buse has a medical deck of 20,000 cards, added over two years. Each has its own due date. She wants to know how the next 30 days look, and how far the daily load grows.
**Wants:** A useful view of the coming month, per day and per subject, that opens quickly and does not need every card listed.

### 1083 · Cards due at different hours
Anki-style learning cards have steps of 10 minutes and 1 day. Tolga answers a new card at 23:40; the next morning at 06:00 it is technically due, but at 00:30 the "day" has changed in his app.
**Wants:** A clear rule he can see for when a day ends for his reviews, and cards to fall on the day he expects.

### 1084 · Deck shared by a class
A teacher, Ms. Kaya, gives 25 students a deck of 300 vocabulary cards. Each student has their own review history. She wants to see how many students are behind, but not each student's whole history.
**Wants:** A class-level view of who is behind and by how much, and each student's private record left alone.

### 1085 · Interleaving two subjects on purpose
Nur wants maths, physics and chemistry problems mixed within one 90-minute evening, not three blocks. Each has its own list of problem sets in a fixed order.
**Wants:** A mixed evening in which each subject still moves through its own list in order.

### 1086 · Retrieval practice after a lesson
After each biology lesson, Ali wants a 10-minute closed-book recall session that evening, another after 3 days and another after 10 days. He has 4 lessons a week.
**Wants:** The recall sessions to appear tied to the lesson they follow, and to move when the lesson moves.

### 1087 · Lesson moved, follow-up recall moves too
Ali's Tuesday biology lesson is moved to Wednesday by the school. The recall sessions he had planned for Tuesday evening, Friday and the Friday after are tied to it.
**Wants:** The follow-ups to shift with the lesson without him fixing each one, and any that now collide with something else to be pointed out.

### 1088 · Homework due at a set hour
Oya has an essay due Friday 23:59 on the class site. It needs research, a draft, a peer review and a final. She estimates 8 hours total.
**Wants:** Work blocks laid out before Friday that add up to the estimate, and a warning when the free time before the deadline drops below it.

### 1089 · Estimate that turns out wrong
Oya guessed 8 hours for the essay. After two blocks she has used 5 hours and finished one third.
**Wants:** The remaining time to be re-estimated from what actually happened, and the deadline warning to change accordingly.

### 1090 · Homework deadline given only as "next lesson"
Mr. Demir says "hand it in next lesson". The class meets Monday and Thursday on a two-week rotation where some weeks are missing Monday.
**Wants:** The deadline to resolve to the right actual date and to be recomputed if the timetable changes.

### 1091 · Late work accepted with a penalty
Sude's teacher takes late homework for 48 hours with a 10 percent deduction per day. It is due Wednesday 17:00.
**Wants:** To see the different deadlines and what each costs, and to choose knowingly.

### 1092 · Group project of four, with a fixed presentation date
Four classmates, Ece, Arda, Melis and Barış, must present on 14 May. Each has a part; Arda's slides need Ece's research and Melis's figures need Arda's data. They have different timetables and outside activities.
**Wants:** One shared picture of who needs what from whom by when, without each person's whole calendar being shown to the others.

### 1093 · A teammate drops out
Two weeks before the presentation, Melis leaves the school. Her figures were half done, and Barış's part depended on them.
**Wants:** The team to see what work is now unowned, how much time is left for it, and what else moves.

### 1094 · A teammate goes quiet, then returns
Arda does not answer for eight days, then returns with the data. Ece has already replaced his part with her own.
**Wants:** Both versions of the work to be visible with the dates they arrived, so the team can decide.

### 1095 · Group members in different time zones
A university project group includes Yuki in Tokyo, Mateo in Mexico City and Leyla in Ankara. They want a weekly one-hour call in a shared window that fits everyone's waking hours.
**Wants:** Candidate hours that work for all three, without each of them exposing their whole week.

### 1096 · A/B week timetable
Marlow School runs Week A and Week B. Physics is on Monday period 2 in Week A and Wednesday period 4 in Week B. Week A starts in the first week of September.
**Wants:** Every lesson to land on the right actual date all year, and to stay right after a break interrupts the rotation.

### 1097 · Rotation pauses over a holiday
The two-week rotation was in Week B when the autumn half-term began. After the break, the school restarts in Week A regardless.
**Wants:** The rotation to follow the school's rule, and the student's homework deadlines that were set "for Week B" to be understood correctly.

### 1098 · Lesson cancelled
The teacher of Thursday period 3 history is sick. The lesson is cancelled, and a worksheet is set instead.
**Wants:** The free hour to show up as free, the worksheet to appear with its own due time, and the history course to see it is a lesson behind.

### 1099 · Two lessons swapped
The school swaps Tuesday period 1 (maths) with Tuesday period 5 (art) for one week only.
**Wants:** The change to apply for that week only, with normal Tuesdays before and after, and homework "due next maths" to follow the swap.

### 1100 · Substitute teacher
A substitute covers Friday's chemistry lab. She cannot run the planned titration and does a reading instead.
**Wants:** The lab to be shown as not done, still owed, and the syllabus order to remain intact.

### 1101 · Missed lessons pile up the syllabus
Chemistry lost 6 lessons this term to cancellations, trips and strikes. The syllabus still expects 14 topics before the exam.
**Wants:** To see how far behind the syllabus the class is, and what the exam date now requires of the remaining lessons.

### 1102 · Term breaks
The Turkish first term ends 23 January; the mid-year break is two weeks. A student wants to use the break for revision but not on the Sunday of the family trip.
**Wants:** The break to appear as a block with its own rules, and revision to fill it around fixed family plans.

### 1103 · Course registration with a queue
Ilgın registers for 5 courses at 09:00 on the day the university opens registration. Two have 40 seats and one hundred students. One of her choices overlaps with a lab on Tuesday.
**Wants:** A preview of timetables under different outcomes, so she can decide what to pick first and what she does if a seat is refused.

### 1104 · Registration full, waiting list moves
Ilgın is 12th on the waiting list for Algorithms. Over the next week she moves to 7th, then is offered a seat with 24 hours to accept.
**Wants:** Her timetable to show both possible futures until she answers, and the 24-hour clock to be clear.

### 1105 · Prerequisite across semesters with a gap
Onur needs Calculus II in autumn to take Differential Equations in spring. Calculus II is only offered in autumn. He fails it in December; the next chance is a year away.
**Wants:** To see what is delayed as a result, including the graduation date, and what could be done in the spring instead.

### 1106 · Degree plan over four years
Selma has 240 credits to earn over 8 semesters, with required courses, electives, an internship in summer and a graduation project. Each course is offered in some semesters only.
**Wants:** The whole four years visible at once, with what is done, planned, and at risk, and the ability to look at just next term.

### 1107 · Course offering changes
The department stops offering Compiler Design next autumn. Three students had planned to take it in their sixth semester.
**Wants:** Each of them to see that their graduation plan is affected, without seeing each other's plans.

### 1108 · Office hours
Prof. Aksoy holds office hours Tuesdays 14:00 to 16:00, first come first served, 15 minutes each. Berk needs 30 minutes to discuss a thesis chapter and has lab until 14:45.
**Wants:** A slot that suits both Berk and the professor, and to be told if none exists this week.

### 1109 · Office hours cancelled for one week
The professor is at a conference for the first two weeks of November. Seven students had booked.
**Wants:** The bookings to be moved or offered again, and the students' plans that depended on that meeting to be noticed.

### 1110 · Lab session with fixed equipment
Chemistry lab on Wednesday 13:00 to 17:00 needs the instrument room, which is shared with another course that runs late. Sessions there have overrun by 30 minutes for three weeks.
**Wants:** The student to see that the lab tends to run until 17:30 and what that does to the class after it.

### 1111 · Thesis milestones with a supervisor
Deniz has to submit a proposal by 15 November, a first draft in March, a final in May and a defence in June. His supervisor, Prof. Yılmaz, needs three weeks to read each draft.
**Wants:** To see when he must send each piece so that feedback arrives in time, and to see the effect of a slip early on.

### 1112 · Supervisor reads late
Prof. Yılmaz promised proposal comments within 21 days and returns them after 31. Deniz had planned his next chapter to begin when the comments arrived.
**Wants:** Later milestones to adjust to the actual return date, and to see how much slack remains before the defence.

### 1113 · Thesis with several people
Deniz's thesis also has a co-supervisor, Dr. Arslan, in another city, and a second reader who joins only in April. Each has different times when they can read.
**Wants:** One timeline in which each reader's part appears only to them and to Deniz.

### 1114 · Reading assignment in pages
Prof. Erdem assigns chapters 4 to 6 of a textbook, 88 pages, before Thursday. Ceren reads about 20 pages an hour but 8 pages an hour on the dense chapter 5.
**Wants:** The reading time to be estimated from her actual speed per chapter, and spread across her days.

### 1115 · Reading a chapter that turns out longer
The PDF edition Ceren downloaded has chapter 5 at 46 pages; the printed copy the class uses has 31.
**Wants:** Progress to be measured against the same thing for everyone, not "page 40 of 46" for some and "page 31" for others.

### 1116 · Weekly reading across courses
In one week four courses assign 35, 60, 120 and 15 pages. Ceren also has a quiz and a lab report that week.
**Wants:** To see the week's total load compared with her usual, and which deadline should drive the order.

### 1117 · Private tutoring after school
Mehmet attends a dershane for maths Tuesday and Thursday 17:00 to 19:30. The teacher there follows a different order of topics from his school, and they overlap for only a few weeks.
**Wants:** Both orders to be visible together, and the weeks where dershane teaches something school has not yet reached to be marked.

### 1118 · Etüt hour with homework
His school has a compulsory supervised study hour (etüt) on Monday and Wednesday 16:00 to 17:00, which he uses for homework. Two of those hours are missed for a school trip.
**Wants:** The homework that would have been done there to appear elsewhere in the week, or be flagged.

### 1119 · Tutoring package with a set number of lessons
Sibel bought 10 private English lessons that must be used within 3 months. Six are done. Lessons get cancelled by either side.
**Wants:** To see how many remain, how many weeks are left, and whether the rest still fit.

### 1120 · Extracurricular activity clashes with study
Lara plays basketball Monday, Wednesday and Friday 18:00 to 20:00. Tournament finals fall in the week before her mock exam, with two extra practices.
**Wants:** The clashing days to be visible and the study plan for that week to be rebalanced, with a choice about what gives.

### 1121 · Study with me session
Vera joins a public "study with me" livestream for 2 hours starting 20:00 UTC. The host runs 50-minute blocks with 10-minute breaks, and Vera is in a different timezone.
**Wants:** The host's blocks to appear at her local time, and her own work to fit inside them.

### 1122 · Study streak broken by a timezone
Jonas keeps a 62-day streak. He flies from Berlin to Los Angeles, studies at 22:00 local on Tuesday, which the app considers Wednesday morning.
**Wants:** The streak to count the day he actually experienced.

### 1123 · Streak freeze and honesty
Sofia has a 100-day language streak. She is in hospital for 3 days and does nothing. The app offers to freeze it, but she wants her record to say what happened.
**Wants:** The streak to survive if she chooses, while the record still shows the three days without study.

### 1124 · Planned versus actual study hours
Tuğba planned 25 hours this week and logged 14. Last week she planned 20 and logged 21. Over the term she averages 70 percent of plan.
**Wants:** Her future plans to be based on the 70 percent she really achieves, and to see the gap without judgement.

### 1125 · A logged session that did not happen
Kerem logged 3 hours of chemistry on Tuesday by tapping a timer, then realised he left it running while he slept at the library desk for an hour and went to lunch for another.
**Wants:** To correct the record down to 1 hour, with the correction visible, and every total that used it to change.

### 1126 · Correcting the past for a teacher
Kerem's teacher already saw "3 hours" on Tuesday and used it to say he was on track. Kerem corrects it to 1 hour on Thursday.
**Wants:** The teacher to see the correction, and what it changes, without a silent rewrite of what was said earlier.

### 1127 · Parent seeing too much
Neslihan is 16. Her mother can see her study hours per subject. The app also shows the time of day and, by pattern, when she is out with friends instead.
**Wants:** Her mother to see the study totals she was promised and nothing about the rest of her day.

### 1128 · Parent seeing progress but not marks
A father wants to know if his son is keeping up with his revision plan. The son does not want him to see individual mock-exam scores.
**Wants:** The father to see "on plan or behind" and not the scores.

### 1129 · Teacher seeing a class
Mr. Çelik teaches 5 classes of 28. He wants to see who is behind on the reading list this week without opening each student.
**Wants:** A count and a list of students behind, with each student's other subjects out of view.

### 1130 · Student changes who sees what mid-year
In March Neslihan turns 18 and asks that her parents no longer see the details, only that she has an exam on a given day.
**Wants:** The change to take effect from that date, with the history she shared before staying what it was.

### 1131 · Grades arriving later than the work
Ozan handed in an essay on 3 October. It is marked on 29 October. His plan for November was based on an assumed pass mark of 70.
**Wants:** The grade to attach to the essay when it lands, not to the day it lands, and the November plan to update if it differs.

### 1132 · Grade changes the plan for the whole course
A midterm counts for 30 percent. Ozan scores 41 and needs at least 60 on the final to pass. There are 6 weeks left.
**Wants:** To see what score he needs and how much study that implies compared with what he has planned.

### 1133 · Regrade after appeal
A mark of 52 is appealed. Two weeks later it becomes 61. Meanwhile the student had dropped a follow-up course because of the first mark.
**Wants:** The history of the change to be visible, and the consequences already acted on to be shown.

### 1134 · Extra time for ADHD
Lina has 25 percent extra time in exams. A 90-minute exam is therefore 112.5 minutes, and the next lesson starts 100 minutes after the exam begins.
**Wants:** The clash to show up only for her, without the others seeing why, and for the school to be told.

### 1135 · Dyslexia and reading load
Marek's reading is about half the speed of his class. The class is told to read 40 pages overnight.
**Wants:** The time it takes him to be estimated from his own speed, and the plan to show what does not fit, without a label on the student in the class view.

### 1136 · Extra time on a deadline
Lina has a three-day extension on written assignments. A group project deadline is shared with three others who do not.
**Wants:** Her personal date to differ from the group's without the group's plan changing.

### 1137 · Shorter focus blocks
A student with ADHD studies in 15-minute blocks with 5-minute breaks and rarely completes a planned two-hour evening.
**Wants:** The evening to be planned as many small blocks that are counted properly, not as one failed long block.

### 1138 · MOOC with self-paced deadlines
Diego enrols in a 10-week online course. Each week has a suggested deadline, but only the final on 30 June is hard. If he misses weekly ones, they roll over.
**Wants:** To see soft and hard dates apart, and how far behind he is in relation to the hard one.

### 1139 · MOOC with a cohort start
A course begins on the first Monday of each month and runs 8 weeks. Diego joins the cohort of 1 July but starts a week late.
**Wants:** His schedule to be that cohort's, shifted, and the certificate deadline to be clear.

### 1140 · Language learning with different skills
Pınar wants listening, reading, speaking and writing to be balanced, but she only does listening because it is easiest to log.
**Wants:** To see the balance across the four over the last month.

### 1141 · Music practice with a teacher's weekly plan
Cello teacher Mrs. Roth sets for the week: scales 10 minutes daily, a piece at 60 bpm, another at 72. Nadia practises 4 of 7 days and lessons are Saturday at 11:00.
**Wants:** To see, before the lesson, what was done against the plan, and for the teacher to receive it if Nadia agrees.

### 1142 · Practice tempo that grows
The plan says "60 bpm this week, 66 next, 72 after", but only if the piece is clean at the current tempo.
**Wants:** The step-up to happen when she is ready and not on a calendar date.

### 1143 · Driving lessons and a test date
Baran has 12 lessons booked with an instructor, twice a week, and a driving test on 2 April that took 9 weeks to get. Two lessons are cancelled for bad weather.
**Wants:** To see whether he has enough lessons before the test and what happens if he cannot get one, including a warning that moving the test may take weeks.

### 1144 · Test date lost, lessons wasted
Baran fails the test and the next available date is 11 weeks later. The instructor's price package lasts 3 months.
**Wants:** The plan for the wait to appear, with lessons spread out so the skills stay fresh.

### 1145 · Recurring lesson with exceptions
Piano lesson every Wednesday 16:00 for the school year. It is off on the two weeks of exams, moved to 17:00 on 12 March, and doubled on 9 April to make up for an earlier miss.
**Wants:** The pattern to remain intact with these exceptions listed, and the pattern to keep working when the year's dates change.

### 1146 · Studying while a family event is uncertain
Yusuf's cousin's wedding is "sometime in the second half of June", the date not yet fixed, and his final is on 22 June.
**Wants:** His preparation to stay valid whichever date it turns out to be, and to see which dates would hurt.

### 1147 · Sleep as a limit on study
A student planning a night before a 08:30 exam finds the plan has study until 02:00. Her school's advice is at least 8 hours' sleep.
**Wants:** To be told the plan breaks her own sleep limit and what the last reasonable hour of study is.

### 1148 · Handover between school years
Ela moves from grade 9 to 10. Her notes, flashcards and reading lists from grade 9 are still needed for the exam in grade 12, but the timetable, teachers and classmates are all new.
**Wants:** The old work to stay findable and linked to the future exam, and the new year to start clean.

## Studying for one exam

### 1149 · Topic list larger than the days left
Deniz has a Biology midterm on Friday with 14 chapters on the syllabus. It is Monday evening and she can give roughly 2 hours a day. At even pace that is 1.2 chapters a day less than she needs. She adds the chapters anyway.
**Wants:** To be told plainly, before Tuesday, that the plan does not fit, and to see which chapters would have to be dropped or squeezed.

### 1150 · Chapter length is a guess that corrects itself
Deniz budgets 45 minutes for chapter 3 because chapter 1 took 45. Chapter 3 has 40 pages and takes 110 minutes. Chapters 4 to 14 are still budgeted at 45 each.
**Wants:** The remaining chapters to look longer after the surprise, without her retyping every estimate.

### 1151 · Cramming the last night vs spread over ten days
Mert has a Statistics quiz in 10 days and 8 topics. He always leaves everything to the last two evenings. His plan shows one topic per day; he ignores it until day 9.
**Wants:** To see honestly what the last-two-evenings version looks like next to the spread version, including how much sleep it costs.

### 1152 · Exam moved earlier by four days
Ayla's Chemistry final was on the 24th. On the 16th the department announces it is now on the 20th. She had 8 days of plan left and now has 4.
**Wants:** Everything already done kept, the remaining topics fitted to 4 days, and whatever no longer fits shown as dropped rather than silently gone.

### 1153 · Exam moved later, and the plan should not relax
The same exam is instead moved from the 24th to the 29th. Ayla's friends say she can rest.
**Wants:** Her extra days offered to her without her earlier plan being erased, so she can choose between finishing early and spreading out.

### 1154 · Exam cancelled after two weeks of preparation
Professor Okan cancels the Thursday quiz and replaces it with a take-home assignment. Selin has 9 study sessions booked around it.
**Wants:** The sessions to stop demanding to be done, while the material she learned stays on record in case the topic returns in the final.

### 1155 · Timetable published after plans were made
Kaan books a weekend trip on the 12th. On the 14th the exam office publishes the timetable: his Physics exam falls on the Monday after the trip at 08:30.
**Wants:** To be shown the trip and the exam together and told what the trip now costs him in study time.

### 1156 · Two exams on the same day
Zeynep has Calculus at 09:00 and Literature at 14:00 on the same Tuesday. Her plan gave each subject that whole day before.
**Wants:** To see that the day before can only be shared, and how much of each subject she gets, not two full days that overlap.

### 1157 · Two exams overlap in clock time
Two exams are published for Elif: Economics 10:00 to 12:00 and Law 11:30 to 13:30. She is enrolled in both.
**Wants:** The clash to be visible the moment the second timetable arrives, and for it to stay visibly unresolved until the office answers.

### 1158 · Two exams push against each other during study
Ozan studies Chemistry from 18:00 to 20:00 and History from 20:00 to 22:00. Chemistry runs 50 minutes long because a reaction mechanism will not click.
**Wants:** History to start later, and if it can no longer finish before his 22:30 bedtime, to hear that before it happens.

### 1159 · Exam week with five exams in six days
Ipek has exams on Monday, Tuesday, Wednesday, Friday and Saturday. Thursday is the only free day and all five subjects claim it.
**Wants:** A single honest view of Thursday's hours, divided by the exams still to come, not five plans each assuming it is theirs.

### 1160 · Exam in a subject she is already strong in
Baris has an English literature exam. Last year he scored 94 on the same teacher's exam. His plan allots the same 10 hours as for Organic Chemistry.
**Wants:** His past results to make the time for the strong subject smaller without him having to say so.

### 1161 · Open-book exam that still needs preparation
Cem's Law exam is open-book, with any printed material allowed. He decides not to study. During the exam he has 3 hours and 40 questions.
**Wants:** Preparation to be shaped by the fact that the book is allowed, for example time for tabbing and summarising, not treated as the same as a closed-book exam.

### 1162 · Closed-book exam with the same syllabus
Cem's Tax Law exam has the same 40-question format but is closed-book.
**Wants:** More recall and memorising time shown for this one than for the open-book Law exam, though both have the same length and day-count.

### 1163 · Oral exam slot assigned by surname
Oral exams run alphabetically. Yilmaz is listed on day 2 at about 15:00; Arslan on day 1 at 09:00. Both study the same topics with the same teacher.
**Wants:** Each person's preparation to end at different moments, with the earlier surname's plan finished a day sooner.

### 1164 · Oral exam slot is only an order
The oral exam list reads: Aksoy, Bilgin, Celik, Demir. No times are given, only that they go one after another and that each takes 10 to 20 minutes. Demir is fourth.
**Wants:** Demir to know roughly when to be there, a range that widens with each earlier person, and not one fake exact time.

### 1165 · Oral exam runs long for those before you
Demir is told to arrive at 13:00. Aksoy's oral takes 25 minutes, Bilgin's 30. By 13:40 Celik is still inside.
**Wants:** Demir's expected time to move as the earlier ones overrun, and his lunch and travel to shift with it.

### 1166 · Oral exam slot swap between two students
Nur (day 1, 10:20) and Tolga (day 2, 14:00) agree to swap because Nur has a hospital appointment on day 2. The teacher agrees by email.
**Wants:** Both plans to change, and neither to have to share their other commitments with the other to make the swap possible.

### 1167 · Practice test under timed conditions
Sena plans a full past paper of 90 minutes on Wednesday at 16:00, no phone. Her flatmate turns on a vacuum cleaner at 16:20 and she stops at minute 35.
**Wants:** The unfinished attempt to count as a partial, not as a completed practice test, and for the timed practice to be rebookable.

### 1168 · Practice test needs the same time of day as the real exam
The real exam is at 08:30. Sena's best study hours are 20:00 to 23:00. She wants at least one practice test at 08:30.
**Wants:** A practice slot at 08:30 made visible as a special need, and the loss of her usual evening slot that day shown.

### 1169 · Practice test result shifts the rest of the plan
Sena scores 40% on practice test one, with most misses in integrals. Her plan had two easy days left for revision.
**Wants:** The weak topic to take more of the remaining time from the topics she already handles, without her rebuilding it by hand.

### 1170 · Study plan fails on day 3
Day 1 and day 2 go to plan. On day 3 Yusuf has a migraine and studies nothing. Seven days remain, and the plan assumed three chapters a day.
**Wants:** The missed day to show as missed, the remaining days to absorb it, and a warning if they cannot.

### 1171 · Ahead of schedule on day 3
Yusuf's friend Leyla covers four chapters on day 1 instead of the planned two.
**Wants:** Her extra progress to show as slack she can spend or keep, not as an invitation to add more topics she never chose.

### 1172 · Correcting the past: session logged with the wrong length
Ahmet logged a 3-hour session, but it started at 14:00 and ended at 15:30 because the library closed for a fire alarm. Two days later he sees the total.
**Wants:** To correct it and have all later estimates of how fast he studies use 1.5 hours, not 3.

### 1173 · Office hours before the exam
Professor Sarikaya holds office hours on Wednesday 14:00 to 16:00, first come first served. Sinem hopes to ask three questions. Eight students are ahead.
**Wants:** A range for when she will actually be seen, and her afternoon study time to reflect the waiting.

### 1174 · Office hours cancelled the day before
The professor emails that Wednesday's office hours are cancelled because she is at a conference. The exam is on Friday.
**Wants:** Sinem's questions to be kept somewhere and offered again at the next chance to ask, and the study block she had reserved after office hours to stay usable.

### 1175 · Office hours answer changes what to study
At office hours the professor says chapter 9 will not be on the exam. Sinem had planned 4 hours for it.
**Wants:** Those 4 hours to be freed, and the chapter not deleted, in case the professor changes her mind.

### 1176 · Group study the night before
Four friends plan a group session on Thursday 19:00 to 22:00 for a Friday 09:00 exam. Two are commuters who live 50 minutes away. One has an evening class ending at 19:15.
**Wants:** A time that works for all four to be found, without any of them showing the others their whole week.

### 1177 · Group session runs late and eats sleep
The group session runs to 00:30. The exam is at 09:00 and one member, Burak, needs 8 hours of sleep to feel functional.
**Wants:** To see that Burak's sleep is now below his own norm and how much of that came from the group session running over.

### 1178 · Group session where one member drops out
Three of the four confirm; Ece cancels at 17:00 for a family emergency. The group had split the topics four ways.
**Wants:** The other three to see her topic left uncovered and choose who takes it, without knowing why Ece dropped out.

### 1179 · Sleep before the exam vs last hour of study
It is 23:15. The exam is at 08:30, Arda's alarm is at 06:45. He has one topic left, worth about 40 minutes.
**Wants:** To be shown what sleeping 7 hours or studying the topic actually costs and gains, and for either choice to be respected.

### 1180 · Exam-day logistics: arrive 30 minutes early
The exam is at 10:00 and the rule says be in the room 30 minutes early. Mira's bus takes 25 minutes and runs every 20 minutes.
**Wants:** The time she must leave home to be shown as a range with the bus gap included, not a single leave-at time.

### 1181 · Exam-day logistics: ID and calculator
The exam requires a student card and an approved calculator model, not a phone. Tarik's card is in his other jacket and his calculator battery was low last week.
**Wants:** These to be reminded at the right evening, and a failed check, such as the card not being found at 07:00, to affect the leave-by time.

### 1182 · Room change on the morning
At 07:40 the exam office posts that the Chemistry exam moves from Room B102 to a hall on the far side of campus, a 15-minute walk further. Mira has already left for the bus.
**Wants:** To be told while there is still time to change her route, and for the arrival estimate to be recomputed.

### 1183 · Traffic and weather on exam morning
It snows heavily on the exam morning and buses run 40 minutes late. Mira's plan has 30 minutes' margin.
**Wants:** The margin to visibly shrink as the delay grows, and a warning at the point it goes to zero, not after.

### 1184 · Exam time zone disagreement
Ines studies abroad but sits an online exam set by her home university. The paper says 14:00. She lives 2 hours ahead of the university. She wonders if it is 14:00 her time or theirs.
**Wants:** The exam shown in her local clock and the university's clock together, with the official statement as the source.

### 1185 · Daylight saving change on exam morning
Clocks go back one hour on the night before an 08:00 exam. Oskar's alarm is set by a phone that changes automatically; his watch and the wall clock in the flat do not.
**Wants:** No disagreement between what he is told and what the exam room clock says, and a clear note about the 25-hour night.

### 1186 · Time per question during the exam
The paper has 60 multiple choice questions in 90 minutes. Petra is at question 22 after 45 minutes.
**Wants:** To see her pace against the rest of the paper while she is sitting it, without needing a phone, if allowed at all.

### 1187 · Running out of time on the exam itself
Petra realises at minute 70 that she still has 20 questions and 20 minutes. She skips ahead.
**Wants:** After the exam, the record to show where time was lost so that next time's plan for pace is based on what happened.

### 1188 · Extra time entitlement
Levent has a documented right to 25% extra time. His exam is 2 hours, and he is scheduled to start at 09:00. The next exam in the same room is at 11:30.
**Wants:** His end time to be 11:30 and not 11:00, and for whatever depends on him finishing to see that.

### 1189 · Exam finishes early and leaves a gap
Ruya's exam is 3 hours but she finishes after 1 hour 40. Her next exam is the following day; she planned to study for it after the exam anyway from 15:00.
**Wants:** The freed time to appear at once, and not to be forced to keep the original schedule.

### 1190 · Exam runs longer than planned for everyone
A fire drill halts the exam for 20 minutes and the invigilator extends it by 20 minutes. Everyone's plan for lunch and the afternoon shifts.
**Wants:** Her afternoon commitments to move by 20 minutes, with the ones that cannot to be shown as at risk.

### 1191 · Make-up exam after illness
Naz has a fever on the exam day and a medical note. The teacher offers a make-up exam on the 14th but does not say when on that day.
**Wants:** To hold the material fresh enough till then without a full new plan, and a day only, not a time, to show for the make-up until the time is known.

### 1192 · Make-up exam clashes with a new commitment
Naz's make-up exam is set for the 14th at 10:00. Her cousin's wedding, booked months ago, is that morning.
**Wants:** The clash to be shown at once with both parties visible, and no automatic choice between them.

### 1193 · Results arriving days later
Grades are promised within 5 to 10 working days after the exam. The resit deadline for registration is 3 working days after results. Cansu wants to know whether to study on.
**Wants:** To see the possible results dates and the deadline she must meet, so she can decide whether to start preparing for a resit before she knows.

### 1194 · Results arrive and the plan turns into a resit plan
Cansu gets 48% (pass mark 50%) on the 12th. A resit is available on the 2nd of next month.
**Wants:** What she already covered to carry into the resit plan, and the weeks between to be shaped around the parts she actually got wrong.

### 1195 · Resit scheduled after the term
The resit is in the first week of the next term. Murat will be at a summer job until three days before it.
**Wants:** His limited study days before the resit to be visible from now, not only when the term ends.

### 1196 · Resit in the middle of another course
Murat's resit lands in the same week as his first midterm of the new term.
**Wants:** The two exams to be seen sharing the same days, with the resit not lost behind the new term's tasks.

### 1197 · Result is disputed
Ada believes question 7 was marked wrong. The regrade window is 5 days from the result; the teacher answers within 10 days.
**Wants:** Her resit registration deadline to be tracked next to the pending regrade, since the outcome may make the resit unnecessary or not.

### 1198 · Retake condition depends on a grade
Ali may only take the resit if his midterm mark was below 40. His midterm mark is not out yet. He has a booking to travel on the resit date.
**Wants:** The resit and the travel to stay side by side as possibilities, with the resit only becoming a real commitment once the mark is known.

### 1199 · Teacher changes the topic list late
Five days before the exam the teacher adds two topics and removes one. Gizem has done three-quarters of the old list.
**Wants:** What she has done to count against the new list where topics match, and the new gap to be stated in days.

### 1200 · Exam format changes from essay to multiple choice
The department announces that the History exam will be multiple choice, not essays, with 8 days to go. Emre has been practising essay outlines.
**Wants:** The plan's remaining preparation to change kind, not only amount, and the hours already spent to remain visible as spent.

### 1201 · Same topic feeds two exams
Statistics and Econometrics both need hypothesis testing. Can has both exams in the same week.
**Wants:** The topic to be studied once and to count for both, and if one exam moves, the topic's remaining time to be re-seen for the other.

### 1202 · Someone else's exam changes my plan
Hakan's study partner Duygu has her exam moved. They were to revise together on Saturday, and Hakan's own exam is Monday.
**Wants:** Hakan to see that Saturday's shared session is gone, without seeing why Duygu's exam moved.

### 1203 · Privacy of the reason for a make-up
Naz's make-up is because of a hospital stay. Her group needs to know she will not be at their Thursday session.
**Wants:** The group to see her as unavailable without any reason, and the teacher alone to know it is medical.

### 1204 · Exam room booked over by another exam
Two departments both book Hall A for Wednesday 10:00. Students of both are told they will be sitting there. It is discovered three days before.
**Wants:** All affected students to be told the location is uncertain and for their arrival plans to wait on the resolved room, not to assume the old one.

### 1205 · Study space closes during exam week
The library closes at 17:00 instead of 22:00 for the whole of exam week because of a staffing shortage. Twenty of Lale's planned evening sessions rely on it.
**Wants:** All the affected sessions to be shown as broken at once, with her free evenings elsewhere offered as alternatives.

### 1206 · Hundreds of students, one lecture hall
A first-year exam has 1,200 students in 6 halls in 3 shifts. Each has different surname ranges, extra time and a make-up group. The university wants each student to see only their own hall and time.
**Wants:** Every student to see only their own arrival time, none of the others, and the university not to hold each student's full calendar.

### 1207 · Exam preparation for a lab practical
Hasan's lab practical is a 2-hour session in a lab that can take 12 students at a time, so the class of 36 is split in 3 groups of 12. He doesn't know his group.
**Wants:** His preparation to wait for the group to be known but to show all three possible times, and the tightest one to be treated as the deadline for now.

### 1208 · Exam preparation that depends on borrowed equipment
Mine's practical requires a lab coat and goggles she borrows from a friend who has the same practical earlier that day.
**Wants:** Her exam morning to show she cannot get there until the friend has finished, and for the friend's delay to reach her.

### 1209 · Exam attempt limits
Sude has two attempts at a professional certificate exam, and the second one must be taken within 30 days of the first. She fails the first on day 1.
**Wants:** The 30-day limit to be visible as a hard end, with what is booked before it and how many days of study are left.

### 1210 · Past-paper marking with no teacher
Tuna finishes a past paper and marks it himself with the official answers. He is lenient with partial answers.
**Wants:** His own marking to be recognised as his own estimate, and treated differently from a teacher's mark when judging how ready he is.

## Preparing for a big exam

### 1211 · The exam date is fixed but everything is measured backwards from it
Elif starts YKS prep on 1 October with the first TYT session on Saturday 20 June. She has 262 days. Every weekly goal is defined as "so many weeks before the exam". Nothing is scheduled by calendar date except the exam.
**Wants:** To see what she should do this week without ever typing a date for it, and to see how many days remain.

### 1212 · The date is announced late
On 1 October Elif has only "June, date to be announced". ÖSYM announces the date in January. Her plan for the last 8 weeks needs a start.
**Wants:** The plan to exist now with the exam as a rough June window, and to firm up quietly in January without her redoing anything.

### 1213 · The date moves by two weeks
The exam is announced for 13 June and in March moved to 27 June. Elif's revision pass, her last three mock exams and her rest week were all placed relative to 13 June.
**Wants:** Everything tied to the exam to shift, while things that were only ever on fixed dates (her cousin's wedding on 20 June) stay where they are, and to be told what now clashes.

### 1214 · The date moves earlier and the plan no longer fits
The exam moves forward 3 weeks. The syllabus needs 10 weeks of revision and only 7 remain.
**Wants:** To be told plainly that the plan is impossible, by how much, and to choose what gets cut instead of having it silently squeezed.

### 1215 · Two days, two sessions each
YKS runs Saturday (TYT, morning) and Sunday (AYT afternoon, then the language test the same day for some students). Deniz must arrive 45 minutes before each and be seated by 10:00.
**Wants:** One exam that shows as a whole weekend with its sessions in order, and the travel and arrival time around each, not four unrelated events.

### 1216 · Session order without clock time in a mock plan
Deniz's home mock exam has "TYT Turkish, then maths, then science, then a 15 minute break, then social" and no clock times, because he starts whenever he wakes.
**Wants:** The order kept and the whole thing to slide with the morning he actually starts.

### 1217 · A mock exam runs into lunch and pushes the afternoon
Saturday mock: 165 minutes planned, starts 09:00. He starts 09:40 after a late bus. Review of wrong answers was planned right after, then lunch with his grandmother at 13:30.
**Wants:** The review to move later, and a warning if it now collides with lunch, without the lunch itself moving.

### 1218 · Mock on fixed weekends, one is missed
The school-wide deneme is on the first Saturday of every month, October to May. Zeynep is ill in February.
**Wants:** The missed one to show as missed, not silently vanish, and its score gap to be honest in the trend, with the option of taking a make-up.

### 1219 · Score trend with an estimate of the exam result
After 9 mocks Zeynep's TYT net is 78, 81, 79, 85, 84, 88, 86, 90, 91. She wants to know if she will reach 100 by June.
**Wants:** A prediction with a range from her real scores, updated after each mock, showing that it is a prediction.

### 1220 · Subject weights change what matters
In the placement score, AYT maths counts for more than TYT geography for her engineering target. Her daily hours are split evenly.
**Wants:** To see that time and expected score gain are not aligned and to be shown the mismatch, without the plan being rewritten for her.

### 1221 · Question counts per day as a target that can be carried
Ali must solve 120 questions per day. On Tuesday he solves 70 because of a school trip.
**Wants:** The 50 missed to be visible as owed, spread over the next days sensibly, but not to make Wednesday impossible if he already had 150 planned.

### 1222 · Owed work cannot ever be repaid
By April Ali owes 1,900 questions and only has 40 study days left with capacity for 100 extra each.
**Wants:** To be told the debt can't be repaid, and by how much, and asked what to drop.

### 1223 · Dershane and school timetable in parallel
Ceren has school 08:30 to 15:40, dershane Mon/Wed/Fri 17:00 to 20:00, and etüt Saturday 09:00 to 13:00. The school changes a Wednesday to a half day for a ceremony.
**Wants:** The new free afternoon shown, and offered to nothing automatically.

### 1224 · Etüt is cancelled when the teacher is absent
The Saturday etüt is held only when the teacher is present. The teacher tells the dershane on Friday night that she is ill.
**Wants:** The etüt to be shown as cancelled with the reason, and the four hours to become free for Ceren, not lost.

### 1225 · One lesson sits in both the dershane and her own plan
A dershane physics lesson also counts as the day's "physics topic study" in Ceren's own plan.
**Wants:** It to count once, in both places, and if the lesson is cancelled, both to notice.

### 1226 · A rest day that the plan must not touch
Burak has a rest day every Sunday. Two weeks before the exam a mock is announced for a Sunday.
**Wants:** The clash shown, with the rest day marked as something he cares about, and for him to decide which wins.

### 1227 · Burnout: rest that appears from evidence
Over 3 weeks Burak's mock scores fall, his sleep logs show 5.5 hours, and he skipped two sessions.
**Wants:** A suggestion of an extra rest day with the reasons, which he can refuse.

### 1228 · Rest that gets eaten
A rest weekend was planned, and then a dershane makeup lesson, a mock and a family visit were each added. All were accepted one at a time.
**Wants:** To notice that the rest is gone, even though no single change broke it.

### 1229 · Syllabus finished before the deadline, but a pass is late
Nil's plan: first pass through all topics by 15 January, second pass by 15 April. Chemistry takes 4 days longer than estimated.
**Wants:** Later chemistry-dependent topics to slip, the second pass to be shown as at risk, and the estimate for the remaining topics to be corrected by how badly chemistry went.

### 1230 · Topic order without dates
Nil knows she must do limits before derivatives before integrals, but has no dates yet.
**Wants:** To record the order alone and have dates arrive later without the order breaking.

### 1231 · Two topics that need each other
Nil marks "probability needs combinatorics" and, from a teacher's list, "combinatorics review needs probability examples".
**Wants:** To be told these two conflict, not for the plan to hang or pick a winner.

### 1232 · The exam format changes mid-year
In February the authority drops a section (or reduces question counts from 40 to 30 in one subject). Nil spent 6 weeks on the dropped material and has 12 mock scores with the old scale.
**Wants:** Old scores kept, marked as old-format, the trend not falsely broken, and the remaining plan lightened by the removed material.

### 1233 · Syllabus gains a topic
A new topic is added in March, with 3 questions expected. Nil has 14 weeks left and a full plan.
**Wants:** To see where it could fit and what it would displace, without the plan choosing.

### 1234 · Registration window
Registration for the exam opens 3 February and closes 12 February, with late registration until 19 February for an extra fee.
**Wants:** A reminder that stops being sent the moment he registers, and a clear signal if the cheaper window is about to close.

### 1235 · Registration missed
Ozan does not register by 19 February. The whole year's plan depends on it.
**Wants:** To immediately see what is now impossible, and what alternatives exist (next sitting, another exam), not just a red mark.

### 1236 · Registration needs a document that takes weeks
Registration needs a school certificate that the office takes 10 working days to issue. The window closes in 12 days.
**Wants:** To know the certificate request must start today, and to see the deadline working backwards.

### 1237 · Payment day is a public holiday
The last day to pay the registration fee is a bank holiday.
**Wants:** The real effective deadline to be shown, not the printed one.

### 1238 · Two exams at once
Selin prepares for YKS and for a university's English proficiency test in the same spring. The English test date is fixed at 18 May. Her YKS revision pass overlaps.
**Wants:** To see study time shared between them, and the last week before each getting priority for its own.

### 1239 · Two exams whose dates collide
Selin's English test and a YKS mock are on the same Saturday. She cannot do both.
**Wants:** The clash shown and the choice kept hers, with the effect on the mock trend visible.

### 1240 · Preparation that helps two exams
Vocabulary study helps YDS and IELTS. Emre prepares for both.
**Wants:** One block of study counted toward both, and if one exam is dropped, the block stays for the other.

### 1241 · Retake waiting period
A test may not be retaken within 14 days of the last attempt. Emre sits IELTS on 2 March, scores below target, and wants the earliest retake.
**Wants:** The earliest possible date shown, and available test dates before it hidden or marked unavailable.

### 1242 · Waiting period longer than the deadline allows
The programme he applies to needs a result by 1 May. The score takes 13 days to arrive, the wait is 14 days, and test dates are limited.
**Wants:** To be told that a second attempt cannot arrive in time, and by how many days.

### 1243 · Score validity ends before it is used
An exam result is valid 2 years. Hale's result is from 10 June 2025 and her application to a programme is on 15 June 2027.
**Wants:** To be warned months earlier that the result will have expired on the application date.

### 1244 · Score valid for the tercih, not the next
A YKS score is used for the preference period of that year only. Hale reads that as valid for 2 years and plans on that.
**Wants:** The actual validity to be a stated fact of the score, and her plan to react when it turns out shorter than assumed.

### 1245 · Results date not yet known
The results are announced "in July". Hale's plan for the next step branches on the result: apply in Turkey or prepare for abroad.
**Wants:** Both branches held, and the plan to choose one only when the result is in.

### 1246 · Results arrive and the plan must switch
Results come on 18 July: net too low for her first choice, enough for her third.
**Wants:** The plan for the branch that no longer applies to go away, including its reminders, and the other to become the plan.

### 1247 · Tercih window with limited time
The preference period lasts 6 days and she can list 24 programmes. The window opens the day after results, when her family visits.
**Wants:** The days blocked for it, with the ranking work broken across them, and the deadline unmistakable.

### 1248 · Tercih list must be reordered by a rank that has not arrived
Her choices depend on last-year cut-off ranks and this year's differ. She cannot finalise until a score-based ranking is posted on day 2.
**Wants:** The waiting to be shown as waiting, not as idle time she can't fill.

### 1249 · Family pressure: a father who wants to see scores
Ahmet's father asks to see all mock scores. Ahmet is fine with the total, not the subject breakdown, and not the ones where he did badly.
**Wants:** To decide what the father sees, and for the father to not learn that anything is hidden.

### 1250 · Family shows up in his calendar but not his content
Ahmet's mother sees "study" blocks but must not see "went to a friend's during study time".
**Wants:** Family to see that time is taken, without reasons.

### 1251 · Scores shared with a coach, not the school
A private coach sees the score trend. The school counsellor should see nothing.
**Wants:** Different people to see different amounts, chosen once.

### 1252 · A friend's plan negotiated without showing it
Two friends want a shared Sunday study session. Neither wants the other to see how many hours they study or what they skip.
**Wants:** A common free slot to be found with no other detail revealed.

### 1253 · A friend wants to compare scores with a pledge
Two friends agree to share mock scores only if both do the same mock on the same day.
**Wants:** Neither to see the other's score until both have entered theirs.

### 1254 · Sibling sharing the only quiet room
Two siblings both prepare for exams (one LGS, one YKS) and share a room with one desk.
**Wants:** Their schedules to interleave without either seeing the other's private times, and a conflict shown when both need it.

### 1255 · Correcting the past
Mert entered a mock as 92 net and finds the answer key had a mistake: it was 88.
**Wants:** The change to be recorded as a correction, the trend and predictions to recompute, and the old value not lost.

### 1256 · Correcting the past into a better trend
The corrected score is higher, making a bad week look fine. Mert had already taken an extra rest day because of it.
**Wants:** The rest day to stay as a fact, and to see the earlier decision now looks unnecessary without it being undone.

### 1257 · Plan vs actual: he studied but at other times
Planned: maths 16:00 to 18:00. Actual: maths from 19:00 to 20:30 and a hurried session at 22:00.
**Wants:** Both plan and actual kept side by side, and the actual to count toward the topic.

### 1258 · Plan vs actual over a year
By March Mert has done 71 percent of the planned hours in physics and 130 percent in geometry.
**Wants:** A truthful view of the drift and what is now behind, without the plan pretending it was followed.

### 1259 · Estimate that gets better with data
Mert estimated 3 days for each chapter. His first 6 chapters took 2, 4, 5, 3, 6, 5.
**Wants:** The remaining estimates to move to a range near 4 to 5 days, clearly marked as learned from him.

### 1260 · Timezone: the exam abroad
Leyla is a Turkish student in Berlin taking a test in Istanbul at 10:00 local. Her home calendar is on CET and her family's on Turkey time.
**Wants:** The exam at the same moment for everyone, shown in each person's own local clock, and no mistake on the one day clocks differ.

### 1261 · Holiday shifts the whole week
The dershane gives Monday's lesson on Tuesday because of a holiday. Tuesday's own lesson is already there.
**Wants:** Two lessons on Tuesday, in a sensible order, and the earlier plan for the evening to reflow.

### 1262 · Bayram
Kurban Bayramı falls three weeks before the exam. School is off for 9 days, the family visits her grandparents in a village with no internet for 4.
**Wants:** The days shown as low or no study, offline work prepared beforehand, and the plan to accept it without damage.

### 1263 · The gap year
Kaan fails to reach his target in June and decides to retake. He has 12 months, a job at his uncle's shop 4 days a week, and last year's notes.
**Wants:** A new year built from what he already covered, not from zero, and the weak topics to lead.

### 1264 · Gap year that needs to know last year's weak spots
Last year's mocks show he lost most points in geometry and paragraph questions.
**Wants:** These to be known by the new year's plan without him retyping them.

### 1265 · Gap year and the decision to stop
By December Kaan's mocks are the same as last year. He wonders whether to stop.
**Wants:** An honest comparison of this year and last, with no push to continue or quit.

### 1266 · Three-year CFA path
Defne registers for CFA Level I in February, Level II a year later, Level III a year after. Each has 300 hours of suggested study, exams twice a year (four for Level I), and a job with year-end crunches.
**Wants:** One long path, from now to the last exam, with three exams and their study hours inside it, and the ability to see each year alone.

### 1267 · One failed level in the CFA path
Defne fails Level II in August of the second year. The next chance is February.
**Wants:** Everything after to move by six months, including Level III, her registration fee dates and the work-crunch overlap, and to see what the delay costs.

### 1268 · Level result waits a month
CFA results come about 60 days after the exam. Defne cannot register for the next level until she knows.
**Wants:** The dependency shown: the next registration can only be planned once the result arrives, and the plan to hold the fee window open.

### 1269 · Pass rates as a prediction input
Defne wants her chance of passing given her mock results and hours. The published pass rate for the level is about 40 to 45 percent.
**Wants:** A range of outcomes based on her data, and the prediction to be separate from the fixed fact that the exam happens.

### 1270 · Pilot licence with hour minimums
Cem needs 45 flight hours for a licence, at least 10 of them solo, in two years. Lessons depend on weather and aircraft availability.
**Wants:** Hours counted as they happen, the remaining count to be forecast by how often weather cancels flights, and a cancelled flight to reopen the slot.

### 1271 · Flying condition fails
A lesson requires cloud base above a set height and wind under a limit. On the morning it fails.
**Wants:** The lesson cancelled or moved, not left as a false appointment, and the instructor's next free slot offered.

### 1272 · Driving licence with theory and practical
Ece must pass the theory test before booking the practical. The practical has a 4-week waiting list.
**Wants:** The practical date to depend on the theory result, and the long wait to be shown as a range until a date is given.

### 1273 · A test that must be taken within a window of another
The practical must be taken within 6 months of passing the theory, or the theory expires.
**Wants:** A warning that the waiting list may put the practical after that window.

### 1274 · Medical specialty exam (TUS) alongside clinical work
Dr Gül works 24-hour shifts twice a week, then sleeps. TUS is in 8 months.
**Wants:** Study time to fall only where she can actually study, shifts to push study, and a post-shift day to be treated as unusable rather than free.

### 1275 · Shift swap changes her whole month
A colleague asks to swap a 24-hour shift, moving it into Gül's planned mock day.
**Wants:** The swap to be judged against her exam plan before she says yes, without the colleague seeing why she declines.

### 1276 · Bar exam with fixed hours and a job
A candidate must have completed a set number of study hours by exam week, and can only study in the evenings after 19:00. Overtime is unpredictable.
**Wants:** Hours completed and hours still needed, a prediction of whether it will be met, and warning when overtime makes it unlikely.

### 1277 · Study hours with a legal minimum and a real limit
A rule requires 40 supervised hours before the exam. Each supervised session needs a supervisor who has 3 free evenings a month.
**Wants:** The impossibility to show plainly if the supervisor's availability cannot fit the 40 hours in time.

### 1278 · The exam is cancelled or postponed for the whole country
An emergency postpones the exam indefinitely. Students' plans, dershane contracts and registration are all built on the date.
**Wants:** The plan to stay, put on hold, and to resume without loss once a new date appears.

### 1279 · Exam-day conditions
On exam day Ayşe needs: an ID, an admission document, a working bus line, and to be in bed by 23:00 the night before.
**Wants:** Each to be checked, and a failed condition (bus strike) to change the morning plan.

### 1280 · LGS with a younger student and a parent as the planner
Parent Fatma plans for her son Umut's LGS. He does not want her to see the exact time he goes to sleep.
**Wants:** Fatma to see he is asleep by a reasonable hour without the precise hour, and Umut to see the plan she made.

### 1281 · Plan handed to a new tutor
Elif changes tutor in January and wants the new tutor to see the syllabus progress but not her mock scores from before.
**Wants:** Progress shown, past scores kept private, and the old tutor's access to end.

## Goals

### 1282 · A goal with no date at all sits beside dated ones
Deniz has "learn to play the cello" with no deadline, "file taxes by 15 April", and "run a 10k on 3 May". In February he asks what his year holds. The cello goal has nothing to say about when.
**Wants:** To see the cello goal alongside the dated ones without being forced to invent a deadline for it, and without it disappearing from view.

### 1283 · A twenty-year goal decomposed down to today
Aylin, 34, wants to retire at 54 with 12 million lira in savings. She has a ten-year checkpoint, five-year checkpoints, this year's target, this month's transfer and today's 500 lira. Every level exists on her screen at once.
**Wants:** To open today and see the 500 lira, and to see how it connects upward to the 54-year-old retirement, without the twenty years being flattened into a list of 240 monthly items.

### 1284 · Estimate at the far end has huge uncertainty
Mert says "novel finished sometime in the next 2 to 5 years". After the first draft of 30,000 words in 4 months, he asks how long the rest takes. He has no real idea.
**Wants:** A finish date shown as an honest wide range that narrows as he writes, not a single confident date that keeps being wrong.

### 1285 · A year goal, a quarter goal and a week goal disagree about the same result
Selin's year goal: lose 8 kg. Her quarter goal: lose 2 kg. Her week goal, set by hand on Monday: lose 1 kg. Eight kg over 52 weeks and 1 kg in one week cannot both be right.
**Wants:** To be told the levels contradict each other, and to decide which one to fix, not to have one silently override the other.

### 1286 · A goal that exists only as an order
Kaan lists: get the licence, then get the first client, then quit the day job. He puts no dates on any of them. The licence exam gets postponed by the authority twice.
**Wants:** The order to hold and the later steps to visibly wait, with nothing claiming they are late, since they never had a date.

### 1287 · A leading measure is green while the lagging one is red
Ece practises piano 6 hours a week for 4 months, exactly as planned. The audition is in 2 weeks and her teacher says she is not ready.
**Wants:** To see both facts together: the practice hours are on target and the outcome looks at risk, and not have the green practice hours reported as "on track".

### 1288 · Leading measure hit, lagging result met before the date
Burak plans 120 hours of Spanish practice before the summer exam on 20 June. On 25 April a placement test shows he already reaches the conversational level he wanted.
**Wants:** The goal marked as met early, and the remaining 60 hours of planned practice released or offered back for something else, not kept as obligations.

### 1289 · Goal met early frees time that others depend on
Lale finishes her thesis draft 6 weeks before the deadline. Her supervisor's review slot was booked for the original date; her co-author's chapter was waiting on a lull in her week that now exists earlier.
**Wants:** To see the earlier freedom, and to have the others learn the draft is ready sooner without her sharing her whole calendar.

### 1290 · Two goals want the same Saturday mornings
Onur's marathon plan needs long runs on Saturday 07:00 to 11:00. His "paint the whole flat" goal, due 1 December, needs those same Saturdays. There are 14 Saturdays and each goal needs 12.
**Wants:** To be told plainly the two do not fit, how many Saturdays are short, and to choose what gives.

### 1291 · Two goals want the same energy, not the same hours
Nora studies for a bar exam evenings and also wants to write a poem a week. Hours are free on paper, but after studying she cannot write. She tried and produced nothing for three weeks.
**Wants:** The clash noticed even though no clock time overlaps, or at least a way for her to say "these two do not sit together".

### 1292 · A goal paused for illness, then resumed
Cem is training for a 21 km race on 14 November. In September he has flu for 12 days and misses every run. He is not abandoning the goal.
**Wants:** The goal marked as paused for those days without erasing the plan, then resumed with an honest view of what the lost days did to the race date.

### 1293 · Goal paused with no resume date
Pelin puts "learn oil painting" on hold because her mother is in hospital. She does not know for how long.
**Wants:** The goal quietly out of the way with no "overdue" pressure, and a gentle way to see it again later, with no invented date.

### 1294 · Abandoned goal leaves history behind
Yiğit drops "read 52 books this year" in July after finishing 19. He does not want a failure mark; he wants to stop. Later he wonders what those 19 books were for.
**Wants:** The goal shown as ended by choice, the 19 books kept as real history, and no red "failed" label he did not choose.

### 1295 · Revising a goal upward mid-year
Ahmet's savings goal was 60,000 lira by 31 December. In June he gets a raise and changes it to 90,000. In September he asks how he is doing.
**Wants:** To be told how he is doing against 90,000, and also to be able to see that he was ahead of the old 60,000, so the change does not look like a slide.

### 1296 · Revising a goal downward looks like cheating
Sevgi changes "write 80,000 words" to "write 50,000 words" in October after a family move. Her accountability partner sees only the new number.
**Wants:** The change visible as a change, with its date and her reason if she gives one, so the partner sees an honest revision and not a quietly moved target.

### 1297 · Correcting the past changes whether the goal was on track
Ilker logged 40 hours on his portfolio in March. On 2 April he realises 12 of them were meetings, not work, and corrects the log.
**Wants:** The corrected hours to change how March looks in hindsight, while still showing that he had been told earlier that March was fine.

### 1298 · Deadline is impossible from day one
Buse sets "learn Japanese to fluency" by her trip to Tokyo in 9 weeks. Reasonable estimates say this takes years.
**Wants:** To be told this cannot be met as stated, how far off it is, and what a reachable version might look like, without refusing to store the goal.

### 1299 · A range goal with a plateau
Hakan wants to weigh between 78 and 82 kg by June. He is at 91 in January, at 84 by April, then stays between 83.6 and 84.2 for five weeks.
**Wants:** The plateau shown as a plateau, not as a failure or as a stalled clock, with the expected time to the range updating from what has actually been happening.

### 1300 · Weight goal reached, then he keeps losing
Hakan reaches 81 kg and keeps going to 76, below the range he set. His goal was a range, not a floor.
**Wants:** To be told he has gone past the range on the low side, not congratulated.

### 1301 · Weigh-ins are noisy day to day
Zeynep's scale reads 63.1, 64.4, 62.8, 63.9 over four mornings. Her goal is 62 kg by 1 March.
**Wants:** Progress based on the trend and not on each reading, and no daily swing between "ahead" and "behind".

### 1302 · Savings goal with a reward at each quarter
Tuna saves 5,000 lira a month toward 60,000 by December. At 15,000, 30,000 and 45,000 he wants a dinner out. At 60,000, a weekend trip.
**Wants:** The rewards to appear as points along the way and to be reachable on their own dates as the saving speeds up or slows down.

### 1303 · A reward that costs money from the same goal
Tuna's 30,000 milestone dinner costs 1,200 lira. Paying for it drops his total to 28,800, and he has now un-reached his milestone.
**Wants:** The reward not to undo the thing that earned it, or at least a clear picture of how spending the reward moves the goal.

### 1304 · Savings goal where income is uneven
Freelancer Dilan earns 2,000 lira one month, 18,000 the next, 0 the next. Goal: 100,000 lira by next June.
**Wants:** A sense of "behind" or "ahead" that does not scream every empty month, and an estimate of the date that follows her actual income.

### 1305 · Savings amount is in a currency that moves
Emre saves in euros for a deposit priced in lira, goal 900,000 lira by 2028. The euro rises 15% in a year.
**Wants:** To see his progress in the way that matters to the goal, and to know the target and the savings are measured in different money.

### 1306 · Measurement changes midway
Gül tracked "get fitter" by resting heart rate for six months. Her new watch measures it differently and the numbers jump by 6 beats overnight with no change in her body.
**Wants:** The jump to be recognised as a change in measuring and not a change in her, with the old months still comparable.

### 1307 · The definition of the goal changes midway
Barış set "publish 12 blog posts" but after four months decides a post must be at least 1,500 words, and four of his six posts are under that.
**Wants:** To see how the new definition changes what has counted so far, and choose whether the old posts still count.

### 1308 · Learning goal with a fuzzy finish
Ada wants "conversational Spanish by summer". No one has said what conversational means. She has 30 lessons done and can order food but not follow a film.
**Wants:** Some sense of how close she is and by when, even though the finish line is a feeling she has not defined.

### 1309 · Learning goal measured by a test she can only take twice a year
The language certificate exam runs in March and September. Ada wants B1 by summer. There is no result between now and September.
**Wants:** Ongoing estimates of where she stands between exams, clearly marked as guesses, replaced when the real result arrives.

### 1310 · Creative goal where progress is not linear
Selim's novel has 60,000 words on 1 July, then he cuts 25,000 in August and rewrites. Word count went backwards while the book got better.
**Wants:** Not to be shown as "behind" for a good deletion, and a way for the goal to notice that the count is a poor measure here.

### 1311 · Creative goal with an outside gate
Mira finishes her novel on time, but the goal was "get it published". Agents reply in 2 to 6 months and she has no control over it.
**Wants:** To see which part is finished and in her hands, and which part is waiting on other people with an unknown length.

### 1312 · Promotion goal in two years, depending on someone else
Fatih wants to be a team lead by September 2028. It needs an opening, and his manager, Ayşe, has said she will not leave for at least 3 years.
**Wants:** To see that his goal rests on something he does not control, and what changes if the opening never comes.

### 1313 · Career goal with a manager who sees progress
Fatih shares "team lead by 2028" with Ayşe, but not his private goal of leaving the company if it does not happen.
**Wants:** Ayşe to see only what he chose to share, and the private goal not to leak through the shape of the shared one.

### 1314 · Accountability partner sees progress, not detail
Nil shares her weight goal with her friend Cansu. Cansu should see whether Nil is on track, not the actual weights or the food logs.
**Wants:** Cansu to see "on track" or "behind" and nothing else, unless Nil chooses to show more.

### 1315 · Accountability partner sees "behind" and Nil didn't want that shown yet
Nil is behind by two weeks and wants to catch up quietly before Cansu notices. The share is automatic.
**Wants:** A way to hold back a status for a few days that is honest, not one that shows a fake "on track".

### 1316 · Couple goal: one person's slip affects the other
Arda and Ceyda plan 400,000 lira for a wedding by 12 June, each paying half. Ceyda loses 3 months of income.
**Wants:** Both to see that the joint goal has slipped and by how much, without Arda seeing Ceyda's finances and without her having to explain.

### 1317 · Family goal with a child's part
The Yılmaz family aims for a holiday in August. Their 9-year-old, Can, has agreed to save 300 lira from his pocket money. He has saved 40.
**Wants:** The family goal to include Can's small piece in his own terms, and not to treat 40 of 300 as a crisis on the same scale as the parents' figures.

### 1318 · Team goals that add up to a company goal
Company target: 1,000 new customers this year. Four teams commit to 300, 300, 250, 200, which is 1,050. In June team three says their 250 is now 150.
**Wants:** The company total to show it is now short, and every team to see the effect without seeing each other's plans.

### 1319 · Team goals that don't add up in the first place
Three teams commit to 200, 250 and 300 against a company target of 1,000. Total is 750.
**Wants:** To be told from the start that the parts do not reach the whole.

### 1320 · One member's goal depends on another team's goal
Yusuf's team must launch the app by 1 October. It needs the design team's icons by 1 September, which is in the design team's own goals as "by end of Q3".
**Wants:** Yusuf to see that the icons might arrive after he needs them, and the design team to see that one of their dates matters to someone else.

### 1321 · An OKR scored at 0.7 is a success, not a miss
A company treats a result of 70% as good on stretch key results. Elif's key result "double signups" ends at 70% of the target.
**Wants:** To see the result labelled as she and her company understand it, and not judged as a 30% failure.

### 1322 · A committed result and a stretch result look the same
Elif has one key result that must hit exactly 100% (ship by 30 June) and another that is a stretch (grow 200%).
**Wants:** To tell which is which at a glance and be told about "behind" differently for each.

### 1323 · A key result changes and the objective above it stays
The objective "be loved by our users" has three key results. In March one is replaced, because the survey it used was discontinued.
**Wants:** The objective to continue unbroken, with the replaced result marked as replaced and its history retained.

### 1324 · Same hours cannot count twice
Bora studies 3 hours on a train that counts toward "read more" and "learn Portuguese" because he reads a Portuguese book. The goal totals add 6 hours.
**Wants:** The 3 hours to be counted once where hours are the point, and counted fully for each goal where the activity is the point.

### 1325 · Expected progress against actual at any moment
Halil's goal: 12,000 lira saved by 31 December, started 1 January. On 14 August he has 6,000.
**Wants:** To be told where he should be on 14 August (roughly 7,700 if even), where he is, and the gap, in words that fit a person who has just been paid and is about to pay rent.

### 1326 · Expected progress is not a straight line
Deniz's tax-season goal is 40 hours of study, but the exam is in December and most sensible study happens in the last two months. In August he has done 2 hours.
**Wants:** Not to be told he is badly behind when the plan was always back-loaded.

### 1327 · The feeling of being behind after a dry patch
Melis has met every weekly target for 20 weeks, misses 3 in a row for a family reason, and the dashboard turns red although she is 40 hours ahead overall.
**Wants:** An honest picture where being 40 hours ahead is not erased by three bad weeks.

### 1328 · Behind and the goal is quietly impossible
Kerem needs 900 lira a week to reach a goal, but has managed 300 a week for 10 weeks and 12 weeks remain.
**Wants:** To be told this will not be reached at this rate, and the size of the shortfall, while it is still early enough to act.

### 1329 · A goal tied to a condition that fails
Reyhan's goal is "start the garden project when the lease is renewed". The landlord refuses on 1 March.
**Wants:** The goal and everything hanging from it to be shown as no longer going ahead, not as late.

### 1330 · A goal moved when its condition moves
Ozan's "sail across the strait" goal is set for the first calm week after 1 June. In June it is stormy for three weeks.
**Wants:** The goal to shift to the next calm week without him re-entering it, and everything after it to shift too.

### 1331 · A milestone in the middle finishes but the goal above did not
Sinem finishes the milestone "first draft of grant application" three weeks early, but the grant deadline is fixed.
**Wants:** The early finish to be visible as slack for the later steps, not as a reason to move the deadline.

### 1332 · A milestone late pushes the next milestone
Sinem's second milestone, "review by the board", needs 14 days after the draft. The draft is 9 days late.
**Wants:** The review to be seen as 9 days later, and to be told whether the fixed deadline is now at risk.

### 1333 · A recurring goal step skipped once by design
Ali runs a weekly check of his budget, every Sunday. Sunday 25 December he is on a flight and skips it on purpose.
**Wants:** The skip to be recorded as chosen, not counted as a miss and not silently moved to Monday.

### 1334 · A recurring goal step that moved to a new day for good
Ali changes his budget check from Sundays to Wednesdays starting 1 February. Old Sundays stay as history.
**Wants:** Past Sundays to stay as they were and the future to be Wednesdays, with no confusion about "which day is late".

### 1335 · Calendar that is not the Gregorian one
Zeynep sets "fast and read one page of the Qur'an a day through Ramadan". Ramadan's start depends on the moon and is only known days before.
**Wants:** The goal to find its dates from the real Ramadan and shift by a day if the moon is seen late.

### 1336 · A goal about who she is becoming, with no test
Defne wants "to be someone who writes every day", for life. There is no target, no date, no finish.
**Wants:** To keep this goal, see it in her days, and never be told it is overdue or complete.

### 1337 · A life goal that needs an event out of her hands
Cenk's life goal is "have a child", which depends on a partner, his health, luck and money. His yearly goals hang under it.
**Wants:** The yearly items to stay meaningful if the main event comes late, never or unexpectedly early.

### 1338 · A prediction that keeps being wrong in the same direction
Volkan estimates every writing session at 2 hours. Over 30 sessions each takes 3 hours 10 minutes.
**Wants:** To be shown that his estimates run short by about half, and future dates to use what really happens.

### 1339 · Goal shared with someone who later leaves
Irmak and Bilal share a goal to build a small business. Bilal leaves in month 8, owed 6,000 lira of the joint savings.
**Wants:** The goal to keep going for Irmak with his part clearly ended, and the shared history not to vanish from either side.

### 1340 · A person wants to forget a goal completely
Hale abandoned a goal after a painful event and wants no trace, including in what her accountability partner saw earlier.
**Wants:** The goal removed from her view and from what she shares, with a clear account of what others already saw.

## Quotas and targets

### 1341 · Deficit spread over the remaining days
Selin has 200 exam questions a day. On Monday she does 120. The week has six days left. Tuesday's target reads 213, then Wednesday's, and so on.
**Wants:** To see that Monday's 80 shortfall has been shared out, and to see what today's number is and why it changed.

### 1342 · Surplus banked, then spent
Selin does 320 questions on Tuesday and 200 on Wednesday. On Thursday she is at a wedding all day and does 0.
**Wants:** Thursday to count as fine, because the earlier surplus covers it, and to see how much cushion is left afterwards.

### 1343 · The Quran in 30 days, one bad day
Hatice reads a 600-page Quran in 30 days, 20 pages a day. Day 9 she is sick and reads nothing. Day 10 she reads 20.
**Wants:** The finish date to be shown honestly as slipping or as needing about 21 pages a day, with her choosing which, not silently picking one.

### 1344 · Finish line moved by a holiday
Hatice wants the 600 pages done by the first evening of Ramadan. The date is set by moon sighting and turns out one day earlier than expected, after she had planned 30 days.
**Wants:** Her daily pages to update to the new deadline when the sighting is announced, with a notice of how much more she now has to read per day.

### 1345 · The last day is impossible
It is the 30th of November. Dilan has 41,000 words of a 50,000-word NaNoWriMo draft. She has 9,000 to go and 14 hours left, but she has a shift from 08:00 to 20:00.
**Wants:** To be told plainly that 9,000 words fits nowhere in her remaining free hours, and how many words fit, without the day pretending to be workable.

### 1346 · Daily 1,667 words versus the weekly rhythm
Dilan cannot write on Sundays (family day). NaNoWriMo has 30 days, and 4 of them are Sundays.
**Wants:** The remaining six days a week to carry a higher daily number, about 1,923, and to see it before November starts.

### 1347 · Words counted across midnight
Dilan writes from 23:15 to 01:30. She wrote 700 words before midnight and 900 after.
**Wants:** The day count to follow her own idea of when a day ends (she goes to bed at 02:00), not the wall clock, and for her to be able to say which.

### 1348 · Rolling seven days against calendar week
Kerem wants to run 30 km a week. His Monday-to-Sunday total was 32 km, but on Tuesday his last seven days show 24 km because a long run has just dropped out of the window.
**Wants:** To see both views at once, with a clear label for which one his goal uses, and no alarm just because the window slid.

### 1349 · Week boundary in another timezone
Ayşe in Istanbul works for a company in San Francisco. The company's weekly quota of 40 support tickets closes Friday 17:00 Pacific, which is Saturday 03:00 for her.
**Wants:** Her progress to show her deadline in her own time, and for Friday night not to look like a day she can still use.

### 1350 · Travelling across the boundary
Ayşe flies to Tokyo on the last day of the month. Her month quota ends "at midnight" and she has no idea whose midnight.
**Wants:** One clear statement of whose clock closes the month, and to see the real moment in her own clock.

### 1351 · A quota counted in someone else's day
Can, in Berlin, has a shared goal with Mei in Sydney of 10,000 steps a day each. Mei's Tuesday ends while Can's Monday is still running.
**Wants:** Each of them to be judged on their own day, and neither to see the other's live number unless they agreed to share it.

### 1352 · Daylight saving day has 23 hours
The clocks go forward in March. Eda's target is "1 hour of reading per waking hour left" and her Sunday is one hour shorter.
**Wants:** The scaled quota to reflect the shorter day, not a full 24 hours of expectation.

### 1353 · Minimum per session
Baran practises Spanish and wants 30 minutes a day, but only sessions of at least 10 minutes count. He does six sessions of 8 minutes.
**Wants:** To see that 48 minutes were done and that none of it counted, and why, before he finds out at the end of the day.

### 1354 · Minimum per session, just missed
Baran's 10-minute rule: he studied for 9 minutes 40 seconds, then his phone rang.
**Wants:** A clear answer on whether 9:40 counts, with the rule for rounding visible up front and not decided after the fact.

### 1355 · Partial credit for a half-finished item
Hatice's target is 20 pages a day, and she stops halfway through page 14 of a two-column text.
**Wants:** To record 13.5 pages if she says so, and for the total to say 13.5, not to be silently rounded to 13 or 14.

### 1356 · Rounding up to an integer target
A protein goal is 120 g a day. Onur eats 119.6 g according to his food log.
**Wants:** To be told he met it or missed it by a stated rule, the same way each day, not by a coin toss of display rounding.

### 1357 · A quota met by the wrong kind of work
Zeynep must do 200 practice questions a day, but 40 of them were from the wrong exam year and 25 were duplicates of ones she had done on Tuesday.
**Wants:** To see that 135 count and 65 do not, and which were which, without having to sort them herself.

### 1358 · Work counted twice from two sources
Ali logs steps on a watch and on his phone. Both were in his pocket for a two-hour walk. His total shows 17,000, but he walked about 9,000.
**Wants:** One believable number, and the ability to see that two sources overlapped.

### 1359 · A quota that pauses on sick days
Gül has a daily 1-hour piano target. She has a fever for three days.
**Wants:** To say "sick" once and have those days neither count against her nor be silently forgiven for good; the month's total target to reduce by an amount she can see.

### 1360 · Sick days, but she practised anyway
Gül, still on a sick pause, plays 20 minutes on the second day.
**Wants:** The 20 minutes to be kept as done, without ending the pause and without penalty for being less than 1 hour.

### 1361 · Rest days that are themselves a quota
A training plan says "at least 2 rest days a week, no more than 3." Barış has trained on 6 days by Saturday.
**Wants:** Sunday to be flagged as a required rest, and for a planned Sunday session to be shown as breaking his own limit.

### 1362 · Rest day as a wish, not a rule
Barış writes "rest day" on Wednesday, then on Wednesday morning feels great and wants to run.
**Wants:** To run without a mark of failure, and for the plan to say what the week now looks like with only one rest day left.

### 1363 · A limit, not a goal: maximum two coffees
Nur allows herself 2 coffees a day. It is 15:00, she has had two, and a colleague brings a third.
**Wants:** To be warned before she drinks, not after, and to know if a decaf counts.

### 1364 · A limit whose remaining allowance decays at the wrong time
Nur's "max 2 coffees" limit is per day. She drinks both at 06:30 and 07:00 and the rest of her day is then locked.
**Wants:** To see the limit as one that she has used up, and to see whether tomorrow's morning is free at midnight or 04:00, per what she said.

### 1365 · Screen time limit spent by a meeting
Ece's phone limit is 2 hours a day. A video call on her phone took 1 hour 40 minutes and was work.
**Wants:** For work use to be separable from leisure use, or at least for her to be able to mark those minutes as not hers.

### 1366 · Games limit shared between two people
Two flatmates, Kaan and Berk, share one console and a limit of 1 hour of games a day for the console. Kaan plays 45 minutes.
**Wants:** Berk to be told 15 minutes are left, without seeing what Kaan played.

### 1367 · Games limit and a friend's birthday
Kaan's "max 1 hour of games" limit meets a Saturday night LAN party for his friend's birthday, 6 hours long.
**Wants:** To mark it once as an exception, and for the week's limit not to be broken for the other six days as a result.

### 1368 · Two quotas fighting for the same evening
Tuesday evening has 2 free hours. Melis's Spanish target needs 1 hour, her running needs 1 hour and her novel needs 1 hour of writing.
**Wants:** To be shown that the three do not fit, and to choose which one gives way, seeing the effect on each weekly total.

### 1369 · A quota that slides into a higher-priority one
Melis's running target sits in the hour before dinner. A friend asks to move dinner earlier.
**Wants:** The run to shift or shrink, not vanish silently, and the weekly distance to show the change.

### 1370 · Quota scaled to real free time
Ozan wants to study 25% of any free time. Monday has 2 free hours, Tuesday 9.
**Wants:** Monday's target to be 30 minutes and Tuesday's about 2 hours 15 minutes, both stated before the day, and updated if his free time changes at noon.

### 1371 · Free time that disappears after the day started
Ozan's Tuesday of 9 free hours loses 6 when a hospital visit is called.
**Wants:** The remaining target to shrink accordingly, rather than showing he is 2 hours behind.

### 1372 · Pro-rata for a late start
Leyla joins a sales team on the 19th. The monthly quota is 60 deals for a full month.
**Wants:** Her target to be worked out for the days she is there, and for her to see how it was worked out, including whether weekends count.

### 1373 · Pro-rata with a public holiday in the month
Leyla's month has 22 working days but 2 are public holidays for her country and 0 for her manager's.
**Wants:** A target that accounts for her holidays, not her manager's, and a way to tell them why the numbers differ.

### 1374 · Quota changed mid-period
On the 12th, Leyla's manager raises the month's quota from 60 to 75 deals. She has closed 27.
**Wants:** To see what she did under the old number and what remains under the new, without the first 12 days being rewritten as if the new number had always applied.

### 1375 · Quota lowered mid-period, and past days
On the 20th the quota is cut from 75 to 50 because a product was recalled. Leyla had made 40 by then.
**Wants:** The change to apply only to the remaining days, and for her past effort not to disappear from her record.

### 1376 · Billable hours: 1,800 a year
Deniz has a 1,800 billable hour target. By 30 June she has 810. Half the year is gone.
**Wants:** To see she is 90 hours behind straight-line pace, and how many hours a working week she needs from July on.

### 1377 · Billable hours, but leave already booked
Deniz is on leave for 5 weeks in the second half. She has 810 hours at midyear.
**Wants:** The pace she needs to be computed over weeks she can actually work, not calendar weeks.

### 1378 · Billable hours: a client will not be billed
Deniz works 6 hours for a client who then refuses to pay for two of them.
**Wants:** To say the hours were worked but not billable, and for the difference between the two totals to stay visible.

### 1379 · An hour billed in the wrong year
Deniz works on 31 December but the invoice is sent on 3 January.
**Wants:** The hours to go to the year they were worked in, unless her firm's rule says otherwise, and for her to be told which rule applied.

### 1380 · A sales quarter with a late big deal
Seda needs 500,000 for the quarter. On the last day she is at 380,000 with a 150,000 deal that the customer says will sign "probably Monday", which is after the quarter closes.
**Wants:** To see the deal shown as likely-but-not-counted, and to see both the safe total and the hopeful total.

### 1381 · Sales quota split between a team of five
Team quota is 500 deals a month, split five ways. One member goes on parental leave on the 10th.
**Wants:** The other four to see their new shares and to know when and why the leaver's share moved onto them, without seeing what she had sold.

### 1382 · A team quota where one member carries everyone
Four people each have a 100 target. One does 260, the other three do 40, 30 and 20.
**Wants:** The team total (350) to be shown as met or missed against 400, and each person's own number to remain separate.

### 1383 · Support tickets per shift
Cem must close 30 tickets a shift. Halfway through, a system outage sends 200 tickets, all of which need a one-line answer.
**Wants:** The shift target to reflect that these tickets are lighter, or for him to be able to say so.

### 1384 · A shift that runs long
Cem's shift is 09:00 to 17:00 and his target is 30 tickets. He is on ticket 28 at 17:00, a customer is on the phone and the call goes 40 minutes over.
**Wants:** The extra time to be counted against the shift he is in and not to push tomorrow's target.

### 1385 · A shift that spans midnight
Nurse Aylin works 22:00 to 06:00 and must complete 12 patient checks per shift.
**Wants:** The checks to belong to one shift, not to be split across two dates.

### 1386 · Duolingo XP by day
Emre wants 50 XP a day and has a 300-day streak. He is at 45 XP at 23:58.
**Wants:** To be told he is 5 XP short with two minutes left, and to be told at a time when he can still act, not at 23:59.

### 1387 · 52 books a year
Sibel aims to read 52 books, one a week. In March she is on book 8 instead of 10 and is reading a 1,200-page novel.
**Wants:** The big book not to make her look behind, or at least for her to be able to say it is worth several.

### 1388 · A book counts, then is abandoned
Sibel counted a book on 4 April, then discovered she had only skimmed it and takes it back off.
**Wants:** To remove it with the correction visible and for every pace figure since the 4th to be recomputed honestly.

### 1389 · Re-reading counts?
Sibel rereads a favourite. Her 52-book rule says "new books only".
**Wants:** The reading to be counted as time spent but not as a book, without her needing to argue with the tool.

### 1390 · Training volume per week, ramping
Tolga's marathon plan has a weekly volume: 40, 44, 48, 40, 52 km. He is ill in week 3 and the plan says week 4 is a recovery week.
**Wants:** To see whether the missed week 3 should be made up, skipped, or should push the whole plan a week later, and to choose.

### 1391 · Quota that must not be caught up
Tolga's doctor says never catch up on missed running volume. His week 3 is missed.
**Wants:** The lost kilometres to disappear from what he owes, with no extra spread on later weeks.

### 1392 · A catch-up that is unsafe
The plan for Tolga's week 5 would go up to 68 km to catch up, which is more than a 10% rise on any previous week.
**Wants:** To be shown that the number exists but breaks his own safety limit, not to have it presented as the task.

### 1393 · On pace, but only on paper
Hatice is exactly on pace at day 15 with 300 pages, but every one of them was read on days 1 to 6.
**Wants:** To be told that she is on pace and that she has not read anything for nine days.

### 1394 · Behind, but by choice
Nur planned to take 4 days off her reading in week 2. She is 80 pages behind a straight line.
**Wants:** To be told she is where she planned to be, not where a straight line would put her.

### 1395 · Ahead, and told to stop
Kerem is at 110% of his weekly 30 km on Friday.
**Wants:** To be allowed to stop, and if he wants to carry on, to have the extra count towards next week only if he says so.

### 1396 · A safety cushion he did not ask for
Kerem's week 1 surplus makes 4 days of running unnecessary. He is annoyed that he looks "safe".
**Wants:** A way to say that he does not want the cushion to relax him, and to keep the daily number as it was.

### 1397 · Break announced too late
On Thursday Selin decides she will rest all of next week for a family trip. On Sunday she remembers it was meant to start Monday, and she has not told her plan.
**Wants:** To be able to tell it, with the extra scrutiny (if she asked for any) for a break that starts sooner than a week from now.

### 1398 · Break announced by someone else
Selin's teacher tells the class the exam is postponed 10 days.
**Wants:** The quota to be spread over the extra days once she confirms the news, and the plan not to change on a rumour.

### 1399 · Correcting the past: a mis-logged day
On Friday, Dilan realises Wednesday's 2,400 words was really 1,400 (she counted a quote twice).
**Wants:** Wednesday to be fixed, all later catch-up numbers to be recomputed, and the fix to show as a fix.

### 1400 · Backdating without lying
Onur forgot to log lunch and, three days later, enters 650 kcal for it.
**Wants:** The entry to count, and to be marked as remembered afterwards rather than logged at the time.

### 1401 · A daily number that is a prediction
Hatice's average speed is 22 pages an hour, learned from past days. Tonight's target is 20 pages and the book turns out to be denser.
**Wants:** The time estimate for tonight to lengthen once she is 10 pages in and slower than usual, with her told.

### 1402 · Privacy: a quota that others can see
Ece shares her weekly "8 hours of study" with her study group. She does not want them to see that she missed two nights for a medical appointment.
**Wants:** The group to see only her weekly total against 8, with no reasons and no days.

### 1403 · Privacy: an employer sees the sales number but not the diet
Seda's manager may see her sales quota. Her calorie budget is on the same calendar.
**Wants:** The manager to see nothing of the calorie budget, not even that one exists.

### 1404 · Two people negotiating a shared quota
Two friends, Berk and Kaan, share a goal of 100 km cycling in a month. Berk's week is cancelled by injury.
**Wants:** A proposal to Kaan for how the remaining distance is split, and Kaan able to say no without seeing Berk's medical details.

### 1405 · Extreme scale: a very long period
Bora targets 10,000 hours of guitar over ten years. He is in year 4 with 3,100 hours.
**Wants:** To see whether he is on track with a pace that accounts for a change from 20 to 8 hours a week when he had a baby.

### 1406 · Extreme scale: very many small quotas
A hospital ward has 340 nurses, each with 12 checks per shift, across three shifts.
**Wants:** Each nurse to see only her own number, while the ward sees totals, and neither view to slow down on a busy morning.

### 1407 · Counted by a different clock than the one that measures
A gym door log says Arda arrived at 18:05 and left at 18:50. His watch says his workout was 52 minutes.
**Wants:** The two to be shown as disagreeing, and for him to choose the one that counts.

### 1408 · A quota nobody can see the start of
Zeynep starts a "200 questions a day" goal on a Wednesday afternoon.
**Wants:** The first day to be scaled to what is left of it, not a full 200.

### 1409 · Leap day
Seda's yearly quota of 2,000 sales calls falls on a leap year.
**Wants:** The daily figure to use 366 days, not 365, without her needing to know.

### 1410 · A quota that ends by itself
Hatice finishes the Quran on day 27.
**Wants:** The daily target to stop on day 27, not carry on for 3 days as leftovers, and to be told what happens to the reading time.

### 1411 · Quotas that depend on each other
Ozan's "1 hour of game time" is earned by 2 hours of study.
**Wants:** The game hour to appear only after the study, and to vanish again if the study is later corrected downwards.

## Cycle and reproductive health

### 1412 · Two very different cycle lengths in a row make the average land on a day that never happens
Selin's last two cycles were 24 and 41 days. The app averages them to 32 and marks 4 November. Her cycles in the past year have ended on days 24, 41, 25, 40 and never near 32. She plans around 4 November and bleeds on 19 October.
**Wants:** To not be shown a date that none of her own cycles has ever produced.

### 1413 · A bleed on the pill is logged as a period
Ayşe takes a combined pill with a 7-day break. She logs the break-week bleed each month as "period", so the app thinks she has a perfectly regular 28-day cycle and tells her she is ovulating on day 14. She has no ovulation on the pill.
**Wants:** For the pill-break bleed not to be treated as proof of a natural cycle.

### 1414 · Hormonal coil makes bleeding stop and the app keeps calling her late
Deniz gets a hormonal coil fitted on 12 January. By April she has had only two days of light spotting. Every 28 days the app says her period is late and suggests a pregnancy test.
**Wants:** For "no bleeding" to be an ordinary state she has chosen, not a problem sounded every month.

### 1415 · Emergency contraception moves the next bleed
Mira takes emergency contraception on 9 March, day 13 of a cycle. Her period, predicted for 21 March, arrives 27 March and is heavier. The app's next prediction is built as if 27 March were a normal 34-day cycle.
**Wants:** To mark that this cycle was disturbed by a pill and have it treated differently from her usual ones.

### 1416 · The copper coil brings back heavier periods
Noor has a copper coil put in on 2 June. Her periods go from 4 days to 8 and her flow is heavy on days 2 and 3. The app still shows her old length and a light flow.
**Wants:** For the change after the coil to be visible as a change, with a before and after.

### 1417 · Moving to a new timezone rewrites old entries
Priya logs 30 entries in Berlin, then moves to Vancouver. After the phone changes timezone, three of her bleed days show one day earlier and the cycle lengths she has tracked for two years change by one day each.
**Wants:** Her history to stay as she wrote it after she crosses a timezone.

### 1418 · Temperature taken at a different hour every day
Ceren works nights. She wakes at 15:00 on weekdays and 11:00 on Sundays and takes her temperature then. Her readings jump by 0.3 degrees between Sunday and Monday. The app declares ovulation on the Sunday after a jump.
**Wants:** For odd waking hours not to be mistaken for the temperature rise of ovulation.

### 1419 · Fever in the luteal phase looks like a late ovulation
Zeynep has flu with 38.6 degrees from 17 to 20 November. Her temperature had been low until 16 November and her cycle day is 20. The app now moves her ovulation to 17 November and predicts her period 14 days later.
**Wants:** Days of illness to be set aside when the app decides when she ovulated.

### 1420 · Alcohol the night before raises the morning temperature
Jo has two glasses of wine at a friend's wedding on 8 August and logs a reading 0.4 degrees above her usual for the next morning. The following three readings are normal. The app treats the spike as the start of the high phase.
**Wants:** One odd reading not to be able to redraw her cycle.

### 1421 · Only 11 of 28 temperatures taken
Aylin took her temperature on 11 days of her last cycle, mostly on weekends. The app shows a confident fertile window anyway.
**Wants:** To know how much of what she sees is based on her readings and how much is filling in.

### 1422 · Watch says ovulation three days after the test strip did
Kim's ovulation test turned positive on 12 March. The next month, her watch reports an estimated ovulation on 15 March, after two cycles of wearing it to sleep. She has to decide which to believe when planning.
**Wants:** To see both, side by side, and to see which one usually turns out right for her.

### 1423 · The watch tells her about ovulation nine days late
Marta wears her watch for the fourth month. On 27 April the watch shows that ovulation was on 18 April. The fertile window the app showed her on 10 April had been 12 to 17 April.
**Wants:** To be able to look back and see what she was told, what actually seems to have happened, and by how many days it missed.

### 1424 · Three periods in fourteen months
Sude has PCOS. She bled in January 2025, in May 2025, and in March 2026. Each month the app shows a period predicted "in 3 days" that never comes.
**Wants:** Not to be told again and again that something is about to happen when her history says it usually does not.

### 1425 · Cycle over 99 days dropped from the statistics
Gül has a 112-day cycle after a bereavement year. The app she uses drops any cycle over 99 days from its statistics, so her average shows 31 days.
**Wants:** For her actual long cycle to count in what she sees about herself.

### 1426 · Egg-white mucus on two separate days
Yasemin logs egg-white mucus on days 9 and 16, with a temperature rise on day 18. The app takes day 9 as the fertile peak and calls her cycle "early ovulating".
**Wants:** For the mucus she observed to be read alongside her temperature, not on its own.

### 1427 · Trying for a baby, window was in the wrong week
Naz and her husband time sex for 10 to 15 March from the fertile window. Her temperature shows ovulation on 21 March. They find out on 24 March.
**Wants:** To learn quickly and plainly that the window she planned around was off, and by how much.

### 1428 · Avoiding pregnancy with a calendar guess
Defne uses the app to avoid pregnancy. In her third cycle the app has just three bleeds to go on. It marks 17 days green. She does not know those 17 days come from a guess and not from her temperature.
**Wants:** To know which safe-looking days are known and which are assumed.

### 1429 · Fertile window widened to two weeks
Beste has cycles between 26 and 44 days. The app widens her fertile window from 6 days to 14 and she now has almost no days she can call safe or unsafe.
**Wants:** An honest way of saying "I do not know" that still leaves her something usable.

### 1430 · Wrong prediction on a booked holiday
Asli books a week at the sea from 14 to 21 July, because the app said her period would arrive on 28 June and finish on 3 July. It arrives on 10 July.
**Wants:** To have been told before she paid that the arrival could easily slide by up to 12 days.

### 1431 · The app is off by four days every month and never says so
Buse's period has arrived 4 days after the app's date for seven months. Each month the app tells her it is 92% accurate.
**Wants:** To see how far off the app has actually been for her, and not a general number.

### 1432 · Published accuracy versus her own
A news page says her app is off by only 1.3 days on average. Ipek's periods have arrived between 3 days early and 8 days late. She wonders whether it is her fault.
**Wants:** To understand that the average she read is not a promise about her.

### 1433 · Predictions a year ahead look as certain as tomorrow
Tuba opens the calendar and sees period dates coloured pink through next August, in exactly the same colour as this week's.
**Wants:** For dates far away not to look as sure as dates a few days away.

### 1434 · Late notice after an ordinary 3-day slip
Cansu's period is 3 days later than the app said. A red banner says "You are late". Her test is negative. She has a hard exam next week and reads the banner twice.
**Wants:** For an ordinary slip not to be announced like an alarm.

### 1435 · Lock screen shows the period date
The family tablet shows a notification: "Period starts tomorrow". Lale's father picks it up on 3 March.
**Wants:** To decide what shows on any screen that other people may see.

### 1436 · Watch face shows her cycle day
Rana wears a watch with a face that shows "Day 27, period expected". A colleague reads it over her shoulder in a meeting on 5 October.
**Wants:** For her cycle not to be readable from her wrist unless she wants it.

### 1437 · Bleeding in the middle of the cycle becomes a new period
On day 14 Ebru has two days of spotting, which she logs as a period start. Every prediction after it shifts 14 days earlier for the next three months.
**Wants:** To be able to say afterwards that the spotting was not a period and have her history repaired.

### 1438 · The long gap counts as one huge cycle
Sevgi stops logging from June to September and starts again on 1 October. The app now counts one cycle of 127 days, which drags her average from 28 to 41.
**Wants:** For a stretch when she did not log not to be taken for a cycle she lived through.

### 1439 · Positive test then a loss at seven weeks
Merve tests positive on 3 February and logs a pregnancy. She bleeds heavily on 25 March. The app asks whether she gave birth and offers baby names. Her next bleed comes 5 weeks later.
**Wants:** To end the pregnancy without being asked about a baby, and to have the cycles after treated as a different situation.

### 1440 · Positive pregnancy test but period prediction still shown
Damla tests positive on 1 April. The app keeps showing a period predicted for 6 April, and another for 3 May.
**Wants:** For predictions of a period to stop when she says she is pregnant.

### 1441 · First bleed six months after birth without ovulation
Gizem gave birth on 3 February and is only breastfeeding. She has a bleed on 20 July and the app treats it as the first cycle of a regular 28-day pattern, predicting the next for 17 August and a fertile window in between. She has not ovulated.
**Wants:** For a first bleed after birth not to be treated as the start of her normal pattern.

### 1442 · Night feeds stopped, bleeding returned
Hande drops the two night feeds on 1 June. Her period returns on 24 June after 11 months of nothing. She had thought the breastfeeding kept her safe.
**Wants:** To be shown when a change in feeding may change her fertility, in the app that knows about both.

### 1443 · Perimenopause: five cycles that do not resemble each other
At 47, Sabine's last five cycles were 26, 34, 29, 61 and 33 days. The app labels the 61-day cycle "irregular" and tells her to see a doctor. She has seen one twice.
**Wants:** For a body in transition to be described as such, not as a series of faults.

### 1444 · Hot flushes and sleep on the same page as the period
Petra is 49. Her worst hot flush weeks and her worst sleep weeks do not follow her periods. She wants to look at them together across a year.
**Wants:** To see her symptoms next to her bleeding history without the calendar being organised only around a 28-day cycle.

### 1445 · Pain days that would fill a whole week
Ozge's pain scores are 8 or higher on 12 days of her last cycle. She wants to show her gynaecologist on 22 September that this is not ordinary.
**Wants:** A record of pain she can hand over that shows the amount and the days, not only whether her period was on.

### 1446 · Flow recorded only as light, medium or heavy
Nilay soaks a pad every hour on days 2 and 3, and passes clots. The app's highest choice is "heavy". She cannot show her doctor the difference between heavy and this.
**Wants:** A way of noting how heavy it really was.

### 1447 · A month of daytime fasting
During Ramadan, Fatma eats only after sunset for 30 days and sleeps less. Her period, expected on 11 March, arrives on 19 March. The app has no way to know her eating changed.
**Wants:** To tell the app about an unusual month and see it treated as unusual.

### 1448 · Marathon training lightens the bleed
Onur, who tracks his partner's cycle with her, sees her flow shrink to a day of spotting in the fourteen weeks she trains for a marathon on 18 October.
**Wants:** To see that her bleeding changed at the same time as her training changed.

### 1449 · Fertility treatment bleeds are not cycles
Gamze has an IVF round: stimulation from 4 to 14 April, a withdrawal bleed on 2 May after the transfer failed. Her clinic counts cycle day 1 differently from the app's.
**Wants:** To keep the clinic's numbers and the app's numbers for the same days without them fighting.

### 1450 · Depo shot ends bleeding for a year
Yagmur has had the 3-month injection since 4 September 2025. She has not bled since November. The app keeps showing a fertile window each month.
**Wants:** For a chosen contraceptive not to be contradicted by a fertile window she should not believe.

### 1451 · Trans man on testosterone with spotting
Arda started testosterone on 6 February. He spots for 2 days on 30 March and again on 12 June. The app is full of language about women and offers a pregnancy test.
**Wants:** To record occasional bleeding without the app's assumptions about who he is.

### 1452 · A parent tracking her daughter
Fulya's mother installs a tracker on her phone and wants to see her logs. Fulya, 15, wants her mother to know about periods but not about the two months she logged sex.
**Wants:** For her mother to see her periods without seeing everything else.

### 1453 · Ex-partner still sees her cycle
Melis broke up with Kaan on 1 June. She shared her cycle with him in 2024 and never turned it off. On 14 June a message from Kaan says "I saw your period is late".
**Wants:** To find out quickly who can see what, and be able to stop it.

### 1454 · Partner sees a sharing notification he was not meant to
Ulas shares his partner Reyhan's fertility window. Reyhan is having a termination on 12 August and does not want him to read the pregnancy entries in the same feed.
**Wants:** To share the cycle and still keep some entries private without him knowing anything is hidden.

### 1455 · Abortion in a state where it is illegal
Carla, in Texas, logs a positive test on 4 March and a termination on 2 April. She fears a subpoena of the company's servers. She wants everything gone.
**Wants:** To know that what she wrote cannot be read by anyone else, ever, and to be able to remove it fully.

### 1456 · She deletes the app, not knowing what remains
Jamie deletes her period app on 25 June 2022 after the court decision. She then realises the company may still hold three years of her bleeds, weights and sex logs.
**Wants:** To know what was kept after deleting, and for how long.

### 1457 · Anonymous mode cannot recover a lost phone
Lucia turns on the app's anonymous mode so nothing is tied to her name. On 9 December her phone falls into the sea. Four years of history are gone.
**Wants:** Privacy that does not mean losing all her history the day her phone breaks.

### 1458 · Decoy screen when someone demands to see the phone
Amal's brother grabs her phone on 21 April and says "open it". She has a PIN on her tracker and the app lets her open a blank screen instead.
**Wants:** To be able to show a harmless screen when made to open her phone.

### 1459 · Employer wellness programme with a small team
Katja works in a firm of 14 with a pregnancy app the employer pays for. Two of the team are pregnant at once. The report the employer gets shows "2 pregnant users this quarter".
**Wants:** That her employer should never be able to work out that it is her.

### 1460 · Moving her data from one app to another
Vera exports three years from her old app on 2 January. The new app imports the bleeds but drops the temperatures and mucus entries, and misreads the dates of 19 cycles.
**Wants:** To move to another app with everything that she wrote, and in the right order.

### 1461 · The new doctor asks for the last six cycle lengths
Ronja has a first appointment on 14 October. She has logged for two years but in two different apps, one lost with a phone. She remembers only the last 3 cycles.
**Wants:** To bring the six cycle lengths in one place, even if some are marked as guessed.

### 1462 · Irregular-period warning at 41 right after a coil
Greta, 41, has a hormonal coil put in on 5 March. On 18 September her phone tells her her cycles suggest irregular periods and perhaps perimenopause.
**Wants:** For a warning to know about the coil that changed her bleeding six months ago.

## How the cycle works

Background for this section is in `research/menstrual-cycle-how-it-works.md`, a research candidate, not ground truth.

### 1463 · Spotting that may or may not be day 1
Amara, 29, sees brown spotting on Tuesday 3 March, nothing on Wednesday, and proper flow on Thursday 5 March. Her last cycle was 27 days. Counting from Tuesday gives 27 days again; counting from Thursday gives 25.
**Wants:** to know which day the app treats as day 1, and to have her own judgment recorded rather than overruled.

### 1464 · A cycle of 24 days, then 38
Lena, 33, had a 24-day cycle in May and a 38-day cycle in June, with no obvious cause. Her mean over the last year is 30 days. She had booked a beach week for 14 June, hoping to avoid her period.
**Wants:** to see that her own history is this wide, and not be told a single date.

### 1465 · Temperature confirms ovulation only after the fact
Priya, 31, takes her temperature every morning. It jumps 0.3 C on 12 April and stays up. That rise says she ovulated on the 10th or 11th, two days ago. On the 9th and 10th she had no way to know.
**Wants:** to see the confirmation appear when it arrives, with the past days re-labelled.

### 1466 · Steady luteal phase, swinging follicular phase
Marta's last six cycles were 26, 34, 29, 41, 27 and 31 days. Counting back from each bleed, the second half is 13 days every time; only the first half moves.
**Wants:** to see that the second half is the reliable part of her month.

### 1467 · The first cycle after stopping the pill
Jonas's partner Elif, 26, stopped the pill on 1 June after five years. Her first bleed comes on day 19, the next after 52 days, the one after that at 33.
**Wants:** to see that these early cycles are not comparable to what she had on the pill.

### 1468 · Symptoms that start before the bleeding
Zeynep, 34, gets tender breasts, low mood and poor sleep from about 6 days before her period. This month the symptoms started on the 20th, but her period did not start until the 28th.
**Wants:** to know the symptoms belong to this cycle, not a new one.

### 1469 · A period starting at 23:50
Ayşe notices flow at 23:50 on Sunday 15 November and logs it right away. By the clock at her doctor's office it started Monday the 16th.
**Wants:** the day she felt it start to be the day recorded.

### 1470 · A period that starts on a long-haul flight
Nora flies from Istanbul to Los Angeles, departing Wednesday 08:00, landing Wednesday 11:00 local after 13 hours in the air. Her period starts somewhere over Greenland, at 03:00 Istanbul time, which is 17:00 the day before in Los Angeles.
**Wants:** the date of day 1 to make sense to her, and to match what she remembers.

### 1471 · A cycle with no ovulation
Selin, 37, had no temperature rise for 41 days, then bled heavily. Her period was late, heavy, and there was no warning symptom.
**Wants:** to see that this cycle was different in kind, not just a longer version of her usual.

### 1472 · A urine strip that goes positive twice
Duru tests every day from day 10. She gets a positive on day 13, negative on day 15, positive again on day 19. Her temperature rises on day 21.
**Wants:** to know which positive was the real one, and not to have earlier days rewritten without a trace.

### 1473 · Ovulation on day 21, not day 14
Merve's textbook plan said her fertile window was days 10 to 15. Her cycle this month was 35 days, and the temperature rise showed ovulation around day 22.
**Wants:** the earlier window not to be treated as a promise.

### 1474 · A very short cycle of 21 days
Ceren, 24, has a 21-day cycle that has repeated for three months, shorter than her usual 28. Her period comes at the end of a long exam week every time.
**Wants:** to see whether this is a new pattern or noise.

### 1475 · Two periods in one month
Hale's period starts on 2 March and again on 30 March, so March has two day 1s. She is not sure if the second bleed counts.
**Wants:** the calendar month not to be assumed to hold one period.

### 1476 · A pregnancy test that is negative and a period that is late
Buse, 27, is 9 days late on 12 May and has had two negative tests. Her mother is visiting on the 20th and she has an important interview on the 14th.
**Wants:** to know how unusual a nine-day delay is for her.

### 1477 · Fever delays ovulation
Kaan's partner Defne had a 39 C flu from the 7th to the 11th of a cycle whose ovulation she expected on day 13. Her temperature chart shows a rise only on day 20, and her period comes 11 days later, on day 31.
**Wants:** to see the illness and the delay side by side.

### 1478 · The pill-free week bleed
Gizem, 25, takes a combined pill in 21-day packs with a 7-day break. Her bleed arrives on the second day of the break, every 28 days, for two years, and lasts 3 days.
**Wants:** the bleed to be recorded as what it is, and not mistaken for a natural period.

### 1479 · A progestin implant and no pattern at all
Su has an implant. In the first year she bled 9 days in one month, none for 70 days, then spotted every second day for 3 weeks.
**Wants:** her old calendar habits not to be read into this.

### 1480 · Heavy first two days
Ela's periods last 5 days, but 80% of the blood is in the first 36 hours. She cannot leave the house before noon on day 2 and has an early meeting every second Tuesday.
**Wants:** to know when day 2 is likely to fall relative to her Tuesday.

### 1481 · A bleed that lasts 9 days
Nil's usual period is 4 days. This month it lasted 9, with the last four days very light.
**Wants:** to record that the last days may not have been part of the period at all.

### 1482 · Ovulation spotting mid-cycle
Sena sees pink spotting for one day on day 13 of a 28-day cycle. She logged it last month as a period start and it threw the whole month off.
**Wants:** to mark it as something else and have her cycle count unaffected.

### 1483 · PMDD crash in a stable cycle
Dilan's low-mood week comes in the last 7 days of every cycle and lifts a day or two after flow begins. She has charted it for three months. Her cycle was 28, 31, 27 days.
**Wants:** to see that the bad week ended each time on its own schedule.

### 1484 · Cramps the day before flow
Ece gets cramps on the evening before bleeding, and they vanish by the second day. This month the cramps came on Friday night, but her period started on Sunday.
**Wants:** the cramp to be counted as part of the same cycle, not an early sign of nothing.

### 1485 · Sleep gets worse in the second half
Yağmur's sleep watch shows 40 minutes less deep sleep from about a week before her period, every month for six months. Her cycle length varies between 26 and 33 days.
**Wants:** to see the change lined up with the bleed she is heading into, not with the calendar.

### 1486 · A "cycle syncing" claim that does not show up
Beril reads that she should lift heavy in her follicular phase and rest in her luteal phase. Over four months her log shows equally good and equally bad sessions in both.
**Wants:** to see her own data next to the claim.

### 1487 · A personal best in the luteal phase
Sude ran her 10 km best on day 24 of a 29-day cycle, the week she expected to feel worst.
**Wants:** to see that the result is real without it being turned into a rule.

### 1488 · First year after the first period
Mina, 13, had her first period in August. Her next came in October, then in November, then in February.
**Wants:** the app not to call this abnormal or to promise a next date.

### 1489 · Perimenopause and a 19-day cycle
Fatma, 48, has cycles of 28, 25, 41, 19, 60 days over the last year. The 19-day one was very heavy.
**Wants:** to see the widening spread as it is.

### 1490 · Ovulation before the first period returns
Gamze, 6 months postpartum and breastfeeding, has had no period. Her temperature chart shows a rise in week 3 of October, and 14 days later she bleeds.
**Wants:** to see that ovulation happened before the bleed.

### 1491 · Shift work with nights
Esra works four nights (22:00 to 06:00) each week, alternating with day weeks. Her cycle was 28 days in the year before the job and is now 31, 36, 29.
**Wants:** to see the change since she changed her hours.

### 1492 · A jet-lagged morning temperature
Cem's partner Ada flies from Berlin to Tokyo on 4 May, and her morning temperature on the 5th, 6th and 7th is 0.4 C off her usual because of sleep at odd hours. Her true rise is not visible in that week.
**Wants:** to know the temperatures that week are unreliable, and by how much.

### 1493 · Weight loss over three months
Sibel lost 9 kg over 3 months on a deliberate diet. Her cycles went from 29 to 33 to 45 days, and now she has not bled in 10 weeks.
**Wants:** to see the weight and the cycles on the same timeline.

### 1494 · Weight gain and longer cycles
Pınar gained 12 kg in a year after starting a new medicine. Her cycles have gone from 28 days to about 35.
**Wants:** to see that the shift is gradual, not sudden.

### 1495 · A long-cycle year and a wedding
Leyla's wedding is on 12 September. Her last period was on 1 August, and her cycles run between 27 and 44 days. The window in which the wedding may fall on flow or the days before is nearly three weeks wide.
**Wants:** to see how likely the day is to be a heavy one.

### 1496 · Two people in the same week
Hande and her sister Nazlı live in the same flat and their periods began within a day of each other in March. In April they were six days apart.
**Wants:** not to be told they are synced as a fact.

### 1497 · Same cycle length, different ovulation day
Two friends both have a 29-day cycle. Ovulation is on day 13 for Ceyda and day 19 for Ilayda, so their second halves are 16 and 10 days.
**Wants:** to see that same-length cycles can be built differently.

### 1498 · Leading spotting for three days
Gül has 3 days of light brown spotting before full flow, every month. Her cycle is either 28 or 31 days, depending on whether she counts it.
**Wants:** her own rule for day 1 applied every month.

### 1499 · A short luteal phase
Tülin ovulated on day 20 and bled on day 28, so her second half was only 8 days. It happened twice in six months.
**Wants:** to see the short second half, and whether it repeats.

### 1500 · A late ovulation that looks like a late period
Nesrin's period was due on the 14th and did not come until the 23rd. Her temperature shows she ovulated on the 9th, not the 1st as usual.
**Wants:** to see that the period was on time relative to ovulation.

### 1501 · Vaccination and a slightly longer cycle
Ozan's partner Elçin had a vaccine dose in the week of her expected ovulation. Her cycle was 30 days instead of her usual 28.
**Wants:** to see that a shift of a day or two after a vaccine is normal and short-lived.

### 1502 · A regular 28-day cycle that is predictable to the day
Hilal has logged 34 cycles of 28, 28, 27, 28, 29 days. Her period arrives within a day of the date almost every time.
**Wants:** her dates to look as firm as they are, not blurred by other people's spread.

### 1503 · Loss of trust after a missed prediction
Melis was told her period would start on the 9th. It came on the 15th, on the day of her holiday. She stopped opening the calendar.
**Wants:** to understand why the date was wrong.

### 1504 · A person who wants to know only after it is over
Tuna's partner Zehra does not want predictions at all. She wants to log a period when it starts and see the history of lengths and how they vary.
**Wants:** the past, and nothing that looks forward.

## Planning around the cycle

### 1505 · Presentation lands on a predicted heavy day, and the reason must not reach the manager
Selin's board presentation is fixed for Thursday 14 May, 10:00. Her cycle is predicted to start Wednesday 13 May, so Thursday is likely day 2, her worst day. She wants to work from home on that day but the request goes to a manager, Mr. Aksoy, and two colleagues who see her calendar.
**Wants:** To ask for remote work on Thursday without anyone who sees the request being able to tell it is cycle-related.

### 1506 · Presentation cannot move, only the location can
The same presentation has 9 external attendees and cannot be rescheduled. Selin is willing to present from home but not to skip it. Her office rule needs 48 hours' notice for remote days, and the period is only predicted to begin 24 hours before.
**Wants:** To be told early enough that the remote-day notice would already be too late, and to choose between filing it now on a guess or attending in person.

### 1507 · The prediction was wrong by 5 days after the remote day was filed
Selin filed Thursday 14 May as a remote day. Her period actually starts Tuesday 19 May. Thursday turns out to be an ordinary day and the manager has already approved a remote day.
**Wants:** To withdraw or keep the remote day without a trail that shows why it was asked for, and for the next prediction to know it was 5 days off.

### 1508 · Filed remote days on days 1 and 2 for six months look like a pattern to HR
Over six months Nur asked for a remote day on the first two days of each period, 12 remote days in total, always around the same rhythm. The HR portal lists them by date.
**Wants:** For the requests to be usable by the office without the list of dates lining up with a 28-day rhythm anyone could spot.

### 1509 · Two colleagues each plan around their own predicted bad days on the same deadline
Deniz and Ece both lead the Friday 22 June product demo, and both are predicted to start their periods that week, with days 1–2 landing on Thursday and Friday for one and Friday and Saturday for the other. Neither knows about the other.
**Wants:** Each to be warned that the demo has no fully clear lead on Friday, without either learning the other's reason.

### 1510 · Half-day meeting block with a painkiller lead time
Ayla takes ibuprofen 45 minutes before pain typically starts, which on her day 1 is around 08:00. Her first meeting on a predicted day 1 is at 08:30. The period has not begun yet, only predicted for tomorrow.
**Wants:** A reminder to take the painkiller before the first meeting, only if the day turns out to be day 1, and not at all on a day the period has not started.

### 1511 · Painkiller reminder fires for a period that never came
Ayla's reminder to take a painkiller at 07:15 fires on the predicted day 1. The period does not start until three days later. She took the tablet anyway and does not want it repeated for three days.
**Wants:** For the reminder to stop repeating once she says the day was not day 1, and for the tablets already taken to count when the real day 1 arrives.

### 1512 · Daily maximum of painkillers over a long bad stretch
Melis takes a painkiller up to 3 times a day, with at least 6 hours between doses, and no more than 4 days in a row without a check-in with her doctor. A bad stretch runs 5 predicted days.
**Wants:** To see when her next dose is allowed, and a note on day 4 that she has gone past her own limit, without the reminders nagging her to take more.

### 1513 · Exam on day 1 with a fixed slot and no rescheduling
Zeynep has a university entrance exam on Saturday 20 June, 09:30 to 12:30, one sitting per year. Her period is predicted to start that Friday or Saturday with a 55 percent chance on Saturday.
**Wants:** A plan for Saturday that works whether or not the period starts, including supplies in the bag, a painkiller taken before leaving, and an early wake time only on the days it matters.

### 1514 · Exam day plan built on a wrong forecast
Zeynep's period starts Wednesday 17 June, 3 days earlier than predicted, so she has finished day 2 by the exam. She had cleared her whole Friday to rest and moved a revision session.
**Wants:** To have the cleared time given back automatically as usable revision time, without her having to undo each change by hand.

### 1515 · Long-haul flight when the period arrives mid-flight
Cem's partner Lale flies Istanbul to Tokyo, departing Tuesday 3 March at 23:40 and landing Wednesday 4 March at 19:30 local time, 11 hours 50 minutes in the air. Her period is predicted for Wednesday 4 March, plus or minus 2 days.
**Wants:** To see that a bleed could start before landing, with enough supplies for a flight of that length and the layover, without the prediction being treated as certain.

### 1516 · Tampon wear time versus a long flight and sleep
On the same flight Lale uses tampons, which she is told not to keep in beyond 8 hours. She plans to sleep for 7 hours from 01:00 to 08:00 local departure time.
**Wants:** A reminder at the right moment, in the timezone she is actually in, that does not wake her unnecessarily but does fire before the 8-hour limit.

### 1517 · Supplies run low before a two-week trip
Beril uses 5 pads and 2 tampons a day on days 1–3 and about half that afterwards. She has 9 pads and 4 tampons at home and leaves Friday 12 June for a fortnight in a village with no pharmacy nearby. The bleed is predicted for 15–17 June.
**Wants:** To be told before Friday how many she will need for the trip, given that the start date is uncertain by several days.

### 1518 · Supplies plan when the bleed might not happen on the trip at all
On the same trip Beril's period may fall either just before departure or after her return on 26 June, if the cycle runs long. She would rather not buy a full trip's worth of supplies.
**Wants:** To see that the number she needs depends on when the bleed lands, and to be shown the range instead of one figure.

### 1519 · Menstrual cup emptied at most every 12 hours during a long workday
Hale wears a cup and can leave it for up to 12 hours. Her surgical assistant shift on Monday runs 06:30 to 19:00, 12 hours 30 minutes, with a break only at 13:00. She inserts it at 06:00.
**Wants:** To be told the shift outlasts the cup's limit and that the 13:00 break is the only realistic window, before the day starts.

### 1520 · The 13:00 break gets pushed
Hale's break is meant to be at 13:00, but the surgery before it runs 90 minutes long and she cannot leave. The cup was inserted at 06:00.
**Wants:** To be warned in time that the 12-hour limit is at 18:00 and that a later break is no longer safe, not only when the break itself slips.

### 1521 · Swim meet with a tampon or cup rather than pads
Ipek swims a 200 metre freestyle heat at 10:12 and a final at 17:40 on Saturday 4 July. Her period is predicted to be on day 2 of a moderate bleed. She uses a tampon in the water and cannot change it during the 8 minutes between warm-up and race.
**Wants:** To see when to put it in, when to change it relative to both races, and that the 7-hour gap between heat and final leaves her within the wear limit.

### 1522 · Beach holiday week where the bleed is predicted in the middle
Berk and Aylin book a seven-day beach holiday from Sunday 9 August to Saturday 15 August. Her period is predicted for Wednesday 12 August, exactly the middle. They have pre-paid a boat trip on the Wednesday.
**Wants:** To be warned before paying the non-refundable boat trip that it falls on the most likely day 1, and to keep the trip if she decides she does not mind.

### 1523 · Skipping a bleed before a holiday on a 21/7 pill pack
Gizem takes a 21/7 pill: 21 tablets, then 7 days with none, so her bleed falls in the break. Her pack ends Thursday 6 August and the bleed would land during her holiday from 8 to 15 August.
**Wants:** To be told the choice to start the next pack without a break must be made before the break begins on 7 August, and to see what that does to the following months.

### 1524 · Continuous use ends on the wrong day and a bleed appears
Gizem ran three packs back to back to avoid periods, but she gets breakthrough bleeding on day 19 of the third pack, during her wedding weekend.
**Wants:** To be told the bleed happened despite the plan, and to have the plans for the weekend treated as if a period had begun.

### 1525 · The pill must be taken at the same time daily, and she crosses 7 timezones
Damla takes her pill at 21:00 in Istanbul (UTC+3). She flies to Toronto (UTC-4) on Friday 10 July, landing at 14:00 local time.
**Wants:** To be told whether the next pill is due at 21:00 Toronto time or at 04:00 Toronto time (21:00 home), and the gap she would create if she switches.

### 1526 · Pill taken more than 24 hours after the last one
Damla takes tablet 12 at 21:00 on Monday and forgets tablet 13, remembering on Wednesday at 07:00, 34 hours after the last tablet. For a combined pill one missed tablet is usually forgiven within a 24-hour lateness.
**Wants:** To be told she has missed one tablet, whether she is still covered, and any extra precautions with a date attached, such as barrier protection for the next 7 days.

### 1527 · Progestogen-only pill has a much narrower window
Hilal takes a traditional progestogen-only pill with a 3-hour window at 08:00. On Saturday she oversleeps until 11:40. Her partner's flight is that evening.
**Wants:** To know she is 40 minutes past the window, that she needs the extra protection for the next 2 days, and to see it against the evening plans.

### 1528 · Missed pill rules differ between two pills she owns
Hilal is switching from a 3-hour pill to a desogestrel pill with a 12-hour window, and for two weeks holds both packs.
**Wants:** For each late tablet to be judged against the pill it belongs to, not the one she took last.

### 1529 · Patch changed weekly on the same day, and the day shifts by a trip
Merve wears a patch and changes it every Monday for 3 weeks, then goes 7 days without. She is away for a conference from Sunday to Tuesday in a timezone 8 hours ahead and changes it Tuesday morning, a day late.
**Wants:** To know whether the delay lets the patch lapse, and how the new change day moves the patch-free week.

### 1530 · Ring is in for 21 days and out for 7, and the removal falls on a holiday
Sude's ring goes in Wednesday 1 July and is due out on Wednesday 22 July. She is in a car for 6 hours that day and would have removed it at 21:00. The ring can be out for up to 3 hours.
**Wants:** To have removal and reinsertion times shown so that the 3-hour limit is not missed on the day of the drive.

### 1531 · Injection due every 12 to 13 weeks, and the trip that spans it
Elif had her injection on Monday 6 April. The next is due between Monday 29 June (12 weeks) and Monday 6 July (13 weeks). She is abroad from 27 June to 12 July.
**Wants:** To be told the clinic date must be set before she leaves or fall between two clinic visits at home, and what happens if she misses the last date.

### 1532 · Pill, patch, ring and injection of four different women in one house
Ayse, Buse, Cansu and Deniz live in a shared flat. Each is on a different method with different windows, and they share one bathroom shelf and one noticeboard.
**Wants:** Each to see only her own schedule and no one else's, while shared items such as the shelf space and the pharmacy run can still be coordinated.

### 1533 · Islamic prayer times paused during menstruation
Rabia normally prays five times daily. From day 1 to day 6 of her period, prayers are not performed. Her prayer reminders and a prayer group she leads on Fridays keep firing.
**Wants:** For the reminders to go quiet on those days and resume on the day she is clean, without her having to tell anyone why.

### 1534 · A prayer reminder that stays silent, and someone notices
The mosque group, of 14 women, sees that Rabia's status is 'not attending' for 5–7 days each month, always the same days as another sister, Hafsa.
**Wants:** To be absent on those days without a shared status that lets other members work out when she menstruates.

### 1535 · The day 1 of the period is uncertain because it started after the sunset prayer
Rabia's bleeding begins at 20:15 on Tuesday, after the day's sunset prayer but before the night one. She is unsure whether Tuesday counts as a day of menstruation for the fast and the prayer.
**Wants:** To be able to mark the exact time and let that decide what Tuesday's remaining reminders do.

### 1536 · Ramadan fasting days missed and owed as kaza
Rabia missed 6 fasting days in Ramadan 2026 (18 February to 19 March). She owes 6 days made up before the next Ramadan begins around 8 February 2027.
**Wants:** To see 6 days owed against a deadline, and how many she has already made up.

### 1537 · Making up kaza days on days that are not predicted to be a period
Rabia would like to fast her 6 kaza days on non-consecutive Mondays, avoiding any predicted period and avoiding a busy week. Her cycle length is 27 to 31 days.
**Wants:** To be offered days that are most likely to be free of a bleed, and told when one of them has a 30 percent chance of overlapping one.

### 1538 · A kaza day interrupted by a period starting mid-day
Rabia begins a make-up fast on Monday 11 January and her period starts at 15:00. She must break the fast.
**Wants:** For that day not to count towards the quota, for the balance to stay at what it was, and for the next suggested day to be recalculated.

### 1539 · A quota across a year, with a cycle that runs long twice
Betul owes 9 days from Ramadan 2026 and by June she has made up only 3. Two periods have run 9 days, longer than the 6 she usually has. The remaining 6 have to fit in the 8 months before Ramadan 2027, and 4 of them she wants to keep off her working days.
**Wants:** To see whether 6 days still fit, when the last safe day to start is, and how tight the year has become.

### 1540 · Two quotas from different years
Betul also still owes 3 days from Ramadan 2025 that were never made up, so she carries 9 days owed from 2026 and 3 from 2025.
**Wants:** To see the two debts kept apart with their own deadlines, and to be told which is older when she chooses what to fast next.

### 1541 · Ramadan fasting when a period is predicted during the last ten days
Yasemin is planning her Ramadan, including extra worship on the last ten nights, which run from 8 to 17 March. Her period is predicted around 12 March with a wide spread.
**Wants:** To see which nights of the last ten she may lose if the bleed comes, and to plan the rest with that in mind, not relying on any single night.

### 1542 · Fasting begins at dawn and the time changes with her location
Yasemin fasts on a work trip, in a city where dawn falls at 05:12, instead of 04:40 at home. Her period ends late in the night before.
**Wants:** For the cutoff by which she must have completed her ritual wash before dawn to shift with where she is standing.

### 1543 · Jewish niddah count of clean days
Tamar's period ends on the afternoon of Sunday 8 March. Her practice is to wait at least 5 days from the start, then count 7 clean days without any spotting, and to immerse in a mikveh on the night after the 7th.
**Wants:** The date she becomes eligible, with the day count respecting each day ending at nightfall and not at midnight.

### 1544 · The count restarts after a spot on day 5
On day 5 of Tamar's count she finds a spot on an inspection cloth. Her rabbi rules that the count starts again.
**Wants:** To have the count restart from that day, with the mikveh date moved and everything hinged on that night moved with it.

### 1545 · Mikveh night falls on Shabbat
Tamar's 7th day ends on Friday evening, so the immersion night is Shabbat. The mikveh is open, but her travel plans, the babysitter and her husband's business trip are all set on the assumption of a weekday.
**Wants:** To see the immersion date, the constraint from Shabbat travel, and any conflict, all at once.

### 1546 · Mikveh appointment must be after nightfall, which changes every week
The mikveh has slots at 20:00, 20:45 and 21:30. Nightfall this Thursday in Manchester is 20:52 but next Thursday 21:02. Tamar has a hospital shift ending at 20:30.
**Wants:** Slots that are only offered if they come after nightfall on the actual date, not a fixed clock time.

### 1547 · Privacy across a couple's schedules
Tamar and her husband Yoni both keep calendars. His hides the reason for the days they are apart, but his own sports league can see when he is 'unavailable'.
**Wants:** For neither calendar to reveal the count, and for the family to plan travel without having anyone else learn the dates.

### 1548 · Marathon on a predicted period day
Gamze runs the Istanbul half marathon on Sunday 25 October, 08:30 start. Her period is predicted to start on that Sunday, plus or minus 2 days, and she had planned her taper for a week.
**Wants:** To see the race set against a bleed chance, with heavy-flow supplies for the run planned, without changing her taper because of a guess.

### 1549 · Training load adjusted by phase, and the phase is wrong
Gamze's coach Selcuk tunes hard interval sessions for the days after her period ends, which he thinks start on Monday. Her period is actually 4 days late.
**Wants:** For Monday's hard session to be flagged as uncertain as soon as the late start is known, and for the whole week's plan to shift together, in order, without the coach having to re-plan by hand.

### 1550 · Coach sees the training effect but not the reason
Coach Selcuk sees that Gamze's load is reduced 30 percent on certain days, but the club's rule says coaches must not see cycle data.
**Wants:** For the coach to see the reduced load and be able to plan around it, without seeing why or what phase it is.

### 1551 · Team of 18 athletes with the same schedule
A volleyball team of 18 women trains together on a fixed schedule, and about 4 of them are predicted to be on day 1 or 2 at any given practice. The physio wants to know how many might struggle at Wednesday's session.
**Wants:** A count or a chance for the group, never the names, and never small enough that one person can be picked out.

### 1552 · Team count small enough to identify one person
On a rowing four with 4 members, the physio's count says '1 of 4 on a heavy day' on Thursday, and the other three have all told their teammates they were not.
**Wants:** To not be given a number that identifies her by elimination.

### 1553 · Photo shoot fixed months ahead
Sevgi is booked for a swimwear photo shoot on 19 September, 09:00 to 15:00, arranged 4 months ago and involving 12 people, each with a fee. Her period is predicted for 18–22 September.
**Wants:** To get the earliest warning that the shoot falls in the likely window, in time to talk to the agency without giving the reason, and the ability to accept a move only if the other 11 can also shift.

### 1554 · Wedding day as bride with a hard date
Ceyda's wedding is on Saturday 24 October and the venue, 200 guests, and the honeymoon flight the next morning at 06:10 are booked. Her period is predicted for 22–28 October.
**Wants:** To see the risk in advance of the day, with the pill-skipping option flagged with its own deadline, so that she can decide about delaying the bleed before it is too late.

### 1555 · Wedding day as a guest and the dress
Mert's sister Ela attends her cousin's wedding on Saturday 24 October in a pale dress and expects a 12-hour day starting at 14:00. Her period is predicted on day 1 that Saturday.
**Wants:** To be nudged about the choice of outfit and supplies with a lead time, and for the wedding plan not to be moved because of it.

### 1556 · Teenager's first period is expected but at an unknown date
Defne, aged 12, has not had her first period yet. Her mother, Sibel, wants to have supplies ready in her school bag for the term starting Monday 14 September, and Defne does not want anyone to know.
**Wants:** For Sibel to plan a school-bag kit and a plan for what to do at school, without a predicted date, and for it to be nothing Defne's classmates or teachers can see.

### 1557 · First period arrives at school and a parent has to be reached
On Wednesday at 11:20 Defne starts her first period during a lesson. Her mother is in a meeting until 14:00 and her father is travelling. The school nurse has pads.
**Wants:** For Defne to reach her mother quickly and privately, for the mother's meeting to be interrupted only if she has chosen that, and for the event to be recorded so the first cycle can begin to be tracked.

### 1558 · A parent sees the teenager's data and the teenager grows up
Sibel helps Defne track cycles from age 12. At 16 Defne wants to take control, and Sibel has the history of four years.
**Wants:** For Defne to take over on the date she chooses and for her mother to keep only what Defne allows, with a clear point after which the mother no longer sees anything new.

### 1559 · Household chores on the bad days
In a house of five, Ali, Burcu, and their three children, Burcu asks that Ali cook dinner on her days 1–2, and the eldest child has football on Tuesday. The rota is on the fridge and on a family calendar.
**Wants:** For Ali to see that he cooks on those evenings without the rota showing her cycle to the children.

### 1560 · The rota depends on a prediction that shifts
The dinner swap is set for Tuesday and Wednesday, but Burcu's period arrives on Friday. Ali has already bought groceries for two cooked dinners.
**Wants:** For the swap to be cancelled or moved automatically and for the groceries to be moved to the days that now need them.

### 1561 · Partner's holiday request against her own plan
Emir wants to book a five-night trip to Bodrum from 9 to 14 November for their anniversary, and she says only that 'that week is bad'. He has no other information.
**Wants:** For Emir to be shown a range of dates that she has marked as fine, with no reasons, and for his booking to be checked against them.

### 1562 · Correcting the past: a period logged on the wrong day
Nazli logged her period as starting on 3 March, but it started on 1 March and she only noticed on 6 March. Her training block, a filed remote day and a mikveh count-like plan were built on 3 March.
**Wants:** To correct the start date and see each plan change that depended on it, including what has already been done based on the wrong date.

### 1563 · Two predictions that push each other
Pinar's period is predicted to start Monday and to end Friday, and her scheduled tonsillectomy follow-up is Thursday. Separately, a course of antibiotics is predicted to delay the period by 2 to 4 days.
**Wants:** To see both predictions taken together, so that the follow-up on Thursday is not treated as being on day 4 when the delay could make it day 1.

## Fertility and pregnancy timing

### 1564 · Ovulation test read in the morning vs the afternoon
Selin tests at 07:00 before her shift and gets a faint line on Monday and Tuesday. Her clinic leaflet says afternoon urine gives a clearer surge, and on Wednesday at 15:00 she gets a strong positive. She had assumed the surge began that morning. Her partner Emre has been counting on Tuesday night.
**Wants:** To see that the surge start is somewhere between Monday morning and Wednesday afternoon, and that plans made for Tuesday night are not shown as certain misses or hits.

### 1565 · Fertile window vs the partner's fixed travel
Deniz predicts her fertile window as 12-17 March from three months of data. Her partner Kaan flies to Singapore on the 13th and returns on the 16th, landing at 06:10. The window is still an estimate, and its edges move by about a day each month.
**Wants:** To be told which nights are likely, unlikely or impossible for both to be together, and how that changes as the estimate is revised.

### 1566 · Two partners' shifts leave no shared waking evening
Ayşe works nights on a hospital ward 19:00-07:00 Monday to Thursday. Her husband Murat works 08:00-17:00 Monday to Friday. Her positive ovulation test lands on Tuesday at 15:00, when she is asleep and he is at work.
**Wants:** To see the real gaps in both days when they are both awake and free, even though the two calendars are never shown to each other in full.

### 1567 · One partner's calendar is private from the other
Lena wants to share only "not available that night" with Tobias because her reason is a work dinner with a client under a confidentiality agreement. Tobias only needs to know whether the night works.
**Wants:** Tobias to see a night is unavailable without seeing what it is, and Lena to see whether this hides a fertile-window night.

### 1568 · Two-week wait ends on a day the person will be abroad
Nadia ovulated on 4 October, so her period is due about 18 October. She has a work trip 16-20 October to a country where pregnancy tests are hard to buy and a test would be done in a shared hotel room with a colleague.
**Wants:** To be asked before the trip whether she wants to test earlier, later, or carry a test with her, and to see what each choice does to the day she learns the result.

### 1569 · Testing too early gives a false negative
Ceren tests on day 9 after ovulation and gets a negative. Her period is not yet due. The test claims it works from 4 days before a missed period, but the usual hormone rise may not be detectable this early. She has told her sister she will announce on Sunday.
**Wants:** To see that a negative on this day does not settle the question, and to see the day a negative would count.

### 1570 · Early loss and the plan restarting
Hannah miscarries at 7 weeks on 3 November. Her plan had the 12-week scan booked for 3 December and a wish to tell her manager on the 10th. She asks to see none of it for now, but keeps the hospital follow-up of 17 November.
**Wants:** Pregnancy items to disappear from view quietly, the follow-up to stay, and nothing to send reminders, congratulations or "your baby is X weeks" messages afterwards.

### 1571 · Advice to wait after a loss vs the wish to try again
Hannah's doctor says one normal period is enough before trying again. Her own wish is to wait three cycles. Her partner Sam feels ready now. The three of these give different earliest dates.
**Wants:** To see each earliest date labelled with whose it is, without one being treated as the correct one.

### 1572 · Bleeding after a loss with no clear end
After her loss, Beatrice bleeds on and off for 19 days. Her doctor says the first real period should come 4-6 weeks after the loss, but the count from which bleeding to start is unclear to everyone including the clinic.
**Wants:** To record her own idea of when the bleeding ended and see the restart date follow from it, and to change that later without losing the earlier one.

### 1573 · Tracking method changes mid-cycle
Irem has used morning urine tests for two years. In month 25 her doctor asks her to switch to a basal temperature chart and a blood hormone test on cycle day 21. Her earlier data was from a different measurement and is not comparable.
**Wants:** To keep the earlier data, to see the new type of reading clearly marked as different, and predictions not to mix the two without saying so.

### 1574 · IUI needs a trigger and insemination the next day, but the partner cannot attend
Fatma's clinic tells her to trigger on Thursday at 21:00 and attend insemination on Saturday at 10:00 with her partner Ali's sample. Ali is on a training course 300 km away until Friday evening. A frozen sample is an option but takes three working days to release.
**Wants:** To see that Ali's sample cannot be fresh on Saturday unless he leaves Friday by a given time, and that frozen would have needed a request three working days earlier.

### 1575 · Stimulation injection at the same time every evening, then a late dinner
Zeynep injects at 20:30 every evening for 10 days. On day 6 she is a guest at a wedding until midnight. The medication sheet allows a window of about 1 hour either side.
**Wants:** To see she has until 21:30 at the latest, to be told about the conflict on day 1, and to see the injection as still part of the wedding evening rather than a clash she must resolve alone.

### 1576 · Injection due while the person is in the air
On day 7 of stimulation Nora's flight home leaves at 19:40 and lands at 23:15. Her injection is due 20:00. Medication is in her hand luggage in a cool bag. The airline permits medical items but the cabin has no private place.
**Wants:** To see the conflict with a permitted window, and to see the injection either moved within the allowed hour or taken before boarding.

### 1577 · Injection time crossing a timezone change
Ela lives in Istanbul and injects at 20:00 local time. For days 4-6 she travels to Lisbon, two hours behind. Her clinic says keep to 24 hours between doses, plus or minus one.
**Wants:** To see whether 20:00 in Lisbon or 22:00 Lisbon time (20:00 at home) is allowed, and the doses stay 24 hours apart whichever she chooses.

### 1578 · Clinic gives monitoring scan at short notice
On day 5 the clinic phones at 16:30 with a scan slot at 08:15 the next morning. Selma has a 08:00 meeting with 12 people and was going to go to work from home.
**Wants:** To see that accepting the slot moves the meeting, that the meeting owner can be told "unavailable" without the reason, and that the slot is held only for a short time.

### 1579 · Scans every two to three days push each other later
Monitoring scans were booked for day 5, 8 and 10. On day 5 the follicles are slower than expected, the clinic says next scan in 3 days rather than 2, and the trigger is now uncertain by 2 days. The person's holiday booking, work trip and mother's visit all sit in days 10-14.
**Wants:** To see which of those things are now at risk and which are only possibly at risk, ranked by how easily they can be moved.

### 1580 · Trigger shot to retrieval is 36 hours, plus or minus almost nothing
Jale is told to trigger at 22:00 on Wednesday for retrieval at 10:00 Friday. The clinic requires arrival at 09:30 after fasting from 01:00.
**Wants:** To see all four times together (trigger, fasting start, arrival, retrieval) and the 36 hour figure, and to see if any one shifts the others.

### 1581 · Trigger time falls during a flight
Pinar's trigger is exactly 22:00 on Wednesday. She has a work trip that includes a flight from 21:15 to 23:50 that night. The retrieval slot is fixed and cannot move earlier.
**Wants:** To be told the situation is impossible before booking anything more, and to see what times would work for the trigger given the retrieval slot.

### 1582 · Trigger shot while abroad in a different timezone
Elif is in Dubai (3 hours ahead of Istanbul) when the clinic in Istanbul tells her "trigger at 22:00". She does not say which time. Her partner at home is on Istanbul time.
**Wants:** One agreed instant that all three (Elif, the partner, the clinic) see in their own local time with no doubt which is meant.

### 1583 · Retrieval date moves because the clinic is closed on a weekend
The natural trigger date falls Friday night, making retrieval Sunday 10:00. The clinic does not do Sunday retrievals. The clinic proposes an earlier trigger on Thursday, with smaller follicles, or a later one on Saturday for retrieval on Monday.
**Wants:** To see the two options with their different dates for work leave, and the effect on transfer and test days.

### 1584 · A public holiday hits the transfer and test days
Ayla's transfer is on day 5 after retrieval, which is a national holiday of 3 days (Kurban Bayramı). The clinic is closed for the holiday. The blood test 10 days after transfer falls on a Sunday.
**Wants:** To see which of these days are fixed by biology and which by clinic opening hours, and to see the difference.

### 1585 · Number of embryos affects transfer day
After retrieval, 11 eggs are collected and on day 1 the clinic reports 7 fertilized. Day 3 transfer is possible, but the clinic prefers day 5 if at least 4 embryos are still developing. The decision comes on the morning of day 3.
**Wants:** To see both possible transfer dates from the start and the deadline when the choice is made, and everything after to show as "depends on that morning".

### 1586 · Blood pregnancy test 9-11 days after transfer
Transfer was on Monday 6th. The clinic says blood test 9-11 days later. Hakan must choose between the 15th and 17th. The earlier one has a higher chance of unclear result.
**Wants:** To see the window 15-17 and the trade-off, and the choice to be his to make.

### 1587 · Waiting for a test result when the person has a public commitment
Didem's blood test is on Thursday at 09:00, with the result expected by phone between 13:00 and 17:00. She is hosting a training day for 40 people from 09:00 to 17:00.
**Wants:** To see that the call could arrive during the session, and to have a way to have a quiet 10 minutes without saying why.

### 1588 · Cycle cancelled mid-way
On day 9 of stimulation, only two follicles are growing and the clinic advises cancelling. Bahar's leave from work, a booked retrieval Friday, transfer Tuesday and the second and third cost instalments are all built on this cycle.
**Wants:** To see everything that depended on the cycle either removed or asked about, what money has been spent and cannot be recovered, and a suggestion to keep the leave for a possible restart.

### 1589 · Cancelled cycle restarts after the next period
After the cancellation, Bahar's clinic says restart medication on the day 2 or 3 of her next period, expected in 12 to 18 days. The exact start is known only on that morning.
**Wants:** To see the restart as a range that narrows, and other plans nearby to be shown as possibly moving.

### 1590 · Freeze-all changes the plan after retrieval
Retrieval goes well, but on the morning after, the clinic finds a risk of ovarian hyperstimulation and advises freezing all embryos and transferring in a later cycle. The fresh transfer planned for day 5 does not happen. The next transfer will be 2 to 3 months later.
**Wants:** The fresh transfer and the test that hung on it to go away, and a new transfer to appear with no date, but with the earliest time.

### 1591 · Frozen transfer timed to natural cycle vs medicated cycle
Sude can do a frozen transfer on a natural cycle, which depends on her ovulation (uncertain to within 2 days), or a medicated cycle, which lets the clinic pick the date to the day. The natural one suits her work better on average, the medicated one suits her mother's visit.
**Wants:** To compare the two choices by how sure the date is, not just by the date.

### 1592 · Trying naturally while waiting for IVF
Ipek and Cem have an IVF start in 11 weeks. Meanwhile they are trying naturally. The clinic asks to be told immediately if she becomes pregnant, since some IVF medications would then not be appropriate.
**Wants:** The IVF start not to be cancelled by a possibly positive test, but to be shown as conditional on a test she does the day before starting.

### 1593 · Egg freezing over two consecutive cycles
Irmak plans two egg-freezing cycles about 6 weeks apart in the same year, wants both scheduled before her 37th birthday on 20 December, and has a job with an annual audit from 1 to 15 November.
**Wants:** To see whether two cycles plus recovery fit before her birthday and around the audit, and what gives if one runs late.

### 1594 · Donor sperm shipment arrives on a day the clinic has no room for it
A donor bank in Denmark ships frozen samples in a tank that must reach the clinic in Turkey and be used within a set number of days before its cooling runs out. The courier says delivery could be Tuesday to Thursday. The clinic can receive only on Monday, Wednesday and Friday.
**Wants:** To see the possible delivery days against the days the clinic can accept them, and to see if the treatment date still stands in each case.

### 1595 · Donor and recipient are in different countries and timezones
An egg donor in Mexico City (UTC-6) has her trigger at 23:00 her time. The recipient's clinic in Athens (UTC+2/+3) must be ready for the transfer around the resulting retrieval, timed to the donor's cycle. Clocks in Mexico do not change but Athens changes clocks in October.
**Wants:** One shared instant for the trigger and retrieval, shown in each person's own time, still right on both sides of the clock change.

### 1596 · Donor privacy while coordinating
The donor and the intended parents do not know each other and must not learn each other's full schedules or location. The clinic coordinates both. The donor needs a day off work for retrieval; the parents need to plan a trip.
**Wants:** Each side to see only the times that concern them, and no side to be able to work out the other's home city, employer or travel.

### 1597 · Surrogate is in another country and the birth may need a visa
The surrogate lives in Georgia and the intended parents in Germany. A transfer is set for 14 April. The parents need a visa for a stay from about 36 weeks, and the embassy takes 15 to 30 working days to answer.
**Wants:** To see the latest date to apply for the visa given the possible birth window, even though the pregnancy has not started yet.

### 1598 · Surrogate's appointments involve two sets of people
Surrogate Nino has an anomaly scan on Tuesday. The intended parents want to join by video. Their time is 2 hours different from hers, the scan time is set by the hospital, and one parent works a night shift.
**Wants:** To see whether both parents can join, one, or neither, and Nino to control whether the video call is allowed at all.

### 1599 · Cost instalments tied to treatment stages
Oğuz pays for IVF in 4 instalments: at start, at retrieval, at transfer, at test. The cycle is cancelled after the second. The clinic's contract refunds part of the third and fourth only if cancelled before a stated date.
**Wants:** To see each amount and its due date, and what is due or refundable after the cancellation, without the total looking like a plan that is still running.

### 1600 · Payment date falls when the bank is closed, while the clinic will not release medication
Medication for stimulation is released only after a payment posted on the clinic's side. Ece pays on Friday at 17:30 by bank transfer, which posts on Monday. Stimulation is due to begin on Saturday.
**Wants:** To be warned that Friday 17:30 is too late for a transfer to arrive by Saturday, and to see the latest time that works.

### 1601 · Leave from work for a treatment that is not scheduled
Aylin's employer gives 5 days of unpaid leave a year with 7 days notice. Her IVF retrieval will fall in a 3 day window she will learn only 2 days before.
**Wants:** To see the conflict between notice needed and notice she can give, and to have the rule shown to her rather than only the dates.

### 1602 · Employer knows leave but not the reason
Aylin's manager needs to know which days she is away and nothing else. HR has her medical certificate. Her team's project plan shows her as away on days where she would rather show nothing.
**Wants:** The team to see only "away", with the dates as certain as she chooses to make them, and the reason not to be inferred from the pattern of short notice absences.

### 1603 · Family who know some of it and not the rest
Berk's parents know the couple are trying, but not that they are in IVF. His mother plans a family holiday in the week of the expected transfer and asks him to confirm.
**Wants:** To answer with "yes" or "no" without giving the reason, and for the shared family calendar not to show any treatment dates.

### 1604 · A partner's on-call shifts around transfer
Cansu's partner Mert is a firefighter on 24-hour shifts. The transfer is on a day he is on duty. He would like to attend and can swap shifts with 5 days notice, but the transfer date is only known 3 days ahead.
**Wants:** To see that a swap made 3 days before is not allowed, and options such as a standing arrangement to be shown rather than assumed.

### 1605 · Last period date and conception date disagree
Zehra's last period was on 1 January. She conceived by IVF with transfer on 25 January of a day 5 embryo. Counted from her period, that is 3 weeks 3 days pregnant on 25 January. Counted from the embryo's age, she is 2 weeks 5 days earlier than a natural pregnancy would say.
**Wants:** To see her weeks of pregnancy calculated the way the clinic and hospital do, with the basis named, and not mixed with the naive count.

### 1606 · Dating scan moves the due date and the past has to change
At the 12 week scan, the baby measures 5 days smaller than the last period date implies, and the hospital moves the due date by 5 days later. Appointments already booked in windows (the NT scan, a glucose test, vaccinations) now sit in different weeks. Some appointments already happened.
**Wants:** To see the past appointments still shown as what happened, the future ones rechecked against their windows, and the old and new due dates both kept.

### 1607 · A revised due date moves one appointment out of its window
Because of the move in case 1606, the glucose test booked for 4 weeks from now would now fall at 23 weeks 5 days, one day before its window of 24 to 28 weeks opens. The clinic is fully booked in the week after.
**Wants:** To be told this early, with the earliest date that is inside the window and which bookings might be given up.

### 1608 · NT scan window is only 3 weeks
Yasemin learns she is pregnant at 10 weeks 4 days by her period. The NT scan window of 11 to 14 weeks lasts about 3 weeks, and the local hospital is booked for 3 weeks ahead. The private clinic is 90 km away and costs money.
**Wants:** To see how many days of the window remain, which booking is inside it, and the price of each option.

### 1609 · Anomaly scan window overlaps a work trip
The anomaly scan window is 18 to 22 weeks by the hospital's rules. Gizem's 4 weeks of overseas work fall from 18 weeks 2 days to 22 weeks 2 days. The scan can only be done in her home country.
**Wants:** To see the exact days she is home and inside the window, which may be only the start or the end.

### 1610 · Glucose test needs fasting and a long morning
The glucose tolerance test takes about 2 hours with blood drawn at the start and after a sugary drink, preceded by 8 to 12 hours of fasting. Pelin has a school run at 08:30 and a meeting at 10:00. The test is offered at 08:00 or 13:00.
**Wants:** To see that 08:00 needs fasting from at least 20:00 the evening before, that it overlaps the school run and the meeting, and to see the afternoon slot's effect on fasting.

### 1611 · Vaccination windows opening in pregnancy
Whooping cough vaccine is offered from about 16 to 32 weeks (the UK advice; the exact window differs by country) and a flu jab is offered when the season opens, at any stage. Fulya is 30 weeks in early September and the local flu jab is not available until 1 October.
**Wants:** Each vaccine to show its own window with the country whose rule is used, and to show that changing the due date changes the whooping cough window but not the flu season.

### 1612 · Vaccine windows follow the person across countries
Merve is 24 weeks pregnant and moving from England to Germany in 6 weeks. Each country has a different recommended week and a different provider.
**Wants:** To see which country's advice applies when, and that a jab can be taken in either place inside both windows.

### 1613 · Maternity leave start rule counts back from the due date
Sevgi's employer requires leave to start no later than 11 weeks before the due date and at least 15 days notice, while her doctor allows work until 36 weeks. After a dating scan moves the due date by 6 days, both the latest start and the notice deadline move.
**Wants:** To see the earliest and latest start dates, the notice deadline, and what changed when the due date changed.

### 1614 · Employer rule vs the person's choice of leave start
The law gives the earliest leave start at 11 weeks before the due date, but Rabia wants to work until 37 weeks and start leave after birth. Her manager wants to know as early as possible and sees this as a plan, not a promise.
**Wants:** To give the manager a start date that is understood as an intention, and for the actual date to be accepted whenever it settles.

### 1615 · Hospital bag ready by a moment nobody knows
Aslı wants the hospital bag packed by 36 weeks, but the birth could be from 37 to 42 weeks. Some items (a passport, the maternity notes, a phone charger) are used every day until then.
**Wants:** To see which items are packed, which are waiting on use, and when the bag counts as ready, without a fixed date pretending to know.

### 1616 · Partner's on call and travel near the birth
Kerem is a surgeon on call every fourth weekend and a conference speaker on the 12th-14th of a month where his partner is in the last two weeks before her due date. His hospital allows two weeks paternity leave that must be booked with 4 weeks notice.
**Wants:** To see when the partner's absence would clash with the birth window, and when the leave request must be in.

### 1617 · Two people's leaves both count from the same unknown day
Kerem's and his partner's leave both start relative to the birth date. His employer wants a date on the day the baby is born; hers wants a date 11 weeks before. Neither wants to promise a date they do not know.
**Wants:** Each employer to see a date suited to their own rule, from the same underlying uncertain event.

### 1618 · Second child with different rules from the first
Nihal had her first child in one country under one leave law. For the second she has changed employer and country. Both leaves may overlap: the first child's parental leave allowance must be used before he turns 8, and the second child is due in 5 months.
**Wants:** To see both children's entitlements and expiry dates side by side, and how using one affects the other.

### 1619 · Twins and high risk change the schedule
Hale is expecting twins. Her hospital schedules scans every 2 weeks from 16 weeks, and advises leave 4 weeks earlier than for one baby. The usual windows in the general advice (for example anomaly scan at 18-22 weeks) do not apply to her alone.
**Wants:** To see the twin schedule replace the general one for her, and the general windows not to raise false alarms.

### 1620 · Six-week check after the birth
Dilek's postnatal check is due 6 to 8 weeks after birth, which depends on the birth date and whether it was a caesarean (in which case the hospital books an earlier wound check too). Her leave ends at 12 weeks and her mother, who is helping, leaves at 7.
**Wants:** To see the check inside its window, and the check's date follow a birth date not yet known.

### 1621 · Trying again after birth while breastfeeding
Dicle wants a second child about 2 years after the first. She is still breastfeeding twice a day, has had one period since birth, and it was 47 days after the previous one. She has a work contract that ends in 10 months.
**Wants:** To see the possible windows in which a birth would fall inside the contract or outside it, and that this is a comparison of ranges rather than a target date.

### 1622 · Person has been trying for 12 months and the clinic referral rule applies
NHS advice is to see a doctor after 12 months of trying, or 6 months if the woman is 36 or older. Ceylan turns 36 in 2 months, having tried 5 months.
**Wants:** To see two possible dates for seeking help, before and after the birthday, and how each is counted.

### 1623 · Treatment count limits and age cut-offs
A funding rule allows three IVF cycles up to the woman's 43rd birthday, and only if the previous cycle finished at least 6 months earlier. Ozge is 41 years 10 months and has had one cycle and a 5 month gap.
**Wants:** To see the last date at which a cycle can start and finish inside the rule, and what a cancelled cycle does to the count.

### 1624 · Many years, many cycles, one long history
Gül has been in treatment for 6 years with 9 cycles across 3 clinics, 2 countries, 2 partners and a change of job. She wants to see what was done and when to give a new doctor a short summary.
**Wants:** To see her whole history from a single view, with each clinic holding only its own records, and her deciding what to share with the new one.

### 1625 · Someone else needs to inject on a night the partner is away
Mine's partner does the evening injection because she cannot do it herself. He leaves for work in Ankara on day 6 and 7. A neighbour who is a nurse could do it, but at 21:00 not 20:00.
**Wants:** To see the days where the usual helper is absent, the nurse's free times, and whether the medication's allowed window covers 21:00.

### 1626 · Result changes what happens to everything after it
A blood test on the 17th comes back positive. All the plans for a second cycle, a holiday in a month, a change of job and the return to running are now different. A week later the second test shows falling levels and a loss.
**Wants:** The plans to come back as they were, without her needing to re-enter them, and the history to show what happened without making it look like a plan that never was.

## Menstrual conditions and life stages

### 1627 · Day-21 progesterone test on a 40-day cycle
Amara's GP orders a progesterone blood test "on day 21". Her cycles run 38 to 42 days, so ovulation falls around day 26 and day 21 is before it. The lab slot is booked for day 21 anyway.
**Wants:** to be told the requested day does not fit her cycle, and to see the day that would (about 7 days before the expected period) offered instead.

### 1628 · Progesterone test date moves as the period date moves
Ines has a progesterone test booked for 9 October, 7 days before her expected period on 16 October. On 5 October she is ill and ovulation is later than usual, so the expected period slips to 23 October. The booked lab appointment is now too early.
**Wants:** to be warned that the test no longer matches the timing it was meant for, before she turns up.

### 1629 · FSH and estradiol on days 2 to 5 with no period yet
Zeynep needs FSH and estradiol drawn on days 2 to 5. Her last period was 61 days ago and she has no bleeding today. The clinic asks her to book "when it starts".
**Wants:** to hold a test that is waiting for a period which has not come, without it going stale or being forgotten, and to see it placed the moment bleeding begins.

### 1630 · Test window of four days that closes at the weekend
Day 2 to 5 of Mira's cycle is Friday to Monday. The lab is closed Saturday and Sunday and the clinic phone line opens Monday at 9. Her period starts Thursday night, so her window may already be half gone.
**Wants:** to see how many usable days are left and which ones the lab is open.

### 1631 · Lab in another timezone changes what "day 2" means
Kaan lives in Istanbul, and his period starts at 23:30 on the evening of 3 March. His online consult is with a clinic in London, where it is 20:30 the same day. The clinic counts day 1 as 3 March. His own records say 3 March too, but he sleeps through bleeding onset at 01:00 on another night and it becomes 4 March for one and 3 March for the other.
**Wants:** the same day 1 shown to him and to the clinic, and to be able to see why they agree or differ.

### 1632 · Symptom diary kept for three months for a PMDD diagnosis
Dilara's psychiatrist asks for daily ratings for at least two full cycles before diagnosing PMDD. She rates mood every evening for 84 days. On days 40 to 44 she forgets and fills them in from memory a week later.
**Wants:** her record to show which ratings were made on the day and which were filled in afterwards, so the clinician can weigh them.

### 1633 · Diary that must span two cycles of unknown length
Ruth has PCOS and cycles of 45 to 90 days. Her doctor asks for two full cycles of tracking. She cannot know whether that is three months or six.
**Wants:** to see how far along the request is, and an honest range for when it will be done.

### 1634 · PMDD severe week overlapping a work deadline
Helen has PMDD and her severe days are usually the last 7 before her period. The next period is expected 12 to 16 November, and a project handover is set for 10 November.
**Wants:** to see that the handover may land in her worst days, and the size of the risk, without the reason being shown to colleagues.

### 1635 · Work accommodation for PMDD visible to manager but not the reason
Ayşe has agreed with her employer to work from home on her worst days. Her manager needs to see "working from home" on those days and nothing else. Her calendar also holds the therapy appointments and the cycle prediction behind it.
**Wants:** her manager to see the arrangement and not the condition, the prediction or the appointments.

### 1636 · Employer asks for more than was agreed
Six months after the accommodation in case 1635, HR asks Ayşe for the dates of every worst day over the past year "for the records". She has them, in detail.
**Wants:** to choose what to share and in what form, and to see afterwards exactly what was handed over and to whom.

### 1637 · Luteal-phase-only medication that starts late
Petra takes an SSRI only from ovulation to the period, about 14 days. Her ovulation is uncertain and her cycle length varies between 26 and 36 days. Starting on the wrong day gives her either 3 unmedicated bad days or 6 days of unneeded tablets.
**Wants:** a start day that is honest about being uncertain, and a way to correct it when ovulation is confirmed.

### 1638 · Period arrives a week early and the luteal medication runs on
Petra (case 1637) started her luteal tablets on 12 June expecting a period on 26 June. Her period comes on 19 June.
**Wants:** the medication end date to follow the real period, with today's unused tablets counted, and the rest of the plan to shift accordingly.

### 1639 · Iron tablets and morning coffee collide
Nour takes iron for anaemia after heavy periods and needs it at least an hour away from tea or coffee. She drinks coffee at 07:30 every day. Her tablets are due at 08:00.
**Wants:** to see the clash and to see where the tablet fits without wrecking her morning.

### 1640 · Iron doses spread across a day of travel
Nour (case 1639) flies from Istanbul to Toronto on Tuesday, leaving 06:00 and arriving 14:00 local, which is 7 hours behind. Her iron is taken once a day, at least 6 hours from other supplements.
**Wants:** a day of tablets that does not double up or skip across the time change.

### 1641 · Heavy bleeding that lasts twelve days when eight were planned
Selin plans a week of exams around a period expected to last 6 to 8 days. It runs 12 days and she needs iron infusions during it. Every later plan she made is now pressed.
**Wants:** to see what the extra four days push into and which of those things can move.

### 1642 · Blood test for ferritin cannot happen during heavy flow
Ferritin and haemoglobin are to be checked at the start of a course of iron, and her doctor says either day is fine. Her nurse says to avoid the peak days. Sude's period peaks on days 2 to 3, her only free morning is day 2.
**Wants:** to see a clash between the only free time and the advice, and to choose knowingly.

### 1643 · Menstrual migraine prevention starting two days before the period
Funda takes a preventive tablet for 6 days starting 2 days before her expected period. Her period is expected between 4 and 8 March. Starting too late loses the protection, starting too early wastes tablets.
**Wants:** to be prompted to start at a time that covers the earliest likely date, and to see how many tablets that costs.

### 1644 · Migraine on a day with a booked presentation
Funda (case 1643) has a migraine on the day she is to give a talk, 6 March, which is a day her prediction had flagged as high risk. The talk was scheduled a month ago, before the flag existed.
**Wants:** to know that this was foreseeable and to be offered what can be moved, including who would need to be told.

### 1645 · Endometriosis pain days that are dependable and days that are not
Zoe's worst pain arrives on days 1 to 2 and on ovulation, reliably. In her last three cycles there were also 4 unexpected bad days. She wants to plan the reliable ones without treating the unexpected ones as certain.
**Wants:** the reliable days and the surprises kept apart in what she sees, and both able to shape the week.

### 1646 · Surgery date set against a period date
Bea is booked for laparoscopic excision surgery on 14 May. Her surgeon prefers it not to be during her period, which is expected 10 to 16 May.
**Wants:** to see the overlap with the surgeon's preference, and to ask whether the operating date or the period estimate is the more movable one.

### 1647 · Recovery after surgery pushes everything and the cycle changes
After Bea's surgery (case 1646), she is told to expect 2 weeks off work and 6 weeks off lifting and driving. Her first period after surgery is heavier than usual and her next cycle is longer.
**Wants:** the recovery period shown as a range that widens or narrows as she reports how she feels.

### 1648 · Diagnosis that took eight years
Leyla first reported severe period pain at 17 and received a diagnosis of endometriosis at 25. She has eight years of notes, GP visits, ultrasound reports, missed school and work days, and painkillers. Her new specialist wants a summary of the whole eight years.
**Wants:** to pull out what matters from years of history quickly, without hand-copying, and without losing the detail.

### 1649 · Correcting the diagnosis date retrospectively
Leyla (case 1648) learns that a scan in year 4 showed a cyst that was reported as normal and later reread as an endometrioma.
**Wants:** the old record to show what was known then and what is known now, without erasing either.

### 1650 · Missed work days added after the fact for a benefits claim
Sara applies for disability support and must show 60 days of missed work over 18 months due to endometriosis. Some days were logged as "sick" without a reason, some as leave, some never logged.
**Wants:** to add reasons to old days afterwards, marked as added afterwards, and to count them for the claim.

### 1651 · Flare that is longer than the day it was logged for
Sara logs a flare on 3 April. It lasts until 9 April. Her plans for 4 to 9 April had been made assuming she'd be well.
**Wants:** the overrun to show against everything she had planned in those days, and for them to be reshuffled, not deleted.

### 1652 · PCOS cycle of 87 days and a prediction that is nearly useless
Deniz has PCOS. Her last cycles were 52, 67, 88, 45 and 74 days. The next period could be anywhere from 6 weeks to 3 months away. She has a wedding trip in 40 days.
**Wants:** an honest range, and for that range to be shown to her as wide rather than as a single confident date.

### 1653 · Ovulation signalled by a single positive test in the middle of nothing
After 90 days without a period, Deniz (case 1652) has a positive ovulation test and a temperature rise. That suggests her period will come in about 14 days, much sooner than before.
**Wants:** her earlier wide range to narrow because of the new evidence.

### 1654 · Metformin dose steps that must not clash with cycle events
Deniz is to increase metformin from 500 mg to 1000 mg over 4 weeks, stepping up every 7 days. Stomach upset is worst in the first days of each step. Her wedding trip falls in the third step.
**Wants:** to see that the trip lands on a hard week, and to see what shifting the steps costs.

### 1655 · Amenorrhoea in an athlete and the training block
Freya, a 19-year-old runner, has had no period for 5 months. Her doctor suspects low energy availability (RED-S) and asks her to cut training by a third for 3 months and increase food intake. Her season's races are scheduled.
**Wants:** to see what the reduced training does to the racing plan, and to see it honestly, not softened.

### 1656 · A period returning after months of absence
Freya's period returns after 4 months of reduced training (case 1655). She has no history of what to expect after such a gap.
**Wants:** the return recorded as a real event, not as an error, and for her earlier predictions not to treat 5 months of nothing as a normal length.

### 1657 · Bone scan schedule for an athlete with months of missed periods
Freya is due for a bone density scan when she has had 6 months without a period. That count is now at 5 months and 3 weeks.
**Wants:** the scan to be scheduled relative to a count that could still change, and cancelled or kept depending on whether her period comes.

### 1658 · School exam on an expected first period
Ela's school exams run 2 to 12 June and her period could start any time in that 3-week window. She wants to know if it is worth asking for arrangements.
**Wants:** to see the chance in plain terms, and the option to ask for adjustments without giving the reason in front of the class.

### 1659 · Perimenopause with skipped periods and a 12-month count
Gül is 49. Her periods: March, April, July, then nothing until now, which is November. The rule is that 12 consecutive months without a period marks menopause.
**Wants:** to see how far she is from that count, and for a single bleed to restart the count.

### 1660 · A bleed at month 11 resets the twelve months
Gül (case 1659) reaches 11 months without a period and then has a light bleed. She had planned to stop contraception on the assumption that the 12 months would complete next month.
**Wants:** to be told plainly that the count has restarted and which of her plans depended on it.

### 1661 · Night sweats that spoil the night before a shift
Nadia is perimenopausal. She wakes 3 to 4 times most nights with sweats. She works a 06:00 shift on Mondays and Thursdays.
**Wants:** to see the bad nights and the shifts together, and to know how often they coincide.

### 1662 · Sequential HRT with a monthly withdrawal bleed
Sevgi starts sequential HRT: oestrogen every day, progestogen for the last 14 days of a 28-day pack, with a withdrawal bleed expected shortly after. She is 51 and still has occasional natural periods.
**Wants:** the bleeds from HRT and any natural bleeds kept distinct, and the next expected bleed to reflect the pack.

### 1663 · Switching from sequential to continuous HRT
After a year, Sevgi's clinician moves her to continuous combined HRT, which is usually suggested after 12 months with no natural periods or at 54. She is unsure her natural periods have really stopped, and unscheduled bleeding is common in the first 3 to 6 months on this type.
**Wants:** to keep the switch date, the reason and the bleeding pattern together, and for expected bleeds to stop being predicted.

### 1664 · Patch change days on a twice-weekly schedule
Sevgi uses an HRT patch changed every 3 days and 4 days (Monday and Thursday). Her holiday runs Thursday to the following Wednesday, crossing a timezone 3 hours ahead.
**Wants:** the patch change times to stay sensible across the trip and not to drift by a day.

### 1665 · HRT supply gap
Sevgi's prescription is due to run out on 20 December and her pharmacy is shut from 24 December to 2 January. Her GP takes up to 5 working days for a repeat.
**Wants:** to see the last safe date to ask, taking the closures into account.

### 1666 · Menopause confirmed and old cycle predictions retired
After 12 months with no period, Gül (case 1659 and 1660) is postmenopausal. Years of future period plans exist in her calendar: iron reminders, migraine preventives, pad supplies.
**Wants:** the future predictions to stop while the history stays available.

### 1667 · Postmenopausal bleeding
Six years after her last period, Gül has bleeding. This needs prompt medical review, not a cycle prediction.
**Wants:** the bleeding not to be treated as a late period, and for the time to an appointment to be given priority in what she sees.

### 1668 · Fibroids with heavy bleeding and a planned procedure
Hatice has fibroids. She is offered an embolisation procedure in the next 3 months. The specialist wants it not to fall in her period, and her own heavy periods last 9 to 11 days. Her cycle is 26 days.
**Wants:** to see whether any window exists at all that is clear of bleeding and of the recovery period from an earlier procedure.

### 1669 · Adenomyosis pain that peaks before the period, not during
Ayla has adenomyosis and her worst pain starts 3 days before bleeding and eases once it begins. She gets no useful early warning from the period date.
**Wants:** to plan around the days before the period, and to understand how that differs from her friend's pattern.

### 1670 · Thyroid dose change that alters the cycle for months
Ceyda has hypothyroidism and starts levothyroxine. Her periods, which were 18 days apart and heavy, may lengthen over the next 3 to 6 months. Her existing predictions were built on the old pattern.
**Wants:** old cycle data not to keep dragging predictions after the change, but still to remain in her history.

### 1671 · Thyroid blood test timing relative to the tablet
Ceyda's thyroid test needs to be drawn before her morning tablet, while she also needs a day-3 blood test for another reason. Both are booked at 08:30 on day 3.
**Wants:** the two to be seen as one visit, with the tablet moved to after it.

### 1672 · Non-binary person stopping testosterone
Sam has been on testosterone for two years and stops it on 1 August for a planned surgery. Bleeding may return within weeks to months, with no fixed pattern.
**Wants:** predictions to start from nothing after the change, and to be wide and humble about a return of bleeding that is not certain.

### 1673 · Carer planning around a disabled person's period
Marta cares for her sister Lena, who has severe learning disabilities and cannot say when she is in pain. Marta records bleeding and mood changes. Lena's care worker, Tom, needs to know when help with changing is likely to be needed.
**Wants:** Tom to see the likely days for help and not the medical notes, and for Lena's own record to remain hers.

### 1674 · Two carers with different views of the same person's cycle
Lena's day service and her home carers both record events. On 4 May the service notes bleeding and home notes none, because home saw it a day later.
**Wants:** the two accounts to be placed side by side, not merged silently into one date.

## Freelancing and billable time

### 1675 · Retainer hours that expire at month end
Dana has a 20-hour monthly retainer with Brightwell Ltd. By 30 June she has logged 14 hours. The contract says unused hours expire. On 1 July the counter shows 20 again. Brightwell asks why they were not told 6 hours were about to vanish, and Dana had also planned only 3 more hours of work for them that month.
**Wants:** To be shown, before the month ends, that 6 hours will lapse and that her plan uses only 3 of them, so she or the client can decide what to do.

### 1676 · Retainer hours that roll over, but only once
Marek's retainer with Kolo Studio is 20 hours a month, and unused hours roll into the next month but expire after that. In March he uses 12, in April 20, in May 20. In May he asks which hours he is burning first, the rolled-over March ones or the fresh May ones.
**Wants:** An answer that shows which hours were used and which lapsed, matching the contract's rule, without him doing the arithmetic.

### 1677 · Six-minute increments on a two-minute call
Ines, a solo lawyer, bills in 6-minute increments, rounded up. She takes a 2-minute call, a 7-minute call and a 1-minute voicemail check for the same client in one hour. The invoice lines read 0.1 h, 0.2 h and 0.1 h, totalling 24 minutes billed for 10 minutes spent, and the client queries it.
**Wants:** The real minutes and the billed minutes both visible for each entry, and her day still adding up to 24 hours of actual time.

### 1678 · Fifteen-minute minimum against a five-minute task
Tobias charges a 15-minute minimum per task. Between 09:00 and 09:30 he does six 5-minute tasks for the same client. Six minimums would bill 90 minutes inside a 30-minute window.
**Wants:** His calendar to show 30 minutes of actual time and an invoice figure that follows the rule in his contract, with the gap between the two plainly visible.

### 1679 · One hour, two clients
Priya writes one piece of research on 14 March that is used in both a report for Aurelia Bank and a talk for Northgate Council. She spends 3 real hours. She bills each client 2 hours, since the reuse saved time, so her invoices total 4 hours against 3 lived hours.
**Wants:** To record it once as 3 hours of her life and have both clients billed as she chose, without her day appearing to contain 4 hours.

### 1680 · The timer left running overnight
Leo starts a timer for Hartley & Sons at 17:40 on Tuesday and closes the laptop. He notices at 08:15 on Wednesday. The timer shows 14 hours 35 minutes. He really worked until 18:20.
**Wants:** To be asked or shown that this entry is implausible, correct it to 40 minutes, and have nothing else in the night, such as his sleep and his other client's morning call, treated as overlapping with it.

### 1681 · Timer running on two clients at once
Sofia has two timers going: one for Vega Labs and one for Oakfield Media, because she is on a call that covers both. The call lasts 50 minutes. Both timers show 50 minutes and her day now contains 100 minutes in a 50-minute call.
**Wants:** The overlap to be visible as deliberate, not an error, and her total worked time for the day to count the call once.

### 1682 · Client disputes 6 hours on an invoice
Ravi sent an invoice to Lumen Health on 3 May for 42 hours. On 20 May Lumen's finance lead says 6 of those hours, all on 12 April, were never authorised. Ravi has notes showing the work happened, but the client's approval email was for a different scope.
**Wants:** The disputed 6 hours marked as contested while the other 36 stay payable on their date, and the contested hours not silently removed from his record of what he did.

### 1683 · Rate rises in the middle of a project
Nadia's rate for Cobalt Foods is 70 an hour until 31 August and 85 from 1 September. The project spans 18 August to 12 October. A task that started on 30 August and ended on 2 September straddles the change.
**Wants:** The hours before midnight billed at the old rate and those after at the new one, or an explicit choice shown to her, without her remembering the change date.

### 1684 · Overbooked across three clients
On Thursday 5 November, Yusuf has promised 8 hours to Alder Co, 6 hours to Bramble Ltd and a 4-hour workshop to Cedar Inc. He has 9 working hours. Each promise was made on a different day, each to a different person, and none knows the others exist.
**Wants:** To be told on the day he accepts the third promise that Thursday cannot hold all three, without any client seeing the other clients' names.

### 1685 · Deadline set in the client's timezone
Kaito in Osaka is given a deadline of "Friday 17:00" by Sterling & Reed in New York (Eastern time). The clocks in New York change to winter time on the Sunday before. Kaito's plan, made two weeks earlier, assumed 06:00 Saturday his time and now the real moment has moved an hour.
**Wants:** The deadline to stay pinned to New York's 17:00 and his plan to show the true moment in his own morning, updated when the clocks change.

### 1686 · Fixed price that turns out to cost more hours
Greta agreed 12,000 for a website from Hollis Bakery, estimating 120 hours. After 4 weeks she has logged 118 hours and is about 60 percent done. At this pace the job needs about 195 hours, so her effective rate has fallen from 100 to about 62.
**Wants:** To see, before hour 118, that the estimate is failing and what the finish date and effective rate would be if nothing changes.

### 1687 · Scope creep after approval
Amir's contract with Reef Games covers 3 game levels, delivered by 20 June. On 2 June the client sends a fourth level in an email that says "small addition". No one changes the contract, but the fourth level would need 25 hours and push the delivery to 1 July.
**Wants:** The addition visible as a change to the agreed work, with what it moves and what it costs, and the original agreement still recoverable.

### 1688 · Milestone payment tied to client sign-off
Helena is paid 30 percent when Pinecrest Ltd signs off the design. She delivered on 10 September and Pinecrest has said nothing since. Her cash plan assumed payment on 24 September and her rent is due 1 October.
**Wants:** To see that her expected income has moved from "known date" to "unknown", and what depends on it, the rent included, so she can decide to chase.

### 1689 · Slow feedback pushes her other work
Owen waits on Marlow Design's feedback for a logo. It was promised Monday and arrives Thursday. The feedback needs 2 days of revisions, and he had booked those days for Ferris Tools starting Wednesday. Marlow's delay now eats into Ferris's booked days, and Ferris's own next step depends on his output.
**Wants:** To see which of his other commitments moved because of Marlow, and to be able to tell Ferris a new date without naming Marlow.

### 1690 · Client vanishes
Jonas finished 30 hours for Tern Publishing in July and the invoice went out on 1 August. It is now 1 October. Tern has stopped replying to email. He has a further 20 hours booked for Tern in October that he is holding empty.
**Wants:** To release the October hours as available for new work, and to keep the unpaid invoice in view, without deleting the booking history.

### 1691 · Net-30 invoice that lands on a weekend
Fatima invoices Orchard Bank on 1 October, payable net-30. Day 30 is a Saturday. Orchard's rule pays on the next business day, and Fatima's mortgage debit is on the Friday.
**Wants:** The expected payment date to show as Monday, and her Friday to show as short of money, rather than being told the invoice is due Saturday.

### 1692 · Net-60 client who actually pays in 85 days
Client Delmar Ltd has agreed net-60. Over the last six invoices, Delmar paid after 79, 88, 84, 91, 82 and 85 days. Carlos's new invoice says due in 60 days and his cash plan trusts that date.
**Wants:** An expected payment date based on how Delmar has actually behaved, shown next to the contractual date, and updated by each new payment.

### 1693 · Late fee added while a dispute is open
Wren's invoice to Ashby Corp was 5,000 due 1 June, with 1.5 percent monthly late fees. On 10 June Ashby disputed 800 of it. On 1 July she is paid nothing. The fee should apply to 4,200 for sure, and to the 800 only if the dispute fails.
**Wants:** To see the fee as a range until the dispute resolves, and the whole thing recalculated when it does.

### 1694 · Quarterly estimated tax against uneven income
Mia's estimated tax is due on 15 January, 15 April, 15 June and 15 September. She earned 4,000 in Q1, 22,000 in Q2, and nothing in Q3, because a client paid late. Her payment on 15 September must come from money that arrives in October.
**Wants:** To be warned months ahead that the tax deadline falls before the money, and what the gap is.

### 1695 · VAT period that closes mid-project
Pieter is VAT-registered and files quarterly. An invoice dated 28 September for work done in July, August and September belongs to Q3 for VAT, while the payment arrives 14 November. His accountant asks which quarter each hour belongs to.
**Wants:** The same hours shown by work date, invoice date and payment date, and no double counting when he asks for any one of them.

### 1696 · Booked until March
Sana tells new clients she is fully booked until March. In November, a project for Dune Co is cancelled and frees 6 weeks in January and February. Her public statement is now wrong, but she has already told two prospects she is unavailable.
**Wants:** Her availability to update itself, and the two prospects, without seeing anything about Dune Co, to be given the chance to ask again.

### 1697 · Prospect asks for a start date without seeing the calendar
A stranger, Nova Retail, asks whether Bilal can start a 3-week job within a month. Bilal's servers should answer, but Bilal does not want Nova to learn who his other clients are or how many. The honest answer depends on 5 existing clients.
**Wants:** A truthful "earliest start is 16 November, probably" reply that reveals nothing about anyone else.

### 1698 · Travel time billed at half rate
Joan bills Fell & Co for 4 hours of on-site work in Leeds, plus the train there and back, 2 hours each way. Her contract says travel is billed at half rate. She works on a laptop for 1 hour of each journey, on a different client's project.
**Wants:** Journey time to be recorded once, with the one working hour assigned to the other client at full rate and the rest at half rate to Fell, and no minute counted twice.

### 1699 · Travel not billed, but still blocks the day
Emre travels 3 hours each way to see a non-paying-travel client, Kessler Ltd, for a 2-hour meeting at 14:00. The day is in truth 8 hours for 2 billed hours, and he also had a 10:00 call with another client.
**Wants:** The 10:00 call to be shown as impossible from the travel, and the day's cost in unbilled time to be visible.

### 1700 · Subcontractor hours rolled into her invoice
Astrid subcontracts 12 hours a week to Kwame. She bills the client, Prism Ltd, at 90 an hour for the whole team and pays Kwame 55. Kwame is late on Wednesday by a day, which pushes Astrid's own part.
**Wants:** Kwame's hours in the invoice as her work, his lateness pushing her deliveries, and no way for Prism to see Kwame's name or pay unless she wants it.

### 1701 · Subcontractor works for two of her clients
Kwame does work for Astrid's client Prism Ltd on Monday, and Astrid's other client Quill Co on Tuesday. On Tuesday, he cannot tell Quill who else he works with. A shared clash on Wednesday means he is double-booked.
**Wants:** The clash noticed and put to Astrid, with neither client learning of the other.

### 1702 · Agency staff at 75 percent utilisation
Ruth is an agency designer with a target of 75 percent billable time. In a 40-hour week she has billed 26 hours by Thursday noon, and has 3 hours of internal meetings on Friday. She will end near 68 percent.
**Wants:** To see by Wednesday that the week will finish short of 75 percent, and by how many hours, before it is over.

### 1703 · Utilisation when part of the week is leave
Ruth takes 2 days of leave in a 5-day week. Her employer counts target as 75 percent of available hours. She bills 22 of 24 available hours, which is 92 percent, though only 22 of 40 raw hours.
**Wants:** Both figures shown with the definition each one uses, and no surprise when the two managers quote different numbers.

### 1704 · Consultant's day rate and a half day
Tariq charges 900 a day. Kessel Corp books him for a "day" that runs 09:00 to 12:30, then asks for a full-day fee on the grounds that the rest of the day was blocked. His calendar shows an afternoon meeting with another client he accepted at 13:30.
**Wants:** The afternoon shown as spoken for, so the half-day claim is visibly not blocking anything, and the billed unit (day, half day) separated from the hours worked.

### 1705 · Ride-hailing shift earnings per hour
Deniz drives Monday to Thursday, 18:00 to 02:00. Fares differ: Tuesday 26 an hour, Thursday 41, Monday 19. She also spends 40 minutes per shift waiting with the app on. She asks which nights are worth her time next week.
**Wants:** Expected earnings per hour for next week's shifts, based on her real past nights, with the waiting time counted as work.

### 1706 · Delivery shift ends up inside a fixed appointment
Cem starts a delivery shift at 17:00 and must be at his daughter's school event at 19:30. A delivery he accepted at 19:05 takes him 40 minutes away. The event will be missed by 15 minutes.
**Wants:** To be warned that accepting the job cannot fit before the event, before he accepts.

### 1707 · Gig earnings with unknown tips
Lina delivers for a food app. Base pay for an order is known, but tips arrive up to 24 hours later, and some never do. She wants to know her earnings for the evening at 23:00 and cannot.
**Wants:** A figure shown as a range that narrows as tips arrive and eventually becomes exact.

### 1708 · Hours edited after invoicing
Nils sent Harbour Dental an invoice for March on 2 April. On 20 April he realises 3 hours from 14 March were logged under the wrong client. The invoice is already paid, and the hours belonged to Oak Wealth.
**Wants:** The correction recorded as a correction, dated 20 April, so the paid invoice is not silently rewritten, and the balance between the two clients right afterwards.

### 1709 · Client wants an hour-by-hour breakdown, not the notes
Tessa's client Solent Ltd asks for a breakdown of her 60 hours. Some entries have notes such as "call with lawyer about Solent's dispute with Mercer" that mention third parties. She needs to send the breakdown today.
**Wants:** A version of her record fit to send to Solent, with only what concerns Solent, and no other client or third party named.

### 1710 · Plan versus actual on a fixed-price week
Vikram planned 25 hours for Rowan Ltd in the week of 12 October, and logged 41. The extra 16 hours came out of 3 other clients' time, one of whom is now late.
**Wants:** Planned and actual side by side, and the late client's new date, not merely a total.

### 1711 · Estimate given as a range and drifting
Beatriz told Ember Ltd "between 30 and 50 hours". After 20 hours she has done about a third of the job. The range no longer holds; the honest range is 55 to 70.
**Wants:** To see her original range next to a range built from what she has really done, and the client-visible date to move only if she says so.

### 1712 · Client who pays in a different currency
Hugo bills Lark AS in Norwegian kroner, but his costs and tax are in euros. Rates moved 6 percent between invoice and payment. The 8,000 kroner he planned on turns out to be worth less.
**Wants:** Expected income as a range that reflects the currency risk until payment, then the exact figure once received.

### 1713 · Holiday in the client's country on the deadline
Amara in Lagos has a deliverable due 25 December for Fenwick Ltd in London. Fenwick's office is shut 24 to 27 December. Delivery on the 25th technically meets the date; nobody will read it before the 28th.
**Wants:** The date to be shown against the client's actual working days, so she can tell whether to deliver early.

### 1714 · Public holiday counted in a quoted day count
Florin quoted Grange & Co 15 working days for a job starting Monday 1 May. The 1st is a holiday in Romania, and the 8th is one for Grange in Ireland. "15 working days" resolves to different end dates depending on whose holidays count.
**Wants:** Both dates shown, and the contract's own rule about whose calendar applies picking the one he is held to.

### 1715 · Client changes the deadline back and forth
Petra's client Basalt Ltd moves a deadline from 14 to 21 to 17 to 21 November, all by email in one week. Each change moved her other bookings, and moved them back.
**Wants:** Her other clients' dates not to flap needlessly, and a history she can show when Basalt says "we always said the 21st".

### 1716 · Hours worked before the contract is signed
Quinn starts work for Zephyr Ltd on 3 March, at their request, while the contract is unsigned. The contract is signed on 19 March, effective from 1 March. The rate in the contract differs from the rate he quoted by email.
**Wants:** The early hours to be assigned to the eventual terms once signed, and shown as at risk until then.

### 1717 · A client's approval cap on hours
Client Wharf Ltd has approved a cap of 40 hours on a task. Ada is on hour 36, and the remaining work needs 9. She will breach the cap by 5 hours on Thursday.
**Wants:** A warning before Thursday, so she can ask for more hours, and the extra hours to be shown as unapproved if she goes ahead anyway.

### 1718 · Client's week billed by their own week start
A client in the Middle East counts the working week as Sunday to Thursday. Sami, in Berlin, invoices weekly, Monday to Friday. Work done on his Friday falls on the client's weekend, and the client's Sunday falls after his week has closed.
**Wants:** The same hours mapped into each side's weeks with no hour lost or counted twice.

### 1719 · A day that crosses the date line
Mele in Auckland works for a client in Los Angeles. She logs 23:00 Friday to 03:00 Saturday her time. In Los Angeles that block is Friday 03:00 to 07:00, in the previous day, and her invoice period ends Friday.
**Wants:** The 4 hours to fall in one period on both sides, consistently, with no confusion about which date they belong to.

### 1720 · Retainer used by someone the client did not expect
Keeper Ltd has a retainer with Eva's small firm. Eva sends her colleague Noor for 5 hours, and Keeper's contract says only Eva's hours count. Noor's work is real and useful.
**Wants:** Noor's hours to be recorded, shown as outside the retainer, and billed on whatever other terms apply, without Eva losing track of which hours are which.

### 1721 · The same person as freelancer and as employee
Jamal works 3 days a week as an employee at Torque Ltd and freelances the rest. Torque's contract bars work for their competitors, and one of his freelance clients has just merged with a competitor. A Friday booking is now a conflict.
**Wants:** The conflict raised to him, without Torque being told who his clients are, or the clients being told who employs him.

### 1722 · Non-billable time that keeps him fed
Ola spends 12 hours a month on invoicing, chasing, emailing prospects and tax. Nobody pays for it. His true hourly rate is lower than his billed rate, and he never sees it.
**Wants:** His real earnings per hour of working life, including the unpaid hours, shown next to his billed rate.

### 1723 · A raise needing notice
Ines' contract says rate changes need 60 days' written notice. She tells Mist Ltd on 10 September that her rate rises on 1 October. The earliest permitted date is 9 November.
**Wants:** To be told that her stated date cannot hold, what the correct one is, and what the gap costs her.

### 1724 · Client asks her to hold days "just in case"
Client Thorne Ltd asks Alva to hold 10 days in January for a possible project, with a decision by 15 December. Meanwhile, a firm 6-day offer from Umber Ltd arrives for the same weeks.
**Wants:** The hold to show as uncertain, the offer to show as conflicting, and the date by which she must decide, and to be able to answer Umber without revealing Thorne.

### 1725 · Illness in the middle of a chain of deliverables
Rafael has three deliverables for three clients in the week of 9 November, each due Friday. He is ill Monday to Wednesday. Only 2 days remain for 22 hours of work.
**Wants:** To see which client's date has to move, by how much, and to tell each without disclosing the others or the illness's details.

### 1726 · Extreme scale: 400 clients, one bookkeeper
Fintan runs a one-person bookkeeping business with 400 small clients, each with a monthly deadline between the 5th and the 25th and 30 minutes of work. Around the 20th, 140 deadlines land in 4 working days, and holidays or one sick day make it impossible.
**Wants:** The impossible week found weeks ahead, with the clients most at risk shown first, and the whole view usable without scrolling through 400 rows.

### 1727 · Twenty years of hours, one question
Ludo has logged hours for 20 years across 300 clients. A tax authority asks how many hours he worked for clients in a certain country in 2019, excluding travel. Some hours were logged under names, some under projects that were renamed, and some client relationships ended.
**Wants:** A correct answer from old records, without exposing clients' identities to the authority beyond what is asked.

## Sports training plans

### 1728 · A plan counted backward from race day
Deniz enters the Istanbul Marathon on 8 November and wants an 18-week plan. Week 1 therefore starts on 6 July, a date she picked nothing for. She never chooses a start date; she only sees "18 weeks to go" on any day.
**Wants:** To pin the race date once and see every week of the plan land where it should, including the start date she never typed.

### 1729 · The race date moves by two weeks
The Istanbul Marathon is postponed from 8 November to 22 November, 9 weeks after the peak long run was already scheduled. Deniz has 3 hard weeks behind her and 15 weeks planned.
**Wants:** To see which parts of the plan stretch, which stay, and whether the peak and taper still land right before the new date, without re-entering 15 weeks by hand.

### 1730 · A six-week marathon plan
Kaan has never run more than 8 km, and his marathon is in 6 weeks. He asks for a plan.
**Wants:** To be told plainly the request cannot be met safely, and to see what is possible instead (a later race, a half marathon, a finish-only plan), rather than a plan that silently pretends.

### 1731 · The 10% rule on a week that has no history
Selin ran 12 km last week, 40 km the week before (holiday), and 0 km the week before that (flu). The plan wants to raise "last week" by 10%.
**Wants:** Growth judged against something sensible for her real recent load, not against the single latest week, and to see which number was used.

### 1732 · Recovery week every fourth week
Mert's plan has cutback weeks at weeks 4, 8, 12 and 16. He gets sick during week 3 and loses the whole week.
**Wants:** The forced rest to count as his recovery, so week 4 is not another easy week on top of it, and the later cutback weeks shift accordingly.

### 1733 · Long run must fall on the weekend
Ayşe's long run is Sunday. A work conference takes her away Saturday and Sunday for this one weekend.
**Wants:** The long run moved to the nearest workable day with the days around it rearranged, or a clear message that no workable weekend day exists, and the "long run on a weekend" rule not silently broken.

### 1734 · Skipping a workout versus moving it
Emre misses Tuesday's 8 x 400 m intervals because of a late meeting. Thursday has an easy 6 km, Saturday a tempo run.
**Wants:** To choose between dropping Tuesday, moving it to Wednesday, or squeezing part of it into Thursday, seeing what each choice does to the rest of the week.

### 1735 · Two missed workouts on the same week
Leyla misses Tuesday and Thursday runs, both quality sessions, due to travel. Only Saturday's long run and Sunday's recovery remain.
**Wants:** Not to have both make-ups piled onto the weekend, and to be told when it is smarter to let the week go and move on.

### 1736 · A workout that runs long pushes the next one
Tolga's Tuesday track session planned 60 minutes ends up taking 85 (long warm-up, extra rest between reps). His Tuesday evening strength session starts 30 minutes after the planned track end.
**Wants:** The strength session to shift to the new end time or to be flagged as clashing, not to overlap silently.

### 1737 · Strength session cannot come the day before intervals
Bora's strength day is Monday, intervals are Tuesday. He moves intervals from Tuesday to Monday because of a race weekend swap.
**Wants:** To be warned that strength is now the day before and offered a fix, rather than either rule quietly losing.

### 1738 · Two-a-day with a minimum gap
Ozan's swim at 07:00 and run at 12:00 need at least 6 hours apart for a quality run. Pool lane availability moves the swim to 08:00.
**Wants:** The gap rule noticed, and either the run moved or the gap accepted knowingly.

### 1739 · Weekly volume in kilometres versus hours
Nehir's plan says 60 km this week. A trail race build has her on 4 hours of hiking-pace climbing that is 18 km. Her coach thinks in hours, her app in kilometres.
**Wants:** Both views of the same week without contradiction, and to see which one the plan is actually built on.

### 1740 · Time in zone expressed as a range
A workout says "40 minutes in zone 2". Her heart rate strap logged 33 minutes in zone 2, 5 in zone 3, 2 in zone 1.
**Wants:** To see whether that counts as done, close enough, or missed, in words she can accept.

### 1741 · Zones that change after a test
After a lactate test on Wednesday, Cem's zone 2 upper limit falls from 148 to 141 bpm. Sessions from Thursday on were written with 148.
**Wants:** Future workouts to reflect the new limit, past workouts to stay as logged against the old one, and the change visible.

### 1742 · Readiness score cuts today's session
Ece's morning HRV reads 30% below her baseline and her readiness is "poor". Today's plan is 10 x 800 m intervals.
**Wants:** A suggestion to swap in an easy session, without the plan quietly rewriting itself, and a say on whether to accept.

### 1743 · Readiness score that is wrong
Barış's watch gave a poor score after he wore it loosely and slept badly on a friend's couch, a night he knows he felt fine. The score recommended rest.
**Wants:** To overrule the number, and for that one night to stop shaping the coming weeks.

### 1744 · Two readiness sources disagree
A chest strap says Ada is recovered; her watch says strained. Her coach uses a third opinion, a morning questionnaire.
**Wants:** To see the disagreement, not a single hidden average, and to say which she trusts for the day.

### 1745 · Heat forces an earlier or shorter run
Long run of 32 km planned Sunday 07:00, forecast 34 C by 10:00. Yusuf runs roughly 5:30 per km.
**Wants:** The session moved earlier or shortened, and a sense of how the extra time hot weather adds to the estimated finish changes.

### 1746 · Weather moves a workout across days
Forecast storms for Wednesday and Thursday cancel outdoor intervals. Friday is a full rest day and Saturday a long run.
**Wants:** To choose between treadmill Wednesday, a swap with Friday, or a skip, with the effect on Saturday visible.

### 1747 · Illness cuts a build week
Zeynep gets a 39 C fever on the fourth day of week 9 out of 16. She is back to normal in 6 days.
**Wants:** To see her plan reshaped so she does not try to cram the lost week back in, and a reasonable resume point.

### 1748 · Return after eight days off
After 8 days off with a cold, Kerem's plan resumes at week 10's mileage.
**Wants:** A re-entry at a lower load that grows back to where the plan expected him to be, and the race date question raised honestly if the gap cannot be closed.

### 1749 · Return-to-run schedule after a break
After 5 weeks away from running, Seda follows walk/run intervals: 1 min run and 2 min walk, then longer runs, each step done only after two pain-free sessions.
**Wants:** The next step to appear only when the previous one was done, not on fixed dates, with dates shifting when a step is repeated.

### 1750 · Race target date versus return readiness
Seda's return-to-run steps would end 3 days after her half marathon.
**Wants:** To be told the return cannot reach full training before race day, and to choose between racing easy, deferring, or dropping out.

### 1751 · A second race added
Melis has a marathon on 18 October and adds a 10 km race on 27 September to test her fitness. The 10 km is in her build phase, three weeks earlier.
**Wants:** The 10 km to fit into the plan, with the week around it lightened and the week after it recovered, not a double-hard block.

### 1752 · Two goal races close together
A triathlete has an Olympic-distance race on 14 June and a half Ironman on 5 July. The plan builds for the second and tapers for the first.
**Wants:** To see both taper needs at once and to choose which race is the main one, with the other treated as a training event.

### 1753 · Taper in the last three weeks
A marathon taper reduces volume by roughly 20%, 40%, 60% over 3 weeks. A friend asks Hakan to run a 25 km trail run together in taper week 2.
**Wants:** To be told what the run would cost him, and to decline or accept with eyes open.

### 1754 · Race in another timezone
Nilay flies from Istanbul to Tokyo (UTC+9, 6 hours ahead) arriving 5 days before a marathon starting at 08:30 local. Her long sessions have been at 07:00 Istanbul time.
**Wants:** Her last week's sessions expressed in a way that respects the adjustment, and the race start shown in both her body's time and local time.

### 1755 · Training in a different timezone from the coach
Coach Barış lives in Berlin; athlete Ahmet lives in Los Angeles. The coach says "Tuesday morning intervals" and Ahmet sees Tuesday 06:00 on his side, Barış's Tuesday 15:00.
**Wants:** Both to agree on which day and hour is meant without misreading, especially across the date line.

### 1756 · A watch logged the wrong activity
Emel's watch recorded a 45-minute cycle commute as "running" with 12 km, making her weekly running volume jump 30% over last week.
**Wants:** To correct the activity afterward and see her recent load, the 10% rule check and any warnings recomputed as if it had always been right.

### 1757 · Correcting the past that others have seen
Kaan's coach already read Kaan's week-11 report, which included a mislabelled run, and adjusted week 12 because of it. Kaan later corrects the run.
**Wants:** The coach to be told of the correction and its effect on the coach's decision, not to find out on their own.

### 1758 · Being ahead of plan
An athlete keeps running the long run further than planned every week (planned 20 km, ran 24 km). Volume is 20% above the plan across three weeks.
**Wants:** Being told the plan is being outrun, and being asked whether to rebuild the coming weeks around the higher load.

### 1759 · Race-time prediction updates from training
Before the plan, Ali's predicted marathon time is 4:15 to 4:30. After a strong 32 km run at goal pace in week 13 the prediction becomes 4:05 to 4:15.
**Wants:** The race-day plan (pacing, fuelling stops, expected finish, a friend meeting at km 35) to follow the newer prediction and show how much it changed.

### 1760 · Prediction that gets worse
Two hot, missed weeks later the same prediction drifts to 4:20 to 4:40.
**Wants:** An honest range, with no false sense the earlier goal remains intact, and its impact on the pacing plan.

### 1761 · Predicted finish time and the rest of race day
Ali's marathon starts at 09:00. His family plans to meet him at the finish for lunch at 13:00 and the shuttle back leaves at 14:30.
**Wants:** The lunch and shuttle to move if his finish time shifts later, and to be told when the shuttle becomes unreachable.

### 1762 · Coach assigns workouts remotely
Coach Ilker assigns 14 sessions to 9 athletes on Sunday night. Two of the athletes are already busy on Thursday evening with work commitments they never shared with him.
**Wants:** Ilker to learn that Thursday is not workable for those two without seeing what their commitments are.

### 1763 · Athlete refuses a coach's session
Assigned an hour of hill repeats, Duru declines and says only "I can't". She does not want to say she has her period and a migraine.
**Wants:** The decline to be accepted with no reason required, and the plan to adapt.

### 1764 · Coach versus team privacy
A club has 30 runners. The head coach sees all 30 training plans. An assistant coach handles only the youth group of 8. A runner shares that she is pregnant with the head coach.
**Wants:** Only the intended people to know, and the assistant coach not to learn about it merely from a changed plan.

### 1765 · Team practice overrides individual plan
The football team practises Tuesday and Thursday 18:00 to 19:30 and plays a match Saturday. Berk also follows a personal running plan with Tuesday intervals.
**Wants:** To see the team schedule as fixed, the personal plan bending around it, and the combined weekly load reflecting both.

### 1766 · Tournament season with cancellations
A basketball tournament weekend is cancelled due to a flooded gym; practices were shifted last week to prepare for it.
**Wants:** Those practices to lose their purpose and their timing to be re-examined, not left in place unnoticed.

### 1767 · Team practice not counted in personal load
Berk's team practice includes 40 minutes of running drills that the team coach does not record.
**Wants:** The load of team sessions to show in his own weekly total even though the team coach kept no numbers.

### 1768 · Youth athlete and parent driving
Ela, 12, swims at 05:45 on Tuesdays and Thursdays. Her father drives her 25 minutes; on Thursdays his work meeting starts at 07:30, and her mother drives Tuesdays.
**Wants:** The drives to appear as part of each parent's morning, and to be told early when a parent becomes unavailable.

### 1769 · Youth load limit
A 13-year-old plays for school on Tuesday, a club on Thursday and a weekend tournament. Each coach schedules separately and none knows about the others.
**Wants:** The total hours to be seen in one place, and a signal to the parents when the child's combined load passes an agreed weekly limit.

### 1770 · Masters athlete needs extra recovery
Nazan, 52, has a plan with a hard day followed by one easy day. Her coach wants two easy days after every hard session and recovery weeks every third week instead of fourth.
**Wants:** Her whole plan to stretch to match, including a taper that still fits before the race, and the number of weeks needed to fit.

### 1771 · Plan that no longer fits after a stretch
Extending Nazan's recovery pattern pushes her required plan length from 16 to 19 weeks; her race is in 16 weeks.
**Wants:** To be told this before she starts week 1, with her choices (an easier goal, a smaller peak, another race) laid out.

### 1772 · Cycling block with a testing week
Ferit's 8-week cycling block begins with a 20-minute power test, and all zones in later weeks come from its result. The test is postponed by illness for 9 days.
**Wants:** Future workouts to wait for the number, then be filled in, not to be built on a guess that goes stale.

### 1773 · Long ride outdoors versus indoor trainer
A 5-hour Sunday ride can be done indoors at 3.5 hours' equivalent stress. Rain is forecast.
**Wants:** The choice between the 5-hour ride and the shorter indoor one to be shown as the same training goal, with the difference in time visible.

### 1774 · Triathlon brick session
Two sessions, a 90-minute bike followed immediately by a 20-minute run, are one session in Şule's plan. The bike is delayed by a flat tyre by 40 minutes.
**Wants:** The run to move with the bike, and the whole pair to stay together.

### 1775 · Group session with a fixed start
A swim club practice starts at 19:00 fixed, but Şule's bike–run brick on the same day ends at 18:50, 15 minutes from the pool.
**Wants:** To be told the brick will not finish in time, and to pick which to protect.

### 1776 · A four-year Olympic cycle
A rower's plan runs 4 years to the Games: annual build, two world cups per year, a qualifying regatta 14 months out, and a peak eight weeks before the Games. Every week of it has a coach-assigned focus.
**Wants:** To look at the whole four years, the current month and today without drowning in weeks, and to see what a moved qualifying date does to the later years.

### 1777 · A change deep in the past of a long cycle
In year 2 of the four-year cycle, the athlete learns his year-1 world-cup result was disqualified and recorded as no result.
**Wants:** Anything that depended on that result (seeding, selection, planned rest) to be revisited, with what actually changes made visible.

### 1778 · Servers negotiating a training partner session
Aylin and Cenk want to run together Saturday 08:00 to 10:30. Each has their own long-run time, other appointments and travel; neither wants to share their whole calendar.
**Wants:** A shared time to be agreed without either seeing the other's other commitments, only whether the slot works.

## Sleep

### 1779 · Work start that the body clock cannot meet
Deniz is a late chronotype who naturally sleeps 02:30 to 10:00. A new job starts at 08:00 with a 45-minute commute. Waking at 06:45 leaves about 4h15 of sleep if she keeps her natural bedtime, and she cannot fall asleep before 01:30 whatever she tries. Every weekday plan is impossible on sleep alone.
**Wants:** To be told plainly which weekdays fall short and by how much, rather than a plan that silently pretends 23:00 bedtime works.

### 1780 · Early chronotype with an evening commitment
Mert falls asleep around 21:00 and wakes at 05:00 without an alarm. His choir rehearses Tuesdays 19:30 to 22:00. On those nights bedtime is 22:45 at the earliest, and he wakes at 05:00 anyway.
**Wants:** The short Tuesday night to show up as an expected cost of the rehearsal, not as a surprise failure of his sleep plan.

### 1781 · Bedtime target moved by an overrunning dinner
Ayla's bedtime target is 23:00 with wind-down starting 22:00. Dinner at a friend's runs from 19:30 and is still going at 22:20, so the wind-down hour was never started.
**Wants:** Bedtime and wind-down to shift as one thing with the dinner running long, and to see the new expected bedtime, instead of a wind-down reminder buzzing mid-conversation.

### 1782 · Wind-down hour collides with a fixed evening call
Kerem has a wind-down from 22:00 to 23:00 and a weekly video call with his team in Sydney from 22:30 to 23:30. The call overlaps the wind-down and pushes the bedtime target past midnight.
**Wants:** To see both the call and the wind-down held honestly, with the resulting bedtime, and not one quietly deleted.

### 1783 · Wind-down that must be skipped once
Selin has a habit of a 60-minute wind-down every night. Tonight she gets home at 23:20 from a flight delay and wants to sleep by 23:45.
**Wants:** To shorten the wind-down to 25 minutes for this one night without the habit being marked broken or the next night's plan changing.

### 1784 · Smart alarm window with a hard meeting
Baran's alarm window is 06:30 to 07:00, waking at a light stage. He has a 07:15 train that takes 20 minutes to reach. He is in deep sleep until 06:58 and only light at 07:05.
**Wants:** The wake-up to happen inside the window even when it is not a light stage, because the train is fixed, and to be told this happened.

### 1785 · Smart alarm that fires early and the day starts early
The window is 07:00 to 07:30 and the light stage arrives at 07:02. Everything after wake-up (shower, breakfast, leaving at 08:10) was planned from 07:30.
**Wants:** The extra 28 minutes to appear as free time or optional extra sleep, not to be swallowed, and the morning's items not to jump earlier on their own.

### 1786 · Smart alarm window as a range in a chain of morning things
Wake window 06:30 to 07:00, then 20 minutes to get ready, then a 15-minute walk, then a call at 08:00 that must not move. Any wake time in the window works, but with 07:00 the walk is tight.
**Wants:** The morning to show the earliest and latest that each thing can happen, and to show that the 08:00 call is safe across the whole window.

### 1787 · Power nap that runs long
Emre plans a 20-minute nap at 14:00 before a 15:00 presentation. He falls asleep at 14:12 and the alarm is missed; he wakes at 14:58.
**Wants:** The presentation preparation that was planned for 14:30 to 14:55 to show as lost, and the lateness to reach the presentation as a real consequence.

### 1788 · Power nap versus long nap for the same slot
Zeynep has a free hour at 15:00. A 20-minute nap leaves her sharp; a 90-minute nap completes a cycle but she reports deep grogginess after. She wants to nap either way.
**Wants:** To see what each option leaves in the rest of the afternoon and evening, and how each has affected her previous nights.

### 1789 · Nap that costs the night
Over the last three weeks, on days when Oya napped past 16:00 for more than 45 minutes, her sleep onset that night averaged 62 minutes later. Today she wants a 16:30 nap.
**Wants:** To be warned, from her own history and not a general rule, what the nap has cost her before, while still being able to decide.

### 1790 · Nap that is not a nap
Can dozes on the sofa from 20:30 to 21:45 in front of a film, then goes to bed at 23:30 as planned. His tracker calls it a nap; he calls it nothing.
**Wants:** To say what it was without it being recorded as an official nap that spoils his night-sleep record.

### 1791 · Siesta culture in a shared household
Valentina naps 14:00 to 14:30 daily in Seville. Her husband's remote job has calls at 14:00 to 15:00 on Thursdays in the room next door.
**Wants:** The nap and the calls to be seen as sharing a wall, with Thursday's nap moved or made quieter without her having to explain.

### 1792 · Polyphasic experiment that fails in week two
Arda starts Everyman with a 3h30 core and three 20-minute naps at 09:00, 14:00 and 20:00. In week two he misses two naps because of lectures and his total sleep falls to 3h50 for four days.
**Wants:** To see the experiment as an honest record against what he set out to do, including the days it collapsed, without it being bent into a normal schedule.

### 1793 · Polyphasic schedule against a world that is not
Nil sleeps in four blocks across 24 hours. A friend books her for dinner at 21:00, which lands on the start of her 21:00 block.
**Wants:** The friend's invitation and her blocks to meet honestly, the friend to see only that 21:00 is busy, and no explanation of the experiment leaked.

### 1794 · Experiment start that needs a baseline first
Before the polyphasic experiment begins on the 1st, the doctor asks Arda for a month of ordinary sleep as a baseline. Three weeks of it were already logged in a different app.
**Wants:** Those three weeks to count toward the baseline, with the missing week called out.

### 1795 · Day shift to night shift in one week
Hakan works 08:00 to 16:00 Monday to Friday, then 22:00 to 06:00 from the following Monday. His weekend falls in between and is the only chance to turn around.
**Wants:** A plan for the days between that shows when he should sleep and stay awake, and honestly shows the first night shift starting with a sleep debt he cannot fully avoid.

### 1796 · Sleeping in the daytime with the street outside
After a night shift ending at 06:00 Hakan sleeps 07:00 to 14:00. On Wednesday the building's water is cut, with workmen from 09:00 to 12:00.
**Wants:** The noise to be seen as a known disturbance on that day, and an alternative offered such as sleeping earlier or later, not just a bad sleep score afterward.

### 1797 · Rotating shifts with a quick return
Ayşe finishes a late shift at 23:00 on Thursday and starts an early shift at 06:00 on Friday, 7 hours between them including the 50-minute commute each way.
**Wants:** The 7 hours to be shown as a maximum of about 4h45 of sleep after the commute and dinner, and to see this coming days ahead when the rota is published.

### 1798 · Rota changed the night before
Tuesday's night shift is swapped by the manager at 18:00 to Wednesday. Ayşe had planned sleep for Tuesday afternoon and now has to be awake all of Tuesday night's slot.
**Wants:** Her rest to be re-planned from what she has already slept, not from the plan she had.

### 1799 · Jet-lag plan shifting one hour a day
Selim flies from Istanbul to Los Angeles (10 hours behind) on Saturday 10:00. He begins on Wednesday moving bedtime one hour later each day, wanting to be close to LA time on arrival.
**Wants:** The days before the trip to show the shifting bedtime, and for those days' fixed early meetings to be flagged where they fight it.

### 1800 · Jet-lag plan when the departure day moves
Selim's flight is moved 26 hours later after three days of shifting. Days already lived at shifted times cannot be undone.
**Wants:** The plan to continue from where his body actually is, not restart from home time, and the wasted shifted days to be recognised.

### 1801 · Light exposure times inside a windowless day
The plan says get bright light 07:00 to 09:00 local on arrival day and avoid it after 16:00. Selim will be in a windowless conference room from 08:30 to 17:00.
**Wants:** To see the clash with his fixed schedule and what part of the light advice can still be met.

### 1802 · Eastward trip with a one-day stay
Nur flies Ankara to Tokyo (6 hours ahead) for a 36-hour meeting, then straight back. A shifting plan would take longer than the stay.
**Wants:** An honest statement that it is not worth shifting fully, and a way to stay on home time for the whole trip with the meetings that fall at odd hours shown accordingly.

### 1803 · Time zones on the sleep record
Selim sleeps 22:00 to 06:00 in Los Angeles, which is 08:00 to 16:00 in Istanbul. His partner at home reads his sleep on her calendar.
**Wants:** Each person to see the sleep at their own clock time, and neither to see the other's sleep as an appointment in the middle of their own working day.

### 1804 · Night's sleep across the daylight-saving change
Elif sleeps 23:00 to 07:00 on the night the clocks go forward at 02:00 to 03:00. She wakes to a 07:00 alarm that is now 6 hours of sleep.
**Wants:** The night to be recorded as 7 real hours, with the shortness of the night shown before it happens, and the alarm to be what she intended.

### 1805 · Daylight-saving change and the household
The clocks change on Sunday. A toddler wakes at 06:00 by her body clock, which is now 07:00 on the wall. Her parents' plan for church at 10:00 is fixed.
**Wants:** The morning to be laid out on the new clock with the toddler's rhythm honoured in the days ahead of the change, not just on the day.

### 1806 · Teen sleep phase against first lesson
Deniz's son Ali is 15 and falls asleep near 00:30 and wakes naturally at 08:30. School starts at 08:10 and the bus is at 07:20.
**Wants:** The gap of 1h10 to 2h of sleep on school days to be visible as a mismatch of the world, not as his failure, and for weekends to show recovery honestly.

### 1807 · School start that changes mid-year
The school moves its first lesson from 08:10 to 09:00 from January. Ali's bedtime plan since September was built around 07:20.
**Wants:** Everything already planned around the old time to be re-shown with the new one, and his past nights still read against the old start when looking back.

### 1808 · Infant wake windows
Baby Defne is 5 months old with wake windows of about 2 hours. She woke at 07:10, napped 09:10 to 10:20, and woke again; the next nap is expected around 12:20.
**Wants:** The day's next nap to be expected around a range that follows what happened this morning, not a fixed clock time.

### 1809 · Baby's schedule against parents' plan
Defne's second nap window falls at 12:00 to 13:00 on the day her parents have a lunch invitation at 12:30 at a restaurant.
**Wants:** The parents to see the collision early and choose between moving the nap, napping in the pram, or the lunch, before the day starts.

### 1810 · Toddler dropping a nap
Yusuf is 17 months and is moving from two naps to one. For three weeks the timing has changed nearly daily, and the daycare pick-up at 15:30 sits at the edge.
**Wants:** The nap pattern to be shown as unsettled, not as a set of failures, with pick-up time held.

### 1811 · Night waking of a baby and the sleep of both parents
Defne wakes at 01:10 and 04:00. Ece feeds at the first, her husband Tolga at the second. Tolga must be at the surgery by 07:30.
**Wants:** Each parent to see their own night broken by the other's turns fairly, with Tolga's work start as a real limit.

### 1812 · Co-sleeping partners with different schedules
Ece goes to bed at 22:00; Tolga at 00:30 after the night feed and a late game. He comes in each night at 00:30 and wakes her.
**Wants:** Both to see the overlap and to be shown that Ece is losing about 30 minutes a night to his coming to bed, without publishing to either the other's private notes.

### 1813 · Partner who snores
Mustafa's tracker records snoring on 22 of the last 30 nights, which wakes Şule at least once on 15 of them. Şule has started sleeping in the spare room some nights.
**Wants:** The nights apart and the nights together to be recorded as they truly are, and each person's sleep to be judged on their own night.

### 1814 · Two people, one bed, two alarms
Ece's alarm is 05:45 and Tolga's is 07:30. His alarm window is a light-stage one; hers is fixed.
**Wants:** Her fixed wake-up to be seen as a fact in his morning too, so his light-stage window is not opened by a noise he will hear anyway.

### 1815 · Sleep restriction with a fixed window
Ceren starts the treatment for insomnia. Her clinician sets time in bed to 01:00 to 06:30 (5h30) based on a two-week diary showing 5h05 of sleep. The rule is a fixed window that widens by 15 minutes a week once she sleeps most of the time she is in bed.
**Wants:** The window to hold as a fixed thing every night, including weekends, and for changes to happen only on the week they are agreed.

### 1816 · Sleep restriction against an early meeting
The window is 01:00 to 06:30 and Ceren's team moves the daily meeting to 08:30 with a 07:15 wake needed for commuting. Lying in bed later than 06:30 breaks the treatment rule; getting up at 06:30 is fine.
**Wants:** Nothing about the meeting to force her to break the window; if the meeting needs her earlier, that is to be shown as a conflict for her and her clinician to decide.

### 1817 · Window widens by 15 minutes but the week was bad
In week three the window is due to widen to 01:00 to 06:45, but Ceren slept only 71% of her time in bed on four nights that week because of a cold.
**Wants:** The proposed widening to be shown together with the poor week, as a decision for her clinician, not applied silently.

### 1818 · Window that would fall below the minimum
After an illness the diary shows Ceren asleep only 4h10 of a 5h window, and the calculation gives a new window of 4h15, below the 5-hour minimum her clinician told her never to go under.
**Wants:** The minimum to hold, and for the result to be shown as capped, with the reason.

### 1819 · Treatment window and a night out
Ceren is asked to a wedding that ends at 01:30. Her window opens at 01:00 and she would not be in bed until 02:30.
**Wants:** To see the cost in the treatment (one night, her window, the diary) and choose, without a lecture.

### 1820 · Sleep apnoea machine hours for insurance
İbrahim's insurer requires the machine be used at least 4 hours on 70% of nights across any 30 consecutive days in the first 90 days, or coverage is withdrawn (his insurer's stated rule as he understood it). Day 47: he has 17 compliant nights out of 25 counted so far.
**Wants:** To see clearly whether he is on track, how many more nights he can miss, and which days are still open.

### 1821 · Machine worn but mask off at 03:00
İbrahim sleeps 23:00 to 06:30 but pulls the mask off at 03:10 and doesn't put it back. The machine logs 4h10, and the tracker says he slept 7h20.
**Wants:** The two records to remain distinct: machine hours for the insurer, sleep hours for himself, without either overwriting the other.

### 1822 · Compliance window that slides
İbrahim's best 30-day run of the 90 days is what counts, and the days are counted by the insurer's night, not his. A night that began at 23:30 on the 31st and ended on the 1st is counted on one of them.
**Wants:** To see which date the insurer will count a night on, and for that to match what he sees.

### 1823 · Machine data shared with the insurer only
The insurer wants the usage hours per night but İbrahim does not want them to see when he slept, only how long the machine was on.
**Wants:** The insurer to see only the nights and hours, not the times of day or anything about his dreams, moves or heart rate.

### 1824 · Melatonin timing
Sevgi's doctor advises 0.5 mg of melatonin at 20:30 to shift her sleep phase earlier, three hours before her target bedtime of 23:30. She is at a dinner until 21:00.
**Wants:** The dose time to stay attached to her intended bedtime rather than to the clock alone, and to be told it was missed if it was.

### 1825 · Melatonin timing while travelling
Sevgi takes melatonin 3 hours before bedtime. Halfway through a flight west her bedtime in local time changes.
**Wants:** The dose to be anchored to something that the trip does not silently break, and to see which clock time she should take it at in each place.

### 1826 · Caffeine cut-off that a meeting breaks
Barış's cut-off is 14:00 for a 23:00 bedtime. His client dinner at 20:00 offers coffee, and the coffee was already ordered.
**Wants:** To see what the coffee is likely to do to that night, and his cut-off to stay a cut-off he can override for a night.

### 1827 · Caffeine cut-off moves with the bedtime
Barış's bedtime is 23:00 on weekdays and 01:30 on Saturdays. Saturday's cut-off is still shown at 14:00.
**Wants:** Saturday's cut-off to follow Saturday's bedtime.

### 1828 · Two trackers, one night
Nazlı's ring says she slept 6h05 with 1h20 deep sleep. Her watch says 7h10 with 45 minutes of deep sleep. She feels she slept badly.
**Wants:** To see both accounts side by side and her own morning report beside them, none quietly picked as the truth.

### 1829 · Tracker corrected weeks later
The ring's maker publishes a fix and re-scores the last five weeks; 11 nights change by more than 30 minutes, including two that had fed into a decision to restrict her caffeine.
**Wants:** The old and new figures to both be visible, and decisions made on the old ones to be marked as made on them.

### 1830 · Night that belongs to which day
Tuesday's sleep runs 23:40 Tuesday to 06:50 Wednesday. Her sleeping-hours goal is judged per day, and her weekly total is judged Monday to Sunday.
**Wants:** The night to be counted once, on a day she can predict, and never missing from the week or counted twice.

### 1831 · Night split by two hours awake
Murat sleeps 22:30 to 01:15, is awake 01:15 to 03:15 answering a work outage, then sleeps 03:15 to 07:00. He calls it one bad night; his tracker calls it two sleeps.
**Wants:** To see the total and the two parts, and the outage as the reason, without the awake two hours being recorded as time he was in bed failing to sleep.

### 1832 · Sleep on a flight
Leyla's 11-hour overnight flight departs 22:00 and lands 14:00 next day local time. She sleeps about 4h30 in a seat, in pieces of 40 to 90 minutes, with turbulence and a meal service.
**Wants:** The flight sleep to count as sleep, of a lower quality, in the timezone where it happened, and for the plan on landing to take it into account.

### 1833 · Sleep data for a sleep study
Dr. Aksoy asks for 90 days of sleep for a study, but Ela's record includes nights with a partner, a hospital stay, and notes about a family funeral in the same weeks.
**Wants:** To choose what the doctor sees by period and by kind of information, and for the doctor to know something is withheld without being told what.

### 1834 · Impossible plan across two people's constraints
Hatice needs 8 hours, has to wake at 06:00 for the nursery run, and has a partner who has asked her to be at his shift-end pickup at 00:15 three times a week. That leaves 5h45 on those nights.
**Wants:** To see that the constraints cannot all hold on those nights and which of them are hers to give up.

## Food and nutrition planning

### 1835 · One dish appears in three different weeks' plans
Ayşe plans lentil soup for Monday of this week, Wednesday of next week and again the week after. She cooks a double batch on Sunday the 4th that is meant to cover the first two. The third is a fresh cook. The grocery list for the 4th shows lentils once, for two batches. Next week she swaps Wednesday's soup for pizza. The double batch was already made.
**Wants:** to see that one cooking session feeds two meals, and that dropping one meal leaves a portion she can still place somewhere.

### 1836 · Grocery list shrinks when a meal moves to a restaurant
The Friday plan has salmon, rice and broccoli for four people. The list has 800 g salmon. On Thursday night the family decides to eat out on Friday. Rice and broccoli were also needed for Saturday's stir fry.
**Wants:** the list to lose the salmon but keep the rice and broccoli that Saturday still needs.

### 1837 · Sunday batch cook for five lunches runs long
Deniz plans to cook chili from 14:00 to 16:00 on Sunday for five lunches, then meet a friend at 16:30 across town. The beans need a longer soak than he planned and cooking ends at 17:10. The friend meeting and the evening yoga class both sit after it.
**Wants:** to see what the late finish does to the friend meeting and the yoga class, and to choose what gives.

### 1838 · Five lunches, but the fridge life is three days
Deniz's chili is done Sunday 17:10. Monday to Friday lunches are planned from it. The safe fridge life is about three to four days, so Thursday and Friday portions are past it.
**Wants:** Thursday and Friday portions to be flagged as needing to go in the freezer on Sunday, and the freezer thaw time to show up before those lunches.

### 1839 · Thawing must start the night before
Friday lunch uses a frozen chili portion that needs about 12 hours in the fridge to thaw. Friday's lunch is at 12:30. Nobody puts anything in the fridge on Thursday because the evening is busy with a school play.
**Wants:** a reminder on Thursday evening that fits around the school play, and if it is missed, a Friday lunch that changes without anyone re-planning.

### 1840 · Leftover life starts when it was cooked, not when it was planned
Sibel plans a stew for Tuesday. She actually cooks it on Wednesday because the butcher was late. The stew's three days count from Wednesday.
**Wants:** the leftover time left to follow when the stew was really cooked, and Thursday's planned leftovers to still make sense.

### 1841 · Leftovers that stay out overnight
Tomas's rice is cooked at 19:00 and left on the counter. He notices at 23:30. It is planned as Tuesday lunch.
**Wants:** to be told plainly that this meal is no longer safe to plan, and to have Tuesday lunch stop counting as covered.

### 1842 · Freezer stock rotates oldest first
The freezer holds three bags of soup made in March, one in June and two in August. The plan for this month uses two soup dinners.
**Wants:** the older bags to be the ones suggested, and to know when the March bags are running out of the time they taste good.

### 1843 · Pantry item bought in bulk used across many meals
A 10 kg bag of rice is opened in January. Thirty-one planned meals over four months use 150 to 300 g each. Some are cancelled, some eaten out.
**Wants:** an honest guess of when the bag runs out, updated from what was actually cooked, not from the plan.

### 1844 · Cooking for a household whose members are not home for every meal
Four people share a flat. On Wednesday one is away until 21:00, one eats at university, two are home. Dinner is planned for four.
**Wants:** the pot size and grocery amounts to follow who is actually there, and a portion set aside for the one who returns at 21:00.

### 1845 · Two people cook the same dinner without knowing
Emre and his partner each plan dinner on Thursday for the household, in their own calendars, without talking. Both add a shopping trip.
**Wants:** to see the clash before Thursday, without either one seeing the other's whole week.

### 1846 · Shared family shopping list edited by five people at once
Mum, Dad and three teenagers add items to the list while Dad is in the shop. Two items are the same thing under different words (yoghurt, plain yogurt). One teenager removes milk that another one needs.
**Wants:** one list that Dad can trust in the aisle, with duplicates joined and a removal that the other person can see and undo.

### 1847 · Shopping list edited with no signal in the supermarket
Dad's phone has no signal in the basement shop. He ticks off 14 items over 25 minutes. Meanwhile his daughter adds two items and removes one from home.
**Wants:** when the signal returns, both sets of changes to land without losing his ticks or her additions.

### 1848 · Grocery delivery window gets narrower, then moves
The delivery is booked for Thursday 17:00 to 19:00. At 15:00 the shop says 19:00 to 21:00. Dinner cooking with those groceries was planned for 18:30. The kids' swimming lesson ends at 19:30.
**Wants:** dinner to shift to what is really possible, with the swimming pickup still protected.

### 1849 · Delivery window collides with a work meeting
Groceries arrive 12:00 to 14:00 Saturday. Kerem has a video call 13:00 to 14:00 and nobody else is home.
**Wants:** to see the clash when he books, and to hear that the call could still work if someone else were home from 13:30.

### 1850 · Fridge is full: can this delivery fit?
A delivery of 40 items is due Saturday. Fridge space already holds the week's batch cooking. The plan has no room to lay out the cooling of a big pot.
**Wants:** a warning that the arrival and the cooking overlap in the fridge, before Saturday.

### 1851 · 16:8 fasting window when dinner runs late
Selin fasts 12:00 to 20:00 eating window. Her dinner with friends starts at 19:30 and the food arrives at 21:15. Breakfast the next day was planned at 12:00 sharp.
**Wants:** the window to show it has been pushed, and the next day's start to move by the amount that keeps her 16 hours, or to ask her whether she wants that.

### 1852 · Fasting window meets an early morning event
Selin's window closed at 21:15 last night. Tomorrow she has a 10:00 breakfast meeting that her manager organised.
**Wants:** to see that the fast would end at 13:15 and that the meeting is inside it, and to pick between shortening the fast and skipping the food.

### 1853 · Fasting window over a timezone flight
Selin flies from Istanbul to New York on Monday, leaving 10:00, arriving 13:00 local. Her eating window is 12:00 to 20:00 in the timezone she is in.
**Wants:** a window that makes sense for the day of the flight, not two windows or a 24-hour gap.

### 1854 · Ramadan iftar while travelling
Mehmet drives from Istanbul to Kars during Ramadan. The sun sets about 50 minutes earlier in Kars. He stops at a roadside place.
**Wants:** iftar to appear at the right time for where he really is at that moment, and the stop to adjust when he is late.

### 1855 · Ramadan with a family where not everyone fasts
Ayşe fasts, her pregnant sister does not, the 8-year-old fasts half days, and Dad fasts fully. All eat together at iftar but breakfast and lunch differ.
**Wants:** one shared evening meal and three different days leading up to it, none needing to reveal reasons to the others.

### 1856 · Ramadan sleep and suhoor at 03:40
Suhoor ends at 03:40. Ali sets the meal for 03:00, but his night shift ends at 02:30 and the drive home is 40 minutes.
**Wants:** to see that suhoor is only 20 minutes at home and that a packed one is the realistic choice.

### 1857 · Calorie budget with a dinner party in the evening
Nora has a 1,800 kcal day. She is invited to a dinner at 20:00 where she expects roughly 1,000 kcal, unknown menu. She has eaten 450 at breakfast.
**Wants:** to see what is left for lunch and snack if the party reaches 1,000, and how much room changes if it reaches 1,400.

### 1858 · Dinner party cancelled at 17:00
Nora saved 1,000 kcal for the party by eating light at lunch. The party is cancelled at 17:00.
**Wants:** the evening to become a normal dinner without reading as though she overate the budget or under-ate.

### 1859 · Budget across a week, not a day
Nora eats 2,300 on Saturday at a wedding, and wants the weekly average to stay 1,800. Sunday to Friday should absorb it.
**Wants:** the spread to look reasonable and not require 1,300 on any one day.

### 1860 · Macros around a training session that moves
Tolga plans 40 g of protein and 60 g of carbohydrate 90 minutes before a 18:00 lift. The gym rings at 16:30 to say the session is now 19:30.
**Wants:** the pre-workout meal and the post-workout meal to move with it, and the dinner not to end up at 22:30.

### 1861 · Training cancelled after the pre-workout meal was eaten
Tolga has already eaten the 60 g of carbohydrate at 16:30. The session is cancelled at 17:30.
**Wants:** the day's numbers to stay true, and dinner to be shown as needing less carbohydrate if he wants.

### 1862 · Two training sessions in a day with meals between them
Marathon block: a 07:00 run and 17:00 intervals. Lunch is at 12:30 in an office meeting that may run to 14:00.
**Wants:** refuelling to fit between them, and to see when a meeting eats into the recovery window.

### 1863 · Caffeine already counted from an unlabelled drink
Ceren drinks a cup of something at a friend's home that turns out to be strong cold brew. She only finds out at 16:30.
**Wants:** a correction to the caffeine total that changes tonight's sleep advice, without her re-entering her day.

### 1864 · Alcohol limit across a week with a driving evening
Baran allows himself 10 units a week and none before driving. Saturday has a dinner 20 km away that he drives to and where wine will be poured. His friend offers a lift home.
**Wants:** the wine to count toward the week, and the drive home to be shown as safe only if the lift is real.

### 1865 · Waiting to drive after drinking
Baran has two beers between 19:00 and 21:00 and plans to drive at 23:30.
**Wants:** to see when he is likely to be fine, as a range, not a single confident hour.

### 1866 · Hydration falling behind while in back-to-back meetings
Leyla aims for 2.5 litres. By 15:00 she has had 0.6. Her afternoon has meetings 15:00 to 18:00 with no breaks and a run at 18:30.
**Wants:** the gap to be visible against the real afternoon, not as a generic reminder every hour.

### 1867 · Hydration goal in a heatwave
The temperature reaches 39 C on Wednesday. Leyla's target rises. Her Wednesday includes an outdoor half-day.
**Wants:** the target to go up on the hot day and back down after, with her plan not silently reading as failed.

### 1868 · Household where one member is allergic to nuts
Baby Defne's older brother Can has a peanut allergy. The mother plans a satay dinner. The school lunch box for Can goes into the same fridge.
**Wants:** the satay flagged for Can's exposure and the lunch box never to include anything with traces.

### 1869 · Allergen hidden inside a bought sauce
The pantry has a sauce bought last week. Its new recipe, from the shop's label update, contains sesame. Can is allergic.
**Wants:** to be told about a meal he has already been planned for, without anyone having to re-read labels.

### 1870 · Impossible: coeliac, vegan, low-carb and a nut allergy in one dinner
Four guests come on Saturday: one coeliac, one vegan, one on very low carbohydrate, one with nut allergy. The host has 90 minutes and one oven.
**Wants:** to hear plainly that no single dish works, and what the smallest number of dishes is that would.

### 1871 · Household with different diets at one table
Gül eats 1,600 kcal low fat, her husband 2,800 kcal for lifting, their son 1,900 kcal with lactose intolerance. They want to cook once.
**Wants:** one shopping list and one cooking session, with portions and swaps per person.

### 1872 · Child's school lunch with a rule that changes mid-term
The school bans nuts on Monday, and on Wednesday adds a rule that the lunch box has no fridge access until 12:30. Can's lunch is made on Sunday for the week.
**Wants:** to see which of the lunches breaks the new rule and what still works at room temperature for four hours.

### 1873 · School lunch made the night before, eaten a day later than planned
The school trip moves from Thursday to Friday. Thursday's packed lunch was made on Wednesday night and is not in the trip's plan.
**Wants:** the lunch to be seen as a day older than intended and asked about, before it goes into the bag.

### 1874 · Two parents pack the same lunch, or neither does
Both parents assumed the other would do Tuesday's lunch box. At 07:20 the child asks where it is.
**Wants:** for it to have been clear the night before who had it, without either parent seeing the other's schedule.

### 1875 · Baby weaning: one new food every three days
Defne starts a new food every three days. Egg on day 1, and the next new food is due day 4. On day 2 she has a rash on her cheek.
**Wants:** the schedule to hold still, not start the next food, and the rash to be tied to what she ate in the previous 48 hours.

### 1876 · A weaning food hidden in a normal family meal
The family dinner on day 5 contains wheat pasta, which Defne has not had yet. She eats a spoon of it.
**Wants:** the unplanned exposure to be written down against the right day and to count as the new food for that window.

### 1877 · Weaning schedule shared between two homes
Defne stays with her grandmother Wednesday and Thursday. A new food, banana, is due on Wednesday.
**Wants:** the grandmother to know what is safe and what is due, and the parents to hear what she ate, without giving her their week.

### 1878 · Eating for a blood test with a 10 to 12 hour fast
Murat's blood test is Tuesday at 08:30 and needs 12 hours of fasting, but no more than 14. Water is allowed.
**Wants:** the last meal cutoff of 20:30 on Monday to be clear, and Monday's dinner party to be seen as a problem.

### 1879 · Blood test moved earlier by the clinic
The clinic calls Monday at 18:00 and moves the test from 08:30 to 07:45 the next day. Murat has just finished dinner at 17:45.
**Wants:** to know the fasting length is now not enough (14 hours is fine, 13.9 is not) and what his options are.

### 1880 · Blood test after the fast was broken by accident
Murat drinks tea with sugar at 06:45 not thinking. His test is at 08:30.
**Wants:** the fast to be shown as broken, and the clinic's choices (go anyway, rebook) laid out as choices, not decided.

### 1881 · Elderly relative's meals delivered by a service
Grandmother Hatice has three meals delivered daily at set times. Her daughter Zeynep lives in another city and sees them.
**Wants:** to see whether Hatice ate what came, without seeing what Hatice does the rest of the day.

### 1882 · Delivery driver late for the elderly relative
Hatice's lunch is due 12:00 to 12:30, and her diabetes medication is at 12:15 with food. The driver is 50 minutes late.
**Wants:** Hatice and Zeynep both to be told in a way that does not panic anyone, and the medication timing to follow.

### 1883 · Elderly relative eats less than delivered for a week
Hatice's meals come back half eaten for seven days in a row. She has never said she is unwell.
**Wants:** the pattern to reach Zeynep with care, not as an alarm, and not shown to the delivery company.

### 1884 · Restaurant meal with only a guessed portion, and a menu that changed
Nora eats at a restaurant. The menu she saw online lists a dish at 650 kcal. The waiter says today's version has more cream. She has no chance to weigh anything.
**Wants:** a rough number that stays visibly rough, and no false precision in the day's total.

### 1885 · Photo logged hours later, meanwhile other things were logged
Nora photographs her lunch at 12:40 and uploads it at 18:10. At 15:00 she had already typed "sandwich" as a lunch entry.
**Wants:** the photo to join the typed entry and not double the lunch, and its real time to stay 12:40.

### 1886 · Logging a meal for a timezone she has just left
Nora eats dinner at 20:00 in Tokyo, logs it on the plane at 08:00 Istanbul time the next day, with her clock already changed.
**Wants:** the dinner to sit on the correct day and in the correct place in her week.

### 1887 · Food logged for a dinner guest
Nora logs a shared pot of stew as one portion. Her partner ate a bigger portion of the same pot.
**Wants:** the pot's total to be split in a way both agree with, without either editing the other's log.

### 1888 · Extreme scale: a catering plan for 400
Zeynep organises a wedding lunch for 400, cooked in three kitchens, with 12 allergy cases and 30 vegetarian.
**Wants:** the plan to stay readable with one view for each kitchen and one for the whole day, without her losing a single allergy case.

### 1889 · A dietician with 60 clients on the same week
A dietician has 60 clients, each sharing a different amount of detail. On Monday morning she wants to know who needs a call.
**Wants:** to see only who has drifted from their own plan, at the detail each client chose.

### 1890 · Client withdraws detail after sharing it
Murat shared his full food diary for two months. He now changes his mind and wants the dietician to see only weekly totals from today.
**Wants:** the change to apply from now, with a clear picture of what the dietician still holds from before.

## Religious practice in daily planning

### 1891 · A weekly Friday prayer permission that a new manager's standing meeting overlaps
Emre has a verbal arrangement to leave for Friday prayer from 12:45 to 14:00 every week. His new manager sets a recurring team review for Fridays at 13:00, starting next month, and does not know about the arrangement. Nobody has written the arrangement down anywhere the manager can see.
**Wants:** To see that the new recurring meeting lands on his Friday prayer every week, and to have that noticed before the first one happens, not after he has missed it.

### 1892 · A meeting with no break that swallows the whole window of an afternoon prayer
Ayşe has a workshop from 15:30 to 17:00 on a day when the afternoon prayer window closes at about 16:50. The facilitator has said the agenda is full and there is no break. The workshop has overrun by 20 to 40 minutes the last three times.
**Wants:** To know before the day that the workshop probably eats the window, and to see how much margin she has if it runs long again.

### 1893 · A couple who follow different schools of law and disagree on when travel counts
Selim and Nur drive 95 km to his parents for the weekend. Selim follows a school where the travel threshold and the stay limit for shortened prayers are counted one way, Nur follows another, and they plan to stay 4 days. On the same trip, one of them counts as travelling for the prayers and the other does not.
**Wants:** Each of them to see their own prayers for the trip, without one person's rules overriding the other's, and both of them on the same shared trip.

### 1894 · A trip that starts as 10 days and becomes 17 while already away
Hakan leaves for a conference for 10 days and prays shortened prayers on arrival. On day 6 the client extends the engagement and he now expects to stay until day 17. Where the stay limit falls depends on the school he follows, and he had already prayed the shortened form for five days.
**Wants:** After the extension, to see what he owes from here on, and what the days already passed count as, without redoing his plan by hand.

### 1895 · A six-hour layover that is neither home nor destination
Zeynep flies Istanbul to Doha to Jakarta with 6 hours in Doha at night and a 9-hour flight after. She wants to pray on time, and she is unsure whether the layover counts as being anywhere. The airport has a prayer room 12 minutes' walk from her gate.
**Wants:** A plan for her prayers across the two flights and the stopover, with the walk to the prayer room counted as time she actually spends.

### 1896 · Twelve years of missed prayers as a daily quota
Murat is 34 and has decided to make up the prayers he missed from age 15 to age 27, roughly 12 years, about 21,900 prayers. He can realistically add 6 make-up prayers a day on top of the five daily ones. At that rate the debt takes about 10 years, and he will keep missing days.
**Wants:** To see when he will finish at his real pace, how that date moves when he falls behind, and a running count that survives years of use.

### 1897 · A make-up quota larger than the days the rules allow
Leyla owes 23 days of fasting from last Ramadan and next Ramadan starts in 40 days. Of those 40 days, she is away for 9 on a work trip, 2 are days on which fasting is not allowed, and her doctor advised against fasting on 6 of them because of a medication cycle. That leaves 23 days available exactly, with nothing spare.
**Wants:** To be told plainly that the plan fits with no slack, and what happens to it the moment a single day is lost.

### 1898 · A private reason for not fasting that colleagues would read as a calendar entry
Dilara is not fasting on some days of Ramadan for a reason she does not share with colleagues. Her team calendar shows she is present at the team lunch, and the office knows she fasts. She also needs those days recorded to make them up later.
**Wants:** Her own record of the missed days for make-up, without her colleagues seeing a reason, and without an absence at lunch that draws questions.

### 1899 · Fasting on a flight that shortens the day
Ömer fasts on a Ramadan day. He boards at 14:00 in Istanbul on a flight eastward to Kuala Lumpur, 10 hours in the air. The evening at his destination comes many hours earlier than at the airport he left, and the flight passes through the sunset several times as the plane moves.
**Wants:** To see when he can break his fast on this particular day, in terms of the clock he lives by at each moment, and how many hours the fast ends up being.

### 1900 · The same flight going west making the day very long
Ece fasts in Ramadan and flies from Istanbul to Los Angeles on the afternoon of a fasting day, departing 14:00 and landing 18:00 local time after 12 hours in the air. She has already fasted about 8 hours by the time she boards, and she will still be in daylight when she lands.
**Wants:** To see how long the fast on this day will actually be, and whether it fits what she is able to do.

### 1901 · Three iftar invitations for the same evening
During Ramadan, Fatma is invited to iftar by her neighbour, her department head and her aunt. All three are the same evening. The aunt's invitation is a yearly tradition, the department head's is a work dinner with a fixed start, and the neighbour's is the third she has declined this month.
**Wants:** To see that the three overlap in one evening, and after she picks one, to have the other two answered without her having to reveal her ranking of them.

### 1902 · A Ramadan workday that starts earlier and ends earlier, but the client does not shift
The company runs 08:00 to 15:30 hours through Ramadan instead of 09:00 to 18:00. Ali's largest client is two time zones behind and only free from 17:00 to 19:00 his time. His iftar is at 19:05 and the calls are twice a week.
**Wants:** To see the calls landing on his iftar and on his tired end of the day, with the client still able to meet.

### 1903 · Five odd nights of Ramadan he wants free, only one of which counts
Baran wants to spend the odd nights of the last ten nights, the 21st, 23rd, 25th, 27th and 29th, in worship after the night prayer. He does not know which of them is the special night, and he would like all five kept clear. His employer's release is scheduled for the morning after the 27th.
**Wants:** All five nights held free, and the conflict with the morning after the 27th visible to him, without telling his team why.

### 1904 · Seclusion in the mosque for ten days against a working week
Hatice plans i'tikaf, staying in the mosque for the last ten days of Ramadan from sunset on the 20th. The mosque accepts her, her manager approves three days of leave, and her laptop is in the mosque with her from day 4. Her team has a launch on day 7.
**Wants:** To see which days are covered by leave, which by her being reachable, and which by neither.

### 1905 · A holiday extended to nine days by an announcement made the week before
A government announces that the Eid holiday will be extended from 4 to 9 days by adding a bridge, 6 days before it begins. Kaan's clinic had booked patients on 3 of those days, and a patient flying in for surgery has a ticket for the second day.
**Wants:** To see which appointments the announcement disturbs, and to have those patients told, without his own days off changing by more than the announcement itself.

### 1906 · A holiday whose date is confirmed the night before, against a notice period
Nazlı's employer requires holiday requests 30 days ahead. Her religious holiday's first day is confirmed only the evening before it, so the date she could have written 30 days ago might be off by one day. She works in a shift roster published two weeks ahead.
**Wants:** To have a leave request that is valid despite the date being uncertain, and to see her roster updated when the date is confirmed.

### 1907 · Kandil night on a night before a Friday deadline
On the night of Berat, Cem plans to attend the evening mosque programme, which usually runs until about 23:30, and to pray afterward. A report is due Friday at 09:00. He usually needs 4 hours of work and has not started.
**Wants:** To see the night as taken, with the deadline still visible against it, and to know how many hours of working time remain in the week.

### 1908 · A seven-share sacrifice with three people dropping out
Mehmet and six others agree to share a cow for the sacrifice, seven shares. Three days before, three of the seven withdraw, and the butcher's slots for the three permitted days are filling up. The remaining four can afford only a smaller share count than the cow needs.
**Wants:** To see the arrangement fall short of seven, the days left in the permitted window, and the butcher slots still free.

### 1909 · A sacrifice done abroad by a charity, with the confirmation arriving after the window
Sevgi donates to a charity that performs the sacrifice in East Africa on her behalf. The permitted days end on the 13th at sunset in her time. The charity's photo confirmation always arrives 2 to 5 days after the sacrifice.
**Wants:** To see that the sacrifice was made inside the permitted days even though the proof arrives later, and to see the distribution of the meat as a separate later item.

### 1910 · A pilgrimage window with a lottery and a leave request that must come first
Yusuf's country allots pilgrimage places by lottery, announced in April, for a trip in June with about 5 weeks of travel. His employer wants leave requests by January. He cannot know whether he has a place, and if selected he cannot decline without losing the place.
**Wants:** A leave request that exists before he knows the result, without his employer being told it may be for a pilgrimage, and without a 5-week block held for years if he is not chosen.

### 1911 · Group departure dates for the pilgrimage that change twice
The group leader for Havva's pilgrimage moves the departure date from the 2nd to the 4th and then back to the 3rd, because of a visa batch. The dates of the days at the holy sites are fixed by the religious calendar and do not move. Her return ticket is a separate booking.
**Wants:** To see the fixed days at the holy sites stay put while everything else around them shifts, and what is left of her time before and after.

### 1912 · A lesser pilgrimage squeezed into a school break
The Yılmaz family of five wants to make the lesser pilgrimage during a 9-day school winter break. Flights are cheaper for the middle days, the youngest child has a make-up exam on day 8, and the mother's visa validity starts on day 2.
**Wants:** To see whether the nine days hold the whole trip, and which of the constraints breaks it.

### 1913 · Reading the whole Quran in 30 days, 20 pages a day, with three sick days
Rukiye starts on the 1st of Ramadan at 20 pages a day. On days 9, 10 and 11 she has a fever and reads nothing. The 30th day is the last night of Ramadan and she wants to finish before the holiday prayer.
**Wants:** To see the 60 pages she now owes, and how the remaining days would have to look to still finish in time.

### 1914 · Twenty pages that take a different time each day
Rukiye's first week reading shows 20 pages takes her 55 minutes on average, but by the third week it takes 38 minutes. She scheduled a 45-minute slot each morning at 06:30, before the school run.
**Wants:** The slot she has set aside to reflect how long it really takes her, and not the 45 minutes she guessed.

### 1915 · Thirty friends each reading one part daily so that one whole reading is completed
Thirty friends each read one thirtieth part every day of the month, so that between them a complete reading is finished each day. On day 14 one of them, Berk, is unable to read and tells no one until day 16.
**Wants:** To see which part was not read on days 14 and 15, and who can take it, without the whole group's schedule shifting.

### 1916 · A mosque reading in the nightly prayers counted against a personal reading
The mosque near Sinan reads one thirtieth part a night in the extra Ramadan prayers. He attends 23 of the 30 nights. He also keeps a personal reading of 20 pages a day and wants to know whether what he hears counts as reading towards his own total.
**Wants:** To record what he heard on the nights he attended separately from what he read, and to choose himself what counts.

### 1917 · A recurring meeting on the Sabbath eve that starts before the day begins in the winter
Dov works in a company where the weekly meeting is Friday at 16:30. In winter the Sabbath begins at about 16:20, so the meeting starts after it has begun, while in summer it ends hours before. The meeting time has not changed in three years.
**Wants:** To see the meeting flagged only in the weeks where it collides, and not in the others.

### 1918 · An on-call handover that starts when the day of rest ends, whenever that is
Miriam is on call for a hospital's records department, and her handover is due once the day of rest ends on Saturday night, which is when three stars are visible, about 40 to 70 minutes after sunset depending on the season. The hospital lists the handover as "Saturday 19:00".
**Wants:** The handover to be shown at the time she can actually take it, not at 19:00 on a day when it is still the day of rest.

### 1919 · A festival that runs two days back to back into the weekly day of rest
In the year the new year festival falls on Thursday and Friday, Eli faces three consecutive days without work or cooking, from Thursday evening to Saturday night. His family of 11 is coming for the meals.
**Wants:** To see the preparation tasks fall before the three days begin, and the shopping, cooking and travel of the guests all finishing before Thursday evening.

### 1920 · A tent to be built in the four days between two festivals
Between the end of the day of atonement and the start of the festival of booths there are 4 days. Noa must build a temporary hut in her garden, buy the four species, and invite 14 guests. It rains for two of the four days.
**Wants:** To see how much of the four days remains for building after the rain, and the guest invitations that depend on it.

### 1921 · A 25-hour fast with a medication timed inside it
Aaron takes a medication at 08:00 and 20:00 and fasts 25 hours on the day of atonement. His doctor's advice is on file at his clinic, but not shared. The following morning he has an exam at 09:00.
**Wants:** His two doses shown against the fast, the exam shown after it, and only he seeing why the doses are on the day.

### 1922 · A count of 49 nights in which one night was missed
Rachel counts each night for 49 days between two festivals, after nightfall, every evening. On night 23 she falls asleep at a friend's house and does not count. She realizes on the next afternoon.
**Wants:** To see the count as it stands, with the missing night visible, and to have the remaining nights carry on from the right day.

### 1923 · A period of restraint within the count that some families keep in one way and some in another
During the count, Rachel's family avoids weddings and haircuts, but her husband's family keeps a different set of days within the same 49. Their cousin's wedding is on day 20, which one family counts inside the restraint and the other does not.
**Wants:** The wedding shown against each family's own custom, so the couple sees both without a third calendar being invented.

### 1924 · Forty days that do not count the Sundays
Clara gives up sweets for Lent. Her birthday cake is planned on Sunday, day 18. Depending on how she counts, the 40 days include Sundays or the 40 are counted excluding them, and the end date differs by about a week.
**Wants:** To see the end date under the count she chose, with the Sunday cake not contradicting her own rule.

### 1925 · Meat-free Fridays and a client lunch at a steakhouse
During Lent, Tom abstains from meat on Fridays. His company books a client lunch on a Friday at a steakhouse two weeks ahead. The client has chosen the place, and the booking is non-refundable.
**Wants:** To see the conflict for himself when the booking is made, without disclosing his reason to the client or the organiser.

### 1926 · Fasting days every Wednesday and Friday, with long fasts on top
Dimitra follows the Orthodox rule of fasting on Wednesdays and Fridays all year, plus the 40 days before the Nativity and Great Lent. On a Wednesday in the Nativity fast, her office is providing a catered team lunch for her promotion.
**Wants:** To see the fasting days as one continuous pattern across the year, and the lunch against it, without her having to turn down her promotion lunch.

### 1927 · The fourth Sunday of the pre-Christmas season landing on Christmas Eve
When Christmas Eve falls on a Sunday, the fourth Sunday of the pre-Christmas season is the same day, and the church holds a morning service and a midnight service. Grace sings in the choir and works at a pharmacy that opens until 20:00 on Christmas Eve.
**Wants:** To see the two services and the pharmacy shift as three claims on one day, with the time between the shift's end and the midnight service.

### 1928 · Choir rehearsal that cannot run without enough voices
St Mark's choir of 24 rehearses Thursdays at 19:00 for Sunday's 09:30 service. The director cancels rehearsal when fewer than 14 confirm, and at least 4 of the 6 basses must be present. In holy week there are also services on Thursday and Friday.
**Wants:** To see whether Thursday's rehearsal happens, based on who confirmed, and to see it disappear from everyone's day when it does not.

### 1929 · A choir member on shift work who swaps a shift late
Peter works rotating shifts. Rehearsal is Thursday 19:00 and Sunday service 09:30. He swaps into a Sunday 06:00 to 14:00 shift on Friday afternoon, which was not part of the plan.
**Wants:** To see the Sunday service as lost, and the choir told he will not be there, without the director seeing his employer's roster.

### 1930 · A lunar-day festival whose date differs between two almanacs
The same festival of lights is on the 12th in the almanac Anita's temple uses and on the 13th in the almanac her employer's holiday list used. She has one paid day for it.
**Wants:** To see which day her temple holds it and to have her paid day placed on that one.

### 1931 · A yearly memorial rite tied to a lunar day of a death, on different dates each year
Vikram's father died on the ninth lunar day of a certain month. Each year the memorial rite is on that lunar day, which lands on a different civil date, and it takes a whole morning with a priest who has to be booked. Vikram lives in Toronto and the day begins about 9.5 hours later than in Pune.
**Wants:** To see the memorial in his week months ahead, at a time that suits the priest in Pune, and to see how the day starts where his family is.

### 1932 · A monthly fast on the eleventh lunar day, sometimes two civil days
Sunita fasts twice a month on the eleventh lunar day. The lunar day begins in the afternoon on one civil day and ends early on the next, so both civil days touch it. One month it also touches only a few hours of a third day.
**Wants:** The fast to appear on the day she keeps it, and the neighbouring days to show that they touch it, without her having to work it out.

### 1933 · An observance day that follows the moon while dinner is a work obligation
Somchai keeps eight precepts at the temple on full moon days, which includes not eating after noon. His firm's client dinner is set on the full moon in three weeks. His colleagues know he is Buddhist but not that he keeps these days.
**Wants:** To see the clash of the observance day and the dinner, and to decline the dinner without his colleagues learning about the observance.

### 1934 · A three-month vow against a business trip
Kanya takes the rains retreat vow for three months, including abstaining from alcohol and going out in the evening. In month two she has a business trip to a country where the client's dinners are the main work.
**Wants:** To see the trip against the vow before she accepts the trip, and to see the vow's remaining days as well as the trip's.

### 1935 · A ten-day silent retreat with no phone
Maya goes to a ten-day silent retreat. She hands in her phone at 16:00 on day 0 and gets it back at 09:00 on day 11. Her sister is due to give birth in that window, and a project delivery is on day 6.
**Wants:** To have her absence known to her colleagues as she has agreed to share it, and a way for the one person she trusts to reach her if the birth happens.

### 1936 · A daily sitting that was done but not logged
Jon sits for 20 minutes at 06:30 every day and counts his days in a row, now 112. On a day he sat but did not log it before midnight, his streak shows a break.
**Wants:** To correct yesterday afterwards, and to see the count as it truly was, not as it was recorded.

### 1937 · A household with three traditions and one week
In one household, Ahmed observes Friday prayer, his wife Judith keeps the Sabbath evening meal, and Judith's mother Rose, who is Catholic and visiting, wants Sunday Mass. Their son has football on Saturday morning and a school event on Friday at 18:00.
**Wants:** To see all four people's week as one household week, with each person's practice their own and nobody labelled by it.

### 1938 · A team release week when one in three is away for something different
A team of six: one is away for a Muslim holiday, one for a Hindu festival, one for a Christian feast and one for a fast that ends at night. The lead must pick a release date. None of them wants to say why they are unavailable.
**Wants:** To see the days on which a release would work, without the lead being told which faith is behind each absence.

### 1939 · A company holiday list that leaves out an employee's holidays
A company gives 12 public holidays, all from one tradition. Amira needs 5 days off for her own holidays this year, three of which are consecutive. The company gives 3 floating days.
**Wants:** To see 5 days needed against 3 floating days, and the two missing days, before she gets to them.

### 1940 · A fast promised on condition of an outcome
Halil vows that if he passes his licence exam he will fast three days. The result is published on a date the examiner has not given, and he takes the exam on the 12th. The vow ends if he fails.
**Wants:** The three days to exist only if he passes, and to appear only when the result is known.

### 1941 · A sixty-day fast that must not break
Orhan is to fast sixty days in a row as a penalty for having broken a fast on purpose. On day 47 he has to have a medical procedure requiring him to eat.
**Wants:** To see that day 47 breaks the run, what it does to the other 46 days, and the new end date if he must start again.

### 1942 · A court hearing set on a religious holiday
A court in Leon's city sets his hearing on the day of atonement. The court's next free date for the same judge is in five months, and his witness, an elderly relative, is only available in the next two months.
**Wants:** To see the hearing against his holy day, and the witness's window, before he has to answer the court.

### 1943 · Thirty evenings of community meals shared out, when the month may have only twenty-nine
A community shares out the 30 evening meals of Ramadan among 30 families. Family 30 has agreed to the last evening. The month may have only 29 days, and it will not be known until the 29th day itself.
**Wants:** To see the 30th family's evening as possible, not certain, and to have them told the moment it is known.

### 1944 · Sleep squeezed by extra night prayer and an early meal before dawn
In Ramadan Deniz prays the extra 20 units after the night prayer, about an hour, is home by 22:45, wakes at 03:30 for the pre-dawn meal, and begins work at 08:00. The days are 15 hours long and the pre-dawn meal is at 03:40.
**Wants:** To see how many hours of sleep he is left with each night, and a warning when a week's total falls below what he has told the calendar he needs.

### 1945 · A new baby's naming rite fixed on the eighth day, postponed for health
Rina's son is born on a Tuesday at 23:50, and the rite is set for the eighth day. The guests, a specialist and a caterer are booked. Jaundice appears on day 5, and the doctor says to delay until the baby is well.
**Wants:** To see the rite moved together with the guests, the specialist and the caterer, and the new date not to be counted from a day that no longer applies.

### 1946 · A nineteen-day calendar of months and its fast that ends the year
Farid follows a calendar of nineteen months of nineteen days. The community feast falls on the first day of each of its months, and the annual fast runs the last nineteen days of the year, sunrise to sunset, ending with the new year festival. His employer's calendar has months of 28 to 31 days.
**Wants:** His feasts and fast on his own months, and lined up against the employer's dates without one being rewritten into the other.

### 1947 · A weekly class in religious education that follows the school year but not its holidays
Saadet teaches a Sunday morning class at 10:00 for 22 children through the school year. The school holidays, the festival week and her own annual leave all differ, and the class runs only on Sundays where at least 8 children are expected.
**Wants:** To see which Sundays the class actually meets, and to have the parents told when one is cancelled.

### 1948 · A fast planned in the same week as a pilgrimage-day fast on a day off
Kemal wants to fast on the day of standing at Arafat for those not on pilgrimage, and on the two Mondays of that week. That day falls on a working day when his manager has scheduled a client lunch.
**Wants:** To see the fast against the lunch, and to change the lunch, not the fast, without saying why.

### 1949 · A count of prayers to make up when the number is uncertain
Burak converted to Islam at 29 and asks how many prayers he needs to make up from the years before, which depends on how he counts from the age of maturity. His own estimates run from 4,000 to 6,000.
**Wants:** To plan against a range, with the finish date shown as an earliest and a latest, narrowing as he decides.

## Money and time

### 1950 · Salary day slides off a weekend, and everything counted from it slides too
Ayşe is paid on the 15th. In November 2026 the 15th is a Sunday and her employer pays the Friday before, the 13th. Her monthly budget starts on payday and her rent standing order fires on the 16th. This month her month is two days longer at the front and two days shorter next month.
**Wants:** To see the budget month start on the 13th, with next month's length shown honestly, and to be told that the rent on the 16th now falls after a payday that came early rather than on the day after it.

### 1951 · Payday that only lands when the employer says so
Kerem's contract says "paid by the 5th". The money has landed on the 3rd, 4th and 5th in past months, and once on the 6th after a bank holiday. His rent is due on the 5th.
**Wants:** To plan rent against a payday that is a spread of likely days, learning from past months, and to be warned in the months where the odds of the money arriving after the rent is due are real.

### 1952 · Three bills due before payday
On the 8th, Selin has electricity (900 TL, due the 10th), internet (450 TL, due the 11th) and a card minimum (1,200 TL, due the 12th). Her balance is 1,000 TL and payday is the 15th.
**Wants:** To be told plainly that the three cannot all be met on time, which ones can slip and by how much without a penalty, and what each choice costs.

### 1953 · Grace period that is not the same for every bill
The water bill is due on the 20th with a 10-day grace before a late fee. The phone bill is due on the 20th with no grace and a 5% fee at midnight. Mert is travelling with no signal on the 20th.
**Wants:** To see two bills with the same due date treated as very different in urgency, and the phone bill flagged before he leaves.

### 1954 · Grace period is wanted by the bank and the person differently
A landlord's contract says rent is due on the 1st with a 5-day tolerance. Elif treats the 1st as her own deadline, since the landlord once got annoyed at the 4th.
**Wants:** To hold the contractual last day and her own chosen day side by side, and be reminded by hers.

### 1955 · Payment initiated Friday evening, arrives Tuesday
Deniz pays a bill by bank transfer at 18:30 on Friday, the last day. The bank's cut-off for same-day processing is 17:00 and the transfer settles on Monday. The payee counts the day of receipt, and Monday is a day late.
**Wants:** To know on Friday morning that 17:00 was the real deadline, not midnight.

### 1956 · Bank cut-off in the bank's timezone, person in another
Tuğba lives in Berlin and pays a Turkish card debt due on the 30th. The bank's cut-off is 23:59 Istanbul time, which is 21:59 or 20:59 in Berlin depending on the season, since Turkey has no daylight saving and Germany does. In late March, when Germany changes its clocks, she plans "the evening of the 30th".
**Wants:** The deadline shown in her own clock, correct across the clock change, and not silently an hour off.

### 1957 · Statement date versus due date on a credit card
Cem's card closes its statement on the 24th and payment is due on the 3rd of the next month. A purchase on the 23rd is on this statement, due on the 3rd, a gap of 10 days. A purchase on the 25th sits on the next statement, due on the 3rd of the month after, 39 days away.
**Wants:** When he asks "when do I really pay for this laptop?", the answer to depend on the purchase date, and to see that buying on the 25th instead of the 23rd buys him 29 more days.

### 1958 · Interest-free days lost to a single unpaid balance
Ayla always pays the full statement on time. One month she pays 4,000 of 4,300 TL, leaving 300 TL. Her card's terms say that with any balance carried, new purchases also start accruing interest from their purchase date, not from the due date.
**Wants:** To see, before she pays, that the 300 TL shortfall also costs her the interest-free time on everything she bought this month.

### 1959 · Minimum payment date and the minimum payment amount both move
Barış's card minimum is a share of the statement, and the statement changes depending on which purchases post before the cut-off. A shop's charge posts two days after he buys it, so a purchase on the 22nd lands on either statement depending on the shop.
**Wants:** To be shown that his next minimum is a range until the charge posts, and not a single false number.

### 1960 · Card due date falls on a public holiday
A card's due date is the 3rd, which in the coming month is the first day of a bayram holiday lasting five days. Banks in the country do not settle transfers until the 8th, though the card issuer rolls the due date to the next working day. Nazlı is not sure which rule applies to her card.
**Wants:** To be told the day the money must have left her account, given that the bank's rule and the card's rule differ.

### 1961 · Instalment plan of 9 months on a card, and the card statement dates
Okan buys a 27,000 TL sofa on 12 January in 9 instalments of 3,000 TL, statement on the 24th. The first instalment hits the January statement, not the February one. The last lands in the September statement.
**Wants:** To see all nine dated on the statements they actually hit, and the month in which the sofa is finished being paid for.

### 1962 · Instalments outlive the thing bought
Leyla bought a 6-instalment phone in March. In June the phone is stolen. The remaining three instalments continue.
**Wants:** To see that money is still owed for a thing she no longer has, and to have that carried into her plans without her having to re-enter it.

### 1963 · Instalments stacked so a single month is impossible
Volkan has five active instalment plans ending at different months. In three months, during the school-fees month, all five are due plus the insurance premium.
**Wants:** To see that month coming six months ahead as the one that breaks his budget, and which purchases made today would make it worse.

### 1964 · Instalment cap changes while a plan is being thought through
Hande plans to buy a washing machine in 12 instalments next month. The regulator caps that category at 9 instalments, and rules of this kind have changed over the years.
**Wants:** To have her plan hold as an intention, and be told when a rule change makes 12 instalments impossible, with the new monthly figure.

### 1965 · Early payoff of an instalment plan
With a bonus, Sinan closes the remaining 4 instalments of a laptop in one payment on the 10th. The bank takes its own early-payment terms and the remaining instalments vanish from the following statements, but the amount taken this month is bigger.
**Wants:** All four future months to lighten, the current month to take the lump, and the money freed to be visible as freed.

### 1966 · Free trial ending, cancel 24 hours before
Pınar started a 7-day trial on Monday 5 October at 21:15 with a streaming service. The service charges at the end of day 7. Its terms say cancel at least 24 hours before renewal.
**Wants:** A reminder that arrives while there is still time to cancel, which is Sunday 11 October by 21:15 at the latest, not Monday.

### 1967 · Trial whose end depends on a timezone she cannot see
A US app says the trial ends "on 14 March". The company is in California, Pınar is in Istanbul, and 14 March in California runs until 10:00 on the 15th Istanbul time.
**Wants:** To be told the end in her own time and offered the safe reading, the earlier one.

### 1968 · Cancelled, but still charged once
Gökhan cancelled a subscription on the 2nd, after which the service still took 89 TL on the 4th, and he disputed it. The bank reversed the charge on the 12th.
**Wants:** For the month's figures to show the charge, then the reversal, and the reversal to be seen as correcting the 4th, not as extra income on the 12th.

### 1969 · Subscription renewal price rises
A cloud storage plan renews yearly at 720 TL on 3 May. On 20 March the provider announces 960 TL from the next renewal.
**Wants:** The May expense to change to 960 TL without Ali retyping anything, and to be given the chance to decide whether the plan is still worth it before 3 May, not after.

### 1970 · Annual subscription for a family, split unevenly
A family music plan of 240 TL a month is used by Ece, her brother and her father, who does not pay. Ece pays the whole fee and the brother owes her a third.
**Wants:** To see her real cost as her share and the brother's debt as an amount she is waiting for, with the month it has been waiting.

### 1971 · Return window of 14 days that starts on delivery, not purchase
Tolga orders boots on 2 December and they arrive on 9 December. The seller's window is 14 days from delivery. He wears them once indoors on the 15th and is unsure.
**Wants:** The window shown ending on 23 December, not 16 December, and a nudge on the 21st to decide.

### 1972 · Return window ends inside a holiday when he is away
Tolga leaves for a trip on 20 December and returns on 3 January. A jacket bought on the 12th has a window ending on the 26th.
**Wants:** To be told before he leaves that the window will close while he is away, so he can return it before, or accept losing it.

### 1973 · Refund takes weeks and is money in flight
The boots go back on the 21st. The seller says the refund arrives in 5 to 10 working days, and a card refund shows on the statement, which may be a statement after the one that carried the charge.
**Wants:** The refund to be shown as expected within a range, tied to the purchase, and the month's spending not to look permanently 3,200 TL higher until it lands.

### 1974 · Warranty expiry that is a promise to check something
A fridge bought on 3 March 2025 carries a 2-year warranty. Yusuf notices a strange noise in February 2027.
**Wants:** A reminder in early 2027 that this is the last easy time to have the fridge looked at for free, and for the receipt to be found together with the date.

### 1975 · Warranty paused by a repair
A phone has a 2-year warranty ending 10 June. It is sent for repair on 1 May and returned on 20 May. Under the seller's terms the time in repair is added to the warranty.
**Wants:** The end date to move from 10 June to 30 June by itself once the phone is back.

### 1976 · Salary in one currency, rent in another
Mira is paid 2,800 EUR on the 28th by a Dutch employer while living in Istanbul, where rent of 32,000 TL is due on the 1st. The rate when she converts is uncertain.
**Wants:** To plan rent from a salary whose value in lira is a range, and to see how many euros must be converted by when to cover it in the worst realistic case.

### 1977 · Choosing when to convert
The euro has been drifting up against the lira by about 2% a month. Mira could convert everything on the 28th or in weekly portions. She does not want to gamble.
**Wants:** To see what waiting to the 1st has usually cost or gained, and to convert for rent on the day it is safest to have it, not on the day that seems best.

### 1978 · Exchange rate on the day the card is charged, not the day of purchase
Doruk buys a flight in dollars on 5 October. The card posts the charge on 7 October and the statement closes on the 8th, at whatever rate is in force on the 7th.
**Wants:** The purchase to be seen as an estimate in lira until it posts, then corrected to the real figure.

### 1979 · A foreign-currency loan against a local salary
Rıza's loan is fixed in Swiss francs, with monthly payments of 410 CHF due on the 10th, and his wages are in lira. The lira loses 4% in a month.
**Wants:** The coming payments to be shown as a range in lira that widens the further away they are.

### 1980 · Weekend and bank holidays differ between two countries
Ilse sends a payment from a German account to a Turkish one on the Thursday before a Turkish holiday that is not a German one. The funds cannot land on the Turkish side until after the holiday.
**Wants:** The arrival date shown correctly on the Turkish calendar, not the German one.

### 1981 · Monthly budget that resets on payday, not on the 1st
Zeynep's food budget of 8,000 TL runs from payday on the 17th to the 16th. On the 1st she has 3,100 TL left and 16 days to go. A calendar-month app tells her she has spent 60% of the month.
**Wants:** All her category totals cut at payday, and to see how many days she must stretch what is left.

### 1982 · Budget month with a variable number of days
One pay period is 28 days and the next is 35 because of a long-weekend payday shift. The daily allowance for the same 8,000 TL is 286 in one and 229 in the other.
**Wants:** The allowance to reflect the real length of the period she is in and to make the difference visible, not hide it.

### 1983 · Envelope emptied by an unplanned event
Her "car" envelope holds 2,000 TL and the tyres cost 5,600 TL. There is 3,800 TL left in her "clothes" and "fun" envelopes together.
**Wants:** To decide which envelopes give up money for the tyres, to see the effect on their own dates (the concert on the 22nd), and to be able to say "this was a one-off".

### 1984 · Money in an envelope that is meant for a date
Berk sets aside 1,500 TL a month in an envelope for the car insurance that costs 18,000 TL and renews on 14 March. It is October.
**Wants:** To see whether the envelope will hold enough by 14 March, and by how much it falls short if he skips December.

### 1985 · Savings goal that becomes impossible
Cansu wants 90,000 TL for a deposit by 1 June 2027 and puts aside 6,000 TL a month starting October. Nine months at 6,000 give 54,000.
**Wants:** To be told the goal misses by 36,000 TL at this rate, and to be shown what date or what monthly figure would work, without the goal being quietly rewritten.

### 1986 · Savings goal whose date moves the money
Cansu is offered a job starting in March at a higher wage. The goal date stays, but the monthly amount can rise from March.
**Wants:** The plan to treat the March raise as likely but not certain until the first payslip, and to show the goal as only "probably" met until then.

### 1987 · Emergency fund measured in months of spending
Haluk wants six months of expenses in savings. His spending is 42,000 TL a month, so the target is 252,000 TL. He then takes on a bigger rent, and the target moves without his savings moving.
**Wants:** To see how many months he has covered today, and how the fall from 4.1 to 3.6 months came from a rent change and not from anything he did to the savings.

### 1988 · Fund drawn down and expected to be refilled
Haluk uses 30,000 TL of the emergency fund for a hospital bill and wants it rebuilt by the following spring.
**Wants:** The refilling to sit alongside all his other obligations and compete with them in the plan, with the honest date when the fund is whole again.

### 1989 · Loan payment that changes with a floating rate
Melek's loan is variable and the rate is reviewed every 3 months. Her payment is 8,200 TL now, which may be about 8,900 TL after the review on 1 January.
**Wants:** The payments after 1 January to appear as an estimate that gets more exact as rate news comes in, and to be told the day the review sets the figure for good.

### 1990 · Thirty-year mortgage seen from day one
Onur signs a mortgage on 1 March 2027, 360 monthly payments of 21,500 TL, ending on 1 March 2057. His children will be 8 and 4 at the start.
**Wants:** To scroll to the last payment and see it, along with the year each child turns 18, without the future clutter drowning what is due this month.

### 1991 · Mortgage overpayment shortens the term
In year 6, Onur puts a 400,000 TL inheritance towards the mortgage. He can shorten the term or lower the payments.
**Wants:** To see both futures side by side, with the end date of one and the monthly figure of the other.

### 1992 · Loan payment day collides with the salary of a new employer
Melek's loan is due on the 5th, her new employer pays on the 10th, and her old one pays on the 1st. In the month of the switch she is paid twice, or not at all.
**Wants:** The transition month to be shown as it really is, and the loan to be seen as covered or not.

### 1993 · Tax instalments in a fixed calendar
Turkish income tax for a freelancer is paid in two instalments, in March and July, and the declaration falls in March. Sevgi earns unevenly and owes an amount she does not know until the declaration.
**Wants:** To be told in the autumn that a tax bill of around a range is coming, and to have the money set aside in the months before, adjusting as her income becomes known.

### 1994 · Tax deadline that moves by decree
The tax office extends a filing date by a fortnight the week before it falls. Sevgi had already planned the money around the old date.
**Wants:** The new date to replace the old one, and her plan to say plainly whether the money is still needed on the old date.

### 1995 · Insurance renewal that needs proof first
Car insurance renews on 14 March. The insurer wants a valid inspection certificate before renewing, and the inspection lapses on 2 March. Kadir has not booked either.
**Wants:** To see that the inspection is a step that must happen before the insurance renewal, and to be asked to book it while slots are still free.

### 1996 · Car inspection with a pass-or-fail outcome
Kadir's car inspection is on 25 February. If it fails, he has a fixed period to repair and retest, and driving on an expired certificate is fined.
**Wants:** The retest window to appear only if the first attempt fails, and the repair cost to be marked as a possible expense before then.

### 1997 · Vehicle registration and annual road tax in two halves
The annual motor vehicle tax is paid in two instalments, January and July. Kadir buys a used car in May that has already had its January instalment paid by the previous owner.
**Wants:** Only the July instalment to appear for him, and the earlier one not to be added to what he owes.

### 1998 · Passport must be valid for six months at travel
Nihan's passport expires on 20 August 2027. She wants to fly on 1 March 2027 to a country that demands six months' validity at entry. Six months before 20 August is 20 February, so 1 March is already too late.
**Wants:** To be told well ahead that the trip fails the rule, that any entry after 20 February 2027 would, and that renewal takes weeks.

### 1999 · Document expiry that blocks a payment
A student loan payment needs a valid identity card on the day of the visit to the bank branch, and Doruk's card expired last week. The appointment is tomorrow.
**Wants:** To hear it today that the appointment is at risk, and what date a new card can realistically be in hand.

### 2000 · Flatmates splitting bills that arrive at different times
Three flatmates, Ada, Ben and Cem, split rent equally on the 1st and utilities by usage when the bill comes. Ada pays the electricity on the 12th, 1,260 TL, and the others owe her. Ben pays late, Cem pays early.
**Wants:** Each to see what they owe whom and since when, without the whole ledger being shared, only what concerns them.

### 2001 · Flatmate leaves mid-month
Cem moves out on the 17th of a month. Rent is due on the 1st. The deposit is returned by the landlord 30 days after the last day. Ada and Ben would take his room in December.
**Wants:** His share of the month to be split by days, the deposit to appear as money he is waiting on, and Ada and Ben to see their split change from the 1st of the month someone moves in.

### 2002 · Partner sees spending, but not everything
Ece and Tarık share household costs and each can see the other's household purchases. Tarık buys a gift for Ece's birthday on his own card, and the charge appears in the shared view.
**Wants:** To keep the gift out of Ece's sight until the birthday, without Tarık having to hide his whole card, and without the household total being wrong for either.

### 2003 · Child's pocket money, earned by chores and paid on Fridays
Ela is 9 and gets 100 TL a week on Fridays, less 20 TL for each week the room was not tidied by Thursday. Her father is away on two Fridays, and her mother pays instead.
**Wants:** The payment to happen on the Friday whoever is at home, the deduction to be known to both parents, and Ela to see her own balance and a goal she is saving towards, without seeing the family's accounts.

### 2004 · Pension contributions counted in years and days
Fatma needs 7,200 days of contributions to retire. She has 5,100, worked three years abroad that may or may not be counted, and took two unpaid years.
**Wants:** A retirement date shown as a range with the foreign years as a question mark, and the date to move as the answer to whether they count arrives.

## Release calendars, LTS and support windows

### 2005 · An LTS promotion date that moves when the release before it slips
Mira Logistics runs Node.js 24. Its Active LTS phase is listed as ending on 20 October 2026, and the team assumes this end is tied to the release of the next major. Node.js 26 was planned for early May and slips by nine days. The team has planned their 24-to-26 migration freeze around the listed October date.
**Wants:** To see the 24 move date shift with the 26 release, and to see that the shift came from the slip and not from someone editing a date.

### 2006 · Support that ends "until 6 months after the next LTS"
Kestrel Systems' internal policy for its Java 21 fleet says support lasts until six months after the next LTS is generally available. Java 25 ships on 16 September 2025. Nobody has written an end date anywhere; a compliance auditor asks on 3 January 2026 whether the fleet is still in support.
**Wants:** To answer the auditor with a date and to see which release and which rule that date came from.

### 2007 · Estimated versus confirmed release date on the same page
The Deno LTS page for v2.9 says LTS starts 1 July 2026, "starting with v2.9.3". On 25 June v2.9.3 has not been cut. Lena's team has told their customers "1 July" in a contract annex.
**Wants:** To tell at a glance that 1 July is a plan tied to a patch release, not a confirmed day, and to know the moment it becomes confirmed.

### 2008 · A dependency's end of life forces your upgrade
Hollis Payments runs a service on Python 3.10, which ends security support in October 2026. Their web framework drops 3.10 in its next release, which is the only one carrying a fix for a published CVE. Their own annual audit is in March 2027.
**Wants:** To see that the framework's requirement pulls the Python upgrade forward to before the framework release, ahead of the audit date they had planned.

### 2009 · A rolling release with no versions
Ravi runs Arch Linux on his workshop laptop and openSUSE Tumbleweed on his server. His client asks in a contract "which OS version do you run, and until when is it supported?" There is no version and no end date for either.
**Wants:** To give the client a truthful answer about what is supported and until when, without inventing a version number.

### 2010 · Two ecosystems' calendars clash
A team builds on Ubuntu 22.04 LTS with Node.js 20 and Python 3.10. Node.js 20 security support ended 30 April 2026. Ubuntu 22.04 standard support ends April 2027. Python 3.10 ends October 2026. The Kubernetes version they deploy to leaves support in February 2027.
**Wants:** One view of all four end dates on a single timeline, showing which one bites first and which ones nest inside others.

### 2011 · An investor quiet period blocks a product announcement
Orbit Devices is due to report Q3 earnings on Thursday 29 October. Product wants to announce the v5 launch date on 20 October. Legal says the quiet period began on 15 October and product statements about revenue-relevant launches are off limits until the call.
**Wants:** To see that the 20 October announcement collides with a period it cannot happen in, and to see the earliest date it is allowed.

### 2012 · A release cut and its timezone
Rust's stable release runs on a Thursday and must finish within that day in UTC, taking about 75 to 90 minutes. A maintainer in Auckland reads "Thursday" and expects it on Thursday. It arrives when it is already Friday morning for her, and the milestone she promised her users is dated Thursday.
**Wants:** To see the release day expressed in her own local time next to the UTC day, and to see the date she promised match what happened.

### 2013 · A support window defined by the count of newer releases
Go 1.26 is supported until two newer major releases exist. Go 1.27 ships on 19 August 2026. Go 1.28 is planned for February 2027. A team on 1.26 asks when they must move.
**Wants:** To get "when 1.28 ships, currently planned February 2027" as the answer, and to see it change if 1.28 slips.

### 2014 · A calendar rule that changes at a version boundary
Node.js releases in pairs each year up to 26; from 27 each major becomes LTS after six months. Marta's tool lists "next LTS" for the odd version she runs. Her team assumes 27 will skip LTS like every odd release before it.
**Wants:** To see that 27 follows a different rule from 26, and which rule applies to each version.

### 2015 · A month-granular date that is not yet a day
The Node.js release team pins a promotion date no later than the first of the month it happens in. On 3 October Pavel's dashboard shows "October" for the Node.js 24 change and no day.
**Wants:** To see the month as a range of possible days that will narrow, and not a specific day it doesn't have.

### 2016 · LTS months of unequal length
Deno's LTS windows run 3 months (v2.1), 6 (v2.2), 6 (v2.5) and 7 (v2.9). Sam has a contract renewing every 6 months and wants to know which LTS windows fit inside it.
**Wants:** To see which LTS windows a given six-month contract covers fully and which only partly.

### 2017 · Freeze length that is not known in advance
Debian 13 had a 116-day freeze; the wiki says freezes run 7 plus or minus 1 months. A downstream project plans its own image build for "two weeks after Debian releases".
**Wants:** To see its build date shown as a range that follows the Debian release, and to see it narrow as the freeze proceeds.

### 2018 · The stable release date nobody has set
Debian has no date for the next stable. A hosting company's sales sheet wants to promise customers "Debian 14 images at launch".
**Wants:** To publish a promise that says it depends on Debian releasing, and no calendar date.

### 2019 · Standard EOL fixed one year after a release that has not happened
Debian 12 standard support ended 12 July 2026, tied to Debian 13's release on 9 August 2025. A user reading the 12 wiki in 2025 saw a date that was still an expectation.
**Wants:** To see, for the 2025 reader, that the end date was derived from the successor's release and could still have moved.

### 2020 · A Python version that is EOL on the last day of a month
Python 3.9 was end of life on 31 October 2025. A cluster's compliance report generated on 31 October at 23:50 in Los Angeles shows 3.9 as supported. The same report run in Tokyo the same instant shows it as expired.
**Wants:** To see one answer for 3.9 and to see which timezone that "31 October" was in.

### 2021 · Beta 1 as a promise about what stops changing
Python 3.15 beta 1 lands in May 2026 with "no new features". A library maintainer, Ilse, planned a feature landing in June for compatibility with a new syntax.
**Wants:** To see that her plan falls after the freeze, and to see the exact date it was frozen.

### 2022 · A third release candidate that was not planned
PEP 602 plans two release candidates before 3.X.0 in October. RC2 finds a regression and RC3 is added two weeks later. Downstream distro Arcadia Linux has a package build slot on the original final date.
**Wants:** To see the original date and the new date side by side and to see which of Arcadia's dates depend on it.

### 2023 · Extended support sold by someone other than the project
Node.js 20 security support ended 30 April 2026. A vendor sells commercial support for 20 until 2028. A bank's policy allows only "vendor supported" software.
**Wants:** To see both end dates, the project's and the vendor's, and who stands behind each.

### 2024 · Ubuntu Pro extends the tail
Ubuntu 22.04 leaves standard support in April 2027 and is covered by ESM to 2032 for machines attached to Pro. Two servers in the same fleet, one attached and one not, share a hostname pattern.
**Wants:** To see the end date for each server separately, even though they run the same release.

### 2025 · A release supported for nine months
Ubuntu 26.10 is an interim release with only nine months of updates, ending in July 2027. Aiko installs it in October 2026 and forgets.
**Wants:** To be warned before July 2027 with enough time to move to 27.04 or 26.04 LTS.

### 2026 · LTS every two years, but a team that skips one
A team runs Ubuntu 20.04 (ended standard support April 2025). They skip 22.04 and 24.04 and plan a move straight to 26.04.
**Wants:** To see their move as crossing two LTS generations and what each skipped release's support had been.

### 2027 · Two-week Kubernetes patch dates on different branches
Kubernetes patch releases on 15 September 2026 shipped for 1.34, 1.35, 1.36 and 1.37 on the same day. Cluster owner Dilan has 1.34 in production, which is in its end-of-life phase until 27 October.
**Wants:** To see the four branches' patches as one event on one day, and her cluster's own end date next to it.

### 2028 · Support of about a year with a hidden tail
Kubernetes 1.35's end of life is 28 February 2027 per kubernetes.io, roughly 12 months after release plus a short maintenance period. A managed cloud provider offers 1.35 for another 14 months.
**Wants:** To see the upstream end and the provider's end as two dates for the same version.

### 2029 · Three releases a year and a yearly audit
An auditor visits every March. Kubernetes releases in roughly April, August and December, each with about a year of patches. A team wants to be on a supported version on every audit date for three years.
**Wants:** To see for each March which versions are supported and which release they would have to be on.

### 2030 · Firefox holiday stretch
Firefox releases 162 on 8 December and 163 on 12 January, six weeks later instead of four, and 164 on 26 January. Beta for 163 starts 3 December.
**Wants:** To see 163's shorter or longer stages against the usual four-week rhythm, and how 164's dates relate to them.

### 2031 · ESR overlap
Firefox ESR 115 keeps receiving updates while ESR 153 is already out. An enterprise wants to be off 115 before it ends.
**Wants:** To see the two ESR lines side by side with the overlap where both are supported.

### 2032 · A Chrome milestone staged across days
Chrome stable goes to a small share of users first and then to everybody a week later. Support tells a customer "you have Chrome 140" on the first day.
**Wants:** To know whether that customer's version had reached them yet and on which day their share got it.

### 2033 · Extended Stable for managed fleets
Chrome has a stable line every four weeks and a slower line every eight for enterprises. Ng's IT team wants to compare their fleet's version against both.
**Wants:** To see both tracks with the dates each version was current on each.

### 2034 · An operating system yearly cycle and a hardware event
Apple announces new iPhones at a September event and the matching iOS ships days later. Dev shop Tarn Apps plans a compatibility fix for "the September release".
**Wants:** To see their fix date tied to whichever day the release ships, unknown until the event announces it.

### 2035 · Android support belongs to the device
The Pixel 8 gets seven years of updates; a mid-range phone from another maker gets three. An app team supports "Android 14 and up".
**Wants:** To see, for the specific device model in a support ticket, when its updates end, not just the OS version.

### 2036 · Monthly security patch level as a date
Android security bulletins name a patch level as a date such as 2026-10-05. A user's phone reports 2026-08-05. The company's policy requires patches no older than 60 days.
**Wants:** To see whether that phone meets the policy today, and on which day it will stop meeting it.

### 2037 · Windows servicing versions ending on the second Tuesday
Windows 10 22H2 ended 14 October 2025. An office keeps 30 machines on it. A pilot group of 5 has paid extended updates.
**Wants:** To see the 5 and the 25 as having different end dates although they run the same version.

### 2038 · An LTSC that outlives its consumer twin
Windows 10 LTSC 2021 mainstream support ends 12 January 2027 and IoT Enterprise extended support ends 13 January 2032. A kiosk manufacturer sold devices with LTSC 2021 IoT.
**Wants:** To see their 2032 date and to know that same-named version ends 5 years sooner for others.

### 2039 · Java LTS every two years, vendors disagree
Java 21 is LTS. One vendor ends free updates in 2028, another in 2030, Oracle has its own premier and extended support dates. A procurement form asks for "the end of life of Java 21".
**Wants:** To see each vendor's end and to choose which applies to the company's build.

### 2040 · A sixth-month cadence with a two-year long term
Java releases every six months in March and September. The company wants to be on a non-LTS for the newest language feature only until the next LTS.
**Wants:** To see when each non-LTS release stops getting updates relative to the following release.

### 2041 · Order with no time: codenames
Node.js LTS lines are named in alphabetical order of elements: Hydrogen, Iron, Jod, Krypton. The next two names are listed in advance but no dates exist for them beyond the release month.
**Wants:** To see the next two lines in order with the month attached where it's known and nothing where it isn't.

### 2042 · Rust editions are not versions
Rust edition 2024 is opt-in per crate. A company has 40 crates, of which 12 are on 2021 and 28 on 2024, and uses the latest stable compiler for all.
**Wants:** To see which crates are on which edition and that both are supported on the same compiler at the same time.

### 2043 · Feature freeze a date, release when ready
The Linux kernel has a merge window and release candidates each week; the final is out when the maintainer says so, normally after rc7 or rc8. A distro plans a kernel bump for "the week after 6.x".
**Wants:** To see the week as a range that shifts by a week whenever another rc is announced.

### 2044 · Fedora's one-week slip
Fedora Linux target date is Tuesday 22 April. The Thursday go/no-go says no-go. The next possible date is Tuesday 29 April. A university lab has scheduled lab image rebuilds and student onboarding after the release.
**Wants:** To see the 22 April marked as missed and 29 April as the new date, with the lab dates that depend on it shifting.

### 2045 · An early target date and a target date
Fedora publishes an "early target" and a later "target" for the same release. A blogger writes "Fedora is out on the early date".
**Wants:** To see both dates and that the second is a fallback for the first.

### 2046 · Supported four weeks after two newer releases
Fedora N is supported until four weeks after release N+2. N+2 slips one week. A sysadmin, Ece, has an upgrade day planned for the last supported day.
**Wants:** To see her last supported day move with N+2's release, and to be told that it moved.

### 2047 · Roadmap column "H2"
A vendor's public roadmap lists a feature as "H2 2026". A customer asks support if it lands before their 1 November go-live. There is no more detail.
**Wants:** To see H2 as a range from 1 July to 31 December, that 1 November falls inside it, and no invented precision.

### 2048 · Now, Next, Later
A roadmap has three lists without dates: Now, Next, Later. A partner asks what "Next" means in calendar terms and the product manager says about a quarter.
**Wants:** To have order kept as order, and to see the manager's "about a quarter" as an estimate held by her.

### 2049 · A roadmap item that moves from Q3 to Q4
A vendor's roadmap shows "Q3" for single sign-on. On 14 September it changes to "Q4". Customer Halden Energy has a rollout of 400 seats scheduled for October.
**Wants:** To see the change, the earlier value, and the customers whose dates depended on it.

### 2050 · A launch event date that everything hangs on
Nimbus announces a keynote for Tuesday 13 October at 10:00 Pacific. Partners prepare press embargoes for that minute. The event is moved by a day.
**Wants:** To see all embargo times move together and be told in each partner's own timezone.

### 2051 · An AGM fixed by bylaw
Anadolu Kooperatif's bylaws require an annual general meeting within four months of the fiscal year end (31 December). Notice must be sent 21 days ahead.
**Wants:** To see the latest possible meeting date (30 April) and the last day to send notice (9 April), and to be warned as it nears.

### 2052 · A company delays its earnings
Halcyon Media announced 4 November for Q3 results and on 2 November delays it to 18 November for an accounting review. Analysts had pre-booked calls.
**Wants:** To see the postponement, its reason where given, and every dependent call and quiet period start date shift.

### 2053 · The quiet period follows the earnings date
Zora Cloud's quiet period begins two weeks before earnings. The earnings date moves from 5 November to 12 November. The marketing team had a webinar on 30 October that was outside the old quiet period.
**Wants:** To see the webinar is now inside the quiet period only if the start moves with the earnings date, and to see which is true.

### 2054 · A shareholder letter that promises a date
A shareholder letter says "we expect to ship v3 in early 2027". The product calendar has 15 March. The investor relations person is asked to reconcile them.
**Wants:** To see that "early 2027" and 15 March are both consistent, and that the letter's wording is the looser one.

### 2055 · Forward-looking statements
An investor deck says a product "is planned for Q2, subject to change". A press article turns this into "will ship in Q2".
**Wants:** To have the original statement's level of certainty stay attached to the date wherever it is shown.

### 2056 · An endoflife.date entry with no date
endoflife.date lists a release with "eol: true" and no date, and another with "eol: false". A compliance script expects a date on all.
**Wants:** To see "already ended, date unknown" and "not ended, no date announced" as different things from each other.

### 2057 · Aggregator lags the project
Ubuntu announces an extension of a support period on Monday. endoflife.date is updated on Thursday. On Tuesday an auditor's report generated from the aggregator says the release is out of support.
**Wants:** To see which source the report's date came from and when that source last agreed with the project.

### 2058 · Same version, different first-release day
Node.js 20's first release appears as 17 April 2023 on nodejs.org and 18 April on an aggregator. A licence contract counts from "first release".
**Wants:** To see both dates with their sources and the reason they might differ.

### 2059 · A calendar subscription that changes under you
Lucía subscribes her phone calendar to a project's release feed. The project moves an EOL from 30 June to 31 December. Her phone shows the new date without notice, and she had already told her manager.
**Wants:** To be told the date moved and by how much.

### 2060 · Publish some dates and not others
A small company shares its release plan with two big customers. It shows customer A the March date and customer B only "H1", since B is a competitor's supplier.
**Wants:** For each customer to see only what they were meant to see, and for both to be consistent with the real plan.

### 2061 · An organisation with its own calendar for a shared product
The city council of Vale runs Debian for its offices and runs its own freeze from 1 to 15 December for the municipal elections. Debian's security updates keep arriving during it.
**Wants:** To see upstream events that land inside its own freeze and which ones it has decided to take.

### 2062 · A nine-month interim release used by a long project
A research group's three-year project starts on Ubuntu 25.10 (nine months of updates) and their grant ends in 2028. Each year a system administrator needs to know what they are on.
**Wants:** To see, for the three years, the sequence of releases they must move through and the dates each one leaves support.

### 2063 · A slipped hotfix window before a quiet period
A vendor's patch for a critical bug slips from 27 October to 3 November. Earnings is 5 November with quiet period from 22 October. Customers ask for a public statement on the fix.
**Wants:** To see which statements are allowed on which days, given the fix date has moved.

### 2064 · Deprecation announced with a date in the future
Node.js announces a feature removal in the release after 26 and gives no date; the following release is expected in October. Developer Chen tracks the removal.
**Wants:** To see the removal as "in the release after 26", with the expected month next to it and marked as estimated.

## Stock exchanges and financial markets

### 2065 · A national day of mourning closes the exchange and moves settlement and the dividend
Halden Foods declared a dividend with record date Friday 9 January and payment Friday 16 January. On Tuesday 6 January a national day of mourning is proclaimed for Thursday 8 January and the exchange announces it will be closed. A trade made Wednesday 7 January that would have settled Thursday now settles Friday, the ex-dividend date the broker's app shows is still Thursday, and the payment date printed on last month's statement is unchanged.
**Wants:** Every date tied to the trade and to the dividend to show where it really lands after the closure, and to see which ones moved and which stayed.

### 2066 · One stock, two listings, a holiday on only one of them
Norvik Energy is listed in Frankfurt and in Toronto. Monday 18 May is a holiday in Toronto and a normal day in Frankfurt. Marta sells her Frankfurt shares that day and wants to buy the Toronto line with the proceeds.
**Wants:** To see that the Toronto line cannot be traded that day, that the Frankfurt sale still settles by its own count, and when the cash is actually usable for the purchase.

### 2067 · Coupon date on a Saturday under three conventions
A bond pays on 31 October 2026, a Saturday. Fund A's terms say following, fund B's say modified following, fund C's say preceding, and all three hold the same bond.
**Wants:** Each fund to see its own payment date (Monday 2 November, Friday 30 October, Friday 30 October), and to see that the next period's start is still counted from 31 October where its terms say so.

### 2068 · Earnings date estimated, then confirmed
A data page shows "Corvane Ltd. Q3 results: about 22 October (estimated)". On 30 September the company announces Thursday 29 October, after the close. Dayo has a reminder, a planned position review and a notice from his employer's compliance team that all keyed to 22 October.
**Wants:** The estimate to turn into the confirmed date, with everything that hung off 22 October showing the new date and the fact that it was once an estimate.

### 2069 · A halt in the middle of the closing auction
At 16:29 on Wednesday the closing auction on Pellam Bank starts on the London market and at 16:31 a volatility halt hits during the call phase. The bank's price is needed by the index provider for the end-of-day level and by a fund for its 17:00 valuation.
**Wants:** To know when the auction will finish, that the close is not yet known, and what the valuation is waiting on.

### 2070 · A leap year inside a day count
A bond pays 4% on 1,000,000 with an accrual period from 31 August 2027 to 28 February 2028 and again from 28 February 2028 to 31 August 2028, and 2028 has 29 February. One analyst counts actual days over 365, another over 360, a third counts 30/360.
**Wants:** Each interest figure to come out as its own convention says, and the extra day to be visible where it changes the answer.

### 2071 · New York and London on different clock-change dates
In 2026 the United States changes clocks on 8 March and the United Kingdom on 29 March. Ines runs a trading desk in London who watches the hours when both New York and London markets are open. In February the shared window is 14:30 to 16:30 London time, and she books a weekly 15:00 call with the New York team.
**Wants:** On the three weeks between 8 and 29 March to see the window as 13:30 to 16:30 London time, and her 15:00 call still to be at a time both sides expect.

### 2072 · T+1 in New York against T+2 in an old fund contract
A fund's rulebook says cash from a share sale is available "two business days after trade". Since the US moved to T+1 in May 2024 the sale of Kestrel Corp. shares on Monday settles Tuesday.
**Wants:** To see both when the cash arrives and when the rulebook allows it to be used, and where the two differ.

### 2073 · The ex-dividend date one day before the record date, then the same day
Tarn Utilities has a record date of Thursday 12 June. In 2023 the ex-date was Wednesday 11 June by the rule "one business day before record". In 2024 the same rule gives Thursday 12 June. A long-time holder, Osman, uses last year's habit and buys on Wednesday.
**Wants:** The ex-date to show as Thursday and to see that buying on Wednesday still qualifies.

### 2074 · The record date is fixed, a Friday holiday moves the ex-date
Company Vaal Rail sets a record date of Monday 6 July 2026. Friday 3 July is a market holiday in the US. Under the old two-day cycle the ex-date would count back two business days.
**Wants:** The ex-date to be counted in business days of the exchange, skipping the holiday, and to show the day before.

### 2075 · Good Friday closes some markets and not others
On Friday 3 April 2026 New York, London and Frankfurt are shut and Tokyo is open, and some US bond desks are asked to be open for the morning. Lena holds a Tokyo-listed stock and a US treasury bill.
**Wants:** To see which of her positions can trade that day and which cannot, and for how long a US jobs release scheduled that morning matters.

### 2076 · An unscheduled market closure and an option expiry that falls in it
Options on Rydell Motors expire Friday 20 March, and a storm closes the exchange that day. Rafael holds a call that would have been worth 3.20 per share at the previous close.
**Wants:** To know what the expiry date became and what the expiry price is, before he decides whether to act.

### 2077 · The third Friday is a holiday
The third Friday of June 2027 is 18 June, which the exchange observes as Juneteenth, so the standard monthly options on Selwyn plc, which normally expire on the third Friday, are set to expire on Thursday 17 June. Tomas had scheduled a review for "expiry Friday".
**Wants:** The expiry to appear on the Thursday, and his review to sit against the real expiry.

### 2078 · Quad witching in September
On Friday 18 September 2026 stock index futures, index options and single-stock options all expire together and an index also rebalances after the close. Priya's fund has an order that must be done "before the big day".
**Wants:** To see a single day carrying all of these events, in their order within the day, and her order's deadline against them.

### 2079 · A front-month future and the day traders roll
Ferro Index futures for December end on 18 December 2026. Sana's rulebook says to roll positions 8 days before the last trading day, and the exchange has its own first notice day on a different date.
**Wants:** To see her roll date, the exchange's dates, and which comes first, counted on the exchange's own days.

### 2080 · Lock-up that ends "after the first earnings"
Brightwell Robotics listed on 14 January with a 180-day lock-up, and a term saying early release happens two trading days after the first earnings report if the stock has closed above the IPO price for 10 of 15 days. The first report is confirmed for Tuesday 12 May.
**Wants:** The employees to see a possible early date and a fixed latest date, and which of them is known so far.

### 2081 · An insider window that follows a moved earnings date
Company policy at Marlowe Pharma says the window is shut from 14 days before quarter end until the second trading day after results. Results were expected Thursday 22 October and are moved to Thursday 5 November. Halima wants to sell shares to pay a tax bill due 1 November.
**Wants:** To see her window open and closing dates against the new results date and her tax deadline.

### 2082 · An annual meeting with a notice period
Duran Holding must give 21 days' notice for its meeting, votes are counted for holders on a record date, and the dividend is only paid after approval. The board decides on 20 March that the meeting is Tuesday 21 April.
**Wants:** To see the latest day notice had to go out, the record date, and the payment date that depends on the vote.

### 2083 · A rate decision week with a two-day meeting
The US central bank meets Tuesday 15 and Wednesday 16 September 2026 and publishes projections. Kaan is asked "when is the decision" by his manager and his calendar says Tuesday.
**Wants:** To see the meeting as two days with the decision on the second, and the minutes about three weeks later.

### 2084 · A meeting date that is tentative until confirmed
A central bank's calendar for 2028 lists a January meeting that it says is tentative until confirmed at the meeting before it. A bank in Ankara planned a hedge around that date.
**Wants:** The date to be shown as not yet firm, and to be told when it turns firm.

### 2085 · Fewer rate meetings in a year than the last
A central bank moved from twelve meetings a year to eight. Berna has a financing contract whose interest resets "at the first meeting of each quarter".
**Wants:** The resets to follow the new calendar and to see which quarters no longer have a meeting at the same point.

### 2086 · A data release delayed by a government shutdown
An employment report was set for the first Friday of October and is postponed indefinitely. Yusuf has bets and hedges timed to that release.
**Wants:** To see the release as undated, and for the things depending on it to stay ordered after it without a date.

### 2087 · A figure released, then revised
GDP for the second quarter is released on 30 July, revised on 27 August, and revised again in September. A model built by Ilse uses the July figure at the July date.
**Wants:** To see the three values for the same period, each with the date it became known.

### 2088 · Half-day before a religious holiday
Borsa Istanbul closes at midday on the eve of a multi-day holiday. Neslihan has an order to sell that she expected to be handled in the afternoon closing session.
**Wants:** To see the shortened day, the lost closing session, and when her order can now run.

### 2089 · A holiday bridge announced late
The government of Turkey announces the Wednesday before a holiday as an administrative leave, making a nine-day break, with three weeks' notice. Emre has settlements due in that window.
**Wants:** To see the new closed days and the settlement dates shifting, with the old ones remembered.

### 2090 · Tokyo lunch break
Tokyo trades 09:00 to 11:30 and 12:30 to 15:30. Aiko in London sends a market order at 11:45 Tokyo time.
**Wants:** To know the order waits for the afternoon session and when that begins in her own time.

### 2091 · The closing time of a market changes
Tokyo moved its close from 15:00 to 15:30 in 2024. Kenji looks at a chart of 2023 and one of 2025.
**Wants:** Each day to show the close that applied on that day.

### 2092 · The random end of an opening auction
The opening auction in London ends inside a short window after 08:00, at a moment nobody knows beforehand. Oskar's algorithm cares about the seconds.
**Wants:** To see the end as a window until it happens, and the actual time afterwards.

### 2093 · A price limit pause of five minutes
A stock rises to its upper band and stays for 15 seconds, and trading pauses for five minutes. Chiara's order to buy sits in the queue.
**Wants:** To see when trading resumes and where her order stands.

### 2094 · A market-wide halt late in the day
An index falls 7% at 15:20 New York time and trading halts 15 minutes; on another day it falls 7% at 15:30 and nothing halts. Dmitri runs two funds with different close-of-day rules.
**Wants:** To see the same drop treated differently by the clock, and each fund's cut-off against the outcome.

### 2095 · An IPO first trade and its settlement
Tulla Bio prices on Wednesday evening, opens Thursday at 11:20 after a delay, and the syndicate's paperwork says settlement is one business day after first trade.
**Wants:** The opening delay to move the settlement day if the rule counts from first trade.

### 2096 · Trade date on a global instrument
A future trades on a nearly round-the-clock schedule and the trading day begins at 17:00 Chicago time the evening before. Wen's trade at 20:00 Chicago on Monday.
**Wants:** To see it belong to Tuesday's trading day for the exchange, and Monday for her own books.

### 2097 · A currency leg and a share leg with different holidays
A New York investor buys Tokyo shares with dollars on Monday 2 May. 3 to 5 May are Japanese holidays, and part of the period is a US working period.
**Wants:** To see the share delivery day and the dollar payment day separately, and whether they can be the same day.

### 2098 · A bond bought between coupon dates
Kofi buys a bond on Thursday 12 March that pays coupons each 1 June and 1 December, with settlement one business day later, on a 30/360 basis.
**Wants:** The interest owed to the seller to be computed from the last coupon to his settlement date.

### 2099 · An end-of-month bond
A bond matures 28 February 2027 and pays semi-annually, and is issued on the last day of the month. Its August coupon.
**Wants:** The coupon to stay at month end, at 31 August and 28 February, and not drift to the 28th.

### 2100 · Fiscal year end for a company reporting late
A company whose year ends 30 June reports the "third quarter" in April. A trader compares it with a calendar-year peer's "first quarter".
**Wants:** Each figure to show the months it covers.

### 2101 · A tax year ending on 5 April
Shares sold on 5 April count for one UK tax year and on 6 April the next. Bruno's sale order on Friday 3 April 2026 is filled late Monday 6 April.
**Wants:** To see which tax year the sale belongs to.

### 2102 · Wash sale window across year end
Ophelia sells a stock at a loss on 20 December and wants to buy it back. Her rule says not within 30 days either side.
**Wants:** To see the first day she can buy back and the window's start, across the year boundary.

### 2103 · Time stamps at different accuracy
A firm doing high-frequency trading must keep its clock within a tiny distance of UTC, and a phone-order desk in the same firm may be a second off. A regulator asks for the sequence of an order and its fills.
**Wants:** To see each event with the precision it was recorded at, and which order between the two can be trusted.

### 2104 · Tradable only after a certain event
A bond is to be issued "when-issued": trading starts before it exists and settles on the issue date, which is not yet fixed. Zeki buys some.
**Wants:** The trade to sit before the issue date, and the settlement to wait for it.

### 2105 · A late confirmation of a trade
An institution must affirm a trade by the end of the trade date. The other party's message arrives at 00:05 the next day in its own time zone, and 22:05 the same day in the sender's.
**Wants:** To see which day the message counts for under the rule.

### 2106 · A ten-day holiday at an exchange
Chinese markets close for the lunar new year week. Hui holds a cross-border share with dividends due in the week.
**Wants:** To see the dividend and its payment landing after the reopening, and her cash flow shown against that.

### 2107 · The same holiday on two calendars with a different date
Hong Kong and Shanghai both close for a festival, but Hong Kong adds a day for a typhoon on Tuesday morning after the signal is raised at 07:00.
**Wants:** To see the part-day closure and its effect on the morning session.

### 2108 · An extended trading session on one venue only
Nasdaq allows trades until 20:00 and a fund's rule allows trades only during the main session. A block trades at 18:10.
**Wants:** To see it as outside the main session and inside the late session, and when it counts as a day's close.

### 2109 · A price at the close taken from an auction
A fund's valuation uses the official close of Delta Steel, computed after 16:35 London time, but a compliance report at 16:40 wants the last traded price.
**Wants:** Each report to show which kind of close it used and when it became known.

### 2110 · Rebalance announced days before it is effective
An index provider announces on Friday 4 September that Orlin Ltd. will enter the index at the close on Friday 18 September. Funds tracking it must buy.
**Wants:** To see both the announcement and the effective moment, and the days in between.

### 2111 · A stock split's effect on dates
A 4-for-1 split has an ex-date of Monday 8 June and a payable date of Friday 5 June, the earlier date with new shares coming before the price change.
**Wants:** The order of these to be shown as it is, and Selin's order for the Friday to be checked against it.

### 2112 · Settlement fail and the day after
Nikolai's broker fails to deliver on the intended day. Fines and interest accrue for each further day, and the extra days are counted in business days.
**Wants:** To see the intended day, the actual day, and what has accrued between.

### 2113 · A coupon date which is a holiday in the currency but not the venue
A euro bond traded in London has a coupon date on a day when the payment system for euros is shut but the London market is open.
**Wants:** The payment to be on the next euro business day, and the trader in London to know the market is open but the payment is not.

### 2114 · A tender offer with a deadline in a different zone
An offer closes at 17:00 New York time on 12 November, and a holder in Sydney sees it as 09:00 on 13 November.
**Wants:** The deadline to show in her own time and to be the same instant.

### 2115 · Half a year's interest across a 29 February
A money-market deposit of 5,000,000 from 15 September 2027 to 15 March 2028 accrues on ACT/360.
**Wants:** The count to include 29 February, and the interest to be stated for that count.

### 2116 · A trading halt that outlasts the day
A company's shares are halted at 14:00 pending news, and are still halted at close. Their price for a fund's month-end valuation is needed that night.
**Wants:** The last price to show as stale, since when, and when trading is expected to resume, if known.

### 2117 · An exchange changes its calendar for next year
The exchange announces in June that 24 December 2027 is a holiday and previously it was an early close. Ludmila's plans for that week were made in March.
**Wants:** The old plans to show the new status, and her March expectations to be remembered.

### 2118 · Days counted for a notice period with two holiday sets
A loan agreement says notice must be given "five business days before" the payment, in both London and New York, and 27 May is a UK bank holiday and 25 May a US one.
**Wants:** The last day for notice to be counted by both calendars.

### 2119 · A person's plan against a market's day
Ayla wants to sell shares "on the first day after my bonus arrives". The bonus is paid on the 25th, a Saturday.
**Wants:** To see the bonus as arriving on the Friday or the Monday as her company's rule states, and the sale day following it.

### 2120 · A cross-listed dividend in two currencies
A company pays its dividend on the same day in two countries, but the currency payment on one side is a day later because of a holiday in the currency's zone.
**Wants:** Each holder to see the day the cash reaches them.

### 2121 · A yearly event that the calendar moves
Russell-style yearly reconstitution is on the last Friday of June, and in a year when the exchange closes that Friday it moves to Thursday. Odile's funds prepared trades for Friday.
**Wants:** The prepared trades to show the new day and for the earlier prepared day to be recorded as gone.

## Crypto and block time

### 2122 · A halving date predicted months ahead drifts by days
Mira writes "Bitcoin halving party" into her calendar in January 2028 for 19 April 2028, because a countdown site says block 1,050,000 lands then. By March the site says 22 April; by April it says 24 April, and on the night the block arrives at 02:10 UTC on 25 April. Her twenty friends booked flights for the first date. The party is still tied to the block, not the date.
**Wants:** To see the party follow the block as the estimate moves, to see how sure the date is at each point, and to see her friends told when the day changes.

### 2123 · A meeting scheduled "at block N"
A dev group agrees to meet "at block 900,000" on Bitcoin, to start a call. On Monday the block is 3,100 blocks away, roughly 21 to 23 days. Nobody knows the day. Ayşe needs to know whether to keep her Friday free.
**Wants:** To see the meeting on her calendar as coming around the third week of the month, with the day narrowing as the block gets nearer.

### 2124 · A reorg undoes an event already shown as done
Deniz's deposit of 0.5 BTC showed as "arrived" at block 861,204 at 14:02. Her shop shipped a parcel at 14:05. At 14:19 a two-block reorg replaces 861,204 and the transaction sits in 861,206 instead, 17 minutes later than she saw. Her shipping list says "paid 14:02".
**Wants:** To see that the payment moved and by how much, and to see that the parcel step now sits after a different time, without her having to work it out.

### 2125 · The same deposit, three confirmation depths
An exchange credits deposits after 3 confirmations, Deniz's wallet marks it "final" at 6, and her accountant only counts it at 12. The transfer is at block 861,204. At 14:40 the exchange says done, the wallet says pending, and the accountant's sheet says not yet.
**Wants:** To see one transfer with three different "done" moments, each named for who holds it.

### 2126 · Vesting cliff in one timezone vs the chain
Kerem joined a project on 1 March 2026 at 09:00 in Istanbul (UTC+3). His grant has a 12-month cliff. The contract counts seconds from deployment at 1 March 2026 06:00:00 UTC, so the cliff opens 1 March 2027 06:00:00 UTC, which is 09:00 Istanbul. The HR sheet says "cliff: 1 March 2027", and his colleague in Los Angeles sees the unlock on 28 February 2027 at 22:00.
**Wants:** To see one cliff moment that reads as the right local day for each of them, and to see that it is the same moment.

### 2127 · Linear unlock counted per block, not per day
A token has a 36-month linear unlock after the cliff, paid per block. Users read "1/36 per month" but block time drifts, so the month-end amount is 2.7% off from the promised amount in a slow month.
**Wants:** To see the monthly amount as a range, and the calendar date it reaches each share, as an estimate that gets tighter.

### 2128 · Token unlock calendar vs contract reality
A public unlock calendar lists "Team: 15 Nov 2026, 12.0M tokens". The contract's first release is at block 21,400,000 on Ethereum, which the calendar site turned into 15 Nov 00:00 UTC. In practice the block lands at 15 Nov 07:41 UTC. Traders in Tokyo already treated 09:00 JST as the moment.
**Wants:** To see the published date and the real moment side by side, with the gap visible.

### 2129 · Unbonding, a vote and the tax-year end collide
Lena unbonds 4,000 ATOM on 12 December 2026 on a chain with a 21-day period, so the tokens free up on 2 January 2027. A governance vote on the same chain closes 30 December; unbonding tokens carry no vote, so she loses the vote. Her tax year (calendar) ends 31 December, and she planned to sell before then to book a loss.
**Wants:** To see all three on one view, and to see the sale can only happen in the next tax year.

### 2130 · Unbonding period on two chains
Emre has stake on a chain with a 21-day unbonding period and another with 14 days. He unbonds both on 3 March. His rent is due 20 March.
**Wants:** To see the 14-day money arrive on 17 March and the 21-day money on 24 March, and to see he is short on the 20th.

### 2131 · Unbonding is slashable while it waits
Ada unbonds on 1 June. On 10 June the validator is found to have double-signed a block from 25 May. Her tokens, already "leaving", lose 5%.
**Wants:** To see that the leaving date still stands, but the amount she expects on 22 June has changed and why.

### 2132 · Redelegation while another wait is running
Can moves stake from validator A to B on 5 May while a 21-day wait on part of it is still running from 20 April. The two waits end on 11 May and 26 May.
**Wants:** To see which tokens are free on which day, without adding up the dates himself.

### 2133 · Exit queue with no known end
Selin exits a validator on Ethereum on a day when the queue is 9 days long. On day 3 the queue jumps to 30 days after a mass exit. Her planned house payment on day 12 is now in doubt.
**Wants:** To see her funds' date as a range that widens and narrows, with the last time it was updated.

### 2134 · Governance vote counted in blocks
A DAO proposal opens at block 19,000,000 and the vote lasts 19,700 blocks, "about three days". A holder in Sydney plans to vote after work on day 3. It closes at 07:12 local time on day 3 because blocks came fast.
**Wants:** To see the close as a time with a range, and a heads-up that it may end earlier than the "three days" said.

### 2135 · Vote passes, then a two-day delay before it runs
A vote ends Thursday 15:00 UTC and passes. A two-day delay follows, and then the change is executed. A borrower expects the rate change on Saturday; execution is available from Saturday 15:00, but nobody presses the button until Monday 09:40.
**Wants:** To see the vote end, the earliest execution, and the actual execution as three separate moments.

### 2136 · Proposal expires if not executed
The same delay ends Saturday 15:00, and the proposal expires 14 days later. On day 15 nobody had executed it. The community assumed the vote itself was the change.
**Wants:** To see that the change was still not done and the window that had been open to make it happen.

### 2137 · Vote in days on one chain, blocks on another
A working group coordinates two treasuries: one chain runs a 14-day vote counted in seconds, the other a 100,800-block vote. Both open on 1 October. The group wants to announce results together.
**Wants:** To see one closing day for the announcement, with the second chain's shown as a range.

### 2138 · Airdrop snapshot height announced in advance
A project says the airdrop counts balances at block 20,500,000 on Ethereum, about 19 days ahead. On 26 October at 03:00 UTC the block is 6 hours away. Farid moves his tokens from an exchange to his own wallet to be counted.
**Wants:** To see the snapshot as an approaching moment with a range, and his own move placed before it.

### 2139 · Snapshot announced after it happened
A protocol posts on 2 February that the snapshot was taken at block 19,100,000, mined on 14 January. Users who sold on 20 January are excluded, and those who sold on 10 January are included.
**Wants:** To see the past moment as a fixed point, and each user's own actions placed before or after it.

### 2140 · Snapshot block replaced by a reorg
Snapshot block 20,500,000 is orphaned. The winning block at the same height contains a transfer the first one did not. Gül's balance is different in the two.
**Wants:** To see which of the two blocks counts, and to see the earlier answer she was shown marked as replaced.

### 2141 · Funding paid at 8-hour marks
Ravi holds a perpetual position on an exchange that pays funding at 00:00, 08:00 and 16:00 UTC. He closes at 07:59:58 UTC on 5 April. He thinks he skipped the payment; the exchange's clock says 08:00:01 when the order was processed.
**Wants:** To see whether the payment landed on his position, and the clock that was used to decide.

### 2142 · Funding at 8 hours on one venue and 1 hour on another
Nina hedges a spot position with two perpetuals: one on a venue that pays every 8 hours and one that pays hourly. Over one day she sees 3 payments on one and 24 on the other, in different zones.
**Wants:** To see all 27 payments on one timeline for the day, each with its venue.

### 2143 · A 24/7 market meets an exchange holiday
A tokenised share trades all weekend on a chain. The real exchange that lists the share is shut for a public holiday on Monday 25 May. The token price moves 6% while the underlying market is closed.
**Wants:** To see the weekend and holiday as a time when one price is live and the other is closed.

### 2144 · Oracle price is legitimately an hour old
A lending market reads an ETH/USD feed that updates every 3,600 seconds or on a 0.5% move. At 15:00:00 the last update was 14:03:41, price flat. Toby's loan is safe at that price but a spot exchange shows a 0.4% drop.
**Wants:** To see the price along with when it was last updated and when it will be at latest.

### 2145 · Oracle stops updating
The same feed shows a last update at 09:15 UTC, and at 13:30 it has not moved. The heartbeat is one hour. A bot keeps trading on it.
**Wants:** To see that the price is stale and by how long, before acting.

### 2146 · Daily candle closes at 00:00 UTC, not local midnight
Ece in Istanbul (UTC+3) reads "Monday close" on a chart at 03:00 her time on Tuesday. Her own journal treats Monday as ending at 00:00 local. The exchange's Monday candle covers 03:00 Monday to 03:00 Tuesday for her.
**Wants:** To see her Monday and the exchange's Monday as two different spans, and which trades fall in each.

### 2147 · A venue that closes its day in UTC+8
A trader compares a UTC candle with a Singapore venue's candle, which closes at 16:00 UTC. The "daily high" differs by 3%.
**Wants:** To see each candle's start and end shown in the same zone.

### 2148 · Tax year by date vs by block
A sale is confirmed at block 21,000,000 at 23:58 UTC on 31 December 2026. The taxpayer, in New York, sees 18:58 on 31 December; someone in Auckland sees 12:58 on 1 January 2027.
**Wants:** To see which tax year the sale falls in for each of them.

### 2149 · Staking reward: received, claimed, or sold
Vera earns rewards every epoch from 1 to 31 December. She claims on 3 January and sells on 15 February. Her advisor says the income belongs to whichever date counts in her country.
**Wants:** To see the three dates on one line and to switch which one counts.

### 2150 · A timestamp slightly wrong but valid
A Bitcoin block at height 862,000 carries a timestamp 41 minutes earlier than its parent, still valid because it is above the median of the last 11. A time-lock set for 15:00 was expected to open in the next block after 15:00; a block stamped 14:52 lands at 15:12 real time.
**Wants:** To see the lock opening time as a range and not one clean instant.

### 2151 · Block stamped almost two hours ahead
A miner stamps a block 1 hour 50 minutes ahead of real time. It is accepted. A time-based contract opens early by the same amount for a moment, then following blocks carry honest times.
**Wants:** To see a marked odd point, and the events that depended on it flagged.

### 2152 · Timelock in blocks vs in 512-second units
Ozan opens a channel with a relative lock of 144 blocks (about a day) and his partner's version uses 169 units of 512 seconds (about a day). After a slow week of blocks they expire 19 hours apart.
**Wants:** To see both locks as ends of the same day, with the difference shown.

### 2153 · Absolute lock in a Unix time vs a height
A recovery transaction is locked until block 900,000 in one wallet and until Unix time 1,830,000,000 in another. Their owner wants to know which opens first.
**Wants:** To see both as dates and to see which is earlier and how sure that is.

### 2154 · Coinbase reward not spendable for 100 blocks
A miner finds block 850,010 at 10:00 and plans to pay a supplier at 12:00 with that reward. The 100-block wait ends around 3:00 the next day.
**Wants:** To see the reward available on a date that moves, and the payment marked as blocked until then.

### 2155 · Difficulty change moves the calendar
A heat wave shuts mining farms and blocks run about 7% slower for two weeks, until a retarget at block 862,848 cuts difficulty to match. The block due on 12 October lands on 14 October.
**Wants:** To see all dates tied to later blocks move together, with the reason shown.

### 2156 · Two-week estimate broken by a mining outage
A hash rate outage on 5 November slows blocks to 18 minutes for two days. A contract's expiry at block 870,000, projected for 20 November, moves out by about 2 days.
**Wants:** To see the expiry date shift, and who is affected by it.

### 2157 · Ethereum slot missed
A proposer is offline at slot 9,100,000. The slot has no block; the next block is 24 seconds after the previous one. A payment scheduled "in the next block after 12:00:00" lands at 12:00:24.
**Wants:** To see the gap explained rather than presented as a normal delay.

### 2158 · Fork on a fixed epoch, date a computed guess
A network upgrade is set for epoch 400,000. The organisers say "about 3 October at 14:31 UTC". Exchanges pause deposits an hour before, and a wallet team planned its release for the same evening in their zone.
**Wants:** To see the upgrade as a moment computed from the epoch, exact within seconds, and everyone's plans placed around it.

### 2159 · Upgrade delayed by a coordinated decision
The upgrade at epoch 400,000 is pushed to epoch 401,000 after a bug is found. Every dependent plan (exchange pauses, wallet releases, a conference talk) was set for the old moment.
**Wants:** To see every plan that was tied to the old moment, and the new date beside it.

### 2160 · Finality wait after a large transfer
Hasan sends 2,000 ETH at slot 9,200,000. It is included at once, justified about 6 minutes later, and finalized at about 12.8 minutes. His counterparty releases goods only after finality.
**Wants:** To see three steps for his transfer: included, justified, finalized, with expected times.

### 2161 · Finality stalls
Finality stops for 5 epochs after a client bug on 14 August. The chain keeps making blocks. A payments company that only counts finalized transfers holds 700 payments.
**Wants:** To see the payments waiting, how long, and what they wait for.

### 2162 · A release written as a Unix time, read as local midnight
A contract releases funds at Unix time 1,798,761,600 (1 January 2027 00:00:00 UTC). Onur reads it as midnight Istanbul, 3 hours earlier than the truth.
**Wants:** To see the release as one instant and read in his own zone.

### 2163 · Two chains, different clocks, one shared plan
A bridge moves tokens from a fast chain (0.4 s blocks) to Bitcoin-linked custody (10-minute blocks, with 6 confirmations). Ivy plans a 30-minute window on a Friday to move, swap, and move back.
**Wants:** To see her steps in order with a time range each, and the total.

### 2164 · Ordering without dates in a vesting queue
Three grants unlock "after the previous one is claimed": Ann's, then Bo's, then Cy's. No date exists. Ann claims on 5 May.
**Wants:** To see Bo's and Cy's as waiting in order, and to see the dates appear as Ann and Bo claim.

### 2165 · Wait for a multisig quorum
Four of seven signers must approve a payment. Two have signed by 9 March. Signers are in three zones and the treasury needs it by 12 March at noon UTC.
**Wants:** To see who has signed, who is still out, and the chance of making 12 March.

### 2166 · Grace window before liquidation
A loan can be repaid within 24 hours after health drops. It drops at 03:40 UTC on Sunday; the borrower is on a flight landing at 11:00 UTC Sunday and back online at 12:30.
**Wants:** To see the deadline at 03:40 Monday and the flight before it, with room left over.

### 2167 · Lock on a governance token that resets on vote
A holder locks tokens for a 4-year term for extra voting weight.. A proposal she wants to vote on closes on day 3 of week 209 of her term, after her lock ends.
**Wants:** To see her voting weight fall to zero on the date the lock ends, and the proposal's close as later than that.

### 2168 · Rewards paid every epoch on a chain with changing epoch length
A chain shortens its epoch from 24 hours to 12 hours at block 5,000,000. Rewards are per epoch. A yearly report expects 365 payments and finds 407.
**Wants:** To see the payments on real dates, and the change pointed out.

### 2169 · Local midnight and a chain's day
A game on-chain resets its daily quest at 00:00 UTC. A player in Honolulu (UTC-10) finds it resets at 14:00 in the afternoon, mid-session, and loses a streak by 30 minutes.
**Wants:** To see the reset in her own hours and a warning before it.

### 2170 · Halving and an option expiry on the same day
A trader holds options expiring the last Friday of April 2028 at 08:00 UTC. The halving estimate is 24 April, with a range of plus or minus 3 days. She wants to know whether the halving falls before her expiry.
**Wants:** To see a range for the halving beside the fixed expiry, and how likely the order is.

### 2171 · A grant scheduled by height that is quoted to a funder by date
A public fund pays a builder 20% at block 22,000,000 on Ethereum and quotes "around 8 December" in its grant letter. The block arrives 4 December. The builder's accountant needs the receipt date for a 30 November year-end.
**Wants:** To see the letter's date and the real date together, and whether the money falls before or after her year-end.

## Military and emergency operations planning

### 2172 · H-hour is set late and every offset resolves at once
The brigade's plan for Operation ARROWHEAD lists 212 tasks written as D-3 through D+2 and H-6h through H+4h: 40 movement tasks, 31 resupply tasks, 9 rehearsals, 132 reports. Nothing has a clock time. On D-4 at 1800Z the order arrives: D-day is the 14th, H-hour is 0530Z.
**Wants:** All 212 tasks show their real dates and times the moment the order is entered, with no task edited by hand and none left showing an offset.

### 2173 · H-hour slips by 2 hours
Same brigade. On D-1 at 2000Z H-hour moves from 0530Z to 0730Z because the weather advisory closes the launch site. Tasks tied to H-hour (the 0500Z aircraft check at H-30min, the 0600Z bridge closure at H+30min) are 41 in total. A sunrise briefing fixed at 0615Z, and a highway closure the civil police granted from 0400Z to 0700Z, are not tied to H-hour.
**Wants:** The 41 H-hour tasks move by 2 hours, the sunrise briefing and the highway closure stay put, and the planners see that the bridge closure, now at 0830Z, falls after the police highway closure ends at 0700Z, and it is flagged.

### 2174 · A phase ends on a condition, not a date
Phase 2 of a flood relief operation is "Secure the causeway", planned for D+1 to D+3. It ends when the engineers report the causeway carries 40-tonne loads, not on D+3. On D+3 the report has not arrived; the load test is scheduled for D+4 0900Z. Phase 3 convoys (12 trucks, 3 waves) were meant to start D+3 1200Z.
**Wants:** Phase 3 is shown as not started, its 3 waves show as waiting on the load report, and the planners see the last time the report could arrive before the D+5 fuel resupply goes stale.

### 2175 · A phase with both a condition and a latest time
The evacuation phase of an embassy drawdown ends when all 86 listed personnel are confirmed at the assembly point, or at D+2 1800Z, whichever comes first. On D+2 at 1500Z 79 are confirmed.
**Wants:** The phase is shown as still open with 7 outstanding, and at 1800Z it ends regardless, with the 7 named as unfinished.

### 2176 · A branch plan is activated
Main plan: 2nd Company crosses the river at the east ford at H+2h. Branch B: cross at the north bridge at H+3h30min, prepared in advance with its own convoy timetable and rehearsal. At H+1h15min the engineer reports the ford is running above the limit set in the decision point.
**Wants:** The east-ford crossing and its dependent tasks are cancelled, the north-bridge timetable becomes the live one, and everything Branch B needs (bridge guard at H+3h, traffic control at H+3h15min) is already present with times.

### 2177 · A branch is prepared but never used
Three branches were prepared for the airfield seizure, each with 14 tasks. None of the conditions triggered by H+6h, the last moment any of them could be chosen.
**Wants:** After H+6h the three branches are shown as expired unused, and their 42 tasks do not appear on anyone's schedule.

### 2178 · A synchronization row depends on another unit
In the synchronization matrix, row "Engineer Platoon: breach the wire" cannot start until row "Signals Platoon: jam-free radio net up" has been running for 10 minutes. Signals is planned H-20min to H+4h; engineers H-10min. Signals reports at H-30min that the net will be up at H-5min.
**Wants:** Engineers are shown as unable to start at H-10min, their earliest start becomes H+5min, and the platoons that depend on the engineers (2 rifle platoons at H+15min) are marked as affected.

### 2179 · A sequel waits on the outcome
The sequel "Exploit north" follows Phase 2 and has 3 versions: if Phase 2 ends fully, if it ends partially (under 60 per cent of objectives), or if it fails. Each version has different unit timings and a different day count.
**Wants:** When Phase 2 ends the matching sequel, and only that one, becomes the following plan, with its timings counted from the moment Phase 2 actually ended.

### 2180 · The ATO cycle overlaps itself
Air Operations Center works three orders at once: ATO Delta executing (day D), ATO Echo being produced (for D+1, due for release D 1200Z), ATO Foxtrot being planned (for D+2, guidance meeting D 0800Z). Each order's stages are written as hours before its own start (execution start 0400Z). A late weather report at D 1000Z affects Foxtrot's planning and Echo's production.
**Wants:** Planners can see all three orders in one view with their stage at the current time, and see which order each late input belongs to.

### 2181 · The ATO cycle when the day start shifts
The air commander moves the ATO day start from 0400Z to 0600Z beginning with order Golf. Orders Echo and Foxtrot keep 0400Z. On the changeover day Foxtrot runs a one-off 26-hour executing day (ATOs normally cover a fixed 24-hour period) and Golf's planning stages count back from 0600Z.
**Wants:** Planners see Foxtrot ending at 0600Z and Golf starting the same instant with no gap or overlap of tasked sorties, and the stage deadlines for Golf are computed from the new start.

### 2182 · A battle-rhythm meeting clashes across time zones
The combined operations update is set for 1400Z daily. The US headquarters at UTC-5 sees it at 0900, the coalition headquarters at UTC+3 at 1700, and the liaison cell at UTC+9 at 2300. In spring the US switches to daylight time and the local hour moves to 1000 while the others do not. The UTC+9 staff already have a fixed shift end at 2200 local.
**Wants:** Each headquarters sees the meeting in its own local time, the UTC+9 cell is shown a clash with its shift end, and the daylight change on the US side is noticed before it happens.

### 2183 · A meeting output feeds the next meeting
The 0800Z logistics review produces the sustainment report needed by the 1000Z commander's update briefing, which produces the guidance needed by the 1300Z planning group. The logistics review runs 40 minutes over.
**Wants:** The commander's update and the planning group are shown as at risk, with the latest time the sustainment report could arrive for each.

### 2184 · An emergency operational period handover
Wildfire incident, 12-hour periods: Day shift 0600 to 1800, Night shift 1800 to 0600. Night shift's Incident Action Plan was prepared during day shift and briefed at 1730. At 1745 a crew of 20 reports being stuck at Division C. The night Operations Section Chief takes over at 1800.
**Wants:** The night plan carries what was open at handover (the crew at Division C, 3 unfinished tasks), the day shift's owners are recorded as the previous holders, and the night chief sees both the planned and the added tasks.

### 2185 · The next operational period is planned during the current one
During Period 3 (0600-1800) the planning meeting for Period 4 is at 1000, the plan is approved at 1300 and briefed at 1730. The Period 3 objective "contain the north flank by 1500" slips to 1900.
**Wants:** Planners see that Period 4 begins with the north flank not contained and that the plan approved at 1300 assumed it would be.

### 2186 · A period changes length
A hazmat incident runs 12-hour periods. After the second period the incident commander shortens periods to 4 hours because conditions change quickly. Tasks planned across the old boundary at 1800 (5 of them) now straddle two new periods.
**Wants:** The 5 tasks stay whole, are shown across the new boundaries, and the plan for each new period lists them without duplication.

### 2187 · A schedule pattern must not reveal intent
A convoy company delivers ordinary supplies to the border depot every Tuesday at 0600. The planned build-up requires a surge delivery of 4 times the usual load in the week before D-day, and the regular pattern is a cover. The public timetable shows only the regular pattern; the real plan is D-7 to D-1.
**Wants:** The people who need the real times see them, everyone else sees the ordinary Tuesday pattern, and nobody without permission can tell from the schedule that a surge exists.

### 2188 · A relative plan shared without the date
The higher headquarters sends subordinates a warning order with events at D-5, D-2, H-3h and H+1h, but no D-day. The 4 subordinate units start preparing.
**Wants:** Each subordinate sees its own ordered timeline and can tell how many days of preparation it has at least, without learning the calendar date.

### 2189 · Two allied servers negotiate a shared time window
Nation A wants the coastal range for a rehearsal for 6 hours in D-3 to D-1, Nation B wants it for 4 hours in the same days. Neither will reveal its other activities or why it needs the range. They must agree on non-overlapping windows.
**Wants:** Each side learns the windows it can use that do not clash with the other side's, and neither learns anything about the other's remaining schedule beyond what the agreed window implies.

### 2190 · A negotiated window with a refusal
Same range. Nation B's air unit is fully booked on D-2 but will not say so; it answers only "not available". Nation A asks for D-2 twice and is refused twice.
**Wants:** Nation A sees D-2 as unavailable and cannot tell whether the reason is a rehearsal, maintenance, or a holiday.

### 2191 · Airspace block reserved for a time
The Airspace Control Order gives Block 14 (10,000 to 20,000 feet over Grid Sector North) to the refuelling flights from 0700Z to 0930Z and to the transport flights from 0930Z to 1100Z. The transports launch 20 minutes late.
**Wants:** The overlap of 20 minutes in Block 14 is flagged before it happens, together with the units and times involved.

### 2192 · Shared road, exclusive slots
The single supply road has traffic control slots: Brigade A 0400-0600, Brigade B 0600-0800, Brigade C 0800-1000. Brigade A's 60-vehicle convoy has a breakdown and clears the checkpoint at 0620.
**Wants:** Brigade B's slot is shown as pushed to start at 0620 or its convoy told to wait, Brigade C's slot is shown as affected if B's convoy takes its full 2 hours.

### 2193 · Backward planning from a fixed time
The airborne assault must land at 0530Z. Loading takes 90 minutes, the flight 3 hours 20 minutes, the taxi and check 40 minutes, the final briefing 30 minutes. The transport wing is at 40 minutes' notice.
**Wants:** The planners see the latest start of each step working back from 0530Z and the resulting latest time to begin the briefing, with the notice period included.

### 2194 · Backward planning shows no room
Same assault. The assault must land at 0530Z but the loading crew, delayed by a previous mission, is available only from 0130Z.
**Wants:** The shortfall is visible: the steps need to start by 0100Z, and there is a 30-minute gap that no step can absorb.

### 2195 · One-third for us, two-thirds for them
The division receives the mission at D-9 0800Z with execution at H-hour on D+0 0600Z. That is 214 hours. The division should use about 71 hours and leave about 143 for its 3 brigades, who in turn keep two thirds for their battalions. The division staff finish planning at D-6 1400Z, 78 hours in, which is 7 hours over.
**Wants:** The overrun is shown as taken from the brigades, and the brigades' remaining time and their own one-third limit are recalculated.

### 2196 · Parallel planning via warning order
The division issues warning order 1 at D-9 1200Z with the mission and a rough timeline. Brigades start reconnaissance at once. The final order arrives at D-5 1400Z and moves the crossing point 5 km. Reconnaissance orders for 2 of 3 brigades had used the old crossing point.
**Wants:** Planners see which brigade tasks were made from the earlier warning order and which of those are now stale, and how much preparation time remains.

### 2197 · A rehearsal protected in the plan
Battalion rehearsal is booked for D-2 1400-1800 with 14 company commanders and the fire support officer. On D-2 1330 a higher headquarters adds a mandatory 90-minute briefing at 1500.
**Wants:** The overlap is flagged on the people it involves, and the planner is shown what the rehearsal loses if it is shortened or moved to 1630.

### 2198 · Rehearsal changes the plan
The support rehearsal at D-1 1000 shows the bridge needs 45 minutes for crossing, not 25. The crossing is planned from H+1h to H+1h30min with the next unit starting at H+1h30min.
**Wants:** The next unit's start moves to H+1h50min or the conflict is flagged, and the 3 later tasks that depend on that unit's start move too.

### 2199 · Phase line reporting
Phase Line ORANGE is to be reached by 3rd Battalion at H+4h. Companies report crossing at H+3h50min (A), H+4h20min (B), H+4h05min (C). The next phase, a resupply at Phase Line ORANGE, starts once all three companies have crossed.
**Wants:** The resupply is shown as starting when the last company crosses at H+4h20min, with the 20 minute lateness recorded against company B.

### 2200 · Time on target from three places
Three reporting groups (North, East, South) each have a different travel time to a shared rendezvous: 55, 80, and 40 minutes. All must arrive at H+2h.
**Wants:** The departure times are worked out backward for each group, and if one group is delayed the arrival of the others is not moved unless asked.

### 2201 · No earlier than, no later than
Bridge crew may start work no earlier than H-2h (traffic cleared) and must finish no later than H-0h30min. The work takes 90 minutes. The traffic clearance arrives at H-1h45min.
**Wants:** The planners see the crew now has 75 minutes available for a 90 minute task, so the task cannot finish inside its window.

### 2202 · An estimate replaced by reports
The engineers estimate 10 hours to lay 8 km of pipeline. After 3 hours 1.9 km are laid.
**Wants:** The expected finish is updated from the actual pace to about 12 hours 40 minutes, and the tasks after it move accordingly.

### 2203 · A shared resource across two operations
The single heavy-lift helicopter supports Operation NORTH (lift at D+1 0800, 2 hours) and Operation SOUTH (lift at D+1 0900, 3 hours). NORTH's lift finishes at 1100 because the loads are heavier than listed.
**Wants:** The conflict with SOUTH is shown as 2 hours and both commanders see it, with the lift being the only asset involved.

### 2204 · Condition fails, task cancelled
The resupply drop at Landing Zone 3 at H+8h depends on the landing zone being reported clear by H+6h. At H+6h no report arrives.
**Wants:** The drop is shown as cancelled or moved to the alternate zone according to the plan, and everything that depended on the drop (3 platoons needing rations by H+12h) is flagged.

### 2205 · Condition fails, task moved
The ferry crossing at D+2 0700 requires the river below 3 metres. At D+2 0500 it is 3.4 metres and forecast to fall at 0.2 metres per hour.
**Wants:** The crossing is moved to the first time the forecast passes the limit, about 0730 with a margin, and the tasks after it move by the same amount.

### 2206 · A condition that becomes true again
Airfield closed by snow at 0400. The condition for reopening is "runway clear for 2 consecutive hours". The runway is reported clear at 0600, closed again at 0630, clear from 0700.
**Wants:** The reopening is shown as achievable at 0900 only, the first two-hour stretch, not at 0800.

### 2207 · Decision point with a latest useful time
Decision point 4: order the reserve forward or hold. The reserve needs 90 minutes to move, and the decision must be made by H+3h30min for the reserve to arrive by H+5h. The intelligence report about the north bridge arrives at H+3h45min.
**Wants:** The report is shown as arriving after the decision's last useful time, and the planners see the reserve cannot arrive by H+5h any more.

### 2208 · Critical information triggers a decision
The commander's critical information requirement says: "Bridge at Grid North is destroyed" triggers the change to Branch B. A report at H+1h10min says the bridge is damaged but passable.
**Wants:** The trigger is not marked as met, the report is shown next to the requirement, and the commander is told a decision is pending, not made.

### 2209 · Logistics window
Fuel resupply to the forward base is possible only in the window 0200-0500 when the road is dark and clear. The 20-truck convoy left late and reaches the base at 0530.
**Wants:** The convoy is shown as missing the window, the next window (0200 the next night) is shown, and the units that need fuel before then are flagged.

### 2210 · Days of supply run out
Battalion 2 holds 3 days of rations and water, consumption rate constant, and the next resupply is planned for D+3 0600. The operation is extended by 18 hours.
**Wants:** The planners see supplies running out about 6 hours before the resupply and the shortfall as time, not only a quantity.

### 2211 · Deployment flow relative to C-day
The force deployment lists 6 ships and 14 flights with arrival times C+1 through C+12. C-day is set at 0000Z on the 20th, but the second ship is held 3 days at the port.
**Wants:** The dependent flights (2 that need the ship's cargo at destination) are flagged, and the unit's readiness date recalculates.

### 2212 · A national holiday in the coalition
The coalition partner's national holiday falls on D+1. Its liaison office is closed, and its approval for a flight through its airspace takes 1 working day. The request is filed at D-1 1600 local.
**Wants:** The planners see the earliest approval as D+2 and the flight at D+1 0900 flagged as unapproved.

### 2213 · Zulu time and local shift
A watch officer in UTC+3 reads the order "051100Z" and sees 1400 local. The report is due at 1200Z, and their shift ends at 1500 local (1200Z).
**Wants:** Both the Zulu time and the local time are shown together, with the report and the shift end shown as the same instant.

### 2214 · Date line crossing
Two headquarters, one at UTC+12 and one at UTC-11, agree on "D-day" as the 15th. The first sees it begin 23 hours before the second.
**Wants:** The two share one instant for D-day start, and each sees the calendar date in its own place, with no confusion about which day is meant.

### 2215 · Clock change during an operation
An operation runs over the night the local clocks go back one hour. A task planned as "a 2 hour patrol starting 0030 local" sits across the change.
**Wants:** The patrol is 2 hours of real time, not 3 or 1, and its end time is shown correctly against the reports in Zulu.

### 2216 · Different H-hours by operation
The air operation's H-hour is 0500Z, the ground operation's is 0600Z (each operation has its own D-day and H-hour), the naval operation's is H-hour of the air operation plus 30 minutes. The air operation moves to 0530Z.
**Wants:** The naval operation moves with it to 0600Z and the ground operation stays at 0600Z, and the plan shows which operations moved.

### 2217 · Anchor set, then re-set
D-day is set at the 14th, then re-set to the 16th on D-6. 300 tasks were planned relative to D-day, 22 were fixed to a calendar date such as the 15th when a port is closed.
**Wants:** The 300 tasks shift by two days, the 22 remain on the 15th, and the ones now out of order are listed.

### 2218 · Cancelled because upstream cancelled
Operation is cancelled at D-2 for weather. 140 tasks remain: 90 depend only on the operation, 30 depend on it but also serve the next operation, 20 are fixed items such as leave.
**Wants:** The 90 are cancelled, the 30 stay and are shown as no longer waiting on anything, the 20 are left unchanged.

### 2219 · Handover of an unfinished task
The night watch begins the casualty-free evacuation of a village (34 of 60 residents moved) and hands over at 0600 to the day watch. The task is unfinished.
**Wants:** The day watch sees the same task with 34 done, 26 remaining, and the time already spent, not a new task.

### 2220 · Handover when plan and reality differ
The incident action plan for the day period lists shelter set-up complete by 1000. At the 0600 handover it is known to be complete only by 1300.
**Wants:** The incoming shift sees the plan's 1000 and the updated 1300 side by side, and the tasks depending on shelter (meals at 1100, registration at 1200) marked at risk.

### 2221 · Two agencies, one incident, different periods
The fire service runs 12-hour periods (0600/1800) and the medical service 8-hour (0700/1500/2300). A joint briefing is needed at each change of either.
**Wants:** All five handover times in a day appear in one timeline, with no two closer than needed, and which agency each belongs to.

### 2222 · Meeting moved, dependents shown
The planning meeting at 1000 is moved to 1130 because the fire chief is delayed. The approval at 1300 needs the plan finished 60 minutes earlier, and the briefing at 1730 needs the plan printed by 1630.
**Wants:** The planners see there is no slack left for the 1300 approval and the printing has 45 minutes of slack.

### 2223 · A window shared by several parties
The port allows one unit at a time at pier 2. Unit A wants 0600-0900, Unit B 0800-1100, Unit C 1000-1200. Each unit knows only its own request and the port's answer.
**Wants:** A schedule is agreed in which no windows overlap, each unit sees its own final window, and no unit sees another unit's request.

### 2224 · A partner reveals only that it is busy
The coalition partner's server says it is unavailable 0900-1500 on D+1, without a reason. The host's convoy needs its help for 2 hours at some point on D+1.
**Wants:** The host sees the free time from 1500 onward or before 0900, plans the 2 hours there, and does not see what fills the partner's busy time.

### 2225 · Plan changed by the partner without notice of contents
Partner moves its busy window from 0900-1500 to 1100-1700 on D+1 with the reason withheld. The host's 2 hour task was booked at 0700-0900 and 1500-1700 was not used.
**Wants:** The host sees the booking at 0700-0900 still valid, and a booking planned for 1500-1700 now in conflict.

### 2226 · Weather forecast updates a plan
Landing plan for H+2h needs cloud base above 800 feet. The forecast at D-1 says 600-1500 feet, updated at H-4h to 900-1200 feet.
**Wants:** The chance that the landing goes ahead rises after the update and the planners see which tasks are confirmed and which are still conditional.

### 2227 · Commander's guidance shortens the plan
At D-5 the commander orders D-day moved forward by 1 day. Planning for the remaining 4 days must use the 1/3 rule again: the headquarters now has 32 hours, not 48.
**Wants:** The new limits for the headquarters and each subordinate level are shown, along with the tasks that no longer fit.

### 2228 · Rest cycle inside the plan
Each of the 4 platoons must rest 6 continuous hours in any 24. The plan for D-day places all 4 in action H to H+10h.
**Wants:** The planners see when each platoon must stop by, at the latest, and the platoon that will exceed its limit first.

## Emergency planning and preparedness

### 2229 · A bag whose water expires while its owner is away
Elif in Antep packed a 72-hour bag on 3 March 2024 with six litres of bottled water, marked "replace after 12 months". On 3 March 2025 she is abroad for five weeks. The water is out of date when a tremor hits on 20 March; she never looked. Her sister Aylin, who has the spare key, does not know the bag exists.
**Wants:** To be told before the water goes out of date, and to be able to hand the check to someone who is actually present.

### 2230 · Batteries in the torch and the radio expire on different days
Mehmet's bag holds a torch with batteries bought in January 2023 and a radio with batteries bought in August 2024. He replaces them together every two years on the earlier date, so the radio's are swapped early and the torch's are fine. In 2026 he loses track and swaps neither.
**Wants:** Each item's own replacement date kept separately, with the bag's overall readiness visible at a glance.

### 2231 · A DASK policy lapses unnoticed
Hatice's earthquake insurance for her flat in Malatya ran to 14 November. The renewal reminder went to an old phone number. On 20 November she tries to sell the flat and learns the policy ended six days ago.
**Wants:** To be warned well ahead of the end date, on a channel that still reaches her, and to see that the flat is uninsured the moment it is.

### 2232 · DASK renews yearly, the building code year never changes
Kerem's block in Adana has a permit dated 1997. Its insurance is renewed every year on the same day. Nobody remembers to ask whether a building of that age was ever assessed.
**Wants:** The yearly renewal and the building's one-time facts, its permit year and any assessment, kept apart but seen together.

### 2233 · The family meeting point no longer exists
In 2019 the Yıldız family in Hatay chose a small park two streets from home as their meeting point. In 2025 the park was cleared for an apartment block. The children's written plan still names it.
**Wants:** To learn the place is gone before the day it is needed, and to be shown which family members still hold the old plan.

### 2234 · An assembly area built over
A neighbourhood's official assembly area, listed by the municipality, had a car park built on it in 2022. The residents' association only discovers it during a 2026 drill when 300 people arrive and find a locked gate.
**Wants:** A residents' plan that follows changes to the municipality's listing, and the municipality to hear when residents find a mismatch.

### 2235 · A drill cancelled three years running
A textile workshop in Bursa schedules a yearly evacuation drill in October. In 2023 production was behind, in 2024 the manager was ill, in 2025 an order was due. Sixty-two workers now include forty who have never done one.
**Wants:** To see plainly that the drill has not happened for three years, and to see who is affected.

### 2236 · A plan that assumes phones work
The Kaya family plan says: "Everyone calls Dad." After the 20 March tremor, lines are congested for two hours. The eldest, Deniz, does not know the second step, which is a note on the fridge.
**Wants:** A plan that still tells each member what to do next when calls do not connect.

### 2237 · A relative outside the region whose own plan conflicts
The Aslan family in Kahramanmaraş name their cousin Selim in Ankara as the contact outside the region. Selim's own plan says to drive to his mother in Izmir if anything happens and switch his phone off to save battery. Neither plan mentions the other.
**Wants:** To know that the contact person's own intentions do not match the role he was given.

### 2238 · A school's reunification plan vs parents' work shifts
A primary school in Adıyaman sets parent pickup at the school gate, with ID check, between 15:00 and 18:00. Twelve parents at the nearby hospital work 07:00 to 19:00 shifts and cannot leave. Their children are assigned to an aunt who lives 40 km away.
**Wants:** The school to know, before the day, who realistically can collect each child and who cannot.

### 2239 · An early warning that gives 20 seconds
A school in a city 120 km from a fault gets a 20-second alert. The teacher, Gül, knows drop-cover-hold takes five seconds but the class of 34 is in the lab on the second floor.
**Wants:** For the seconds to be enough to do what the plan says, and for the plan to say what to do with 20 seconds rather than two minutes.

### 2240 · An early warning that gives none
A town 8 km from the epicentre sits in the zone where the alert arrives after the shaking begins. The residents' plan starts with "when the alert sounds".
**Wants:** A plan that says what to do in the case the alert never comes in time.

### 2241 · The household vulnerability list
Ayşe registers with her neighbourhood headman that her father, Rıza, is bedridden and on oxygen. She wants rescuers to know. She does not want her neighbours, or a delivery company, to see it.
**Wants:** Rescuers to know about Rıza when it matters, and nobody else to know, ever.

### 2242 · Medication needs the pharmacist knows and the plan does not
Nurten takes insulin, which must stay cool. Her bag has a two-day supply from March; the pharmacy holds her actual dose changes. Her sister has a copy of the old list.
**Wants:** Her current dose and expiry dates, not last spring's, reaching the person who will help her.

### 2243 · A plan that must work with no clocks and no network
A mountain village in Tunceli has power for a few hours a day. Its plan is a laminated sheet: "After the shaking stops, count to 60, go to the school yard, wait." The mukhtar keeps a wind-up radio but nobody has a synchronised clock.
**Wants:** Steps in order that make sense without the time of day and without a connection.

### 2244 · Plan copies disagree
Three households on the same street keep three versions of the neighbourhood plan. The 2024 edition moved the water point from the mosque to the school. Two households still hold the 2021 edition.
**Wants:** Everyone to be working from the same current plan, and to know when they are not.

### 2245 · A hospital plan that names a wing that was closed
A regional hospital's disaster plan says the surgical overflow goes to the east wing. The east wing was closed for renovation in April 2025. The plan was last reviewed in 2022.
**Wants:** The plan to show it names a space that is no longer available.

### 2246 · A hospital plan's on-call list with retired staff
A hospital's surge call-out list has 84 names. Nine retired, five changed phone numbers. Nobody has phoned the list in two years.
**Wants:** To know how many on the list can actually be reached today.

### 2247 · Recovery time objective of four hours, actual of two days
A small bank branch in Mersin promises its head office it can serve customers again within four hours of a disaster. The last test, in 2022, took 46 hours because a backup was in a building that lost power too.
**Wants:** To see that the promise made and the last measured result disagree.

### 2248 · A business continuity plan that nobody has read
A logistics company's continuity plan runs to 90 pages, was signed off in 2021, and is stored in a drive that the new operations manager, Tolga, cannot open.
**Wants:** The right people to be able to reach the plan and to know how long since anyone confirmed it still applies.

### 2249 · A supplier promises restoration times that add up wrongly
A factory's plan assumes a power supplier restores in 6 hours, a courier in 12 and a component maker in 24. The factory can only restart once all three are back, so its true minimum is 24 hours, not 6.
**Wants:** The single restart time the factory can honestly promise its customers, given what its suppliers say.

### 2250 · The out-of-region contact is also in the disaster
A family in Hatay names an aunt in Iskenderun as the contact outside the region. In the 6 February 2023 earthquakes both were affected, and the aunt could not be reached either.
**Wants:** To learn, when choosing a contact, that the person shares the same hazard, and to have a second one elsewhere.

### 2251 · A contact person on holiday
The chosen contact, Cemal, is in a village without signal for two weeks in August. The family's only agreed number is his.
**Wants:** To see that the contact will be out of reach on those dates and to have someone else named for them.

### 2252 · Flooded route, dry plan
Rize residents' plan says "walk to the school on the hill". Heavy rain in August 2025 washes out the lane. The plan has no second way.
**Wants:** The plan to change when the way is closed, and everyone to hear how.

### 2253 · A building manager who left
Apartment 24 has a building emergency plan naming Mr. Doğan as floor warden. He moved out in January. Nobody replaced him. Nobody told the residents.
**Wants:** The role to show as empty and the residents to be told.

### 2254 · School drill counts as done but was a walk to the yard
A school records its yearly drill as done. The drill was announced a week ahead, was in good weather and skipped the upper floors.
**Wants:** The record to show what the drill actually covered, not only that it happened.

### 2255 · A tabletop exercise produces actions that are never done
A municipality's tabletop exercise on 12 May 2025 produced eleven follow-up actions. By 30 September, four are done, two abandoned, five without an owner.
**Wants:** To see which follow-ups are still open and who owns them, at the time of the next exercise.

### 2256 · Two plans with the same person in two places
Sevgi is named as a warden at her office in the city centre and as the pickup adult for her nephew at a school 20 km away. Both plans expect her at 15:00.
**Wants:** To learn of the double duty before the day, not on it.

### 2257 · A drill announced for one time, cancelled by rain
A city-wide drill is set for Tuesday 13:24, the moment chosen as a reminder of the second 6 February earthquake. Heavy rain moves it to Thursday; some schools have not heard.
**Wants:** Everyone involved to learn of the move, and the schools that did not hear to be identifiable.

### 2258 · Water rotates but the date on the bottle is not on the plan
A household buys a case of water in bulk on 5 May 2025. Bottles carry printed dates of 5 May 2026 and 8 September 2026 from two batches. The household plan only says "water: 12 L".
**Wants:** To know how much drinkable water is really left as time passes.

### 2259 · Canned food eaten, not replaced
The family opens the emergency tins during a five-day power cut in July. The bag is left short and the family thinks it is fine.
**Wants:** The bag's contents to reflect what was used.

### 2260 · A child grows out of the bag
Bag contents for Zeynep were packed when she was four. She is seven; shoes and clothes no longer fit, and the nappies are useless.
**Wants:** Contents that follow her age, without someone remembering to redo the list.

### 2261 · A stockpile at a shop
A village shop holds sacks of flour and water as neighbourhood reserve. The oldest date is 14 December. The shopkeeper sells what he can before then, but the reserve dips below what the village needs.
**Wants:** To keep the reserve at the level agreed while old stock is sold on time.

### 2262 · A pet in the plan
The Arslan family's plan does not mention their dog. On the day, they refuse to leave without him and the shelter does not accept animals.
**Wants:** The plan to reflect what the family will really do and what the shelter allows.

### 2263 · Documents in the bag are old copies
The bag has photocopies of ID cards, one of them for a daughter who got a new card in 2024, and a deed copy from before the sale.
**Wants:** To know that the documents in the bag are out of date.

### 2264 · Cash in the bag
A household keeps 2,000 lira in the bag from 2022. It buys much less now.
**Wants:** To see that the sum agreed then no longer covers what it was meant to.

### 2265 · A neighbour's key
Dilek holds the spare key for her elderly neighbour Halil's flat. She moved in June. Halil does not know whom to trust now.
**Wants:** For Halil to know that the key-holder has changed, and to have one again.

### 2266 · A seasonal plan
In winter, the plan says take blankets; in summer, take water. The household follows one plan all year.
**Wants:** The plan to be right for the season it is in.

### 2267 · An old assessment of a building
A 2016 engineering check found Block C acceptable under the standard then in force. The 2018 code, in force from January 2019, sets higher requirements. Residents still quote the 2016 result.
**Wants:** To see that the check predates the rule now in force.

### 2268 · Building work that changes safety
Ground-floor shop owners in a Kahramanmaraş block removed a column in 2019 to widen the shopfront. The upstairs residents' insurance has not changed.
**Wants:** Residents to learn of changes that affect all of them, not only the owner who made them.

### 2269 · Renting, not owning
Tenant Barış pays rent to a landlord in another city. DASK is the landlord's job; the contents are Barış's. Neither knows whether the other renewed.
**Wants:** Barış to know whether the building is covered and the landlord to know what the tenant has.

### 2270 · Insurance renewal while a claim is pending
A household's earthquake claim has been open since 2023. The next renewal date arrives. They do not know if renewing affects the claim.
**Wants:** Both the claim's status and the policy's dates in one place.

### 2271 · A family in two cities
The Yılmaz parents live in Gaziantep, their daughter studies in Istanbul, their son works on a ship. Each has a plan that presumes the others are at home.
**Wants:** Each plan to account for where the others really are that week.

### 2272 · A student dormitory
A dormitory in Elazığ has 400 residents whose plan lists 40 rooms per floor warden. Half the students changed rooms in September.
**Wants:** The warden lists to match the residents who actually live there now.

### 2273 · A migrant household with a different language
A Syrian family in Şanlıurfa gets the school's plan in Turkish only. The mother, Amira, cannot read the pickup instructions.
**Wants:** The plan to reach her in a form she can use.

### 2274 · Deaf resident and the siren
Ali, who is deaf, lives alone in a fourth-floor flat. Sirens and radio alerts do not reach him.
**Wants:** To be alerted in a way he can perceive, without his condition being announced to the street.

### 2275 · A shared home with two shifts
Two nurses share a flat and work opposite shifts. The household plan says "meet at the park", but one is always asleep in daytime.
**Wants:** The plan to fit both people's real hours.

### 2276 · A municipal drill and a workplace drill at the same hour
A town's 10:13 drill overlaps with the shift changeover at the local factory. The factory's own drill is planned for 10:30.
**Wants:** Both organisers to see the overlap before they run.

### 2277 · A school bus route blocked
The plan says buses take children to a safe village on the far side of a bridge. The bridge is closed for repair from September to January.
**Wants:** The plan to reflect the closure and the dates it ends.

### 2278 · Volunteers who signed up years ago
A neighbourhood list of 60 volunteer responders dates from 2021. When called in a 2026 test, 22 answered; 11 numbers were dead.
**Wants:** To know at any time how many volunteers are truly available.

### 2279 · Generator fuel
A clinic holds 200 litres for its generator. Fuel degrades over time; the clinic was supposed to swap it every six months and last did in January 2025.
**Wants:** A warning that the fuel is beyond its rotation date.

### 2280 · A radio channel nobody has tested
A village agreed a handheld-radio channel in 2022. No one has switched on the radios since. Two have dead batteries and one has been lent to a hunter.
**Wants:** To know which radios actually work today.

### 2281 · An evacuation order and a dependent who cannot move
A flood evacuation order for a Black Sea town gives residents four hours. Mrs. Tuncer, 91, needs a stretcher, and the volunteers assigned to her are on the other side of town.
**Wants:** Those who need help to be helped within the time given, without a public list of them.

### 2282 · A warning received twice from two sources
The weather service and the governor's office each send a flood warning with different times for peak water: 18:00 and 21:00.
**Wants:** To act on the more cautious time while the two are unreconciled, and to see when they agree.

### 2283 · A warning that was a false alarm
A test alert reaches phones at 09:00 by mistake. Three people leave work; the plan for a real alert triggers on one shop. The next real alert is ignored by some.
**Wants:** To tell a test from a real event, and to recover trust after an error.

### 2284 · A plan that was updated but the update was not sent
The residents' association revised the plan on 1 June, moving the gathering point. The new sheet is only on the notice board of one building.
**Wants:** Every household to receive the change, and the association to see who has not.

### 2285 · Two organisations, one shelter
A sports hall is named as a shelter by both the school and the neighbouring factory. Together they would need room for 1,100; it holds 600.
**Wants:** To learn the double claim exists before both organisations rely on it.

### 2286 · A family that will not share its plan
A household refuses to give its plan to the neighbourhood association but agrees to share only that it will be at the school yard.
**Wants:** To take part in the neighbourhood's plan by sharing only what they choose.

### 2287 · A plan reviewed on paper only
Every January an office reviews its emergency plan by initialling each page. In 2025 the fire exit on the third floor was blocked by storage; initials were still added.
**Wants:** The review to show what was actually checked and when, not only that someone signed.

## Emergency response

### 2288 · A team lands at hour 40 and the window is closing
An earthquake struck at 04:17 on Monday. The heavy team Nordvik-1 (52 people) lands at 20:30 on Tuesday, hour 40, after a flight delayed by 9 hours for a permit. Six worksites are still listed as "live victims possible". The coordination centre knows survival odds drop each hour and that the team needs about 3 hours to clear customs and reach its first site.
**Wants:** The coordinators see which of the six worksites is still worth the team's first shift given its arrival time, and see how much the odds fall for each site for every hour the team is delayed at the airport.

### 2289 · Two teams are sent to the same collapsed building
At 09:10 the coordination centre sends the medium team Kestrel to the collapsed Yıldız apartment block (8 floors, 64 flats). At 09:40 the local fire brigade, working from a different list, sends its own crew of 14 to "Yıldız Apartments, Atatürk Street 12". The two teams meet at the rubble at 10:05, each believing it was assigned alone, and a third site 2 km away has no one.
**Wants:** Both teams and the coordination centre see at once that the site has two assignments, and the empty site is shown as unassigned.

### 2290 · An aftershock stops work mid-extraction
At 14:22 a team of 9 has a woman trapped by the leg under a slab; the cutting is about 70 percent done and the estimate is 40 more minutes. At 14:26 a magnitude 5.4 aftershock sounds the evacuation horn. Everyone leaves the void. The safety officer says nobody re-enters until the shoring is checked, which may take 30 to 90 minutes.
**Wants:** The family, the medic on standby and the next team see the extraction as paused rather than failed, with a new finish time that only firms up once the site is declared safe again.

### 2291 · A voice is heard, but nobody knows when
A neighbour tells the crew at 11:00 that she "heard knocking last night" from the basement of the Çınar building. Asked for a time, she says between 22:00 and 02:00, and she is not sure whether it was the same night or the night before. The crew has 7 other sites competing for the listening team.
**Wants:** The coordinators see the sighting as a range of possible times, with less weight than a report from 20 minutes ago, and see it change when the listening team rules the basement in or out.

### 2292 · An aid convoy is pushed by a closed road
Convoy K-14 (12 trucks: 6 with blankets, 4 with food, 2 with fuel) is due at the Ova distribution point at 16:00 Wednesday. At 10:30 a landslide closes the only road. The engineers say reopening takes between 6 and 20 hours. The Ova kitchen has planned a meal at 19:00 for 800 people from K-14's food.
**Wants:** The kitchen and the convoy planners see the arrival slip as a range, see the 19:00 meal marked at risk, and see it firm up or change as the engineers report.

### 2293 · Aid arrives that nobody asked for
On day 4, three pallets of winter coats (1,200 pieces) and one pallet of prescription medicine with 5 weeks to expiry reach the Merkez warehouse. The assessment received the same morning shows the need is tents and baby formula. The pallets take up the loading dock that a tent delivery of 300 is due to use at 15:00.
**Wants:** The warehouse manager sees the donation as unmatched to any recorded need, sees the medicine's expiry approaching, and sees the tent delivery's 15:00 slot in conflict with it.

### 2294 · Volunteers arrive with no coordination
By 08:00 on day 1, some 400 volunteers from other cities reach the Güneş district. No one has told them which streets are cleared, which are being worked by teams, or which buildings are marked unsafe. Small groups start digging at three sites where a professional team is already working.
**Wants:** Arriving volunteers can see which sites are already taken, which are still open, and which are marked unsafe, and the professional team sees who else is working at its site.

### 2295 · A phone network is down and times are written by hand
The mobile network in the Bahçe district has been down since 04:17. Team leaders write in paper logbooks: "found survivor about 11-ish", "cleared roof after lunch". At 18:00 a runner brings three logbooks to the tent where the coordinator has to build one timeline. Two logbooks use the watch of the leader; one uses a phone's stopped clock, which is 47 minutes off.
**Wants:** The coordinator can enter the hand-written times as they are, with their looseness, and can later correct the 47-minute error without losing what was originally written.

### 2296 · The same missing person appears on three lists
Deniz Aksoy, 34, is reported missing on the city's lost-persons list by his sister at 06:30, on a volunteer spreadsheet by a colleague at 09:15 as "Deniz Aksoi", and on the Red Crescent tracing request by his mother at 11:40 with a different address. Search teams check the spreadsheet only. At 15:00 he is found alive at a hospital two provinces away.
**Wants:** Every list holder sees Deniz as one person with one status, and his sister, colleague and mother are told without three separate calls.

### 2297 · The decision to end search at a site
On day 7 the search at the Lale block has had no signs of life for 60 hours: dogs, cameras and listening all negative. Forty-one people were counted as missing from this building. The team chief recommends stopping; the provincial commander agrees at 15:00; families gather at the fence and ask for another day.
**Wants:** Everyone with a stake sees who decided, when and on what evidence, sees what is being done next at the site (recovery), and sees the decision as visible to the families, not only to the teams.

### 2298 · A casualty list is asked for by everyone
A radio journalist, a mayor's office, a foreign embassy and a private volunteer group all ask for the list of the 212 people known dead in the Kuzey district on day 2. The list has names, ages and addresses. Families of 60 of them have not yet been told.
**Wants:** Each requester gets only what they are entitled to; no name appears anywhere before that family has been told, and the responders can still see the counts.

### 2299 · A shift ends in the middle of a rescue
At 19:00 the day shift of Team Alpha ends. They have been working for 5 hours to reach a girl of 9 who answers when they tap; they are about two hours from a clear route. The night shift arrives at 19:10 and has never seen the site. The day shift leader's estimate was "two hours, maybe three".
**Wants:** The night shift receives the girl's state, what has been tried, what is next and the estimate of time left, and the family waiting outside sees the rescue continuing without a restart.

### 2300 · A team is ready to leave but the airport is not
Heavy team Corvus is ready to leave in 5 hours as promised. The departure airport has a fuel shortage; the charter cannot leave before a fuel delivery scheduled for between 06:00 and 11:00. The receiving country's reception centre plans to assign Corvus to the Aslan sector at 14:00.
**Wants:** The reception centre sees Corvus's arrival as a range, not a fixed hour, and sees the Aslan sector assignment wait on it.

### 2301 · A team can work two sites but has one crane
Medium team Falcon (40 people) is able to work two sites at 12 hours each, or one site around the clock. Two live-victim reports arrive at once: site A (a school, 30 possibly alive) and site B (a home, 2 possibly alive). One crane, which arrives at 13:00, is needed at both.
**Wants:** The coordinators see how the team's hours and the single crane compete, and see the consequence of each choice for each site.

### 2302 · A wall marking is out of date
The crew of Team Sirius paints "cleared, no victims" on the Kavak building at 08:00 on day 2. At 17:00 a local shopkeeper insists he heard tapping from the same building. A new team arriving at 17:30 reads the paint and moves on.
**Wants:** The new information about the shopkeeper reaches the new team and the coordinators, and the earlier "cleared" is shown as decided at 08:00 on what was known then, not as final.

### 2303 · Team A leaves; Team B does not read the mark
Team A finds a live victim at 02:00, marks the entry, and is called away at 03:00 to a larger site. Team B arrives at 03:40, sees no coordinator, and does not recognise the mark. It starts a general search at the far end of the building.
**Wants:** Team B sees, on arrival, that a live victim is confirmed at a named point in the building and that the first team left at 03:00, with the reason.

### 2304 · A yellow patient becomes red while waiting
At 10:20 a man with a broken pelvis is tagged yellow (can wait) at the casualty point of the Orman sports hall. The ambulance queue is 14 vehicles; the next transport for yellow patients is expected at 13:00. At 11:45 his breathing rate rises and his skin turns pale.
**Wants:** The staff see that he has waited 85 minutes, see his condition change, and see him move up the transport queue without being forgotten in the yellow area.

### 2305 · An ambulance is promised in 10 minutes and the road is blocked
The 112 dispatcher tells a caller an ambulance will come in 10 minutes. The nearest crew is 4 km away, but a fallen bridge means a detour of 22 minutes. The caller's father has chest pain.
**Wants:** The dispatcher and the caller are told the estimate as a range that reflects the detour and are told again if a nearer crew frees up.

### 2306 · A field hospital opens later than planned
A foreign field hospital (20 beds, surgery) was expected to open at 08:00 on day 3. Its tents were delayed by fog, and the power set breaks at 07:30. The provincial hospital has scheduled 11 crush-injury patients to be sent there for dialysis and surgery starting at 09:00.
**Wants:** The provincial hospital sees the field hospital's opening as unsure and delayed, and the 11 transfers wait or find another place, without staff calling round.

### 2307 · A helicopter transfer waits on weather
Six severely injured patients are to fly from Bahçe to the university hospital in Ankara. The helicopter can fly only if the cloud base is above 300 metres. The forecast at 06:00 says 200 to 500 metres by 09:00, and a road transfer would take 7 hours.
**Wants:** The doctors and the families see the flight as conditional on weather, see when the decision falls, and see the road alternative pre-arranged at that point.

### 2308 · A hospital must be emptied after an aftershock
At 15:10 the aftershock cracks the third floor of the Devlet hospital, with 120 patients inside, 9 in surgery and 14 on ventilators. Inspectors will say by 17:00 whether the building can be used. Nearby hospitals have 35 free beds in total.
**Wants:** Staff and regional coordinators see the patients grouped by how soon each must move, see the free beds in the nearby hospitals, and see the plan change once the inspectors decide.

### 2309 · A team offer expires before it is accepted
A Kesra Search team posts an offer of help on the international coordination site at 05:00 saying it can leave in 6 hours and stay for 10 days. The affected country's authority replies at 21:00, 16 hours later, when the team has already been reassigned to another crisis.
**Wants:** The authority sees each offer with its posting time and how long it is valid, and sees when an offer has probably lapsed.

### 2310 · A team waits at reception with no one to send it
Team Marmara (heavy, 50 people) lands at 02:00 and reports to the reception centre. The local authority liaison is on shift until 06:00 and the desk has no assignment sheet. The team waits for 4 hours while site reports are pending.
**Wants:** The reception centre and the team see the waiting time and who holds the assignment, and the team's arrival is known to the sector coordinators who could use it.

### 2311 · An international coordination team hands over to a permanent body
On day 6 a UN assessment team that has run the coordination centre since hour 30 hands over to the provincial AFAD directorate. The team has 47 open requests, 12 promised responses, and 5 agreements that "will be revisited in two days". Its members leave in 24 hours.
**Wants:** The provincial directorate sees every open request, promised reply and agreed follow-up with the date it is due, so nothing promised is dropped when the team flies out.

### 2312 · A coordination meeting is set before the data arrives
The daily meeting of health and shelter coordinators is fixed at 11:00. The field assessment for the Sahil district will only arrive at 14:00, and the decision on where to send 500 tents is made at the meeting. The tents leave the warehouse at 12:00.
**Wants:** The meeting sees which numbers are missing and when they are expected, and sees the tent decision as depending on them.

### 2313 · The first needs assessment is late because of a road
A rapid assessment of 40 villages was supposed to give a first picture by hour 72. Two teams get stuck behind a road closure and cover only 22 villages by hour 72. The other 18 villages include the two highest in the mountains.
**Wants:** Planners see the assessment with a note of which villages are missing and their expected report time, rather than a complete-looking report with silent holes.

### 2314 · A shipment is promised for Thursday and half arrives
A charity promises 500 tents to the village of Derebaşı by Thursday. On Thursday at 14:00 the truck brings 200, and says the remaining 300 will come "in the next days". 140 families have been told by the village head that they will get a tent that night.
**Wants:** The village head sees the delivery as partial, the remaining 300 as a range of dates, and the 140 families ranked by the order they will be served.

### 2315 · Warehouse space runs out
The central warehouse (3,000 pallet places) reaches 3,150 pallets by day 5. Fifteen incoming trucks are queued at the gate with a time slot each between 08:00 and 17:00. The outbound trucks have been delayed by fuel.
**Wants:** The warehouse manager sees the pile-up in advance, sees which incoming trucks can be redirected, and sees the outgoing delays that cause it.

### 2316 · The last kilometres go by hand
A truck with 4 tonnes of food reaches the end of the passable road at 13:00, 6 km from the village of Yayla. The village has 150 people. Volunteers with 12 mules and 20 people can carry about a quarter of the load in each trip of 3 hours. Snow is forecast for 18:00.
**Wants:** The people in Yayla and the volunteers see how much will arrive before the snow and how much waits, and see the plan for the rest.

### 2317 · One bridge, many convoys
A single bridge carries convoys of the Red Crescent, the army, three NGOs and a foreign team on day 2. The bridge takes one convoy every 20 minutes; the engineers close it for inspection between 13:00 and 14:00. Priority goes to medical supplies, then food.
**Wants:** Each convoy sees its position in the order and its probable crossing time, and sees the order change when the inspection window moves.

### 2318 · Generators run out of fuel
The field hospital's generator uses 60 litres an hour and has 300 litres at 18:00. The next fuel truck was promised at 22:00 but is stuck at a checkpoint. The oxygen concentrators and the operating room lights need the generator.
**Wants:** The hospital staff see that fuel lasts until about 23:00 at the current use, see the truck's arrival as unsure, and see what would have to be switched off first.

### 2319 · A satellite phone has a short window
A team leader in the mountain village of Ova can reach the coordination centre only with a satellite phone that has one hour of battery left and a working solar charger only when the sun is up, between 09:00 and 16:00. The centre wants a report every 4 hours.
**Wants:** The centre and the leader agree on the times they will actually try, and each side knows when the other can be reached.

### 2320 · An amateur radio net keeps its own schedule
Volunteer radio operators run a check-in every 2 hours on the hour from their home stations. A field team reports at 12:10, when the net is closed, and the message is passed on at 14:00. The hospital that needed the news at 12:30 acts on it at 14:30.
**Wants:** The hospital sees the message with the time it was first said and the time it was passed on, and knows how old the news is.

### 2321 · Mesh messages arrive out of order
A phone mesh app delivers two messages from a trapped family at the same moment, hours later: "we are four people, one hurt" (sent 05:10) and "water is coming through the floor" (sent 07:45). A helper reads only the later one and looks for a family of one.
**Wants:** The helper sees both messages in the order they were sent, with the time each was sent and the time each was received.

### 2322 · What matters at hour 6 does not matter at hour 60
At hour 6 the rescue leader's first concern is the number of likely live victims per site. At hour 60 the same leader's concern is warm shelter and water for survivors in the open. The reports created at hour 6 are still open and mix with new ones.
**Wants:** The coordinators can see what is most urgent for the current hour and see old reports whose urgency has changed.

### 2323 · Heavy equipment offered by a volunteer
A construction firm owner arrives at 10:00 on day 2 with two excavators and drivers and offers them for free. Digging with an excavator at a live-victim site risks a collapse. The chief engineer agrees for the Deniz block but not for the Güler block, where the search team hears voices.
**Wants:** The owner and the drivers know exactly which sites they may work at, at which times, and under whose direction.

### 2324 · Search dogs need rest
Two dogs of a team work 40 minutes on and then must rest for 1 hour, as the handler says. There are 9 sites to sweep and 4 hours of daylight.
**Wants:** The coordinators see how many sites the dogs can cover in daylight given their rest, and see which sites will be left for the listening equipment.

### 2325 · A community kitchen is late
A volunteer group promised to serve hot meals at 18:00 to 1,000 people in the Tepe tent camp. Their gas is delayed and the food is ready at 20:30. Children who were told "dinner at six" have waited since 17:30 at the tent.
**Wants:** The camp's residents and the camp manager see the meal time as late, with an honest new range, and the manager sees the alternative supply of bread.

### 2326 · Two groups deliver to the same village twice
On day 5 the provincial office sends 200 food parcels to Sarıkaya village and a volunteer platform sends 220 to the same village the same afternoon. The neighbouring village of Kuzgun, with a similar count, receives nothing.
**Wants:** Both senders see, before departure, what has been already sent to each village that day, and see the villages that have received nothing.

### 2327 · A family visited three times, another none
A household of six in the Ada neighbourhood is visited by the Red Crescent, by a municipal team and by a charity, each recording it as a first visit. Each gives a hygiene kit. The household next door was not visited at all because its door was locked when each team came.
**Wants:** Each team sees households already visited, when, and what was given, and sees the ones not yet reached.

### 2328 · A person marked missing is found in another city
Ayşe Demir, 62, is on the missing list since 07:00 on day 1. She was taken by ambulance at 09:00 to a hospital in another province and registered there under her husband's surname. The family searches building sites for 3 days.
**Wants:** The family sees that a woman matching Ayşe was registered at a hospital, and the missing list changes as soon as the match is confirmed.

### 2329 · A person reported dead is found alive
Based on a wrongly read identity card, the morgue registers Mehmet Kara, 45, as dead at 16:00 on day 2, and his family is told at 18:00. On day 3 at 11:00 a hospital contacts the family: the man in bed 12 is Mehmet Kara. The wrongly identified body belongs to someone else, who is now listed as missing.
**Wants:** Both families and the records office see the corrections together, with the history of what was recorded and when.

### 2330 · Burial custom meets identification time
A family wants to bury their father on Friday before noon; custom favours quick burial. The forensic team says identification by DNA of the 18 unnamed bodies in the Selçuk morgue takes between 4 and 12 days, and the body in question is one of them.
**Wants:** The family sees the identification as a range with what evidence exists so far, sees the choices and their consequences, and sees what will be kept so that identification can still be done.

### 2331 · Morgue capacity runs low
The Merkez morgue holds 60 and has 74 bodies by day 3. Two refrigerated trucks are promised for 14:00; one arrives at 17:00, the other later in the evening. Families are queuing to identify.
**Wants:** Staff and families see how many can be held and for how long, and see when the trucks come, without the families queuing all day.

### 2332 · A building goes from yellow to red
Inspectors give the Ay apartment block a yellow card (limited use) at 10:00 on day 4. The residents of 12 flats move back in at noon. At 21:00 an aftershock leaves new cracks and inspectors change the card to red (unsafe) at 07:00 next morning.
**Wants:** The residents and the district office see the change to red, see how many people were inside overnight, and see that everyone is asked to leave in a set order.

### 2333 · Fatigue is nobody's job
A rescue crew has been on site for 30 hours, with 3 hours of sleep in turn. The crew leader wants to continue, since a survivor is likely. The safety officer notes two near-misses in the last 2 hours. The next crew is 3 hours away.
**Wants:** The leader and the safety officer see how long each person has worked and rested, see when the next crew arrives, and can decide when to pause.

### 2334 · A gas smell stops one site
At 11:15 a crew at the Gül block smells gas. The utility company promises a technician "within the hour", but the technician has 4 other calls. The nearby Nar block, with an active rescue, shares the same main line.
**Wants:** Both blocks' crews see the gas hazard as unresolved and see the technician's likely arrival as a range; work at the Nar block stops or continues on that basis.

### 2335 · Shoring holds for a limited time
Timber shoring in the Yeşil basement was installed at 09:00 and rated by the engineer for 12 hours if no aftershock above magnitude 5 occurs. A rescue inside needs 14 hours.
**Wants:** The team and the engineer see the shoring's limit as running down, see the gap of 2 hours against the work, and see it change on an aftershock.

### 2336 · The family will not accept the end of search
At 16:00 on day 8 the commander ends the search at the Bulut block. The families of 23 people ask to keep the site open, and a volunteer digging group says it will continue on its own after the teams leave. Heavy machinery for recovery is due the next morning.
**Wants:** The families are told what is happening next, when the machinery comes and when they will hear about the missing, and the site's guards know who may enter and when.

### 2337 · A foreign team leaves while its knowledge is still needed
Team Nordvik-1 must demobilise on day 10 with a flight at 14:00. It has worked 14 sites and knows three that have not been fully cleared. A local team takes over the sector at 12:00.
**Wants:** The local team receives the foreign team's site records, including the three not-cleared sites and their reasons, before the flight leaves.

### 2338 · Volunteers rotate faster than briefings
A volunteer group of 30 rotates every 6 hours, and each new group of volunteers needs a 20-minute briefing. By day 3 the briefer has given the same briefing 11 times. Four groups, arriving at night, start work with none.
**Wants:** Each arriving volunteer, day or night, knows the current state of their site and what they should and should not do before starting.

### 2339 · An interpreter is needed at a fixed hour
A foreign medical team can treat a Kurdish-speaking family only with an interpreter. The interpreter, a volunteer, is on shift at the hospital 08:00 to 14:00. The family arrives at 13:45 with a child who needs a decision on surgery by 15:00.
**Wants:** The medical team and the family see when an interpreter is available and how that relates to the 15:00 decision.

### 2340 · A team waits at the border
A neighbouring country's rescue team of 30 stands at the border from 11:00 on day 2 waiting for the permit to bring their own dogs and their radio equipment. Customs says 2 to 6 hours. The reception centre is planning sector assignments for 16:00.
**Wants:** The reception centre sees the team's arrival as a range, sees a rough time when the assignment can be made, and sees that the team's equipment may arrive after the team.

### 2341 · One rescue, five callers, five addresses
Five people phone about a trapped man in one week: "Cumhuriyet Street 4", "the yellow building near the pharmacy", "Cumhuriyet 4A", "the bakery block" and "Bakery Street corner". A team could spend a night confirming they are the same place.
**Wants:** The coordinators see the five reports together as one probable site with the parts of the reports that agree and those that do not, and the team goes once.

### 2342 · A rescue estimate changes as the tunnel grows
At 13:00 a team estimates 14 hours to reach a man trapped 3 metres under debris. At 17:00 they have tunnelled 1.2 metres in 4 hours, which is faster than expected; the estimate shrinks to 9 more hours. At 21:00 they hit reinforced concrete and the estimate rises to 12.
**Wants:** The family and the medical team see the finish time as a range, updated at each check, with the reason for each change.

### 2343 · The crane comes at nine, maybe
A crane needed for the Kayın block, with 8 people possibly alive, is expected at 09:00. It travels from another province and roads change the arrival to between 09:00 and 14:00. Two other sites also want it that day, one of them with a confirmed live person.
**Wants:** The three sites see the crane's arrival as a range and see who is first when it arrives, and the ranking changes on new information about the confirmed live person.

### 2344 · One ambulance, two calls
At 10:04 the dispatcher assigns ambulance 34 to a fall at the market. At 10:06 a call comes from a woman in labour 500 metres away, and the same ambulance is the closest. The market patient is lightly hurt and the woman is in active labour.
**Wants:** The dispatcher sees that one vehicle is claimed by two cases, sees each patient's urgency, and both callers are told honestly when help is coming.

### 2345 · Blood donations exceed need, then run short
A public appeal on day 1 brings 3,000 donors in two days, and the blood centre can process 800 units a day. The units last 35 days; by day 6 the fridges are full and the appeal is still running. By day 30 the stock is short as the wave of donors has aged.
**Wants:** The donors and the blood centre see the stock by expiry date and see when more will be needed, so the appeal is stopped early and started again at the right time.

### 2346 · The count of the dead moves every day
The official toll for the province of Batı is 1,240 on Tuesday, 1,610 on Wednesday, 1,920 on Thursday. Each figure includes bodies counted twice from the hospital and the morgue lists and misses bodies in villages not yet reached. A journalist asks how many are truly dead on Thursday.
**Wants:** The public and journalists see the toll as a count with its date and time, see that it is provisional and see the parts still missing.

### 2347 · Cold shortens the odds
A trapped man is estimated to have a 40 percent chance of survival at hour 48. That night the temperature drops to minus 12 degrees in the town of Karadağ. A colleague on the phone from the site says he can no longer hear the man knock, but the crew is 6 hours from reaching him.
**Wants:** The coordinators see that the man's odds fall faster in the cold, and compare this site against a site where the victim was heard in a warm cellar.

## Kahramanmaraş and Hatay earthquakes, 2023

### 2348 · The second main shock at 13:24 voids every plan made since 04:17
Meltem Aksoy in Kahramanmaraş spent the morning of 6 February deciding what came next. By 11:00 her family of five had agreed to spend the night at her sister's in another district, her husband Kemal would go back to the flat at 14:00 for blankets, and her brother would drive over from Gaziantep at 15:00 with the car. At 13:24 the second main shock struck, about nine hours after the first. Kemal was on the stairs of the flat. The sister's district shook again, the brother's road closed, and the blankets stopped mattering next to finding one another. Not one of the arrangements made since 04:17 was still true, and nobody knew which ones had survived.
**Wants:** To know, at the moment of the second shock, which of the arrangements made since 04:17 still hold and which must be made again, for everyone those arrangements involved.

### 2349 · A brother's location known only as "last message at 04:20"
Zeynep Arslan in Ankara received a message from her brother Volkan in Antakya at 04:20 on 6 February: "we're on the stairs, the wall is cracking." Nothing came after it. Through the morning she rebuilt where he might be: on the stairs, in the street, in the garden, in a hospital. At 13:24 the second shock made every guess older. On 8 February a neighbour wrote that their building was "still standing", without saying which side, and Zeynep found she could no longer tell which of her beliefs came from 04:20 and which from what people had said since.
**Wants:** To be able to say honestly what is known about Volkan and since when, with 04:20 clearly the last certain fact, and to see any newer fact together with who gave it and when.

### 2350 · Relatives driving in from another city on blocked roads
Cem Yavuz left Ankara at 06:30 on 6 February for Adıyaman, where his parents live, expecting about eight hours. Each closed stretch sent him onto a longer road, and at 13:24 the second shock closed another. His phone lost signal in a valley for an hour. His sister Sibel in İzmir, who had booked a flight to Adana, could not tell whether he was still driving, stopped, or turned back, and he could not tell her that the road he had chosen an hour earlier was now closed.
**Wants:** For a person driving toward the affected region to know which roads are open and how old that knowledge is, and for his family behind him to know where he was last seen.

### 2351 · A rescue request shared on social media that was already resolved
At 09:12 on 6 February a post appeared: "Mother and two children, third floor, Cebrail district, Antakya, please send a team." It was shared hundreds of times. At 11:00 neighbours and a team from Mersin had already brought the three out, and they were in a hospital in Adana. Nobody updated the post. At 20:00 a team from Istanbul arrived at the address and worked for an hour by torchlight before a neighbour told them the family had left in the morning. A building further down the street, with no post at all, had no team that night.
**Wants:** For people who see a plea to know whether it is still open, and for a team standing at an address to know that the people there are already out.

### 2352 · A student whose term moved while living in a tent
Deniz Kılıç, a second-year student at Hatay Mustafa Kemal University, lived with his family in a tent in Defne. On 6 February the university paused; on 10 February the opening of the spring term was postponed; on 11 February he heard the term would be remote until summer; later he heard a blended arrangement was being considered from April. His mid-term exam had been set for 20 March. The tent had power only when the shared generator ran, and each lecture needed data he had to save for. He had to decide whether to freeze his registration, and each week the answer depended on a date that had moved again.
**Wants:** To know the real dates of teaching and exams for his term and how they have changed since 6 February, so that he can decide whether to freeze the term.

### 2353 · A business with no premises and payroll due
Nihal Demir's clothing workshop in Kahramanmaraş employed 14 people. The building came down on 6 February with the machines and the paper records inside. She was in another city that night. Two of her workers could not be reached, four had left for other provinces, and six were in tents near the site. Payroll was due on the last day of February, a loan instalment on the 15th, and a foreign buyer expected a delivery. Nobody had told her what was still owed on the old dates and what had been moved, and she had no office, no laptop and no address to send payslips to.
**Wants:** To know which payments and filings still fall on their old dates, which have moved and to when, and where each of her workers can be reached.

### 2354 · Documents lost with the building
Halil Özkan's fourth-floor flat in Antakya held the copy of the title deed, his diploma, the car's registration papers, his mother's prescriptions and the children's vaccination cards. In the second week he was asked to show that he owned the flat, so that he could receive rent support, and separately that the car was his. The office that keeps the car's records was itself damaged. Each office asked for a paper that only another office could issue.
**Wants:** To be able to prove who he is and what is his without the papers that were in the building, and to know in what order the offices will accept that.

### 2355 · A temporary shelter timeline that slips
Ayşe and Recep Toprak from Nurdağı went from a car to a mosque to a tent in the first week, and were told a cabin in a container city would come "within weeks". The guidance was that temporary shelter should not last beyond six months, and on 9 and 10 February the President had promised that destroyed homes would be rebuilt within a year. They got their 21-square-metre cabin in April, near a school for their two children. A year after the earthquake it was still home. Every date they had been given had become the next date.
**Wants:** To know how long the family will live where it lives now, what that date rests on, and each time it moves, by how much and why.

### 2356 · The 20 February earthquake reaches people who had returned home
On 12 February Sevgi Korkmaz's family left the tent in İskenderun and moved back into their flat in Antakya, which had been judged lightly damaged; the tent had been too cold for her mother. On 20 February, at 20:04, a magnitude 6.4 earthquake struck Hatay, and another followed at 20:07. The crack in the stairwell widened, and a building already damaged on their street came down. About an hour later a warning came of a possible sea-level rise of 50 cm and the coast was to be avoided, and the family had a mother who could not walk fast.
**Wants:** To know whether the judgement that let them go home still stands after 20:04, and where they can safely spend that night.

### 2357 · Privacy of the names of the missing
A school parents' group in Adıyaman kept a sheet with 61 names of people said to be missing, each with a home address, a phone number and sometimes the words "under the rubble". It was forwarded to strangers and to a volunteer's public page. Two people on it were found alive the next day and a third in a hospital in Mersin, but their entries kept circulating. A mother began to receive calls from unknown numbers about a son who was safe. Someone claiming to be from an official body asked another family for money to "locate" their relative. Another family did not want their son's address public, because the flat stood empty and full of belongings.
**Wants:** For the people named to decide who may see that they are missing, and for a name to stop circulating as missing the moment that person is found.

### 2358 · The aftershock eleven minutes after the first
At 04:17 the Erdem family left their flat in Kahramanmaraş in their nightclothes. At 04:26, standing in the street in the cold, Ömer decided to go back up for the children's shoes and coats. At about 04:28, roughly eleven minutes after the first shock, a magnitude 6.7 aftershock arrived. He was on the second floor.
**Wants:** To know, in the first minutes, whether going back inside is safe, and how long "the shaking has stopped" can be trusted.

### 2359 · A wedding and a window to change tickets
Onur Çelik's cousin was to marry on 11 February in Kahramanmaraş; the hall was in a building that no longer stands. The airline allowed free changes and refunds until 21 February on tickets to, from or through the region. The bride's family was still searching for relatives and could not think about a new date. Onur's window closed in two weeks, while the hall deposit, the musicians and the guests' bookings each had different limits nobody could remember.
**Wants:** To know how long each of the wedding's obligations stays open, so that none of them expires before the family can even discuss a new date.

### 2360 · A host household with two school calendars
Gülşen Bulut in Mersin took in her sister's family of six from Antakya on 7 February. Schools across the country were closed until 20 February. Gülşen's own children returned on that date; her nephews and nieces belonged to schools in Hatay that stayed closed until 27 March. Hosting "for a few days" became a calendar of weeks in which one household ran two timetables and no one could say whether the visiting children should be enrolled in a Mersin school.
**Wants:** To know on what date each child in the house goes back to school, which school it is, and whether that date will hold.

### 2361 · An eighth-grader and an exam with no known place
Ada Yalçın, 14, lived in a tent camp in Osmaniye and was preparing for the exam for entry to high school. She had been told she was responsible only for the first-term subjects, and that a support course had opened near the camp. Her school in Antakya was closed until the end of March and her teacher lived in another city. She did not know where she would take the exam, whether her camp would still be there by then, or how she would get there.
**Wants:** To know the date and place of her exam and exactly which topics it covers, and to have those stay fixed.

### 2362 · A twelfth-grader and an exam date that might move
Yiğit Kaya, 18, from Malatya, stayed with an uncle in Konya while his school stayed closed until 27 March. His exam for university entry was set for June, but there was talk that its dates might be rearranged for students from the region. He had planned a month of study in the school's study hall, which had collapsed. Every day he decided how to spend the day on the basis of a date that might be a different date.
**Wants:** To know whether the exam date will move and, if so, to which date, before he decides how to spend the coming weeks.

### 2363 · A graduate with an unfinished internship
Elif Taş had finished every course at a university in Hatay and lacked only the internship required to graduate. The workplace where she was to do it had collapsed. She heard that graduates could do the remaining internship in person at a workplace. A job in Ankara started on 1 April and asked for the diploma.
**Wants:** To know by when and where she can finish the internship, and whether that date and the job's start date can be made to fit.

### 2364 · A dormitory room needed for survivors
Merve Polat, a student in a state dormitory in Mersin, was told at 18:00 that her room would house families from Hatay from that night. She had an online class the next morning, a job interview in three days and a room full of her things. Nobody told her when she might return. Families arriving from Hatay needed the room, and she did not question it, but she did not know whether to move her belongings or leave them.
**Wants:** To know when she must leave, where her things can stay, and when, if ever, her room will be hers again.

### 2365 · A doctoral student whose supervisor moved with the university
Tolga Erdoğan's university in Kahramanmaraş was paired with another university in another city for the term. His supervisor was assigned there for the spring, and his thesis committee was spread over three cities. His thesis defence had been fixed for March. His records, the printed thesis draft and the room booking were all in a building that was now closed.
**Wants:** To know who his supervisor of record is, where and when the defence takes place, and whether the March date still stands.

### 2366 · A boarding-school place with no end date
Kerem, 15, from Hatay, was placed free of charge in a boarding school in Konya. His parents and his younger sister lived in a tent camp in Hatay. His attendance was excused for the second term, and he missed his family and could not tell them when he would come. When his family eventually got a cabin, he did not know whether his boarding place would end, or whether he would have to move again in the middle of the term.
**Wants:** To know how long his place at the school lasts, how he will reach his family, and what happens to his place once his family is housed.

### 2367 · Two different rent figures
Hasan, a tenant from Antakya, heard on 10 February that the state would pay tenants 2,000 TL a month for a year; an official document later said 3,000 TL. Owners were to receive 5,000 TL. He needed to know what to sign in a rented flat in Mersin, where the landlord wanted a year's lease. His plan for the year depended on a figure that appeared in two versions, and he did not know which one applied to him or from which month.
**Wants:** To know the exact amount, from which month it begins, and who to ask if the figure he hears is different from the one he is paid.

### 2368 · A building not yet assessed
By 6 March 147,895 buildings in the affected provinces had still not been assessed. Yasemin Koç's building in Gaziantep was one of them. It had cracks; nobody had come. What she was owed, whether she could sleep there and whether she could claim insurance all depended on a category the building did not yet have. Her neighbours were split between sleeping inside and in cars.
**Wants:** To know when her building will be looked at and what it means for her rights and for her safety in the meantime.

### 2369 · A building judged light before 20 February and broken after it
Barış Uçar's building in Antakya had been judged lightly damaged on 9 February. He moved his mother back in. After the shocks of 20 February the judgement was still on the door, but the cracks were wider. The 20 February shocks brought 28 damage reports that day. He did not know whether the earlier judgement still counted, or whether a new one was needed before anyone would help.
**Wants:** To know whether an earlier judgement of his building still stands after a new shock, and who can change it.

### 2370 · A shopkeeper and a deadline postponed to 31 July
Fatma Çakır's grocery in Adıyaman had a tax return due on 20 February. On 9 February force majeure was declared for the region and tax obligations due between 6 February and 31 July were postponed to 31 July. She heard it from a customer, then from a cousin, then read a different date on a message. The shop was gone, and so were her receipts.
**Wants:** To know which of her obligations are moved to 31 July and which are not, and to be sure of the answer before the old date arrives.

### 2371 · Ten hours without one way of reaching people
On the afternoon of 8 February access to a major social platform was restricted across the country. Aslı Güneş in Adıyaman had been using it to reach her aunt's neighbours, and it stayed restricted until the night of 9 February, about ten hours. During that time she could not tell which of the pleas she had seen were still open, and her cousin in Istanbul could not reach her.
**Wants:** To be able to reach the people she is looking for without depending on one channel, and to know when a channel has come back and what happened while it was gone.

### 2372 · A phone tower that runs for three hours
The mobile base station near Ramazan Yılmaz's tent in Kahramanmaraş ran on a generator that gave three to four hours of power. On the first days he arranged with his brother in Bursa to speak at three in the afternoon, when the tower had worked the day before. That day the generator was empty until five. His brother called at three, got nothing, and thought the worst.
**Wants:** To know when he is reachable and when he is not, and for his brother to know that silence at three did not mean anything had happened.

### 2373 · Medicines left in the building
Naciye Aydın, 74, takes medicine every day for blood pressure and the heart. Her pills, prescriptions and reports were in her flat in Antakya, which nobody could enter. A field pharmacy stood 3 km from her tent; the pharmacist asked her for the names and doses, which she remembered only in part. Her daughter in Adana knew the medicine but not the dose. Two days without them.
**Wants:** For Naciye to get the medicine she takes, at the dose she takes, without the papers that were in the flat.

### 2374 · A battery for a hearing device
Selim Doğan, deaf, had a hearing device whose batteries lasted about a week. The spare box was in the flat. He lived in a tent in Kahramanmaraş; his family could not sign, and the first sign-language interpreter he met arrived on the sixth day. Without the device he could not hear a shout from the road or an announcement in the camp, and no one could tell him what the announcement said.
**Wants:** To know how long his battery will last and to have announcements and instructions reach him in a form he can understand.

### 2375 · A dialysis patient after the last hospital in town was emptied
Kadir Şahin has dialysis every second day. After the shocks of 20 February the last hospital left standing in Antakya was evacuated as a precaution. His session was due at 09:00 the next day. His wife called three places and got three answers, and the ambulance crews had their own list of hospitals.
**Wants:** To know where and when his next session will take place, and for the answer not to change before he gets there.

### 2376 · A due date in the first days
Nilgün Turan was due on 12 February. Her husband Erhan had not been found, her mother had taken her to a tent in a park in Malatya, and the hospital nearby had no power. Between 6 and 28 February 13,042 births took place in the region. Nobody knew which hospital would be working on the night it began.
**Wants:** To know where she can give birth on the night it begins, and to have her records, her due date and her husband's absence known to whoever meets her there.

### 2377 · A vaccination card that stayed in the building
Baby Alp, born in December, was due for the two-month vaccinations on 12 February. The card recording what he had already had was in the family's flat in Kahramanmaraş. In the second week the family stood in front of a tent clinic that had vaccines but no way of finding out which doses he had received.
**Wants:** To know what vaccines the child has already had and when the next one is due, without the card.

### 2378 · A child found, a family elsewhere
Seven-year-old Yusuf was brought out of a building in Kahramanmaraş and taken to a children's home in Adana. His uncle Mustafa in Istanbul learned on the fourth day that a boy of that age and name was there. He drove for twelve hours and was asked for proof of relationship, which was in a flat no one could enter. By the time it was settled, Yusuf's aunt in Şanlıurfa had also come to claim him.
**Wants:** For the right relative to be able to reach a child quickly and for the child not to be handed over twice or to no one.

### 2379 · A disabled man moved to an institution in another province
Cengiz Polat, who uses a wheelchair and depended on his brother, was in Hatay when the brother was taken to hospital in another city. Cengiz was placed in a care institution in another province among the 1,666 disabled and elderly people moved to 70 institutions in 33 provinces. His brother, out of hospital, went to look for him at home and found the door shut. Neither knew where the other was.
**Wants:** For the brother to learn where Cengiz is, and for Cengiz to be able to return to a home he can use once one exists.

### 2380 · A volunteer flown in with no assignment
Mert Kara, a nurse from Istanbul, was among the 12,752 volunteers flown to the region by 06:00 on 7 February. He landed in Adana with a bag and a certificate, and was told to "go to where you are needed". At the airport, four groups told him four different places. By evening he was in a gymnasium with two other nurses and no supplies.
**Wants:** To know where he is needed, by whom, and until when, and to know when the place he was told to go no longer needs him.

### 2381 · A truck of blankets in the wrong town
On the evening of 8 February Fikret Öz's cooperative in Eskişehir loaded a truck with blankets and drove all night to Nurdağı. There the mayor's office explained that blankets had arrived in the first two days and the town now needed baby formula and tent stoves. The truck stayed parked for a day, and by then the town next door had asked for blankets.
**Wants:** To know what a town needs on the day the truck arrives, not on the day it left.

### 2382 · A rescue team with a return flight booked
A team of 111 from a country far away landed on 9 February. Their return flights had been booked for 16 February. By 11 February the search in their assigned district had finished, and other districts were still working. The team leader, Andrés, could not tell whether another place needed them or whether the return flights were the only plan left.
**Wants:** To know where a team of 111 can still help after their first assignment ends, and to know it before the tickets decide it.

### 2383 · A foreign team that paused for its own safety
A team from Europe working in Hatay stopped work in the first week after their leaders judged the situation around them unsafe, citing slow aid and sporadic clashes. Some families the team had been working for were still waiting at their buildings. The team later resumed with soldiers alongside. The families had not been told when work stopped, nor that it would start again.
**Wants:** For the families at a site to be told when work stops and when it resumes, and for the team to know what is still waiting for them.

### 2384 · The night the search ended
On the night of 19 February the search was largely ended in most provinces, with work still going at 40 buildings in Kahramanmaraş and Hatay. Serpil Kaya's brother had last been seen in an apartment block in Antakya on 5 February. Hers was not one of the 40. She was told on the phone that "operations are concluding", and she had no way of learning what that meant for her brother's building or when someone would come.
**Wants:** To know whether work at her brother's building has ended or will continue, who decided that and when, and what will happen next.

### 2385 · A week of mourning while someone is still under a building
National mourning was declared for seven days starting on 6 February. The Bal family held prayers for two relatives on the third day, while the search at a third relative's building was still going. They did not know how to plan the days: whether to stay by the building or with the family, and what a funeral date should depend on.
**Wants:** To know when there will be news of the third relative and to be free to grieve without having to choose between the building and the family.

### 2386 · A building marked for urgent demolition and a box of photographs
Şule Kurt's building in Antakya was marked for urgent demolition, and entry was restricted. Her wedding photographs, her father's letters and her diplomas were on the third floor. She was told entry was closed but not when the machines would come. On the fifth day she saw a crane at the corner and could not tell whether it was for her building.
**Wants:** To know the day the building will be demolished, and to have the chance to recover the few things that cannot be replaced before then.

### 2387 · A hot meal at fixed hours and an insulin schedule
Vedat Özer, 58, has diabetes and takes insulin with meals. The mobile kitchen in his tent city served at 12:00 and 18:30; the mornings were bread and tea, and the queue on some days ended before he was reached. His insulin was in the flat. He knew he could not take it without eating, and did not know when he would eat.
**Wants:** To have meals and medicine at times that match each other, and to know in advance when the next meal will be.

### 2388 · A school bus and a parent's shift
The school in the tent city in Osmaniye opened, and the bus for the children ran at 07:15 and returned at 12:30. Kübra Aslan had a job at a bakery 20 km away that started at 06:00 and ended at 14:00. Her son, nine, would wait alone at the tent for an hour and a half. She could take the job or the school, not both.
**Wants:** For the school's hours and her working hours to be known to each other, and for her son not to be alone in the tent.

### 2389 · A queue for a cabin in a container city
The Ünal family had been in a tent in a park in Kahramanmaraş since 7 February and put their names down for a cabin in a container city. The cabin city opened on the far side of the district. The neighbour who arrived later got a cabin first. The family did not know how places were assigned or how long they would wait, and their daughter's school was near the park.
**Wants:** To know when they will get a cabin, what the order is based on, and what will happen to their daughter's school then.

### 2390 · Cattle that must be fed every day
Hüseyin Bozkurt in a village near Elbistan had 12 cows. His barn was down, six cows were alive, and he lived in a tent in a nearby city with his family. The cows had to be fed twice a day, and the fodder support announced in the middle of the month had not reached him. Each day he walked or hitched to the village and back, and could not do it with the paperwork to claim support.
**Wants:** To know when the fodder support reaches him and what he has to do to receive it, without leaving the animals unfed.

### 2391 · A shipment held in a port that was on fire
A large fire began at the port of İskenderun on the afternoon of 6 February; it was put out, came back the next day, was put out again on 8 February, came back on 9 February, and was finally out on 10 February. Ercan Tan's shipment of 40 crates of olive oil for a buyer in Germany was in the port, and he could not learn whether it had been reached by the fire, moved, or was waiting. The buyer wrote to ask about the date; the port authority had said operations would take about three months to resume.
**Wants:** To know where his shipment is and what condition it is in, and to give his buyer a date he can stand behind.

### 2392 · A factory that stands and the workers who do not come
Bekir Aydemir's factory in Gaziantep had no visible damage. Of his 30 workers, eleven had died or lost family, and five had left for other provinces. The rest were in tents. The buyer's order was due on 28 February. His machines were ready and his workers were not; he could not plan a shift without knowing who would come.
**Wants:** To know who among his workers can return and when, and to be able to tell the buyer a date he can keep.

### 2393 · A short-work allowance that covers three months, and a business that needs six
Serap Yıldız ran a small hotel in Antakya that was destroyed. The short-work allowance ran for three months, March to May; the insurance-premium deferral for six months, March to August; and the repayment of a tradesman's loan was deferred by six months. She had one of each, and they ended on three different dates. Her staff of six each asked what would happen after May.
**Wants:** To know every date on which some support ends, side by side, and what happens after each of them.

### 2394 · A worker with no record of the job
Gökhan Çelik had worked for five years at a workshop in Adıyaman without being registered. The workshop was gone, the owner had left the city, and there were no payslips. Support for workers required a record of employment, and he had none. About 39 percent of the region's work was unregistered, and he was one of them.
**Wants:** To be able to show that he worked and where, without the papers an employer would ordinarily have kept.

### 2395 · A vehicle whose records were destroyed
Ramazan Turan's delivery van survived the earthquake. The traffic office that held its registration in his town was destroyed with its files. At a checkpoint in Adana he was asked for papers he did not have. His livelihood depended on the van and his ability to show that it was his.
**Wants:** To be able to show that the van is his and to drive without being stopped again for the same missing paper.

### 2396 · A pension record in a damaged archive
Hatice Demirci, 61, from Kilis, was about to retire. The archive building holding her work record for the years before 2000 was heavily damaged. She was told she could apply, and she feared the years might not be counted. She had no copy.
**Wants:** To have the years she worked counted, and to know how long that will take and what she should do meanwhile.

### 2397 · A title deed that exists online and a phone that does not
Leyla Özdemir's flat in Antakya had been destroyed. The title deed record could be reached by its owner through the state's online service, but she had lost her phone and her identity card in the building. To receive rent support she had to prove ownership, and the way to prove it was locked behind the two things she no longer had.
**Wants:** To be able to prove ownership of her flat without the phone and identity card that were lost with it.

### 2398 · A lost passport and a visit to relatives in Northern Cyprus
Serkan Ateş's mother in Northern Cyprus was ill. His passport was lost with his flat in Kahramanmaraş, and the one his wife had was expired. He heard that people with lost documents could enter with a photo document from the population directorate, and that expired passports might be accepted for 90 days. He had to decide whether to travel at all, and he could not check which version applied to him.
**Wants:** To know which document will be accepted for his journey and by whom, before he leaves.

### 2399 · A household that is no longer the household in the record
Zehra Kurt's home in Hatay had held her, her husband and their son. After the earthquake she lived in one tent with her widowed sister-in-law and three nephews, and her husband was in hospital in another city. The record showed a household of three at an address that no longer stood. Aid went to the address, not to the tent.
**Wants:** For aid to reach the people who are actually living together now, not the household that used to exist.

### 2400 · An insured homeowner waiting for the inspector
Emre Karaca in Malatya was one of 1,143,249 policyholders with earthquake insurance. He reported damage. The claim depended on an inspection of the building's category, and the inspection had not come. By early March 326,895 claims had been reported nationwide and 2.0 billion TL had been paid. He did not know where his claim was in that count.
**Wants:** To know where his claim stands and what has to happen before payment.

### 2401 · A tsunami warning that was then cancelled
About an hour after the 20:04 shock on 20 February a warning of a possible 50 cm sea-level rise reached the coast. Elif and Osman Kaya had a tent by the sea in Arsuz with their four children and Osman's blind father. They went uphill in the dark. Later the warning was cancelled. Nobody told them when it ended, and they stayed up on the hill until dawn.
**Wants:** To be told when a warning has been cancelled, as clearly as when it was given.

### 2402 · The flood in the tent camp on 15 March
In mid-March heavy rain flooded areas of Adıyaman and Şanlıurfa where tents and cabins stood. The Şimşek family in a tent camp in Şanlıurfa had moved their tent in early March to a spot near a stream because it was closer to the water tap. On 15 March the water came in the night. The family had been promised a cabin, but the cabin city was still weeks away.
**Wants:** To know which parts of the place where they live are unsafe in rain, and to know it before the night, not after.

### 2403 · Registered somewhere else, undecided whether to go back
By early March 1,971,589 people had registered with the authorities of the provinces they had gone to. The Kaplan family from Hatay had registered in Mersin. Their children were enrolled there, and the father had a temporary job. They did not know whether the house in Hatay would be rebuilt, when, or where. The state did not know either, since it could not say how many of those who left would come back.
**Wants:** To be able to decide whether to return, with a date on which their old home might exist again and a date after which their children's place in Mersin ends.

### 2404 · An election set before the earthquake
Before the earthquake, an election had been planned for 14 May. On 13 February one politician called for a postponement; on 18 February a party said it would not be delayed. Melek Yalçın, registered in a district of Hatay, lived in Mersin, in a rented room, in a household that was not sure where it would be in May. She knew the date but not whether her old polling place still stood.
**Wants:** To know where and on which day she can vote, given where she lives now.

### 2405 · A Syrian family in a temporary accommodation centre
Before the earthquake, 7 temporary accommodation centres housed about 47,000 Syrians; afterwards there were 12, holding about 88,000. The Haddad family, registered in Hatay, were moved to a centre in another province. Their children's school registration, their medical file and the father's work were in Hatay. Nobody at the new place could see any of them.
**Wants:** To have their registration, their children's school place and their medical history follow them to where they now live.

### 2406 · A girl and a toilet that is far away
Ceren, 14, lived in a tent city near Adıyaman where the toilets and showers were at the far end and the lights were few. After dark she did not go alone, and her mother had a shift. She held on from afternoon to morning. The camp had women's tents for clothing and hygiene, but they were closed after evening.
**Wants:** To be able to use a toilet and wash at night without fear or having to wait until morning.

### 2407 · Sent away "for a few days"
Between 6 and 11 February one airline carried 139,438 people out of the region on 790 flights. The Akın family boarded on the third day for Ankara, "for a few days", with one bag each and their grandmother's medicine. The stay at a cousin's became weeks, then the school year. They did not know when they would go back because they did not know whether their street was still there.
**Wants:** To know how long "a few days" is likely to be, and to be told when it stops being that.

## Recovery after a disaster

### 2408 · A promised move-in date slips four times
Ayşe Demir, 41, and her two children lost their flat in Antakya on 6 February 2023. The housing office told her the new flat would be ready in December 2023, then in March 2024, then in June 2024, then in autumn 2024. Each time her rent contract in a nearby town was renewed for a short term, and the children changed bedrooms again.
**Wants:** To see one honest date that she can plan her rent, her work and her children's school year around, and to be told early each time it moves.

### 2409 · A debt deferral ends before income returns
Mehmet Koç owned a tailoring shop in Kahramanmaraş with a bank loan of 400,000 TL. The bank froze his instalments for a fixed number of months after the February 2023 earthquake. The freeze ended in the same week the market hall, where his customers came, was still fenced off and empty.
**Wants:** To have his repayments start when his shop is earning again, not on a date chosen before anyone knew how long the market hall would be closed.

### 2410 · A diploma is needed for a job but was lost with the house
Elif Yıldız, a 27-year-old pharmacy technician from Hatay, was offered a post in Mersin on 1 June 2023. The employer asked for her diploma. The paper was under the rubble of her family's building in Antakya, and her university's records office was closed for repairs.
**Wants:** To prove her qualification before the employer fills the post, and to be told how long it will take.

### 2411 · A child's school changes three times in one year
Deniz, 9, was in a primary school in Nurdağı until 6 February 2023. In March he joined a school in Adana as a guest pupil, in September he moved to a school beside the container city in Gaziantep, and in January 2024 he started in a school in the new district his family was allocated.
**Wants:** For Deniz's teachers to know where he stood in each subject at every move, so he does not repeat or lose months, and for him to finish the school year with his classmates where possible.

### 2412 · An anniversary brings back symptoms
Nurcan Aksoy, 52, slept well through the summer of 2023. In the first days of February 2024 she stopped sleeping, heard the sound of the building in every truck, and did not want to go out on the 6th at 04:17.
**Wants:** To have support waiting for her around the date, without having to explain again what happened, and not to be treated as if she had relapsed for no reason.

### 2413 · A family split across two cities, each with its own calendar
Hasan and Zeynep Arslan live in a container city in Hatay because his work is there. Their daughters live with Zeynep's mother in Ankara, where school started on 11 September and holidays follow the Ankara calendar. The parents' shifts, the girls' term and the bus days do not line up.
**Wants:** To see, in one place, when the family can all be together and when each part of it has to be somewhere else.

### 2414 · An insurance deadline passed while the person was in a tent
Kadir Şahin, 63, from Islahiye, had a DASK policy on his flat. He lived in a tent from 6 February to April 2023. When he first opened his paperwork, the period in which he should have filed the notice had already run out.
**Wants:** For the insurer to accept that he could not file, and to be told at the start which deadlines were running against him.

### 2415 · A business reopening depends on the landlord's building
Sevgi Polat ran a bakery on the ground floor of a five-storey building in Antakya, which was demolished on 20 February 2023. Her equipment was saved. She has a lease and a staff of six, but her landlord's heirs have not agreed on rebuilding, and the rebuilt building would not be ready for years.
**Wants:** To know whether and when she can reopen at that address, and what to do with her staff and her lease in the meantime.

### 2416 · A chronic-illness prescription schedule broken by displacement
Osman Kaya, 58, takes insulin and blood-pressure tablets. After leaving Adıyaman on 8 February 2023 he stayed in three towns in six weeks, and each pharmacy asked for a different paper. His monthly supply ran out on 2 March.
**Wants:** To pick up his regular medicines wherever he is on the day they are due, without starting the approval over.

### 2417 · Privacy of damage and aid records
Fatma Erdem's damage report on her flat in Malatya, with her name, ID number and the aid she received, was pinned to a neighbourhood notice board in April 2023 so people could check the lists. A former employer read it and called her about her rent aid.
**Wants:** To let the people who must know about her damage and aid see it, and no one else, and to know who has seen it.

### 2418 · A rights-holder application that depends on a lost title deed
Ibrahim Çelik inherited a house in Pazarcık from his father, who died in 2019. The deed named his father. Ibrahim's two siblings live abroad and had not yet signed a division of the estate on 6 February 2023.
**Wants:** To be counted for a new home on the day the list closes, even though the estate papers were unfinished when the house fell.

### 2419 · A tenant with no deed and a right to a home
Gül Tunç rented a flat in Kahramanmaraş for 11 years. She lost everything but had no deed. She heard that some tenants could apply for a home and others could not, depending on when the tenancy began and how it was recorded.
**Wants:** To know at once whether she qualifies, by which date she must apply, and what to bring.

### 2420 · A lottery draw and the family that wants to live together
Three brothers owned one building in Nurdağı. In the December 2023 draw the eldest received a flat in one district and the other two in another, 30 km away, and their mother lives with the eldest.
**Wants:** To keep the family within reach of each other, with the mother close to whoever cares for her.

### 2421 · A tent winter
Sedat Ünlü's family spent the winter of 2023 in a tent in Elbistan; it snowed on 12 January 2024 and the stove was out of fuel for three days. They were on the list for a cabin since April 2023.
**Wants:** To be told where he stood in the queue and how many households were ahead of him, and to get a warm place before the cold.

### 2422 · A move out of the container city and the schools left behind
The Doğan family was allocated a new flat on 15 March 2025, in the middle of the school term. The new flat is in another district; the children's school is beside the container city they leave.
**Wants:** To move at a time that does not cost the children their school year, or to keep their school seat.

### 2423 · Debris that hides an unfound grave
In Antakya, Nazlı Bulut's brother was among the missing from 6 February 2023. Debris removal on his building's plot was set for 14 May 2023, but the family had not yet been told whether a search of that building was finished.
**Wants:** To be told before the machines arrive whether the search is over, and to be present.

### 2424 · The plot that cannot be built on
Riza Özdemir's plot in Gölbaşı was declared unsuitable for building after a ground survey in 2023. His neighbours' plots were fine. He was offered a flat elsewhere but wants to stay near the orchard he works.
**Wants:** To be told how the decision was made, what his options are, and how long each takes.

### 2425 · A contractor who stops when steel prices rise
A contractor for a block of 120 flats in Hatay stopped work on 1 August 2023 when steel prices rose about 30 percent. The 120 households, who had a promised handover in March 2024, learned about it from a neighbour.
**Wants:** To hear from the state, not from rumour, when the block will be finished, and to be told how the delay changes their handover.

### 2426 · A permit delayed by an unfinished map
Serpil Koç wanted to rebuild her own house in Islahiye in 2024 on her own plot. The permit office said the local plan was under revision and no approvals could be issued until it was done; no date was given.
**Wants:** An answer she could take to her bank about when she can start.

### 2427 · Financing that arrives in parts
Halil Aydın was granted a long-term repayment on a new home, with the first payments due two years after handover. The handover slid by eight months, and his payment start slid with it in one office but not in another.
**Wants:** For the office that collects his instalments and the office that hands over the keys to show the same date.

### 2428 · Lost ID and a benefit that requires it
Kübra Sever's ID card was under the rubble. A temporary paper was issued for 30 days. The aid office asked for the card itself. On day 31, her aid payment was stopped.
**Wants:** To keep receiving aid while her card is being re-issued.

### 2429 · A birth certificate for a baby born in a tent
Merve Kılıç gave birth on 21 February 2023 in a field hospital. The baby was registered under her husband's temporary paper. Months later, the school and the health insurer could not find the child.
**Wants:** For her child to appear in every record he needs, with the right parents, without repeating the story.

### 2430 · A medical history that lives only on a lost phone
Tolga Demirci had a heart operation in 2021. His records were on his own phone and papers in his house in Kahramanmaraş. In a hospital in Ankara in June 2023, doctors asked what medicines he had taken.
**Wants:** For his new doctors to have his history at the first visit, and for it to be his to share.

### 2431 · A pension check that goes to a closed office
Nedime Korkmaz, 74, collected her pension at a branch in Antakya that closed. Her son moved her to Mersin. For four months the payment went to the closed branch's account.
**Wants:** To be paid where she now lives, on the usual day.

### 2432 · Rent aid and a landlord who wants cash
The state paid a rent contribution to families who found a flat. In Osmaniye in July 2023 a landlord raised rent from 5,000 to 12,000 TL the week after a tenant registered for aid.
**Wants:** For rent to stay affordable within the aid amount and for the aid to arrive in the month the rent is due.

### 2433 · A relief that ends on a date and then a second date
The tax relief for affected areas was extended twice in 2023. Hatice Yavuz's accountant, in Mersin, worked with the first end date and paid a penalty for the second.
**Wants:** For each deadline to be shown with its latest state at the moment she needs it.

### 2434 · A worker who was moved and a job that was not
Selim Tuna, a factory operator in Kahramanmaraş, was sent to the same firm's plant in Kayseri for three months from March 2023. In June, the Kahramanmaraş plant was still without power; the Kayseri site did not need him after 30 June.
**Wants:** To know whether his job is waiting in Kahramanmaraş and when, and how he will be paid in between.

### 2435 · A public employee posted elsewhere
Aylin Şen, a nurse from Antakya, was temporarily posted to Ankara on 15 February 2023, with a promise of return after six months. Her home hospital's ward is still closed in 2025.
**Wants:** To keep her place at her home hospital and to know when she may return.

### 2436 · A farmer between harvests
Bekir Uçar farmed pistachio near Nurdağı. The 2023 harvest was lost because the road to his orchard was blocked in autumn. His crop loan repayment was due in November.
**Wants:** For the repayment date to follow the harvest that pays for it.

### 2437 · A small firm's invoices to a customer who vanished
Nihal Ekinci's print shop had 18 unpaid invoices from customers in Hatay. Some customers died, some moved. She did not know where to send the reminders.
**Wants:** To settle these invoices fairly and without harassing bereaved families.

### 2438 · A shop reopened in a temporary market
The trader Yusuf Karaca reopened his stall in a temporary market on 15 May 2023. The city planned to move all traders into a new bazaar in 2026.
**Wants:** To know when the move will be, so that he does not stock, hire or borrow for a place that will change.

### 2439 · A teacher's own classroom is a tent
Ramazan Ay teaches a class of 34 in a tent school in Kahramanmaraş. Twelve children have left for other cities; six new ones arrive each month.
**Wants:** To know who is in his class this week and what each child has already learned.

### 2440 · A child who does not want to go to school
Yasemin, 7, does not want to enter a building with a ceiling after 6 February 2023. Her school in Osmaniye is fine.
**Wants:** To attend at her own pace, with adults who know her history.

### 2441 · A therapist with 200 names
Psychologist Dilek Arı is one of three in a district of 40,000. The follow-ups she promised at 1 month, 6 months and 1 year cannot all happen.
**Wants:** To know which people need her at which time, and to be able to hand them to a colleague without them repeating their story.

### 2442 · Grief that does not follow a schedule
Ali Rıza Kaplan lost his wife and two children. Every official form asks for the "date of loss" and "date of return to normal". He has no date for either.
**Wants:** To be asked for things only when he is able, and not to be pushed by dates that do not fit.

### 2443 · Support groups that end at six months
A group for mothers in Antakya met weekly from March 2023 and ended when the funding ended in September 2023. Several mothers had their hardest period afterwards.
**Wants:** For support to continue as long as the need does, not as long as the project does.

### 2444 · A cancer patient's treatment cycle
Gülşen Er was at cycle 3 of 6 of chemotherapy when the hospital in Malatya was damaged. The next hospital wanted repeat scans.
**Wants:** To resume at the right point, at the right time, without redoing what was done.

### 2445 · A mental-health prescription stopped abruptly
Kemal Sayar took an antidepressant for 4 years. His pharmacy in Hatay closed, and for three weeks he had none.
**Wants:** To be able to get his medicine without a gap, and for people caring for him to know a gap is dangerous.

### 2446 · Vaccination cards for a child
Zehra's 2-year-old had the second dose of a vaccine due on 20 February 2023. The card was lost; the health centre's list was lost too.
**Wants:** For the vaccinations to continue on time and not be repeated unnecessarily.

### 2447 · Anniversary ceremony and the people who cannot bear it
In Kahramanmaraş on 6 February 2024 the city held a ceremony at 04:17 with sirens. Some families wanted to be there; a block of survivors asked for the sirens to be silent near the container city.
**Wants:** For the city to remember together while letting each family choose how close to it they stand.

### 2448 · A memorial list with a wrong name
A memorial wall in Adıyaman lists 812 names. A widow, Songül Bayram, found her husband's name spelled wrongly, in the year of the first anniversary.
**Wants:** For the name to be corrected before the wall is finished, and for someone to tell her when.

### 2449 · A neighbourhood that left and did not come back
Of 240 households in the old street of Defne, Hatay, 60 returned by 2025. The others settled in Mersin, Adana and Istanbul. The neighbourhood association still has 240 members on paper.
**Wants:** For the remaining people to know who is coming back, and for those who left to be asked, not assumed.

### 2450 · A town that argues where to rebuild
In 2023 residents of Gölbaşı were offered a new site 8 km from the old centre on safer ground. Half wished to stay; half agreed. The decision date moved from June to October.
**Wants:** To be told how and when the decision will be made, and what each choice means for their homes.

### 2451 · Gölcük 1999: a prefab town that stayed
After the 17 August 1999 earthquake, a family in Gölcük moved into a prefab house in a temporary settlement. They were promised a permanent flat within two years. In 2003 they were still in the prefab, which had been fitted with a second stove.
**Wants:** A permanent home in a time they could plan around, and the right to keep the neighbours they had made.

### 2452 · Düzce, 12 November 1999: a second quake resets the list
Three months after the first quake, a second struck Düzce. Families who had just been allocated tents in Sakarya were told that the tents would go to Düzce.
**Wants:** To know whether their place in the queue stays, and by how many months it moves.

### 2453 · Tōhoku 2011: temporary housing extended again
Mr Sato in Ishinomaki moved into temporary housing in June 2011. The two-year term was extended in 2013, again in 2015 and again in 2018. His new home on raised ground was not ready until 2019.
**Wants:** A clear statement each year of how long he can stay, and not to be moved to make room before his own home is done.

### 2454 · Tōhoku 2011: a ground raised, a shop lost
A fishmonger in Rikuzentakata waited for the land to be raised by 10 m. The work took until 2018. By then, his regular customers had left.
**Wants:** To restart on a date the customers still know about, and to be told in time to keep them.

### 2455 · Fukushima evacuation order lifted
An evacuation order for a town near the plant was lifted on 1 April 2017. Ms Abe, who had lived in Koriyama since 2011, was told she could return; her grandchildren were in school there.
**Wants:** To decide on her own timing, with reliable information on services in the town, and no loss of her support if she stays away.

### 2456 · Haiti 2010: a camp that outlives its plan
Marie-Claire Joseph, of Port-au-Prince, lived in a camp at Champ de Mars from January 2010. In 2015 the camp was cleared, with a cash payment for a year's rent. The rent year ended in 2016.
**Wants:** To have somewhere to live after the year ends, and to be told what happens at its end when the money is given.

### 2457 · Haiti 2010: a land title nobody can prove
Jean-Baptiste Louis's family had lived on a hillside plot in Carrefour for 40 years with no registered title. In 2011 aid for rebuilding required proof of ownership.
**Wants:** To have his family's claim heard without a deed, and to be told what evidence counts.

### 2458 · Haiti: cholera arrives during recovery
In October 2010, nine months after the earthquake, a cholera outbreak began near the Artibonite. The recovery schedule of a camp in Léogâne was postponed while clinics were run as emergencies again.
**Wants:** For the plans that were disrupted by the new emergency to be picked up again, in order, when it is over.

### 2459 · Katrina 2005: a grant that takes two years
Mrs Charlene Landry of the Lower Ninth Ward, New Orleans, applied to the Road Home programme in 2006. Her grant was paid in 2008. She lived in a FEMA trailer in between; the trailer was due to be taken back in 2009.
**Wants:** To have the money before the trailer goes, and to know each month where her file stands.

### 2460 · Katrina 2005: children in nine schools
A boy, Marcus, 11, went from New Orleans to Houston in September 2005, to Baton Rouge in January 2006, and back to a charter school in New Orleans in 2007.
**Wants:** To have his records and his progress follow him, and to sit with friends he can keep.

### 2461 · Katrina 2005: the flood insurance versus wind
Mr Broussard's house in Bay St Louis lost its roof to wind and its ground floor to water. The insurer paid for wind only after a long dispute, and the flood cover paid part.
**Wants:** To be paid for the damage he has, and to know at each step what has been decided and by when.

### 2462 · A promise that is honest but wrong
The housing agency of one province said in June 2023 that 90 percent of blocks would be finished by June 2024. On 1 July 2024, 61 percent were. Households who had planned their leases on the earlier figure were left without homes.
**Wants:** To have plans given as an estimate that is updated as the work goes, so that they can prepare for the range and not for a single date.

## Other emergencies: fire, flood, storm, pandemic, blackout

### 2463 · Evacuation order reaches one half of a family split across two places
Ayşe is at her Manavgat hotel job with her son Deniz, 9, while her husband Mert is at their village house 14 km away. At 16:40 an order to leave the village by 18:00 goes out; the hotel area gets none. Mert starts packing for the two of them. Ayşe, on shift until 22:00, is unsure whether to leave. Neither knows where the other will sleep.
**Wants:** Ayşe and Mert each to see the order that applies to the other's place, and to agree where they meet without either having to phone in the middle of driving.

### 2464 · A fire changes direction after the order was drawn
On 29 July a fire near a coastal town is moving west; the order covers Kızılağaç and Sarıçam, to leave by 20:00. At 19:10 the wind turns and the flames head for Yenice, which was told it was safe until morning. Families there had scheduled a 22:00 bus for Sunday.
**Wants:** the Yenice families to learn at once that their morning departure is no longer safe, and the bus times to move without each family calling the municipality.

### 2465 · Fire declared "under control", then flares at 03:00
A forest fire near Marmaris is declared under control on Friday at 17:00. Residents plan to return Saturday 10:00, and a hotel takes bookings from Sunday. At 03:00 Saturday embers restart it on the ridge above the village.
**Wants:** everyone who had planned a return to see the return date drop back to unknown, and bookings to show the situation is not settled.

### 2466 · Boats pick up tourists from the beach with no schedule
On 2 August 240 tourists at a Bodrum-area beach wait for boats sent by the coast guard. No arrival time is given; boats come as they are freed. A group has a 06:30 flight from Dalaman the next day.
**Wants:** the group to see a rough estimate that improves as boats arrive, and the flight to be marked at risk before they ask.

### 2467 · Fire-weather forecast is a risk, not a date
The forecast for the week says "very high fire risk" Wednesday to Friday with 40 °C and 8% humidity. A village association has a summer festival on Thursday, with 300 guests and a barbecue.
**Wants:** the organisers to be told the festival is inside a risk window and to decide by Wednesday, without waiting for a fire to be declared.

### 2468 · A farmer's harvest day collides with a burn ban
Kemal booked a combine for Tuesday to harvest 60 decares of wheat. On Monday evening the province bans work with sparks and machinery in fields from 12:00 to 17:00 for three days, with no end date.
**Wants:** Kemal to see the combine day is partly blocked and to move it around the afternoon, keeping the wheat order intact.

### 2469 · Smoke closes the road to a dialysis clinic
Three patients in a village have dialysis at the town hospital at 08:00, Monday, Wednesday, Friday. On Wednesday smoke closes the only road until "further notice". The next hospital is 90 minutes further.
**Wants:** the clinic and patients to see the missed slot as urgent rather than skipped, and an alternative to be booked before the next due date.

### 2470 · Flash-flood warning with 40 minutes of lead time
At 15:05 a gauge upstream of Bozkurt rises 3 m in ten minutes; the river is expected in town in about 40 minutes, near 15:45. A school bus is due to drop 22 children at the low quarter at 15:30.
**Wants:** the driver, the school and the parents to learn at the same minute that the drop must not happen, and where the children go instead.

### 2471 · Rainfall warning a day ahead, flood a night later
On 10 August a warning promises heavy rain on the Black Sea coast through the 12th. A family has a wedding on the 11th in Ayancık and relatives arriving from Ankara by road.
**Wants:** the family to see the wedding sits within the rain window and the arrival plans of every relative to reflect the risk.

### 2472 · A collapsed bridge removes a commute for weeks
After the 11 August flood a bridge between two villages is gone. Zeynep worked 8:00–17:00 at a factory 6 km away; the detour takes 2 hours. Repairs are said to take "weeks" and later "until the end of autumn".
**Wants:** her work hours, the bus, and her mother's weekly clinic visits to be adjusted as the estimate lengthens, without her re-entering each.

### 2473 · A river crest moves downstream over eight hours
The crest passes town A at 09:00, town B at 13:00, town C at 17:00. A dairy in C collects milk at 15:00 and B's pharmacy expects a delivery at 14:30 on the same road.
**Wants:** each business to see its own hour of arrival for the water, not just the region-wide warning.

### 2474 · School start after the flood is pushed a week at a time
Schools in Bozkurt were to start on 6 September. On 25 August it becomes 13 September, on 3 September 20 September, with tents as classrooms for some grades.
**Wants:** parents to see each new date replace the last, with a note that it may move again, and the teachers' plans to follow.

### 2475 · Hurricane track shifts landfall by 12 hours
Storm Delta forecast to make landfall near Pensacola at 06:00 Thursday. The 17:00 Tuesday update moves it to 18:00 Wednesday. Ravi's flight out of Mobile is Wednesday at 14:00; his hospital shift, covering the storm, starts Wednesday at 19:00; the hospital's generator fuel arrives Wednesday at noon.
**Wants:** Ravi, his hospital and the fuel supplier to see the earlier hour on the same evening, with what now falls after landfall.

### 2476 · Home just outside the cone
The cone for a storm on Tuesday afternoon ends 40 km from Lucia's coastal house, which has a mandatory-evacuation zone line just at her street. She has a dentist on Wednesday and a mother in a care home inside the cone.
**Wants:** Lucia to see her house is outside the cone but inside the zone, and her mother's care home to be treated as its own place with its own timing.

### 2477 · Watch turns to warning while a family drives
A hurricane watch is issued Monday 15:00 for the Keys, changing to a warning Tuesday 03:00. The Nguyen family leaves Key West at Monday 21:00, arriving at their Miami hotel booked for Tuesday. Checkout of their rental car is by Tuesday noon in Key West.
**Wants:** the family to see which of their bookings are cancelled by the warning and which are still on, before the warning hour.

### 2478 · Shelter closes at the wind limit
An evacuation bus service stops when sustained winds pass a limit, forecast around 21:00. Older man Abe has a pickup slot at 20:45 that has already slipped twice.
**Wants:** Abe and the driver to see the closing hour and to know whether the last slip still makes it.

### 2479 · A storm slows and lengthens the whole plan
A storm stalls off the coast, and rain that was to last 12 hours now lasts three days. A school planned to reopen Thursday; a bakery's flour arrives Friday; a bus is booked Saturday.
**Wants:** each to see that the storm's end has moved and that they are downstream of it.

### 2480 · Tsunami wave arrival estimate in 12 minutes
After a quake at sea near İzmir, the coast receives a tsunami message giving estimated arrival at Seferihisar in 12 minutes. A fish-restaurant owner has 40 guests seated.
**Wants:** the owner to see the arrival minute counted from the message, and guests' higher-ground destination to be known.

### 2481 · Second wave larger than the first
The first tsunami wave reaches a harbour at 11:20 and is small. Residents plan to return at 12:00. Later waves are larger around 12:40.
**Wants:** returns to stay held until an all-clear, not the first quiet wave, with the hour the all-clear is expected shown as uncertain.

### 2482 · Far-field tsunami hours away
A tsunami from the other side of an ocean is expected on a harbour in seven hours. Port pilots have ships due in and out within that time.
**Wants:** each vessel's slot to be checked against the arrival hour, with the ones inside the danger window flagged.

### 2483 · Heat alert for five days, cooling centre only 10:00 to 18:00
A heat–health alert covers Adana Monday to Friday, 42 °C. The cooling centre in the school gymnasium opens 10:00–18:00. Gülten, 78, takes a medicine at 21:00 and her carer comes at 19:00.
**Wants:** Gülten to see the centre hours against her day and the hottest hours of the evenings, with her carer visit noted as needed.

### 2484 · Outdoor work moves to the early morning
A construction crew of 30 usually works 08:00–17:00. Under the alert, work is allowed only 05:00–11:00 and 18:00–21:00. A crane rental ends Wednesday at 17:00.
**Wants:** the crew and the rental firm to see the reduced hours and the crane's end date being tight.

### 2485 · Heat alert extended day by day
Monday's alert says through Wednesday. On Wednesday it is extended to Friday, on Friday to Sunday. Schools with summer courses ask each time whether to hold classes.
**Wants:** the courses to see the alert as extendable and to carry a decision that can change without asking the teacher every morning.

### 2486 · Snowstorm closes roads and schools, announced day by day
In Erzurum the governor announces school closure for Tuesday at 21:00 Monday, then Wednesday at 20:30 Tuesday, then Thursday at 22:10. Fatma's daughter has a Wednesday oral exam at 09:00.
**Wants:** Fatma to see each closure as its own announcement, the exam to be flagged as something the school should answer for, and the extension to be treated as possibly continuing.

### 2487 · Snow closes the pass but not the airport
The Kop pass is closed 04:00–15:00, the airport is open. Ali must reach the airport town from Bayburt for a 12:30 flight, and the road is the pass.
**Wants:** Ali to see the flight cannot be reached at the planned time and the road's reopening hour to be tracked.

### 2488 · A weekend lockdown announced Thursday night
At 22:30 on Thursday the government announces a weekend lockdown from Friday 21:00 to Monday 05:00 for 5 provinces. Nesrin has a Saturday 10:00 wedding, her father's 09:00 cardiology visit and a rented hall.
**Wants:** Nesrin to see all three at once as broken, each with a different exemption question, with nothing lost from her earlier plan.

### 2489 · Lockdown announced two hours before it starts
On a Friday at 22:00, curfew announced for midnight in 31 provinces. Thousands queue at bakeries and shops. Ömer's grandmother's night-shift carer lives 8 km away.
**Wants:** Ömer to see the carer's evening at once and whether she may travel, before midnight.

### 2490 · Curfew for over-65s allows 11:00 to 13:00 only
Halil, 71, may go out only 11:00–13:00. His pharmacy closes at 12:30 on Saturdays; the bank branch opens 09:00–12:00. His daughter drives him.
**Wants:** the two errands to be fitted inside the two hours, in a fixed order, with pharmacy closing time as the limit.

### 2491 · One household, three curfews
A house holds Halil (71, allowed 11:00–13:00), his grandson Emre (17, under-20, allowed 12:00–16:00 at another period) and his daughter (44, unrestricted apart from weekend). Halil needs Emre to take him to a clinic at 12:30.
**Wants:** the household to see the only overlap of Halil's and Emre's allowed hours and to place the clinic visit in it, not with each person's own view separately.

### 2492 · Curfew for under-20s and a job
Burak, 19, works at a bakery with a 06:00–14:00 shift. His age curfew allows only 12:00–16:00 and no exemption is stated for work.
**Wants:** Burak and his employer to see the conflict and the pending exemption question, with the shift marked uncertain for the coming days.

### 2493 · Intercity travel needs a permit
The provincial governor's permit is needed to leave Bursa. Sevgi wants to attend her sister's funeral in Sakarya on Saturday morning; the permit takes 1 to 3 days to arrive.
**Wants:** Sevgi to see the permit as possibly not arriving in time and the burial time as fixed.

### 2494 · Permit granted for a day, trip takes two
Mustafa's permit covers Monday only. His drive to Erzurum takes 20 hours with sleep stops, and his return is Wednesday.
**Wants:** Mustafa to see the trip does not fit the permit and the return leg to need its own approval.

### 2495 · Vaccine appointment tied to an age cohort opening
Vaccination opens for 70-plus on Monday, 65-plus the next Monday. Turan, 68, turns 69 in the middle of the week. Hospital booking opens at 08:00 for the cohort and is full by 08:20.
**Wants:** Turan to see when his cohort opens, the date he can book, and his second dose interval to follow from the first.

### 2496 · Second dose 28 days after the first, but the clinic is closed
Ece, a nurse, gets her first dose on 14 February. The second is due on 14 March, a Sunday; the clinic does not open on Sundays.
**Wants:** Ece to see the second dose date as a window, and a workable day to be offered.

### 2497 · Cohort opening date moved on the evening before
The 60–64 cohort was to open on Wednesday, then the minister says Friday. Hakan, 62, took Wednesday off for the booking.
**Wants:** Hakan to see the new opening hour and his leave day marked as not needed.

### 2498 · Vaccine shipment delay pushes a schedule
A shipment of 5 million doses is delayed by six days. A district plan for 12,000 people over four weeks slips.
**Wants:** each person waiting to see a new estimated window rather than a firm date.

### 2499 · Health worker vaccinated the day before a night shift
Leyla is vaccinated at 15:00 and works 20:00–08:00. She is warned to rest on the day of the shot.
**Wants:** Leyla and her manager to see the overlap and to have a day when she is lightly assigned.

### 2500 · School closures, then hybrid days, on different weeks for different grades
A primary school moves to remote study for 2 weeks; grades 1–4 return in the third week two days a week; grade 8 returns first because of the national exam. Two siblings, grades 2 and 8, share one computer.
**Wants:** the family to see both timetables in one view, and the computer clash of remote lessons.

### 2501 · Final exam is on a day the region is locked down
A university exam is set for Saturday 10:00 in Ankara; a lockdown for the weekend is announced Thursday night. Students come from 6 provinces.
**Wants:** every student to see whether the exam is held, moved, or online, and when the answer will come.

### 2502 · Full closure has exemptions that differ by job
A national closure runs from 29 April to 17 May. Bakers, healthcare staff, farmers, tourism staff and drivers have different exemptions and different documents.
**Wants:** each worker to see only the days and hours that apply to them, with the general dates as background.

### 2503 · Booked appointment lost when the hospital shifts to the pandemic
A hospital cancels all elective surgery for six weeks. Cansu's knee operation, booked after 11 months, is cancelled with no new date.
**Wants:** Cansu to keep her place in the queue and to see an estimate that changes as the hospital reopens.

### 2504 · A blackout that lasts "2 hours" and then 3 days
On Monday 15 February at 01:40, a family in Houston is told the outage will be two hours. By 09:00 it is "rotating". By Wednesday it is still off. Pipes freeze on Tuesday night. Their insulin fridge, phone battery and a Thursday dialysis slot all matter.
**Wants:** the family to see the estimate as having failed, to be given updated hours as they come, and their medicine and clinic to be prioritized.

### 2505 · Rotating outages that never reach the promised 45 minutes
The operator says outages of 15 to 45 minutes; a neighbour's house is off for 30 hours while another two streets away is on. Pilar works from home; her employer sets a 09:00 call.
**Wants:** Pilar to tell the employer that her area's hours are uncertain and for her calls to move, without a phone battery.

### 2506 · Restoration by street, not by address
A crew restores one feeder line at 14:00, another at 20:00, a third "tomorrow". Ivan's care-home neighbour is on the third.
**Wants:** Ivan to see the neighbour's feeder, the 20:00 estimate and the next visit, rather than the region.

### 2507 · Boil-water notice after the power returns
Power returns on Thursday at 11:00. The water is under a boil notice until "two consecutive clear tests", roughly 48 hours.
**Wants:** households to see the notice as starting with the tests, not with the power, and the end as an estimate.

### 2508 · Home oxygen machine and a battery running down
Rose uses an oxygen concentrator with a battery lasting 4 hours. The blackout began 2 hours ago with no estimate.
**Wants:** Rose, her nurse and the fire service to see the remaining hours and to have a move-to-hospital time before the battery ends.

### 2509 · Shelter-in-place after a chemical leak
At 10:15 a plant near Dilovası releases ammonia. People within 2 km are to stay indoors with windows closed. Schools keep children until the all-clear, parents wait outside the zone.
**Wants:** parents to know when their children will be released and the school to see when the all-clear is expected, with each updated.

### 2510 · Shelter order lifted, then reinstated
At 13:00 the all-clear is announced. At 15:30 a tank leaks again and the order returns. Some workers had left the factory.
**Wants:** everyone who acted on the first all-clear to see the new order at once, marked as replacing it.

### 2511 · Stroke where the start of symptoms is unknown
Osman, 66, wakes at 06:30 with slurred speech. His wife last saw him well at 22:00. The hospital's treatment window runs from the last time he was known well, not from waking. It is 07:10 when the ambulance arrives.
**Wants:** the hospital to see 22:00 as the last known well and the remaining window, with the door time as the key clock.

### 2512 · Stroke with a witnessed start
Nur, 54, has a facial droop at exactly 12:14 in front of colleagues. The ambulance takes 18 minutes, the hospital is 25 minutes from the office.
**Wants:** the hospital to see the exact symptom time and the arrival estimate, and the office's own duties to be handled by someone else.

### 2513 · Heart attack during a general emergency
During flooding, Ahmet, 58, has chest pain at 19:00 in a village with the bridge out. The ambulance cannot cross; a helicopter is possible after dark only with clearance.
**Wants:** the responders to see the treatment target hour (about 90 minutes from arrival) and the transfer options with their times.

### 2514 · Missing child alert
A 6-year-old, Elif, disappears from a park in Izmir at 16:20. The alert is sent at 17:05 to phones within 10 km, then expanded at 18:30 to the whole city; she is found at 19:10.
**Wants:** everyone who received the alert to see the cancellation as soon as she is found, and her parents to see when it went out and where.

### 2515 · Alert sent to the wrong region
An evacuation alert intended for the Hatay coast is sent to phones in Adana. At 09:40 many people in Adana leave work; some reach the hospital shifts late; the correction arrives at 10:20.
**Wants:** people in Adana to see that the alert was a mistake, marked as withdrawn, and their delayed shifts and meetings not to count against them.

### 2516 · Alert sent to right region, late
A dam-release warning intended for 06:00 arrives on phones at 06:47; the water reaches the village at 07:10.
**Wants:** the village to see when the message was written as well as when it arrived, so that remaining time is known.

### 2517 · Fire crews' shifts stretch as the fire goes on
A crew of 12 in a fire camp works 12-hour shifts. The fire expected to last 2 days is on day 6. Their rest days are being pushed.
**Wants:** the crew and the managers to see the rest days pushed along as the fire runs long, with the point they must be relieved.

### 2518 · Displaced family, appointments in the old district
The Kaya family lives in a tent for 3 weeks. A child has monthly hospital appointments in the old district, and the mother a weekly benefits appointment.
**Wants:** the family to see the appointments still tied to the old place, and to be able to say where they now are without losing them.

### 2519 · Insurance inspection cannot come until the road opens
An inspector's visit to Bozkurt is set for 20 August. The road reopens 29 August. The claim deadline is 30 days from the loss.
**Wants:** the family to see the inspection cannot happen before the road opens and that the deadline remains the same, with the shortfall visible.

### 2520 · Wedding, a hurricane and a venue in a different country
A couple in Antalya plans a wedding in Cancun for Saturday. Forty guests fly in from 6 countries, with the earliest arrivals on Wednesday. A storm forecast to pass Friday night may delay flights.
**Wants:** each guest to see how the storm's uncertain hour affects their own arrival, and the couple to see who is at risk without seeing every guest's private plans.

### 2521 · An employer and a worker in different places of risk
A firm in Ankara has a delivery driver, Selim, working in Kastamonu during the rain. The firm needs to know if he can drive Friday; Selim does not want to share where his family is sheltering.
**Wants:** the firm to learn only whether Selim can work Friday, and Selim to keep his family's location to himself.

## What planning apps do and don't

### 2522 · Repeat from due date versus from completion
Ana has a Todoist task 'Water plants' set to repeat every 3 days. She finishes it 2 days late, on Friday. The next copy lands on the original schedule, Sunday, only 2 days after she watered them.
**Wants:** The next watering to fall 3 days after Friday, and for her to be able to say which way each task counts.

### 2523 · Catch-up floods after a holiday
Kemal's org-mode file has 'Pay rent' repeating monthly and he is away 3 months. Marking it done once shifts it by one month and it is still three months overdue.
**Wants:** Not to be shown three missed rents one after another, nor to have two months silently vanish.

### 2524 · Repeat relative to today
Mert's smoke detector battery check repeats yearly from the day he actually does it, not from the date it was due. He did it in March instead of January.
**Wants:** The next check to be due next March, and the January date not to count as anything.

### 2525 · Template with only one future copy
In Taskwarrior a weekly review recurs with a limit of 1, so the calendar shows only next week's copy. Selin asks what she is doing in 6 weeks and sees nothing.
**Wants:** To see all upcoming occurrences without each one having been created ahead.

### 2526 · One exception in a series lost on export
Elif exports a Google Calendar series with 2 moved occurrences and 1 cancelled to an .ics file and imports it into another app. The moved ones appear twice, at old and new time.
**Wants:** The series to arrive with the same 2 moves and 1 cancellation.

### 2527 · Subtasks flattened by CSV
Barış exports a Todoist project with 12 tasks each with 3 nested subtasks to CSV and imports it into another tool. Indentation becomes plain titles with leading spaces and all 48 items sit at the same level.
**Wants:** The parent-child shape to survive the move.

### 2528 · Recurrence text not understood by the new tool
Nur moves from Todoist to TickTick. Her 'every last Friday' tasks come across as one-off tasks with the text in the title.
**Wants:** Her recurring tasks to still recur.

### 2529 · Completed history lost when leaving an app
After 4 years in Things, Volkan switches to another app; the export carries open tasks only. He has no record of what he finished in 2023.
**Wants:** His finished work to travel with him.

### 2530 · The same event synced twice by two tools
Zeynep connects her work Outlook to Google Calendar through one sync tool, and Reclaim also mirrors it. Every standup appears 3 times on her phone.
**Wants:** One meeting to show once.

### 2531 · Sync loop between two calendars
Two apps each copy the other's events. A 14:00 dentist appointment becomes 'Busy' in a second calendar, which is copied back as a new event, and it repeats until the calendar has 40 copies.
**Wants:** An event and its copy to be recognised as the same thing.

### 2532 · Task moved by hand in one app and by machine in another
Hande drags a Motion task to Thursday in her calendar app; Motion re-places it Wednesday. The two apps flip it back and forth every few minutes.
**Wants:** One answer about where the task is.

### 2533 · Calendar block shows the task but not its subtasks
Sunsama lists 'Launch site' with 6 subtasks; in the calendar the block says only 'Launch site'. Cem cannot tell from the calendar which subtask he planned for that hour.
**Wants:** The calendar entry to say which piece of the task it is for.

### 2534 · A family calendar clash nobody sees
Ece's partner books a 17:00 dentist visit for their daughter in the shared Cozi calendar; Ece has already put 'Swim class' for her at 17:00 in TimeTree. Neither app shows the clash.
**Wants:** To be told the child is in two places.

### 2535 · Two parents each add the same school event
Both parents add 'Parent evening, Thu 18:30' to the shared calendar after the school email. The calendar shows two events; one parent deletes one, and the other's copy is removed on the phone too.
**Wants:** One event, and neither deletion to remove it for everyone.

### 2536 · Scheduling link double-books
Onur's Calendly page shows Tuesday 14:00 free. Two people book it 90 seconds apart; the calendar sync has not yet read the first. Both get confirmation emails.
**Wants:** Only one of them to get the slot.

### 2537 · Link checks the wrong calendar
Bora's Cal.com page checks his work calendar, but his personal calendar holds a flight on the same afternoon. A stranger books him during the flight.
**Wants:** The link to know about all his commitments.

### 2538 · Buffer between meetings ignored across hosts
Melis has a 15 minute buffer on Calendly, but a colleague books a meeting in Outlook back-to-back with a call Calendly placed. She has no gap for 5 hours.
**Wants:** Her buffer to hold no matter who booked.

### 2539 · CalDAV sync stops without saying so
Tuna's phone stopped syncing his self-hosted Nextcloud calendar 3 weeks ago after a password change. Nothing on screen says so; he misses a meeting added by a colleague.
**Wants:** To be told the calendar is out of date.

### 2540 · Server forgets the client's place
Google Calendar answers a sync request with a 410 and the client app wipes 1,900 local events and downloads them again, dropping the 5 events Sena had created offline that morning.
**Wants:** Her offline events to reach the server.

### 2541 · Timezone bug on an all-day event
Gül in Istanbul creates an all-day 'Birthday' in Google Calendar. A friend in Los Angeles sees it on the day before.
**Wants:** A date-only thing to be the same day for everyone.

### 2542 · Travel across zones moves a recurring event
Kaan's 09:00 daily standup is set in Istanbul time. On a week in Berlin, his phone shows it at 08:00 while the team still meets at 09:00 their time.
**Wants:** To know whether the meeting is at the same clock time where he is or at the same moment as the team.

### 2543 · Time entry lands on wrong day
Toggl timer started at 23:40 in Berlin and stopped at 00:20 after she flew in from London. The report splits it across two dates and two different totals.
**Wants:** The 40 minutes to appear as one work session on the day she thinks of.

### 2544 · Task with a start that hides it
In OmniFocus, 'Book tax appointment' has a defer date of 1 February and is invisible until then. Duru forgets the appointment window opens and the task never shows on her Today list.
**Wants:** Some way to know a hidden thing is about to matter.

### 2545 · Someday versus scheduled
Things puts 'Learn Rust' in Someday and 'Renew passport' in Today. When Ceren opens her week, both look equally absent from the calendar.
**Wants:** To tell apart 'not yet decided' from 'decided but unclocked'.

### 2546 · Dependencies exist but do not shift anything
In Jira, story B is 'blocked by' story A. A slips 2 weeks; B's dates stay the same and the board shows no warning.
**Wants:** B's owner to learn that A's slip changes B.

### 2547 · Dependency shift asks permission each time
In Asana, moving task A by 3 days pops up a dialog asking whether to move its 14 dependent tasks. Harun accidentally clicks 'no' and the plan has silent overlaps.
**Wants:** The 14 dependents to follow A.

### 2548 · Weekend absorbs a push
In MS Project task 2 (5 days) follows task 1. Task 1 finishes Thursday instead of Tuesday; task 2 now ends the next Friday, not Wednesday, because the weekend intervenes.
**Wants:** The date to move by working days, and to see why.

### 2549 · Shared step between two projects
In ClickUp, 'Book venue' sits in both 'Conference' and 'Wedding' lists. Setting its date in one list changes the other's timeline in ways the wedding planner did not expect.
**Wants:** One item in two places to behave in a way both owners agreed on.

### 2550 · Parent shows earliest child not the real span
In Notion a project page has 8 sub-items. Its own date is empty, so the calendar shows no project even though sub-items span 6 weeks.
**Wants:** The project to show when it starts and ends from what is inside.

### 2551 · Depth limit hit
Ilker breaks 'Build shed' into tasks in Todoist and reaches a fifth level. The app refuses to nest further.
**Wants:** To keep breaking down without hitting a wall.

### 2552 · Checklist item cannot have its own date
In Trello a card has a checklist with 'Order lumber', 'Pick up lumber', 'Cut lumber'. Only the card has a due date, so Pelin cannot say the pick-up is on Saturday.
**Wants:** A small step to carry its own time.

### 2553 · Subtask done but parent open
A Jira story has 4 subtasks all done, but the story itself stays 'In progress' because no one moved it.
**Wants:** The parent's state to be evident from the children, or the mismatch flagged.

### 2554 · Parent done while children open
Nazlı ticks 'Prepare trip' in Microsoft To Do while 3 steps under it are unchecked. Nothing asks whether she meant it.
**Wants:** To be told what she is leaving behind.

### 2555 · Duration missing makes the day look empty
A user adds 9 tasks to Todoist without durations. The calendar view shows an empty day though the work needs about 8 hours.
**Wants:** To see how full the day is without entering numbers for everything.

### 2556 · Estimate is a guess but shown as a fact
Yusuf estimates 'Write chapter' at 2 hours in Motion. It takes 6. The app treats 2 hours as exact and books the next task right after.
**Wants:** His guess to show as a guess.

### 2557 · Deadline that is a range
A client says 'send the draft sometime between Monday and Wednesday'. Todoist only takes one due date, so Arda picks Wednesday and forgets the range meant earlier was welcome.
**Wants:** Both ends of the range to be stored.

### 2558 · Deadline set by someone else
A teammate's Asana task due Friday is a deadline for Leyla's task due Monday. Their dates are set by different people and no one owns the link.
**Wants:** To see her Monday depends on their Friday.

### 2559 · Meeting overruns and everything after stays
A 10:00 workshop planned for one hour ends at 11:30. The 11:00 call, 11:30 lunch and 12:30 task in Google Calendar all stay where they were.
**Wants:** The rest of the morning to move up, or to be told it cannot.

### 2560 · Task started early
Damla begins 'Clean garage' Friday morning instead of Saturday. The Saturday block stays, so she sees it as still to do.
**Wants:** Early start to shorten or clear the later plan.

### 2561 · Habit that skips a day
Loop Habit Tracker: Nihan skipped 'Run' on a sick day. A streak counter breaks; a strength score drops less.
**Wants:** Sick days to not count as failure.

### 2562 · Routine step order with durations
Routinery morning routine: shower 10, breakfast 15, pack bag 5. Sinem starts 10 minutes late and the app still shows the 07:40 leave time.
**Wants:** The leave time to move when she starts late.

### 2563 · Focus session booked with a stranger
Focusmate fixes the session at :00 or :30. Tolga has a meeting ending at 09:57; he arrives 4 minutes late and the partner has left.
**Wants:** To see the slot's fixed start against his meeting's ending.

### 2564 · Forest tree dies for a phone call
Irmak's phone rings during a Forest session and she leaves the app to answer; her 45 minute tree dies.
**Wants:** A legitimate interruption to not count as failure.

### 2565 · Bring a task into the calendar without losing its source
Akiflow lets Berk drag a Linear issue into 14:00. Later the issue is closed in Linear; the block remains in his calendar.
**Wants:** The block to know the issue is closed.

### 2566 · Task source and calendar disagree on the date
A Notion database date says 12 May; the same item was dragged in Notion Calendar to 14 May. The database still shows 12 May.
**Wants:** One date, in both.

### 2567 · Someone else's meeting is your busy block
Clockwise moves a colleague's focus block; Feride's own Calendly page silently opens a slot that she expected to be closed.
**Wants:** To be told when another tool's change opens her time.

### 2568 · Group invitation, individual reschedule
A 5 person meeting in Outlook; four say yes to 14:00 but one asks to move to 15:00. The organiser must ask the others again by hand.
**Wants:** The group to see the request and answer once.

### 2569 · Poll ends but calendar not updated
Doodle poll picks Saturday 19:00; nobody adds it to their calendars. Two of the 8 forget.
**Wants:** The chosen time to appear in every participant's plan.

### 2570 · When2meet ignores existing commitments
In When2meet, Cansu marks Thursday evening free by memory, forgetting her calendar has a class on it.
**Wants:** Her real commitments to inform what she says she is free for.

### 2571 · Private event still occupies time
Recep marks a doctor's visit as 'busy, private' in Proton Calendar. A Calendly page reading only Google Calendar does not see it, since Proton's calendar is not linked.
**Wants:** Private time to still block others' bookings without showing details.

### 2572 · Encrypted calendar and outside tools
Proton Calendar events are end-to-end encrypted; Aylin's task planner cannot read them, so it places tasks over them.
**Wants:** The planner to avoid times she has busy in a calendar it cannot read.

### 2573 · Self-hosted calendar behind changed address
After Kadir moves his Nextcloud to a new domain, all phones need reconfiguring; two family members do not, and their calendars go stale without warning.
**Wants:** Everyone's device to notice the address changed.

### 2574 · Task list shared with someone who uses another app
Tolga shares a Todoist project with his wife who prefers Apple Reminders. Half the fields, like duration, do not appear on her side.
**Wants:** Both to see the same things.

### 2575 · Reminders and tasks in different lists
Apple Reminders has a subtask 'Buy candles' under 'Birthday party'; Google Tasks import shows them as separate top-level tasks.
**Wants:** The party and its errands to stay together.

### 2576 · Calendar app hides tasks from another app
A Thunderbird VTODO with a due date does not appear in Apple Calendar on the same CalDAV account.
**Wants:** Tasks to show wherever the account is opened.

### 2577 · Notes app tasks disappear from the plan
Logseq TODO items live in 300 daily journal files; Hilal's calendar tool never sees them.
**Wants:** Her outline tasks to be part of the day.

### 2578 · Markdown task edited by two devices
Obsidian Tasks: Selçuk ticks a repeating task on his laptop and phone offline; sync creates two next occurrences, one for each tick.
**Wants:** One tick to produce one next occurrence.

### 2579 · Plain-text conflict on a big file
org-mode agenda file synced via Dropbox creates 'conflicted copy' files; tasks exist in both and only one is in the agenda.
**Wants:** No task to vanish because of a sync collision.

### 2580 · Ordered siblings with one skipped
In org-mode with ORDERED set, step 3 can be started only after step 2; Betül's real world lets her do step 3 first because the shop is closed on the day for step 2.
**Wants:** Order to bend when the real world requires it and to record that it did.

### 2581 · Task with no owner in a group
A shared Basecamp to-do 'Send invoices' has no assignee and nobody does it for 3 weeks.
**Wants:** Unclaimed work to be visible as unclaimed.

### 2582 · Assignee changes and due date stays
In Linear a ticket due Friday is reassigned Thursday afternoon to Ceyda, who is on leave until next Wednesday.
**Wants:** To be told the new owner cannot make the date.

### 2583 · Vacation not known to the planner
A Monday task in Jira assigned to Hasan, who is on leave that week. The board shows nothing wrong.
**Wants:** Absences to count in the plan.

### 2584 · Working hours differ per person
A Motion team task for 'Anna and Berk' needs both, but Anna works 8-16 in Istanbul and Berk 9-17 in Berlin.
**Wants:** The one shared hour to be found.

### 2585 · Recurring meeting whose length varies
A monthly board meeting is 60 minutes on paper; the last 5 took 75, 90, 80, 100, 85 minutes. The calendar block stays 60.
**Wants:** The block to reflect what really happens.

### 2586 · Paused project
A ClickUp project with 40 tasks is paused for 6 weeks due to funding. Rescheduling requires shifting every date by hand.
**Wants:** One pause to move the whole thing.

### 2587 · Project plan copied for a new client
MS Project template of 60 tasks copied to start a new client's job; all dates keep the old project's start until edited by hand.
**Wants:** Set one start date and the rest follow.

### 2588 · Milestone without a duration
A conference date is a single moment, not a block. In Google Calendar it must be entered as an event with a start and end.
**Wants:** A moment to be a moment.

### 2589 · Shared event with different importance
One event 'Dinner with Hakan' is critical for Hakan but optional for Yeşim. Both calendars show the same weight.
**Wants:** Each person to mark its weight for themself.

### 2590 · Accepting an invite changes nothing in your plan
Accepting a Friday 15:00 workshop invite in Outlook does not move Seda's Friday task list, which still schedules a 15:00 task.
**Wants:** The plan to adjust to the accepted event.

### 2591 · Cancelled event leaves tasks orphaned
A cancelled client workshop left 4 prep tasks in Asana with due dates that no longer matter.
**Wants:** Prep work to be flagged as no longer needed.

### 2592 · Renamed task loses history in another app
A Reclaim task renamed in Google Calendar creates a new task in Reclaim and the original stays with tracked time.
**Wants:** One task, one history.

### 2593 · Import creates duplicates on second run
Sabah re-imports an .ics backup into Google Calendar after a partial restore; the 1,200 events that survived now appear twice.
**Wants:** Import to recognise the ones already present.

### 2594 · Deleting a shared calendar removes others' events
A Google Calendar owner deletes the family calendar to tidy up; the four other members lose their events with no warning or undo after 30 days.
**Wants:** Others' work not to disappear with the owner's choice.

### 2595 · Free-tier limit on projects
Todoist free plan limit reached at 5 projects; Doruk has to archive one to make a new one, and the archived one's tasks leave his upcoming view.
**Wants:** His plans not to disappear because of a tier.

### 2596 · App shut down
A small planner Dilek used for 3 years announces closing in 60 days; its export gives a JSON no other app reads.
**Wants:** Her plan to move to another app intact.

### 2597 · Export of recurring plus completed history
Habitica export contains the history of 900 dailies but not their repeat settings.
**Wants:** A copy to restore what she had set up, not only what she did.

### 2598 · Calendar subscription refresh lag
Barış adds an event to a Google Calendar shared by iCal feed; the colleague's Outlook shows it 8 to 24 hours later.
**Wants:** Others to see fresh changes soon enough to plan.

## Sources

### Push, dependency and limits

- https://www.mpi.org/blog/article/4-ways-to-handle-event-speaker-no-shows : how organisers reshuffle programmes when a speaker drops out, and how sessions are kept from eating the next speaker's time.
- https://www.paymoapp.com/blog/lead-lag-and-constraints/ : the four ways one task can depend on another's start or finish, and lead and lag as overlap and waiting.
- https://www.meegle.com/en_us/topics/critical-path-method/critical-path-method-dependency-types : dependency types and slack along the longest chain.

### Personal life, routines and health

- https://www.sydney.edu.au/news-opinion/news/2024/10/02/can-you-trust-your-period-tracking-app-.html — period app accuracy for irregular cycles and stress on users
- https://theconversation.com/can-i-trust-my-period-tracking-app-heres-what-it-can-tell-you-and-what-to-watch-out-for-238422 — apps assume a 28-day cycle; wrong predictions cause doubt
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12131320/ — privacy concerns of cycle tracking
- https://add.org/building-habits/ — ADHD habits, broken streak and shame
- https://flown.com/blog/adhd/time-blindness — time blindness and task initiation

### Events and celebrations

- https://www.nunify.com/blogs/wedding-run-of-show: run-of-show structure, ceremony/cocktail hour lengths, cocktail hour as buffer.
- https://www.rollingstone.com/music/music-news/lana-del-rey-glastonbury-cut-short-1234777800/: headliner late start cut by hard curfew.
- https://www.billboard.com/music/rb-hip-hop/fugees-lauryn-hill-diaspora-calling-set-cut-short-curfew-1236312422/: set cut short by curfew, microphones off.
- https://www.ticketfairy.com/blog/festival-noise-curfews-and-ordinance-compliance: noise limits that change by hour.
- https://www.ticketfairy.com/blog/mastering-conference-speaker-management-in-2026-from-booking-keynotes-to-last-minute-backup-plans: speaker cancellations, timezone confusion, overruns.
- https://www.myweddingkit.co/blog/12-month-wedding-planning-timeline: months-out vendor booking, RSVP and headcount deadlines, deposit calendar.
- https://adamscenter.org/funeral/faq/: janazah after prayer, burial within 24 hours.

### Work, projects and operations

- https://support.microsoft.com/en-us/project/how-project-schedules-tasks-behind-the-scenes — how Project schedules tasks, leveling delay and splitting.
- https://support.microsoft.com/en-us/project/manage-your-project-s-critical-path — critical tasks, slack and float in MS Project.
- https://en.wikipedia.org/wiki/Critical_path_drag — start-to-start and finish-to-finish links and lags in the longest chain.
- https://www.studiobinder.com/blog/what-is-turnaround-in-film-definition/ — turnaround rules in film production.
- https://blog.studiovity.com/efficient-film-schedule-breakdown-script-to-shooting/ — day-out-of-days and film scheduling notes.
- https://www.levelset.com/blog/construction-schedule-delay/ — excusable, compensable delays and weather documentation.
- https://www.long-intl.com/articles/concurrent-delay/ — concurrent delay.
- https://incident.io/blog/on-call-best-practices-guide-2026 — handoffs, follow-the-sun rotations, capacity lost to on-call.

### Coordination between people and servers

- https://datatracker.ietf.org/doc/rfc6638/ , CalDAV scheduling extensions; free-busy queries, privacy of busy-only view, limits of scheduling inbox.
- https://github.com/KolektivComputer/kalendee/issues/15 , real-world inconsistencies in iTIP/iMIP and replies across systems.
- https://learn.microsoft.com/en-us/troubleshoot/outlook/calendars/cannot-propose-a-new-time-for-a-meeting , limits on proposing new times, recurring meetings, organiser restrictions.
- https://www.netskope.com/blog/leaky-calendars-accidental-exposure-in-google-calendar , accidental exposure through calendar sharing.
- https://www.getmailbird.com/calendar-invitation-security-risks-protect-privacy/ , free/busy patterns reveal recurring meetings and relationships.
- https://thehackernews.com/2026/01/google-gemini-prompt-injection-flaw.html , calendar invites used to leak private meeting details.
- https://www.profsolutions.com/industries/physicians/insurance/risk-management/overbooking-and-double-booking-whats-acceptable/ , overbooking versus double booking in clinics.
- https://arxiv.org/pdf/1708.05920 , appointment schedules and no-shows.
- Custody patterns (2-2-3, week on/week off, alternating holidays) came from general knowledge; the search for a source failed with a rate limit.

### Travel, transport and prediction

- https://support.perk.com/hc/en-us/articles/23557599807388-Managing-missed-flights-and-connections - single vs separate booking responsibility on missed connections
- https://www.layoverguard.com/guides/minimum-connection-time-explained - published minimum connection time versus reality
- https://airadvisor.com/en-us/missed-connection-compensation - missed connection rebooking rules
- https://arxiv.org/pdf/2503.15177 - food delivery time prediction factors (traffic, weather, distance)
- https://careersatdoordash.com/blog/deep-learning-for-smarter-eta-predictions/ - delivery ETA accuracy and customer impact
- GTFS-realtime TripUpdate (delay, uncertainty, cancelled trips) and travel-time reliability (buffer, 95th percentile planning time): searches were rate-limited; drawn from prior knowledge, no URL fetched.

### Reconstructing the past

- https://www.emergentmind.com/topics/allen-s-interval-algebra : the thirteen Allen relations between intervals, and their use for ordering with no clock times.
- https://drops.dagstuhl.de/opus/volltexte/2017/7927/pdf/LIPIcs-TIME-2017-16.pdf : the Time Ontology of Allen's interval algebra (found in search results, not opened).
- https://www.netdata.cloud/guides/network/network-ntp-drift/ : clock drift making event order unreconstructable in postmortems.
- https://dev.to/numb_code_07/why-timestamps-lie-in-distributed-systems-and-how-logical-clocks-fix-it-k5f : timestamps lying across machines (found in search results, not opened).
- Note: WebSearch was rate-limited for forensic time-of-death and Harris matrix queries; those cases (13-15, 38-40) rely on general knowledge, not fetched sources.

### Calendars, clocks and recurrence

- https://github.com/ggaabe/rrule-temporal/issues/141 - recurrence starts in DST gaps shifted and counted against COUNT
- https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html - RFC 5545 recurrence rule text
- https://www.nylas.com/blog/calendar-events-rrules/ - RRULE complexity and pitfalls
- https://cli.nylas.com/guides/recurring-calendar-events-api - Z-suffixed start drifting across DST versus zoned start
- RFC 7529 (RSCALE, SKIP) and IANA tz history (Samoa 2011, Greenland, Paraguay) used from memory only; searches were rate-limited and not verified.

### Measuring and analysing time

- https://www.semanticscholar.org/paper/Exploring-the-%22planning-fallacy%22:-Why-people-their-Buehler-Griffin/f91964dad8c0e54cd58b1aa99e430b900fcf082b : Buehler, Griffin and Ross 1994 thesis study, 34 vs 55 days, 99% confidence hit rate of 45%.
- https://en.wikipedia.org/wiki/Planning_fallacy : summary of the planning fallacy and outside-view corrections.
- https://www.lesswrong.com/posts/CPm5LTwHrvBJCa9h5/planning-fallacy : worst-case estimates being beaten.
- https://arxiv.org/pdf/2005.06527 : Allen interval relations (meets, overlaps, during and converses) in temporal reasoning.
- https://drops.dagstuhl.de/opus/volltexte/2017/7927/pdf/LIPIcs-TIME-2017-16.pdf : the thirteen Allen relations, mutually exclusive.
- https://www.timedoctor.com/blog/toggl-vs-rescuetime/ : RescueTime deletes idle time; Toggl automated idle detection and manual entry.
- https://apploye.com/blog/rescuetime-vs-toggl/ : automatic versus manual tracking trade-offs.

### Order without time

- https://www.thekitchn.com/oven-spacetime-continuum-how-d-102473 - one-oven scheduling problem for a multi-dish meal
- https://www.americastestkitchen.com/how_tos/5452-make-ahead-thanksgiving-prep-timeline - make-ahead and work-backwards-from-serving-time planning
- https://www.blockrenovation.com/guides/home-renovation-order-what-comes-first-in-a-remodel - rough-in before drywall, inspection gates
- https://www.parkseed.com/blogs/park-seed-blog/when-to-start-seeds-indoors - weeks-before-last-frost sowing, hardening off, transplant timing
- https://www.theperfectloaf.com/guides/the-ultimate-guide-to-bread-dough-bulk-fermentation/ - rise times varying with temperature, cold retarding

### Productivity and self-planning

- https://calnewport.com/the-time-blocking-revolution-begins/ - Newport's rule to revise the day's plan after interruptions and overflow blocks
- https://makeheadway.com/blog/cal-newport-time-blocking/ - 20-30 percent overestimation cushion, overflow conditional blocks
- https://en.wikipedia.org/wiki/Timeblocking - overview of time blocking and timeboxing
- https://reclaim.ai/blog/motion-vs-reclaim - Motion's constant reshuffling versus Reclaim's next-best-slot and lock behaviour
- https://www.morgen.so/blog-posts/motion-vs-reclaim - auto-scheduler volatility and moved tasks complaints
- https://get-alfred.ai/blog/motion-vs-reclaim - manual move treated as intent, SkedPal reshuffling after missed tasks

### Programming projects: issues, PRs and releases

- https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue : fetched; used for ejection on failed checks, temporary combined branch, CI timeout, grouping.
- https://dora.dev/guides/dora-metrics/ : fetched; used for the five current metrics, change lead time and failed deployment recovery time.
- Everything else (GitHub sub-issues and dependencies, CODEOWNERS and dismissal of approvals, Linear cycles, triage and rollover, Graphite-style stacked PRs, Renovate behaviour, stale bots, release trains, semantic versioning, author versus commit date in git) came from memory, not fetched this session.

### Studying and school

- https://faqs.ankiweb.net/what-spaced-repetition-algorithm.html : Anki's SM-2 and FSRS scheduling, ease, lapses, overdue-card effect.
- https://docs.ankiweb.net/deck-options.html : daily limits, learning steps, relearning, Easy Days, roughly 200 reviews per day for 20 new cards.
- https://docs.ankiweb.net/studying.html : overdue cards prioritise longest-waiting by default (day rollover and timezone points were not on this page).
- Web search results (no page fetched) for My Study Life: rotating timetables (Day A/B, Week 1/2), sync loss and paywall complaints, from educationalappstore.com and apps.apple.com listings.
- Web search results (no page fetched) for Turkish YKS apps: Başarı Takip (basaritakip.com), Sinavify, yksprogram.com.tr, Rehber Panda; daily study logs, weekly plans, mock-exam (deneme) analysis.
- Fetches that gave nothing useful: mystudylife.com (401), support.google.com Google Classroom overview (no due-date details).

From memory, not checked this session: Quizlet, Notion student templates, Forest, Todoist, Google Classroom due-date behaviour, Duolingo streak freeze and timezone behaviour, StudySmarter, Pomodoro practice, the shape of YKS/LGS seasons, dershane and etüt practice, driving-test waiting times, UK-style A/B week timetables, extra-time accommodations. Complaints attributed to those apps are general knowledge, not sourced here.

### Studying for one exam

Nothing was fetched or searched; search was rate-limited and no known page was needed. All cases come from general knowledge and memory of how exams, timetables, oral slots, make-ups, resits, extra-time entitlements and exam-day rules typically work at universities. No specific institution's rules are quoted, and the numbers are invented for illustration.

### Preparing for a big exam

- Nothing was retrieved. One WebFetch to osym.gov.tr returned HTTP 404 and I did not retry. All exam facts (YKS two-day structure, registration and late fee windows, 2-year validity examples, CFA about 300 hours per level and result delay, pass-rate range, licence hour minimums, retake waiting periods) are from memory and are illustrative. Numbers in cases are invented for setup and should not be treated as real rules.

### Goals

- https://en.wikipedia.org/wiki/Objectives_and_key_results (fetched: 0.0 to 1.0 scoring, 0.7 target, committed vs aspirational, alignment, failure modes)
- https://en.wikipedia.org/wiki/Goal_setting (fetched: Locke and Latham, SMART, goal conflict, learning vs performance goals, feedback)
- From memory, not fetched: Strides, Lattice and Weekdone feature sets (habit and target tracking, progress check-ins, OKR rollup and alignment, weekly updates); Doerr "Measure What Matters" on OKRs; Locke and Latham commitment and difficulty findings; leading vs lagging indicator practice; weight-trend smoothing practice.

### Quotas and targets

- https://help.beeminder.com/article/98-the-safety-buffer (fetched: akrasia horizon of 7 days, slope changes, breaks by setting rate to 0, safety buffer ratcheting)
- https://nanowrimo.org/ (fetch returned nothing; NaNoWriMo pacing of 50,000 words in 30 days = 1,667 a day is from memory)
- From memory, not fetched: sales quota proration by working days, billable-hours targets of around 1,800 per year, Duolingo streak and timezone behaviour, the 10% weekly training increase rule of thumb.

### Cycle and reproductive health

- https://support.apple.com/en-us/120356 — what Apple Cycle Tracking logs, six-day fertile window, deviation and perimenopause notices, "not birth control".
- https://support.apple.com/en-us/120357 — retrospective ovulation estimates from wrist temperature, two-cycle wait, limits.
- https://help.flo.health/hc/en-us/articles/360015317051-My-period-is-late-but-Flo-just-moves-its-prediction-to-the-next-day — Flo shows a window before it says "late".
- https://flo.health/flo-accuracy — Flo widens fertile window when it cannot predict; accuracy claims.
- https://dripapp.org/faq.html — Drip's three-cycle rule, 99-day cycle skip, PCOS and perimenopause limits, CSV migration.
- https://dripapp.org/ — local-only, symptothermal, transparency.
- https://www.ftc.gov/news-events/news/press-releases/2021/01/developer-popular-womens-fertility-tracking-app-settles-ftc-allegations-it-misled-consumers-about — Flo shared pregnancy data with analytics firms.
- https://www.healthcaredive.com/news/flo-anonymous-mode-period-tracker-app-abortion-roe/631926/ — anonymous mode and its unrecoverable-data trade-off.
- https://www.siliconrepublic.com/enterprise/stardust-period-app-encryption — Stardust encryption claims rolled back.
- https://womenhelp.org/en/page/1082/euki-app — Euki local data, no account, decoy screen.
- https://www.washingtonpost.com/technology/2019/04/10/tracking-your-pregnancy-an-app-may-be-more-public-than-you-think/ — employer-facing pregnancy data and re-identification worry.
- https://techcrunch.com/2016/07/30/serious-privacy-flaws-discovered-in-glow-fertility-tracker-app/ — Glow exposure of personal data.
- https://f-droid.org/en/packages/com.mensinator.app/ — Mensinator's local, no sign-up tracker.
- https://www.factsaboutfertility.org/can-the-oura-ring-predict-when-i-ovulate-a-review-of-research/ — ring ovulation detection limits.
- https://support.whoop.com/s/article/Menstrual-Cycle-Coaching?language=en_US — Whoop estimates, natural cycles only.
- https://www.nature.com/articles/s41746-019-0152-7 — Bull et al. cycle variability, follicular versus luteal spread.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10226714/ — Apple Women's Health Study variability by age.
- https://helloclue.com/articles/sex/pill-your-period — withdrawal bleeding is not a period.
- https://www.healio.com/clinical-guidance/menopause/overview-of-menopause-overview — perimenopause cycle variation.
- https://llli.org/breastfeeding-info/menstruation/ — return of periods while breastfeeding.
- https://pubmed.ncbi.nlm.nih.gov/36819572/ — weight loss and amenorrhea.
- https://reisemedizin.uzh.ch/en/blog/late-period-on-vacation — travel, shift work and late periods.
- https://www.naturalcycles.com/how-effective-is-natural-cycles — green and red days, perfect versus typical use.

### How the cycle works

- Bull JR et al. 2019, npj Digit Med, Real-world menstrual cycle characteristics of more than 600,000 menstrual cycles. https://doi.org/10.1038/s41746-019-0152-7
- NHS, Periods. https://www.nhs.uk/conditions/periods/
- Li H et al. 2023, Apple Women's Health Study, npj Digit Med. https://doi.org/10.1038/s41746-023-00848-1
- Worsfold L et al. 2021, Period tracker applications. https://doi.org/10.1177/17455065211049905
- Britton and Duncan 2026, elite athlete meta-analysis. https://doi.org/10.1530/raf-25-0131
- Itoi S et al. 2026. https://doi.org/10.1186/s12905-026-04308-2
- Jiang X et al. 2026. https://doi.org/10.1186/s12905-026-04599-5
- Full report: /home/whoam/projects/cascading-time-containers-protocol-specs/research/menstrual-cycle-how-it-works.md

### Fertility and pregnancy timing

Fetched in this session:
- NHS antenatal appointments page (nhs.uk/pregnancy/your-pregnancy-care/your-antenatal-appointments/): 11-14 week scan, anomaly scan 18-21 weeks (used 18-22 in cases where a hospital rule is stated), glucose test 24-28 weeks, anti-D at 28 weeks.
- HFEA IVF page (hfea.gov.uk/treatments/explore-all-treatments/in-vitro-fertilisation-ivf/): stages, 4-6 week cycle length, test date given by the clinic.

From memory, not checked this session (treat as unverified):
- Trigger about 36 hours before retrieval; transfer day 3 or day 5; blood test roughly 9-11 days after transfer; fasting before retrieval and the glucose test; monitoring every 2-3 days.
- Whooping cough vaccine offered from 16 weeks in the UK, flu jab in season; rules differ between countries.
- Referral after 12 months of trying (6 months if 36 or over); funding rules for IVF cycles vary by region and are illustrative.
- Postnatal check at 6-8 weeks; fertility can return before the first period while breastfeeding.
- Maternity leave start rules and notice periods are illustrative, not any specific country's law.
- Ovulation urine test surge timing and morning vs afternoon reading.

### Menstrual conditions and life stages

- Fetched: NHS, "Menopause: symptoms" (nhs.uk/conditions/menopause/symptoms/), 2026-09-30. Used for the 12-month definition, perimenopause symptoms, HRT making periods more regular.
- IAPMD page (iapmd.org/about-pmdd) redirected and was not fetched; PMDD content is from memory.
- From memory (not verified this session): NICE NG23 menopause guidance (sequential HRT for perimenopause, continuous combined after about 12 months without periods or at natural stopping); progesterone about 7 days before the expected period and FSH/estradiol on days 2 to 5; menstrual migraine prevention timing; RED-S and bone density scanning after roughly 6 months without a period; endometriosis diagnostic delay (UK average commonly quoted as about 8 years); iron and tea/coffee spacing; postmenopausal bleeding needing urgent review; metformin stepped titration; testosterone therapy and bleeding.
- Not consulted: ACOG, Endometriosis Foundation, British Menopause Society (search rate-limited).

### Freelancing and billable time

All from memory; no web search or fetch was performed (search was said to be rate-limited, and none was attempted). Points drawn from general knowledge, unverified against current docs:
- Legal billing in tenths of an hour (6-minute increments) and minimum-charge conventions: general knowledge of law-firm practice.
- Toggl, Harvest and Clockify behaviours (timers left running, rounding settings, retainers and budgets, rate changes, project caps): recalled from their public product behaviour, not re-checked.
- Payment terms (net-30 and net-60), late fees, quarterly estimated tax dates (US: 15 Jan, 15 Apr, 15 Jun, 15 Sep), VAT quarterly filing: general knowledge; dates and rules vary by country and were not checked.
- Gig-economy shift earnings, delayed tips, and utilisation targets such as 75 percent: general knowledge of common practice.

### Sports training plans

Fetching one Hal Higdon page returned HTTP 404, and no searches were run because of the rate limit. Almost everything below is from memory and was not checked against a source this session.
- From memory: Hal Higdon novice marathon plans (18 weeks, long run weekend, cutback weeks, three-week taper).
- From memory: the 10% weekly increase rule of thumb, base/build/peak/taper periodisation, and recovery weeks every 3 to 4 weeks (masters athletes needing longer).
- From memory: TrainingPeaks and Runna behaviours (planned versus completed workouts, zones from tests, plans anchored to a race date and adjusted when dates change).
- From memory: typical marathon taper of about 2 to 3 weeks with volume cut by about 20 to 60%; heart-rate zone systems and HRV-based readiness.
- Inferred: all names, times and counts are invented for the cases.

### Sleep

- Fetched: CMS NCD 240.4 (CPAP for OSA) page, https://www.cms.gov/medicare-coverage-database/view/ncd.aspx?ncdid=226. It confirms a 12-week initial coverage period and AHI thresholds (15 or more, or 5-14 with symptoms). It did not state the hours-per-night rule.
- Attempted: NCBI Bookshelf NBK526007 for CBT-I; blocked by a captcha, nothing extracted.
- From memory, not verified this session: the 4 hours on 70% of nights within a 30-day consecutive window during the first 90 days (common insurer adherence rule); CBT-I sleep restriction with a 5-hour minimum time in bed and 15-minute weekly widening at high sleep efficiency (about 85-90 percent); jet-lag advice of shifting about 1 hour a day, with morning light for eastward and evening light for westward travel; melatonin taken several hours before target bedtime for phase advance; infant wake windows of roughly 1.5 to 2.5 hours at 4 to 6 months; the clocks-back hour appearing twice; caffeine cut-off of 6 to 8 hours before bed; typical AASM guidance of at least 7 hours for adults.

### Food and nutrition planning

Research attempt: a fetch of foodsafety.gov's leftovers chart returned HTTP 403, and no search was run because of the rate limit. Everything below is from memory and unverified against a current page.
- From memory: US food-safety guidance that cooked leftovers keep 3 to 4 days in the fridge, and that cooked food should not sit at room temperature over about 2 hours (1 hour above 32 C). Basis for cases 1838, 1840, 1841, 1873.
- From memory: a common blood test fasting rule of 8 to 12 hours with water allowed, and that a longer fast can also distort results. Basis for cases 1878 to 1880. Clinics differ.
- From memory: the practice of introducing one new food to a baby every 2 to 3 days to spot a reaction. Basis for cases 1875 to 1877. Advice differs between authorities.
- From memory: common complaints about calorie-tracking apps (MyFitnessPal duplicate and user-entered database entries, restaurant estimates, late logging, day boundaries and timezones) and about meal-planning apps (Mealime, Paprika: grocery lists not following plan changes, no leftover life, single-household assumption). Basis for cases 1836, 1846, 1884 to 1887. Not verified with pages today.
- From memory: Ramadan times set by sunset and dawn per location; Eid start depends on moon sighting, so it can be uncertain by a day. Basis for cases 1854 to 1857.
- Judgement, not sourced: the 8 hours before bed caffeine cut-off (case 1863), the alcohol figures (cases 1864, 1865) and the hydration numbers (cases 1866, 1867).

### Religious practice in daily planning

All of the following is from memory, not fetched in this session (search was rate-limited and was not used). Treat dates, distances and durations as approximate illustrations, not authoritative rulings.
- Islam: five daily prayers and their windows; shortened prayers for travellers (about 90 km, with stay limits that differ between schools, from 4 days to 15 days); Friday prayer at midday; make-up prayers and fasts; Ramadan and its last ten nights, i'tikaf from sunset on the 20th; five kandil nights in the Turkish calendar; Eid al-Adha sacrifice days (10th to 12th or 13th of the last month), seven shares per large animal; 60 consecutive days of expiation; vows (nazr); the hajj on 8th to 13th of the last month and the lesser pilgrimage; national pilgrimage quotas; 604-page Madani print divided into 30 parts giving about 20 pages a day.
- Judaism: the day of rest and festivals from nightfall to nightfall; three stars for the end of the day of rest; the count of 49 days between Passover and Shavuot counted at night; customs about which 33 days of the count are semi-mourning; the new year never falls on a Sunday, Wednesday or Friday; 25-hour fast of the day of atonement; four days between the day of atonement and the festival of booths; the eighth-day rite postponed for health.
- Christianity: Great Lent of 40 days with Sundays not counted in the western reckoning; Wednesday and Friday fasts and the Nativity fast in the Orthodox churches; Advent has four Sundays and a length of 22 to 28 days; Easter differs between western and Orthodox churches in most years; Holy Week services.
- Hindu tithi: lunar days are about 19 to 26 hours long and can start and end at any hour, so a civil day can touch two or none; Ekadashi fasting twice a month; yearly memorial rites on the lunar day of death; almanacs differ.
- Buddhism: observance days on full and new moon and the quarter days, eight precepts including no food after noon; the three-month rains retreat; ten-day silent retreats without phones.
- Bahá'í: 19 months of 19 days, Feast on the first day of each, and a 19-day fast before the new year festival.
- Not verified: the exact lengths of prayer times, the sunset offsets and specific years quoted. No Diyanet, halachic or church calendar page was fetched.

### Money and time

Fetched in this session:
- https://en.wikipedia.org/wiki/Credit_card - grace periods typically 20 to 55 days; no grace period if a balance is carried from the previous cycle.
- https://www.bddk.org.tr/Mevzuat/Detay/16 (Turkish banking regulator, instalment limits and bans) - as reported by a web search summary only, not opened: general 12-month cap, shorter caps for electronics, computers, clothing; instalments banned for categories such as fuel, food, cosmetics and jewellery; furniture up to 18 months. Limits change over time, so case 1964 treats them as unstable.
- https://www.ynab.com/ynab-method - fetched, but the page did not state the four rules; the envelope and payday-reset ideas (cases 1981 to 1984) come from memory of the YNAB method (give every lira a job, budget only money in hand, adjust categories when reality changes, age your money).

From memory, not verified this session:
- Statement date versus due date arithmetic and how new purchases lose interest-free days when a balance is carried (cases 1957 to 1959); typical bank practice.
- Turkish income tax instalments in March and July and the annual motor vehicle tax in January and July (cases 1993, 1997).
- Turkey has no daylight saving; Germany does (case 1956).
- Passport six-month validity rule for many destinations (case 1998); varies by country.
- Refund times, warranty extension during repair, Turkish 14-day withdrawal right for distance sales (cases 1971 to 1975).
- Pension day counts (case 2004): the 7,200 figure is an illustrative number, not checked against current rules.
- Car inspection rules and fines (case 1996), foreign-currency loans, and the employer payday rules in cases 1950 and 1951.

### Release calendars, LTS and support windows

- https://nodejs.org/en/about/previous-releases
- https://github.com/nodejs/Release
- https://docs.deno.com/runtime/fundamentals/stability_and_releases/
- https://peps.python.org/pep-0602/
- https://www.python.org/downloads/
- https://ubuntu.com/about/release-cycle
- https://kubernetes.io/releases/
- https://endoflife.date/nodejs
- https://endoflife.date/docs/api/v1/
- https://go.dev/doc/devel/release
- https://forge.rust-lang.org/release/process.html
- https://wiki.debian.org/DebianReleases
- https://whattrainisitnow.com/calendar/
- https://learn.microsoft.com/en-us/windows/release-health/release-information
- From memory, not fetched: Fedora, Chrome, Android, iOS, Java, Arch, openSUSE, IR practice. Case setups are illustrative; the company names are invented.

### Stock exchanges and financial markets

- https://www.nyse.com/markets/hours-calendars (NYSE holidays, early closes, session hours; read 2026-09-30)
- https://www.sec.gov/newsroom/press-releases/2023-29 (T+1 from 28 May 2024; read 2026-09-30)
- https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm (two-day meetings, minutes three weeks later, tentative dates; read 2026-09-30)
- https://github.com/gerrymanoim/exchange_calendars (sessions, breaks, UTC-aware times; read 2026-09-30)
- Circuit-breaker levels, LULD, LSE and Xetra auction times, Tokyo hours, BIST hours, RTS 25 tiers, day-count and business-day conventions: from memory, not read from a source (see the research report)
- /home/whoam/projects/cascading-time-containers-protocol-specs/research/financial-markets-time.md

### Crypto and block time

- https://en.bitcoin.it/wiki/Timelock
- https://en.bitcoin.it/wiki/Block_timestamp
- https://developer.bitcoin.org/devguide/block_chain.html
- https://ethereum.org/developers/docs/consensus-mechanisms/pos/
- https://ethereum.org/developers/docs/consensus-mechanisms/pos/gasper/
- https://ethereum.org/developers/docs/blocks/
- https://docs.cosmos.network/sdk/latest/modules/staking/README

### Military and emergency operations planning

- https://en.wikipedia.org/wiki/D-Day_(military_term) (fetched 2026-09-30)
- https://en.wikipedia.org/wiki/Date-time_group (fetched 2026-09-30)
- https://en.wikipedia.org/wiki/Air_tasking_order (fetched 2026-09-30)
- https://en.wikipedia.org/wiki/Incident_Command_System (fetched 2026-09-30)
- FM 5-0, JP 5-0, JP 3-30, NATO COPD, FEMA ICS training: from memory only, not fetched. Full notes are in the military-planning-time research report.

### Emergency planning and preparedness

All cases are constructed illustrations, not reports of real events except that 6 February 2023 (Kahramanmaraş and Hatay earthquakes, at 04:17 and 13:24 local time) and 17 August 1999 are historical dates. Background facts (DASK compulsory earthquake insurance after 1999, decree 587 and Law 6305; Turkish building code years 1975, 1998, 2007 and 2018 with the 2018 code in force from 1 January 2019; Sendai Framework; early warning behaviour) were checked on 2026-09-30 against local copies of AFAD, DASK, UNDRR, Wikipedia and the SBB 2023 earthquake report; see the accompanying research report. Not verified: the annual DASK renewal term, the drill practice in Türkiye, and the household kit expiry details, which remain from model memory.

### Emergency response

- Read from local copies on 2026-09-30 (fetched via curl): https://www.insarag.org/methodology/insarag-guidelines/ , https://en.wikipedia.org/wiki/International_Search_and_Rescue_Advisory_Group , https://en.wikipedia.org/wiki/Urban_search_and_rescue , https://en.wikipedia.org/wiki/Simple_triage_and_rapid_treatment , https://en.wikipedia.org/wiki/Mass_casualty_incident , https://en.wikipedia.org/wiki/Humanitarian_Cluster_System , https://en.wikipedia.org/wiki/Incident_Command_System , https://en.wikipedia.org/wiki/Restoring_Family_Links , https://en.wikipedia.org/wiki/Disaster_victim_identification , https://tr.wikipedia.org/wiki/AKUT_Arama_Kurtarma_Derne%C4%9Fi , https://tr.wikipedia.org/wiki/Ahbap , https://tr.wikipedia.org/wiki/T%C3%BCrk_K%C4%B1z%C4%B1lay , and the Turkish government's 2023 earthquake report (SBB).
- The cases are drawn from those sources where they cover a detail (START triage colours, INSARAG marking, ICS, cluster coordination, Red Cross family tracing, disaster victim identification, AFAD) and otherwise from general knowledge (team sizes, timings, survival odds, EMT capacities). All names, times and counts are invented placeholders.
- Full notes, with a per-claim tag of sourced, corrected or memory, are in the research report at /home/whoam/projects/cascading-time-containers-protocol-specs/research/emergency-response.md

### Kahramanmaraş and Hatay earthquakes, 2023

- https://www.sbb.gov.tr/wp-content/uploads/2023/03/2023-Kahramanmaras-ve-Hatay-Depremleri-Raporu.pdf
- https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000jllz&format=geojson
- https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000jlqa&format=geojson
- https://en.wikipedia.org/wiki/2023_Turkey%E2%80%93Syria_earthquakes
- https://en.wikipedia.org/wiki/Aftermath_of_the_2023_Turkey%E2%80%93Syria_earthquakes
- https://en.wikipedia.org/wiki/Humanitarian_response_to_the_2023_Turkey%E2%80%93Syria_earthquakes
- https://tr.wikipedia.org/wiki/2023_Kahramanmara%C5%9F_depremleri

### Recovery after a disaster

- All households, names, dates and counts in these cases are invented composites for the purpose of describing situations. They are drawn from general knowledge of the 2023 Kahramanmaraş and Hatay earthquakes, the 1999 İzmit earthquake, the 2011 Tōhoku earthquake, the 2010 Haiti earthquake and Hurricane Katrina (2005), not from any specific person or record.
- Background facts were checked afterwards against local copies of the SBB 2023 earthquakes report and Wikipedia pages on the 1999 İzmit, 2011 Tōhoku and 2010 Haiti earthquakes and Hurricane Katrina (fetched 2026-09-30). No case contradicts them. See `research/disaster-recovery.md` for each claim's source.

### Other emergencies: fire, flood, storm, pandemic, blackout

Checked on 2026-09-30 against local copies (fetched via curl). No case detail was contradicted by these; figures and times in the cases stay illustrative. Details the sources do not cover (31 provinces, age-curfew hours, 17 May end of closure, cohort dates) remain from memory.
- https://en.wikipedia.org/wiki/Wildfires_in_Turkey
- https://en.wikipedia.org/wiki/Floods_in_Turkey
- https://en.wikipedia.org/wiki/COVID-19_pandemic_in_Turkey
- https://en.wikipedia.org/wiki/COVID-19_vaccination_in_Turkey
- https://www.nhc.noaa.gov/aboutcone.shtml
- https://en.wikipedia.org/wiki/Severe_weather_terminology_%28United_States%29
- https://en.wikipedia.org/wiki/Tsunami_warning_system
- https://en.wikipedia.org/wiki/Mobile_stroke_unit
- https://en.wikipedia.org/wiki/Heat_wave
- https://en.wikipedia.org/wiki/2021_Texas_power_crisis

### What planning apps do and don't

- https://orgmode.org/manual/Repeated-tasks.html: org-mode repeater kinds (+, ++, .+)
- https://taskwarrior.org/docs/recurrence/: template and instance recurrence, limit of 1
- https://developers.google.com/calendar/api/guides/sync: sync tokens, 410 full resync
- https://support.google.com/calendar/answer/37111: Google Calendar export as ics, feed error
- https://github.com/obsidian-tasks-group/obsidian-tasks: task fields in markdown, recurrence
- https://support.atlassian.com/jira-software-cloud/docs/what-is-an-issue/: Jira work items, board limit
- https://www.rfc-editor.org/rfc/rfc5545: iCalendar recurrence and timezone rules
- https://www.rfc-editor.org/rfc/rfc4791: CalDAV ETag sync
- https://developer.todoist.com/rest/v2/: Todoist API overview
- Most cases are drawn from memory of app behaviour and user complaints; not individually verified.

# Old prompts

This is some VERY old prompts that i used when i was thinking about CTCP

# 1

lets talk about our ICalander alternative protocol: Cascading Time Containers Protocol (CTC or CTCP).

Time flows, things effects each other. For example: When a meeting takes longer then expected, your second meeting should be delayed (moved). The "Cascading" part is this; things can and will effect each other. The CTC server will calculate anything you want. Some things might not effect each other, because they might not be in the same "cascade", "waterfall" or in other words "stream". What effecting by what cascade is on the server, managed by you. Currently, Google Calendar does not has this. You need to change the places of events. 

Events have sub events. So containers has sub containers. With CTC, you have no limit for event details or abstractions. Everything is an container. For example: When you go to an expo, there will be presentations on a specific time. They are not 2 separate things. So when expo gets canceled, the presentation goes. Or you being late for expo might mean you came in middle of the presentation. Those presentations would likely have their own "title" containers that might reveal to us as time goes. But all planing and all details, even somebody walking to stage can stored, and their little action. So this means you share your containers, like giving mail addresses on SMTP, you gave links to people that can use your CTC server to get info about an container. Also think about car crashes, when two cars collide, this event has sub events. There is a "Both cars lights colliding each other" container in the "car crush" container and so on. Also, there is no "date" or "time system" in this protocol. EVERYTHING is containers. For example; days are containers, like months and years and decades (if you want it like that), and like millenniums and so on! A container can contain multiple containers and a container can be contained by multiple containers. So the expo is contained by starting from 13:30 to rest of it, all of the 14's containers and all of the 15's containers. What do i mean by "all of the"? You can chose to have as many depth as you like. So minutes? Cool. Seconds? Cool. MS or Nanoseconds? We are cool with all that. You just enter the parent containers to containers information (by data, user usually does not cares about this). Google Calander does not has any light of this. No events having sub events, maybe a calander for that event and its messy. Or no sens of depth, everything is the classic time system we have. With the no root-container system; we can chose to use 30 days month system and the only thing we need to use will be a adapter/converter. You can even get out of the solor day logic and count 2 solar days as one! Or what ever you like!

"Time" is a concept. Its dynamic, and we need to calculate it. If we can have good time management, if we can hold record of things in a good way; we can achieve anything.

# 2

lets talk about our ICalendar alternative protocol: Cascading Time Containers Protocol (CTC or CTCP).

Time flows, things effects each other. For example: When a meeting takes longer then expected, your second meeting should be delayed (moved). The "Cascading" part is this; things can and will effect each other. The CTC server will calculate anything you want. Some things might not effect each other, because they might not be in the same "cascade", "waterfall" or in other words "stream". What effecting by what cascade is on the server, managed by you. 

Currently, Google Calendar does not has this. You need to change the places of events. 

Events have sub events. So containers has sub containers. With CTC, you have no limit for event details or abstractions. Everything is an container. For example: When you go to an expo, there will be presentations on a specific time. They are not 2 separate things. So when expo gets canceled, the presentation goes. Or you being late for expo might mean you came in middle of the presentation. Those presentations would likely have their own "title" containers that might reveal to us as time goes. But all planing and all details, even somebody walking to stage can stored, and their little action. So this means you share your containers, like giving mail addresses on SMTP, you gave links to people that can use your CTC server to get info about an container. Also think about car crashes, when two cars collide, this event has sub events. There is a "Both cars lights colliding each other" container in the "car crush" container and so on. Also, there is no "date" or "time system" in this protocol. EVERYTHING is containers. For example; days are containers, like months and years and decades (if you want it like that), and like millenniums and so on! A container can contain multiple containers and a container can be contained by multiple containers. So the expo is contained by starting from 13:30 to "rest" of it (those sub containers), all of the 14's containers and all of the 15's containers. What do i mean by "all of the"? You can chose to have as many depth as you like. So minutes? Cool. Seconds? Cool. MS or Nanoseconds? We are cool with all that. You just enter the parent containers to containers information (by data, user usually does not cares about this). Btw, you might even delete an container just because you dont meet the "conditions". For example; when you should go to an city but you CANT, the calendar deletes it. This means a meeting can be moved as much as each required person allowed, some people that crucial to meeting not coming might delete the event (the container). Or move it to an proper time according to others calendars. 

Google Calendar does not has any light of this. No events having sub events, maybe a calendar for that event and its messy. Or no sens of depth, everything is the classic time system we have. With the no root-container system; we can chose to use 30 days month system and the only thing we need to use will be a adapter/converter. You can even get out of the solor day logic and count 2 solar days as one! Or what ever you like!

People probably will use the classic ms time form Unix for all, server will know where it is and what are the next steps. The protocol still has no time anchor but server calculates it from the unix time, so 1 second is 1000 ms, 1 minute is 1 second so its 60.000 ms... and so on. System can calculate from this. If you have something else like an "atomic clock", you might can go lower. We dont really care; if it matches or has an adapter for others (like for Gregorian), you can use what ever you like. 

There is no problem for "cascading" part btw. If two "should be cascaded" container do not move, its a you problem. Some cascades (streams) SHOULD cascade, like days and hours and minutes and seconds and ms.. If you fail them... Sorry but its a YOU problem. There is no possible "conflict" in this concept. You or your calendar chooses what moves. 

Also time is linear. It can move 1st by something needing more time inside of 2nd makes it bigger to 1st one (to 2nds past) because maybe it cant size to future (2nds future) because of an condition, it can move the first one. But if both of them pushes each other, the calendar chooses auto (by moving any one of them to an none conflicting future) or hands it to you.

we have lazy resolution for time/date containers: You don't materialize the full ancestor/parent chain until you need it, and the server computes position on demand rather than storing every ancestor explicitly. Actually this depends on server. We just create the data system, we do not  care about what server does for optimization. We have behavior rules (protocol) on containers, we do not care about them being real unless they exist or needed. So you do no need tomorrow for now. But there is/can-be a tomorrow by your logic.

The sharing model is giving people links to containers on your CTC server; is essentially a federated URI scheme. This is analogous to how ActivityPub works for social content, or how CalDAV works but much more granular.

```
ctcp://who.ulus.org/containers/expo-2026
ctcp://who.ulus.org/containers/expo-2026/keynote
ctcp://who.ulus.org/containers/expo-2026/keynote/speaker-intro
```

Subscribing to a container gives you push notifications when its cascade resolves and it shifts. You subscribe to the expo, and when it gets canceled, your client gets a delta, not a full re-fetch.
This connects directly to universal delta/diff protocol interest. A cascade resolution is a diff, it's a set of container position changes. CTC's wire format could be pure diffs with container IDs.

| Concept | iCalendar | CTC |
|---|---|---|
| Time representation | Absolute datetime (epoch offset) | Positional within container graph |
| Event depth | Flat (workaround: separate calendars) | Infinite, native |
| Cascading effects | Manual | Server-computed |
| Calendar system | Gregorian hardcoded | User-defined |
| Precision | Seconds | Whatever granularity you define |
| Federation | CalDAV (clunky) | URI-native |
| "Event affects event" | Not a protocol concept | First-class (cascading) |

Remember, its might not just be "calendars". This is an "Time" system.

"Time" is a concept. Its dynamic, and we need to calculate it. If we can have good time management, if we can hold record of things in a good way; we can achieve anything.

Think about every concept we have, ask questions.
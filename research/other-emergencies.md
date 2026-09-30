---
topic: Non-earthquake emergencies (fire, flood, storm, tsunami, heat, snow, pandemic, blackout, industrial, health, missing child) as time-structured events, and how people and authorities plan around them
date: 2026-09-30
sources read with dates:
  - S1 https://www.nhc.noaa.gov/aboutcone.shtml (fetched 2026-09-30 via curl, read from local copy)
  - S2 https://en.wikipedia.org/wiki/Wildfires_in_Turkey (fetched 2026-09-30 via curl, read from local copy)
  - S3 https://en.wikipedia.org/wiki/Floods_in_Turkey (fetched 2026-09-30 via curl, read from local copy)
  - S4 https://en.wikipedia.org/wiki/COVID-19_pandemic_in_Turkey (fetched 2026-09-30 via curl, read from local copy)
  - S5 https://en.wikipedia.org/wiki/COVID-19_vaccination_in_Turkey (fetched 2026-09-30 via curl, read from local copy)
  - S6 https://en.wikipedia.org/wiki/2021_Texas_power_crisis (fetched 2026-09-30 via curl, read from local copy)
  - S7 https://en.wikipedia.org/wiki/Severe_weather_terminology_%28United_States%29 (fetched 2026-09-30 via curl, read from local copy)
  - S8 https://en.wikipedia.org/wiki/Tsunami_warning_system (fetched 2026-09-30 via curl, read from local copy)
  - S9 https://en.wikipedia.org/wiki/Mobile_stroke_unit (fetched 2026-09-30 via curl, read from local copy)
  - S10 https://en.wikipedia.org/wiki/Heat_wave (fetched 2026-09-30 via curl, read from local copy)
status: research — not yet promoted to .context/
---

# Other emergencies, seen as time

## Verification pass (2026-09-30)

This report was first written entirely from memory (web access failed). It was then checked against the ten local copies listed above. All sources are Wikipedia or one NOAA page; no Turkish primary source (AFAD, OGM, MGM, Sağlık Bakanlığı, İçişleri Bakanlığı) was read.

Tag counts in this file (counted with grep over the body, this header excluded):

- **Sourced** `[S#]`: 83 tags, each pointing at a source in the frontmatter.
- **Corrected** `[corrected: S#]`: 10 tags. Each is followed by a short "Changed:" note.
- **Still memory** `[mem]`: 35 tags. Not covered by any local source.

The COVID curfew dates and the 2021 wildfire and flood facts were the main problem areas; see the "Changed:" notes. One source oddity is also recorded in section 4.

## 0. Reliability of this document

- Tags: `[S#]` = supported by the local copy of that source (key in frontmatter); `[corrected: S#]` = memory was wrong or imprecise, fixed from that source; `[mem]` = memory, unverified, treat as a lead.
- The sources are Wikipedia articles and are secondary. Wikipedia pages can disagree with themselves (see the flood death toll in section 2). Treat sourced figures as "per Wikipedia as fetched", not as primary-source fact.
- Gaps: no Turkish primary source consulted. Turkish alert channels (112, SMS, MGM warnings) not confirmed. No source on hurricane advisory cadence, industrial shelter-in-place, the AMBER-type alert, or stroke/heart-attack timing targets.

## 1. Wildfires

- **Turkey 2021.** The fires started in Manavgat (Antalya) on 28 July 2021, at about 37 °C `[S2]`. More than a hundred fires burnt nearly 1,600 km² of forest in July and August, the worst season in the history of the republic `[S2]`.
  - Fires then hit Bodrum and Milas (Muğla); the Kemerköy power plant was evacuated on 4 August `[S2]`. Marmaris had its own fires much earlier, on 26–27 June `[corrected: S2]`.
    - Changed: memory put Marmaris in the late-July wave. The source dates Marmaris to 26–27 June.
  - Rain on 7 August helped bring the Antalya fires under control, but Muğla stayed serious with 13 fires in 5 provinces `[S2]`. So the fires did not end at one time across regions, and the source gives no single end date `[corrected: S2]`.
    - Changed: memory said "burning for roughly two weeks". The source shows staged ends by province.
  - Nine people died, at least two of them firefighters `[corrected: S2]`.
    - Changed: memory said about 8 deaths. The source says nine. A separate crash on 14 August killed 8 people aboard a Be-200 water-bomber `[S2]`.
  - Fast spread under wind in Manavgat `[mem]`. The source gives temperature, not wind, for that day.
  - Evacuations: 18 villages in Antalya and 16 in Adana and Mersin `[S2]`; more than 4,000 tourists and staff from 2 Bodrum hotels were evacuated by sea by the Coastguard with private boats `[S2]`; people near Milas were also evacuated by sea `[S2]`.
- **Warning timing.** In the US system a fire weather watch means conditions favourable for rapid wildfire spread within 12 to 48 hours, or up to 72 hours `[corrected: S7]`. A specific fire gives minutes to hours `[mem]`.
  - Changed: memory said fire-weather indices give "days" of lead time. The NWS definition is 12 to 72 hours. This is the US definition, not a Turkish one.
- **Duration.** Unknown at ignition; "contained" comes in stages: spread stopped, perimeter held, mop-up; rekindling after "controlled" occurs `[mem]`.
- **Evacuation decision points.** Wind shift, road closure, smoke `[mem]`. Supporting instances: in July 2025 a sudden wind change surrounded and killed ten responders at Seyitgazi `[S2]`; in 2021 fallen trees blocked roads and firefighting planes could only fly in daylight `[S2]`. Orders come area by area and people leave before an order `[mem]`.
- **Declared over.** "Under control" then "extinguished"; fires restart from hot spots `[mem]`.
- **Calendar effects.** Public access to various forests was banned until autumn `[S2]`. Hotel bookings, roads, seasonal workers `[mem]`. Government loan repayments were postponed for the injured `[S2]`.
- **Added from source.** 2025 İzmir fires: over 50,000 evacuated from 41 settlements after a start on 29 June, brought under control on 4 July, airport temporarily closed `[S2]`. Nine in ten Turkish wildfires are human-caused `[S2]`. The season now runs May to September `[S2]`.

## 2. Floods and flash floods

- **Black Sea floods, August 2021.** Thunderstorms from 7 August to 14 August in northern Turkey `[S3]`. The heaviest rain fell 10 to 12 August, with multiple flash flood warnings issued by the General Directorate of Meteorology `[S3]`. Kastamonu flooding began about a day into the second rainy period `[S3]`. The exact date of 11 August for Bozkurt is consistent with this but not stated as such `[mem]`.
  - Bartın, Kastamonu and Sinop were the worst hit; Bozkurt and Ayancık were among the towns named `[S3]`. At least 6 bridges were destroyed and electricity was cut to hundreds of villages `[S3]`.
  - Deaths: 97 dead and about 228 injured in the article's opening; the Impact section says at least 81 `[corrected: S3]`. The source is inconsistent with itself and also reports contested missing counts.
    - Changed: memory said about 80 deaths. The source gives both 81 and 97; do not quote one without saying which.
  - Rain "built over many hours" and fast surge in narrow valleys: Ayancık, Küre and others got large totals "mostly in the span of a couple of hours" `[S3]`.
- **Warning timing.** Authorities had warned of possible flash flooding, but many locals felt the warnings were inadequate for the severity `[S3]`. Claims of misleading announcements before the flood were reported but not confirmed `[S3]`. NWS flash flood watch: issued 6 to 24 hours ahead; a flash flood is one within six hours of excessive rainfall `[S7]`. The 30 to 60 minute (or none) upstream-to-downstream lead time `[mem]`.
- **Duration.** Rain event lasted a week in the 2021 case `[corrected: S3]`; river crest moving downstream over hours and clean-up over weeks to months `[mem]`.
  - Changed: memory said "hours to days" for the rain event. The 2021 system stalled for around a week.
- **Evacuation decision points.** River gauge thresholds, bridge closures, dam releases `[mem]`. A claim of hydroelectric plant malfunction during the flood was reported and denied by the government `[S3]`.
- **Response.** 2,472 evacuated, more than 9,000 emergency workers; Erdoğan declared Kastamonu, Sinop and Bartın disaster areas on 13 August `[S3]`.
- **Declared over.** Warning lifted when levels fall, but a second rain band can re-open it `[mem]`.
- **Calendar effects.** Bridge and road loss cut access; electricity could not be supplied to 4 villages in Bartın, 180 in Kastamonu and 87 in Sinop `[S3]`. Effects on medical access, commuting and school starts `[mem]`.

## 3. Storms, tsunamis, heat, snow

- **Hurricane cone.** The cone is the probable track of the storm centre, formed by circles sized so that two-thirds of historical official forecast errors over a 5-year sample fall inside `[S1]`. It is not an "expected two-thirds of the time" area in the sense memory gave; it is calibrated to past forecast errors `[corrected: S1]`.
  - Changed: memory phrased it as the area the centre stays within "two-thirds of the time". The source defines it via the 2/3 error circles.
  - Error grows with lead time: 2026 Atlantic radii are 25 nm at 12 h, 62 nm at 48 h, 134 nm at 96 h, 200 nm at 120 h `[S1]`.
  - That the cone does not show storm size or impact extent `[mem]`. The local copy of the NHC page does not state it.
  - Hurricane watch: hurricane conditions possible within 48 hours before forecast onset of tropical-storm-force winds; hurricane warning: expected within 36 hours before that onset `[S7]`.
  - Advisories about every 6 h; landfall estimate shifting by hours `[mem]`.
- **Tsunami.** The Pacific Tsunami Warning Center (PTWC) issues warnings for most of the Pacific; NOAA's National Tsunami Warning Center covers North America `[S8]`. A Mediterranean and North-East Atlantic coordination group (ICG/NEAMTWS) was set up in 2005 `[S8]`.
  - Near-field: a 1993 Hokkaidō tsunami reached Okushiri 3 to 5 minutes after the quake and 165 people died there `[S8]`. Regional systems can warn the public in under 15 minutes `[S8]`. Far-field: more than 12 hours from a very large US west-coast quake to Japan `[S8]`. Warnings can be false alarms with localized disruption `[S8]`.
  - Per-coast-point arrival-time estimates, four alert levels (information, advisory, watch, warning), the 30 Oct 2020 Aegean/Samos–İzmir event giving little time, waves in a series with the first not necessarily largest, and an "all clear" issued after hours `[mem]`.
- **Heatwaves.** A heat wave is a period of abnormally hot weather lasting multiple days, usually forecastable so authorities can warn in advance `[S10]`. National definitions use consecutive days (for example 3 or 5) `[S10]`. US extreme heat warning: threshold exceeded for more than three hours on at least two consecutive days, issued within 12 hours of onset; watch 24 to 72 hours ahead `[S7]`. Air-conditioned public cooling centres are a listed public-health measure `[S10]`.
  - Duration forecast often revised; centre opening hours; outdoor work windows moving to early morning `[mem]`.
- **Snowstorms.** US winter storm watch: hazardous conditions possible generally within 24 to 48 hours; warning: 12 to 48 hours `[S7]`. Forecast "1–3 days" is therefore about right for the US definitions `[S7]`. Turkish closures announced the evening before or same morning, day by day `[mem]`.
- **Declared over.** Warnings expire or are cancelled; road reopening staged by road `[mem]`.

## 4. Pandemics: COVID-19 in Türkiye

Source oddity: the lead of `[S4]` says Turkey did not order a legal lockdown until April 2021 and enacted its "first nationwide restrictions" then, yet the same article's timeline lists nationwide school closure on 16 March 2020, curfews from March 2020 and a re-imposed curfew on 20 November 2020. The lead appears to mean a full nationwide lockdown; it is not consistent with the timeline. Do not quote the lead sentence.

- First confirmed case 11 March 2020 `[S4]`. First death 15 March `[S4]`.
- Schools: closure announced 12 March, effective 16 March 2020; EBA TV online platform functional 23 March `[S4]`. On 16 March the Interior Minister also ordered businesses and places of worship to halt indoor activities `[S4]`.
- Curfew for over-65s and people with chronic illness: announced 21 March 2020, effective midnight on 22 March `[corrected: S4]`.
  - Changed: memory said the curfew ran "from about 21 March". The announcement was 21 March; the start was midnight into 22 March.
- Curfew extended to those 20 and younger on 3 April 2020 `[S4]`. The same day Erdoğan announced a 15-day ban on entry to and exit from the largest cities, including Istanbul `[S4]`. Provincial travel permits in spring 2020 `[mem]`.
- The two-hour-notice curfew was announced on 10 April 2020, not 3 April `[corrected: S4]`. It caused pandemonium and queues at bakeries and shops; Interior Minister Soylu apologised and offered resignation, which Erdoğan rejected `[S4]`.
  - Changed: memory put the two-hour-notice curfew on Friday 3 April. The source dates it 10 April (also a Friday, by calendar). The 3 April event was the extension to under-20s and the city entry/exit ban.
  - "31 provinces" and "Friday night" are not in the source `[mem]`.
- On 13 April Erdoğan announced weekend curfews would continue, with looser weekday restrictions `[S4]`. Weekend curfews repeated through April–May `[S4]`.
- Easing: from 1 June 2020 domestic flights resumed and most public spaces reopened `[S4]`. Age-group curfews relaxed in stages `[mem]`.
- Second wave: on 20 November 2020 the curfew for 65-plus and 20-and-under was reinstated and indoor activity halted at businesses and places of worship; groceries and pharmacies stayed open `[S4]`. This was missing from the first draft.
- Vaccination began 14 January 2021 `[S5]`; the campaign had 4 vaccines in use by the time of the article `[S5]`. Pfizer–BioNTech and CoronaVac approvals were pushed back at the end of December 2020 `[S4]`. CoronaVac first; order by health workers then age bands; MHRS booking; cohorts opened stepwise `[mem]`.
- 2021: on 30 March Turkey said it would reimpose weekend lockdowns and Ramadan restrictions `[S4]`. The first nationwide lockdown began 29 April 2021 `[S4]`. Its end date of 17 May, regional colour-level scheme, schools moving between remote/hybrid/face-to-face, and the September 2021 return `[mem]`.
- **Warning timing.** The Interior Ministry announced curfews directly (21 March, 10 April) `[S4]`. The cabinet-meeting channel and "evening before" pattern `[mem]`. **Duration.** Never known; extended by announcement (15 days on 3 April, continued on 13 April) `[S4]`. **Declared over.** Staged relaxations `[S4]`; WHO ended the international emergency in May 2023 `[mem]`.
- **Calendar effects.** Government moratorium on evictions and debt seizure until 31 December 2020 `[S4]`. Parliament paused for 48 days until 2 June `[S4]`. Exams postponed, appointments cancelled, shifts changed, weddings limited `[mem]`.

## 5. Infrastructure and industry

- **Texas winter storm, February 2021.** Three storms hit: 10–11, 13–17 and 15–20 February `[corrected: S6]`.
  - Changed: memory gave one window of 14–18 Feb. The source lists three storms; the ERCOT rotating outages began 1:25 am on 15 February `[S6]`.
  - More than 4.5 million homes and businesses lost power, some for several days `[S6]`. Over 5 million people without power at peak, 11 million at some point, some for more than 3 days `[S6]`.
  - Water service disrupted for more than 12 million people; nearly 12 million advised to boil water `[S6]`.
  - Deaths: at least 246, with estimates up to 702 `[S6]`.
  - The operator said outages would be short `[mem]`. No restoration time promised per household `[mem]`.
  - The grid was 4 minutes 37 seconds from complete failure `[S6]`.
- **Grid failure warnings.** ERCOT knew on 13 February that blackouts were likely `[S6]`. Restoration by feeder, not by address `[mem]`. Outage duration unknown `[mem]`.
- **Recovery.** Harris County outages returned to normal around 22 February; boil-water advisories lasted in some areas until 27 February `[S6]`. So a boil notice outlasted the power cut by days.
- **Industrial accidents.** Shelter-in-place for a plume, minutes to hours; ends with an all-clear; can be re-imposed `[mem]`. The NWS "evacuation immediate" product exists for long-duration events such as wildfire or gas release `[S7]`.
- **Calendar effects.** Vaccine shipments were delayed and some doses lost during the Texas storms `[S6]`. Dialysis and home oxygen needs, shift cancellations, refrigerated medicine `[mem]`.

## 6. Health emergencies

- **Stroke and heart attack.** The mobile stroke unit concept rests on "time is brain": recanalization must happen within the first hours after symptom onset, and only 5–10% of patients get time-sensitive treatment `[S9]`. The 4.5-hour window from "last known well", door-to-needle of about 60 minutes, door-to-balloon of about 90 minutes, and the wake-up-stroke rule `[mem]`. `[S9]` does not cover these figures.
- **Missing child.** AMBER-type alerts are geo-targeted, expire after hours, cancelled when found; first hours matter most; whether Türkiye has a nationwide push system was not verified `[mem]`.

## Observations relevant to CTCP's premise

Observations and inferences, not sourced claims. Sourced anchors are marked where they exist.

1. Almost every event has a start that is known only afterward, and an end declared in stages. Ends restart (fire rekindling, tsunami waves, re-imposed shelter orders, extended curfews). Anchors: Muğla fires continuing after Antalya's were controlled `[S2]`; curfews extended on 13 April `[S4]`.
2. Durations are estimates that get revised. Anchor: Texas, from short rotating outages to days `[S6]`.
3. Order without clock time appears constantly: staged vaccine cohorts, staged road reopening, restoration by feeder.
4. Deadlines are measured from an event, not the clock: watch-then-warning hours before onset of winds `[S7]`, tsunami arrival minus issue time.
5. Announcements are short-notice (a curfew announced two hours before, 10 April 2020 `[S4]`) and one announcement rearranges many people's plans at once, differently for each (age cohort, province, job exemption).
6. One person sits in several affected groups at once: a household split by age curfew, or a family in two places under one order.
7. Conditions fail and things move: exams, appointments, flights, school days, shifts.
8. Warnings can be wrong in place and in time. Anchor: Black Sea locals judged the warnings inadequate for the severity `[S3]`.
9. Authorities know more than individuals about the event, individuals know more about their own calendar and needs; neither should have to hand over everything.
10. Some plans need to act with no signal (blackout, tsunami with minutes). Anchor: 3 to 5 minutes at Okushiri `[S8]`.

---
topic: February 2023 Kahramanmaraş and Hatay earthquakes — time, coordination and displacement, as a case study for CTCP
date: 2026-09-30
sources:
  - url: https://www.sbb.gov.tr/wp-content/uploads/2023/03/2023-Kahramanmaras-ve-Hatay-Depremleri-Raporu.pdf
    note: Strategy and Budget Presidency (SBB), "2023 Kahramanmaraş ve Hatay Depremleri Raporu", March 2023. Fetched 2026-09-30 via curl, converted to Turkish text with [page N] markers. Read with grep and by page. SBB p.N in this file means the [page N] marker of that text file. The printed page number ("Sayfa | M") is N minus 2, so marker 32 is printed page 30.
  - url: https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000jllz&format=geojson
    note: USGS event record for the first main shock (Pazarcik). Fetched 2026-09-30 via curl. GeoJSON parsed with a script; time field is epoch milliseconds UTC, converted below to UTC+3.
  - url: https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000jlqa&format=geojson
    note: USGS event record for the second main shock (Elbistan). Fetched 2026-09-30 via curl. Parsed and converted the same way.
  - url: https://en.wikipedia.org/wiki/2023_Turkey%E2%80%93Syria_earthquakes
    note: Wikipedia EN main article. Fetched 2026-09-30 via curl, read as converted wikitext text. Secondary source; content reflects the article as of fetch date.
  - url: https://en.wikipedia.org/wiki/Aftermath_of_the_2023_Turkey%E2%80%93Syria_earthquakes
    note: Wikipedia EN aftermath article. Fetched 2026-09-30 via curl, read as converted text. Secondary source.
  - url: https://en.wikipedia.org/wiki/Humanitarian_response_to_the_2023_Turkey%E2%80%93Syria_earthquakes
    note: Wikipedia EN humanitarian response article. Fetched 2026-09-30 via curl, read as converted text (country-by-country; searched by keyword for arrival dates). Secondary source.
  - url: https://tr.wikipedia.org/wiki/2023_Kahramanmara%C5%9F_depremleri
    note: Wikipedia TR article. Fetched 2026-09-30 via curl, read as converted text. Secondary source; translated from Turkish by the writer.
status: research — not yet promoted to .context/
---

# Kahramanmaraş and Hatay earthquakes, February 2023

## 0. How to read this file

- Tags: `[SBB p.N]` (N = the `[page N]` marker in the downloaded PDF text, printed page = N minus 2), `[USGS]`, `[Wikipedia EN]`, `[Wikipedia TR]`.
- No claim in this file comes from the writer's own knowledge. Nothing carries a memory tag. Everything is from the seven downloaded files.
- Where the sources disagree, the disagreement is shown with the date or cut-off of each figure.
- "Inference" marks a step the writer made from sourced facts (for example, arithmetic).
- The SBB report is the government's own account. It is a March 2023 document and says its figures will be revised. [SBB p.9]
- This file is respectful and avoids graphic detail. It is a study of time and coordination, not of blame.

## 1. Event timeline

### 1.1 USGS times, converted

The USGS `time` field is epoch milliseconds UTC. Türkiye time is UTC+3. [USGS]

| Event | Epoch ms | UTC | Türkiye time (UTC+3) |
|---|---|---|---|
| First main shock, USGS mww 7.8 | 1675646254342 | 2023-02-06 01:17:34.342 | 04:17:34.342 |
| Second main shock, USGS mww 7.5 | 1675679088811 | 2023-02-06 10:24:48.811 | 13:24:48.811 |

Conversion, first shock: 1675646254342 ms = 1675646254.342 s after 1970-01-01 00:00 UTC = 2023-02-06 01:17:34.342 UTC; add 3 h = 04:17:34.342. [USGS]

Conversion, second shock: 1675679088811 ms = 2023-02-06 10:24:48.811 UTC; add 3 h = 13:24:48.811. [USGS]

Gap between the two: 1675679088811 − 1675646254342 = 32,834,469 ms = 9 h 07 min 14.5 s. (Inference, arithmetic on USGS times.) Wikipedia TR says "9 hours" and "13.24" local. [Wikipedia TR] Wikipedia EN rounds the first shock to 04:17:35 TRT and gives the second as 13:24:49 TRT. [Wikipedia EN]

USGS also records: the first shock USGS depth 10 km, coordinates 37.0143 E, 37.2256 N; origin title "25 km ENE of Nurda??, Turkey" (garbled in the file), event name "Pazarcik earthquake". The second: depth 7.432 km, 37.1962 E, 38.0106 N, origin title "5 km S of Ekinözü, Turkey", event name "Elbistan earthquake". Both carry a USGS PAGER alert level "red" and status "reviewed". Felt reports: 3,182 (first), 677 (second). [USGS]

### 1.2 Two main shocks and the 20 February shock

| Time (Türkiye) | Event | Source |
|---|---|---|
| 6 Feb 04:17 | First main shock, epicentre Pazarcık (Kahramanmaraş) | [SBB p.8], [SBB p.27] |
| 6 Feb about 04:28 | An aftershock of Mw 6.7 "about 11 minutes after the mainshock" (04:17 + 11 min is the writer's arithmetic) | [Wikipedia EN], [Wikipedia TR] |
| 6 Feb 13:24 | Second main shock, epicentre Elbistan (Kahramanmaraş); Wikipedia TR: "9 hours after" the first | [SBB p.8], [Wikipedia TR] |
| 6 Feb 17:00 | Large fire reported at İskenderun port, believed to have started in a shipping container of flammable industrial oil | [Wikipedia EN] |
| 20 Feb 20:04 | Hatay earthquake, Mw 6.4 per SBB | [SBB p.8], [SBB p.27] |
| 20 Feb 20:07 | Second event Mw 5.8 in Wikipedia TR's account | [Wikipedia TR] |
| 20 Feb about one hour after | AFAD warned of a possible sea-level rise of 50 cm; Mersin and Antalya governorates warned people to stay away from shores; the warnings were later cancelled | [Wikipedia TR] |
| 27 Feb | Mww 5.2 aftershock near Yeşilyurt; about 30 buildings collapsed; two deaths, 140 injured | [Wikipedia EN] |

The 20 February shock came 14 days after 6 February (calendar arithmetic).

### 1.3 Disagreements about the events

| Item | Figures | Source |
|---|---|---|
| First shock magnitude | Mw 7.7 (focal depth 8.6 km) | [SBB p.8] |
| | mww 7.8 | [USGS] |
| | 7.8 USGS and GCMT, 8.0 GEOSCOPE, 7.7 Mw and 7.4 ML KOERI | [Wikipedia EN] |
| | 7.8 USGS, 7.7 Mw and 7.4 ML Kandilli | [Wikipedia TR] |
| Second shock magnitude | Mw 7.6 (focal depth 7 km) | [SBB p.8] |
| | mww 7.5 | [USGS] |
| | 7.5 USGS, 7.6 KOERI, 7.7 Geoscope and GCMT (but the article's lead says 7.7) | [Wikipedia EN] |
| 20 Feb shock | Mw 6.4, epicentre Hatay Yayladağı, 20:04 | [SBB p.8], [SBB p.27] |
| | Later in the same report: "Hatay Defne merkezli" (Defne-centred) | [SBB p.133] |
| | 6.4 (±0.1) Mw at 20:04, epicentre Defne and Samandağ, plus 5.8 Mw at 20:07 | [Wikipedia TR] |
| | Mww 6.3 near Uzunbağ, Hatay; elsewhere in the same article Mw 6.4 | [Wikipedia EN] |
| 20 Feb toll | 11 dead, 592 injured | [Wikipedia TR] |
| | 6 dead, at least 562 injured | [Wikipedia EN] |
| First-shock epicentre wording | SBB: Pazarcık district; Wikipedia EN: 34 km west of Gaziantep (article also says 37 km WNW in its lead); Wikipedia TR: 34 km west of Gaziantep, 38 km SW of Pazarcık | [SBB p.8], [Wikipedia EN], [Wikipedia TR] |
| Second-shock epicentre wording | SBB: Elbistan district; USGS: 5 km S of Ekinözü; Wikipedia TR: 4 km SE of Ekinözü | [SBB p.8], [USGS], [Wikipedia TR] |
| "Two or three earthquakes" | Wikipedia TR reports a professor's statement that there were three (one about 20 s after the first), then says an ITU report established two and that there is no official record of a third | [Wikipedia TR] |

### 1.4 Aftershock counts

- More than 570 aftershocks within 24 h of the first shock; more than 30,000 by May 2023. [Wikipedia EN]
- USGS: 25 aftershocks of Mw 4.0 or more within six hours; at least 54 of magnitude 4.3 or more after 12+ hours; AFAD recorded at least 120 aftershocks in that period. [Wikipedia EN], [Wikipedia TR]
- More than 30,000 aftershocks within three months. [Wikipedia TR]
- Later damaging events reported: 25 July Mww 5.5 near Kozan (63 injured), 10 August Mww 5.3 Malatya (23 injured). [Wikipedia EN]

## 2. Affected provinces and population

- SBB counts 11 affected provinces: Adana, Adıyaman, Diyarbakır, Elazığ, Gaziantep, Hatay, Kahramanmaraş, Kilis, Malatya, Osmaniye, Şanlıurfa. [SBB p.11]
- Population of the 11 provinces on 31 Dec 2022: 14,013,196, 16.4% of the country (85,279,553). 96.7% (13,553,283) live in province and district centres; 459,913 in towns and villages (excluding rural neighbourhoods of the seven metropolitan municipalities). [SBB p.11]
- Largest populations: Adana 2,274,106; Şanlıurfa 2,170,110; Gaziantep 2,154,051; Diyarbakır 1,804,880; Hatay 1,686,043; Kahramanmaraş 1,177,436; Malatya 812,580; Adıyaman 635,169. [SBB p.11]
- 1,738,035 people under temporary protection (Syrians) live in the region, 11.48% of its population and about half of all Syrians under temporary protection in Türkiye. [SBB p.11]
- 4,805,937 children aged 0–17 (21.3% of the country's children) and 2.6 million people aged 18–29 live in the region. [SBB p.11]
- The region has 3,029,422 households, average size 3.5 people. [SBB p.12]
- Employment: 3.8 million people employed (13.3% of the country's), 2.3 million registered and 1.5 million unregistered; informality about 39%. [SBB p.8]
- About 2.6 million buildings, 90% dwellings, 6% workplaces, 3% public buildings; 5.6 million dwellings. [SBB p.8]
- Other figures: Wikipedia EN says about 14 million people, 16% of Türkiye's population, were affected, and 15.73 million people and 4 million buildings "at least" affected; "damage over roughly 350,000 km²". [Wikipedia EN]
- Displacement: more than 2 million residents evacuated to nearby provinces [Wikipedia EN]; IOM estimated over 2.7 million people were made homeless [Wikipedia EN]; SBB says about two million people who left the region registered with governorates and were known, with 1,971,589 registered through Gendarmerie records in the provinces they went to [SBB p.109]; SBB says 2,273,551 people faced a direct shelter problem (housing damage as of 6 March) [SBB p.38]. These are three different bases, not the same count.
- Air evacuation: Turkish Airlines said it evacuated 139,438 people on 790 flights between 6 and 11 Feb; Pegasus said 30,771 people on 169 flights between 6 and 9 Feb. [Wikipedia EN]
- Erzin and Arsuz (Hatay): about 20,000 people reportedly fled to Erzin, raising its population about 50%; Arsuz's population reportedly tripled by June 2023. [Wikipedia EN]
- SBB names population movement as the main planning uncertainty: how far the population fell, which groups, and whether and when those who left would return. [SBB p.127] Its later text says the split between people in old homes, tents, containers or other provinces "cannot yet be fully determined". [SBB p.128]

## 3. State of emergency (OHAL)

- SBB: on 8 Feb 2023 a state of emergency (OHAL) was declared for three months in the provinces of the earthquake region, "to run search and rescue quickly", under Article 119 of the Constitution. [SBB p.32]
- Wikipedia EN: on 7 Feb the President declared a 3-month state of emergency in 10 provinces: Adana, Hatay, Osmaniye, Kahramanmaraş, Gaziantep, Kilis, Şanlıurfa, Adıyaman, Malatya, Diyarbakır. [Wikipedia EN]
- Wikipedia TR (section on the judiciary): a presidential decision published in the Official Gazette on 8 Feb declared a state of emergency for three months in ten provinces from 01:00 on 8 Feb; parliament approved it the next day (9 Feb). The same article's earlier disaster-management section says the state of emergency was declared on 7 Feb for 3 months in 10 provinces. [Wikipedia TR]
- Disagreement: 7 Feb (announced) vs 8 Feb (effective, per SBB and Wikipedia TR at 01:00). The count of provinces differs from SBB's 11 affected: the ten OHAL provinces listed by Wikipedia EN do not include Elazığ, which is in SBB's list of 11. (Inference from comparing the two lists.) [Wikipedia EN], [SBB p.11]
- Purpose stated by SBB: supply of urgent goods, demolition of dangerous buildings, restricting entry to areas with collapse risk. [SBB p.32]
- Tools used under it: budget additions under Law 2935 (AFAD 50.0 bn TL, ÇŞİDB 5.5 bn TL, AFAD 30.0 bn TL for TOKİ housing, TOB 1.5 bn TL). [SBB p.33]
- Related time limits decided in the first weeks:
  - Judicial deadlines (lawsuits, enforcement, applications, complaints, objections) suspended for two months from 6 Feb in the ten OHAL provinces (decree signed 11 Feb). [Wikipedia TR]
  - Force majeure declared on 9 Feb; tax obligations due between 6 Feb and 31 Jul 2023 postponed to 31 Jul 2023. [Wikipedia EN], [Wikipedia TR]
  - Direct-procurement threshold raised to 5 million TL by presidential decision of 9 Feb. [Wikipedia TR]
  - Civil-servant salaries paid four days early. [Wikipedia TR]
- End date or extension of the state of emergency: not in the sources (see gaps). Three months from 8 Feb would run to about 8 May (inference, arithmetic).

## 4. International assistance and USAR arrivals

- Türkiye declared a level-four alert, the level that invites international help. [Wikipedia EN], [Wikipedia TR]
- Counts differ by source:
  - "At least 105 countries and 16 international organizations had pledged support." [Wikipedia EN]
  - "More than 141,000 people from 94 countries joined the rescue effort." [Wikipedia EN]
  - "Seventy countries also assisted in these operations"; "at least 70 countries offered to help." [Wikipedia EN]
  - "More than 60 countries offered practical support." [Wikipedia TR]
  - SBB counts "international search-and-rescue personnel" inside a total of 271,060 personnel who served up to early March. [SBB p.32]
- Examples with dates from the humanitarian article [Wikipedia EN]:
  - Azerbaijan is called the first country to provide assistance, with a 420-person team.
  - Bulgaria is said to have been the second country to offer help, dispatching 78 firefighters and rescue personnel among others.
  - Poland: a 76-firefighter heavy USAR team "left for Turkey on 6 February".
  - Romania: three aircraft with a 60-member team "left for Turkey on 6 February"; a second team on 8 Feb.
  - Israel: a 17-person delegation on 6 Feb, a 150-member delegation on 7 Feb.
  - Pakistan: aid contingents flew to Adana on the night of 6–7 Feb.
  - Republika Srpska (Bosnia): 22 civil-protection members "arrived in Turkey" on 7 Feb.
  - China: government rescue team of 82 and four dogs "landed at Adana Airport" on 8 Feb.
  - Iceland dispatched 12 rescue-team members on 8 Feb.
  - El Salvador: 111 USAR personnel "arrived on February 9".
  - Philippines: contingent "arrived in Turkey on 9 February".
  - Malaysia: 70 personnel sent "within 24 hours after the earthquake".
  - Qatar: about 10,000 cabins and caravans donated; first batch of 350 mobilised on 13 Feb; delivery completed 24 June 2023.
  - NATO: a vessel carrying the first 600 of 1,000 containers for temporary housing left Taranto for Türkiye (date not given in the text).
- Domestic movement: an "air aid corridor" by the Turkish Armed Forces; by 06:00 on 7 Feb, 12,752 AFAD volunteers had been flown from Istanbul on 73 flights; by 11 Feb (00:03) more than 159,000 volunteer and professional SAR personnel were in the region. [Wikipedia EN], [Wikipedia TR]
- Personnel counts are on different bases: 25,000 SAR dispatched (AFAD, as quoted) [Wikipedia EN]; "more than 53,000" Turkish SAR workers [Wikipedia EN]; "60,000 SAR workers, 5,000 health workers and 30,000 volunteers" (AFAD's effort) [Wikipedia EN]; "more than 141,000 rescue personnel including foreign teams" (President, 10 Feb) [Wikipedia EN]; 35,250 SAR personnel within 271,060 total personnel to early March [SBB p.32]. The counting bases differ, so the numbers are not contradictions.
- German and Austrian teams in Hatay suspended operations, citing a worsening security situation; they resumed with Turkish Land Forces protection; Israel's United Hatzalah left on 12 Feb citing a threat. [Wikipedia EN]
- Syria: outreach was "less enthusiastic" than to Türkiye, tied to sanctions and access limits; border crossings from Türkiye into Syria stayed closed on 7 Feb; Bab al-Hawa opened on 8 Feb per the UN and the first convoys came 9 Feb. [Wikipedia EN], [Wikipedia TR] Syria is only thinly covered by the sources this file used.

## 5. Response in the first days; documented delays and causes

### 5.1 What is documented

- Reported by 7 Feb, 1,846 people rescued in Hatay Province. [Wikipedia EN]
- Reported by 8 Feb, more than 8,000 rescued in 10 provinces; about 380,000 relocated to shelters or hotels. [Wikipedia EN] (Another passage says "in the first two days".)
- Search and rescue: AFAD announced on 19 Feb that efforts had ceased in most provinces, with work continuing at 40 buildings in Kahramanmaraş and Hatay. [Wikipedia EN]
- SBB (to early March): 271,060 personnel in total, 35,250 of them SAR; 18,048 work machines; 75 aircraft and 108 helicopters used; 369 mobile kitchens; AFAD registered volunteers 1,339,150 nationwide, 32,819 of them working in the region. [SBB p.32], [SBB p.33]
- Health: 1,253 ambulances, 14 air ambulances, 245 UMKE vehicles and 12,749 UMKE and 112 personnel; 51,581 injured transported out (2,496 by air, 48,758 by ground, 327 by sea); 26,353 doctors and health personnel assigned; 35 field hospitals (19 foreign ones still working); 114 emergency response units in tent cities. [SBB p.60]
- Airports: Hatay airport runway broken; repaired and open to all civil flights from 12 Feb; SBB says no damage obstructing flights at the other airports. [SBB p.82] Wikipedia TR says Gaziantep and Kahramanmaraş airports were closed to civilian flights (no dates); the two sources are not reconciled. [Wikipedia TR]
- Weather and roads: winter storms, damaged roads and communication disruption hampered relief. [Wikipedia EN]
- Public facilities opened as shelter: mosques, shopping malls, stadiums, community centres in Gaziantep; nearly 250,000 displaced people in schools in Malatya Province. [Wikipedia EN]
- President's own words on 8 Feb: acknowledged "shortcomings" in the response, denied too few personnel. [Wikipedia EN]

### 5.2 Documented delays and stated causes

| Delay | Stated cause | Source |
|---|---|---|
| Search-and-rescue units from the nearest regional directorate reached the region late | Number of provinces involved; damaged roads | [SBB p.134] |
| Overall response coordination | Plans with many actors that are ultimately under central control showed "shortcomings" when 11 provinces were hit at once | [SBB p.133] |
| Local response and damage assessment | Lack of technical personnel and experts locally for response, search-and-rescue, damage assessment and first aid | [SBB p.134] |
| Information sharing | Different agencies' information systems do not work together; integrating them is "critical" | [SBB p.138] |
| Data collection for the report itself | Damage spread over a very large area and affected provincial infrastructure and public administrations made it hard and slow to gather data | [SBB p.9] |
| Coordination in the region | Damaged telephone lines caused lack of communication and coordination problems "not resolved for a long time" | [Wikipedia TR] |
| Aid slow to arrive in Hatay | Some survivors entered supermarkets for food "when aid took too long to arrive" | [Wikipedia EN] |
| Hatay search-and-rescue | Residents criticised insufficient search-and-rescue efforts; Hatay airport runway made rescue "challenging" | [Wikipedia EN] |
| Foreign teams paused | Security concerns cited by German and Austrian teams | [Wikipedia EN] |
| Contact with people under rubble | Access to Twitter restricted from the afternoon of 8 Feb for about 10 hours, lifted on the night of 9 Feb; criticised as hindering aid and contact with people under rubble | [Wikipedia TR] |
| Energy | Telecom outages were mainly caused by power cuts; mobile base stations brought in ran on generators that give "on average 3–4 hours" of power | [SBB p.86] |

- SBB frames the lesson as a need for shared responsibility, expertise, information, resources and communication among central, local and non-state actors. [SBB p.134]
- Arrival of state aid stocks: AFAD has 27 regional disaster logistics depots and 54 logistics support depots; the Turkish Red Crescent 35; local governments hold tents and blankets. The stock in these depots was made available to citizens. [SBB p.34]
- Wikipedia EN says survivors trapped under rubble livestreamed pleas; some shared their location on social media, which allowed rescuers to reach them; people who lost contact with relatives sent pleas on social media. [Wikipedia EN]

## 6. Communications

- Pre-quake: in 2021 the 11 provinces had 1,191,981 fixed-line access lines, 12,002,276 mobile subscribers and 10,488,915 mobile broadband subscribers. [SBB p.85]
- Damage to base stations, exchange equipment, networks and end-user equipment estimated at about 2.117 billion TL (private) as of 6 Mar 2023; 2,006 base stations had not been assessed. [SBB p.85]
- Cause of outage: mainly power cuts in the provinces; mobile base stations sent in ran on generators that supply "on average 3–4 hours" of energy, so service was limited; as power outages decreased, service ran longer. [SBB p.86]
- Response: a crisis desk under AFAD with the Ministry of Transport and Infrastructure and BTK; VSAT terminals, mobile base stations, emergency communication vehicles and generators sent to the region. [SBB p.86]
- Wikipedia TR: coordination problems due to damaged telephone lines; an offer of Starlink satellites from a private company owner was declined by the Turkish government on the grounds that Türksat had sufficient capacity. [Wikipedia TR]
- Twitter restricted on 8 Feb afternoon for about 10 hours. [Wikipedia TR]
- Aid to deaf and hard-of-hearing people: a 120-person team of sign-language interpreters; more than 500 people received 2,300 boxes (13,800 units) of batteries and 140 devices. [SBB p.112]
- Accessibility line: requests from disabled and elderly people received through a support line and mobile applications, 3,168 met by early March, 346 (individual tents, containers, battery-powered vehicles) still to be resolved. [SBB p.111]
- SBB's recommendation: the disaster-management information system should use social media, websites, news agencies and GSM operators to communicate with stakeholders and the public at the time of the disaster. [SBB p.138]

## 7. Shelter: tents, then containers, then permanent housing

### 7.1 Tents

| Date or cut-off | Figure | Source |
|---|---|---|
| 16 Feb | 387,000 tents established in the area by local and international organisations (AFAD statement) | [Wikipedia EN] |
| Early March | 332 tent cities and 360,167 tents serving 1,440,668 people | [SBB p.32] |
| First 14 days | Ahbap donations: 3,600 containers and 13,250 tents plus a tent city for 2,050 people in 7 provinces | [Wikipedia TR] |
| Not dated | Military support: 71,000 tents and 251 temporary schools in 9 affected provinces | [Wikipedia TR] |

Difference: 387,000 (16 Feb, AFAD, all organisations) vs 360,167 (early March, SBB). The bases are not the same and the two dates differ.

### 7.2 Container cities

- Early March: 189 container cities were being set up and infrastructure and installation of 90,914 containers continued; 34,120 people were housed in containers; 2,284 extra mobile showers and 5,058 toilet containers provided. [SBB p.32]
- Wikipedia EN: 162 container cities established across the region (undated); each container "generally 21 m²" with water, shower and toilet. [Wikipedia EN]
- SBB puts total sheltered in the region at 1,593,808 and another 329,960 in other provinces; also pensions, teachers' lodges, hotels, holiday homes and vineyard houses. [SBB p.32]
- Wikipedia EN: "over 1.9 million people rehoused in dormitories, guest houses, tents, hotels and containers"; the President said 890,000 survivors were placed in dormitories and 50,000 in hotels and that 1.6 million people had access to shelter (date not given). [Wikipedia EN]
- Container and prefabricated-house exports banned for three months from 15 Feb 2023. [SBB p.101]
- Later events in shelter areas: floods on 15 March in Adıyaman and Şanlıurfa affected tents and containers [Wikipedia TR], [Wikipedia EN]; a tornado struck a camp in Pazarcık on 20 April [Wikipedia EN]. These are noted as facts about temporary areas' exposure to weather.

### 7.3 Stated targets and durations

- SBB's principle: short-term shelter solutions such as tents and containers "should not exceed 6 months", and access to permanent housing should be as quick as possible. [SBB p.39]
- The government promised on 9 Feb (Gaziantep) and 10 Feb (Adıyaman) to rebuild all destroyed homes "within one year". [Wikipedia EN]
- 22 Feb: plan for 200,000 homes in the 11 provinces plus 70,000 in villages. [Wikipedia EN]
- SBB (3 March): planned 405,505 dwellings plus 83,149 village houses. By province: Hatay 146,650 + 14,997; Kahramanmaraş 88,500 + 18,874; Malatya 66,230 + 21,549; Adıyaman 47,350 + 13,987; Gaziantep 27,150 + 6,506; Osmaniye 12,425 + 2,731; Diyarbakır 6,000 + 716; Elazığ 4,500 + 1,602; Şanlıurfa 3,000 + 812; Adana 1,900 + 7; Kilis 1,800 + 1,368. [SBB p.40], [SBB p.41]
- SBB: foundations targeted "in March 2023" in the 11 provinces; ground floor plus 3–4 storeys, tunnel-form construction; first phase 100,000 dwellings with a first payment of 30 bn TL to AFAD for TOKİ. [SBB p.41]
- SBB says the number of homes and who builds them "will become clear after damage assessment and entitlement". [SBB p.41]
- Wikipedia EN: on "22 April" (year not stated in the passage) the President said construction had begun on 105,000 homes and more than half had been completed, and that the government was constructing 507,000 houses and 143,000 village homes, of which 319,000 homes were planned for completion by end-2023. The same passage: "about 689,000 people continue to live in container homes one year after the earthquake." [Wikipedia EN]
- Slip, stated in terms of the sources: the six-month guidance [SBB p.39] and the one-year housing promise [Wikipedia EN] are set against 689,000 people in container homes a year after (a Wikipedia EN statement whose own source is not in the file). The sequence of the 22 April passage and the year-later passage is ambiguous in the text.
- Entitlement: 10,000 TL cash assistance per damaged household; 15,000 TL relocation aid to households whose homes were collapsed, urgent-demolition, heavy or moderate damage; one year of rent assistance of 5,000 TL/month for owners and 3,000 TL/month for tenants. [SBB p.33], [SBB p.39]
- Disagreement on tenant rent aid: 3,000 TL (SBB) vs 2,000 TL (Wikipedia EN and TR, reporting the 10 Feb announcement). [SBB p.33], [Wikipedia EN], [Wikipedia TR]
- Rent aid was for those "who do not want to stay in tents". [Wikipedia EN]

### 7.4 Other hazards in temporary shelter

- Fire in a house in Nurdağı on 17 Feb killed a Syrian family who had moved there after the earthquake. [Wikipedia EN]
- SBB names as problem areas for children and young people in tent and container cities: open layout, electricity and heating problems, limited security, distant toilets and bathrooms, lighting. [SBB p.128]

## 8. Education decisions

| Date | Decision | Source |
|---|---|---|
| 6 Feb | Higher Education Council (YÖK) paused education at universities in 10 provinces until further notice | [Wikipedia TR] |
| 9 Feb | Council said university education in affected provinces suspended until further notice; dormitories to house affected people | [Wikipedia EN] |
| 10 Feb | Spring-term opening postponed at all universities until further notice | [Wikipedia TR] |
| 11 Feb | President: universities closed until the summer term, distance education | [Wikipedia TR] |
| National, by 20 Feb | All primary and secondary schools closed nationwide until 20 Feb (initially one week, extended to two) | [SBB p.46], [Wikipedia EN], [Wikipedia TR] |
| Provincial | Schools in affected provinces: "until 10 March" (Wikipedia EN); "until 1 March" (Wikipedia TR); SBB has three staggered dates (below) | [Wikipedia EN], [Wikipedia TR], [SBB p.46] |

SBB p.46: reopening by school-safety reports: Kilis, Diyarbakır, Şanlıurfa on 1 Mar 2023; Gaziantep, Adana, Osmaniye on 13 Mar; Adıyaman, Malatya, Kahramanmaraş, Hatay: pause extended to 27 Mar. [SBB p.46]

Other decisions [SBB p.46], [SBB p.47], [SBB p.48]:
- 166,238 students from damaged provinces transferred to schools of their choice; middle- and high-school students in OHAL provinces placed free in boarding schools of their choice.
- Students who moved to other provinces were exempted from attendance rules in the second term of 2022–2023.
- Students preparing for the high-school transition exam (LGS) responsible only for 8th-grade first-term subjects; students for the university exam (YKS) only for 12th-grade first-term subjects. (Wikipedia TR states the same first-term rule.) [Wikipedia TR]
- 510 support-course points opened in the region for LGS and YKS preparation.
- 418 tents used as social activity and play areas with 4,000 specialists for psychosocial support for children.
- Schools opened by the army and the education ministry in tent and container areas ("Mehmetçik Okulları"); hospital classrooms; students in tent centres, dorms and container centres brought to school free by transport.
- 7.5 million textbooks, 5.5 million supplementary books and 130,000 stationery sets given; 20,000 full scholarships for private schools in 68 provinces for students who moved.
- Universities: teaching moved to distance learning first; SBB says it was re-evaluated for blended teaching from April. Universities in affected provinces paired with others; students could freeze registration in spring term and sit make-up exams; special-student status for some. Graduates with unfinished internships allowed to do them face-to-face at workplaces. [SBB p.47], [SBB p.48]
- Students' housing: Higher-education credit and dormitories agency (KYK) dormitories used for survivors; students staying there were asked to vacate rooms, and were reported as not informed about the process. [Wikipedia TR], [Wikipedia EN]
- SBB's own recommendation: technical and IT infrastructure so that students living in tent cities can take part in distance education; rearranging YKS dates. [SBB p.50]
- Scale: 4,100,601 students and 226,593 teachers in the region; 21.4% of all students in Türkiye. [SBB p.43], [SBB p.44] Universities in the region: 16, with about 380,000 students. [SBB p.44]
- School buildings: as of 3 Mar, 8,162 of 20,340 education buildings had been inspected; 72 collapsed, 504 heavily damaged, 331 moderately damaged, 2,533 lightly damaged. [SBB p.45]
- Other calendar effects: Wikipedia EN notes sports competitions suspended; several clubs withdrew from competition. [Wikipedia EN]

## 9. Damage assessment

- Assessment status as of 6 March 2023: 1,712,182 buildings assessed in the 11 provinces: 35,355 collapsed, 17,491 for urgent demolition, 179,786 heavily damaged, 40,228 moderately damaged, 431,421 lightly damaged, 860,006 undamaged; 147,895 buildings "could not be assessed". [SBB p.28] Sum of collapsed, urgent-demolition and heavy: 232,632 buildings (inference, arithmetic on Table 12).
- In housing-unit terms, the 6 March damage table shows 518,009 dwellings collapsed, urgent-demolition or heavy, 131,577 moderately damaged and 1,279,727 lightly damaged; the largest counts are Hatay (215,255), Kahramanmaraş (99,326), Malatya (71,519), Adıyaman (56,256), Gaziantep (29,155). [SBB p.38]
- Unit mismatch to note: SBB's summary says "more than half a million buildings" damaged and the body says "more than half a million buildings collapsed or heavily damaged" while the tables count 232,632 buildings and 518,009 dwellings. The text seems to use the dwelling count, calling it buildings. (Inference; SBB p.8, p.27 vs p.28 and p.38.)
- Wikipedia EN: by 23 Feb inspections covered 1.25 million buildings and found 164,000 destroyed or severely damaged; a March inspection found 1,411,304 housing units with light to moderate damage; government assessment said at least 61,722 buildings had to be demolished. [Wikipedia EN]
- Entitlements depend on category: under Law 7269 entitlements arise for homes, workplaces and barns; for lightly damaged homes no entitlement but a 10,000 TL payment. [SBB p.39]
- Insurance: 1,143,249 DASK policies in the 11 provinces; the damage assessments by the ministry (collapsed, urgent demolition, heavy) were used by DASK to start compensation procedures; by early March, 326,895 damage notifications and 2.0 bn TL paid. Notifications: heavy 23,197; total loss 12,590; light 268,794; moderate 22,314. The notification relies on the insured's own statement. [SBB p.34]
- Barns and shops: 14,314 barns and 94,217 commercial premises in the collapsed, urgent-demolition and heavy categories. [SBB p.38]
- Risky building stock before the quake: 37 risky areas (1,237 ha) declared under Law 6306; 83,634 risky buildings in those areas of which 17,686 demolished; 64,033 risky buildings identified parcel by parcel. [SBB p.30]
- SBB names as causes of collapse (per ITU, METU and other analyses): ground-motion intensity, low bearing capacity of foundation soils, deficiencies in design and construction quality, building age, non-compliance with regulations, and adjacent buildings with different floor levels. [SBB p.27]
- SBB's recommendations on assessment: standard-compliant assessment by experienced technical staff, done regularly and quickly. [SBB p.42], [SBB p.137]
- Records of building inspections: Wikipedia TR reports that on 11 Feb an attempt to demolish the single-storey Hatay building-inspection directorate, which held core samples and laboratory results, was partly stopped by lawyers and residents; the ministry later said the aim was to evacuate the annex because of a fire stair collapse risk. [Wikipedia TR]

## 10. Casualties, the missing, identification

### 10.1 Deaths by date reported

| Date reported | Figure | Source |
|---|---|---|
| 11 Feb 2023 | About 28,000; UN relief coordinator said he expected it to "more than double" | [Wikipedia EN] |
| March 2023 (report date) | "More than 48,000" dead in the 11 provinces | [SBB p.8], [SBB p.27] |
| March 2023 (same report, labour-market section) | "Announced number of deaths (26.1 thousand)" used in a workforce estimate — a different cut-off inside the same document | [SBB p.109] |
| 2 Feb 2024 | 53,537 in total, announced by the Minister of Interior | [Wikipedia TR] |
| Later reference | 53,537 deaths and 107,213 injured across 11 of 17 affected provinces; 15.73 million people affected | [Wikipedia EN] |
| Syria | Estimates of 5,951 to 8,476 | [Wikipedia EN] |

The SBB figure of "more than 48,000" and its 26.1 thousand figure are in the same March 2023 document; the reason is not stated. (The 26.1 thousand figure is in a paragraph about 15+ civilian population and labour force, so its scope may be narrower. That is inference.)

### 10.2 Injured, missing and children

- Injured: 107,213 (Wikipedia EN, undated) vs 107,204 (Minister of Interior, 22 April 2023, per Wikipedia TR). [Wikipedia EN], [Wikipedia TR]
- Transport of injured from the region: 51,581 (air 2,496; ground 48,758; sea 327). [SBB p.60]
- Missing: "About 140 people remain missing; 118 in Hatay Province" (undated in the article). [Wikipedia EN]
- Unaccompanied children brought out of rubble: 1,914, of whom 1,812 were handed over to families (Ministry of Family and Social Services, 27 April 2023). [Wikipedia TR]
- SBB (early March): children separated from families being reunited with relatives under the Ministry of Family and Social Services; unaccompanied children whose identity is established are handed to families, identification of some continues, and they are cared for in children's-home sites. [SBB p.111]
- 862 children in residential care moved to other institutions; 1,666 disabled and elderly people moved from institutions to 70 institutions in 33 provinces; 214 elderly and 752 disabled people from tents also placed elsewhere. [SBB p.111], [SBB p.112]
- 10 of 17 women's shelters in the region evacuated; 43 women and 39 children moved. [SBB p.112]
- Mass burial: Wikipedia EN reports mass burials in Kahramanmaraş, where a city official said the grave would eventually hold 10,000, and in Nurdağı. [Wikipedia EN]
- Identification: SBB mentions face recognition and matching software for identifying the missing as a technology opportunity, without describing how identification was carried out. [SBB p.138]
- National mourning: seven days declared in Türkiye on 6 Feb. [Wikipedia TR]
- Professions among the dead reported: 120 police officers, 32 gendarmes, 26 local journalists, 4 doctors (Wikipedia EN); at least 14 doctors and more than 32 soldiers (Wikipedia TR). [Wikipedia EN], [Wikipedia TR]

## 11. Economic cost

| Figure | Amount | Source and cut-off |
|---|---|---|
| Total burden, SBB | About 2 trillion TL (US$103.6 bn), about 9% of 2023 national income | [SBB p.10] |
| Same, SBB table 66 | Total 1,955 bn TL; the text under it says about 1,995 bn TL; both give US$103.6 bn | [SBB p.132] |
| Housing damage | 1,073.9 bn TL (US$56.9 bn), 54.9% of the total | [SBB p.10], [SBB p.132] |
| Public sector damage | 242.5 bn TL (US$12.9 bn); Table 65 gives 240.2 bn TL | [SBB p.10], [SBB p.131], [SBB p.132] |
| Private damage excluding housing | 222.4 bn TL (US$11.8 bn) | [SBB p.10], [SBB p.132] |
| Emergency spending | About 128 bn TL (US$6.8 bn) | [SBB p.131] |
| First-stage emergency allocation | 87 bn TL | [SBB p.33] |
| Tradesmen's income loss | 13.9 bn TL (US$0.7 bn) | [SBB p.132] |
| Debris volume | 100–120 million m³ assumed | [SBB p.132] |
| Damage, Turkish government preliminary report | US$103.6 bn, 9% of GDP | [Wikipedia EN] |
| Damage in Türkiye, article lead | US$150 bn, nine percent of GDP | [Wikipedia EN] |
| TÜRKONFED | US$84.1 bn | [Wikipedia EN] |
| President | Rebuilding would cost US$105 bn | [Wikipedia EN] |
| Employment loss | ILO estimate 658,000 workers lost jobs in Türkiye | [Wikipedia EN] |
| Markets | Borsa Istanbul fell 8.6% on 7 Feb; trading was suspended on the morning of 8 Feb and the exchange announced a five-day closure; lira at record low of 18.85 | [Wikipedia EN] |
| Telethon 15 Feb | US$6.1 bn (Wikipedia EN); 115.1 bn TL (Wikipedia TR). The two are in different currencies and are not reconciled in the sources | [Wikipedia EN], [Wikipedia TR] |
| World Bank | Announced US$1.78 bn emergency grant | [Wikipedia TR] |

The SBB inconsistency (1,955 vs 1,995 vs "about 2 trillion") is between adjacent pages of the same report. The report says values will be revised as damage data arrive. [SBB p.9]

### 11.1 Business, labour and money owed

- Workplaces: 94,217 commercial premises in the heavy/collapsed/urgent-demolition categories as of 6 March. [SBB p.38]
- Industry survey: 8,599 firms interviewed (2,398 face to face, 6,201 by phone); reported damage 81,155 million TL (buildings 31,117; machines 24,852; stock 15,126); estimated 154,742 million TL. The collapsed part was mostly small firms. [SBB p.99], [SBB p.100]
- SBB's first finding: buildings and machinery in factories were not the main problem; the main problem is expected to be people: staff who died, staff who lost relatives, staff who left. [SBB p.101]
- Informal work: about 700,000 unregistered workers in the five most affected provinces might remain outside employment and labour force for two quarters. [SBB p.109]
- Support: six-month insurance-premium deferral (March–August), three-month short-work allowance (March–May) and cash wage support, and six-month community-benefit programme, total cost 13.3 bn TL. [SBB p.112]
- Loans: repayment of Halkbank interest-supported loans for tradesmen deferred six months without interest; the credit guarantee package raised from 250 to 350 bn TL. [SBB p.100], [SBB p.101]
- Recommendation to shift export contracts of damaged apparel firms to other firms and use subcontracting. [SBB p.101]
- SBB recommends a workplace inventory and damage assessment, and prompt support for employers, tradesmen and self-employed people to return to work. [SBB p.114]
- Price control: the Ministry of Trade fined firms 84.975 million TL for excessive price rises on heaters, ready-food parcels, blankets, raincoats, hygiene kits, baby formula, winter boots and coats. [Wikipedia TR]
- Tourism firms: permit fees waived to 1 Jan 2024; inspections postponed; investment-permit durations extended a year; sustainable tourism certificate postponed to 31 Dec 2023. [SBB p.104], [SBB p.105]
- Travel: Turkish Airlines free change and refund for travel to, from or via Kahramanmaraş and surrounding provinces on tickets issued earlier, for 6–21 Feb; IATA applied an exceptional protocol from 15 Feb extending Turkish travel agents' payments by up to 3 months. [SBB p.105]

### 11.2 Documents, records and identity

- Passports and travel documents lost in the quake: for entry into Northern Cyprus, a photo document from the population directorate could stand in for a travel document, and expired passports or those with less than two months' validity were accepted for 90 days. [SBB p.105]
- Motor-vehicle traffic registrations erased by destruction: SBB recommends a special procedure so owners and surviving heirs can obtain a new vehicle. [SBB p.101]
- Social security offices: the Doğanşehir social security centre collapsed; a Kilis archive building was heavily damaged; three archive and storage buildings lightly damaged. [SBB p.110]
- Social aid based on identity number: SBB recommends giving social aid by national ID number because household composition changes after the quake. [SBB p.115]
- Title deeds: SBB suggests homes eligible for credit should have an "identity" record that the deed holder can access via e-government and share with a bank or buyer. [SBB p.137]
- Museums: collections' documentation and transport continued after damage. [SBB p.55]

## 12. Criticisms and lessons, stated factually

From the SBB report (the government's own report):
- Multi-actor plans under central control showed weaknesses with 11 provinces hit at once; the plan (TAMP, 2014, updated 2022) should be updated with experience; regular drills; AFAD should be proportionate in authority and capacity. [SBB p.133], [SBB p.25]
- Delays in search-and-rescue transfers from nearest regional units due to number of provinces and road damage. [SBB p.134]
- Local governments hold mostly pre-disaster powers (building inspection, zoning, urban renewal); in first-response crisis management, local capacity was lacking. [SBB p.134]
- Frequent rotation of experienced staff blocks institutional memory. [SBB p.135]
- Suggests each province have paired ("sister") provinces with strong responsibilities to coordinate in a disaster. [SBB p.134]
- Suggests a decision-support tool to route human resources and supplies to the right regions. [SBB p.138]
- Data: statement that there is no data or assessment on how disaster-management plans treat groups needing special policies. [SBB p.127]
- Temporary shelter should be safe, with infrastructure, keeping family unity, and coordinated with local governments and NGOs; tents and containers should be stocked for reuse. [SBB p.41]
- Requests women's participation in aid organisation; hygiene needs of women and girls. [SBB p.115]

From Wikipedia:
- Building rules: buildings completed after 1999 collapsed; codes updated in 2018 but criticised as under-enforced; construction amnesties covered about 75,000 buildings in the affected region. [Wikipedia TR]
- A "earthquake tax" collected since 1999: 88 billion lira whose use was "never made public" (as Wikipedia TR states). [Wikipedia TR]
- Erzin, with strict codes, saw no collapses or major damage in its main town. [Wikipedia EN]
- Criticism of rescue delays and aid delivery by opposition leaders and residents; the President acknowledged "shortcomings". [Wikipedia TR], [Wikipedia EN]
- Reports of looting and of violence against people suspected of looting, including volunteers; a special investigation bureau for earthquake crimes announced; detention of 98 people reported on 11 Feb. [Wikipedia EN], [Wikipedia TR]
- Prison unrest in Hatay (9 Feb per EN) and Kahramanmaraş, in which inmates demanded to reach families; three inmates died and 12 injured (EN) or 12 wounded with 3 of the injured dying (TR). [Wikipedia EN], [Wikipedia TR]
- A December 2024 conviction in the collapse of a hotel in Adıyaman. [Wikipedia EN]
- Election held as scheduled on 14 May after debate over postponement. [Wikipedia EN]

## 13. Observations relevant to CTCP's premise

These are observations about time and coordination in the sources. They are not design.

1. The first day had two separate main shocks, 9 h 07 min apart (04:17:34 and 13:24:48 Türkiye time). Anything arranged in the morning was arranged in a world that lasted about nine hours. [USGS]
2. The event that shifted time again came 14 days later. The 20 February shock, at 20:04 Türkiye time, hit people in the second week, many of whom had already made arrangements to stay or return. Wikipedia TR says 28 damage reports came in that day and that some already heavily damaged buildings fell. [SBB p.8], [Wikipedia TR]
3. The sources give at least four different descriptions of the same 20 February event (epicentre, magnitude, casualties). Different actors held different versions of the same fact. [SBB p.8], [SBB p.133], [Wikipedia EN], [Wikipedia TR]
4. Deadlines set by different bodies started on different days and ran for different lengths:
   - Judicial deadlines: two months from 6 Feb. [Wikipedia TR]
   - Tax obligations: postponed to 31 Jul. [Wikipedia EN]
   - Airline free change: 6–21 Feb. [SBB p.105]
   - Export ban on container houses: three months from 15 Feb. [SBB p.101]
   - OHAL: three months, announced 7 Feb (EN) or 8 Feb (SBB, TR). [SBB p.32]
   - Insurance-premium deferral March–August; short-work allowance March–May. [SBB p.112]
   - Rent aid: one year. [SBB p.33]
   - Home-building promise: one year from 9–10 Feb. [Wikipedia EN]
   - Temporary shelter: SBB says not beyond six months. [SBB p.39]
   - Schools reopening on 1, 13 and 27 March by province group. [SBB p.46]
   - Local school suspension quoted as "until 1 March" and "until 10 March" in two summaries. [Wikipedia TR], [Wikipedia EN]
5. A stated temporary-period limit (six months) and a later report of about 689,000 people still living in container homes after one year sit in different sources. [SBB p.39], [Wikipedia EN]
6. The whole state was working from figures with different as-of dates: damage tables at 6 March, school inspection at 3 March, planned housing at 3 March, cost estimate at 1 March. [SBB p.28], [SBB p.45], [SBB p.40], [SBB p.132] The SBB warns its figures will be revised. [SBB p.9]
7. A person's entitlements depended on an assessment category. As of 6 March, 147,895 buildings still had no assessment. [SBB p.28], [SBB p.39]
8. People moved faster than the records: SBB names uncertainty about where the population is as the main obstacle to planning. [SBB p.127]
9. Households changed shape after the quake, and SBB recommends aid by ID number for that reason. [SBB p.115]
10. Care depends on named people. SBB notes disabled people who lose a caregiver may be left without care and that elderly and disabled people were moved to institutions in other provinces. [SBB p.111], [SBB p.129]
11. Information moved through channels that had their own clocks: mobile networks ran on generators for 3–4 hours at a time [SBB p.86]; Twitter was restricted for about 10 hours [Wikipedia TR]; public pleas circulated on social media. [Wikipedia EN]
12. Physical access set arrival times: nearest search-and-rescue units were delayed by road damage and the number of provinces; the Hatay runway was open again on 12 Feb. [SBB p.134], [SBB p.82]
13. Volunteers and teams arrived in large numbers in the same days (12,752 flown from Istanbul by 06:00 on 7 Feb; over 159,000 volunteers and professionals by 11 Feb 00:03) while the area's own information systems were reported as not integrated. [Wikipedia EN], [Wikipedia TR], [SBB p.138]
14. SBB and Wikipedia give the first shock as 04:17 local time; Wikipedia EN adds 04:17:35 and USGS gives 04:17:34.342, so the same instant is stated at three levels of precision. [SBB p.8], [Wikipedia EN], [USGS]
15. Records themselves were lost: vehicle registrations, some social security archives, personal travel documents. [SBB p.101], [SBB p.110], [SBB p.105]

## 14. What the sources do not cover (gaps)

- Body identification or DNA process: not described.
- How lists of the missing were built, held, shared or corrected, and any privacy handling: not covered. The sources say only that people posted pleas and that about 140 people remain missing (undated). [Wikipedia EN]
- Whether social media rescue requests were resolved but stayed circulating: not documented. The sources say only that location sharing helped rescuers reach some people. [Wikipedia EN]
- The end date or any extension of the state of emergency.
- Hour-by-hour data for the first 72 hours, including when rescue crews reached each district.
- Road closure and reopening times by route; only broad statements about road damage and airport reopening on 12 Feb exist.
- Per-team USAR arrival times beyond the handful of dated examples in section 4.
- Individual experiences: the sources contain no messages from families such as a "last message at 04:20", and no personal accounts of families driving in on blocked roads. Those cases are invented from the documented conditions.
- Housing delivery data after early 2024: not covered beyond the single Wikipedia EN passage.
- Student-level outcomes (exam dates actually held, tent-based learning conditions): the sources give decisions, not outcomes; SBB's YKS date change is only a recommendation.
- Syria: covered thinly by the sources read.
- Cause of the 26.1 thousand vs "more than 48,000" figure inside the SBB report.
- Internal explanation for SBB's 1,955 / 1,995 / "about 2 trillion" cost figures.
- Foreign-team departure times, and how foreign and domestic teams were assigned to sites.
- What happened to people in the 40 buildings still under operation on 19 Feb.
- The wording of the OHAL and force-majeure decisions themselves, beyond summaries.

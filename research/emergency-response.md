---
topic: Emergency response phase (search and rescue, coordination, medical, communications, logistics, people tracking, responder safety) as time and coordination, seen against CTCP's premise
date: 2026-09-30
sources read with dates:
  - "https://www.insarag.org/methodology/insarag-guidelines/ (fetched 2026-09-30 via curl, read from local copy). Key: insarag-guidelines"
  - "https://en.wikipedia.org/wiki/International_Search_and_Rescue_Advisory_Group (fetched 2026-09-30 via curl, read from local copy). Key: wiki-insarag"
  - "https://en.wikipedia.org/wiki/Urban_search_and_rescue (fetched 2026-09-30 via curl, read from local copy). Key: wiki-usar"
  - "https://en.wikipedia.org/wiki/Simple_triage_and_rapid_treatment (fetched 2026-09-30 via curl, read from local copy). Key: wiki-start"
  - "https://en.wikipedia.org/wiki/Mass_casualty_incident (fetched 2026-09-30 via curl, read from local copy). Key: wiki-mci"
  - "https://en.wikipedia.org/wiki/Humanitarian_Cluster_System (fetched 2026-09-30 via curl, read from local copy). Key: wiki-cluster"
  - "https://en.wikipedia.org/wiki/Incident_Command_System (fetched 2026-09-30 via curl, read from local copy). Key: wiki-ics"
  - "https://en.wikipedia.org/wiki/Restoring_Family_Links (fetched 2026-09-30 via curl, read from local copy). Key: wiki-rfl"
  - "https://en.wikipedia.org/wiki/Disaster_victim_identification (fetched 2026-09-30 via curl, read from local copy). Key: wiki-dvi"
  - "https://tr.wikipedia.org/wiki/AKUT_Arama_Kurtarma_Derne%C4%9Fi (fetched 2026-09-30 via curl, read from local copy). Key: wiki-tr-akut"
  - "https://tr.wikipedia.org/wiki/Ahbap (fetched 2026-09-30 via curl, read from local copy). Key: wiki-tr-ahbap"
  - "https://tr.wikipedia.org/wiki/T%C3%BCrk_K%C4%B1z%C4%B1lay (fetched 2026-09-30 via curl, read from local copy). Key: wiki-tr-kizilay"
  - "SBB Deprem Sonrasi Degerlendirme Raporu, Turkish government 2023 earthquake report (local copy kahramanmaras/sbb-report.txt, cited by [page N] marker of the text file, which is the PDF page and not the printed 'Sayfa' number). Key: sbb"
  - "https://en.wikipedia.org/wiki/Humanitarian_response_to_the_2023_Turkey%E2%80%93Syria_earthquakes (fetched 2026-09-30 via curl, read from local copy kahramanmaras/wiki-en-humanitarian.txt). Key: wiki-humanitarian-2023"
  - "kahramanmaras/usgs-m78.txt and usgs-m75.txt (local copies, used only for the magnitude check in 2.2). Key: usgs"
  - "2026-09-30: local repo files read only for format (CASES.md, EXAMPLE-CASES.md, research/military-planning-time.md)."
status: research — not yet promoted to .context/
---

# Emergency response as time and coordination

## Verification pass (2026-09-30)

This report was first written entirely from memory because web access failed. It has now been checked against the local copies listed above. Counting each atomic factual claim carrying an inline tag in sections 1 to 7 and 9 to 13: **92 claims are now sourced** (tag SRC, with a source key or SBB page), **12 were corrected** (tag CORRECTED, each with a short note of what changed and why), and **67 remain memory** (tag MEMORY, no local source covers them). Sections 8 and 11 are my synthesis and observations, not source claims, and are not counted. Where a fact is sourced, only the local text was used; the sources are Wikipedia pages and one government report, so they are secondary. Nothing here is promoted to `.context/`.

Biggest changes: INSARAG now has a light-team classification (my "light is not international" was wrong); the marking circle means "cleared", not "live victim"; the SBB gives Mw 7.7 and 7.6 for the 6 February 2023 shocks where I had 7.8 and 7.5 (agencies differ); and the section 12 list of URLs is reduced to what is still unfetched. Key to inline tags: SRC and CORRECTED cite a source key from the frontmatter (or `sbb p.N`); MEMORY means unverified recall.

## 0. Evidence quality now

Sources are secondary (Wikipedia, one official report, one INSARAG web page). Numbers not covered by a local source (team sizes, survival percentages, bed counts, response-time targets) are still recall and are the most likely to be wrong. Nothing here should be promoted to `.context/` until the remaining URLs in section 12 are fetched and compared.

## 1. Urban search and rescue (USAR) and INSARAG

- INSARAG is a UN advisory body for USAR established in 1991 [SRC wiki-insarag]. Its secretariat is in OCHA, at the Palais des Nations in Geneva [SRC wiki-insarag].
- CORRECTED origin: I recalled it grew from the 1988 Armenia (Spitak) earthquake alone. The source says it was established in response to the 1985 Mexico City and the 1988 Spitak earthquakes [CORRECTED wiki-insarag].
- UN General Assembly Resolution 57/150 (2002) endorsed INSARAG's role, calling for "strengthening the effectiveness and coordination of international USAR assistance" [SRC wiki-insarag]. (The year I was unsure of is confirmed.)
- INSARAG has been involved in coordinating international teams in the 2010 Haiti, 2015 Nepal and 2023 Turkey–Syria earthquakes [SRC wiki-insarag].
- The Guidelines give a methodology for countries hit by a sudden-onset disaster with large-scale structural collapse, for international USAR teams responding in the affected country, and for the UN's role in on-site coordination [SRC insarag-guidelines].
- CORRECTED guideline structure: I recalled Volume I policy, Volume II preparedness and response, Volume III field operations manual, with 2015 and about 2020 editions. The page shows the 2020 edition as Volume I Policy; Volume II Manual A Capacity Building, Manual B Operations, Manual C External Classification and Reclassification; Volume III Operational Field Guide. The 2020 edition was reviewed and updated 2018 to 2020 [CORRECTED insarag-guidelines]. A 2015 version existed [SRC insarag-guidelines].
- New since my recall: new Guidelines were launched at the INSARAG Global Meeting in Foz do Iguaçu on 9 July (year not given in the copy), are effective from 1 January 2027, and have five volumes: Policy, National Capacity Building, Operations, IEC-R, Operational Field Guide [SRC insarag-guidelines].
- The 2020 edition added six areas over the 2015 version: IER Pre-Greening Process, INSARAG Recognised National Accreditation Process (IRNAP), USAR Coordination Cell (UCC), Information Management, Classified Light Teams, and Beyond the Rubble [SRC insarag-guidelines]. This confirms the UCC exists as an INSARAG concept.
- **Team classification.** CORRECTED: I recalled "Light is a national or local capability, not an international one". The 2020 Guidelines list "Classified Light Teams" among the new areas, so light teams can be classified; whether they deploy internationally is not stated in the copy [CORRECTED insarag-guidelines]. Countries with internationally deployable teams are encouraged, though not required for membership, to obtain INSARAG External Classification (IEC) [SRC wiki-insarag].
  - Light: one worksite, daytime operations (about 12 hours a day), personnel in the low tens [MEMORY].
  - Medium: one worksite, around-the-clock operations, about 40 personnel, self-sufficient about 7 to 10 days [MEMORY].
  - Heavy: two worksites at once, around-the-clock, about 50 or more personnel, self-sufficient about 10 days, heavy breaching and lifting tools [MEMORY].
  - AKUT, a Turkish NGO, passed the IEC in 2011 as a Medium USAR team, the first in Türkiye to be operationally classified, and was reclassified in Bulgaria in April 2018 [SRC wiki-tr-akut].
- **Deployment timelines.** Readiness within about 6 hours of accepting an offer [MEMORY]. International teams arrive about 24 to 72 hours after the event in practice [MEMORY]. US-style USAR task forces are expected to be self-sufficient for the first 72 hours of a deployment [SRC wiki-usar].
- **Phases of a USAR operation.** Wikipedia describes three phases: sizeup (gather facts, assess structure type, damage, layout, hazards, resources; continues throughout), search, and rescue [SRC wiki-usar]. The lifecycle view of a deployment (preparedness, mobilisation, operations, demobilisation, post-mission) [MEMORY]. The five-phase collapsed-structure model (assessment, surface, void, selective debris removal, general debris removal) and my claim that INSARAG adopted it [MEMORY]; the three-phase model above is a different, coarser description and I found no local source for the five-phase one.
- **Search practice.** Searchers call out first, then use a systematic pattern (triangulation, right/left, bottom-up or top-down) and stop at set periods to listen for tapping or voices [SRC wiki-usar]. The goal is to rescue the greatest number in the shortest time while minimising risk to rescuers [SRC wiki-usar]. Search dogs, acoustic and seismic devices, cameras, and technical breaching as the ordering of technologies [MEMORY]. Structural damage is categorised light, moderate or heavy [SRC wiki-usar]. Voids (pancake, lean-to, and spaces people entered for protection) are the areas of entrapment [SRC wiki-usar].
- **Assessment levels.** Four INSARAG levels: wide-area, sector, rapid structure, detailed structure [MEMORY].
- **Worksite marking.** CORRECTED. The INSARAG marking is a 1 m by 1 m square with G or N (go or no-go), the team name, and the date and time of start and end of the search. Live victims removed are written to the left, dead found to the right, persons unaccounted for or other victim locations below, and hazards above. A circle drawn around the square means the team has cleared the building to the best of its ability; a horizontal line through the whole marking means the building is confirmed clear. It is written in day-glo orange [CORRECTED wiki-usar]. What changed: I recalled "a circle for a confirmed live victim and an X for a confirmed dead one". The source gives the circle a different meaning (cleared), and the X belongs to the separate FEMA system (X in a square is "dangerous, do not enter"; an X with writing around it is "search completed") [CORRECTED wiki-usar]. Whether a separate "V" victim marking exists in the INSARAG system is not covered by the local source [MEMORY]. The FEMA system uses a single diagonal slash to mean a search is in progress [SRC wiki-usar]. Marks are meant to avoid duplicated search, and the rest of the point, that the mark is a hand-over medium that survives a lost radio, is my inference [MEMORY].
- **Worksite triage.** Ranking sites by likelihood of live victims, occupancy at the time of the event and collapse type [MEMORY].
- **The "golden 72 hours".** People are often found alive many hours and days after rescue begins [SRC wiki-usar]. The survival percentages by day (80 to 90 percent early, about a third to a half by day three, a few percent after day five) and their attribution to Marmara 1999 analyses and Macintyre and co-authors [MEMORY]. Rescues reported after 150 to 260 hours in the 2023 earthquakes [MEMORY]. That the window is a statistical decay and INSARAG language avoids a hard cut-off [MEMORY].
- **Virtual OSOCC and GDACS.** INSARAG members may have access to the Virtual On-Site Operations Coordination Centre and the Global Disaster Alert and Coordination System for real-time alerts and coordination tools [SRC wiki-insarag]. That GDACS is run by the EU Joint Research Centre and OCHA, and that VOSOCC carries requests and offers [MEMORY].
- **OSOCC, RDC, LEMA, UCC.** UCC as an element of the 2020 Guidelines [SRC insarag-guidelines]. The roles of OSOCC (set up by UNDAC or the first international team), RDC (registers and directs arriving teams) and LEMA, and the UCC's job of assigning sectors and worksites [MEMORY].

**Still to fetch:** https://vosocc.unocha.org , https://www.gdacs.org , and the volumes of the Guidelines themselves (only the index page was read).

## 2. Coordination

### 2.1 UN cluster system and OCHA
- The cluster system was introduced in December 2005 after a review commissioned in 2004 by Jan Egeland (the Humanitarian Reform Agenda) found coordination gaps, and was first used in the 2005 Kashmir earthquake response [SRC wiki-cluster]. It is used by OCHA and the clusters are defined by the Inter-Agency Standing Committee [SRC wiki-cluster].
- The source confirms eleven clusters plus four cross-cutting themes, each cluster having one UN institution as coordinator and some a secondary UN or non-UN coordinator [SRC wiki-cluster]. Note for my list below: my "IFRC" for Shelter can be at most a non-UN secondary role under that description (unverified).
- The cluster lead assignments as I listed them (Health WHO; WASH and Nutrition UNICEF; Logistics and Emergency Telecommunications WFP; Food Security FAO and WFP; Shelter IFRC/UNHCR; Protection UNHCR; CCCM IOM/UNHCR; Education UNICEF and Save the Children; Early Recovery UNDP) [MEMORY]. The copy's coordinator table was lost in conversion.
- Cluster coordination happens at global, national and local level, sometimes regional or provincial, with meetings as often as daily or as rarely as quarterly [SRC wiki-cluster]. The system has been criticised for centring on international agencies and excluding local and national organisations [SRC wiki-cluster].
- OCHA deploys UNDAC teams within about 12 to 48 hours; runs rapid assessment, a flash appeal within about a week, and regular situation reports [MEMORY]. In 2023, UNDAC, OCHA, UNHCR, UNICEF and IOM announced coordinated responses and the UN released US$25 million from its emergency fund for Türkiye and Syria [SRC wiki-humanitarian-2023].
- MIRA giving a first shared picture in about 72 hours [MEMORY].
- That clusters were not formally activated in Türkiye in 2023 because national capacity led, with the UN in support [MEMORY]. The SBB says international organisations' and foreign NGOs' aid activities were coordinated by the Presidency of Migration Management (Göç İdaresi Başkanlığı) [SRC sbb p.112].

### 2.2 Türkiye: AFAD and AADYM
- CORRECTED AFAD origin: I recalled that AFAD was established in 2009 by merging earlier bodies and "sits under the Ministry of the Interior". The SBB says that before the 1999 Marmara earthquake responsibility was split among the Afet İşleri Genel Müdürlüğü (under the Ministry of Public Works and Settlement), the Sivil Savunma Genel Müdürlüğü (Interior) and the Türkiye Acil Durum Yönetimi Genel Müdürlüğü (Prime Ministry). A 2009 arrangement closed these and merged them into AFAD, initially attached to the Prime Ministry, with provincial disaster and emergency directorates under the governor. AFAD was attached to the Ministry of the Interior only in 2018 by Presidential Decree No. 4 [CORRECTED sbb p.22, p.23]. The 2009 date and the merger of three bodies are confirmed; the "Interior from the start" is not.
- AFAD's structure was changed again by Decree No. 103 of 9 June 2022 [SRC sbb p.23].
- AADYM (Afet ve Acil Durum Yönetim Merkezi) as a 24-hour operations centre in Ankara, with provincial AFAD centres [MEMORY]. A grep of the SBB for AADYM found nothing.
- TAMP (Türkiye Afet Müdahale Planı) was prepared in 2014, updated and republished in 2022, and defines the working groups and coordination units for response; response in Türkiye runs under AFAD's coordination through the TAMP directive [SRC sbb p.25]. The 2022 plan defines coordination units for 28 service groups (hizmet grupları) [SRC sbb p.25]. The SBB says TAMP covers ministries, institutions, the private sector, NGOs and individuals [SRC sbb p.25].
- TAMP alarm levels 1 to 4, with Level 4 meaning national response possibly including a request for international help, and that Level 4 was declared on 6 February 2023 [MEMORY]. No local source mentions the levels.
- A state of emergency (OHAL) for 3 months was declared on 8 February 2023 in the provinces of the earthquake region, under Article 119 of the Constitution [SRC sbb p.32]. That it covered ten provinces [MEMORY]; the SBB says 11 provinces were affected [SRC sbb p.8].
- CORRECTED events: I gave Mw 7.8 at about 04:17 and Mw 7.5 at about 13:24 local time. The SBB gives 04:17 (Pazarcık, Kahramanmaraş, Mw 7.7, focal depth 8.6 km) and 13:24 (Elbistan, Mw 7.6, depth 7 km) [CORRECTED sbb p.8, p.22]. The times are confirmed. The magnitudes differ by agency: the local USGS records give 7.8 and 7.5 [SRC usgs], so my numbers are the USGS values and the SBB uses the Turkish agency values. Not a factual error, but the value depends on the agency; a case file must name the agency. The SBB also records a Mw 6.4 event at Yayladağı, Hatay at 20:04 on 20 February 2023 [SRC sbb p.8]. The second event hit while first-shock rescues were under way [MEMORY]; that follows from the times but the "rescues under way" is inference.
- The SBB reports 48,000 or more deaths, over half a million damaged buildings, and damage to communications and energy infrastructure [SRC sbb p.8].
- SBB self-assessment of the plan: TAMP is multi-actor, but with 11 provinces hit at the same moment, authority and responsibility ended up largely under central management, which exposed problems, and TAMP needs updating in light of the experience [SRC sbb p.133]. My recall that the first 48 hours were slow in some provinces, and about roads, airport damage and winter cold [MEMORY]. The SBB text I searched does not say this.
- By early March 2023, 271,060 personnel had served in the region, of which 35,250 were search and rescue personnel; the count includes public servants, NGOs, international USAR personnel and volunteers. 75 aircraft and 108 helicopters were used [SRC sbb p.32].

### 2.3 Incident Command System (ICS) at a high level
- Command Staff includes a Public Information Officer, Safety Officer and Liaison Officer [SRC wiki-ics]. General Staff sections Operations, Planning, Logistics, Finance/Administration [MEMORY]; the copy I read describes the officers and the incident commander but I did not locate a passage that lists the four sections.
- CORRECTED span of control: I recalled "about 3 to 7, commonly 5". The source says 3 to 7, with 5 ideal; below 3 the position can probably be absorbed by the level above [CORRECTED wiki-ics]. Effectively confirmed.
- Unity of command (each person reports to one supervisor) and common terminology are principles of ICS [SRC wiki-ics]. Modular expansion and management by objectives as principles [MEMORY].
- Intelligence/Investigations as an optional sixth function: the source describes an optional Information and Intelligence function, arranged as a command-staff officer, a general-staff section or a branch in Planning [SRC wiki-ics].
- Unified command means two or more individuals sharing the authority normally held by a single incident commander, used when several agencies or jurisdictions are involved [SRC wiki-ics].
- Incident action plans set measurable objectives for an operational period, usually 12 hours but any length [SRC wiki-ics]. This partly supports my point that objectives, not clock time, are the organising unit within a period.
- ICS was formed in 1968 at a meeting of California fire chiefs, developed during 1970s wildfire response (FIRESCOPE) [SRC wiki-ics]. In the US it is part of NIMS, made standard after Hurricane Katrina showed coordination trouble when some teams used ICS and others their own models [SRC wiki-usar, wiki-mci].
- Turkish use: whether TAMP formally calls its structure ICS [MEMORY]. Still a gap; the SBB describes TAMP's "modular structure" only [SRC sbb p.25].

## 3. Medical response

- **START** was developed in 1983 by staff of Hoag Hospital and the Newport Beach Fire Department, California [SRC wiki-start]. Walking wounded are asked to move to an area; non-ambulatory patients are assessed; the only intervention before declaring death is an attempt to open the airway [SRC wiki-start]. A breathing patient is "immediate" if respiratory rate is over 30 per minute, radial pulse is absent or capillary refill is over 2 seconds, or the patient cannot follow simple commands; all others are "delayed" [SRC wiki-start]. Colours: black (deceased/expectant), red, yellow, green [SRC wiki-start].
- CORRECTED time budget: I recalled about 30 to 60 seconds per patient. The source says pre-hospital triage takes no more than one minute per patient [CORRECTED wiki-mci]. The 30-second lower bound is not supported.
- **JumpSTART** is the paediatric variant [SRC wiki-start]: respiratory rate is "immediate" only if under 15 or over 45, apnoeic children with a pulse get 5 breaths, and the child/adult cut-off is 8 years if age is known [SRC wiki-start].
- **SALT** (Sort, Assess, Lifesaving interventions, Treatment/Transport), from a CDC-sponsored expert process around 2008 [MEMORY]. Wikipedia's START page notes that consensus has since emerged that triage should include resource limits and capacity [SRC wiki-start]; that is the gap SALT is meant to fill (inference, MEMORY).
- Triage is dynamic and patients are re-assessed; on arrival in the treatment area casualties are re-assessed and treated to stabilise them for transport [SRC wiki-mci]. Over-triage is a known START problem [SRC wiki-start]. Under-triage kills [MEMORY]. START does not allocate resources and gives no priority within a class [SRC wiki-start].
- The MCI page describes three phases: triage, treatment, transportation. Casualties move in order red, yellow, green, then black, and each colour has its own treatment area [SRC wiki-mci]. The first-arriving crew triages [SRC wiki-mci]. Hospitals activate a mass-casualty protocol on notification [SRC wiki-mci].
- **Crush injuries** and crush syndrome (rhabdomyolysis, hyperkalaemia, kidney failure), and dialysis demand in Marmara 1999 and 2023 [MEMORY].
- **Emergency Medical Teams.** WHO EMT Type 1 fixed about 100 patients a day, Type 1 mobile about 50, Type 2 about 20 beds and 7 major or 15 minor operations a day, Type 3 about 40 beds and 15 major or 30 minor operations, self-sufficiency, registration and EMTCC coordination [MEMORY].
- SBB medical numbers for 2023: 35 field hospitals were set up in the region and 19 foreign field hospitals were still serving at the time of writing [SRC sbb p.60]. 1,253 ambulances, 14 air ambulances and 245 UMKE vehicles were sent [SRC sbb p.60]. 12,749 UMKE and 112 health staff went [SRC sbb p.60]. 26,353 doctors and health workers were assigned to health facilities [SRC sbb p.60]. 114 emergency response units were set up in tent cities [SRC sbb p.60].
- CORRECTED patient transfers: I recalled tens of thousands transferred "by air, rail and ship". The SBB reports 51,581 injured evacuated from the region: 2,496 by aircraft, 48,758 by ambulance and other vehicles, and 327 by sea vessels [CORRECTED sbb p.60]. Rail is not listed; the count itself matches "tens of thousands".
- Transfer bottlenecks (transport capacity, receiving beds, patient tracking so that a moved patient is invisible to family) [MEMORY].
- **Dispatch and EMS targets.** UK Category 1 mean of 7 minutes [MEMORY]. NFPA guidance of about 8 minutes for ALS [MEMORY]. Türkiye 112 target times of about 10 minutes urban and 30 minutes rural [MEMORY]. The point that call taking, dispatch and travel each have their own clock is my synthesis.

**Still to fetch:** https://extranet.who.int/emt , https://www.who.int/emergencies/partners/emergency-medical-teams , the CDC SALT publication.

## 4. Communications

- Mobile networks fail from damaged towers and backhaul cuts, from power outage when battery backup drains, and from congestion [MEMORY]. SMS often works when voice fails [MEMORY].
- SBB damage data as of 6 March 2023: telecommunications damage of about 2.117 billion TL (exchange equipment 439 million, network 272 million, base stations 1.275 billion, end-user equipment 131 million); of 2,006 base stations, damage assessment was incomplete; tower-mounted base stations were mostly undamaged or lightly damaged, while stations on collapsed buildings and in crowded city centres were still being assessed [SRC sbb p.85, p.86]. This supports "towers mostly survived, sites on collapsed buildings did not" as a hypothesis, without covering outage durations.
- Fallback ladder (satellite phones, VSAT and Starlink, HF/VHF/UHF radio and amateur radio, mesh apps Bridgefy, Briar, Meshtastic) [MEMORY]. TAMSAT and the Turkish amateur radio bodies coordinating volunteers in 2023 [MEMORY]. The Emergency Telecommunications Cluster led by WFP [MEMORY].
- Social media used to post addresses of trapped people because official channels were saturated; a platform restricted for some hours; volunteer-built map and matching sites (afetharita etc.) [MEMORY]. Local sources show Twitter used for a "Teşekkürler Yunanistan" thank-you hashtag [SRC wiki-humanitarian-2023], which shows social media was in use but does not cover the rescue-request use.
- **Prioritising the first 24, 48, 72 hours** [MEMORY]; it is a practitioner framing and my synthesis:
  - 0 to 24 h: self-rescue and community rescue dominate; situational awareness; roads to hospitals and airports; command.
  - 24 to 48 h: international and national heavy teams arrive; USAR sector assignment; field hospitals; shelter and warmth.
  - 48 to 72 h: last of the high-probability rescue; water, food, sanitation, shelter; missing-person registration and body handling.
  - After 72 h: rescue continues with decaying probability; more resource to living survivors.

## 5. Logistics of aid and people

- **Pipeline stages** (need, request, procurement or donation, hub, warehouse, onward transport, distribution point, last mile) and hand-offs as the place where things are lost [MEMORY].
- Needs assessment timelines (MIRA about 72 hours, flash appeal about a week) [MEMORY].
- SBB 2023 logistics numbers: AFAD has 27 regional disaster logistics depots and 54 logistics support depots; the Turkish Red Crescent (Kızılay) has 35 logistics depots; large municipalities also hold tents and blankets [SRC sbb p.34]. 332 tent cities and 360,167 tents were serving 1,440,668 people; 189 container cities were being built, and 34,120 people were in containers [SRC sbb p.32]. 369 mobile kitchens were set up by Kızılay, AFAD, the defence ministry, gendarmerie and NGOs [SRC sbb p.33]. 18,048 work machines were still in operation [SRC sbb p.32].
- Warehouse saturation, unlabeled items, expiry [MEMORY]. Last-mile problems of damaged roads, snow and fuel, served by volunteers, mules and helicopters [MEMORY].
- The "second disaster" of unsolicited donations, well documented since Haiti 2010, and PAHO's SUMA and IFRC/WHO in-kind donation guidance [MEMORY].
- **Spontaneous volunteers.** AFAD's volunteer system had 1,339,150 registered volunteers, of whom 199,931 completed mandatory online training and 21,652 completed field training to become "Destek AFAD Gönüllüsü"; 32,819 AFAD volunteers worked in the earthquake region on tent set-up and dismantling, distribution and sorting of supplies, and humanitarian aid [SRC sbb p.32, p.33]. Volunteers being the largest rescuer group in the first hours, their risks, and volunteer reception centres as good practice [MEMORY].
- **Türkiye NGOs.**
  - Kızılay (Turkish Red Crescent) is the national society and runs soup kitchens (aşevleri) that serve hot food in crises [SRC wiki-tr-kizilay]. Its stock and tent capacity [MEMORY].
  - CORRECTED Kızılay tent controversy: I recalled "a tent sale controversy and a leadership resignation" with unsure details. The Turkish page says that after 6 February 2023 Kızılay's late arrival (day 3) drew strong criticism, and that Ahbap officials, after talking to Kızılay Çadır ve Tekstil A.Ş. (a company in Kızılay's partnership), bought 2,050 tents, which were still in a depot on day 3, for 46 million TL. Chairman Kerem Kınık said the sale was made without his knowledge and that Ahbap would be repaid [CORRECTED wiki-tr-kizilay]. The resignation I recalled is not in that page [MEMORY].
  - AKUT (Arama Kurtarma Derneği): CORRECTED, I recalled "founded 1996". The page says the name was first used in December 1995 at a rescue at Uludağ, and the association was officially founded in 1996 [CORRECTED wiki-tr-akut]. It is Türkiye's first civil society rescue organisation, began earthquake and flood work in 1997, was given public-benefit status in 1999, worked with 150 volunteers in the 1999 Gölcük earthquake, and became an INSARAG member in 1999 [SRC wiki-tr-akut]. Its 2022 chair Recep Şalcı resigned to become AFAD president [SRC wiki-tr-akut].
  - Ahbap: founded by the musician Haluk Levent, officially as Ahbap Derneği on 31 July 2017, with volunteer networks in 68 provinces as of 2023; its disaster work includes search and rescue, food, tents, prefabricated shelters, mobile kitchens and mobile health trucks [SRC wiki-tr-ahbap]. Its 2023 financial aid campaign raised more than 1 billion TL [SRC wiki-humanitarian-2023]. New: the Turkish page reports that in July 2026 the Istanbul Chief Public Prosecutor opened an investigation into the association, Haluk Levent was arrested, its assets were seized and, from 27 July 2026, a trustee runs it [SRC wiki-tr-ahbap]. This is allegation and process, not a finding, and relevant to any case file that names Ahbap.
  - "Container homes" as an Ahbap output and the "large fundraising broadcast" by other bodies [MEMORY]; the size of the joint national broadcast fundraiser [MEMORY].

## 6. Tracking people

- Restoring Family Links (RFL) is a programme of the Red Cross and Red Crescent Movement run by the ICRC and the National Societies; they form the Family Links Network [SRC wiki-rfl]. The Central Tracing Agency, in Geneva, descends from the Central Prisoners of War Agency created in the Second World War [SRC wiki-rfl]. The public portal familylinks.icrc.org is managed by the ICRC with National Societies and describes RFL services in more than 150 countries [SRC wiki-rfl]. RFL services are free of charge [SRC wiki-rfl].
- A tracing request is compared against lists of detained persons, hospital patients, hotline information, and lists of the dead or of those safe and well; online tracing has been used since 1996 to publish such lists [SRC wiki-rfl]. National authorities have primary responsibility for reuniting families; for separated children the network works with UNICEF [SRC wiki-rfl]. The Turkish Red Crescent taking part in 2023 tracing specifically [MEMORY].
- Practical issues of duplicates, spelling and transliteration, people moved between hospitals and camps, unclear status [MEMORY].
- Best practice for lists (one person one record with status and source, provenance, data protection for children and casualty status) [MEMORY].
- **Identifying the dead.** DVI follows four phases: scene examination, post-mortem data collection, ante-mortem data collection, and reconciliation; techniques include fingerprinting, dental records and DNA profiling; INTERPOL issued its first DVI guidelines in 1984 [SRC wiki-dvi]. The process is slow to avoid misidentification [SRC wiki-dvi]. That fingerprints, dental and DNA are the primary identifiers and visual recognition is secondary only [MEMORY]. Constraints of refrigeration, forensic staff, DNA throughput, and Islamic preference for quick burial [MEMORY].
- Türkiye 2023 lists held by AFAD, the Ministry of Health, the Council of Forensic Medicine and municipalities; e-Devlet lookups; KVKK applying to casualty lists [MEMORY].

## 7. Safety during the response

- Two-in, two-out and buddy systems with backup teams for searchers [SRC wiki-usar]. Search leads to hazards such as downed power lines, gas leaks and structures prone to further collapse during rescue being part of sizeup [SRC wiki-usar]. Teams can assess and control utilities and hazardous materials and evaluate and stabilise damaged structures [SRC wiki-usar].
- Aftershock evacuation rules (horn, muster point), safety officer watching structure, shoring [MEMORY]. ICS includes a Safety Officer who monitors safety conditions and develops measures for all assigned personnel [SRC wiki-ics].
- ATC-20-style placards (green, yellow, red) in many countries [MEMORY]. Turkish categories: the SBB names building damage classes "yıkık" (collapsed), "acil yıkılacak" (to be demolished urgently) and "ağır hasarlı" (heavily damaged), assessed by the Ministry of Environment, Urbanisation and Climate Change (ÇŞİDB) [SRC sbb p.34]. The lighter classes (slightly and moderately damaged) [MEMORY]. That a yellow building can turn red after an aftershock and residents may have moved back [MEMORY].
- Stopping search and switching to recovery as a formal decision by the host authority, site by site, advised by USAR coordination [MEMORY]. Families resisting [MEMORY].
- Responder fatigue, cold, dust, hygiene, post-incident stress as parts of safety [MEMORY].

## 8. Time-related patterns in this domain (my synthesis from sections 1-7)

Each is a reading of the material, not a source claim. Not counted in the verification pass.

1. Most clocks are counted from an event time ("hour 40"), not from a wall clock. The event may itself be multiple events (two shocks about 9 hours apart; the times 04:17 and 13:24 are confirmed by the SBB).
2. Many times are estimates with decay: survival probability, rescue duration, convoy arrival.
3. Order without a clock time is normal: the site marks, the sector order, the "next team" in the queue.
4. Conditions end and start work: aftershock, hazard cleared, road reopened, permission granted, fuel arrives.
5. Multiple parties act on one object (a building, a person, a list) without seeing each other's records.
6. Records are made by hand and later reconciled, with times taken from different clocks. (The INSARAG marking carries start and end date and time on the wall [SRC wiki-usar].)
7. Delays travel: a closed road delays a convoy, which delays a kitchen, which delays a shift.
8. Sensitive data (who is dead, who is missing) must be shared partially between institutions.

## 9. Türkiye-specific gaps
- AFAD/AADYM internal procedures and timings: not covered by any local source; AADYM is not mentioned in the SBB at all.
- Exact hours at which foreign teams arrived in each province in 2023: not in the local sources. The 2023 humanitarian page lists many national contributions (for example 76 Polish firefighters left on 6 February, Salvadoran teams arrived 9 February) [SRC wiki-humanitarian-2023], but no province-by-hour table.
- The roles of AHBAP, AKUT and Kızılay versus AFAD in 2023 and any official volunteer reception process: partly filled by section 5 (AFAD volunteer system) and the tr.wikipedia pages; the reception process itself is still unverified.

## 10. Sources and confidence table

| Topic | Confidence | Verified? |
|---|---|---|
| INSARAG existence, 1991, Resolution 57/150, secretariat in OCHA | firm | yes, wiki-insarag |
| INSARAG Guidelines structure (2020, and new 2027 edition) | firm | yes, insarag-guidelines |
| Team sizes, hours, readiness times | unsure | no |
| Light teams can be classified | fairly firm | yes, insarag-guidelines (2020 new areas) |
| INSARAG marking (square, G/N, circle = cleared) | firm | yes, wiki-usar; V-marking symbol unverified |
| Three USAR phases (sizeup, search, rescue) | firm | yes, wiki-usar |
| Five USAR phases | unsure | no |
| 72 hours decay curve numbers | unsure | no |
| Cluster system origin (2005, IASC, Kashmir), eleven clusters | firm | yes, wiki-cluster |
| Cluster leads | fairly firm | no (table not in copy) |
| AFAD history, TAMP dates, 28 service groups, OHAL date | firm | yes, sbb p.22-25, p.32 |
| AADYM, TAMP alarm levels, Level 4 | unsure | no |
| 2023 shock times | firm | yes, sbb p.8 and usgs; magnitudes agency-dependent (7.7/7.6 SBB, 7.8/7.5 USGS) |
| START rules, JumpSTART, 1983 origin | firm | yes, wiki-start |
| SALT | fairly firm | no |
| WHO EMT types and numbers | fairly firm on types, unsure on numbers | no |
| EMS target minutes | unsure | no |
| Amateur radio and mesh in 2023 | unsure | no |
| ICS span of control, unity of command, unified command, operational period | firm | yes, wiki-ics |
| ICRC tracing, RFL, portal | firm | yes, wiki-rfl |
| Interpol DVI four phases, 1984 guidelines | firm | yes, wiki-dvi |
| AKUT history and INSARAG classification | firm | yes, wiki-tr-akut |
| Ahbap history and 2026 investigation | firm on the page's content | yes, wiki-tr-ahbap |
| Kızılay tent sale | firm on the page's content | yes, wiki-tr-kizilay; resignation unverified |
| 2023 response numbers (personnel, tents, evacuated injured) | firm | yes, sbb |

## 11. Observations relevant to CTCP's premise

Observations only; no design. Not counted in the verification pass. Two of these observations lean on facts now sourced: the INSARAG wall marking carries start and end times and counts on the structure itself (wiki-usar); and the 2023 shocks were two events with a 9 hour gap (sbb p.8), with the magnitude value depending on which agency is quoted.

- **Nesting, one thing inside several.** A collapsed building sits inside a district, a sector assigned to a team, a coordination area of an agency, and an assessment category; a rescue is inside a building's worksite and also inside a team's shift and a hospital's intake plan. One patient sits in a family's search, a hospital's bed list and a transfer flight. Nesting is the normal shape, not a rare one.
- **Pushing within a sequence.** A team's work on site A pushes its work on site B; a convoy delayed on a closed road pushes a kitchen's meal service, which pushes a shift. The push is carried by real dependencies (fuel, crane, road) not by the clock.
- **Order without time.** Sector queues, "next team on the list", worksite priority rank, and the marks left on walls carry order with no time. Many hand-written records have order but no reliable time.
- **Kinds of time.** Exact: the earthquake origin time, an aftershock time, a flight departure. Range: "arrives in 24 to 48 hours". Estimate: the length of a breaching operation. Prediction updating from data: survival probability decaying with elapsed time and temperature; a convoy arrival time updating from road reports. The 72 hours is a decaying likelihood curve, not a deadline.
- **Uncertain source times.** "Last heard" reports (a voice at 03:00 or "sometime last night") and hand-recorded times when phones are down have unknown clock error and unknown certainty.
- **Conditions.** Work is stopped or moved by conditions: aftershock, gas leak, structural instability, permission, fuel, weather, road status. Site-level decisions to end search are conditions with human judgement on top.
- **Servers negotiating without handing over everything.** The state (AFAD), the Red Crescent, foreign teams, hospitals, NGOs, and families each hold partial records and each has reasons not to share all of it (privacy of casualty status, security of aid depots, foreign teams' own reporting duties). Shared: which building, which time window, whether it is claimed. Not shared: names, medical detail. Duplicates across three lists are the same person seen by three holders.
- **Handover.** The wall mark, the paper log and the verbal briefing are the only things that cross a shift, and the unfinished rescue is exactly the case where the estimate and the reason for a stop must cross with it (outside scope beyond this mention).
- **Responsibility for a decision.** Ending a search is a decision by one authority that others must see and may contest; the time of the decision matters and later reports can contradict it.
- **Scale.** The same shape repeats at the level of a single rescue (hours), a hospital ward (hours), a province (days), a country (weeks).

## 12. URLs still to fetch

Read from local copies (no longer to fetch): insarag.org guidelines page, the Wikipedia pages listed in the frontmatter, the SBB report.

- https://vosocc.unocha.org/
- https://www.gdacs.org/
- https://www.insarag.org/ (External Classification pages, and the volumes themselves)
- https://www.unocha.org/ (UNDAC, cluster coordination pages)
- https://interagencystandingcommittee.org/ (cluster approach; the cluster lead table)
- https://www.afad.gov.tr/ (AADYM, TAMP alarm levels)
- https://familylinks.icrc.org/
- https://www.who.int/emergencies/partners/emergency-medical-teams
- https://www.interpol.int/How-we-work/Forensics/Disaster-Victim-Identification-DVI
- https://www.fema.gov/emergency-managers/nims (ICS)
- https://www.ifrc.org/ (Turkish Red Crescent 2023 operation reports)
- Macintyre AG et al., survival after collapse (Prehospital and Disaster Medicine, 2006, unverified citation)

## 13. Gaps
- No local source for TAMP alarm levels, AADYM, team-size numbers, EMT numbers, survival numbers, EMS targets, or the V-marking symbol.
- Türkiye's own USAR classification: AKUT is confirmed as IEC Medium (2011, 2018) [SRC wiki-tr-akut]; AFAD's and municipalities' status is still unknown.
- Nothing on formal volunteer-reception procedures in Türkiye beyond the AFAD volunteer system numbers.
- No data on 2023 response time series (when each team arrived, when each road opened); the case-study agent should provide it.
- No direct treatment of children separated from families in Türkiye 2023.
- Which agency's magnitude to use for the 6 February 2023 shocks (SBB 7.7/7.6, USGS 7.8/7.5): a decision for the case files.

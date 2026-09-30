---
topic: Menstrual cycle biology and timing, for planning around the cycle
date: 2026-09-30
sources read:
  - "NHS, Periods overview (fetched 2026-09-30): https://www.nhs.uk/conditions/periods/"
  - "Bull et al. 2019, npj Digit Med, full text via Europe PMC (PMC6710244): https://doi.org/10.1038/s41746-019-0152-7"
  - "Apple Women's Health Study: Li et al. 2023 (npj Digit Med), Gibson et al. 2022, Mortimer et al. 2026 (AJOG) — abstracts only, via Europe PMC search"
  - "Worsfold et al. 2021, Women's Health (abstract only): https://doi.org/10.1177/17455065211049905"
  - "Su et al. 2017, ovulation detection review (abstract only): https://doi.org/10.1002/btm2.10058"
  - "Britton & Duncan 2026, athlete performance meta-analysis (abstract only): https://doi.org/10.1530/raf-25-0131"
  - "Itoi et al. 2026 (BMI change), Jiang et al. 2026 (post-COVID), Leupold et al. 2026 (TikTok cycle syncing) — abstracts only, via Europe PMC search"
  - "NOT read (blocked, HTTP 402/403/captcha): ACOG Committee Opinion 651, NICE CKS, nature.com, PMC direct pages"
  - "Everything marked [memory] comes from model training knowledge, not fetched this session"
status: research — not yet promoted to .context/
---

# How the menstrual cycle works, and how it behaves in time

Provenance key. **[fetched]** = read this session, URL given. **[abstract]** = only the abstract was seen. **[memory]** = from training knowledge, unverified this session; treat as candidate, check against ACOG / NICE / NHS before promoting. **[inference]** = my reasoning, not a source claim.

Gaps up front: ACOG (Committee Opinion 651, the "fifth vital sign" paper), NICE CKS and ACOG's PMS/PMDD guidance could not be fetched. Every claim attributed to them below is [memory]. Search was rate-limited so I used Europe PMC's REST API (which worked) plus known pages.

## 1. Phases and hormones

The cycle is a feedback loop between hypothalamus, pituitary and ovaries. Standard textbook structure [memory]:

| Phase | Approx. days (28-day textbook cycle) | Hormones | What happens |
|---|---|---|---|
| Menstrual | 1–5 | Estrogen and progesterone both low | Uterine lining sheds. Low steroids release the brake on FSH, so FSH begins rising near the end of the previous luteal phase. |
| Follicular (includes menstrual days) | 1 to ovulation | FSH rises early; estrogen rises steadily from the growing dominant follicle | FSH recruits a cohort of follicles; one dominant follicle emerges. Estrogen rebuilds the lining. |
| Ovulation | ~ day 14 in the textbook, but variable | Estrogen peak triggers LH surge; FSH also spikes | LH surge precedes release of the egg by roughly 24–36 h (about 10–12 h after the LH peak) [memory]. |
| Luteal | Ovulation to next bleed | Progesterone high (from corpus luteum), estrogen second smaller peak | Lining becomes secretory. If no pregnancy the corpus luteum fades over ~ 10–14 days, hormones fall, bleeding starts. |

Note the follicular phase technically includes the menstrual days; many apps and texts draw "menstrual" as its own phase. Both framings are conventional.

## 2. Lengths and variability

**Typical length.** NHS: "around every 28 days... ranging from every 21 days to every 35 days" **[fetched]** https://www.nhs.uk/conditions/periods/

**Real-world spread.** Bull et al. 2019, 612,613 ovulatory cycles from 124,648 app users (mean age 30.3, mostly Sweden/UK/USA, users of a fertility-awareness app with temperature data) **[fetched]** https://doi.org/10.1038/s41746-019-0152-7 :
- mean cycle length 29.3 days; 65% of cycles were 25–30 days; only 13% were exactly 28 days.
- per-user cycle-to-cycle variation 2.6 ± 2.5 days (so a typical person swings a couple of days; some swing much more).
- cycle length falls about 0.18 day per year of age from 25 to 45; the drop is in the follicular phase (0.19 d/yr).
- BMI over 35: variation about 0.4 day (14%) higher; follicular phase 0.9 day longer in obese women.
- Caveat: the dataset counts only ovulatory cycles from app users who chose a temperature/ovulation method, so it is likely tidier than the general population. [inference, but the paper's own selection is stated]

**Apple Women's Health Study** (smartwatch/phone cohort, US) **[abstract]**: Li et al. 2023, 165,668 cycles from 12,608 participants: Asian participants' cycles 1.6 days longer, Hispanic 0.7 days longer than white; BMI >= 40 about 1.5 days longer; variability rose 200% in those over 50 compared with ages 35–39. https://doi.org/10.1038/s41746-023-00848-1
Mortimer et al. 2026, 160,206 cycles: PCOS or early-life irregularity gives longer mean cycles during reproductive years; the gap shrinks by age 40. https://doi.org/10.1016/j.ajog.2025.11.031
Gibson et al. 2022: COVID vaccination lengthened cycles by ~0.4–1.3 days, temporary. https://doi.org/10.1038/s41746-022-00711-9

**Which phase varies.** Follicular: 16.9 ± 5.3 days. Luteal: 12.4 ± 2.4 days (Bull) **[fetched]**. So the follicular phase carries roughly twice the variance; the luteal phase is comparatively stable. The textbook "14-day luteal" is approximately right in the mean here (12.4) and lower on average than commonly assumed. Ovulation is the moving event; the luteal length is the steadier anchor. (Consistent with [memory] of older Lenton/Fehring literature.)

**Bleeding length.** Bull: mean bleed 4.0 ± 1.5 days **[fetched]**. NHS: about 5 days, normal range 2–7, heaviest in first two days; blood loss typically 20–90 ml **[fetched]** https://www.nhs.uk/conditions/periods/
**Heavy.** Clinical definition: >80 ml per cycle [memory]; NICE frames heavy menstrual bleeding as excessive loss that interferes with physical, social, emotional life, not by volume alone [memory]. Sign of clot passage, flooding, changing product hourly [memory].
**Spotting vs period.** NHS lists bleeding between periods as a reason to see a GP **[fetched]**. Spotting is light and does not need full protection; a period is a flow that builds and continues. The boundary is by convention and by the person's judgment; there is no lab-defined threshold [memory/inference]. Ovulation spotting and implantation spotting exist [memory].

## 3. Counting: cycle day 1

Convention: day 1 is the first day of full menstrual flow; light spotting before the flow is not day 1 [memory]. Cycle length = day 1 of one period up to (not including) day 1 of the next. Studies and apps differ on how they treat leading spotting [inference; Bull et al. count bleed days from user reports, exact handling not confirmed]. Consequence: cycle length is defined by a human judgment at each end, and a bleed that starts late at night lands on one of two calendar dates [inference].

## 4. Ovulation and its signs

Ovulation is the event that most defines the cycle's shape and the least observable in real time.

| Sign | Direction / timing | Certainty | Source |
|---|---|---|---|
| Urinary LH surge (strips) | Positive about 24–36 h before ovulation | Good predictor of imminent ovulation; a surge can occur without follicle rupture (rare) and some people have multiple surges | Su et al. review **[abstract]** lists urinary LH among methods, notes small samples and inconsistent reference standards; timing figure [memory] |
| Basal body temperature | Sustained rise ~0.2–0.5 C after ovulation, caused by progesterone | **Retrospective only**: confirms ovulation happened, usually 1–3 days after; noisy with sleep, alcohol, illness, timezone | [memory]; Bull et al. use temperature to identify ovulation **[fetched]** |
| Cervical mucus | Becomes clear, stretchy, slippery ("egg white") in the days before ovulation | Real but subjective; varies between people and cycles | [memory] |
| Wearable-based fertile window | Skin temp, heart rate, respiration | Goodale et al. 2019 report 90% accuracy of fertile-window detection in their model **[abstract]** https://doi.org/10.2196/13404 (single-vendor, lab-partner study; not independently checked) | |
| Serum progesterone / ultrasound | Clinical confirmation | Reference standard | [memory] |

Su et al. note that "gold standard" confirmation is itself inconsistent across studies **[abstract]** https://doi.org/10.1002/btm2.10058

## 5. Irregularity

- **Anovulatory cycles.** Cycles with no ovulation produce no progesterone; bleeding can be late, absent, or irregular and heavy. Common near menarche, in perimenopause, in PCOS [memory]. Bull excluded them by design **[fetched]**, so their tables say nothing about anovulatory frequency.
- **After menarche.** ACOG: cycles in adolescents may be 21–45 days in the first years and settle later [memory, from ACOG CO 651, not fetched]. Many cycles in the first 1–2 years are anovulatory [memory]. Early irregularity is a predictor of later longer cycles in PCOS/AWHS **[abstract]** (Mortimer 2026).
- **Perimenopause.** Cycle variability rises sharply after 50 in AWHS **[abstract]**; typical picture is cycles lengthening then skipping, with occasional short cycles and heavy bleeds [memory]. STRAW staging defines late transition by 60+ days of amenorrhea [memory].
- NHS advises seeing a GP if periods change unexpectedly, bleeding between periods or after sex, or three consecutive missed periods after a negative pregnancy test **[fetched]**.

## 6. What shifts timing

Evidence is mostly observational; direction is fairly consistent, size is weak to moderate, and it mainly acts by delaying ovulation (lengthening the follicular phase). [memory + inference]

| Factor | Evidence |
|---|---|
| Stress | Adolescent burnout, low BMI, disordered eating linked to irregular menstruation (Mörö 2026) **[abstract]** https://doi.org/10.1136/bmjsem-2025-003078 ; stress, poor diet, <7 h sleep associated with irregularity in a hospital sample (Adam 2026) **[abstract]** https://doi.org/10.1186/s12905-026-04541-9 (cross-sectional; association only) |
| Illness | 74.9% of 884 women reported menstrual change after COVID; 47.6% cycle length (Jiang 2026) **[abstract]** https://doi.org/10.1186/s12905-026-04599-5 (self-report). Pre-existing irregularity predicted more change. Fever delaying ovulation is a common mechanism [memory]. |
| Weight change | Gain to overweight/obese: aOR 2.02–2.53 for irregularity; loss from overweight to normal: lower odds (Itoi 2026) **[abstract]** https://doi.org/10.1186/s12905-026-04308-2. Large loss / low energy availability causes hypothalamic amenorrhea [memory]. |
| Intense exercise | Low energy availability suppresses the cycle (relative energy deficiency in sport) [memory]. |
| Travel / jet lag | Small effects on timing in flight crew and travellers reported [memory]; I did not find a large trial. Weak evidence. |
| Sleep / shift work | Shift work associated with irregular cycles in observational cohorts [memory]. |
| Breastfeeding | Suppresses ovulation via prolactin; return of cycles is unpredictable and the first ovulation can precede the first bleed [memory]. |

## 7. Symptoms by phase

- **PMS/PMDD.** Symptoms occur in the luteal phase and resolve within days of bleeding starting; PMDD is a severe form, diagnosed by symptom charting over at least two cycles [memory: DSM-5, ACOG]. Prevalence figures: PMDD roughly 3–8%, PMS-type symptoms in a large majority [memory; searched but the meta-analysis was not retrievable]. Symptoms typically peak in the last days before and first days of bleeding [memory].
- **Cramps (dysmenorrhea).** Prostaglandin-driven; usually starts just before or with the bleed, lasts 1–3 days [memory].
- **Fatigue, mood, sleep.** Sleep quality often reported worse in the late-luteal phase; core body temperature is higher in luteal [memory]. Mood effects are highly individual [memory].
- **Menstrual migraine.** Linked to the estrogen drop before menstruation; attacks cluster from about 2 days before to 3 days after bleed onset, and are often longer and harder to treat [memory; International Headache Society criteria].
- **Energy/performance and "cycle syncing".** A 2026 meta-analysis of elite athletes found no statistically significant differences in VO2max between early follicular and mid-luteal phases, only small non-significant dips in menstruation (Britton & Duncan) **[abstract]** https://doi.org/10.1530/raf-25-0131. A 2026 analysis of 160 TikTok "cycle syncing" videos found poor educational quality (Global Quality 1.8 ± 0.6, 80% affiliate marketing, 9% by clinicians) (Leupold et al.) **[abstract]** https://doi.org/10.1177/19417381261479699. My reading: strong claims that diet/exercise/work should be phase-matched lack good trial evidence; individual symptom patterns (cramps, migraine, PMDD) do have physiological grounding. [inference]

## 8. Hormonal contraception

[memory, all]
- Combined pill (21/7 regimen): the pill-free week produces a **withdrawal bleed**, not a true period, because ovulation is suppressed. Timing is set by the pack, so highly regular (28 days).
- Continuous/extended use (skipping the pill-free week): bleeding may be absent or irregular spotting for the first months.
- Progestin-only methods (mini-pill, implant, injection, hormonal IUD): frequent unpredictable spotting, or amenorrhea over time.
- After stopping: ovulation usually returns within weeks for pill, but cycles may be irregular for a few months; injection can take much longer. Pre-pill cycle irregularity can resurface.
- Consequence [inference]: a cycle model built on natural ovulation does not apply on suppressing contraception. The "cycle" is the pack.

## 9. What predicts well and what doesn't

- Calendar averaging: with 65% of ovulatory cycles inside 25–30 days and per-user SD about 2.6 days (Bull) **[fetched]**, the next period is often predictable to within a few days for regular people, but not to the day.
- Ovulation from calendar is poor: only 8% of 36 ovulation-day predictions from period-tracker apps were exactly correct; 67% were 2–9 days early; cycle length predictions off by 0–8 days for irregular profiles (Worsfold 2021) **[abstract]** https://doi.org/10.1177/17455065211049905. Bull et al. explicitly argue for physiological markers rather than cycle length alone **[fetched]**.
- The luteal phase is a better anchor than the calendar: once ovulation is confirmed, next bleed ≈ ovulation + luteal length (12.4 ± 2.4 days on average) **[fetched numbers; the anchoring is my inference]**.
- Regularity history is the best predictor of future regularity; pre-existing irregularity predicts more change after disruption (Jiang) **[abstract]**.
- Not established: whether stress/sleep/food logs improve next-period prediction beyond cycle history. I found no primary study demonstrating it. Gap.
- Not established: predicting bleeding intensity. No source found. Gap.

## Observations for a planning system

Written as observations, not design.

1. Cycle length varies by person and month; a mean of 28 is a minority outcome (13% exactly 28). A typical person's own SD is around 2–3 days, and some have much more.
2. The variance sits in the follicular phase; the luteal phase is steadier. So the time between ovulation and the next bleed is more predictable than the time between one bleed and ovulation.
3. Ovulation cannot be observed directly. Temperature confirms it after the fact; LH strips and mucus give short warning. Anything expressed before then is an estimate.
4. Day 1 depends on a human judgment (spotting vs flow) and on clock date (a bleed near midnight, or after a timezone jump, could land on either date).
5. Symptoms tied to the luteal phase (PMS/PMDD, migraine, cramps) can begin before the bleeding starts and end after it starts; they anchor to the end of the cycle, not the start.
6. Bleeding: typically 4–5 days, heaviest first two; but 2–7 is normal.
7. Life events can shift ovulation and therefore the whole cycle, mostly by lengthening the follicular phase; evidence for size and lag is weak and mostly self-reported.
8. Hormonal contraception replaces the natural cycle with a pack-driven pattern (withdrawal bleeds, or none); stopping it produces a period of re-establishment.
9. Adolescents (first years) and perimenopause: higher variability and anovulatory cycles are expected, so history is a weaker guide.
10. Phase-based energy/performance claims lack strong evidence; individual patterns may be real but need the person's own data.
11. Best available evidence for predictions is aggregate app data; app ovulation predictions were often wrong by days.
12. Gaps: no source found on intensity prediction, or on the value of food/sleep/stress logs for prediction; ACOG/NICE not verified.

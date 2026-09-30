---
topic: Menstrual cycle and reproductive-health tracking apps — what they track, how they predict, how they show uncertainty, what they get wrong, privacy
date: 2026-09-30
versions: >
  No app binaries were installed or run. Help-centre, vendor and news pages were read on 2026-09-30 in whatever version was live that day
  (Apple Support pages 120356 / 120357, Flo help article 360015317051, Drip FAQ at dripapp.org, FTC Flo press release of 2021-01-13,
  Bull et al. 2019 npj Digit Med 2:83, Li et al. 2023 npj Digit Med 6:91 [Apple Women's Health Study], STRAW+10 via secondary summaries).
  Mozilla's 2026 period-tracker review and Privacy Not Included pages returned HTTP 403 and were NOT read; only their search-result blurbs were seen.
  Where a claim came from a search-result summary instead of the page itself, the source line says "(search summary)".
status: research — not yet promoted to .context/
---

# Cycle and reproductive-health tracking apps

Scope: describe what exists. No design of the CTCP plugin. All access dates are 2026-09-30.

Legend: **[V]** verified fact with URL; **[S]** verified only through a search-result summary of that URL (page itself not read); **[I]** inference, mine; **[G]** gap.

---

## 1. Apps

### 1.1 Clue (Berlin)
- **Tracks.** Period, fertile window, ovulation day, symptoms, mood, and can pair with wearables for temperature and heart rate. [S] https://play.google.com/store/apps/details?id=com.clue.android&hl=en , https://support.helloclue.com/hc/en-us/articles/29049246302237-My-current-tracker-knows-my-cycle-already-How-long-would-it-take-Clue-to-give-accurate-predictions (search summary; the page itself returned 403).
- **Predicts.** Claims a "clinically validated algorithm"; says irregular users may need more cycles of data before predictions are precise. [S] same Clue support URL.
- **Uncertainty.** [G] I could not read Clue's own description of how it draws uncertainty. Not verified.
- **Gets wrong.** [G] No sourced complaint list gathered for Clue specifically.
- **Privacy.** Berlin-based, so EU law applies; press in 2022 reported Clue saying pregnancy / loss / abortion data are kept private and that it does not sell data. [S] https://www.healthcaredive.com/news/flo-anonymous-mode-period-tracker-app-abortion-roe/631926/ . The claim "cannot be subpoenaed from the US" is the press's framing, not verified legal fact. [I]
- Clue also publishes explainers on stress, travel, sleep, withdrawal bleeding: https://helloclue.com/articles/cycle-a-z/stress-your-period , https://helloclue.com/articles/cycle-a-z/how-travel-jet-lag-can-affect-your-period , https://helloclue.com/articles/sex/pill-your-period [S].

### 1.2 Flo
- **Tracks.** Period, symptoms, ovulation, wearable temperature (synced or manual). [S] https://flo.health/flo-accuracy
- **Predicts.** Builds a probability model from cycle history; a Flo-funded write-up reports average error 1.26 days by the third cycle and a neural net cutting irregular-cycle error from 5.6 to 2.6 days (vendor-side claim). [S] https://indatalabs.com/resources/neural-network-implementation-in-healthcare-app . If it cannot predict cycle length it widens the fertile window to about 14 days. [S] search summary of flo.health/flo-accuracy.
- **Uncertainty.** [V] Flo shows "a window for when a period can arrive"; a late-period notice appears only after that window closes, because "displaying a delay right away would not be accurate." https://help.flo.health/hc/en-us/articles/360015317051-My-period-is-late-but-Flo-just-moves-its-prediction-to-the-next-day
- **Gets wrong.** User forums complain of inaccurate predictions (Mumsnet thread, not read). [S] https://www.mumsnet.com/talk/pregnancy/4689141-flo-app-being-inaccurate . A 2026 medRxiv preprint on fertile-window misclassification across period apps exists but returned 403 and was not read. [G] https://www.medrxiv.org/content/10.64898/2026.02.12.26346180v1.full
- **Privacy.** [V] FTC (2021-01-13): Flo shared pregnancy and other reproductive data with Facebook analytics, Google Analytics, Google Fabric, AppsFlyer, Flurry despite promising privacy; app had >100 million users; settlement requires consent, independent review, notification, destruction requests. https://www.ftc.gov/news-events/news/press-releases/2021/01/developer-popular-womens-fertility-tracking-app-settles-ftc-allegations-it-misled-consumers-about . [S] Anonymous mode launched 2022-09-14; optional not default because data cannot be recovered if the device is lost. https://www.healthcaredive.com/news/flo-anonymous-mode-period-tracker-app-abortion-roe/631926/ . [S] A Fierce Healthcare piece reports Meta found liable over reproductive data used for ads (page 403, not read). https://www.fiercehealthcare.com/digital-health/meta-found-liable-abusing-consumer-reproductive-health-data-run-targeted-ads
- Flo has a registered "digital contraceptive" study: https://clinicaltrials.gov/study/NCT07630064 [S].

### 1.3 Natural Cycles
- **Tracks.** Morning basal body temperature, period dates, optional LH tests; can take temperatures from approved wearables (WHOOP partnership; FDA allowed third-party thermometers in 2021). [S] https://www.mobihealthnews.com/news/whoop-partners-natural-cycles-fertility-tracking
- **Predicts.** Sorts every day into Green (not fertile, no extra protection) or Red (may be fertile, use barrier or abstain). [S] https://www.naturalcycles.com/how-effective-is-natural-cycles . FDA cleared 2018 as a contraceptive. FDA De Novo document: https://www.accessdata.fda.gov/cdrh_docs/reviews/DEN170052.pdf [S].
- **Uncertainty.** Expressed as binary days plus conservative Red days; the cost of uncertainty is more Red days. [I] from the Green/Red description.
- **Effectiveness.** Vendor: typical use 93% / perfect use 98%; Pearl Index 6.9 typical, 1 perfect; perfect use defined as measuring BBT >70% of days and protection on Red days. [S] https://www.naturalcycles.com/how-effective-is-natural-cycles and https://www.factsaboutfertility.org/natural-cycles-app-effectiveness-to-prevent-pregnancy-a-review-of-research/
- **Gets wrong.** [G] Swedish/other unplanned-pregnancy reports and regulator actions exist in my memory but were not re-verified today; not asserted.
- **Privacy.** [G] Not read.
- **Research use.** Bull et al. 2019 used its anonymised users (below).

### 1.4 Apple Health Cycle Tracking
- **Tracks.** Symptoms, spotting, basal body temperature, pregnancy, lactation, contraceptive use as cycle factors. [V] https://support.apple.com/en-us/120356
- **Predicts.** Period predictions from logged past periods and cycle length; fertile window is six days from "a traditional calendar method", refined by ovulation-test results or Apple Watch wrist temperature. [V] same URL.
- **Retrospective ovulation.** [V] Series 8+ and Ultra detect the "biphasic shift"; estimate appears after ~2 cycles of wearing to sleep; needs Sleep Focus >= 4 h for 5 nights; "estimates only", not contraception, not available everywhere. https://support.apple.com/en-us/120357 . Estimate shown as a light purple oval inside the fertile window [S] search summary of support.apple.com/en-ca/guide/watch/apd3ee429691/watchos.
- **Deviation notices.** [S] Looks back six months for irregular, infrequent, prolonged cycles or persistent spotting; 40+ may get perimenopause-suggestive notice; export 12 months as PDF for a clinician. https://support.apple.com/en-us/120356 (search summary; page fetch confirmed six-month pattern and 40+ wording).
- **Contraception.** [G] Page lists contraceptive use as loggable but does not say how predictions change. Explicit: "should not be used as a form of birth control."
- **Sharing.** [S] Can share cycle/fertility-window data with contacts; user selects what. https://support.apple.com/guide/iphone/share-your-health-data-iph5ede58c3d/ios (blurb only).
- **Privacy.** [G] Health data encryption terms not verified today; https://www.apple.com/legal/privacy/data/en/health-app/ not read.
- **Research.** Apple Women's Health Study (below).

### 1.5 Stardust
- **Tracks.** Period plus astrology/moon framing. [S] https://www.mozillafoundation.org/en/nothing-personal/stardust-privacy-review/ (blurb)
- **Privacy.** [S] Surged in popularity after Roe reversal promising end-to-end encryption; reporting found it was standard SSL/server-side encryption, the claim was removed from its policy; TechCrunch found phone numbers shared with a third-party analytics company. https://www.siliconrepublic.com/enterprise/stardust-period-app-encryption , https://techcrunch.com/2022/06/27/stardust-period-tracker-phone-number
- **Prediction / uncertainty / errors.** [G] Not researched.

### 1.6 Ovia (Ovia Fertility / Ovia Pregnancy, Ovia Health)
- **Tracks.** Cycle, fertility, pregnancy. [S] https://www.mozillafoundation.org/en/privacynotincluded/ovia-fertility/ (blurb)
- **Privacy.** [S] Washington Post, 2019-04-10: employers who buy the Ovia programme can see de-identified aggregate employee data; concern that small groups allow re-identification. https://www.washingtonpost.com/technology/2019/04/10/tracking-your-pregnancy-an-app-may-be-more-public-than-you-think/ ; also https://www.bostonglobe.com/business/2019/04/10/menstrual-monitoring-app-raises-questions-about-privacy/bRdtxn094ZO9ImN0zlKBuN/story.html . Consumer Reports raised privacy shortcomings in 2020 [S].
- **Prediction / uncertainty / errors.** [G] Not researched.

### 1.7 Glow
- **Privacy / security.** [S] 2016: Consumer Reports/TechCrunch found flaws exposing personal data; 2020: fined $250,000 by California's Attorney General; 2024 report of a fixed bug exposing user data. https://techcrunch.com/2016/07/30/serious-privacy-flaws-discovered-in-glow-fertility-tracker-app/ , https://techcrunch.com/2024/02/13/fertility-tracker-glow-fixes-bugs-that-exposed-users-personal-data/ , https://en.wikipedia.org/wiki/Glow_(app) (blurbs; the $250,000 figure is a single-source search summary).
- **Tracks / predicts / uncertainty.** [G] Not researched. Community forums existed and leaked profile data per CR (same sources).

### 1.8 Euki
- [S] Built by Women Help Women / Ibis Reproductive Health. No account, no personal data collected, everything stored on device; PIN; entering "0000" opens a decoy screen ("discreet mode"); data deletion; abortion information and care navigator. https://womenhelp.org/en/page/1082/euki-app , https://www.mozillafoundation.org/en/privacynotincluded/euki/ , https://www.ibisreproductivehealth.org/news/researchers-and-activists-release-comprehensive-inclusive-secure-app-sexual-and-reproductive
- **Prediction / uncertainty.** [G] Not researched.

### 1.9 Drip (open source, sympto-thermal)
- [V] Data stays on the device, no cloud. https://dripapp.org/
- [V] Predicts bleeding after three complete cycles; predicts next three period starts from cycle-start dates only; skips cycles longer than 99 days (to allow for pregnancies and life events) and the team calls this "far from ideal" for PCOS and perimenopause; CSV export/import, third-party converters for Flo and Clue exports; will not assume fertility from bleeding data alone; uses sympto-thermal method (temperature plus mucus or cervix). https://dripapp.org/faq.html
- Source: https://gitlab.com/bloodyhealth/drip (mirror https://github.com/jfr3000/drip) [S].

### 1.10 Mensinator and Periodical
- **Mensinator exists** (Android, MIT licence, F-Droid): no sign-up, data local, shows average cycle length, average period length, next period and next ovulation predictions. [S] https://f-droid.org/en/packages/com.mensinator.app/
- Menstrudel (Android, offline, open source) also surfaced. https://github.com/J-shw/Menstrudel [S]
- **Periodical**: not searched. [G]

---

## 2. Fertility-awareness methods
- **Symptothermal method** = cervical mucus + basal body temperature (+ optional cervix position), read together; most reliable of the awareness methods. Sensiplan double-check: perfect use ~0.4, typical use ~1.8 per 100 woman-years; a 2018 review range for typical use 1.8 to 33.0 across variants, driven by rule strictness and instruction quality. [S] https://www.msdmanuals.com/professional/gynecology-and-obstetrics/family-planning/fertility-awareness-based-methods-of-contraception , https://pmc.ncbi.nlm.nih.gov/articles/PMC12045081/ (blurbs).
- **BBT.** Post-ovulation progesterone raises temperature (Natural Cycles states up to 0.45 C). Confirms ovulation only afterwards. [S] https://en.wikipedia.org/wiki/Natural_Cycles (blurb) [I: "only afterwards" follows from the definition].
- **LH tests / symptohormonal.** Detect the surge before ovulation, narrowing the window. [S] search summary above.
- **PCOS and sympto-thermal.** A paper studies the InVivo method for PCOS: https://pmc.ncbi.nlm.nih.gov/articles/PMC11172004/ [S, not read].
- **ACOG page** on FABMs: https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning [S, not read].

## 3. What predictions rest on
- **[S] Bull et al. 2019** (Natural Cycles users): 612,613 ovulatory cycles, 124,648 users, mean cycle 29.3 days; follicular phase mean 16.9 d (95% range 10–30); luteal mean 12.4 d (95% range 7–17); mean cycle length falls 0.18 d per year of age 25–45. https://www.nature.com/articles/s41746-019-0152-7 (page redirects to a login; figures from search summary, and PubMed https://pubmed.ncbi.nlm.nih.gov/31482137/ was listed, not read).
- **[I]** The follicular range (20 days wide) is wider than the luteal range (10 days wide), so cycle-length variation is mostly follicular. This is inferred from those two intervals; the paper's SDs were not read.
- **[G]** The share of cycles that are exactly 28 days: I remember it as small (roughly one in eight) but did not verify. Not asserted.
- **[S] Apple Women's Health Study** (Li et al. 2023): variability lowest at 35–39; 46% higher under 20; 45% higher at 45–49; Asian and Hispanic participants had slightly longer cycles and more within-person variability; differences persisted after adjusting for BMI, activity, stress. https://pmc.ncbi.nlm.nih.gov/articles/PMC10226714/ (search summary; PMC returned a bot check).
- AWHS PCOS/age variability paper (AJOG 2025): https://www.ajog.org/article/S0002-9378(25)00867-1/fulltext [S, not read]. AWHS seasonal paper: https://www.sciencedirect.com/science/article/pii/S1438463923001992 [S, not read].
- **Wearable ML:** BBT + heart rate + ML for fertile-window prediction: https://pmc.ncbi.nlm.nih.gov/articles/PMC9375297/ [S, not read].
- **Statistical model of self-tracked length/regularity:** SkipTrack, https://arxiv.org/pdf/2508.05845 [S, not read] — it exists because self-tracking has skipped logs (Inference: skipped logs make a long "cycle" that is two cycles).

## 4. Conditions that break predictions
- **PCOS.** Most common cause of anovulation; regular bleeding does not prove ovulation; a 28–35-day pattern may or may not involve ovulation. [S] https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome , https://premom.com/pcos-anovulation-and-ovulation-tracking/ (vendor, treat cautiously). Drip's 99-day rule is a concrete limitation (see 1.9).
- **Perimenopause.** STRAW+10: early transition begins with persistent >=7-day difference in length of consecutive cycles; the transition lasts roughly 4–7 years. [S] https://www.healio.com/clinical-guidance/menopause/overview-of-menopause-overview , https://pmc.ncbi.nlm.nih.gov/articles/PMC10009143 . Apple sends perimenopause-suggestive notice to 40+ (1.4).
- **Postpartum / breastfeeding.** Fully breastfeeding usually gives 3–6+ months without periods; menses return within ~6–12 months; early menses during lactation are mostly anovulatory. [S] https://llli.org/breastfeeding-info/menstruation/ , https://pmc.ncbi.nlm.nih.gov/articles/PMC8835773/ . [I] The first postpartum bleed can therefore look like a period without ovulation having happened.
- **Hormonal contraception.** Bleeding in the placebo/off days of combined methods is withdrawal bleeding, not a shed of a built-up lining; breakthrough bleeding is common in the first months. [S] https://helloclue.com/articles/sex/pill-your-period , https://www.naturalcycles.com/cyclematters/what-is-withdrawal-bleeding , https://my.clevelandclinic.org/health/symptoms/withdrawal-bleeding . WHOOP only predicts for natural cycles without hormonal birth control [S] https://support.whoop.com/s/article/Menstrual-Cycle-Coaching?language=en_US .

## 5. Stress and other factors
- **Stress.** [S] Higher stress associated with irregular periods but no consistent direction in length (both shorter and longer); the mechanism offered is cortisol interfering with the LH surge, delaying ovulation. Sources are mixed quality (Clue, Natural Cycles, clinic blogs): https://helloclue.com/articles/cycle-a-z/stress-your-period , https://www.naturalcycles.com/cyclematters/can-stress-delay-your-period . [G] I did not read a peer-reviewed primary study on stress and cycle length beyond AWHS covariate adjustment.
- **Travel / shift work.** [S] Circadian disruption can delay periods; shift workers show higher rates of irregularity; jet lag itself not shown to change the period directly. https://reisemedizin.uzh.ch/en/blog/late-period-on-vacation , https://helloclue.com/articles/cycle-a-z/how-travel-jet-lag-can-affect-your-period
- **Weight change.** [S] Loss of >10–15% body mass can cause amenorrhea (functional hypothalamic). https://pubmed.ncbi.nlm.nih.gov/36819572/ , https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4207953/
- **Sleep.** [S] Cycle affects sleep and poor sleep is linked to heavier periods; direction of effect on timing not established here. https://pmc.ncbi.nlm.nih.gov/articles/PMC11562818/ , https://helloclue.com/articles/menstrual-cycle/sleep-and-the-menstrual-cycle
- **Illness.** [G] Not researched.
- **[I]** Effects reported are on ovulation timing, so the effect on the bleed date arrives one luteal phase later, and the size of a person's response is not predictable from the literature above.

## 6. Wearables
- **Apple Watch.** See 1.4. Requires nightly wear; ~2 cycles; retrospective only.
- **Oura.** [S] Vendor-linked validation: detected 96.4% of ovulations, mean error ±1.26 days; forecasts next period after ~2 months of wear. https://ouraring.com/blog/oura-ovulation-detection-algorithm-validation-study/ , https://pubmed.ncbi.nlm.nih.gov/39889300/ . Earlier 22-person study: ovulation detected within ±4 days 95% of the time, 83.3% sensitivity within -3..+2 days; no data on irregular cycles or PCOS. [V] https://www.factsaboutfertility.org/can-the-oura-ring-predict-when-i-ovulate-a-review-of-research/
- **Whoop.** [S] Predicts for natural cycles; only required manual input is bleeding; phases "including ovulation" are estimates only; not for conception or contraception. https://support.whoop.com/s/article/Menstrual-Cycle-Coaching?language=en_US ; internal analysis: lower resting heart rate / higher HRV early in cycle, reverse after ovulation.
- Users' perspectives on multimodal tracking: https://arxiv.org/pdf/2409.03853 [S, not read].

## 7. Privacy after 2022
- Roe v. Wade overturned June 2022 (public fact). Apps reacted: Flo anonymous mode (2022-09-14) [S]; Stardust E2EE claim retracted [S]; Euki and Drip are local-only by design [V/S]; Clue emphasises EU jurisdiction [S].
- Pre-2022 baselines: Flo/FTC 2021 [V]; Ovia employer programme 2019 [S]; Glow 2016/2020 [S].
- Mozilla reviews exist for Flo, Clue, Euki, Ovia, Stardust: https://www.mozillafoundation.org/en/nothing-personal/period-ovulation-trackers/ — [G] returned 403; verdicts not read and not stated here.
- [I] Local-only removes the subpoena and breach surface but also removes cross-device recovery; Flo cites exactly this as its reason for making anonymous mode optional.

## 8. Symptoms and sharing
- Symptom, spotting, temperature, pregnancy, lactation, contraceptive logging: Apple [V]. Drip logs bleeding, fertility, sex, mood, pain [S] https://github.com/jfr3000/drip . Clue and Flo log symptoms and mood [S].
- Clinician sharing: Apple exports 12 months of cycle history as PDF after a deviation notice [S]. Drip exports CSV [V].
- Partner sharing: Apple lets users share selected data (e.g. fertility window) with contacts [S]. Third-party "Period Share" app exists [S] https://apps.apple.com/mx/app/period-share/id6743441809 . [G] Clue's and Flo's partner-sharing features not read.

---

## Gaps (consolidated)
- Mozilla verdicts (403). Clue help pages (403). Bull full text (login redirect), Apple predictions-display page (empty fetch), AWHS full text (bot check).
- No hands-on use of any app; no App Store review corpus mined. Complaint content therefore comes from press, forum titles and my inference.
- Ovia, Glow, Stardust, Euki: prediction and uncertainty behaviour not researched.
- Periodical app not searched. Illness effect on cycles not researched. Clue/Flo partner sharing not read.

## Observations relevant to a prediction plugin
1. Every app that shows uncertainty shows a window, not a point; Flo holds back the word "late" until its window closes, Apple's fertile window is six days, Natural Cycles turns uncertainty into extra Red days.
2. Flo widens the fertile window to about 14 days when it cannot predict; uncertainty is expressed as width, and unpredictable users get the widest output.
3. Cycle-length variation in the largest datasets is mostly in the follicular phase (inferred from the ranges), and it depends on age (lowest 35–39, higher under 20 and 45–49).
4. Retrospective methods (wrist/finger temperature, BBT) confirm ovulation after it happened; they improve the next prediction, not the current one. Apple needs ~2 cycles of wear before any estimate.
5. Stress literature gives inconsistent direction (shorter and longer); the plausible effect is on ovulation timing, which shifts the bleed by a delay.
6. A logged bleed is not always a period: withdrawal bleeds on combined methods, first postpartum bleeds, and regular bleeds without ovulation in PCOS. Apps differ on whether they let the user say which.
7. Missing logs turn two cycles into one long apparent cycle; Drip's 99-day rule is one hard-coded response, and its authors call it inadequate for PCOS and perimenopause.
8. The strongest privacy responses were local-only storage (Drip, Euki, Mensinator) and optional anonymous mode (Flo); the cost named is no recovery on device loss.
9. Decoy screens (Euki "0000") address someone with physical access, a threat model separate from subpoenas and analytics leaks.
10. Sharing is per-item and opt-in in Apple's implementation; employer-facing aggregation (Ovia) was criticised for small-group re-identification.
11. Apple's app and vendors alike repeatedly state "not for contraception"; only Natural Cycles is cleared for that and defines "perfect use" by daily-measurement discipline.

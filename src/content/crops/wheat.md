---
id: wheat
order: 2
name:
  en: Wheat
  hi: गेहूँ
botanicalName: Triticum aestivum
family:
  en: Poaceae (grass family)
  hi: पोएसी (घास कुल)
category: cereal
seasons: [rabi]
duration: 140
emoji: "🌾"

climate:
  en: Cool, dry winter. Best with 20–25 °C at sowing, 15 °C during growth, and 25–30 °C at grain filling. Frost at flowering and hot winds at grain filling both cut yield sharply.
  hi: ठंडी, शुष्क सर्दी। बुवाई पर 20–25 °C, वृद्धि के दौरान 15 °C और दाना भरते समय 25–30 °C सर्वोत्तम। फूल अवस्था में पाला और दाना भरते समय गर्म हवाएँ दोनों उपज घटाती हैं।
soil:
  en: Well-drained loam or clay-loam, pH 6.0–7.5. Does not tolerate waterlogging or salinity well.
  hi: अच्छे जल निकास वाली दोमट या चिकनी-दोमट मिट्टी, pH 6.0–7.5। जलभराव या लवणता अच्छी तरह सहन नहीं करती।
waterRequirement:
  en: Moderate — 4 to 6 irrigations totalling 350–450 mm. The crown-root and flowering irrigations matter most.
  hi: मध्यम — 4 से 6 सिंचाई, कुल 350–450 मि.मी.। ताज-जड़ और फूल अवस्था की सिंचाई सबसे महत्वपूर्ण।
majorStates:
  - Uttar Pradesh
  - Punjab
  - Madhya Pradesh
  - Haryana
  - Rajasthan
  - Bihar

seedRate:
  value: 100
  unit: kg/ha
  method:
    en: 100 kg/ha for timely sown, line sowing at 20–22.5 cm rows. Raise to 125 kg/ha for late sowing after mid-December.
    hi: समय पर बुवाई हेतु 100 कि.ग्रा./हे., 20–22.5 सें.मी. कतार में। मध्य दिसंबर के बाद देर से बुवाई हेतु 125 कि.ग्रा./हे. करें।

varieties:
  - name: "HD 2967"
    duration: 145
    region: "North-west & north-east plains"
    notes:
      en: Long-favoured timely-sown variety, good chapati quality, moderately rust resistant.
      hi: समय पर बुवाई की लंबे समय से लोकप्रिय किस्म, अच्छी चपाती गुणवत्ता, मध्यम रतुआ प्रतिरोधी।
  - name: "HD 3086 (Pusa Gautami)"
    duration: 145
    region: "North-west plains"
    notes:
      en: High yield, resistant to yellow and brown rust.
      hi: अधिक उपज, पीला और भूरा रतुआ प्रतिरोधी।
  - name: "DBW 187 (Karan Vandana)"
    duration: 148
    region: "North-east plains"
    notes:
      en: Early sowing, heat tolerant, biofortified with more zinc.
      hi: जल्दी बुवाई, गर्मी सहनशील, अधिक जिंक से समृद्ध।
  - name: "HI 8759 (Pusa Tejas)"
    duration: 120
    region: "Central India"
    notes:
      en: Durum (pasta/suji) wheat for Madhya Pradesh and Gujarat, drought hardy.
      hi: मध्य प्रदेश और गुजरात के लिए ड्यूरम (पास्ता/सूजी) गेहूँ, सूखा सहनशील।

calendar:
  basis: sowing
  stages:
    - key: germination
      name:
        en: Sowing & germination
        hi: बुवाई और अंकुरण
      startDap: 0
      endDap: 20
      irrigation:
        en: A light pre-sowing irrigation (palewa) ensures an even stand. First irrigation at 20–25 days.
        hi: बुवाई से पहले हल्की सिंचाई (पलेवा) एक समान जमाव सुनिश्चित करती है। पहली सिंचाई 20–25 दिन पर।
      tasks:
        en:
          - Sow between 25 October and 20 November in the north; every week's delay after that costs yield.
          - Treat seed with a fungicide against loose smut and with bio-fertiliser.
          - Drill full phosphorus and potash and one-third to half the nitrogen as basal.
        hi:
          - उत्तर में 25 अक्टूबर से 20 नवंबर के बीच बुवाई करें; इसके बाद हर सप्ताह की देरी से उपज घटती है।
          - बीज को खुली कंडुआ के विरुद्ध फफूँदनाशक और जैव-उर्वरक से उपचारित करें।
          - पूरा फॉस्फोरस और पोटाश तथा एक-तिहाई से आधा नाइट्रोजन आधार खुराक के रूप में दें।
      watchFor:
        en:
          - Termites and patchy germination in dry or cloddy soil.
        hi:
          - सूखी या ढेलेदार मिट्टी में दीमक और असमान अंकुरण।
    - key: cri
      name:
        en: Crown root initiation (CRI)
        hi: ताज-जड़ बनना (CRI)
      startDap: 20
      endDap: 30
      irrigation:
        en: The single most important irrigation — never miss it at 20–25 days.
        hi: सबसे महत्वपूर्ण एकमात्र सिंचाई — 20–25 दिन पर इसे कभी न चूकें।
      tasks:
        en:
          - Apply the first nitrogen top-dress with the CRI irrigation.
          - Control weeds by 30–35 days — this is the critical weed-free window.
        hi:
          - CRI सिंचाई के साथ पहला नाइट्रोजन ऊपरी छिड़काव करें।
          - 30–35 दिन तक खरपतवार नियंत्रित करें — यह महत्वपूर्ण खरपतवार-मुक्त अवधि है।
      watchFor:
        en:
          - Phalaris minor (gulli danda) and wild oats competing with the crop.
          - Yellowing of lower leaves — nitrogen or sulphur shortage.
        hi:
          - फसल से प्रतिस्पर्धा करते गुल्ली डंडा (फैलेरिस) और जंगली जई।
          - निचली पत्तियों का पीलापन — नाइट्रोजन या गंधक की कमी।
    - key: tillering
      name:
        en: Tillering
        hi: कल्ले फूटना
      startDap: 30
      endDap: 60
      irrigation:
        en: Second irrigation at 40–45 days (late tillering / late jointing).
        hi: दूसरी सिंचाई 40–45 दिन पर (देर कल्ले / देर गाँठ अवस्था)।
      tasks:
        en:
          - Apply the remaining nitrogen with the second irrigation.
          - Rogue out any tall off-type plants.
        hi:
          - दूसरी सिंचाई के साथ बचा हुआ नाइट्रोजन दें।
          - किसी भी लंबे विजातीय पौधे को उखाड़ दें।
      watchFor:
        en:
          - Yellow rust — orange-yellow powdery stripes on leaves in cool, dewy weather.
          - Aphids colonising leaf whorls.
        hi:
          - पीला रतुआ — ठंडे, ओसयुक्त मौसम में पत्तियों पर नारंगी-पीली चूर्णी धारियाँ।
          - पत्ती की कुंडली में बसते माहू (एफिड)।
    - key: jointing
      name:
        en: Jointing & booting
        hi: गाँठ बनना और गर्भावस्था
      startDap: 60
      endDap: 85
      irrigation:
        en: Third irrigation at 65–70 days (booting). Water stress now reduces spike size.
        hi: तीसरी सिंचाई 65–70 दिन पर (गर्भावस्था)। अब पानी की कमी बाली का आकार घटाती है।
      tasks:
        en:
          - Scout weekly for all three rusts and for powdery mildew.
          - Do not apply late nitrogen — it delays maturity and invites lodging.
        hi:
          - तीनों रतुआ और चूर्णी फफूँदी के लिए साप्ताहिक निरीक्षण करें।
          - देर से नाइट्रोजन न दें — इससे पकाव में देरी और फसल गिरने का खतरा।
      watchFor:
        en:
          - Brown rust pustules scattered on the upper leaf surface.
          - Lodging risk in a dense, dark crop.
        hi:
          - ऊपरी पत्ती सतह पर बिखरे भूरे रतुआ फफोले।
          - घनी, गहरी फसल में गिरने का खतरा।
    - key: heading
      name:
        en: Heading & flowering
        hi: बाली निकलना और फूल आना
      startDap: 85
      endDap: 105
      irrigation:
        en: Fourth irrigation at 90–95 days (flowering) — the second most critical after CRI.
        hi: चौथी सिंचाई 90–95 दिन पर (फूल अवस्था) — CRI के बाद दूसरी सबसे महत्वपूर्ण।
      tasks:
        en:
          - Protect the flag leaf and spike from rust with a fungicide if disease is active.
          - Avoid spraying at peak anthesis.
        hi:
          - रोग सक्रिय होने पर फफूँदनाशक से झंडा पत्ती और बाली को रतुआ से बचाएँ।
          - पूर्ण परागण के समय छिड़काव से बचें।
      watchFor:
        en:
          - Frost on clear still nights below 2 °C — light irrigation or smoke can help.
        hi:
          - साफ शांत रातों में 2 °C से नीचे पाला — हल्की सिंचाई या धुआँ मदद कर सकता है।
    - key: grainfill
      name:
        en: Grain filling (milk to dough)
        hi: दाना भरना (दूधिया से आटा अवस्था)
      startDap: 105
      endDap: 125
      irrigation:
        en: Fifth irrigation at 110–115 days (dough). In sandy soils a sixth light irrigation helps.
        hi: पाँचवीं सिंचाई 110–115 दिन पर (आटा अवस्था)। बलुई मिट्टी में छठी हल्की सिंचाई मदद करती है।
      tasks:
        en:
          - Keep the field free of late aphids that cause honeydew and sooty mould.
          - Stop all irrigation once grains reach hard dough.
        hi:
          - खेत को देर से आने वाले माहू से मुक्त रखें जो मधुरस और काली फफूँद पैदा करते हैं।
          - दाने कठोर आटा अवस्था में पहुँचते ही सभी सिंचाई रोक दें।
      watchFor:
        en:
          - Hot dry winds (loo) shrivelling grain — nothing can be done once it starts, so sow on time.
        hi:
          - गर्म शुष्क हवाएँ (लू) दाना सिकोड़ना — शुरू होने पर कुछ नहीं किया जा सकता, इसलिए समय पर बुवाई करें।
    - key: maturity
      name:
        en: Maturity & harvest
        hi: पकाव और कटाई
      startDap: 125
      endDap: 140
      tasks:
        en:
          - Harvest when the crop is golden, grain is hard, and moisture is 12–14%.
          - Do not burn the stubble — use a Happy Seeder or mix straw into the soil.
        hi:
          - जब फसल सुनहरी हो, दाना कठोर हो और नमी 12–14% हो तब कटाई करें।
          - ठूँठ न जलाएँ — हैप्पी सीडर उपयोग करें या भूसा मिट्टी में मिलाएँ।
      watchFor:
        en:
          - Grain shattering and lodging if harvest is delayed past full maturity.
        hi:
          - पूर्ण पकाव के बाद कटाई में देरी होने पर दाना झड़ना और फसल गिरना।

nutrition:
  recommendedNpk:
    n: 120
    p: 60
    k: 40
  basisNote:
    en: For timely-sown irrigated wheat. Add 20–25 kg/ha sulphur where oilseeds or pulses were not grown recently. Late-sown wheat needs about 25% less nitrogen.
    hi: समय पर बोई गई सिंचित गेहूँ के लिए। जहाँ हाल में तिलहन या दलहन न उगाई गई हो वहाँ 20–25 कि.ग्रा./हे. गंधक डालें। देर से बोई गेहूँ को लगभग 25% कम नाइट्रोजन चाहिए।
  sprayWaterLitresPerAcre: 200
  schedule:
    - stage:
        en: Basal (at sowing)
        hi: आधार (बुवाई के समय)
      timing:
        en: Day 0, drilled with seed
        hi: दिन 0, बीज के साथ ड्रिल करके
      n: 60
      p: 60
      k: 40
    - stage:
        en: First top-dress
        hi: पहला ऊपरी छिड़काव
      timing:
        en: With the CRI irrigation, 21–25 days
        hi: CRI सिंचाई के साथ, 21–25 दिन
      n: 30
      p: 0
      k: 0
    - stage:
        en: Second top-dress
        hi: दूसरा ऊपरी छिड़काव
      timing:
        en: With the second irrigation, 40–45 days
        hi: दूसरी सिंचाई के साथ, 40–45 दिन
      n: 30
      p: 0
      k: 0
  organic:
    en:
      - Apply 10 tonnes/ha of farmyard manure or compost before the last ploughing.
      - Wheat after a summer green-manure or a legume needs 25–30 kg less nitrogen.
      - Seed treatment with Azotobacter and PSB bio-fertiliser.
    hi:
      - अंतिम जुताई से पहले 10 टन/हे. गोबर खाद या कम्पोस्ट डालें।
      - ग्रीष्मकालीन हरी खाद या दलहन के बाद गेहूँ को 25–30 कि.ग्रा. कम नाइट्रोजन चाहिए।
      - एज़ोटोबैक्टर और PSB जैव-उर्वरक से बीज उपचार।
  soilTestNote:
    en: Sulphur and zinc are the common hidden shortages in intensively cropped wheat belts. A soil test every 2–3 years is enough.
    hi: गहन खेती वाले गेहूँ क्षेत्रों में गंधक और जिंक आम छिपी कमियाँ हैं। हर 2–3 साल में एक मृदा परीक्षण पर्याप्त है।

pests:
  - name:
      en: Aphids
      hi: माहू (चेपा)
    identify:
      en: Soft green-black insects clustered on flag leaves and spikes in warm February weather; sticky honeydew and black sooty mould follow.
      hi: फरवरी की गर्म मौसम में झंडा पत्तियों और बालियों पर एकत्र नरम हरे-काले कीड़े; चिपचिपा मधुरस और काली फफूँद बाद में।
    damage:
      en: Sap sucking during grain filling reduces grain weight; heavy sooty mould blocks photosynthesis.
      hi: दाना भरते समय रस चूसना दाना वजन घटाता है; भारी काली फफूँद प्रकाश संश्लेषण रोकती है।
    ipm:
      en:
        - Ladybird beetles and syrphid flies usually control light populations — do not spray early.
        - Sow on time so grain filling finishes before aphid numbers peak.
      hi:
        - लेडीबर्ड भृंग और सिरफिड मक्खियाँ आमतौर पर हल्की आबादी नियंत्रित करती हैं — जल्दी छिड़काव न करें।
        - समय पर बुवाई करें ताकि माहू की चरम संख्या से पहले दाना भरना पूरा हो जाए।
    chemical:
      en:
        - Spray a recommended systemic insecticide only if 15–20 aphids per ear-head appear before the milk stage, per label.
      hi:
        - दूधिया अवस्था से पहले प्रति बाली 15–20 माहू दिखने पर ही अनुशंसित प्रणालीगत कीटनाशक का छिड़काव करें, लेबल अनुसार।
  - name:
      en: Termites
      hi: दीमक
    identify:
      en: Plants wilt and dry in patches; pulled plants come out easily with the roots eaten and soil packed into the stem base.
      hi: पौधे धब्बों में मुरझाकर सूख जाते हैं; खींचने पर पौधे आसानी से निकलते हैं, जड़ें खाई हुई और तने के आधार में मिट्टी भरी।
    damage:
      en: Worst in light soils, in unirrigated fields, and where raw farmyard manure was used.
      hi: हल्की मिट्टी में, बिना सिंचाई खेतों में, और जहाँ कच्ची गोबर खाद उपयोग हुई हो, सबसे गंभीर।
    ipm:
      en:
        - Use only well-rotted manure; remove crop residue that feeds colonies.
        - A pre-sowing irrigation and firm seedbed reduce attack.
      hi:
        - केवल अच्छी सड़ी खाद उपयोग करें; कॉलोनियों को पोषण देने वाले फसल अवशेष हटाएँ।
        - बुवाई-पूर्व सिंचाई और ठोस बीज-क्यारी हमले को घटाती है।
    chemical:
      en:
        - Seed treatment with a recommended insecticide (e.g. chlorpyrifos or fipronil) is the standard preventive in termite-prone fields, per label.
      hi:
        - दीमक-प्रवण खेतों में अनुशंसित कीटनाशक (जैसे क्लोरपायरीफॉस या फिप्रोनिल) से बीज उपचार मानक रोकथाम है, लेबल अनुसार।

diseases:
  - name:
      en: Yellow (stripe) rust
      hi: पीला (धारीदार) रतुआ
    identify:
      en: Yellow-orange powder in neat stripes between leaf veins, mostly on the upper leaf. Rubs off on the finger. Appears first in cool foothill and north-west areas.
      hi: पत्ती शिराओं के बीच साफ धारियों में पीला-नारंगी चूर्ण, ज़्यादातर ऊपरी पत्ती पर। उँगली पर लग जाता है। पहले ठंडे तराई और उत्तर-पश्चिम क्षेत्रों में आता है।
    damage:
      en: The most damaging wheat disease in north India — can take 30–50% yield in a susceptible variety if it starts early.
      hi: उत्तर भारत की सबसे हानिकारक गेहूँ बीमारी — जल्दी शुरू होने पर संवेदनशील किस्म में 30–50% उपज ले सकती है।
    ipm:
      en:
        - Grow a currently resistant variety — the single best defence — and change variety when resistance breaks down.
        - Destroy volunteer wheat plants that carry the fungus between seasons.
        - Scout from late December, especially the borders near trees.
      hi:
        - वर्तमान में प्रतिरोधी किस्म लगाएँ — सबसे अच्छा बचाव — और प्रतिरोध टूटने पर किस्म बदलें।
        - मौसमों के बीच फफूँद ले जाने वाले स्वयंजात गेहूँ पौधे नष्ट करें।
        - दिसंबर के अंत से निरीक्षण करें, विशेषकर पेड़ों के पास की मेड़ें।
    chemical:
      en:
        - On first appearance, spray a triazole fungicide such as propiconazole or tebuconazole; repeat after 15 days if it spreads, per label.
      hi:
        - पहली बार दिखने पर प्रोपिकोनाज़ोल या टेबुकोनाज़ोल जैसा ट्रायज़ोल फफूँदनाशक छिड़कें; फैलने पर 15 दिन बाद दोहराएँ, लेबल अनुसार।
  - name:
      en: Loose smut
      hi: खुली कंडुआ
    identify:
      en: The whole ear emerges as a mass of black powder instead of grain; only the bare stalk is left after the spores blow away.
      hi: पूरी बाली दाने की जगह काले चूर्ण के ढेर के रूप में निकलती है; बीजाणु उड़ने के बाद केवल नंगी डंडी बचती है।
    damage:
      en: Seed-borne and systemic — you cannot treat it in the standing crop. Losses equal the percentage of smutted ears.
      hi: बीजजनित और प्रणालीगत — खड़ी फसल में इसका उपचार नहीं हो सकता। हानि कंडुआ बालियों के प्रतिशत के बराबर।
    ipm:
      en:
        - Always use certified, treated seed.
        - Do not keep seed from a field that had smutted ears.
      hi:
        - हमेशा प्रमाणित, उपचारित बीज उपयोग करें।
        - कंडुआ बालियों वाले खेत का बीज न रखें।
    chemical:
      en:
        - Treat seed before sowing with a systemic fungicide such as carboxin or tebuconazole, per label.
      hi:
        - बुवाई से पहले कार्बोक्सिन या टेबुकोनाज़ोल जैसे प्रणालीगत फफूँदनाशक से बीज उपचार करें, लेबल अनुसार।

commonProblems:
  - symptom:
      en: Thin, weak crop with fewer tillers; lower leaves pale
      hi: पतली, कमज़ोर फसल कम कल्लों के साथ; निचली पत्तियाँ फीकी
    likelyCause:
      en: Late sowing, missed CRI irrigation, or too little nitrogen early
      hi: देर से बुवाई, CRI सिंचाई चूकना, या शुरू में बहुत कम नाइट्रोजन
    action:
      en: Sow by mid-November, never miss the 21-day irrigation, and front-load nitrogen for late-sown crops
      hi: मध्य नवंबर तक बुवाई करें, 21-दिन की सिंचाई कभी न चूकें, और देर से बोई फसल हेतु नाइट्रोजन पहले दें
  - symptom:
      en: Crop flattens after irrigation plus wind at grain filling
      hi: दाना भरते समय सिंचाई के साथ हवा के बाद फसल सपाट हो जाती है
    likelyCause:
      en: Lodging from excess or late nitrogen, a tall variety, or a very dense stand
      hi: अधिक या देर से नाइट्रोजन, लंबी किस्म, या बहुत घनी फसल से गिरना
    action:
      en: Split nitrogen and finish by 45 days, keep seed rate at 100 kg/ha, choose dwarf lodging-resistant varieties
      hi: नाइट्रोजन बाँटकर 45 दिन तक पूरा करें, बीज दर 100 कि.ग्रा./हे. रखें, बौनी गिरने-रोधी किस्में चुनें
  - symptom:
      en: Shrivelled, low-weight grain despite a good-looking crop
      hi: अच्छी दिखने वाली फसल के बावजूद सिकुड़ा, कम वजन का दाना
    likelyCause:
      en: Hot winds during grain filling because the crop headed too late
      hi: फसल की देर से बाली निकलने के कारण दाना भरते समय गर्म हवाएँ
    action:
      en: Sow on time, choose a variety that matures before mid-April in your area, ensure the dough-stage irrigation
      hi: समय पर बुवाई करें, अपने क्षेत्र में मध्य-अप्रैल से पहले पकने वाली किस्म चुनें, आटा-अवस्था की सिंचाई सुनिश्चित करें

sources:
  - "ICAR–Indian Institute of Wheat and Barley Research (IIWBR), Karnal — Package of Practices for Wheat"
  - "ICAR–Indian Agricultural Research Institute (IARI), New Delhi"
  - "State Agricultural University Package of Practices (Rabi crops)"
  - "CIB&RC approved label claims"
lastReviewed: 2026-08-01
---

## Overview

Wheat is India's main winter (rabi) cereal and, after rice, its second staple. It is a
cool-season crop: it is sown as the monsoon ends and the nights turn cold, grows through the
Indian winter, and is harvested in the heat of March–April.

Two decisions set the yield before the crop is even up. The first is the **sowing date** —
in the northern plains, wheat sown by 15–20 November yields far more than wheat sown in
December, because late crops run into hot April winds during grain filling. The second is
**variety** — rust-resistant varieties are released and retired every few years as the
fungus evolves, so growing whatever your neighbours grew five years ago is a real risk.

During the season, two irrigations carry most of the weight: the **crown-root initiation
(CRI) irrigation at about 21 days**, which decides how many tillers the plant sets, and the
**flowering irrigation at about 90 days**. If water is short, protect these two above all
others. Nitrogen is best split — some at sowing, the rest across the first two irrigations —
and stopped early; late nitrogen only delays maturity and topples the crop.

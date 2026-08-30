---
id: maize
order: 3
name:
  en: Maize (Corn)
  hi: मक्का
botanicalName: Zea mays
family:
  en: Poaceae (grass family)
  hi: पोएसी (घास कुल)
category: cereal
seasons: [kharif, rabi, zaid]
duration: 100
emoji: "🌽"

climate:
  en: Warm-season crop, 21–30 °C. Very sensitive to water stress and to standing water. Grown across kharif, rabi and spring in different regions.
  hi: गर्म मौसम की फसल, 21–30 °C। पानी की कमी और जलभराव दोनों के प्रति बहुत संवेदनशील। विभिन्न क्षेत्रों में खरीफ, रबी और वसंत में उगाई जाती है।
soil:
  en: Deep, well-drained loam rich in organic matter, pH 5.5–7.5. Never grow in a field that ponds water.
  hi: गहरी, अच्छे जल निकास वाली दोमट मिट्टी जिसमें जैविक पदार्थ भरपूर हो, pH 5.5–7.5। कभी ऐसे खेत में न उगाएँ जहाँ पानी रुकता हो।
waterRequirement:
  en: Moderate but timing-critical. Knee-high, tasseling and grain-filling stages must not face stress. Rabi maize needs 5–6 irrigations.
  hi: मध्यम पर समय-महत्वपूर्ण। घुटने-ऊँचाई, नर मंजरी और दाना भरने की अवस्थाओं में तनाव नहीं होना चाहिए। रबी मक्का को 5–6 सिंचाई चाहिए।
majorStates:
  - Karnataka
  - Madhya Pradesh
  - Bihar
  - Tamil Nadu
  - Telangana
  - Maharashtra
  - Rajasthan

seedRate:
  value: 20
  unit: kg/ha
  method:
    en: 20 kg/ha for grain hybrids at 60 × 20 cm (about 66,000 plants/ha). Sweet corn 8 kg/ha, fodder maize 40 kg/ha.
    hi: दाना संकर हेतु 20 कि.ग्रा./हे., 60 × 20 सें.मी. पर (लगभग 66,000 पौधे/हे.)। मीठी मक्का 8 कि.ग्रा./हे., चारा मक्का 40 कि.ग्रा./हे.।

varieties:
  - name: "DHM 117 / DHM 121"
    duration: 100
    region: "Peninsular India"
    notes:
      en: Widely adapted single-cross grain hybrids.
      hi: व्यापक रूप से अनुकूलित एकल-संकर दाना हाइब्रिड।
  - name: "Pioneer / private single-cross hybrids"
    duration: 95
    region: "All maize belts"
    notes:
      en: Most commercial kharif and rabi maize is company hybrid seed — buy fresh certified seed every year.
      hi: अधिकांश व्यावसायिक खरीफ और रबी मक्का कंपनी हाइब्रिड बीज है — हर साल ताज़ा प्रमाणित बीज खरीदें।
  - name: "Vivek QPM 9"
    duration: 90
    region: "Hills & tribal areas"
    notes:
      en: Quality protein maize with more lysine — better for household nutrition and poultry.
      hi: अधिक लाइसिन वाली गुणवत्ता प्रोटीन मक्का — घरेलू पोषण और मुर्गीपालन के लिए बेहतर।

calendar:
  basis: sowing
  stages:
    - key: emergence
      name:
        en: Sowing & emergence
        hi: बुवाई और उगना
      startDap: 0
      endDap: 15
      irrigation:
        en: Sow on ridges or raised beds so water never stands around the plant. Light irrigation right after sowing if soil is dry.
        hi: मेड़ या उठी क्यारियों पर बुवाई करें ताकि पौधे के पास पानी न रुके। मिट्टी सूखी हो तो बुवाई के तुरंत बाद हल्की सिंचाई।
      tasks:
        en:
          - Sow at 60 × 20 cm; place seed 4–5 cm deep, never deeper.
          - Apply full phosphorus, full potash, one-fourth of nitrogen and all zinc as basal.
          - Treat seed against soil insects and seedling diseases.
        hi:
          - 60 × 20 सें.मी. पर बुवाई करें; बीज 4–5 सें.मी. गहरा रखें, इससे अधिक नहीं।
          - पूरा फॉस्फोरस, पूरा पोटाश, एक-चौथाई नाइट्रोजन और सारा जिंक आधार खुराक के रूप में दें।
          - मिट्टी के कीड़ों और अंकुर रोगों के विरुद्ध बीज उपचार करें।
      watchFor:
        en:
          - Birds pulling out sprouting seed.
          - Fall armyworm windowpane feeding on the youngest leaves.
        hi:
          - अंकुरित बीज खींचते पक्षी।
          - सबसे नई पत्तियों पर फॉल आर्मीवर्म का खिड़की जैसा भक्षण।
    - key: knee-high
      name:
        en: Early growth to knee-high
        hi: प्रारंभिक वृद्धि से घुटने-ऊँचाई तक
      startDap: 15
      endDap: 35
      irrigation:
        en: Second irrigation at the knee-high stage (25–30 days). Keep the crop weed-free until now.
        hi: घुटने-ऊँचाई अवस्था (25–30 दिन) पर दूसरी सिंचाई। तब तक फसल खरपतवार-मुक्त रखें।
      tasks:
        en:
          - Thin to one healthy plant per hill by 15 days.
          - Top-dress half the nitrogen and earth up the rows at 30–35 days.
        hi:
          - 15 दिन तक प्रति स्थान एक स्वस्थ पौधा रखें।
          - 30–35 दिन पर आधा नाइट्रोजन ऊपरी छिड़काव करें और कतारों पर मिट्टी चढ़ाएँ।
      watchFor:
        en:
          - Fall armyworm — ragged holes and moist sawdust-like frass in the leaf whorl.
          - Purple-red leaf margins — phosphorus not available in cold or wet soil.
        hi:
          - फॉल आर्मीवर्म — फटे छेद और पत्ती कुंडली में गीला बुरादे जैसा मल।
          - बैंगनी-लाल पत्ती किनारे — ठंडी या गीली मिट्टी में फॉस्फोरस अनुपलब्ध।
    - key: tasseling
      name:
        en: Tasseling & silking
        hi: नर मंजरी और रेशम आना
      startDap: 35
      endDap: 60
      irrigation:
        en: The most critical stage for water. Irrigate at tasseling (about 45 days) and again at silking — a stress here can cut yield by half.
        hi: पानी के लिए सबसे महत्वपूर्ण अवस्था। नर मंजरी (लगभग 45 दिन) पर और फिर रेशम आने पर सिंचाई करें — यहाँ तनाव से उपज आधी हो सकती है।
      tasks:
        en:
          - Apply the last quarter of nitrogen just before tasseling.
          - Ensure tassels and silks appear within 2–3 days of each other for good filling.
        hi:
          - नर मंजरी से ठीक पहले नाइट्रोजन की अंतिम चौथाई दें।
          - अच्छे दाना भरने हेतु नर मंजरी और रेशम 2–3 दिन के भीतर निकलें, यह सुनिश्चित करें।
      watchFor:
        en:
          - Fall armyworm and pink stem borer moving into the cob.
          - Gaps of missing kernels — poor pollination from heat or drought at silking.
        hi:
          - भुट्टे में घुसते फॉल आर्मीवर्म और गुलाबी तना छेदक।
          - गायब दानों के खाली स्थान — रेशम आने पर गर्मी या सूखे से खराब परागण।
    - key: grainfill
      name:
        en: Grain filling (milk to dent)
        hi: दाना भरना (दूधिया से डेंट अवस्था)
      startDap: 60
      endDap: 90
      irrigation:
        en: Keep soil moist through the milk and dough stages. Stop watering once the kernels dent and a black layer forms at the kernel base.
        hi: दूधिया और आटा अवस्थाओं तक मिट्टी नम रखें। दाने में डेंट पड़ने और दाने के आधार पर काली परत बनने पर सिंचाई रोक दें।
      tasks:
        en:
          - Protect cobs from borers and from cob rot in humid weather.
          - Keep the field standing — do not lodge it with heavy late irrigation.
        hi:
          - नम मौसम में भुट्टों को छेदकों और भुट्टा सड़न से बचाएँ।
          - खेत को खड़ा रखें — भारी देर सिंचाई से गिरने न दें।
      watchFor:
        en:
          - Pink or grey mould on the cob tip, especially if husks are loose.
        hi:
          - भुट्टे के सिरे पर गुलाबी या धूसर फफूँद, विशेषकर यदि छिलके ढीले हों।
    - key: maturity
      name:
        en: Maturity & harvest
        hi: पकाव और कटाई
      startDap: 90
      endDap: 100
      tasks:
        en:
          - Harvest when husks are dry and papery and grain moisture is 20–25%; dry cobs to 12–14% before shelling.
          - Dry on a clean surface or tarpaulin, never on the road.
        hi:
          - जब छिलके सूखे और कागज़ जैसे हों और दाना नमी 20–25% हो तब कटाई करें; निकालने से पहले भुट्टे 12–14% तक सुखाएँ।
          - साफ सतह या तिरपाल पर सुखाएँ, कभी सड़क पर नहीं।
      watchFor:
        en:
          - Storage weevils — treat the store and keep grain dry and cool.
        hi:
          - भंडारण घुन — भंडार का उपचार करें और दाना सूखा और ठंडा रखें।

nutrition:
  recommendedNpk:
    n: 150
    p: 70
    k: 60
  basisNote:
    en: For grain hybrids under irrigation. Rabi and spring maize can use 180 kg/ha nitrogen. Always apply 25 kg/ha zinc sulphate as basal — maize is very zinc-hungry.
    hi: सिंचित दाना संकर के लिए। रबी और वसंत मक्का 180 कि.ग्रा./हे. नाइट्रोजन उपयोग कर सकती है। हमेशा 25 कि.ग्रा./हे. जिंक सल्फेट आधार खुराक दें — मक्का बहुत जिंक-भूखी है।
  sprayWaterLitresPerAcre: 200
  schedule:
    - stage:
        en: Basal (at sowing)
        hi: आधार (बुवाई के समय)
      timing:
        en: Day 0
        hi: दिन 0
      n: 40
      p: 70
      k: 40
    - stage:
        en: Knee-high
        hi: घुटने-ऊँचाई
      timing:
        en: 25–30 days, with earthing up
        hi: 25–30 दिन, मिट्टी चढ़ाने के साथ
      n: 55
      p: 0
      k: 20
    - stage:
        en: Pre-tasseling
        hi: नर मंजरी से पहले
      timing:
        en: 40–45 days
        hi: 40–45 दिन
      n: 55
      p: 0
      k: 0
  organic:
    en:
      - Apply 10–12 tonnes/ha of farmyard manure or compost before sowing.
      - Maize responds strongly to green manure ploughed in before the kharif crop.
      - Seed treatment with Azospirillum and PSB.
    hi:
      - बुवाई से पहले 10–12 टन/हे. गोबर खाद या कम्पोस्ट डालें।
      - खरीफ फसल से पहले जोती गई हरी खाद पर मक्का बहुत अच्छा प्रतिक्रिया करती है।
      - एज़ोस्पाइरिलम और PSB से बीज उपचार।
  soilTestNote:
    en: Zinc deficiency is almost universal in intensive maize. Sulphur matters in light soils. Rebuild organic matter with residue retention.
    hi: गहन मक्का में जिंक की कमी लगभग सर्वव्यापी है। हल्की मिट्टी में गंधक महत्वपूर्ण है। अवशेष रखकर जैविक पदार्थ पुनर्निर्माण करें।

pests:
  - name:
      en: Fall armyworm
      hi: फॉल आर्मीवर्म (सैन्य कीट)
    identify:
      en: Caterpillar with four dark spots in a square on the second-last segment and an inverted pale "Y" on the head. Feeds inside the leaf whorl, leaving ragged holes and wet frass.
      hi: दूसरे-अंतिम खंड पर वर्ग में चार गहरे धब्बे और सिर पर उल्टा फीका "Y" वाली सूँडी। पत्ती कुंडली के अंदर खाती है, फटे छेद और गीला मल छोड़ती है।
    damage:
      en: The main maize pest in India since 2018. Attacks from seedling to cob; heavy whorl feeding can kill young plants.
      hi: 2018 से भारत में मक्का का मुख्य कीट। अंकुर से भुट्टे तक हमला; भारी कुंडली भक्षण युवा पौधों को मार सकता है।
    ipm:
      en:
        - Scout twice a week from emergence; act at 5% damaged plants (seedling) or 10% (whorl to tassel).
        - Hand-pick egg masses and larvae; apply dry sand or ash into the whorl.
        - Set 5 pheromone traps per hectare; conserve parasitoids; spray neem-based products on small larvae.
        - Grow a border of napier grass as a trap and avoid staggered sowing in a village.
      hi:
        - उगने से सप्ताह में दो बार निरीक्षण; 5% क्षतिग्रस्त पौधे (अंकुर) या 10% (कुंडली से मंजरी) पर कार्रवाई करें।
        - अंडे के समूह और सूँडियाँ हाथ से चुनें; कुंडली में सूखी रेत या राख डालें।
        - प्रति हेक्टेयर 5 फेरोमोन ट्रैप लगाएँ; परजीवी संरक्षित करें; छोटी सूँडियों पर नीम आधारित उत्पाद छिड़कें।
        - जाल के रूप में नेपियर घास की मेड़ लगाएँ और गाँव में अलग-अलग समय पर बुवाई से बचें।
    chemical:
      en:
        - For higher infestations, whorl-directed sprays of recommended insecticides such as spinetoram, chlorantraniliprole or emamectin benzoate; rotate groups and follow the label.
      hi:
        - अधिक प्रकोप हेतु स्पाइनटोरम, क्लोरएन्ट्रानिलिप्रोल या इमामेक्टिन बेंज़ोएट जैसे अनुशंसित कीटनाशकों का कुंडली-लक्षित छिड़काव; समूह बदलें और लेबल का पालन करें।
  - name:
      en: Pink stem borer & spotted stem borer
      hi: गुलाबी तना छेदक और चित्तीदार तना छेदक
    identify:
      en: Larvae bore into the stem causing dead-hearts early and weak, breakable stems later. Pink borer is worse in rabi maize.
      hi: सूँडियाँ तने में छेद करती हैं, जल्दी मृत गोभ और बाद में कमज़ोर, टूटने वाले तने। रबी मक्का में गुलाबी छेदक अधिक गंभीर।
    damage:
      en: Broken stems and lodged plants at grain filling; entry holes let in cob rot.
      hi: दाना भरते समय टूटे तने और गिरे पौधे; प्रवेश छिद्र भुट्टा सड़न को आने देते हैं।
    ipm:
      en:
        - Destroy stubble after harvest — borers overwinter in it.
        - Release Trichogramma and Cotesia; avoid very late rabi sowing.
      hi:
        - कटाई के बाद ठूँठ नष्ट करें — छेदक उसमें शीतकाल बिताते हैं।
        - ट्राइकोग्रामा और कोटेशिया छोड़ें; बहुत देर से रबी बुवाई से बचें।
    chemical:
      en:
        - Whorl application of a recommended granular insecticide at 15–20 days where borer history is heavy, per label.
      hi:
        - जहाँ छेदक का भारी इतिहास हो वहाँ 15–20 दिन पर अनुशंसित दानेदार कीटनाशक का कुंडली में प्रयोग, लेबल अनुसार।

diseases:
  - name:
      en: Turcicum leaf blight
      hi: टर्सिकम पर्ण अंगमारी
    identify:
      en: Long grey-green to tan cigar-shaped lesions on the leaves that join up and dry the leaf. Worst in humid hill and kharif conditions.
      hi: पत्तियों पर लंबे धूसर-हरे से भूरे सिगार आकार के घाव जो जुड़कर पत्ती सुखा देते हैं। नम पहाड़ी और खरीफ परिस्थितियों में सबसे गंभीर।
    damage:
      en: Loss of green leaf area before grain filling; 20–40% yield loss in a susceptible hybrid in a wet year.
      hi: दाना भरने से पहले हरे पत्ती क्षेत्र की हानि; गीले वर्ष में संवेदनशील हाइब्रिड में 20–40% उपज हानि।
    ipm:
      en:
        - Grow a resistant hybrid; rotate away from maize for a season.
        - Remove and destroy infected residue.
      hi:
        - प्रतिरोधी हाइब्रिड लगाएँ; एक मौसम के लिए मक्का से हटकर फसल चक्र अपनाएँ।
        - संक्रमित अवशेष हटाकर नष्ट करें।
    chemical:
      en:
        - A protectant fungicide (mancozeb) or a triazole + strobilurin spray at first symptoms and again after 12–15 days, per label.
      hi:
        - पहले लक्षण पर और फिर 12–15 दिन बाद सुरक्षात्मक फफूँदनाशक (मैन्कोज़ेब) या ट्रायज़ोल + स्ट्रोबिल्यूरिन छिड़काव, लेबल अनुसार।
  - name:
      en: Maydis leaf blight & cob rots
      hi: मेडिस पर्ण अंगमारी और भुट्टा सड़न
    identify:
      en: Small tan lesions with parallel sides on leaves; on cobs, pink, white or grey mould starting at the tip, sometimes with a musty smell.
      hi: पत्तियों पर समानांतर किनारों वाले छोटे भूरे घाव; भुट्टों पर सिरे से शुरू गुलाबी, सफेद या धूसर फफूँद, कभी बासी गंध के साथ।
    damage:
      en: Cob rots reduce grain quality and produce mycotoxins that are unsafe for food and feed.
      hi: भुट्टा सड़न दाना गुणवत्ता घटाती है और माइकोटॉक्सिन बनाती है जो भोजन और चारे के लिए असुरक्षित हैं।
    ipm:
      en:
        - Choose hybrids with tight, long husk cover.
        - Harvest as soon as mature; dry quickly; discard mouldy cobs, do not feed them.
      hi:
        - कसे, लंबे छिलके आवरण वाले हाइब्रिड चुनें।
        - पकते ही कटाई करें; जल्दी सुखाएँ; फफूँद लगे भुट्टे फेंक दें, उन्हें न खिलाएँ।
    chemical:
      en:
        - Manage stem borers well — most cob rot enters through insect wounds. Foliar fungicide only helps the leaf phase.
      hi:
        - तना छेदक अच्छी तरह नियंत्रित करें — अधिकांश भुट्टा सड़न कीट घावों से आती है। पर्ण फफूँदनाशक केवल पत्ती चरण में मदद करता है।

commonProblems:
  - symptom:
      en: Young plants show broad white or pale-yellow bands along the leaf, stunted
      hi: युवा पौधे पत्ती के साथ चौड़ी सफेद या हल्की-पीली पट्टियाँ दिखाते हैं, बौने
    likelyCause:
      en: Zinc deficiency — very common in maize on levelled or high-pH soil
      hi: जिंक की कमी — समतल या उच्च-pH मिट्टी पर मक्का में बहुत आम
    action:
      en: Spray 0.5% zinc sulphate + lime twice; apply 25 kg/ha zinc sulphate basal every crop
      hi: 0.5% जिंक सल्फेट + चूना दो बार छिड़कें; हर फसल में 25 कि.ग्रा./हे. जिंक सल्फेट आधार खुराक दें
  - symptom:
      en: Cobs have many missing or unfilled kernels, especially at the tip
      hi: भुट्टों में कई गायब या अधूरे दाने, विशेषकर सिरे पर
    likelyCause:
      en: Heat or drought stress during silking, or tassel and silk not synchronised
      hi: रेशम आने के दौरान गर्मी या सूखा तनाव, या नर मंजरी और रेशम असमकालिक
    action:
      en: Guarantee the tasseling and silking irrigations; avoid sowing so that silking falls in the hottest week
      hi: नर मंजरी और रेशम की सिंचाई सुनिश्चित करें; ऐसी बुवाई से बचें कि रेशम सबसे गर्म सप्ताह में आए
  - symptom:
      en: Plants snap at a node and lodge before harvest
      hi: कटाई से पहले पौधे गाँठ पर टूटकर गिर जाते हैं
    likelyCause:
      en: Stem borer tunnelling, excess nitrogen, or a weak-stalk hybrid in wind
      hi: तना छेदक की सुरंग, अधिक नाइट्रोजन, या हवा में कमज़ोर-तना हाइब्रिड
    action:
      en: Manage borers, earth up soil at knee-high, split nitrogen, pick stalk-strength hybrids
      hi: छेदक नियंत्रित करें, घुटने-ऊँचाई पर मिट्टी चढ़ाएँ, नाइट्रोजन बाँटें, मज़बूत-तना हाइब्रिड चुनें

sources:
  - "ICAR–Indian Institute of Maize Research (IIMR), Ludhiana — Maize Production Technology"
  - "ICAR–IIMR & FAO Fall Armyworm IPM advisories for India"
  - "State Agricultural University Package of Practices"
  - "CIB&RC approved label claims"
lastReviewed: 2026-08-01
---

## Overview

Maize is India's third cereal and its fastest-growing one, pulled up by demand from the
poultry and starch industries. Unlike rice and wheat, it is grown in every season somewhere
in the country — kharif in the rain-fed uplands, rabi under irrigation in Bihar and the
south, and spring maize in the north-west.

Almost all commercial maize is **hybrid seed**, which means buying fresh certified seed
every year — saved seed from a hybrid loses vigour and uniformity. Two things then decide
the crop: **drainage** and **water timing**. Maize will not tolerate even a few hours of
standing water, so it is best sown on ridges or raised beds. And while its total water need
is modest, stress at the **tasseling–silking stage** (around 45–55 days) is punishing — a
dry spell then, when pollen is shed and silks must catch it, leaves half-empty cobs that no
later irrigation can fix.

Since 2018, **fall armyworm** has been the pest that defines maize management. Weekly
scouting from the day the crop emerges, and acting early with hand-picking, sand-in-the-whorl
and biologicals before reaching for sprays, keeps it manageable and cheap.

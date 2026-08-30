---
id: rice
order: 1
name:
  en: Rice (Paddy)
  hi: धान (चावल)
botanicalName: Oryza sativa
family:
  en: Poaceae (grass family)
  hi: पोएसी (घास कुल)
category: cereal
seasons: [kharif, zaid]
duration: 135
emoji: "🌾"

climate:
  en: Warm and humid, 20–37 °C. Needs assured water — about 1000–1500 mm over the season. Grows from sea level to 2000 m.
  hi: गर्म और नम, 20–37 °C। सुनिश्चित पानी चाहिए — पूरे मौसम में लगभग 1000–1500 मि.मी.। समुद्र तल से 2000 मी. ऊँचाई तक होती है।
soil:
  en: Clay or clay-loam that holds water well. Tolerates pH 5.0–8.0; best at 5.5–6.5. Can grow in soils too wet for other crops.
  hi: चिकनी या चिकनी-दोमट मिट्टी जो पानी अच्छी तरह रोके। pH 5.0–8.0 सहन करती है; 5.5–6.5 सर्वोत्तम। ऐसी मिट्टी में भी होती है जो अन्य फसलों के लिए बहुत गीली हो।
waterRequirement:
  en: High. Keep 2–5 cm standing water from transplanting to grain filling. Drain the field 10 days before harvest.
  hi: अधिक। रोपाई से दाना भरने तक 2–5 सें.मी. खड़ा पानी रखें। कटाई से 10 दिन पहले खेत से पानी निकाल दें।
majorStates:
  - West Bengal
  - Uttar Pradesh
  - Punjab
  - Odisha
  - Bihar
  - Andhra Pradesh
  - Chhattisgarh
  - Tamil Nadu

seedRate:
  value: 20
  unit: kg/ha
  method:
    en: For transplanting — raise a nursery on 1000 m² for one hectare. Direct seeded rice (DSR) needs 60–80 kg/ha.
    hi: रोपाई के लिए — एक हेक्टेयर हेतु 1000 वर्ग मी. में नर्सरी तैयार करें। सीधी बुवाई वाले धान (DSR) को 60–80 कि.ग्रा./हे. चाहिए।

varieties:
  - name: "Swarna (MTU 7029)"
    duration: 145
    region: "Eastern & southern India"
    notes:
      en: Very widely grown, good for lowland, high yield but susceptible to BLB.
      hi: बहुत व्यापक रूप से उगाई जाती है, नीची भूमि के लिए अच्छी, अधिक उपज पर BLB के प्रति संवेदनशील।
  - name: "Pusa Basmati 1121"
    duration: 145
    region: "North-west India"
    notes:
      en: Long-grain aromatic export basmati; needs good management to avoid lodging.
      hi: लंबे दाने वाली सुगंधित निर्यात बासमती; गिरने से बचाने हेतु अच्छी देखभाल चाहिए।
  - name: "MTU 1010 (Cottondora Sannalu)"
    duration: 125
    region: "Andhra Pradesh, Telangana, Odisha"
    notes:
      en: Medium slender grain, moderately resistant to blast and BPH.
      hi: मध्यम पतला दाना, ब्लास्ट और BPH के प्रति मध्यम प्रतिरोधी।
  - name: "DRR Dhan 44"
    duration: 135
    region: "Multiple states"
    notes:
      en: Drought-tolerant, suited to rainfed shallow lowland.
      hi: सूखा-सहनशील, वर्षा आधारित उथली नीची भूमि के लिए उपयुक्त।

calendar:
  basis: transplant
  stages:
    - key: establishment
      name:
        en: Transplanting & establishment
        hi: रोपाई और जमाव
      startDap: 0
      endDap: 10
      irrigation:
        en: Keep a shallow 2 cm film of water; do not flood deeply until seedlings anchor.
        hi: 2 सें.मी. उथली पानी की परत रखें; पौध जमने तक गहरा पानी न भरें।
      tasks:
        en:
          - Transplant 25–30 day old seedlings, 2–3 per hill, at 20 × 15 cm spacing.
          - Apply the basal dose — full phosphorus, full potash, and one-third of the nitrogen.
          - Gap-fill any missing hills within 7 days.
        hi:
          - 25–30 दिन पुरानी पौध, प्रति स्थान 2–3, 20 × 15 सें.मी. दूरी पर रोपें।
          - आधार खुराक दें — पूरा फॉस्फोरस, पूरा पोटाश और एक-तिहाई नाइट्रोजन।
          - 7 दिन के भीतर खाली स्थानों पर पौध लगाएँ।
      watchFor:
        en:
          - Snails and case worm in standing water.
        hi:
          - खड़े पानी में घोंघे और केस वर्म।
    - key: tillering
      name:
        en: Tillering
        hi: कल्ले फूटना
      startDap: 10
      endDap: 40
      irrigation:
        en: Maintain 3–5 cm standing water. One drainage at 25–30 days helps root growth.
        hi: 3–5 सें.मी. खड़ा पानी रखें। 25–30 दिन पर एक बार पानी निकालने से जड़ वृद्धि होती है।
      tasks:
        en:
          - First manual or chemical weeding by 15–20 days; a second by 35–40 days.
          - Top-dress one-third of the nitrogen at active tillering (about 21 days).
          - Keep water shallow to encourage more tillers.
        hi:
          - 15–20 दिन तक पहली निराई (हाथ या रसायन); 35–40 दिन तक दूसरी।
          - सक्रिय कल्ले अवस्था (लगभग 21 दिन) पर एक-तिहाई नाइट्रोजन का छिड़काव/भुरकाव करें।
          - अधिक कल्लों के लिए पानी उथला रखें।
      watchFor:
        en:
          - Dead-hearts from stem borer.
          - Yellowing between veins — likely zinc deficiency (khaira).
        hi:
          - तना छेदक से मृत गोभ (डेड-हार्ट)।
          - शिराओं के बीच पीलापन — संभवतः जिंक की कमी (खैरा)।
    - key: panicle
      name:
        en: Panicle initiation & booting
        hi: बाली बनना और गर्भावस्था
      startDap: 40
      endDap: 65
      irrigation:
        en: Never let the field dry out now — this is the most water-sensitive stage.
        hi: अब खेत को कभी सूखने न दें — यह सबसे अधिक पानी-संवेदनशील अवस्था है।
      tasks:
        en:
          - Apply the final one-third of nitrogen at panicle initiation.
          - Scout twice a week for stem borer and leaf folder; act on economic threshold only.
        hi:
          - बाली बनने पर नाइट्रोजन की अंतिम एक-तिहाई खुराक दें।
          - तना छेदक और पत्ती लपेटक के लिए सप्ताह में दो बार निरीक्षण; केवल आर्थिक हानि स्तर पर कार्रवाई करें।
      watchFor:
        en:
          - White-ears (dead panicles) from stem borer.
          - Brown planthopper "hopper burn" patches — check the base of plants.
        hi:
          - तना छेदक से सफेद बालियाँ (मृत बाली)।
          - भूरा फुदका "हॉपर बर्न" धब्बे — पौधों के आधार की जाँच करें।
    - key: flowering
      name:
        en: Flowering
        hi: फूल आना
      startDap: 65
      endDap: 90
      irrigation:
        en: Keep 5 cm standing water. Water stress here directly cuts grain number.
        hi: 5 सें.मी. खड़ा पानी रखें। यहाँ पानी की कमी सीधे दाना संख्या घटाती है।
      tasks:
        en:
          - Avoid any pesticide spray during peak flowering to protect pollination.
          - Watch for neck blast if weather is cool, cloudy and humid.
        hi:
          - परागण की रक्षा हेतु पूर्ण फूल अवस्था में कोई कीटनाशक छिड़काव न करें।
          - मौसम ठंडा, बादलयुक्त और नम होने पर गर्दन ब्लास्ट पर नज़र रखें।
      watchFor:
        en:
          - Black or greenish velvet balls replacing grains — false smut.
        hi:
          - दानों की जगह काले या हरे मखमली गोले — मिथ्या कंड (फॉल्स स्मट)।
    - key: grainfill
      name:
        en: Grain filling & milking
        hi: दाना भरना और दूधिया अवस्था
      startDap: 90
      endDap: 115
      irrigation:
        en: Keep the soil saturated to shallow-flooded. Begin alternate wetting and drying only late in this stage.
        hi: मिट्टी को संतृप्त से उथले-जलमग्न रखें। इस अवस्था के अंत में ही बारी-बारी गीला-सूखा शुरू करें।
      tasks:
        en:
          - Protect the flag leaf — it feeds the grain.
          - Control late leaf folder and rice bug at milk stage if numbers are high.
        hi:
          - झंडा पत्ती की रक्षा करें — यही दाने को पोषण देती है।
          - दूधिया अवस्था में संख्या अधिक होने पर देर से आने वाले पत्ती लपेटक और गंधी बग को नियंत्रित करें।
      watchFor:
        en:
          - Empty or partly filled grains at the panicle tip.
        hi:
          - बाली के सिरे पर खाली या आंशिक भरे दाने।
    - key: maturity
      name:
        en: Maturity & harvest
        hi: पकाव और कटाई
      startDap: 115
      endDap: 135
      irrigation:
        en: Drain the field about 10 days before harvest so it firms up for cutting.
        hi: कटाई से लगभग 10 दिन पहले खेत से पानी निकाल दें ताकि ज़मीन कटाई के लिए सख्त हो जाए।
      tasks:
        en:
          - Harvest when 80–85% of grains are straw-coloured and hard-dough.
          - Thresh promptly; dry grain to 12–14% moisture before storage.
          - Do not burn straw — incorporate it or bale it.
        hi:
          - जब 80–85% दाने भूसे के रंग के और कठोर हो जाएँ तब कटाई करें।
          - तुरंत गहाई करें; भंडारण से पहले दाने को 12–14% नमी तक सुखाएँ।
          - पराली न जलाएँ — इसे मिट्टी में मिलाएँ या गाँठ बनाएँ।
      watchFor:
        en:
          - Lodging after wind or rain — harvest lodged patches first.
          - Grain shattering if harvest is delayed.
        hi:
          - हवा या बारिश के बाद फसल का गिरना — गिरे हिस्से पहले काटें।
          - कटाई में देरी होने पर दाना झड़ना।

nutrition:
  recommendedNpk:
    n: 120
    p: 60
    k: 40
  basisNote:
    en: For irrigated medium-duration rice. Reduce nitrogen by 25–30% for rainfed or short-duration crops. Always adjust to your soil health card.
    hi: सिंचित मध्यम अवधि धान के लिए। वर्षा आधारित या कम अवधि की फसल हेतु नाइट्रोजन 25–30% घटाएँ। हमेशा अपने मृदा स्वास्थ्य कार्ड के अनुसार समायोजित करें।
  sprayWaterLitresPerAcre: 200
  schedule:
    - stage:
        en: Basal (at transplanting)
        hi: आधार (रोपाई के समय)
      timing:
        en: Day 0, mixed into puddled soil
        hi: दिन 0, तैयार कीचड़ मिट्टी में मिलाकर
      n: 40
      p: 60
      k: 40
    - stage:
        en: Active tillering
        hi: सक्रिय कल्ले अवस्था
      timing:
        en: About 21 days after transplanting
        hi: रोपाई के लगभग 21 दिन बाद
      n: 40
      p: 0
      k: 0
    - stage:
        en: Panicle initiation
        hi: बाली बनने की अवस्था
      timing:
        en: About 42 days after transplanting
        hi: रोपाई के लगभग 42 दिन बाद
      n: 40
      p: 0
      k: 0
  organic:
    en:
      - Apply 5–10 tonnes/ha of well-rotted farmyard manure or compost 2–3 weeks before transplanting.
      - A green manure crop of dhaincha (Sesbania) ploughed in can replace 25–30 kg N/ha.
      - Bio-fertilisers — Azospirillum and phosphobacteria — as seedling root dip.
    hi:
      - रोपाई से 2–3 सप्ताह पहले 5–10 टन/हे. अच्छी सड़ी गोबर खाद या कम्पोस्ट डालें।
      - ढैंचा (सेसबानिया) की हरी खाद जोतने से 25–30 कि.ग्रा. N/हे. की बचत होती है।
      - जैव-उर्वरक — एज़ोस्पाइरिलम और फॉस्फोबैक्टीरिया — पौध की जड़ डुबोकर।
  soilTestNote:
    en: Rice on light or newly levelled land often needs 25 kg/ha zinc sulphate as basal. Correct once every 2–3 crops.
    hi: हल्की या नई समतल भूमि पर धान को अक्सर आधार खुराक के रूप में 25 कि.ग्रा./हे. जिंक सल्फेट चाहिए। हर 2–3 फसल में एक बार सुधार करें।

pests:
  - name:
      en: Yellow stem borer
      hi: पीला तना छेदक
    identify:
      en: Cream caterpillar inside the stem. Central shoot dries into a "dead-heart" before panicle; whole panicle turns white and empty after.
      hi: तने के अंदर मलाई रंग की सूँडी। बाली से पहले बीच का अंकुर सूखकर "मृत गोभ" बन जाता है; बाद में पूरी बाली सफेद और खाली।
    damage:
      en: Dead-hearts at tillering and white-ears at heading. 10% affected tillers is the action point.
      hi: कल्ले अवस्था में मृत गोभ और बाली अवस्था में सफेद बालियाँ। 10% प्रभावित कल्ले कार्रवाई का स्तर है।
    ipm:
      en:
        - Clip and destroy egg masses on leaf tips; remove stubble after harvest.
        - Set up 5 pheromone traps per hectare; release Trichogramma egg parasitoid.
        - Avoid excess nitrogen and close spacing.
      hi:
        - पत्ती के सिरों पर अंडे के समूह काटकर नष्ट करें; कटाई के बाद ठूँठ हटाएँ।
        - प्रति हेक्टेयर 5 फेरोमोन ट्रैप लगाएँ; ट्राइकोग्रामा अंडा परजीवी छोड़ें।
        - अधिक नाइट्रोजन और घनी दूरी से बचें।
    chemical:
      en:
        - At economic threshold, a granular insecticide such as cartap hydrochloride 4G applied into standing water is commonly advised.
        - Follow the current CIB&RC label dose and your KVK advisory; observe the pre-harvest interval.
      hi:
        - आर्थिक हानि स्तर पर, खड़े पानी में कार्टाप हाइड्रोक्लोराइड 4G जैसा दानेदार कीटनाशक आमतौर पर सुझाया जाता है।
        - मौजूदा CIB&RC लेबल मात्रा और अपने KVK सलाह का पालन करें; कटाई-पूर्व अंतराल का ध्यान रखें।
  - name:
      en: Brown planthopper (BPH)
      hi: भूरा फुदका (BPH)
    identify:
      en: Small brown hoppers clustered at the plant base above the water line. Sooty mould and circular patches of "hopper burn" where plants dry and collapse.
      hi: पानी की रेखा के ऊपर पौधे के आधार पर एकत्र छोटे भूरे फुदके। काली फफूँद और "हॉपर बर्न" के गोल धब्बे जहाँ पौधे सूखकर गिर जाते हैं।
    damage:
      en: Sap sucking; can cause total loss in patches within a week. Also spreads grassy stunt virus.
      hi: रस चूसना; एक सप्ताह में धब्बों में पूर्ण हानि हो सकती है। घास वाला बौना विषाणु भी फैलाता है।
    ipm:
      en:
        - Drain the field for 3–4 days to break the humid canopy micro-climate.
        - Grow a resistant variety; avoid indiscriminate early sprays that kill spiders and mirid bugs.
        - Alleyways every 2 m for light and air; do not over-fertilise with nitrogen.
      hi:
        - नम छत्र सूक्ष्म-जलवायु तोड़ने हेतु खेत से 3–4 दिन पानी निकालें।
        - प्रतिरोधी किस्म लगाएँ; मकड़ी और मिरिड बग को मारने वाले अंधाधुंध जल्दी छिड़काव से बचें।
        - प्रकाश और हवा के लिए हर 2 मी. पर रास्ता; नाइट्रोजन की अधिक खाद न दें।
    chemical:
      en:
        - Direct the spray to the base of the plants. Rotate between recommended groups such as pymetrozine or dinotefuran to avoid resistance.
        - Never use synthetic pyrethroids on rice — they cause BPH resurgence.
      hi:
        - छिड़काव पौधों के आधार पर करें। प्रतिरोध से बचने हेतु अनुशंसित समूहों जैसे पाइमेट्रोज़िन या डाइनोटेफ्यूरान के बीच अदला-बदली करें।
        - धान पर सिंथेटिक पायरेथ्रॉइड कभी न डालें — इनसे BPH की पुनर्वृद्धि होती है।
  - name:
      en: Rice leaf folder
      hi: पत्ती लपेटक
    identify:
      en: Larva folds a leaf lengthwise and scrapes green tissue inside, leaving white transparent streaks.
      hi: सूँडी पत्ती को लंबाई में मोड़कर अंदर हरे ऊतक को खुरचती है, जिससे सफेद पारदर्शी धारियाँ बनती हैं।
    damage:
      en: Loss of green leaf area. Usually cosmetic below 2 damaged leaves per hill; economic only near flag leaf.
      hi: हरे पत्ती क्षेत्र की हानि। प्रति स्थान 2 क्षतिग्रस्त पत्तियों से कम पर आमतौर पर मामूली; केवल झंडा पत्ती के पास आर्थिक।
    ipm:
      en:
        - Conserve natural enemies; a rope pulled across the crop dislodges larvae.
        - Balanced nitrogen; wider spacing.
      hi:
        - प्राकृतिक शत्रुओं का संरक्षण करें; फसल पर रस्सी खींचने से सूँडियाँ गिर जाती हैं।
        - संतुलित नाइट्रोजन; चौड़ी दूरी।
    chemical:
      en:
        - Spray only if damage reaches the flag or second leaf near booting, using a label-recommended insecticide.
      hi:
        - केवल तब छिड़काव करें जब गर्भावस्था के पास झंडा या दूसरी पत्ती तक नुकसान पहुँचे, लेबल-अनुशंसित कीटनाशक से।

diseases:
  - name:
      en: Rice blast
      hi: धान का ब्लास्ट (झुलसा)
    identify:
      en: Spindle-shaped spots with grey centres and brown margins on leaves. Black lesions where the panicle joins the stem — "neck blast" — snap the panicle off.
      hi: पत्तियों पर धुरी के आकार के धब्बे, बीच में धूसर और किनारे भूरे। जहाँ बाली तने से जुड़ती है वहाँ काले घाव — "गर्दन ब्लास्ट" — बाली को तोड़ देते हैं।
    damage:
      en: Neck blast can destroy 50–80% of grain in a susceptible variety under cool, humid, cloudy weather.
      hi: ठंडे, नम, बादलयुक्त मौसम में संवेदनशील किस्म में गर्दन ब्लास्ट 50–80% दाना नष्ट कर सकता है।
    ipm:
      en:
        - Grow a resistant variety and treat seed before sowing.
        - Split nitrogen; never apply a heavy single dose. Avoid evening irrigation.
        - Destroy infected stubble and collateral grass hosts.
      hi:
        - प्रतिरोधी किस्म लगाएँ और बुवाई से पहले बीज उपचार करें।
        - नाइट्रोजन बाँटकर दें; कभी भारी एकल खुराक न दें। शाम की सिंचाई से बचें।
        - संक्रमित ठूँठ और आसपास की घास पोषकों को नष्ट करें।
    chemical:
      en:
        - A protectant/systemic fungicide such as tricyclazole is commonly sprayed at boot leaf and again at heading in blast-prone areas.
        - Follow the label and local advisory; do not spray during full flowering.
      hi:
        - ब्लास्ट-प्रवण क्षेत्रों में गर्भ पत्ती पर और फिर बाली निकलते समय ट्राइसाइक्लाज़ोल जैसा फफूँदनाशक आमतौर पर छिड़का जाता है।
        - लेबल और स्थानीय सलाह का पालन करें; पूर्ण फूल अवस्था में छिड़काव न करें।
  - name:
      en: Bacterial leaf blight (BLB)
      hi: जीवाणु पर्ण झुलसा (BLB)
    identify:
      en: Water-soaked lines from the leaf tip and margins that turn yellow then straw-white and wavy. Milky ooze on cut leaves in early morning.
      hi: पत्ती के सिरे और किनारों से जल-युक्त रेखाएँ जो पीली फिर भूसे जैसी सफेद और लहरदार हो जाती हैं। सुबह-सुबह कटी पत्तियों पर दूधिया रिसाव।
    damage:
      en: Up to 60% loss when it hits at tillering. Worse after storms that wound leaves and in flooded fields.
      hi: कल्ले अवस्था में लगने पर 60% तक हानि। पत्तियों को घायल करने वाले तूफानों के बाद और जलमग्न खेतों में अधिक गंभीर।
    ipm:
      en:
        - Use resistant varieties — the only reliable control.
        - Drain the field; stop nitrogen top-dressing until it slows.
        - Do not move through a wet infected field.
      hi:
        - प्रतिरोधी किस्में उपयोग करें — एकमात्र भरोसेमंद नियंत्रण।
        - खेत से पानी निकालें; रोग धीमा होने तक नाइट्रोजन का ऊपरी छिड़काव रोकें।
        - गीले संक्रमित खेत में आवाजाही न करें।
    chemical:
      en:
        - Chemical control is poor. A copper-based spray may slow spread; there is no cure.
      hi:
        - रासायनिक नियंत्रण कमज़ोर है। तांबा-आधारित छिड़काव फैलाव धीमा कर सकता है; कोई इलाज नहीं।
  - name:
      en: Sheath blight
      hi: शीथ ब्लाइट (आवरण झुलसा)
    identify:
      en: Oval greenish-grey water-soaked spots on the leaf sheath near the water line, later with a brown border and bleached centre. Spreads up the plant.
      hi: पानी की रेखा के पास पत्ती आवरण पर अंडाकार हरे-धूसर जल-युक्त धब्बे, बाद में भूरे किनारे और सफेद बीच। पौधे पर ऊपर की ओर फैलता है।
    damage:
      en: Common in dense, heavily fertilised crops; cuts grain filling and can cause lodging.
      hi: घनी, अधिक खाद वाली फसलों में आम; दाना भरना घटाता है और फसल गिरा सकता है।
    ipm:
      en:
        - Wider spacing and alley ways; avoid excess nitrogen.
        - Remove weeds and previous crop debris that carry sclerotia.
      hi:
        - चौड़ी दूरी और रास्ते; अधिक नाइट्रोजन से बचें।
        - स्क्लेरोशिया ले जाने वाले खरपतवार और पिछली फसल के अवशेष हटाएँ।
    chemical:
      en:
        - A sheath-directed spray of validamycin or a triazole fungicide at early boot in a badly affected field, per label.
      hi:
        - बुरी तरह प्रभावित खेत में गर्भावस्था की शुरुआत में वैलिडामाइसिन या ट्रायज़ोल फफूँदनाशक का आवरण-लक्षित छिड़काव, लेबल अनुसार।

commonProblems:
  - symptom:
      en: Older leaves turn rusty brown from the tip, plants stunted 2–3 weeks after transplanting
      hi: रोपाई के 2–3 सप्ताह बाद पुरानी पत्तियाँ सिरे से जंग जैसी भूरी, पौधे बौने
    likelyCause:
      en: Zinc deficiency (khaira), common on levelled or calcareous soils
      hi: जिंक की कमी (खैरा), समतल या चूनायुक्त मिट्टी पर आम
    action:
      en: Spray 0.5% zinc sulphate + 0.25% lime, two sprays a week apart; apply 25 kg/ha zinc sulphate basal next crop
      hi: 0.5% जिंक सल्फेट + 0.25% चूना का छिड़काव, एक सप्ताह के अंतर पर दो बार; अगली फसल में 25 कि.ग्रा./हे. जिंक सल्फेट आधार खुराक दें
  - symptom:
      en: Whole crop leans over flat after wind or rain, especially a lush dark-green crop
      hi: हवा या बारिश के बाद पूरी फसल सपाट झुक जाती है, विशेषकर हरी-भरी गहरी हरी फसल
    likelyCause:
      en: Lodging from too much nitrogen, deep water, or a tall variety
      hi: अधिक नाइट्रोजन, गहरे पानी या लंबी किस्म से फसल का गिरना
    action:
      en: Split nitrogen and stop by panicle initiation, keep water shallow, choose short stiff-straw varieties
      hi: नाइट्रोजन बाँटकर दें और बाली बनने तक बंद कर दें, पानी उथला रखें, छोटी मजबूत-तना किस्में चुनें
  - symptom:
      en: Many empty or half-filled grains at harvest though the crop looked healthy
      hi: फसल स्वस्थ दिखने के बावजूद कटाई पर कई खाली या आधे भरे दाने
    likelyCause:
      en: Cold or very hot spell at flowering, water stress at booting, or potash shortage
      hi: फूल अवस्था में ठंड या बहुत गर्मी, गर्भावस्था में पानी की कमी, या पोटाश की कमी
    action:
      en: Adjust transplanting date so flowering misses temperature extremes, never let the field dry from booting to flowering, apply recommended potash
      hi: रोपाई तिथि समायोजित करें ताकि फूल अवस्था तापमान की चरम सीमा से बचे, गर्भावस्था से फूल अवस्था तक खेत सूखने न दें, अनुशंसित पोटाश दें

sources:
  - "ICAR–National Rice Research Institute (NRRI), Cuttack — Rice Production Technology"
  - "ICAR–Indian Institute of Rice Research (IIRR), Hyderabad — Package of Practices"
  - "State Agricultural University Package of Practices (Kharif crops)"
  - "CIB&RC — Central Insecticides Board & Registration Committee approved label claims"
lastReviewed: 2026-08-01
---

## Overview

Rice is India's most important food crop and the staple for more than half the country. It is
the one cereal that thrives in standing water, which is why it dominates the monsoon (kharif)
season across the eastern and southern states and the irrigated north-west.

Most rice in India is **transplanted**: seed is first raised in a small, densely sown
**nursery** for 25–30 days, then the young seedlings are pulled and planted out into a
puddled, levelled main field. Puddling — working the wet soil to a soft mud — seals the
field so it holds water and suppresses weeds. Where water or labour is short, farmers instead
use **direct seeded rice (DSR)**, drilling seed straight into the field; this saves water and
time but needs sharper weed control.

The crop calendar on this page counts days **from transplanting**. If you are growing DSR,
count from sowing and add roughly the nursery period (about 25 days) when comparing stages.

Good rice management comes down to a few decisions done well: transplant young seedlings on
time, split the nitrogen into three doses, never let the field go dry between booting and
flowering, scout weekly so you spray only when a pest crosses its threshold, and drain the
field before harvest.

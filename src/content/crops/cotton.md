---
id: cotton
order: 4
name:
  en: Cotton
  hi: कपास
botanicalName: Gossypium hirsutum
family:
  en: Malvaceae (mallow family)
  hi: माल्वेसी (मैलो कुल)
category: fibre
seasons: [kharif]
duration: 165
emoji: "🌿"

climate:
  en: Long warm season of 160–200 frost-free days, 21–30 °C, bright sunshine. Needs a dry, rain-free spell at boll opening and picking.
  hi: 160–200 पाला-मुक्त दिनों का लंबा गर्म मौसम, 21–30 °C, तेज़ धूप। टिंडा खुलने और चुनाई के समय शुष्क, वर्षा-रहित अवधि चाहिए।
soil:
  en: Deep black cotton soil or well-drained alluvium, pH 6.0–8.0. Deep soils hold moisture for the long season; shallow soils need assured irrigation.
  hi: गहरी काली कपास मिट्टी या अच्छे जल निकास वाली जलोढ़, pH 6.0–8.0। गहरी मिट्टी लंबे मौसम हेतु नमी रोकती है; उथली मिट्टी को सुनिश्चित सिंचाई चाहिए।
waterRequirement:
  en: Moderate to high — 700–1200 mm. Flowering and boll development are the water-critical stages; avoid both drought and waterlogging.
  hi: मध्यम से अधिक — 700–1200 मि.मी.। फूल और टिंडा विकास पानी-महत्वपूर्ण अवस्थाएँ हैं; सूखा और जलभराव दोनों से बचें।
majorStates:
  - Gujarat
  - Maharashtra
  - Telangana
  - Rajasthan
  - Karnataka
  - Haryana
  - Punjab
  - Madhya Pradesh

seedRate:
  value: 1.5
  unit: kg/ha
  method:
    en: About 1.5 kg/ha (2 Bt seed packets/acre) for irrigated at 90–120 × 45–60 cm. Rainfed high-density planting uses 3–5 kg/ha at closer spacing.
    hi: सिंचित हेतु लगभग 1.5 कि.ग्रा./हे. (2 Bt बीज पैकेट/एकड़), 90–120 × 45–60 सें.मी. पर। वर्षा आधारित सघन बुवाई में निकट दूरी पर 3–5 कि.ग्रा./हे.।

varieties:
  - name: "Bt cotton hybrids (Bollgard II)"
    duration: 165
    region: "All cotton zones"
    notes:
      en: Over 90% of Indian cotton. Protects against American and pink bollworm — but pink bollworm resistance is now widespread, so refuge and monitoring are essential.
      hi: भारतीय कपास का 90% से अधिक। अमेरिकी और गुलाबी सुंडी से बचाव — पर गुलाबी सुंडी प्रतिरोध अब व्यापक है, इसलिए रेफ्यूज और निगरानी आवश्यक।
  - name: "Suraj / desi (G. arboreum) varieties"
    duration: 150
    region: "Rainfed central & north India"
    notes:
      en: Native cotton, no Bt needed, hardy in drought and resistant to sucking pests and leaf curl virus.
      hi: देशी कपास, Bt की ज़रूरत नहीं, सूखे में मज़बूत और रस-चूसक कीटों तथा पर्ण मोड़ विषाणु के प्रति प्रतिरोधी।
  - name: "High-density straight varieties (e.g. PKV, CICR lines)"
    duration: 150
    region: "Rainfed shallow soils"
    notes:
      en: Sown at high density and picked early; lower input cost, promoted as a way out of the Bt-hybrid pink bollworm trap.
      hi: उच्च घनत्व पर बोई और जल्दी चुनी जाती है; कम लागत, Bt-हाइब्रिड गुलाबी सुंडी जाल से निकलने का तरीका।

calendar:
  basis: sowing
  stages:
    - key: establishment
      name:
        en: Sowing & seedling
        hi: बुवाई और अंकुर
      startDap: 0
      endDap: 30
      irrigation:
        en: Sow into good moisture. First irrigation 3–4 weeks after sowing for irrigated cotton; rainfed relies on the monsoon.
        hi: अच्छी नमी में बुवाई करें। सिंचित कपास हेतु बुवाई के 3–4 सप्ताह बाद पहली सिंचाई; वर्षा आधारित मानसून पर निर्भर।
      tasks:
        en:
          - Sow when soil temperature is above 20 °C and the monsoon is near — mid-May to June in the north, June–July in the south.
          - Keep the mandatory non-Bt refuge (5 rows around, or as in the seed packet).
          - Apply full phosphorus, full potash and one-fifth of nitrogen as basal.
          - Gap-fill within 10 days.
        hi:
          - जब मिट्टी का तापमान 20 °C से ऊपर हो और मानसून निकट हो तब बुवाई करें — उत्तर में मध्य मई से जून, दक्षिण में जून–जुलाई।
          - अनिवार्य गैर-Bt रेफ्यूज रखें (चारों ओर 5 कतारें, या बीज पैकेट के अनुसार)।
          - पूरा फॉस्फोरस, पूरा पोटाश और एक-पाँचवाँ नाइट्रोजन आधार खुराक के रूप में दें।
          - 10 दिन के भीतर खाली स्थान भरें।
      watchFor:
        en:
          - Thrips and jassids on the underside of young leaves — leaf edges cup and turn bronze or yellow.
          - Seedling wilt in cold or crusted soil.
        hi:
          - युवा पत्तियों के नीचे थ्रिप्स और हरा तेला — पत्ती किनारे कटोरे जैसे मुड़ते और कांस्य या पीले हो जाते हैं।
          - ठंडी या पपड़ीदार मिट्टी में अंकुर उकठा।
    - key: vegetative
      name:
        en: Vegetative growth (squaring)
        hi: वानस्पतिक वृद्धि (डोडी बनना)
      startDap: 30
      endDap: 65
      irrigation:
        en: Light, frequent irrigation. Mild moisture stress now encourages reproductive growth over leafy growth.
        hi: हल्की, बार-बार सिंचाई। अब हल्का नमी तनाव पत्तेदार वृद्धि के बजाय प्रजनन वृद्धि को बढ़ावा देता है।
      tasks:
        en:
          - Two weedings and earthing up by 60 days.
          - Top-dress nitrogen in 2–3 splits from squaring onwards.
          - Start weekly pest scouting — thrips, jassids, aphids, whitefly, mealybug.
        hi:
          - 60 दिन तक दो निराई और मिट्टी चढ़ाना।
          - डोडी बनने से आगे 2–3 भागों में नाइट्रोजन ऊपरी छिड़काव।
          - साप्ताहिक कीट निरीक्षण शुरू करें — थ्रिप्स, हरा तेला, माहू, सफेद मक्खी, मिलीबग।
      watchFor:
        en:
          - Whitefly clouds rising when plants are disturbed — vector of leaf curl virus.
          - Upward leaf curling and vein thickening — cotton leaf curl virus, no cure.
        hi:
          - पौधे हिलाने पर उठते सफेद मक्खी के बादल — पर्ण मोड़ विषाणु का वाहक।
          - पत्ती का ऊपर की ओर मुड़ना और शिरा मोटी होना — कपास पर्ण मोड़ विषाणु, कोई इलाज नहीं।
    - key: flowering
      name:
        en: Flowering & early bolls
        hi: फूल और प्रारंभिक टिंडे
      startDap: 65
      endDap: 110
      irrigation:
        en: The peak water-demand stage. Never let cotton wilt during flowering — shed flowers and small bolls do not come back.
        hi: चरम पानी-माँग अवस्था। फूल अवस्था में कपास को कभी मुरझाने न दें — गिरे फूल और छोटे टिंडे वापस नहीं आते।
      tasks:
        en:
          - Install pink bollworm pheromone traps (5/acre) and check twice a week; count rosette flowers.
          - Release Trichogramma; spray neem on early larvae.
          - Keep potassium adequate — it drives boll filling and fibre strength.
        hi:
          - गुलाबी सुंडी फेरोमोन ट्रैप (5/एकड़) लगाएँ और सप्ताह में दो बार जाँचें; रोज़ेट फूल गिनें।
          - ट्राइकोग्रामा छोड़ें; प्रारंभिक सूँडियों पर नीम छिड़कें।
          - पोटैशियम पर्याप्त रखें — यह टिंडा भरना और रेशा मज़बूती चलाता है।
      watchFor:
        en:
          - Rosette-shaped flowers that do not open properly — pink bollworm inside.
          - Excessive vegetative growth — apply a growth regulator if the crop is running to leaf.
        hi:
          - रोज़ेट के आकार के फूल जो ठीक से नहीं खुलते — अंदर गुलाबी सुंडी।
          - अत्यधिक वानस्पतिक वृद्धि — फसल पत्ती की ओर भाग रही हो तो वृद्धि नियामक दें।
    - key: bolldev
      name:
        en: Boll development
        hi: टिंडा विकास
      startDap: 110
      endDap: 140
      irrigation:
        en: Maintain steady moisture through boll filling. Begin tapering water as the first bolls near opening.
        hi: टिंडा भरने तक स्थिर नमी बनाए रखें। पहले टिंडे खुलने के पास आते ही पानी घटाना शुरू करें।
      tasks:
        en:
          - Continue bollworm monitoring; open a sample of green bolls to check for larvae and stained lint.
          - Manage sucking pests and whitefly to prevent honeydew staining the lint.
        hi:
          - सुंडी निगरानी जारी रखें; सूँडियों और दागी रुई की जाँच हेतु हरे टिंडों का नमूना खोलें।
          - रुई पर मधुरस के दाग रोकने हेतु रस-चूसक कीट और सफेद मक्खी नियंत्रित करें।
      watchFor:
        en:
          - Bad boll opening, locks stuck together, brown stained lint — pink bollworm and boll rot.
        hi:
          - खराब टिंडा खुलना, आपस में चिपके लॉक, भूरी दागी रुई — गुलाबी सुंडी और टिंडा सड़न।
    - key: picking
      name:
        en: Boll opening & picking
        hi: टिंडा खुलना और चुनाई
      startDap: 140
      endDap: 200
      irrigation:
        en: Stop irrigation. Rain or high humidity now stains lint and lowers grade.
        hi: सिंचाई रोक दें। अब बारिश या अधिक नमी रुई पर दाग लगाती है और श्रेणी घटाती है।
      tasks:
        en:
          - Pick every 15–20 days when bolls are fully open and dry; pick in the morning after dew lifts.
          - Keep the first (best) pickings separate from later, stained cotton.
          - After the last picking, uproot and destroy stalks by the state deadline to break the pink bollworm cycle.
        hi:
          - जब टिंडे पूरी तरह खुले और सूखे हों तब हर 15–20 दिन में चुनाई करें; ओस उठने के बाद सुबह चुनें।
          - पहली (सर्वोत्तम) चुनाई को बाद की दागी कपास से अलग रखें।
          - अंतिम चुनाई के बाद, गुलाबी सुंडी चक्र तोड़ने हेतु राज्य की समय सीमा तक डंठल उखाड़कर नष्ट करें।
      watchFor:
        en:
          - Regrowth or ratooning of old plants that shelter pink bollworm into the next season.
        hi:
          - पुराने पौधों की पुनर्वृद्धि या रैटूनिंग जो गुलाबी सुंडी को अगले मौसम तक आश्रय देती है।

nutrition:
  recommendedNpk:
    n: 120
    p: 60
    k: 60
  basisNote:
    en: For irrigated Bt hybrids. Rainfed crops use about 80:40:40. Cotton has a high potassium demand for fibre quality; do not skip MOP. Split nitrogen into 4–5 doses to the boll stage.
    hi: सिंचित Bt हाइब्रिड के लिए। वर्षा आधारित फसल लगभग 80:40:40 उपयोग करती है। रेशा गुणवत्ता हेतु कपास की पोटैशियम माँग अधिक है; MOP न छोड़ें। नाइट्रोजन को टिंडा अवस्था तक 4–5 खुराक में बाँटें।
  sprayWaterLitresPerAcre: 200
  schedule:
    - stage:
        en: Basal (at sowing)
        hi: आधार (बुवाई के समय)
      timing:
        en: Day 0
        hi: दिन 0
      n: 24
      p: 60
      k: 30
    - stage:
        en: Thinning / early squaring
        hi: विरलन / प्रारंभिक डोडी
      timing:
        en: 30–35 days
        hi: 30–35 दिन
      n: 32
      p: 0
      k: 0
    - stage:
        en: Flowering
        hi: फूल अवस्था
      timing:
        en: 60–70 days
        hi: 60–70 दिन
      n: 32
      p: 0
      k: 30
    - stage:
        en: Peak boll development
        hi: चरम टिंडा विकास
      timing:
        en: 90–100 days
        hi: 90–100 दिन
      n: 32
      p: 0
      k: 0
  organic:
    en:
      - Apply 10–12 tonnes/ha of farmyard manure or compost before sowing.
      - Foliar sprays of 2% potassium nitrate at flowering and boll development improve boll retention.
      - Seed treatment with Azotobacter and PSB; grow a legume intercrop.
    hi:
      - बुवाई से पहले 10–12 टन/हे. गोबर खाद या कम्पोस्ट डालें।
      - फूल और टिंडा विकास पर 2% पोटैशियम नाइट्रेट का पर्ण छिड़काव टिंडा धारण बढ़ाता है।
      - एज़ोटोबैक्टर और PSB से बीज उपचार; दलहन अंतरफसल लगाएँ।
  soilTestNote:
    en: Magnesium and potassium deficiency (reddening of leaves) is common on light and sandy cotton soils late in the season. Boron shortage causes shedding.
    hi: हल्की और बलुई कपास मिट्टी पर मौसम के अंत में मैग्नीशियम और पोटैशियम की कमी (पत्तियों का लाल होना) आम है। बोरॉन की कमी से गिरना होता है।

pests:
  - name:
      en: Pink bollworm
      hi: गुलाबी सुंडी (गुलाबी इल्ली)
    identify:
      en: Small pink caterpillar inside green bolls and flowers. Flowers fail to open and look like a rosette; bolls have entry holes, cut seeds, and stained twisted lint.
      hi: हरे टिंडों और फूलों के अंदर छोटी गुलाबी सूँडी। फूल नहीं खुलते और रोज़ेट जैसे दिखते हैं; टिंडों में प्रवेश छिद्र, कटे बीज और दागी मुड़ी रुई।
    damage:
      en: The number one cotton pest today. Bt no longer reliably controls it. Direct loss of lint and seed weight plus quality downgrade.
      hi: आज कपास का नंबर एक कीट। Bt अब इसे भरोसेमंद ढंग से नियंत्रित नहीं करता। रुई और बीज वजन की सीधी हानि तथा गुणवत्ता में गिरावट।
    ipm:
      en:
        - Sow a short-duration crop early and terminate it by the state date — do not carry cotton into winter.
        - Pheromone traps from squaring (5/acre for monitoring, 8–10/acre for mass trapping); pick and destroy rosette flowers.
        - Release Trichogramma bactrae; spray neem or Bt on early larvae.
        - Grow the non-Bt refuge; do not ratoon; destroy stalks after final picking.
      hi:
        - कम अवधि की फसल जल्दी बोएँ और राज्य तिथि तक समाप्त करें — कपास को सर्दी में न ले जाएँ।
        - डोडी बनने से फेरोमोन ट्रैप (निगरानी हेतु 5/एकड़, सामूहिक जाल हेतु 8–10/एकड़); रोज़ेट फूल चुनकर नष्ट करें।
        - ट्राइकोग्रामा बैक्ट्रे छोड़ें; प्रारंभिक सूँडियों पर नीम या Bt छिड़कें।
        - गैर-Bt रेफ्यूज लगाएँ; रैटून न करें; अंतिम चुनाई के बाद डंठल नष्ट करें।
    chemical:
      en:
        - When trap catches and rosette counts cross the threshold, rotate recommended insecticides (e.g. thiodicarb, chlorpyrifos + cypermethrin, then an emamectin/flubendiamide group) — never repeat the same molecule.
        - Stop synthetic pyrethroid overuse; it flares whitefly and aphids.
      hi:
        - जब ट्रैप पकड़ और रोज़ेट गिनती सीमा पार करे, अनुशंसित कीटनाशक बदलें (जैसे थायोडिकार्ब, क्लोरपायरीफॉस + साइपरमेथ्रिन, फिर इमामेक्टिन/फ्लुबेंडायमाइड समूह) — कभी एक ही अणु न दोहराएँ।
        - सिंथेटिक पायरेथ्रॉइड का अति प्रयोग बंद करें; इससे सफेद मक्खी और माहू भड़कते हैं।
  - name:
      en: Whitefly
      hi: सफेद मक्खी
    identify:
      en: Tiny white moth-like insects on the leaf underside; fly up in a cloud when disturbed. Sticky honeydew, black sooty mould, and sometimes upward leaf curl.
      hi: पत्ती के नीचे छोटे सफेद पतंगे जैसे कीट; हिलाने पर बादल में उड़ते हैं। चिपचिपा मधुरस, काली फफूँद, कभी पत्ती का ऊपर मुड़ना।
    damage:
      en: Sap sucking weakens the plant; honeydew stains lint; transmits cotton leaf curl virus in north India.
      hi: रस चूसना पौधे को कमज़ोर करता है; मधुरस रुई पर दाग लगाता है; उत्तर भारत में कपास पर्ण मोड़ विषाणु फैलाता है।
    ipm:
      en:
        - Avoid pyrethroids and repeated broad-spectrum sprays early — they kill whitefly predators.
        - Yellow sticky traps; remove weed hosts (congress grass, wild sunflower); balanced nitrogen.
        - Neem oil and entomopathogenic fungi (Lecanicillium) on early populations.
      hi:
        - जल्दी पायरेथ्रॉइड और बार-बार व्यापक छिड़काव से बचें — ये सफेद मक्खी शिकारी मारते हैं।
        - पीले चिपचिपे ट्रैप; खरपतवार पोषक (गाजर घास, जंगली सूरजमुखी) हटाएँ; संतुलित नाइट्रोजन।
        - प्रारंभिक आबादी पर नीम तेल और कीटरोगजनक फफूँद (लेकानिसिलियम)।
    chemical:
      en:
        - At threshold, use recommended selective insecticides such as diafenthiuron, flonicamid or pyriproxyfen; rotate groups and spray the leaf underside.
      hi:
        - सीमा पर डायफेनथ्यूरॉन, फ्लोनिकामिड या पायरिप्रॉक्सीफेन जैसे अनुशंसित चयनात्मक कीटनाशक; समूह बदलें और पत्ती के नीचे छिड़कें।
  - name:
      en: Sucking pests — thrips, jassids, aphids
      hi: रस-चूसक कीट — थ्रिप्स, हरा तेला, माहू
    identify:
      en: Thrips scar young leaves silver; jassids (leafhoppers) cause leaf-edge cupping and bronzing ("hopper burn"); aphids curl tender shoots and leave honeydew.
      hi: थ्रिप्स युवा पत्तियों को चाँदी जैसा खुरचते हैं; हरा तेला पत्ती-किनारे को कटोरा और कांस्य ("हॉपर बर्न") बनाता है; माहू कोमल अंकुर मोड़ते और मधुरस छोड़ते हैं।
    damage:
      en: Mostly in the first 60 days. Stunts the crop and delays squaring if unchecked.
      hi: ज़्यादातर पहले 60 दिनों में। अनियंत्रित रहने पर फसल बौनी और डोडी बनने में देरी।
    ipm:
      en:
        - Seed already comes insecticide-treated — that covers the first 3–4 weeks. Do not add a soil or foliar systemic on top of it.
        - Conserve ladybirds, lacewings and Chrysoperla; use neem if needed.
      hi:
        - बीज पहले से कीटनाशक-उपचारित आता है — यह पहले 3–4 सप्ताह कवर करता है। इसके ऊपर मिट्टी या पर्ण प्रणालीगत न डालें।
        - लेडीबर्ड, लेसविंग और क्राइसोपर्ला संरक्षित करें; ज़रूरत हो तो नीम उपयोग करें।
    chemical:
      en:
        - Only above threshold (e.g. 2 jassids per leaf with visible symptoms), spray a recommended selective product; avoid pyrethroids.
      hi:
        - केवल सीमा से ऊपर (जैसे प्रति पत्ती 2 हरा तेला दिखते लक्षणों के साथ) अनुशंसित चयनात्मक उत्पाद छिड़कें; पायरेथ्रॉइड से बचें।

diseases:
  - name:
      en: Cotton leaf curl virus (CLCuV)
      hi: कपास पर्ण मोड़ विषाणु (CLCuV)
    identify:
      en: Leaves curl upward, veins thicken and darken on the underside, small leaf-like growths (enations) form on veins; plant stunts and sets few bolls. North-west India only.
      hi: पत्तियाँ ऊपर मुड़ती हैं, नीचे शिराएँ मोटी और गहरी होती हैं, शिराओं पर छोटे पत्ती जैसे उभार (एनेशन) बनते हैं; पौधा बौना और कम टिंडे। केवल उत्तर-पश्चिम भारत।
    damage:
      en: Whitefly-transmitted. Early infection can take 40–80% of yield; there is no cure once a plant is infected.
      hi: सफेद मक्खी से फैलता है। जल्दी संक्रमण 40–80% उपज ले सकता है; पौधा संक्रमित होने पर कोई इलाज नहीं।
    ipm:
      en:
        - Grow a resistant/tolerant variety — the only dependable control.
        - Sow early; control whitefly from the seedling stage; remove ratoon and volunteer cotton and weed hosts.
      hi:
        - प्रतिरोधी/सहनशील किस्म लगाएँ — एकमात्र भरोसेमंद नियंत्रण।
        - जल्दी बुवाई; अंकुर अवस्था से सफेद मक्खी नियंत्रण; रैटून और स्वयंजात कपास तथा खरपतवार पोषक हटाएँ।
    chemical:
      en:
        - No chemical acts on the virus. Manage the whitefly vector as above.
      hi:
        - कोई रसायन विषाणु पर काम नहीं करता। ऊपर बताए अनुसार सफेद मक्खी वाहक नियंत्रित करें।
  - name:
      en: Boll rot & Alternaria / bacterial blight
      hi: टिंडा सड़न और अल्टरनेरिया / जीवाणु अंगमारी
    identify:
      en: Angular water-soaked spots on leaves that dry brown; black or pink rot on bolls that fail to open; wet weather and dense canopy make it worse.
      hi: पत्तियों पर कोणीय जल-युक्त धब्बे जो भूरे सूखते हैं; न खुलने वाले टिंडों पर काली या गुलाबी सड़न; गीला मौसम और घना छत्र इसे बदतर बनाते हैं।
    damage:
      en: Direct loss of bolls and severe lint staining in a wet boll-opening period.
      hi: गीली टिंडा-खुलने अवधि में टिंडों की सीधी हानि और गंभीर रुई दाग।
    ipm:
      en:
        - Wider spacing and canopy management for air flow; balanced nitrogen; timely picking.
        - Manage bollworms — most boll rot enters through their holes.
      hi:
        - हवा के लिए चौड़ी दूरी और छत्र प्रबंधन; संतुलित नाइट्रोजन; समय पर चुनाई।
        - सुंडी नियंत्रित करें — अधिकांश टिंडा सड़न उनके छिद्रों से आती है।
    chemical:
      en:
        - A copper oxychloride or mancozeb spray at early boll set in a rot-prone, high-rainfall area, per label.
      hi:
        - सड़न-प्रवण, अधिक वर्षा क्षेत्र में प्रारंभिक टिंडा बनने पर कॉपर ऑक्सीक्लोराइड या मैन्कोज़ेब छिड़काव, लेबल अनुसार।

commonProblems:
  - symptom:
      en: Heavy flowering but most flowers and small bolls drop off
      hi: भारी फूल पर अधिकांश फूल और छोटे टिंडे गिर जाते हैं
    likelyCause:
      en: Moisture stress or waterlogging, cloudy weather, boron shortage, or bollworm damage
      hi: नमी तनाव या जलभराव, बादलयुक्त मौसम, बोरॉन की कमी, या सुंडी क्षति
    action:
      en: Keep even soil moisture at flowering, drain excess water, foliar spray 2% DAP + boron, monitor bollworm
      hi: फूल अवस्था में समान मिट्टी नमी रखें, अतिरिक्त पानी निकालें, 2% DAP + बोरॉन पर्ण छिड़काव, सुंडी निगरानी
  - symptom:
      en: Tall leafy plants with long gaps between fruiting branches and few bolls
      hi: लंबे पत्तेदार पौधे, फलदार शाखाओं के बीच लंबे अंतराल और कम टिंडे
    likelyCause:
      en: Excess nitrogen and water driving vegetative growth
      hi: अधिक नाइट्रोजन और पानी वानस्पतिक वृद्धि बढ़ा रहे हैं
    action:
      en: Cut nitrogen, apply a recommended growth regulator (mepiquat chloride) at squaring, allow mild moisture stress
      hi: नाइट्रोजन घटाएँ, डोडी बनने पर अनुशंसित वृद्धि नियामक (मेपिक्वाट क्लोराइड) दें, हल्का नमी तनाव होने दें
  - symptom:
      en: Leaves turn red or reddish-brown from the margins in the second half of the season
      hi: मौसम के दूसरे भाग में पत्तियाँ किनारों से लाल या लाल-भूरी हो जाती हैं
    likelyCause:
      en: Potassium or magnesium deficiency, common on light soils and a heavy boll load
      hi: पोटैशियम या मैग्नीशियम की कमी, हल्की मिट्टी और भारी टिंडा भार पर आम
    action:
      en: Apply full recommended MOP, foliar spray 2% potassium nitrate or 1% magnesium sulphate twice
      hi: पूरा अनुशंसित MOP दें, 2% पोटैशियम नाइट्रेट या 1% मैग्नीशियम सल्फेट पर्ण छिड़काव दो बार

sources:
  - "ICAR–Central Institute for Cotton Research (CICR), Nagpur — Cotton Production Guide"
  - "ICAR–CICR & Cotton Development Programme IPM advisories; pink bollworm management guidelines"
  - "State Agricultural University Package of Practices"
  - "CIB&RC approved label claims; state cotton stalk destruction / sowing window notifications"
lastReviewed: 2026-08-01
---

## Overview

Cotton is India's most important fibre crop and the mainstay of millions of dryland farmers
across Gujarat, Maharashtra, Telangana and the north-west. It is a long-season kharif crop —
five to six months in the field — which is both its strength and its danger: the longer it
stands, the more pest pressure it accumulates.

More than 90% of the area is under **Bt hybrids**, and understanding what that does and does
not do now matters enormously. Bt still controls the American bollworm, but **pink bollworm
has developed widespread resistance**, so the pest that most defines cotton economics today
must be managed the old way — with early short-duration sowing, pheromone traps from the
squaring stage, destroying rosette flowers, rotating insecticide groups, and above all
**ending the crop on time**: uprooting and destroying stalks after the final picking and
never ratooning, so the pink bollworm has nowhere to overwinter.

The other rule of thumb is **restraint with sprays early in the season**. Cotton has a large
natural enemy complex. Spraying broad-spectrum insecticides (especially pyrethroids) in the
first two months to knock down thrips and jassids destroys that complex and triggers
whitefly and aphid outbreaks later. Seed comes pre-treated for early sucking pests; let that
do its job.

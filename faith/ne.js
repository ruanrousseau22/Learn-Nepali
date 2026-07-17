/* ===== RELIGIOUS STUDIES · NEPALI (faith pack, July 2026) =====
   A bilingual story reader — NOT a lesson course. Two stories:
   - fstory  "God's Story"  — the whole biblical narrative in ten movements:
     creation & fellowship, the fall (fellowship broken), sin spreads, the
     covenant promises (Abraham, Exodus, David, the prophets), the wait, and
     Jesus — cross, resurrection, new creation — as the restoration of
     fellowship. Narrative framing informed by BibleProject (one unified
     story that leads to Jesus); content kept within orthodox (Nicene)
     Christianity. Every paragraph paraphrases — no Bible translation text
     is copied. References name the passages retold.
   - fjesus  "Jesus" — his life and the stories he told.
   Format: sections:[{t:english title, ne:nepali title,
     paras:[[nepali, roman, english, reference?]]}]
   Rules: Nepali strings must avoid ' " < > \\ (they ride inline onclick
   handlers — use dashes for speech, danda for sentence ends). High
   honorific (-नुभयो / हुनुहुन्छ) for God and Jesus throughout, as in the
   Nepali church and the Intensive track. Romanization follows the Nepali
   course style (aa/ee/oo doubling, sentence-capitalized). Vocabulary stays
   consistent with the Intensive track: परमेश्वर, येशू, पाप, विश्वास,
   प्रेम, मुक्ति, सुसमाचार, क्रूस, पवित्र आत्मा, प्रतिज्ञा, सङ्गति.
   Audio: clips live in audio-nef/ (extract with
   `osascript -l JavaScript extract_audio_strings.js nef`, then
   `python3 generate_audio.py --lang nef` — same Nepali voice as the course). */

registerFaith({code:'ne',
stories:[
{id:'fstory',title:'God’s Story',ne:'परमेश्वरको कथा',
intro:'One story runs from the first page of the Bible to the last: God made us for fellowship with himself, we broke it, and God — at great cost — made the way back. Read it in Nepali and English, and listen as you go.',
sections:[
{t:'In the beginning',ne:'सुरुमा',paras:[
['सुरुमा परमेश्वरले आकाश र पृथ्वी बनाउनुभयो। सबै कुरा असल थियो।','Surumaa Parameshwarle aakaash ra prithvi banaunubhayo. Sabai kuraa asal thiyo.','In the beginning God made the heavens and the earth. Everything he made was good.','Genesis 1'],
['परमेश्वरले मानिसलाई आफ्नै स्वरूपमा बनाउनुभयो — पुरुष र स्त्री।','Parameshwarle maanislaai aaphnai swaroopmaa banaunubhayo — purush ra stree.','God made human beings in his own image — male and female.','Genesis 1:27'],
['परमेश्वर मानिसहरूसँग बगैंचामा हिँड्नुहुन्थ्यो। मानिस र परमेश्वरको बीचमा मीठो सङ्गति थियो।','Parameshwar maanisharusanga bagainchaamaa hindnuhunthyo. Maanis ra Parameshwarko beechmaa meetho sangati thiyo.','God walked with the humans in the garden. There was sweet fellowship between humanity and God.','Genesis 2–3']]},
{t:'The break',ne:'सङ्गति भाँचियो',paras:[
['एउटा सर्पले झूट बोल्यो। मानिसहरूले परमेश्वरको वचन छोडेर सर्पको कुरामा विश्वास गरे।','Eutaa sarpale jhoot bolyo. Maanisharule Parameshwarko wachan chhodera sarpako kuraamaa vishwaas gare.','A serpent told a lie — and the humans left God’s word and trusted the snake instead.','Genesis 3:1–6'],
['परमेश्वरको आज्ञा नमान्नु नै पाप हो। पापले मानिस र परमेश्वरको सङ्गति भाँच्यो।','Parameshwarko aagyaa namaannu nai paap ho. Paaple maanis ra Parameshwarko sangati bhaanchyo.','Turning from God’s command — that is sin. And sin broke the fellowship between humanity and God.','Genesis 3:8–10'],
['मानिसहरू बगैंचाबाट टाढा गए। तर परमेश्वरले प्रतिज्ञा दिनुभयो — एक दिन एक जना उद्धारक आउनुहुनेछ।','Maanisharu bagainchaabaata taadhaa gae. Tara Parameshwarle pratigyaa dinubhayo — ek din ek janaa uddhaarak aaunuhunechha.','The humans went out from the garden. But God gave a promise: one day a Rescuer would come.','Genesis 3:15']]},
{t:'Sin spreads',ne:'पाप फैलियो',paras:[
['पाप संसारभरि फैलियो। मानिसको मन परमेश्वरबाट टाढा भयो।','Paap sansaarbhari phailiyo. Maanisko man Parameshwarbaata taadhaa bhayo.','Sin spread through the whole world, and the human heart drifted far from God.','Genesis 4–6'],
['तैपनि परमेश्वरले संसारलाई छोड्नुभएन। नोआको परिवारमाथि उहाँले अनुग्रह देखाउनुभयो।','Taipani Parameshwarle sansaarlaai chhodnubhaena. Noaako pariwaarmaathi uhaanle anugraha dekhaunubhayo.','Even so, God did not abandon the world. He showed grace to Noah and his family.','Genesis 6–9'],
['बाबेलमा मानिसहरूले आफ्नै नाम ठूलो बनाउन खोजे। तर परमेश्वरको योजना अझै अगाडि बढिरहेको थियो।','Baabelmaa maanisharule aaphnai naam thulo banaauna khoje. Tara Parameshwarko yojanaa ajhai agaadi badhiraheko thiyo.','At Babel people tried to make their own name great. But God’s plan kept moving forward.','Genesis 11']]},
{t:'A promise to Abraham',ne:'अब्राहामलाई प्रतिज्ञा',paras:[
['परमेश्वरले अब्राहामलाई बोलाउनुभयो — तिम्रो परिवारद्वारा संसारका सबै जातिले आशिष् पाउनेछन्।','Parameshwarle Abrahaamlaai bolaunubhayo — timro pariwaardwaaraa sansaarkaa sabai jaatile aashish paaunechhan.','God called Abraham: through your family, all the peoples of the earth will be blessed.','Genesis 12:1–3'],
['अब्राहामले परमेश्वरलाई विश्वास गरे, र परमेश्वरले उनलाई धर्मी ठहराउनुभयो।','Abrahaamle Parameshwarlaai vishwaas gare, ra Parameshwarle unlaai dharmi thaharaunubhayo.','Abraham trusted God — and God counted him as righteous.','Genesis 15:6'],
['यही एउटा परिवारबाट परमेश्वरको उद्धारको कथा अगाडि बढ्यो।','Yahi eutaa pariwaarbaata Parameshwarko uddhaarko kathaa agaadi badhyo.','From this one family, God’s rescue story moved forward.','Genesis 12–50']]},
{t:'Rescue from Egypt',ne:'मिश्रबाट छुटकारा',paras:[
['अब्राहामको परिवार मिश्रमा कमारा भयो। तिनीहरूले परमेश्वरलाई पुकारे, र उहाँले सुन्नुभयो।','Abrahaamko pariwaar Mishramaa kamaaraa bhayo. Tiniharule Parameshwarlaai pukaare, ra uhaanle sunnubhayo.','Abraham’s family became slaves in Egypt. They cried out to God — and he heard.','Exodus 2:23–25'],
['थुमाको रगतले तिनीहरूलाई मृत्युबाट बचायो। परमेश्वरले आफ्ना मानिसहरूलाई छुटाउनुभयो।','Thumaako ragatle tiniharulaai mrityubaata bachaayo. Parameshwarle aaphnaa maanisharulaai chhutaunubhayo.','The blood of a lamb sheltered them from death, and God set his people free.','Exodus 12'],
['परमेश्वरले तिनीहरूसँग करार बाँध्नुभयो र तिनीहरूकै बीचमा बास गर्नुभयो।','Parameshwarle tiniharusanga karaar baandhnubhayo ra tiniharukai beechmaa baas garnubhayo.','God made a covenant with them and came to dwell right among his people.','Exodus 19–40']]},
{t:'Kings and prophets',ne:'राजा र अगमवक्ताहरू',paras:[
['परमेश्वरले दाऊदलाई राजा बनाउनुभयो र प्रतिज्ञा दिनुभयो — तिम्रो वंशबाट एउटा अनन्त राजा आउनुहुनेछ।','Parameshwarle Daaudlaai raajaa banaunubhayo ra pratigyaa dinubhayo — timro wanshabaata eutaa ananta raajaa aaunuhunechha.','God made David king and promised: from your line will come a King whose kingdom never ends.','2 Samuel 7'],
['तर राजाहरू र मानिसहरू बारम्बार पापमा फर्के।','Tara raajaaharu ra maanisharu baarambaar paapmaa pharke.','But the kings and the people kept turning back to sin.','1–2 Kings'],
['अगमवक्ताहरूले भने — परमेश्वरले नयाँ करार बाँध्नुहुनेछ, र उहाँको सेवकले हाम्रो पाप बोक्नुहुनेछ।','Agamwaktaaharule bhane — Parameshwarle nayaan karaar baandhnuhunechha, ra uhaanko sewakle haamro paap boknuhunechha.','The prophets spoke of hope: God will make a new covenant, and his Servant will carry our sin.','Jeremiah 31 · Isaiah 53']]},
{t:'The long wait',ne:'लामो प्रतीक्षा',paras:[
['मानिसहरू आफ्नो देशबाट टाढा निर्वासनमा गए। सबै आशा हराएजस्तो देखियो।','Maanisharu aaphno deshbaata taadhaa nirwaasanmaa gae. Sabai aashaa haraaejasto dekhiyo.','The people were carried far from their land into exile. It looked as if all hope was lost.','2 Kings 25'],
['तैपनि तिनीहरूले पर्खिरहे — प्रतिज्ञा गरिएको उद्धारक, मसीह, कहिले आउनुहुन्छ?','Taipani tiniharule parkhirahe — pratigyaa garieko uddhaarak, Maseeh, kahile aaunuhunchha?','Still they waited: when would the promised Rescuer — the Messiah — come?','Isaiah 9:6–7'],
['चार सय वर्षसम्म सन्नाटा रह्यो। तर परमेश्वरले आफ्नो प्रतिज्ञा बिर्सनुभएको थिएन।','Chaar saya barshasamma sannaataa rahyo. Tara Parameshwarle aaphno pratigyaa birsanubhaeko thiena.','For four hundred years, silence. But God had not forgotten his promise.','Malachi → Matthew']]},
{t:'God with us',ne:'इम्मानुएल',paras:[
['अनि येशू जन्मनुभयो — इम्मानुएल, अर्थात् परमेश्वर हामीसँग।','Ani Yeshu janmanubhayo — Immaanuel, arthaat Parameshwar haamisanga.','Then Jesus was born — Immanuel, which means God with us.','Matthew 1:23'],
['परमेश्वर आफैँ मानिस बन्नुभयो र हाम्रै बीचमा बस्नुभयो।','Parameshwar aaphain maanis bannubhayo ra haamrai beechmaa basnubhayo.','God himself became human and made his home among us.','John 1:14'],
['येशूले परमेश्वरको राज्यको सुसमाचार सुनाउनुभयो र हराएकाहरूलाई खोज्नुभयो।','Yeshule Parameshwarko raajyako susamaachaar sunaunubhayo ra haraaekaaharulaai khojnubhayo.','Jesus announced the good news of God’s kingdom and went looking for the lost.','Luke 4 · Luke 19:10']]},
{t:'The cross and the empty tomb',ne:'क्रूस र रित्तो चिहान',paras:[
['क्रूसमा येशूले हाम्रो पाप आफैँमाथि लिनुभयो। उहाँ नै साँचो निस्तारको थुमा हुनुहुन्छ।','Kroosmaa Yeshule haamro paap aaphainmaathi linubhayo. Uhaan nai saancho nistaarko thumaa hunuhunchha.','On the cross Jesus took our sin upon himself. He is the true Passover Lamb.','Isaiah 53 · 1 Corinthians 5:7'],
['तेस्रो दिन येशू मृत्युबाट जीवित हुनुभयो। मृत्यु पराजित भयो।','Tesro din Yeshu mrityubaata jeewit hunubhayo. Mrityu paraajit bhayo.','On the third day Jesus rose from the dead. Death itself was defeated.','Luke 24'],
['अब परमेश्वरकहाँ फर्कने बाटो खुल्यो। भाँचिएको सङ्गति फेरि जोडियो।','Aba Parameshwarkahaan pharkane baato khulyo. Bhaanchieko sangati pheri jodiyo.','Now the way back to God stands open. The broken fellowship is joined again.','Romans 5:1–11']]},
{t:'New creation',ne:'नयाँ सृष्टि',paras:[
['येशूले आफ्ना चेलाहरूलाई पवित्र आत्मा दिनुभयो र संसारभरि पठाउनुभयो।','Yeshule aaphnaa chelaaharulaai Pawitra Aatmaa dinubhayo ra sansaarbhari pathaunubhayo.','Jesus gave his followers the Holy Spirit and sent them out into all the world.','Acts 1–2'],
['एक दिन येशू फेरि आउनुहुनेछ। परमेश्वरले नयाँ आकाश र नयाँ पृथ्वी बनाउनुहुनेछ।','Ek din Yeshu pheri aaunuhunechha. Parameshwarle nayaan aakaash ra nayaan prithvi banaunuhunechha.','One day Jesus will come again, and God will make a new heaven and a new earth.','Revelation 21:1'],
['त्यहाँ परमेश्वर आफ्ना मानिसहरूसँग बास गर्नुहुनेछ। न आँसु, न मृत्यु — सङ्गति सधैँको लागि।','Tyahaan Parameshwar aaphnaa maanisharusanga baas garnuhunechha. Na aansu, na mrityu — sangati sadhainko laagi.','There God will dwell with his people. No more tears, no more death — fellowship forever.','Revelation 21:3–4'],
['यो कथा तपाईंको पनि हुन सक्छ। येशूमा विश्वास गर्नुहोस्, र घर फर्कनुहोस्।','Yo kathaa tapaainko pani huna sakchha. Yeshumaa vishwaas garnuhos, ra ghar pharkanuhos.','This story can be yours too. Believe in Jesus, and come home.','John 3:16']]}
]},

{id:'fjesus',title:'Jesus',ne:'येशू',
intro:'The center of the story: the life of Jesus and the stories he told — from the manger to the empty tomb.',
sections:[
{t:'The birth',ne:'जन्म',paras:[
['गब्रिएल स्वर्गदूतले मरियमलाई भने — तिमीले एउटा छोरो जन्माउनेछ्यौ, र उहाँको नाम येशू राख्नू।','Gabriel swargadootle Mariyamlaai bhane — timile eutaa chhoro janmaunechhyau, ra uhaanko naam Yeshu raakhnu.','The angel Gabriel told Mary: you will have a son, and you are to name him Jesus.','Luke 1:26–33'],
['येशू बेथलेहेममा जन्मनुभयो — सानो गाउँ, सानो डुँड। गोठालाहरू पहिलो पाहुना भए।','Yeshu Bethlehemmaa janmanubhayo — saano gaaun, saano dund. Gothaalaaharu pahilo paahunaa bhae.','Jesus was born in Bethlehem — a small town, a humble manger. Shepherds were the first visitors.','Luke 2'],
['येशू नामको अर्थ यही हो — उहाँले आफ्ना मानिसहरूलाई तिनीहरूका पापबाट बचाउनुहुनेछ।','Yeshu naamko artha yahi ho — uhaanle aaphnaa maanisharulaai tiniharukaa paapbaata bachaunuhunechha.','The name Jesus carries his mission: he will save his people from their sins.','Matthew 1:21']]},
{t:'Baptism and the wilderness',ne:'बप्तिस्मा र उजाडस्थान',paras:[
['यूहन्नाले येशूलाई नदीमा बप्तिस्मा दिए। आकाशबाट आवाज आयो — यिनी मेरा प्रिय पुत्र हुन्।','Yuhannaale Yeshulaai nadeemaa baptismaa die. Aakaashbaata aawaaj aayo — yini meraa priya putra hun.','John baptized Jesus in the river, and a voice came from heaven: this is my beloved Son.','Matthew 3:13–17'],
['उजाडस्थानमा शैतानले येशूलाई परीक्षा गर्यो। तर आदमजस्तो होइन — येशूले जित्नुभयो।','Ujaadsthaanmaa shaitaanle Yeshulaai parikshaa garyo. Tara Aadamjasto hoina — Yeshule jitnubhayo.','In the wilderness Satan tested Jesus. But where Adam fell, Jesus stood firm and won.','Matthew 4:1–11']]},
{t:'The kingdom announced',ne:'राज्यको सुसमाचार',paras:[
['येशूले भन्नुभयो — परमेश्वरको राज्य नजिकै आएको छ। फर्केर आओ र सुसमाचारमा विश्वास गर।','Yeshule bhannubhayo — Parameshwarko raajya najikai aaeko chha. Pharkera aau ra susamaachaarmaa vishwaas gara.','Jesus announced: the kingdom of God has come near. Turn around, and believe the good news.','Mark 1:15'],
['उहाँले गरिबहरूलाई, बिरामीहरूलाई र पापीहरूलाई नजिक बोलाउनुभयो।','Uhaanle garibharulaai, biraamiharulaai ra paapiharulaai najik bolaunubhayo.','He called the poor, the sick and the sinners near — the very people others pushed away.','Luke 5:27–32']]},
{t:'Power and compassion',ne:'शक्ति र दया',paras:[
['येशूले बिरामीलाई निको पार्नुभयो र अन्धालाई देख्ने बनाउनुभयो।','Yeshule biraamilaai niko paarnubhayo ra andhaalaai dekhne banaunubhayo.','Jesus healed the sick and gave the blind their sight.','Matthew 9'],
['उहाँले आँधीलाई शान्त पार्नुभयो। चेलाहरूले सोधे — यिनी को हुन्?','Uhaanle aandhilaai shaanta paarnubhayo. Chelaaharule sodhe — yini ko hun?','He calmed a storm with a word. His disciples asked each other: who IS this?','Mark 4:35–41'],
['पाँचवटा रोटी र दुईवटा माछाले उहाँले हजारौंलाई खुवाउनुभयो।','Paanchwataa roti ra duiwataa maachhaale uhaanle hajaraunlaai khuwaunubhayo.','With five loaves and two fish he fed thousands.','John 6:1–14']]},
{t:'The lost son',ne:'हराएको छोरा',paras:[
['येशूले कथा भन्नुभयो — एउटा छोराले बुबाको सम्पत्ति लिएर टाढा गयो र सबै उडायो।','Yeshule kathaa bhannubhayo — eutaa chhoraale bubaako sampatti liera taadhaa gayo ra sabai udaayo.','Jesus told a story: a son took his father’s wealth, went far away, and wasted it all.','Luke 15:11–16'],
['छोरो घर फर्कंदा बुबा दौडेर आए र अँगालो हाले।','Chhoro ghar pharkandaa bubaa daudera aae ra angaalo haale.','When the son came home, the father RAN to him and threw his arms around him.','Luke 15:20–24'],
['परमेश्वरको हृदय त्यस्तै छ — फर्कने हरेकलाई उहाँले खुशीसाथ ग्रहण गर्नुहुन्छ।','Parameshwarko hridaya tyastai chha — pharkane hareklaai uhaanle khushisaath grahan garnuhunchha.','That is the heart of God: he joyfully welcomes everyone who comes home.','Luke 15']]},
{t:'The good Samaritan',ne:'असल सामरी',paras:[
['कसैले सोध्यो — मेरो छिमेकी को हो? येशूले कथाले जवाफ दिनुभयो।','Kasaile sodhyo — mero chhimeki ko ho? Yeshule kathaale jawaaph dinubhayo.','Someone asked Jesus: who is my neighbor? He answered with a story.','Luke 10:25–29'],
['बाटोमा घाइते मानिसलाई धर्मगुरुहरूले छोडे। तर एक जना सामरीले रोकिएर उसको हेरचाह गरे।','Baatomaa ghaaite maanislaai dharmaguruharule chhode. Tara ek janaa Saamarile rokiera usko herchaah gare.','Religious leaders passed the wounded man by. But a Samaritan — an outsider — stopped and cared for him.','Luke 10:30–35'],
['येशूले भन्नुभयो — जाओ, तिमी पनि त्यस्तै गर।','Yeshule bhannubhayo — jaau, timi pani tyastai gara.','Jesus said: go and do the same.','Luke 10:37']]},
{t:'The cross',ne:'क्रूस',paras:[
['आफ्ना साथीहरूका लागि ज्यान दिनुभन्दा ठूलो प्रेम अरू छैन — अनि येशूले त्यही गर्नुभयो।','Aaphnaa saathiharukaa laagi jyaan dinubhandaa thulo prem aru chhaina — ani Yeshule tyahi garnubhayo.','There is no greater love than to lay down your life for your friends — and that is exactly what Jesus did.','John 15:13'],
['क्रूसमा उहाँले प्रार्थना गर्नुभयो — पिता, यिनीहरूलाई क्षमा गर्नुहोस्।','Kroosmaa uhaanle praarthanaa garnubhayo — Pitaa, yiniharulaai kshamaa garnuhos.','From the cross he prayed: Father, forgive them.','Luke 23:34'],
['उहाँले भन्नुभयो — सिद्धियो। हाम्रो पापको मोल पूरा तिरियो।','Uhaanle bhannubhayo — siddhiyo. Haamro paapko mol puraa tiriyo.','He said: it is finished. The price of our sin was fully paid.','John 19:30']]},
{t:'He is risen',ne:'जीवित हुनुहुन्छ',paras:[
['आइतबार बिहान चिहान रित्तो थियो। येशू जीवित हुनुभएको थियो।','Aaitabaar bihaana chihaan ritto thiyo. Yeshu jeewit hunubhaeko thiyo.','On Sunday morning the tomb was empty. Jesus was alive.','Luke 24:1–8'],
['उहाँले चेलाहरूलाई भन्नुभयो — जाओ, सबै जातिहरूलाई मेरा चेला बनाओ। म सधैँ तिमीहरूसँग छु।','Uhaanle chelaaharulaai bhannubhayo — jaau, sabai jaatiharulaai meraa chelaa banaau. Ma sadhain timiharusanga chhu.','He told his followers: go, make disciples of all nations — and remember, I am with you always.','Matthew 28:18–20'],
['आज पनि येशू जीवित हुनुहुन्छ, र उहाँले तपाईंलाई बोलाउनुहुन्छ।','Aaja pani Yeshu jeewit hunuhunchha, ra uhaanle tapaainlaai bolaunuhunchha.','Jesus is alive today — and he is calling you.','Revelation 3:20']]}
]}
]});

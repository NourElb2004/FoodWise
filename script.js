// All interface copy lives here; user-entered food names stay as entered.
const translations = {
wastedCardTitle:{"ar": "طعام مُهدر", "en": "Food wasted"},
wasteBadge:{"ar": "نتعلم ونقلل الهدر", "en": "Track & improve"},
wasteHistoryTitle:{"ar": "نتعلم من اللي اتهدر", "en": "Learn from what was wasted"},
wasteHistoryHelp:{"ar": "كل عنصر اتهدر فرصة نغير عادة صغيرة المرة الجاية.", "en": "Every wasted item is a chance to try a small change next time."},
wasteEmpty:{"ar": "العناصر اللي تسجلها كمُهدرة هتظهر هنا مع نصيحة مناسبة.", "en": "Items you mark as wasted will appear here with a practical prevention tip."},
preventNext:{"ar": "المرة الجاية جرّب", "en": "Next time, try this"},
wastedOn:{"ar": "تم تسجيل الهدر في {date}", "en": "Recorded as wasted on {date}"},

monogramUN:{"ar": "UN", "en": "UN"},
monogramUNEP:{"ar": "UNEP", "en": "UNEP"},
monogramFAO:{"ar": "FAO", "en": "FAO"},
domainUN:{"ar": "sdgs.un.org", "en": "sdgs.un.org"},
domainUNEP:{"ar": "unep.org", "en": "unep.org"},
domainFAO:{"ar": "fao.org", "en": "fao.org"},
quizViewResult:{"ar": "شوف نتيجتك ↗", "en": "View my result ↗"},
quizContinue:{"ar": "كمّل اللعبة ↗", "en": "Continue quiz ↗"},
quizClose:{"ar": "إغلاق اللعبة", "en": "Close quiz"},
waste:{"ar": "تم إهداره", "en": "Mark as wasted"},
wasted:{"ar": "تم تسجيل العنصر كطعام مُهدر، دون إضافته للطعام المنقذ.", "en": "Item recorded as wasted. It has not been added to food saved."},
wasteLabel:{"ar": "طعام تم إهداره", "en": "Food recorded as wasted"},
wasteTotal:{"ar": "{kg} كجم", "en": "{kg} kg"},
wasteHelp:{"ar": "انتهاء الصلاحية لا يسجل هدرًا تلقائيًا. استخدم «تم إهداره» إذا تخلصت من العنصر.", "en": "Passing the use-by date does not automatically count as waste. Mark an item as wasted if you discard it."},
expiredAction:{"ar": "تجاوز هذا العنصر تاريخ الصلاحية. إذا تخلصت منه، سجله كطعام مُهدر.", "en": "This item is past its use-by date. If you discard it, record it as wasted."},

multiHint:{"ar": "اختار كل اللي ينطبق عليك.", "en": "Select all that apply."},
singleHint:{"ar": "اختار إجابة واحدة الأقرب لعادتك.", "en": "Choose the one answer closest to your habit."},
selectionCount:{"ar": "تم اختيار {n}", "en": "{n} selected"},
selectionJoin:{"ar": "، ", "en": ", "},
resourcesTitle:{"ar": "أفكار صغيرة. فرق يستاهل.", "en": "Little ideas. A difference that matters."},
resourcesIntro:{"ar": "نصائح عملية لتقليل هدر الطعام من مصادر الأمم المتحدة. افتح أي بطاقة واكتشف خطوات تقدر تبدأ بيها النهارده.", "en": "Practical food-waste ideas from UN sources. Open a card for steps you can try today."},
sourceFAOTitle:{"ar": "منظمة الأغذية والزراعة", "en": "Food and Agriculture Organization"},
sourceFAOText:{"ar": "أفكار للتخطيط والتسوق واستخدام الطعام الموجود عندك.", "en": "Ideas for planning, shopping and making use of food you already have."},
sourceUNEPTitle:{"ar": "برنامج الأمم المتحدة للبيئة", "en": "UN Environment Programme"},
sourceUNEPText:{"ar": "خطوات بسيطة للتعامل مع الكميات والبواقي وتقليل الهدر.", "en": "Simple steps for portions, leftovers and everyday waste prevention."},
sourceSDGTitle:{"ar": "الأمم المتحدة — أهداف التنمية المستدامة", "en": "United Nations — Sustainable Development Goals"},
sourceSDGText:{"ar": "اعرف أكتر عن أهداف التنمية المستدامة ٢ و١٢ و١٣.", "en": "Explore Sustainable Development Goals 2, 12 and 13."},
sourceOpen:{"ar": "افتح المصدر الرسمي ↗", "en": "Open official resource ↗"},
sourceOrgFAO:{"ar": "منظمة الأغذية والزراعة · FAO", "en": "Food and Agriculture Organization · FAO"},
sourceOrgUNEP:{"ar": "برنامج الأمم المتحدة للبيئة · UNEP", "en": "UN Environment Programme · UNEP"},
sourceOrgUN:{"ar": "الأمم المتحدة · UN", "en": "United Nations · UN"},

quizEyebrow:{"ar": "العب. اكتشف. غيّر عادة.", "en": "PLAY. DISCOVER. TRY ONE CHANGE."},
quizTitle:{"ar": "إيه بصمتك الغذائية؟", "en": "What’s your Foodprint?"},
quizIntro:{"ar": "٧ أسئلة خفيفة عن أكلك وتسوقك. اكتشف نمطك وخد أفكار بسيطة تناسب عاداتك وتقلل الهدر.", "en": "Seven quick questions about eating and shopping. Discover your habit style and get simple ideas to waste less."},
quizStart:{"ar": "يلا نلعب ↗", "en": "Let’s play ↗"},
quizLink:{"ar": "اكتشف نمطك ✦", "en": "Find your Foodprint ✦"},
quizTime:{"ar": "حوالي دقيقتين · مفيش إجابات محرجة", "en": "About 2 minutes · No judgment"},
quizProgress:{"ar": "السؤال {n} من {total}", "en": "Question {n} of {total}"},
quizNext:{"ar": "التالي ←", "en": "Next →"},
quizBack:{"ar": "السابق", "en": "Back"},
quizFinish:{"ar": "اكتشف نتيجتي ✦", "en": "Reveal my result ✦"},
quizRetake:{"ar": "العب من جديد", "en": "Play again"},
quizResult:{"ar": "بصمتك الغذائية", "en": "Your Foodprint"},
quizScore:{"ar": "{n} / ١٠٠ نقطة عادات", "en": "{n} / 100 habit points"},
quizScoreHelp:{"ar": "النقاط مبنية على ٥ أسئلة عن التخطيط والحصص والبواقي والصلاحية والعبوات. أسئلة نوع الطعام مفيهاش نقاط.", "en": "Points come from 5 questions about planning, portions, leftovers, dates and packaging. Food-type questions carry no points."},
quizAdvice:{"ar": "خطوتك الجاية تبدأ من هنا", "en": "Your next little wins"},
quizChallenge:{"ar": "تحدي الأسبوع", "en": "This week’s challenge"},
quizChallengeText:{"ar": "قبل التسوق الجاي، اختر ٣ أصناف موجودة عندك وخطط لاستخدامها في وجبات الأسبوع.", "en": "Before your next shop, pick 3 items you already have and plan to use them in this week’s meals."},
quizSaveError:{"ar": "تعذر حفظ تقدم اللعبة؛ تقدر تكمل في الجلسة دي.", "en": "Could not save quiz progress; you can still play in this session."},
quizPattern:{"ar": "اختياراتك عن الطعام", "en": "Your food choices"},
quizPatternLine:{"ar": "{label}: {value}", "en": "{label}: {value}"},
quizWasteLabel:{"ar": "الطعام اللي بتحب تقلل هدره", "en": "Food you want to waste less"},
quizMealLabel:{"ar": "نمط وجباتك المعتاد", "en": "Your usual meal style"},
profileStarter:{"ar": "مستكشف البدايات ✦", "en": "Fresh-start explorer ✦"},
profileStarterText:{"ar": "قدامك فرص لطيفة لتوفير الطعام. اختار عادة واحدة صغيرة وابدأ بيها الأسبوع ده.", "en": "You have room for some satisfying small wins. Pick one manageable habit to try this week."},
profileMindful:{"ar": "صاحب اللقمة الواعية ♡", "en": "Mindful meal maker ♡"},
profileMindfulText:{"ar": "عندك عادات كويسة بالفعل. شوية تنظيم للبواقي والتسوق ممكن يخلوا فرقك أكبر.", "en": "You already have some useful habits. A little more consistency with shopping and leftovers can build on them."},
profileHero:{"ar": "بطل كل لقمة ★", "en": "Every-bite hero ★"},
profileHeroText:{"ar": "إجاباتك بتبين اهتمامًا بالتخطيط وتقليل الهدر. حافظ على عاداتك وشارك فكرة مفيدة مع اللي حواليك.", "en": "Your answers suggest you plan ahead and pay attention to waste. Keep those habits going and share one useful idea with someone."},
qShop:{"ar": "لما تروح تشتري أكل، غالبًا بتعمل إيه؟", "en": "When you shop for food, what usually happens?"},
shop0:{"ar": "بختار اللي يعجبني من غير خطة", "en": "I choose what catches my eye"},
shop1:{"ar": "بيبقى عندي فكرة عامة عن اللي محتاجه", "en": "I have a rough idea of what I need"},
shop2:{"ar": "براجع الموجود وبكتب قائمة", "en": "I check what I have and make a list"},
qPortions:{"ar": "لما تحضر أو تطلب وجبة، الكمية بتكون إزاي؟", "en": "When you cook or order, how do you choose the amount?"},
portions0:{"ar": "غالبًا أكتر من اللي هيتاكل", "en": "Usually more than we’ll eat"},
portions1:{"ar": "أحيانًا مناسبة وأحيانًا بتزيد", "en": "Sometimes right, sometimes too much"},
portions2:{"ar": "ببدأ بكمية مناسبة وبزود لو احتجت", "en": "I start with enough and add more if needed"},
qLeftovers:{"ar": "لو فيه أكل فاضل، إيه اللي بيحصل غالبًا؟", "en": "What usually happens to your leftovers?"},
leftovers0:{"ar": "بنساه لحد ما أضطر أرميه", "en": "I forget it until it gets thrown away"},
leftovers1:{"ar": "بحاول أستخدمه بس مش دايمًا", "en": "I try to use it, but not consistently"},
leftovers2:{"ar": "بخطط له في وجبة جاية أو أحفظه مناسبًا", "en": "I plan another meal around it or store it appropriately"},
qDates:{"ar": "بتتابع تواريخ الصلاحية إزاي؟", "en": "How do you keep track of use-by dates?"},
dates0:{"ar": "غالبًا باكتشفها متأخر", "en": "I often notice too late"},
dates1:{"ar": "براجعها من وقت للتاني", "en": "I check from time to time"},
dates2:{"ar": "بحط الأقرب انتهاءً قدام وبخطط لاستخدامه", "en": "I put the earliest dates first and plan to use them"},
qPackaging:{"ar": "وأنت بتختار حجم العبوة، إيه الأقرب لعادتك؟", "en": "How do you choose package sizes?"},
packaging0:{"ar": "العبوة الأكبر حتى لو مش هستخدمها كلها", "en": "The biggest pack, even if I may not finish it"},
packaging1:{"ar": "بوازن بين السعر والكمية أحيانًا", "en": "I sometimes balance price and the amount needed"},
packaging2:{"ar": "بختار كمية هستخدمها وأقلل التغليف لما يناسب", "en": "I choose an amount I’ll use and reduce packaging when practical"},
qWaste:{"ar": "أنهي نوع نفسك تقلل هدره أكتر؟", "en": "Which food would you most like to waste less?"},
wasteCooked:{"ar": "وجبات مطبوخة وبواقي", "en": "Cooked meals & leftovers"},
wasteProduce:{"ar": "فواكه وخضروات", "en": "Fruit & vegetables"},
wasteBakery:{"ar": "خبز ومعجنات", "en": "Bread & pastries"},
wastePackaged:{"ar": "سناكس وحلويات وأطعمة معبأة", "en": "Snacks, sweets & packaged food"},
wasteDrink:{"ar": "مشروبات وألبان", "en": "Drinks & dairy"},
wasteOther:{"ar": "مش متأكد / أصناف متنوعة", "en": "Not sure / a mix of foods"},
qMeals:{"ar": "إيه الأقرب لوجباتك المعتادة؟", "en": "What best describes your usual meals?"},
mealHome:{"ar": "أكل بيتي أغلب الوقت", "en": "Mostly home-cooked meals"},
mealTakeaway:{"ar": "طلبات ومطاعم أغلب الوقت", "en": "Mostly takeaway & restaurant meals"},
mealConvenience:{"ar": "وجبات سريعة التحضير وسناكس", "en": "Mostly convenience foods & snacks"},
mealMixed:{"ar": "مزيج متنوع", "en": "A mix of different meals"},
adviceShop:{"ar": "راجع مخزنك قبل التسوق واكتب قائمة لوجبات هتعملها فعلًا، عشان تقلل الشراء المكرر.", "en": "Check your pantry and make a list for meals you actually plan to cook, to avoid duplicate purchases."},
advicePortions:{"ar": "ابدأ بكمية أصغر تناسب عدد الأشخاص، وخلي الزيادة حسب الحاجة بدل طبق كبير يتبقى منه كتير.", "en": "Start with portions that fit the number of people, and serve more if needed rather than overfilling plates."},
adviceLeftovers:{"ar": "خصص وجبة في خطتك للبواقي اللي ما زالت مناسبة للأكل، بدل ما تشتري وجبة جديدة وتنساها.", "en": "Plan a meal around leftovers that are still suitable to eat, so they replace another purchase rather than being forgotten."},
adviceDates:{"ar": "رتب المخزن بحيث الأقرب انتهاءً قدام، وراجع القائمة في غذاء بوعي قبل اختيار وجبتك.", "en": "Put items with the earliest use-by dates at the front and check your FoodWise list before choosing a meal."},
advicePackaging:{"ar": "اختار حجم عبوة هتقدر تخلصه، بدل عرض كبير يزود الهدر. قلل التغليف الزائد لما يكون مناسبًا.", "en": "Choose a pack you can finish rather than a bulk offer that creates waste. Avoid extra packaging when practical."},
tipCooked:{"ar": "حدد حصة مناسبة قبل الطبخ، وسجل البواقي وتاريخها في غذاء بوعي لتدخل ضمن خطة الوجبات.", "en": "Choose portions before cooking and log leftovers with their dates in FoodWise so they stay in your meal plan."},
tipProduce:{"ar": "اشتري من الأصناف الطازجة كميات هتستخدمها قريبًا، وابدأ بالموجود قبل إضافة مشتريات جديدة.", "en": "Buy amounts of fresh produce you expect to use soon, and plan around what you already have."},
tipBakery:{"ar": "اشتري عدد القطع المناسب لاحتياجك، وراجع الخبز الموجود قبل شراء دفعة جديدة.", "en": "Buy the number of pieces you need and check your existing bread before buying another batch."},
tipPackaged:{"ar": "راجع العبوات المفتوحة أولًا، وخليها ظاهرة قبل فتح عبوة جديدة من نفس الصنف.", "en": "Keep opened packs visible and check them before opening another pack of the same food."},
tipDrink:{"ar": "اختار حجم زجاجة أو عبوة يناسب استهلاكك، وسجل تاريخ الفتح وتعليمات الحفظ على العبوة.", "en": "Choose a bottle or carton size you can finish, and note its opening date and label storage instructions."},
tipOther:{"ar": "راقب اللي بيتبقى عندك خلال الأسبوع وسجله، عشان تعرف أول فئة محتاجة تعديل في الكمية.", "en": "Notice and log what is left over during the week, to find the first category where quantities could change."},
mealTipHome:{"ar": "قبل طبخة جديدة، شوف مكونات موجودة تقدر تدخلها فيها بدل شراء كل المكونات من جديد.", "en": "Before cooking, look for ingredients you already have that can fit the meal."},
mealTipTakeaway:{"ar": "راجع عدد الوجبات وحجم الطلب مع اللي هياكلوا معاك قبل تأكيد طلب المطعم.", "en": "Check portions and the number of people eating before confirming a restaurant order."},
mealTipConvenience:{"ar": "رتب السناكس والوجبات الجاهزة حسب تاريخ الصلاحية، وحدد الموجود قبل إضافة أصناف جديدة.", "en": "Sort snacks and ready meals by their dates and check what you already have before adding more."},
mealTipMixed:{"ar": "خلي عندك خطة مرنة تجمع بين الأكل البيتي والخروج، عشان متشتريش لوجبة مش هتتعمل.", "en": "Keep a flexible plan for home meals and eating out, so you don’t buy ingredients for meals you won’t make."},
 noCharity:{"ar": "لا توجد جهات تطابق البحث.", "en": "No matching organizations."},
 charityCount:{"ar": "{n} جهات متاحة للاستفسار", "en": "{n} organizations to contact"},
 charitySearchPlaceholder:{"ar": "مثل: الإسكندرية، إطعام، مصر الخير", "en": "e.g. Alexandria, meals, Misr El Kheir"},
 charitySearch:{"ar": "ابحث عن جهة أو منطقة", "en": "Search organizations or areas"},
 sizeLine:{"ar": "{size} {unit} لكل وحدة", "en": "{size} {unit} per unit"},
 detailLine:{"ar": "{label}: {value}", "en": "{label}: {value}"},
 massLine:{"ar": "وزن حساب الأثر التقريبي: {kg} كجم", "en": "Illustrative impact weight: {kg} kg"},
 amountDate:{"ar": "{amount} {unit} · {date}", "en": "{amount} {unit} · {date}"},
 expiryHelp:{"ar": "أدخل التاريخ المناسب حسب العبوة والتحضير والحفظ. التطبيق لا يحدد صلاحية الطعام تلقائيًا.", "en": "Use the date appropriate to the label, preparation and storage. The app does not determine food safety or shelf life."},
 detailsTitle:{"ar": "تفاصيل مناسبة للفئة", "en": "Category details"},
 notes:{"ar": "ملاحظات (اختياري)", "en": "Notes (optional)"},
 allergens:{"ar": "المكونات / مسببات الحساسية (اختياري)", "en": "Ingredients / allergens (optional)"},
 thawed:{"ar": "تم فك التجميد", "en": "Thawed"},
 stillFrozen:{"ar": "ما زال مجمدًا", "en": "Still frozen"},
 frozenState:{"ar": "حالة التجميد", "en": "Freezing condition"},
 ready:{"ar": "مطهية / جاهزة للأكل", "en": "Cooked / ready to eat"},
 dry:{"ar": "جافة", "en": "Dry"},
 stapleState:{"ar": "حالة المكونات", "en": "Ingredient condition"},
 cookedState:{"ar": "مطهو", "en": "Cooked"},
 raw:{"ar": "نيء", "en": "Raw"},
 proteinState:{"ar": "حالة البروتين", "en": "Protein condition"},
 cut:{"ar": "مقطعة", "en": "Cut"},
 whole:{"ar": "كاملة", "en": "Whole"},
 produceState:{"ar": "حالة الفواكه / الخضروات", "en": "Produce condition"},
 unpackaged:{"ar": "بدون عبوة", "en": "Unpackaged"},
 opened:{"ar": "مفتوحة", "en": "Opened"},
 sealed:{"ar": "مغلقة", "en": "Sealed"},
 seal:{"ar": "حالة العبوة", "en": "Package condition"},
 frozen:{"ar": "في الفريزر", "en": "Frozen"},
 chilled:{"ar": "في الثلاجة", "en": "Refrigerated"},
 room:{"ar": "في درجة حرارة الغرفة", "en": "Room temperature"},
 chooseOne:{"ar": "اختر...", "en": "Choose..."},
 storage:{"ar": "طريقة الحفظ", "en": "Storage"},
 openedDate:{"ar": "تاريخ الفتح (اختياري)", "en": "Opened on (optional)"},
 preparedDate:{"ar": "تاريخ التحضير / الطهي", "en": "Prepared / cooked on"},
 dateError:{"ar": "أدخل تاريخًا صحيحًا لا يتجاوز اليوم أو تاريخ الصلاحية.", "en": "Enter a valid date no later than today or the use-by date."},
 detailError:{"ar": "أكمل هذا الحقل.", "en": "Please complete this field."},
 wholeError:{"ar": "أدخل عددًا صحيحًا أكبر من صفر.", "en": "Enter a whole number greater than zero."},
 sizeError:{"ar": "أدخل وزنًا أو حجمًا صحيحًا أكبر من صفر.", "en": "Enter a valid weight or volume greater than zero."},
 unitError:{"ar": "اختر وحدة مناسبة للفئة.", "en": "Choose a valid unit for this category."},
 liquidHelp:{"ar": "لحساب الأثر التقريبي فقط، نعتبر كل لتر ≈ ١ كجم. الكثافة الفعلية تختلف حسب المشروب.", "en": "For illustrative impact only, 1 litre is treated as ≈ 1 kg. Actual drink density varies."},
 sizeHelp:{"ar": "استخدم الوزن الصافي على العبوة أو وزن الحصة بعد استبعاد الوعاء.", "en": "Use the net label weight or weigh a portion without its container."},
 sizeVolume:{"ar": "حجم الزجاجة بالملليلتر", "en": "Volume per bottle in ml"},
 sizeWeight:{"ar": "الوزن الصافي للوحدة الواحدة (جرام)", "en": "Net weight per unit (grams)"},
 canUnit:{"ar": "علبة / برطمان", "en": "cans / jars"},
 bottleUnit:{"ar": "زجاجة", "en": "bottles"},
 packUnit:{"ar": "عبوة", "en": "packs"},
 pieceUnit:{"ar": "قطعة", "en": "pieces"},
 portionUnit:{"ar": "حصة", "en": "portions"},
 mlUnit:{"ar": "ملليلتر", "en": "millilitres"},
 lUnit:{"ar": "لتر", "en": "litres"},
 gUnit:{"ar": "جرام", "en": "grams"},
 kgUnit:{"ar": "كيلوجرام", "en": "kilograms"},
 unitLabel:{"ar": "وحدة القياس", "en": "Unit"},
 quantityLabel:{"ar": "الكمية ({unit})", "en": "Quantity ({unit})"},
 cookedType:{"ar": "وجبات جاهزة وأكل بيتي", "en": "Prepared & home-cooked meals"},
 sweetsType:{"ar": "حلويات وشوكولاتة", "en": "Desserts & chocolate"},
 snacksType:{"ar": "تسالي وشيبسي", "en": "Snacks & crisps"},
 bakeryType:{"ar": "خبز ومعجنات", "en": "Bread & pastries"},
 dairyType:{"ar": "ألبان وأجبان وبيض", "en": "Dairy, cheese & eggs"},
 produceType:{"ar": "فواكه وخضروات طازجة", "en": "Fresh fruit & vegetables"},
 proteinType:{"ar": "لحوم ودواجن ومأكولات بحرية", "en": "Meat, poultry & seafood"},
 staplesType:{"ar": "حبوب ومكرونة وبقوليات", "en": "Grains, pasta & pulses"},
 cannedType:{"ar": "معلبات وأطعمة محفوظة", "en": "Canned & preserved foods"},
 frozenType:{"ar": "وجبات ومنتجات مجمدة", "en": "Frozen meals & products"},
 otherType:{"ar": "أطعمة أخرى", "en": "Other foods"},
 itemType:{ar:'فئة الطعام أو المشروب',en:'Food or drink category'},chooseType:{ar:'اختر الفئة المناسبة',en:'Choose a category'},foodType:{ar:'طعام',en:'Food'},drinkType:{"ar": "مياه وعصائر ومشروبات", "en": "Water, juice & drinks"},typeError:{ar:'اختر فئة العنصر أولًا.',en:'Please choose an item category first.'},
 startNow:{ar:'يلا نبدأ ↗',en:'Let’s save a bite ↗'},heroNote:{ar:'كل لقمة تستحق فرصة تانية',en:'Too good to go to waste'},heroShare:{ar:'شارك الخير',en:'Made for sharing'},heroFresh:{ar:'طازة ولذيذ',en:'Fresh feels good'},heroTag:{ar:'للناس. وللكوكب.',en:'For people. For the planet.'},
 title:{ar:'غذاء بوعي',en:'FoodWise'},language:{ar:'العربية | English',en:'العربية | English'},
 eyebrow:{ar:'غذاء بوعي. مستقبل أفضل.',en:'FOODWISE. A BETTER TOMORROW.'},headline:{ar:'أنقذ الطعام. قلّل الهدر. احمِ الأرض.',en:'Save Food. Waste Less. Save Earth.'},intro:{ar:'طعامك له قيمة. نظّم مخزنك، أنقذ لقمة قبل فوات الأوان، وشارك الخير مع اللي محتاجه.',en:'A little less waste. A little more good. Keep your food fresh, share the extra, and make every bite count.'},
 goal12:{ar:'١٢ · الاستهلاك والإنتاج المسؤولان',en:'12 · Responsible consumption'},goal2:{ar:'٢ · القضاء التام على الجوع',en:'2 · Zero hunger'},goal13:{ar:'١٣ · العمل المناخي',en:'13 · Climate action'},sdg12:{ar:'الهدف ١٢',en:'SDG 12'},sdg2:{ar:'الهدف ٢',en:'SDG 2'},sdg13:{ar:'الهدف ١٣',en:'SDG 13'},
 impact:{ar:'خيرك بيكبر',en:'Small bites. Big impact.'},everybit:{ar:'كل خطوة صغيرة تصنع فرقًا',en:'Small actions. Real change.'},kg:{ar:'كجم',en:'kg'},kgCO2:{ar:'كجم CO₂e',en:'kg CO₂e'},foodSaved:{ar:'طعام تم إنقاذه',en:'Food saved'},mealsSaved:{ar:'وجبات تم إنقاذها تقريبًا',en:'Estimated meals saved'},co2Saved:{ar:'انبعاثات تم تجنبها تقريبًا',en:'Estimated CO₂ avoided'},estimate:{ar:'تقديرات توضيحية: كل ١ كجم طعام ≈ ٢٫٥ وجبة و٢٫٥ كجم مكافئ ثاني أكسيد الكربون. تشمل الطعام المستخدم والمتبرع به.',en:'Illustrative estimates: 1 kg of food ≈ 2.5 meals and 2.5 kg CO₂e. Includes food used and donated.'},
 addTitle:{ar:'ابدأ بلقمة',en:'Start with a little good'},addHelp:{ar:'ضيف طعامك. وسيب الباقي علينا.',en:'Add your food. We’ll keep an eye on the dates.'},name:{ar:'اسم العنصر',en:'Item name'},namePlaceholder:{ar:'مثل: مكرونة مطبوخة، كيك، شيبسي، عصير',en:'e.g. Cooked pasta, cake, chips, juice'},quantity:{"ar": "الكمية", "en": "Quantity"},quantityPlaceholder:{"ar": "أدخل الكمية", "en": "Enter quantity"},expiry:{"ar": "تاريخ الصلاحية / آخر يوم للاستخدام", "en": "Expiry / use-by date"},add:{ar:'＋ إضافة الطعام',en:'＋ Add food item'},localNote:{ar:'بياناتك محفوظة في هذا المتصفح فقط.',en:'Your data stays in this browser.'},pantry:{ar:'إيه في مخزنك؟',en:'What’s in your pantry?'},sorted:{ar:'الأقرب انتهاءً أولًا، لتعرف من أين تبدأ.',en:'Soonest to expire first, so you know what to use next.'},itemCount:{ar:'{n} عناصر',en:'{n} items'},emptyTitle:{ar:'بداية طازجة',en:'A fresh start'},emptyHelp:{ar:'أضف أول عنصر، ولنمنح الطعام فرصة قبل أن يُهدر.',en:'Add your first food item and give good food a chance to be enjoyed.'},
 expired:{ar:'انتهت الصلاحية منذ {n} يوم',en:'Expired {n} days ago'},today:{ar:'تنتهي الصلاحية اليوم',en:'Expires today'},remaining:{ar:'تنتهي الصلاحية بعد {n} يوم',en:'Expires in {n} days'},dateLine:{ar:'{kg} كجم · {date}',en:'{kg} kg · {date}'},save:{ar:'تم استخدامه',en:'Mark as saved'},donate:{ar:'تبرع',en:'Donate'},delete:{ar:'حذف',en:'Delete'},
 nameError:{ar:'أدخل اسم العنصر.',en:'Please enter an item name.'},quantityError:{ar:'أدخل كمية صحيحة أكبر من صفر.',en:'Please enter a valid quantity greater than zero.'},expiryError:{ar:'اختر تاريخ انتهاء صلاحية صحيحًا.',en:'Please select a valid expiry date.'},storageError:{ar:'تعذر حفظ البيانات في المتصفح. تحقق من إعدادات التخزين وحاول مجددًا.',en:'Could not save data. Check browser storage settings and try again.'},loadError:{ar:'تعذر قراءة البيانات المحفوظة. لم يتم استبدالها.',en:'Saved data could not be read. It has not been overwritten.'},added:{ar:'تمت إضافة الطعام إلى مخزنك.',en:'Food added to your pantry.'},saved:{ar:'تم تحديث أثرك الإيجابي. شكرًا لتقليل الهدر!',en:'Your impact is updated. Thanks for reducing waste!'},deleted:{ar:'تم حذف العنصر.',en:'Item deleted.'},
 donationTitle:{ar:'شارك الطعام، واصنع فرقًا',en:'Share food. Make a difference.'},donationHelp:{"ar": "اختر جهة واتصل بها للتحقق من قبول نوع الطعام وحالته وترتيب التسليم. أكد التبرع بعد التسليم فقط؛ الموقع لا يرسل طلبات للجهات.", "en": "Choose an organization and contact it to confirm acceptance of this food and its condition and arrange handover. Confirm only after handover; the app does not send requests."},donationItem:{"ar": "التبرع بـ {name} · {amount} {unit}", "en": "Donating {name} · {amount} {unit}"},confirm:{ar:'تأكيد التبرع المكتمل',en:'Confirm completed donation'},cancel:{ar:'إلغاء',en:'Cancel'},close:{ar:'إغلاق',en:'Close'},website:{ar:'الموقع الرسمي ↗',en:'Official website ↗'},selectCharity:{ar:'اختر جهة لتسجيل التبرع.',en:'Choose an organization to record the donation.'},expiredDonation:{ar:'انتهت صلاحية هذا العنصر؛ لا يمكن تسجيله كتبرع.',en:'This item has expired and cannot be recorded as a donation.'},expiredSave:{ar:'لا يمكن تسجيل الطعام منتهي الصلاحية كطعام تم إنقاذه.',en:'Expired food cannot be recorded as saved.'},footer:{ar:'غذاء بوعي · أنقذ الطعام. قلّل الهدر. احمِ الأرض.',en:'FoodWise · Save Food. Waste Less. Save Earth.'},footerLink:{ar:'اكتشف أهداف التنمية المستدامة ↗',en:'Explore the UN Sustainable Development Goals ↗'}
};
// Stable category IDs are saved with each item; labels follow the selected language.
// Stable IDs keep existing pantry data compatible.
const categories = [{"id": "cooked", "label": "cookedType", "units": ["portion", "kg", "g"], "fields": ["prepared", "storage", "allergens"]}, {"id": "sweets", "label": "sweetsType", "units": ["piece", "pack", "g", "kg"], "fields": ["seal", "storage", "allergens"]}, {"id": "snacks", "label": "snacksType", "units": ["pack", "g", "kg"], "fields": ["seal", "opened"]}, {"id": "drink", "label": "drinkType", "units": ["l", "ml", "bottle"], "fields": ["seal", "opened", "storage"]}, {"id": "bakery", "label": "bakeryType", "units": ["piece", "pack", "g", "kg"], "fields": ["storage", "allergens"]}, {"id": "dairy", "label": "dairyType", "units": ["pack", "piece", "g", "kg"], "fields": ["seal", "opened", "storage", "allergens"]}, {"id": "produce", "label": "produceType", "units": ["kg", "g", "piece"], "fields": ["produceState", "storage"]}, {"id": "protein", "label": "proteinType", "units": ["kg", "g"], "fields": ["proteinState", "storage"]}, {"id": "staples", "label": "staplesType", "units": ["kg", "g", "pack"], "fields": ["stapleState", "storage"]}, {"id": "canned", "label": "cannedType", "units": ["can", "g", "kg"], "fields": ["seal", "opened", "storage"]}, {"id": "frozen", "label": "frozenType", "units": ["pack", "kg", "g"], "fields": ["frozenState", "storage"]}, {"id": "other", "label": "otherType", "units": ["kg", "g", "piece", "pack"], "fields": ["notes"]}];
const validCategory = type => categories.some(c=>c.id===type);
// Contact directory, not a guarantee of collection or food acceptance.
const charities = [{"name": {"ar": "بنك الطعام المصري", "en": "Egyptian Food Bank"}, "city": {"ar": "القاهرة والإسكندرية — استفسارات التغطية", "en": "Cairo & Alexandria — coverage enquiries"}, "description": {"ar": "اسأل الخط المركزي عن التبرع بالفائض والمنطقة التي تخدمها المؤسسة.", "en": "Ask the central hotline about surplus donations and service areas."}, "phone": "16060", "url": "https://www.efb.eg/ar/contact"}, {"name": {"ar": "جمعية رسالة", "en": "Resala Charity Association"}, "city": {"ar": "القاهرة والإسكندرية وفروع بالمحافظات", "en": "Cairo, Alexandria & governorate branches"}, "description": {"ar": "اسأل عن أنشطة الإطعام والفرع المناسب للتبرع العيني.", "en": "Ask about feeding programs and the right branch for in-kind donations."}, "phone": "19450", "url": "https://www.resala.org/"}, {"name": {"ar": "جمعية الأورمان", "en": "Al Orman Association"}, "city": {"ar": "الجيزة — استفسارات المحافظات", "en": "Giza — governorate enquiries"}, "description": {"ar": "اسأل عن برامج الغذاء وشروط قبول التبرعات العينية.", "en": "Ask about food programs and in-kind donation requirements."}, "phone": "19455", "url": "https://dar-alorman.com/Home/Contact"}, {"name": {"ar": "مؤسسة مصر الخير", "en": "Misr El Kheir Foundation"}, "city": {"ar": "القاهرة — استفسارات جميع المحافظات", "en": "Cairo — nationwide enquiries"}, "description": {"ar": "برامج إطعام ودعم غذائي؛ اتصل للتحقق من قبول نوع الطعام.", "en": "Feeding and food-support programs; call to check acceptance of your food."}, "phone": "16140", "url": "https://mekeg.org/contact/"}, {"name": {"ar": "مؤسسة صناع الحياة مصر", "en": "Life Makers Egypt"}, "city": {"ar": "مصر — استفسر عن أقرب فرع", "en": "Egypt — ask for the nearest branch"}, "description": {"ar": "مطابخ ومبادرات إطعام؛ تحقق من التغطية وقبول الطعام المطبوخ.", "en": "Community kitchens and feeding initiatives; confirm coverage and cooked-food acceptance."}, "phone": "16563", "url": "https://lifemakers.org/contact-us/"}, {"name": {"ar": "مؤسسة الجود الخيرية", "en": "Al Joud Foundation"}, "city": {"ar": "الجيزة — برامج في محافظات متعددة", "en": "Giza — programs in several governorates"}, "description": {"ar": "برامج وجبات وكراتين غذائية؛ اسأل عن شروط التبرع العيني.", "en": "Meal and food-box programs; enquire about in-kind donation requirements."}, "phone": "16485", "url": "https://aljoud-ngo.com/ar/contact-us"}, {"name": {"ar": "مؤسسة باب الخير الخيرية", "en": "Bab El Khayer Foundation"}, "city": {"ar": "الإسكندرية", "en": "Alexandria"}, "description": {"ar": "إطعام وسلال غذائية؛ تواصل لترتيب التبرع وقبول الأصناف.", "en": "Meals and food baskets; contact to arrange donations and confirm accepted items."}, "phone": "01100043741", "url": "https://babelkhayer.org/"}, {"name": {"ar": "الهلال الأحمر المصري", "en": "Egyptian Red Crescent"}, "city": {"ar": "القاهرة — استفسارات الفروع بالمحافظات", "en": "Cairo — governorate branch enquiries"}, "description": {"ar": "مساعدات إنسانية؛ تحقق من حملات الغذاء وشروط قبول المواد الغذائية.", "en": "Humanitarian relief; enquire about food campaigns and accepted food supplies."}, "phone": "15322", "url": "https://www.egyptianrc.org/en/donation"}, {"name": {"ar": "مؤسسة زواد لتنمية المجتمع", "en": "Zwad Community Development Foundation"}, "city": {"ar": "الزقازيق، الشرقية", "en": "Zagazig, Sharqia"}, "description": {"ar": "مطبخ خيري ودعم غذائي؛ اتصل للتحقق من قبول التبرعات العينية.", "en": "Charity kitchen and food support; call to confirm in-kind donation acceptance."}, "phone": "01000094014", "url": "https://zwad.org/"}, {"name": {"ar": "مؤسسة الزهراوان", "en": "Al Zahrawan Foundation"}, "city": {"ar": "القاهرة — برامج في محافظات متعددة", "en": "Cairo — programs in several governorates"}, "description": {"ar": "برنامج إطعام ووجبات؛ اسأل عن إمكانية التبرع بالطعام وشروطه.", "en": "Feeding and meal programs; ask whether your food can be donated and under what conditions."}, "phone": "19466", "url": "https://alzahrawan.org/"}];
const QUIZ_KEY='loqma-foodprint-v1';
const KEY='save-the-food-v1',LANG_KEY='save-the-food-language';
const unitLabels={kg:'kgUnit',g:'gUnit',l:'lUnit',ml:'mlUnit',portion:'portionUnit',piece:'pieceUnit',pack:'packUnit',bottle:'bottleUnit',can:'canUnit'};
const countedUnits=['portion','piece','pack','bottle','can'];
const detailFields={
 prepared:{label:'preparedDate',kind:'date',required:true},
 opened:{label:'openedDate',kind:'date'},
 storage:{label:'storage',options:['room','chilled','frozen'],required:true},
 seal:{label:'seal',options:['sealed','opened','unpackaged'],required:true},
 produceState:{label:'produceState',options:['whole','cut'],required:true},
 proteinState:{label:'proteinState',options:['raw','cookedState'],required:true},
 stapleState:{label:'stapleState',options:['dry','ready'],required:true},
 frozenState:{label:'frozenState',options:['stillFrozen','thawed'],required:true},
 allergens:{label:'allergens',kind:'text'},notes:{label:'notes',kind:'text'}
};
let language='ar',state={items:[],savedKg:0,wastedKg:0,wastedItems:[]},errors={},noticeKey='',pendingId=null,selectedCharity=null,storageLoaded=true,formSignature='';
const $=id=>document.getElementById(id);
const t=(key,params={})=>Object.entries(params).reduce((s,[k,v])=>s.replaceAll('{'+k+'}',String(v)),translations[key][language]);
const number=value=>new Intl.NumberFormat(language==='ar'?'ar-EG':'en-GB',{maximumFractionDigits:3}).format(value);
const configFor=type=>categories.find(c=>c.id===type);
const unitName=unit=>t(unitLabels[unit]);
function validDate(s){if(typeof s!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(s))return false;const d=new Date(s+'T00:00:00Z');return Number.isFinite(+d)&&d.toISOString().slice(0,10)===s;}
function today(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
// Use calendar days, avoiding daylight-saving differences.
function daysLeft(date){return Math.round((Date.parse(date+'T00:00:00Z')-Date.parse(today()+'T00:00:00Z'))/86400000);}
function formattedDate(date){return new Intl.DateTimeFormat(language==='ar'?'ar-EG':'en-GB',{year:'numeric',month:'short',day:'numeric',timeZone:'UTC'}).format(new Date(date+'T00:00:00Z'));}
// quantity remains normalized kg for backwards compatibility and impact accounting.
function massKg(amount,unit,size){if(unit==='kg'||unit==='l')return amount;if(unit==='g'||unit==='ml')return amount/1000;return amount*size/1000;}
function validRecord(i){return i&&typeof i.id==='string'&&typeof i.name==='string'&&i.name.trim()&&Number.isFinite(i.quantity)&&i.quantity>0&&Number.isFinite(i.quantity*2.5)&&(i.type===undefined||i.type==='food'||validCategory(i.type))&&validDate(i.expiry)&&(i.unit===undefined||Object.hasOwn(unitLabels,i.unit))&&(i.amount===undefined||(Number.isFinite(i.amount)&&i.amount>0))&&(i.details===undefined||(i.details&&typeof i.details==='object'&&!Array.isArray(i.details)));}
try{language=localStorage.getItem(LANG_KEY)==='en'?'en':'ar';const raw=localStorage.getItem(KEY);if(raw){const v=JSON.parse(raw);if(!v||!Array.isArray(v.items)||!Number.isFinite(v.savedKg)||v.savedKg<0||!Number.isFinite(v.savedKg*2.5)||(v.wastedKg!==undefined&&(!Number.isFinite(v.wastedKg)||v.wastedKg<0))||(v.wastedItems!==undefined&&(!Array.isArray(v.wastedItems)||!v.wastedItems.every(i=>validRecord(i)&&validDate(i.wastedOn))))||!v.items.every(validRecord)||new Set(v.items.map(i=>i.id)).size!==v.items.length)throw Error('Invalid data');state={...v,wastedKg:v.wastedKg??0,wastedItems:(v.wastedItems??[]).map(i=>({...i,amount:i.amount??i.quantity,unit:i.unit??'kg',type:!i.type||i.type==='food'?'other':i.type})),items:v.items.map(i=>({...i,type:!i.type||i.type==='food'?'other':i.type,amount:i.amount??i.quantity,unit:i.unit??'kg',details:i.details??{}}))};}}catch{noticeKey='loadError';storageLoaded=false;}
function persist(next){try{if(!storageLoaded)throw Error('Unreadable storage');localStorage.setItem(KEY,JSON.stringify(next));state=next;return true;}catch{noticeKey='storageError';render();return false;}}
function element(tag,key,classes,params){const el=document.createElement(tag);if(classes)el.className=classes;if(key){el.dataset.i18n=key;if(params)el.dataset.i18nParams=JSON.stringify(params);el.textContent=t(key,params);}return el;}
function translate(){document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n,el.dataset.i18nParams?JSON.parse(el.dataset.i18nParams):{}));document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));document.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.i18nAria)));}
function option(value,key){const el=element('option',key);el.value=value;return el;}
function renderCategoryForm(reset=false){
 const type=$('item-type').value,c=configFor(type),unit=$('quantity-unit').value;
 const signature=[language,type,unit].join(':');
 if(reset){$('quantity').value='';$('unit-size').value='';errors={};}
 if(signature!==formSignature||reset){
  const previous={};for(const [key] of Object.entries(detailFields)){const field=$('detail-'+key);if(field)previous[key]=field.value;}
  const units=c?c.units:['kg'];$('quantity-unit').replaceChildren(...units.map(u=>option(u,unitLabels[u])));
  $('quantity-unit').value=!reset&&units.includes(unit)?unit:units[0];
  $('category-fields').replaceChildren();
  if(c){$('category-fields').append(element('h3','detailsTitle','detail-heading'));for(const key of c.fields){const spec=detailFields[key],id='detail-'+key;const label=element('label',spec.label);label.htmlFor=id;let field;
   if(spec.options){field=element('select');field.append(option('','chooseOne'),...spec.options.map(v=>option(v,v)));}else{field=element('input');field.type=spec.kind;field.maxLength=160;if(spec.kind==='date')field.max=today();}
   field.id=id;field.required=Boolean(spec.required);field.setAttribute('aria-describedby',id+'-error');if(!reset&&previous[key]!==undefined)field.value=previous[key];const error=element('p',null,'error');error.id=id+'-error';const group=element('div',null,'form-field');group.append(label,field,error);$('category-fields').append(group);
  }}
  formSignature=[language,type,$('quantity-unit').value].join(':');
 }
 const selected=$('quantity-unit').value,isCount=countedUnits.includes(selected),isDrink=type==='drink';
 $('quantity-label').textContent=t('quantityLabel',{unit:unitName(selected)});$('quantity').step=isCount?'1':'any';$('quantity').min=isCount?'1':'0.001';
 $('size-wrapper').hidden=!isCount;$('unit-size').required=isCount;
 $('unit-size-label').textContent=selected==='bottle'?t('sizeVolume'):t('sizeWeight',{unit:unitName(selected)});
 $('size-help').hidden=selected==='bottle';$('liquid-help').hidden=!isDrink;
 for(const [field,key] of [['quantity','quantity'],['unit','quantity-unit'],['size','unit-size'],['name','name'],['expiry','expiry'],['item-type','item-type']]){const target=$(field+'-error');if(target)target.textContent=errors[field]?t(errors[field]):'';$(key).setAttribute('aria-invalid',String(Boolean(errors[field])));}
 if(c)for(const key of c.fields){const id='detail-'+key;$(id+'-error').textContent=errors[id]?t(errors[id]):'';$(id).setAttribute('aria-invalid',String(Boolean(errors[id])));}
}
function render(){document.documentElement.lang=language;document.documentElement.dir=language==='ar'?'rtl':'ltr';document.title=t('title');translate();renderCategoryForm();$('kg').textContent=number(state.savedKg);$('meals').textContent=number(state.savedKg*2.5);$('co2').textContent=number(state.savedKg*2.5);$('wasted-total').textContent=number(state.wastedKg);renderWaste();$('item-count').textContent=t('itemCount',{n:number(state.items.length)});$('notice').textContent=noticeKey?t(noticeKey):'';
 const container=$('items');container.replaceChildren();if(!state.items.length){const empty=element('div',null,'empty'),icon=element('span',null,'empty-icon');icon.textContent='🍽️';icon.setAttribute('aria-hidden','true');empty.append(icon,element('h3','emptyTitle'),element('p','emptyHelp'));container.append(empty);}
 [...state.items].sort((a,b)=>a.expiry.localeCompare(b.expiry)).forEach(item=>{const days=daysLeft(item.expiry),card=element('article',null,'food '+(days<=2?'red':days<=5?'orange':'green')),heading=element('div',null,'food-heading'),info=element('div'),name=element('h3');name.textContent=item.name;
 info.append(name,element('span',configFor(item.type).label,'type-badge '+(item.type==='drink'?'drink-type':'food-type')),element('small','amountDate',null,{amount:number(item.amount),unit:unitName(item.unit),date:formattedDate(item.expiry)}));
 heading.append(info,element('span',days<0?'expired':days===0?'today':'remaining','expiry-status',{n:number(Math.abs(days))}));card.append(heading);
 const details=element('div',null,'item-details');
 if(countedUnits.includes(item.unit))details.append(element('p','sizeLine',null,{size:number(item.unitSize),unit:unitName(item.unit==='bottle'?'ml':'g')}));
 if(item.unit!=='kg')details.append(element('p','massLine',null,{kg:number(item.quantity)}));
 for(const key of configFor(item.type).fields){const v=item.details[key],spec=detailFields[key];if(typeof v!=='string'||!v)continue;let display=v;if(spec.options){if(!spec.options.includes(v))continue;display=t(v);}else if(spec.kind==='date'){if(!validDate(v))continue;display=formattedDate(v);}details.append(element('p','detailLine',null,{label:t(spec.label),value:display}));}
 card.append(details);if(days<0)card.append(element('p','expiredAction','expired-help'));const actions=element('div',null,'food-actions');const itemActions=days<0?[['waste','waste-button'],['delete','delete']]:[['save','primary'],['donate','secondary'],['waste','waste-button'],['delete','delete']];for(const [key,cls] of itemActions){const button=element('button',key,cls);button.type='button';button.addEventListener('click',()=>act(key,item.id));actions.append(button);}card.append(actions);container.append(card);
 });if($('donation').open)renderDonation();renderQuiz();
}
// Keep individual waste records so advice remains available after a refresh.
const preventionTips={cooked:'tipCooked',sweets:'tipPackaged',snacks:'tipPackaged',drink:'tipDrink',bakery:'tipBakery',dairy:'tipDrink',produce:'tipProduce',protein:'advicePortions',staples:'adviceShop',canned:'tipPackaged',frozen:'adviceDates',other:'tipOther'};
function renderWaste(){const root=$('wasted-items');root.replaceChildren();if(!state.wastedItems.length){root.append(element('p','wasteEmpty','waste-empty'));return;}
 for(const item of state.wastedItems){const card=element('article',null,'waste-record');card.id='waste-record-'+item.id;const heading=element('div',null,'waste-record-heading'),name=element('h3');name.textContent=item.name;heading.append(name,element('span',configFor(item.type).label,'type-badge'));card.append(heading,element('p','amountDate','waste-record-meta',{amount:number(item.amount),unit:unitName(item.unit),date:formattedDate(item.expiry)}),element('p','wastedOn','waste-record-meta',{date:formattedDate(item.wastedOn)}));const advice=element('div',null,'prevention-tip');advice.append(element('h4','preventNext'),element('p',preventionTips[item.type]||'tipOther'));card.append(advice);root.append(card);}
}
function act(action,id){const item=state.items.find(i=>i.id===id);if(!item)return;if(['save','donate'].includes(action)&&daysLeft(item.expiry)<0){noticeKey=action==='donate'?'expiredDonation':'expiredSave';render();return;}if(action==='donate'){pendingId=id;selectedCharity=null;$('charity-search').value='';$('donation-error').textContent='';renderDonation();$('donation').showModal();return;}const next={...state,items:state.items.filter(i=>i.id!==id),savedKg:state.savedKg+(action==='save'?item.quantity:0),wastedKg:state.wastedKg+(action==='waste'?item.quantity:0),wastedItems:action==='waste'?[{...item,wastedOn:today()},...state.wastedItems]:state.wastedItems};if(!Number.isFinite(next.savedKg*2.5)||!Number.isFinite(next.wastedKg))return;if(persist(next)){noticeKey=action==='delete'?'deleted':action==='waste'?'wasted':'saved';render();}}
function renderDonation(){const item=state.items.find(i=>i.id===pendingId);if(!item){$('donation').close();return;}$('donation-item').textContent=t('donationItem',{name:item.name,amount:number(item.amount),unit:unitName(item.unit)});const root=$('charities');root.replaceChildren();const query=$('charity-search').value.trim().toLocaleLowerCase();let count=0;
 charities.forEach((charity,index)=>{const searchable=[...Object.values(charity.name),...Object.values(charity.city),...Object.values(charity.description),charity.phone].join(' ').toLocaleLowerCase();if(query&&!searchable.includes(query))return;count++;const card=element('div',null,'charity'),label=element('label'),radio=element('input');radio.type='radio';radio.name='charity';radio.value=index;radio.checked=selectedCharity===index;radio.addEventListener('change',()=>{selectedCharity=index;$('donation-error').textContent='';});const text=element('span');text.textContent=charity.name[language]+' · '+charity.city[language];label.append(radio,text);const desc=element('p');desc.textContent=charity.description[language];const links=element('div',null,'charity-links'),phone=element('a'),web=element('a','website');phone.href='tel:'+charity.phone;
 // Translate digit glyphs without losing leading zeroes in Egyptian mobile numbers.
 phone.textContent=charity.phone.replace(/\d/g,d=>new Intl.NumberFormat(language==='ar'?'ar-EG':'en-GB',{useGrouping:false}).format(Number(d)));phone.dir='ltr';web.href=charity.url;web.target='_blank';web.rel='noopener noreferrer';links.append(phone,web);card.append(label,desc,links);root.append(card);});$('charity-count').textContent=t('charityCount',{n:number(count)});if(!count)root.append(element('p','noCharity','muted'));if($('donation-error').textContent)$('donation-error').textContent=t('selectCharity');
}
$('food-form').addEventListener('submit',event=>{event.preventDefault();errors={};const type=$('item-type').value,c=configFor(type),name=$('name').value.trim(),amount=Number($('quantity').value),unit=$('quantity-unit').value,size=Number($('unit-size').value),expiry=$('expiry').value,details={};if(!c)errors['item-type']='typeError';if(!name)errors.name='nameError';if(!c||!c.units.includes(unit))errors.unit='unitError';if(!Number.isFinite(amount)||amount<=0)errors.quantity='quantityError';else if(countedUnits.includes(unit)&&!Number.isInteger(amount))errors.quantity='wholeError';if(countedUnits.includes(unit)&&(!Number.isFinite(size)||size<=0))errors.size='sizeError';if(!validDate(expiry))errors.expiry='expiryError';
 if(c)for(const key of c.fields){const spec=detailFields[key],id='detail-'+key,v=$(id).value.trim();if(spec.required&&!v)errors[id]='detailError';else if(v&&spec.options&&!spec.options.includes(v))errors[id]='detailError';else if(v&&spec.kind==='date'&&(!validDate(v)||v>today()||(validDate(expiry)&&v>expiry)))errors[id]='dateError';details[key]=v;}
 const quantity=massKg(amount,unit,size);if(!Number.isFinite(quantity)||quantity<=0||!Number.isFinite((state.savedKg+quantity)*2.5))errors.quantity='quantityError';if(Object.keys(errors).length){render();const first=Object.keys(errors)[0],id=first==='unit'?'quantity-unit':first==='size'?'unit-size':first;$(id).focus();return;}
 const id=typeof crypto.randomUUID==='function'?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2);if(persist({...state,items:[...state.items,{id,name,type,amount,unit,unitSize:countedUnits.includes(unit)?size:null,quantity,expiry,details}]})){$('food-form').reset();formSignature='';noticeKey='added';render();}
});
$('item-type').addEventListener('change',()=>{renderCategoryForm(true);});
$('quantity-unit').addEventListener('change',()=>{$('unit-size').value='';errors.quantity=errors.unit=errors.size='';renderCategoryForm();});
$('language').addEventListener('click',()=>{language=language==='ar'?'en':'ar';try{localStorage.setItem(LANG_KEY,language);}catch{noticeKey='storageError';}render();});
$('charity-search').addEventListener('input',renderDonation);
for(const id of ['close-modal','cancel-donation'])$(id).addEventListener('click',()=>$('donation').close());
$('donation').addEventListener('close',()=>{pendingId=null;selectedCharity=null;});
$('confirm-donation').addEventListener('click',()=>{if(selectedCharity===null){$('donation-error').textContent=t('selectCharity');return;}const item=state.items.find(i=>i.id===pendingId);if(!item)return;if(daysLeft(item.expiry)<0){$('donation').close();noticeKey='expiredDonation';render();return;}if(!Number.isFinite((state.savedKg+item.quantity)*2.5))return;if(persist({...state,items:state.items.filter(i=>i.id!==pendingId),savedKg:state.savedKg+item.quantity})){$('donation').close();noticeKey='saved';render();}});
// A transparent habits game: five scored questions, then two unscored preference questions.
const quizQuestions=[
 {key:'qShop',options:['shop0','shop1','shop2'],tip:'adviceShop'},
 {key:'qPortions',options:['portions0','portions1','portions2'],tip:'advicePortions'},
 {key:'qLeftovers',options:['leftovers0','leftovers1','leftovers2'],tip:'adviceLeftovers'},
 {key:'qDates',options:['dates0','dates1','dates2'],tip:'adviceDates'},
 {key:'qPackaging',options:['packaging0','packaging1','packaging2'],tip:'advicePackaging'},
 {key:'qWaste',multiple:true,exclusive:5,options:['wasteCooked','wasteProduce','wasteBakery','wastePackaged','wasteDrink','wasteOther'],tips:['tipCooked','tipProduce','tipBakery','tipPackaged','tipDrink','tipOther']},
 {key:'qMeals',multiple:true,exclusive:3,options:['mealHome','mealTakeaway','mealConvenience','mealMixed'],tips:['mealTipHome','mealTipTakeaway','mealTipConvenience','mealTipMixed']}
];
let quiz={active:false,step:0,answers:Array(quizQuestions.length).fill(null),complete:false},quizStorageFailed=false,quizSignature='',quizOpen=false;
function answerSelected(answer){return Array.isArray(answer)?answer.length>0:answer!==null;}
function validQuiz(value){return value&&typeof value.active==='boolean'&&typeof value.complete==='boolean'&&Number.isInteger(value.step)&&value.step>=0&&value.step<quizQuestions.length&&Array.isArray(value.answers)&&value.answers.length===quizQuestions.length&&value.answers.every((answer,i)=>{const q=quizQuestions[i],valid=a=>Number.isInteger(a)&&a>=0&&a<q.options.length;if(answer===null)return true;if(q.multiple&&Array.isArray(answer))return answer.length<=q.options.length&&answer.every(valid)&&new Set(answer).size===answer.length&&(!answer.includes(q.exclusive)||answer.length===1);return valid(answer);})&&(!value.complete||value.answers.every(answerSelected))&&value.answers.slice(0,value.step).every(answerSelected);}
try{const raw=localStorage.getItem(QUIZ_KEY);if(raw){const value=JSON.parse(raw);if(validQuiz(value)){quiz={...value,answers:value.answers.map((answer,i)=>quizQuestions[i].multiple&&typeof answer==='number'?[answer]:answer)};}}}catch{quizStorageFailed=true;}
function saveQuiz(){try{localStorage.setItem(QUIZ_KEY,JSON.stringify(quiz));quizStorageFailed=false;}catch{quizStorageFailed=true;}renderQuiz();}
function quizResult(answers){
 const points=answers.slice(0,5).reduce((sum,a)=>sum+a,0)*10;
 const profile=points>=80?'Hero':points>=40?'Mindful':'Starter';
 // Start with the weakest habits; ties retain question order for a predictable result.
 const habits=quizQuestions.slice(0,5).map((q,i)=>({tip:q.tip,score:answers[i],index:i})).sort((a,b)=>a.score-b.score||a.index-b.index).slice(0,3).map(q=>q.tip);
 const preferenceTips=[5,6].flatMap(i=>(Array.isArray(answers[i])?answers[i]:[answers[i]]).map(a=>quizQuestions[i].tips[a]));
 return {points,profile,tips:[...new Set([...habits,...preferenceTips])]};
}
function quizButton(key,classes,action){const button=element('button',key,classes);button.type='button';button.addEventListener('click',action);return button;}
function focusQuiz(){const heading=$('quiz-step-title');if(heading)heading.focus();}
function renderQuiz(){
 const signature=JSON.stringify({language,quiz,quizStorageFailed,quizOpen});if(signature===quizSignature)return;quizSignature=signature;
 const root=$('quiz-content');root.replaceChildren();$('quiz-storage-status').textContent=quizStorageFailed?t('quizSaveError'):'';$('quiz-storage-status').hidden=!quizStorageFailed||!quizOpen;$('quiz-close').hidden=!quizOpen;
 if(!quizOpen){const intro=element('div',null,'quiz-intro'),copy=element('div');copy.append(element('p','quizIntro'),element('p','quizTime','muted'),quizButton(quiz.complete?'quizViewResult':quiz.active?'quizContinue':'quizStart','primary',()=>{quizOpen=true;quiz.active=true;saveQuiz();focusQuiz();}));const art=element('div',null,'quiz-art');art.setAttribute('aria-hidden','true');art.textContent='?';intro.append(copy,art);root.append(intro);return;}
 if(quiz.complete){const result=quizResult(quiz.answers),top=element('div',null,'quiz-result-top'),title=element('h3','profile'+result.profile);title.id='quiz-step-title';title.tabIndex=-1;const score=element('span','quizScore','quiz-score',{n:number(result.points)});top.append(title,score);root.append(top,element('p','profile'+result.profile+'Text','quiz-summary'),element('p','quizScoreHelp','muted'));
 const pattern=element('div',null,'quiz-pattern');pattern.append(element('h3','quizPattern'));for(const [index,label] of [[5,'quizWasteLabel'],[6,'quizMealLabel']])pattern.append(element('p','quizPatternLine',null,{label:t(label),value:(Array.isArray(quiz.answers[index])?quiz.answers[index]:[quiz.answers[index]]).map(a=>t(quizQuestions[index].options[a])).join(t('selectionJoin'))}));root.append(pattern,element('h3','quizAdvice','quiz-advice-title'));
 const tips=element('ol',null,'quiz-tips');for(const key of result.tips)tips.append(element('li',key));root.append(tips);
 const challenge=element('div',null,'quiz-challenge');challenge.append(element('h3','quizChallenge'),element('p','quizChallengeText'));root.append(challenge);
 root.append(quizButton('quizRetake','secondary',()=>{quiz={active:true,step:0,answers:Array(quizQuestions.length).fill(null),complete:false};saveQuiz();focusQuiz();}));return;
 }
 const q=quizQuestions[quiz.step],progress=element('p','quizProgress','quiz-progress-label',{n:number(quiz.step+1),total:number(quizQuestions.length)}),bar=element('progress');bar.max=quizQuestions.length;bar.value=quiz.step;bar.setAttribute('aria-label',t('quizProgress',{n:number(quiz.step+1),total:number(quizQuestions.length)}));root.append(progress,bar);
 const fieldset=element('fieldset',null,'quiz-question'),legend=element('legend',q.key);legend.id='quiz-step-title';legend.tabIndex=-1;fieldset.append(legend);
 const hint=element('p',q.multiple?'multiHint':'singleHint','quiz-selection-hint');hint.id='quiz-selection-hint';fieldset.setAttribute('aria-describedby','quiz-selection-hint');fieldset.append(hint);
 q.options.forEach((key,index)=>{const label=element('label',null,'quiz-option'),radio=element('input'),text=element('span',key);radio.type=q.multiple?'checkbox':'radio';radio.name='foodprint-answer';radio.value=index;radio.checked=q.multiple?(Array.isArray(quiz.answers[quiz.step])&&quiz.answers[quiz.step].includes(index)):quiz.answers[quiz.step]===index;radio.addEventListener('change',()=>{
  if(q.multiple){let chosen=Array.isArray(quiz.answers[quiz.step])?[...quiz.answers[quiz.step]]:[];if(radio.checked){chosen=index===q.exclusive?[index]:[...chosen.filter(a=>a!==q.exclusive&&a!==index),index];}else chosen=chosen.filter(a=>a!==index);quiz.answers[quiz.step]=chosen.sort((a,b)=>a-b);}else quiz.answers[quiz.step]=index;
  saveQuiz();const selected=document.querySelector('#quiz-content input[value="'+index+'"]');if(selected)selected.focus();});label.append(radio,text);fieldset.append(label);});root.append(fieldset);
 if(q.multiple){const count=Array.isArray(quiz.answers[quiz.step])?quiz.answers[quiz.step].length:0;const status=element('p','selectionCount','quiz-selection-count',{n:number(count)});status.setAttribute('role','status');root.append(status);}
 const controls=element('div',null,'quiz-controls'),back=quizButton('quizBack','secondary',()=>{if(quiz.step>0){quiz.step--;saveQuiz();focusQuiz();}});back.disabled=quiz.step===0;
 const next=quizButton(quiz.step===quizQuestions.length-1?'quizFinish':'quizNext','primary',()=>{if(!answerSelected(quiz.answers[quiz.step]))return;if(quiz.step<quizQuestions.length-1)quiz.step++;else quiz.complete=true;saveQuiz();focusQuiz();});next.disabled=!answerSelected(quiz.answers[quiz.step]);controls.append(back,next);root.append(controls);
}

$('quiz-close').addEventListener('click',()=>{quizOpen=false;renderQuiz();const button=document.querySelector('#quiz-content button');if(button)button.focus();});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)render();});setInterval(render,60000);render();

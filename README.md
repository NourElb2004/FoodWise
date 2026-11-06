# FoodWise | غذاء بوعي

Save Food. Waste Less. Save Earth.

أنقذ الطعام. قلّل الهدر. احمِ الأرض.

## English
FoodWise is a bilingual, browser-only pantry and surplus-food tracker. Arabic is the default; English switches instantly. Built with exactly three app files: `index.html`, `style.css`, `script.js`. There is no backend, database, framework, installation or build step.

### SDGs (in display order)
1. SDG 2 — Zero Hunger: estimated meals saved and a directory of Egyptian donation organizations.
2. SDG 12 — Responsible Consumption and Production: food saved before its use-by date.
3. SDG 13 — Climate Action: illustrative avoided emissions.

### Adaptive categories
Choose a category first. It changes the available units and relevant details. The first listed unit is the default.

| Category | Available units | Relevant details |
| --- | --- | --- |
| Prepared & home-cooked meals | Portions, kg, g | Preparation date, storage, optional ingredients/allergens |
| Desserts & chocolate | Pieces, packs, g, kg | Package condition, storage, optional ingredients/allergens |
| Snacks & crisps | Packs, g, kg | Package condition, optional opening date |
| Water, juice & drinks | Litres, ml, bottles | Package condition, optional opening date, storage |
| Bread & pastries | Pieces, packs, g, kg | Storage, optional ingredients/allergens |
| Dairy, cheese & eggs | Packs, pieces, g, kg | Package condition, optional opening date, storage, optional ingredients/allergens |
| Fresh fruit & vegetables | kg, g, pieces | Whole/cut condition, storage |
| Meat, poultry & seafood | kg, g | Raw/cooked condition, storage |
| Grains, pasta & pulses | kg, g, packs | Dry/cooked condition, storage |
| Canned & preserved foods | Cans/jars, g, kg | Package condition, optional opening date, storage |
| Frozen meals & products | Packs, kg, g | Frozen/thawed condition, storage |
| Other foods | kg, g, pieces, packs | Optional notes |

Counted units must be positive whole numbers. Portions, pieces, packs and cans/jars require net grams per unit; bottles require ml per bottle. No standard piece/portion size is guessed. For example, 3 packs × 50 g = 0.15 kg and 2 portions × 400 g = 0.8 kg. Original amounts and units appear on each item alongside its relevant details.

Impact totals use normalized kg internally, preserving compatibility with older records. Drinks use the explicit educational approximation **1 litre ≈ 1 kg**; actual density varies. The project's illustrative factors are 1 kg saved ≈ 2.5 meals and 2.5 kg CO₂e. These are not measured environmental benefits or nutritional serving recommendations. Marking saved or confirming a completed donation counts each item once. Deletion adds nothing.

Every item still requires a user-supplied expiry/use-by date. The app never guesses shelf life or assesses food safety. Preparation/opening dates cannot be in the future or after the use-by date. Expired items cannot be recorded as saved/donated. Storage and condition details are records, not safety approvals.

### Run and persistence
1. Extract the ZIP, keeping the three app files together.
2. Open `index.html` in a current browser. No server or build is required.
3. Choose a category, enter the applicable information and add the item.
4. Use, donate or delete it from the pantry.

Data and language are saved automatically in localStorage on the same browser/device and site address. There is no sync or shared database. Existing records retain their kg values; generic old food categories map to Other. Clearing browser data removes records. Private browsing may discard them. File-URL storage differs across browsers; keep the same file location or use a stable hosted address. The optional Google Fonts load online; local fallback fonts work offline. Native date-picker formatting follows browser/OS locale; displayed dates and numbers follow the app language.

### Egyptian donation directory
The modal contains **10 distinct organizations** and searches names, areas, descriptions and phone numbers in both languages. Contacts checked **6 November 2026** against official sources:

| Organization | Contact | Official source |
| --- | --- | --- |
| Egyptian Food Bank | 16060 | https://www.efb.eg/ar/contact |
| Resala Charity Association | 19450 | https://www.resala.org/ |
| Al Orman Association | 19455 | https://dar-alorman.com/Home/Contact |
| Misr El Kheir Foundation | 16140 | https://mekeg.org/contact/ |
| Life Makers Egypt | 16563 | https://lifemakers.org/contact-us/ |
| Al Joud Foundation | 16485 | https://aljoud-ngo.com/ar/contact-us |
| Bab El Khayer Foundation, Alexandria | 01100043741 | https://babelkhayer.org/ |
| Egyptian Red Crescent | 15322 | https://www.egyptianrc.org/en/donation and https://sis.gov.eg/en/media-center/news/erc-more-than-one-million-tons-of-humanitarian-aid-delivered-to-gaza-through-egypt/ |
| Zwad Community Development Foundation, Zagazig | 01000094014 | https://zwad.org/ |
| Al Zahrawan Foundation | 19466 | https://alzahrawan.org/ |

Food-program sources also include https://mekeg.org/donation-products, https://donate.lifemakers.org/Donate/DetailsAr/67, https://aljoud-ngo.com/ar/products?category_id=1 and https://alzahrawan.org/pages/برنامج-الإطعام.

These are contact options, not guaranteed food collection points. Call to confirm service area, accepted food categories, cooked/opened food policies and delivery arrangements. Select a charity and confirm **after actual handover only**. The app does not send requests, transfer money or contact organizations automatically. Cancel/Escape leaves totals unchanged.

### Deploy free on GitHub Pages
1. Sign into GitHub and create a **public** repository, e.g. `loqma`.
2. Choose **Add file → Upload files**. Put the three app files and README directly at the repository root.
3. **Commit changes** on `main`.
4. Open **Settings → Pages**.
5. Under **Build and deployment → Source**, select **Deploy from a branch**.
6. Choose **main** and **/(root)**, then **Save**.
7. Wait for the deployment under **Actions**. Return to **Settings → Pages → Visit site**. The usual URL is `https://USERNAME.github.io/loqma/`.
8. Upload changed files and commit to publish later updates. No custom workflow is needed.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

### Editing
All interface copy is in `translations` at the top of `script.js`. The `categories` array defines permitted units and detail fields; `detailFields` defines their controls. The editable `charities` array holds both language versions and official contact URLs. Keep stable category IDs when editing. User-entered names, ingredients and notes remain in the language entered.

### Verification
JavaScript syntax and functional checks covered all 12 category forms, mass/volume/count conversions, per-unit and required-field validation, preservation of entries during language switching, old-data migration, persistence, saved/donated totals and charity search. Visual browser verification of this revision was unavailable.

---

## العربية
غذاء بوعي تطبيق ثنائي اللغة لمتابعة الطعام وتقليل الهدر والتعرف على جهات التبرع في مصر. العربية هي اللغة الافتراضية، ويمكن التحويل للإنجليزية فورًا. يعمل بملفات HTML وCSS وJavaScript فقط دون خادم أو قاعدة بيانات أو تثبيت.

### أهداف التنمية المستدامة بالترتيب
١. الهدف ٢ — القضاء على الجوع: عرض الوجبات التقديرية ودليل جهات التبرع.
٢. الهدف ١٢ — الاستهلاك والإنتاج المسؤولان: استخدام الطعام قبل انتهاء صلاحيته.
٣. الهدف ١٣ — العمل المناخي: عرض تقدير الانبعاثات التي تم تجنبها.

### حقول تناسب كل فئة
اختر الفئة أولًا؛ تتغير وحدات الكمية والتفاصيل تلقائيًا:

| الفئة | وحدات القياس | التفاصيل |
| --- | --- | --- |
| وجبات جاهزة وأكل بيتي | حصص، كجم، جرام | تاريخ التحضير، الحفظ، مكونات وحساسية اختياريًا |
| حلويات وشوكولاتة | قطع، عبوات، جرام، كجم | حالة العبوة، الحفظ، مكونات وحساسية اختياريًا |
| تسالي وشيبسي | عبوات، جرام، كجم | حالة العبوة، تاريخ الفتح اختياريًا |
| مياه وعصائر ومشروبات | لتر، ملليلتر، زجاجات | حالة العبوة، تاريخ الفتح اختياريًا، الحفظ |
| خبز ومعجنات | قطع، عبوات، جرام، كجم | الحفظ، مكونات وحساسية اختياريًا |
| ألبان وأجبان وبيض | عبوات، قطع، جرام، كجم | حالة العبوة، تاريخ الفتح اختياريًا، الحفظ، الحساسية اختياريًا |
| فواكه وخضروات طازجة | كجم، جرام، قطع | كاملة أم مقطعة، الحفظ |
| لحوم ودواجن ومأكولات بحرية | كجم، جرام | نيئة أم مطهية، الحفظ |
| حبوب ومكرونة وبقوليات | كجم، جرام، عبوات | جافة أم مطهية، الحفظ |
| معلبات وأطعمة محفوظة | علب أو برطمانات، جرام، كجم | حالة العبوة، تاريخ الفتح اختياريًا، الحفظ |
| وجبات ومنتجات مجمدة | عبوات، كجم، جرام | مجمدة أم تم فك تجميدها، الحفظ |
| أطعمة أخرى | كجم، جرام، قطع، عبوات | ملاحظات اختيارية |

عند استخدام الحصص أو القطع أو العبوات أو المعلبات، أدخل عددًا صحيحًا والوزن الصافي للوحدة بالجرام. للزجاجات، أدخل حجم الزجاجة بالملليلتر. مثلًا: ٣ عبوات × ٥٠ جرام = ٠٫١٥ كجم، وحصتان × ٤٠٠ جرام = ٠٫٨ كجم. لا يفترض التطبيق وزنًا ثابتًا للقطعة أو الحصة.

لحساب الأثر التقريبي فقط نستخدم ١ لتر ≈ ١ كجم، مع اختلاف الكثافة الفعلية حسب المشروب. كل كيلوجرام تم إنقاذه يعادل افتراضيًا ٢٫٥ وجبة و٢٫٥ كجم مكافئ ثاني أكسيد الكربون. هذه تقديرات تعليمية وليست قياسات مؤكدة أو توصيات غذائية. لا يضيف الحذف أي أثر، ويُحتسب العنصر مرة واحدة عند استخدامه أو التبرع به.

تاريخ الصلاحية مطلوب لكل عنصر ويحدده المستخدم حسب العبوة والتحضير والحفظ. لا يحدد التطبيق صلاحية الطعام أو سلامته تلقائيًا. لا يمكن إدخال تاريخ تحضير أو فتح بعد اليوم أو بعد تاريخ الصلاحية. لا يمكن تسجيل الطعام منتهي الصلاحية كطعام تم إنقاذه أو التبرع به.

### التشغيل وحفظ البيانات
١. فك ضغط الملف واحتفظ بملفات التطبيق الثلاثة في مجلد واحد.
٢. افتح `index.html` في متصفح حديث دون تثبيت أو خادم.
٣. اختر الفئة وأكمل البيانات المناسبة ثم أضف العنصر.
٤. تظهر العناصر مرتبة بالأقرب انتهاءً، ويمكن استخدامها أو التبرع بها أو حذفها.

تُحفظ البيانات واللغة تلقائيًا في المتصفح والجهاز وعنوان الموقع نفسه. تظل السجلات القديمة وأوزانها بالكيلوجرام متاحة، وتنتقل السجلات العامة إلى فئة «أطعمة أخرى». حذف بيانات الموقع يزيل السجلات، وقد لا يحتفظ التصفح الخاص بها. التخزين عند فتح ملف مباشر يختلف حسب المتصفح؛ احتفظ بمكان الملف أو استخدم عنوانًا مستضافًا ثابتًا. يحمّل التطبيق الخطوط عند الاتصال بالإنترنت ويستخدم خطًا بديلًا دون اتصال. تقويم إدخال التاريخ يتبع لغة النظام، والتواريخ والأرقام المعروضة تتبع لغة التطبيق.

### جهات التبرع
يتضمن الدليل ١٠ جهات مختلفة مع البحث بالاسم أو المنطقة أو رقم الهاتف: بنك الطعام المصري، رسالة، الأورمان، مصر الخير، صناع الحياة، الجود، باب الخير بالإسكندرية، الهلال الأحمر المصري، زواد بالزقازيق، والزهراوان. الأرقام والروابط الرسمية موضحة بالجدول الإنجليزي أعلاه، وتمت مراجعتها في ٦ نوفمبر ٢٠٢٦.

اتصل بالجهة للتأكد من نطاق الخدمة وقبول نوع الطعام وحالته، خاصة الطعام المطبوخ أو المفتوح، وترتيب التسليم. وجود الجهة في الدليل لا يضمن قبول الطعام أو توفر خدمة الاستلام. أكد التبرع بعد التسليم الفعلي فقط؛ لا يرسل الموقع طلبات للجهات ولا يحول أموالًا ولا يجري اتصالات تلقائية. الإلغاء لا يغير الإجماليات.

### النشر المجاني على GitHub Pages
١. أنشئ مستودعًا عامًا على GitHub مثل `loqma`.
٢. اختر **Add file → Upload files** وارفع الملفات الثلاثة وREADME مباشرة إلى جذر المستودع.
٣. احفظ الملفات عبر **Commit changes** على الفرع `main`.
٤. افتح **Settings → Pages**.
٥. اختر **Build and deployment → Source → Deploy from a branch**.
٦. اختر **main** ومجلد **/(root)** ثم **Save**.
٧. انتظر اكتمال النشر في **Actions**، ثم افتح **Settings → Pages → Visit site**.
٨. لتحديث الموقع ارفع الملفات المعدلة واحفظ التغييرات. لا تحتاج إلى workflow مخصص.

### التعديل والتحقق
جميع النصوص في `translations` أعلى `script.js`. تحدد `categories` وحدات كل فئة وحقولها، وتحدد `detailFields` عناصر الإدخال، وتحتوي `charities` بيانات الجهات باللغتين. لا تغير معرفات الفئات القديمة عند التعديل. أسماء العناصر والملاحظات المدخلة لا تُترجم تلقائيًا.

اجتازت الفئات والتحويلات والتحقق من البيانات وحفظ السجلات القديمة واللغة وحسابات الاستخدام والتبرع والبحث اختبارات وظيفية. لم يتوفر تحقق بصري داخل المتصفح لهذا التحديث.

## What’s your Foodprint? — habits game
A seven-question bilingual game appears below the pantry, with a shortcut in the header introduction. Five self-reported habit questions cover shopping, portion sizes, leftovers, use-by dates and package sizes. Their answers score 0, 1 or 2 points, multiplied by 10 for a total of 0–100. Profiles are Fresh-start explorer (0–39), Mindful meal maker (40–79), and Every-bite hero (80–100).

Two unscored questions allow multiple selections for food groups and usual meal styles. Results show all selected choices, three tips for the lowest-scoring habits, a tip for each selected food group and meal style, and a weekly challenge. “Not sure / a mix” and “A mix of different meals” are exclusive shortcuts: selecting one clears the other choices for that question. At least one selection is required. Food preferences do not change points. The result is a playful self-reflection, not a measured carbon footprint, health assessment or verified record of consumption. Quiz points never increase food-saved totals.

Answers, current question and completed result persist separately in localStorage under `loqma-foodprint-v1`. Players can go back, change an answer or play again. Retaking clears only quiz answers, leaving pantry records and impact totals intact. No answers are sent to a server. Local storage errors show a localized message while allowing play in the current session.

Tips are adapted from these official resources (checked 6 November 2026), available in the resource cards:
- FAO: https://www.fao.org/newsroom/story/15-quick-tips-for-reducing-food-waste-and-becoming-a-Food-hero/en
- UNEP: https://www.unep.org/en/news-and-stories/story/seven-ways-cut-your-food-waste-and-support-planet

Functional checks cover navigation, required answer selection, changing answers, all profile tiers, unscored preferences, language switching, saved/resumed progress and results, malformed-data rejection, retaking and separation from impact totals. Visual browser verification remains unavailable.

## لعبة «إيه بصمتك الغذائية؟»
قسم ترفيهي من ٧ أسئلة أسفل المخزن، مع رابط سريع أعلى الصفحة. تتناول ٥ أسئلة عادات التسوق والكميات والبواقي والصلاحية وحجم العبوات. لكل إجابة صفر أو نقطة أو نقطتان، وتضرب النتيجة في ١٠ لتصبح من ١٠٠. النتائج: مستكشف البدايات (٠–٣٩)، صاحب اللقمة الواعية (٤٠–٧٩)، وبطل كل لقمة (٨٠–١٠٠).

يسمح السؤالان الأخيران باختيار أكثر من نوع طعام وأكثر من نمط للوجبات، دون إضافة نقاط أو خصمها. تظهر النتيجة كل الاختيارات و٣ نصائح للعادات الأقل نقاطًا ونصيحة لكل نوع ونمط مختار وتحديًا للأسبوع. اختيار «مش متأكد / أصناف متنوعة» أو «مزيج متنوع» يلغي الاختيارات الأخرى في السؤال نفسه. يجب اختيار إجابة واحدة على الأقل. اللعبة للتأمل في العادات والتسلية، وليست قياسًا فعليًا للاستهلاك أو الانبعاثات أو تقييمًا صحيًا. نقاطها لا تضاف إلى كميات الطعام المنقذ.

تُحفظ الإجابات والتقدم والنتيجة تلقائيًا في المتصفح نفسه بشكل منفصل عن بيانات المخزن. يمكنك الرجوع لتغيير إجابة أو إعادة اللعب دون تغيير الطعام أو إجماليات الأثر. لا تُرسل الإجابات إلى خادم. عند تعذر الحفظ يمكن إكمال اللعبة في الجلسة الحالية مع ظهور رسالة باللغة المختارة.

النصائح مستندة إلى موارد منظمة الأغذية والزراعة وبرنامج الأمم المتحدة للبيئة، وروابطهما موجودة في النتيجة وفي القسم الإنجليزي أعلاه. تم اختبار التنقل والإجابات والنتائج واللغتين والحفظ والاستئناف وإعادة اللعب وعدم تغيير إجماليات الأثر. لم يتوفر تحقق بصري داخل المتصفح.

## Navigation, resources and motion
Official FAO, UNEP and UN resources are available as large cards outside the quiz; duplicated result/footer resource links have been removed. Charity website/phone links have larger tap targets. Illustrations and stars move gently for a limited number of cycles; cards respond to hover and quiz steps have a short entrance. OS reduced-motion disables decorative animation and smooth scrolling.

## التنقل والمصادر والحركة
تظهر المصادر الرسمية ببطاقات كبيرة مستقلة خارج اللعبة دون تكرار الروابط داخل النتيجة أو التذييل. تم تكبير روابط الجهات وأرقام الاتصال. أضيفت حركة هادئة محدودة التكرار للرسومات والنجوم، وتأثيرات بسيطة على البطاقات والأسئلة، إعداد تقليل الحركة في النظام يلغي الرسوم المتحركة والتمرير السلس.

Resource links appear once each in the Tips & Sources cards. The Pause/Resume Motion control and its saved-preference behavior have been removed; OS reduced-motion remains supported.

تظهر روابط المصادر مرة واحدة داخل بطاقات النصائح والمصادر. تم حذف زر إيقاف وتشغيل الحركة وإعداد الحفظ الخاص به، مع استمرار دعم تقليل الحركة في النظام.

The top four-link navigation and the quiz privacy/progress and new-tab display notes were removed from the interface. Automatic local saving and links opening in new tabs remain functional; storage failures still display an error.

تم حذف شريط الروابط الأربعة أعلى الصفحة والنصوص التوضيحية عن خصوصية اللعبة وحفظ التقدم وفتح الروابط في علامة جديدة. يستمر الحفظ التلقائي وعمل الروابط، وتظهر رسالة خطأ عند تعذر الحفظ.

## Wasted food and landscape entry
The entry form now spans the page on desktop, with the pantry underneath; fields stack on narrow screens. Expired items show Mark as wasted and Delete, with Save/Donate unavailable. Fresh items can also be marked wasted if discarded. Expiry alone never counts as waste automatically.

Mark as wasted removes the item from the active pantry and adds its normalized kg once to a separate persisted `wastedKg` total. It does not add saved kg, meals or CO₂ avoided, nor subtract earlier saved totals. Delete removes an item without counting it as saved or wasted. Existing records without `wastedKg` start at zero. Pantry and quiz records remain compatible. Functional checks cover expiry handling, preventing double counting, persistence and preserving waste totals during save/donation.

## الطعام المُهدر وتصميم النموذج
أصبح نموذج الإضافة بعرض الصفحة على الشاشات الكبيرة، ويظهر المخزن تحته. تظهر الحقول عموديًا على الهاتف. بعد انتهاء الصلاحية تظهر أزرار «تم إهداره» و«حذف» بدل الاستخدام والتبرع. يمكن تسجيل أي عنصر تم التخلص منه كطعام مُهدر حتى قبل انتهاء صلاحيته. انتهاء التاريخ وحده لا يسجل هدرًا تلقائيًا.

عند الضغط على «تم إهداره» يزال العنصر من المخزن وتضاف كميته بالكيلوجرام مرة واحدة إلى إجمالي منفصل محفوظ في المتصفح. لا يزيد الطعام المنقذ أو الوجبات أو الانبعاثات المتجنبة، ولا يخصم من الإجماليات السابقة. الحذف لا يسجل طعامًا منقذًا أو مُهدرًا. تبدأ السجلات القديمة بإجمالي هدر يساوي صفرًا، مع الاحتفاظ بالبيانات الحالية.

Rebranding retains the existing site address and localStorage keys to preserve all saved pantry, waste and quiz data.

تغيير الاسم يحتفظ بعنوان الموقع ومفاتيح التخزين الحالية للحفاظ على بيانات الطعام والهدر واللعبة.

The displayed app name follows the selected language: FoodWise in English and غذاء بوعي in Arabic. The globe emoji is removed.

يظهر اسم الموقع حسب اللغة المختارة: FoodWise بالإنجليزية وغذاء بوعي بالعربية، دون رمز الكرة الأرضية.

The FoodWise brand uses an inline vector plate, fork and leaf icon, with a matching embedded browser favicon. No extra asset file or image dependency is needed.

شعار غذاء بوعي يجمع طبقًا وشوكة وورقة نبات برسمة متجهة داخل الصفحة، مع أيقونة متطابقة لعلامة تبويب المتصفح، دون ملفات صور إضافية.

## Photo and color update
The interface uses a white, navy and warm peach palette. Real food photography replaces the main SVG illustration and adds pictures to the three resource cards. JPEGs are embedded directly in index.html so the three-file app still opens without separate image files or live image requests. Images are decorative and do not change pantry or quiz behavior.

Photo sources (Unsplash):
- Natalie Sum, brunch spread: https://unsplash.com/@nutellasum ; image https://images.unsplash.com/photo-1683259580285-eb8fc0403b7b
- Artisan bread: https://images.unsplash.com/photo-1509440159596-0249088772ff
- Prepared ingredients: https://images.unsplash.com/photo-1498837167922-ddd27525d352

## تحديث الألوان والصور
أصبح التصميم بخلفية بيضاء وألوان كحلية ولمسات خوخية دافئة. تمت إضافة صور حقيقية للطعام في القسم الرئيسي وبطاقات المصادر. الصور مضمنة داخل index.html، فلا تحتاج إلى ملفات صور منفصلة أو تحميلها من مواقع خارجية عند التشغيل. لا يؤثر التحديث على بيانات المخزن أو اللعبة.

## Collapsible quiz and named resources
Foodprint starts closed on every page load, including for returning players. Use Play, Continue quiz or View my result to open it. Close quiz hides the game without clearing answers or results. Resource cards now display official website names and domains instead of photos; the main food photograph remains.

## إغلاق اللعبة وأسماء المصادر
تبدأ اللعبة مغلقة عند فتح الصفحة، حتى لو كانت هناك إجابات محفوظة. اضغط للعب أو المتابعة أو عرض النتيجة، واستخدم إغلاق اللعبة لإخفائها دون حذف التقدم. تعرض بطاقات المصادر أسماء المواقع الرسمية وعناوينها بدل الصور، مع الاحتفاظ بصورة الطعام الرئيسية.

## Current main artwork
The main section now uses the supplied food-and-Earth image, embedded directly in index.html. It replaces the stock brunch photo. The complete square artwork is shown without cropping, rotation or overlaid stickers; no additional image file is needed to run the app.

## الصورة الرئيسية الحالية
تم استخدام الصورة المرفقة للأرض المحاطة بالطعام بدل صورة الإفطار السابقة. تظهر الصورة كاملة دون قص أو دوران أو ملصقات تغطيها، وهي مضمنة في index.html دون الحاجة لملف صورة إضافي عند التشغيل.

Restored the bilingual “Fresh feels good”, “Made for sharing” and “Too good to go to waste” labels around the main artwork. Removed its peach offset shadow/backing.

أعيدت العبارات العربية والإنجليزية حول الصورة الرئيسية، مع إزالة الخلفية الخوخية والظل المزاح خلفها.

Main artwork display reduced to a maximum of 320 px on desktop and 240 px on mobile, retaining the full image and labels.

تم تصغير الصورة الرئيسية إلى عرض أقصى ٣٢٠ بكسل للشاشات الكبيرة و٢٤٠ بكسل للهاتف مع الحفاظ على الصورة كاملة والعبارات حولها.

## Waste records and prevention
Food wasted now has a separate dashboard card. Marking an item wasted also saves an individual card under Learn from what was wasted, including its category, original amount/unit, use-by date, date recorded and a category-specific prevention tip. Cards persist after refresh. Saved-food and quiz totals remain separate. Existing waste totals are retained; item history cannot be reconstructed for entries recorded before this update. The requested contact-check note was removed from the donation modal.

## بطاقات الهدر والوقاية
أضيفت بطاقة مستقلة للطعام المُهدر في لوحة الأثر. عند تسجيل عنصر كمُهدر تظهر بطاقة باسمه وفئته وكميته وتاريخه ونصيحة مناسبة لتقليل الهدر لاحقًا، وتُحفظ بعد إعادة فتح الصفحة. تظل إجماليات الطعام المنقذ واللعبة منفصلة. يحتفظ التحديث بإجمالي الهدر السابق، لكن لا يمكن استرجاع تفاصيل عناصر لم تُسجل سابقًا. تم حذف ملاحظة تاريخ مراجعة بيانات الجهات من نافذة التبرع.

The main section now follows the supplied layout screenshot: curved frame, slight tilt, pale peach offset edge, two angled labels and small decorative stars. The uploaded Earth image itself is unchanged and uses contain sizing.

القسم الرئيسي يتبع تنسيق لقطة الشاشة المرفقة بإطار منحني وميل خفيف وحافة خوخية هادئة وعبارات مائلة ونجوم بسيطة، مع الاحتفاظ بصورة الأرض نفسها دون تعديل.

Main image backing changed from peach to soft blue (#dce7ef); image and layout unchanged.

## SDG icons
Added square SDG 2, 12 and 13 icons to the matching impact cards. Arabic and English versions follow the language toggle. Icons are embedded locally and retain their original colors and proportions. Sources: https://open-sdg.org/sdg-translations/icons/ and https://www.un.org/sustainabledevelopment/news/communications-material/ .

أضيفت أيقونات الأهداف ٢ و١٢ و١٣ إلى بطاقات الأثر المناسبة، وتتبدل بين العربية والإنجليزية مع اللغة. الأيقونات مضمنة وتحافظ على ألوانها ونسبها الأصلية.

Dropdown arrows are consistently inset 12 px from the trailing edge: right in English, left in Arabic, with reserved text space.

أصبحت أسهم القوائم المنسدلة تبعد ١٢ بكسل عن نهاية الحقل، يمينًا بالإنجليزية ويسارًا بالعربية، مع مساحة تمنع تداخل النص معها.

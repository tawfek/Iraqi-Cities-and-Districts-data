(() => {
    const languages = {
        ar: { lightMode: 'الوضع الفاتح', darkMode: 'الوضع الداكن', copy: 'نسخ', copied: 'تم النسخ', expandCard: 'اضغط لعرض التفاصيل', selectPrompt: 'اختر محافظة من الخريطة لعرض التفاصيل', governorate: 'محافظة', districts: 'أقضية ونواحٍ', districtList: 'الأقضية والنواحي', districtLabel: 'أقضية', noDetails: 'لا تتوفر تفاصيل إضافية لهذه المنطقة', noData: 'لا توجد بيانات متاحة', noResults: 'لا توجد نتائج مطابقة للبحث', noDistricts: 'لا توجد أقضية', showOnMap: 'عرض على الخريطة', records: 'سجل' },
        en: { lightMode: 'Light mode', darkMode: 'Dark mode', copy: 'Copy', copied: 'Copied', expandCard: 'Click to view details', selectPrompt: 'Select a governorate on the map to view its details.', governorate: 'Governorate', districts: 'districts and subdistricts', districtList: 'Districts and subdistricts', districtLabel: 'districts', noDetails: 'No additional details are available for this area.', noData: 'No data available', noResults: 'No matching results found.', noDistricts: 'No districts', showOnMap: 'Show on map', records: 'records' },
        ku: { lightMode: 'دۆخی ڕوون', darkMode: 'دۆخی تاریک', copy: 'کۆپی', copied: 'کۆپی کرا', expandCard: 'کرتە بکە بۆ بینینی وردەکارییەکان', selectPrompt: 'لەسەر پارێزگایەک لەسەر نەخشەکە کرتە بکە بۆ بینینی وردەکارییەکانی.', governorate: 'پارێزگا', districts: 'قەزا و ناحیە', districtList: 'قەزا و ناحیەکان', districtLabel: 'قەزا', noDetails: 'هیچ وردەکارییەکی زیاتر بۆ ئەم ناوچەیە بەردەست نییە', noData: 'هیچ داتایەک بەردەست نییە', noResults: 'هیچ ئەنجامێکی هاوتا نەدۆزرایەوە', noDistricts: 'هیچ قەزایەک نییە', showOnMap: 'لەسەر نەخشە پیشانی بدە', records: 'تۆمار' }
    };

    const kurdishTranslations = {
        'الخريطة التفاعلية للمحافظات والأقضية': 'نەخشەی کارلێکخەری پارێزگا و قەزا عێراقییەکان', 'مرر المؤشر فوق المحافظة لمشاهدة التفاصيل والأقضية التابعة لها تلقائياً': 'نیشاندەرەکە بەسەر پارێزگایەکدا ببرە بۆ بینینی وردەکاری و قەزا پەیوەندیدارەکانی.',
        'التنقل في الصفحة': 'گەڕان لە پەڕەکە', 'استعراض البيانات': 'بینینی داتا', 'التوثيق الكامل': 'بەڵگەنامەی تەواو', 'أمثلة الاستخدام': 'نموونەکانی بەکارهێنان', 'المحافظة المحددة': 'پارێزگای دیاریکراو', 'لوحة الاستعراض السريع': 'پانێڵی خێرای بینین', 'تحديث حي': 'داتای زیندوو',
        'ضع مؤشر الماوس فوق أي محافظة في الخريطة لعرض الأقضية مباشرة': 'نیشاندەرەکە بەسەر پارێزگایەکدا ببرە بۆ بینینی قەزا پەیوەندیدارەکانی.', 'إعادة ضبط زاوية الخريطة': 'ڕێکخستنەوەی بینینی نەخشە', 'ابحث باسم المحافظة، القضاء، أو الناحية...': 'بگەڕێ بە ناوی پارێزگا، قەزا، یان ناحیە...',
        'مرجع البيانات': 'سەرچاوەی داتا', 'توثيق قاعدة بيانات المدن والأقضية العراقية': 'بەڵگەنامەی داتای شار و قەزا عێراقییەکان', 'هيكل المجلدات والملفات': 'پێکهاتەی بوخچە و فایلەکان', 'قواعد العلاقة بين الملفات': 'یاساکانی پەیوەندی نێوان فایلەکان', 'دليل ملفات المشروع': 'ڕێنمایی فایلەکانی پڕۆژە', 'قائمة ملفات البيانات': 'لیستی فایلەکانی داتا', 'بنية سجل المحافظة': 'پێکهاتەی تۆماری پارێزگا', 'بنية سجل القضاء': 'پێکهاتەی تۆماری قەزا', 'ملاحظات مهمة': 'تێبینییە گرنگەکان', 'الحقل': 'خانە', 'النوع': 'جۆر', 'الوصف': 'وەسف',
        'معرف المحافظة': 'ناسنامەی پارێزگا', 'الاسم العربي': 'ناوی عەرەبی', 'رمز لاتيني من 3 أحرف': 'کۆدی لاتینی سێ پیت', 'رمز ISO، مثل IQ-NA': 'کۆدی ISO، وەک IQ-NA', 'معرف الدولة': 'ناسنامەی وڵات', 'معرف تكامل Ebhar': 'ناسنامەی پەیوەندی Ebhar', 'معرف تكامل Alwaseet': 'ناسنامەی پەیوەندی Alwaseet', 'معرف القضاء': 'ناسنامەی قەزا', 'اسم القضاء أو الناحية': 'ناوی قەزا یان ناحیە', 'مرجع المحافظة': 'سەرچاوەی پارێزگا', 'حالة دعم Prime': 'دۆخی پشتگیری Prime', 'معرف Prime': 'ناسنامەی Prime', 'معرف Ebhar الاختياري': 'ناسنامەی هەڵبژاردەی Ebhar',
        'لا تحتاج أمثلة Node.js وPython إلى حزم خارجية. شغّلها من جذر المشروع.': 'نموونەکانی Node.js و Python پێویستیان بە پاکێجی دەرەکی نییە. لە ڕەگی پڕۆژەکەوە جێبەجێیان بکە.', 'البيانات لا تدعي مصدراً رسمياً أو ضماناً للاكتمال أو جدول تحديث ثابت.': 'داتاكان بانگەشەی سەرچاوەی فەرمی، دڵنیایی تەواوی، یان خشتەی نوێکردنەوەی دیاریکراو ناکەن.', 'فحص صحة البيانات:': 'پشکنینی تەندروستی داتا:', 'نسخ': 'کۆپی',
        'محافظة مسجلة': 'پارێزگای تۆمارکراو', 'سجل قضاء وناحية': 'تۆماری قەزا و ناحیە', 'ملف محافظة': 'فایلی پارێزگا', 'ملف GeoJSON': 'فایلی GeoJSON', 'نظرة عامة، التشغيل، الترخيص، والملاحظات': 'پوختە، جێبەجێکردن، مۆڵەت و تێبینییەکان', 'تعريف الحقول وقواعد العلاقات': 'پێناسەی خانەکان و یاساکانی پەیوەندی', 'بيانات المشروع وأمر التحقق': 'زانیاری پڕۆژە و فەرمانی پشکنین', 'فحص JSON والمفاتيح والروابط': 'پشکنینی JSON، کلیلەکان و پەیوەندییەکان', 'مثال قراءة البيانات باستخدام Node.js': 'نموونەی خوێندنەوەی داتا بە Node.js', 'مثال قراءة البيانات باستخدام Python': 'نموونەی خوێندنەوەی داتا بە Python', 'بيانات صغيرة للاختبارات والأمثلة': 'فایلی بچووک بۆ تاقیکردنەوە و نموونەکان', 'الأنماط المشتركة والوضعان الداكن والفاتح': 'ستایلی هاوبەش و دۆخی تاریک و ڕوون', 'منطق الخريطة والبيانات والبحث المشترك': 'لۆجیکی هاوبەشی نەخشە، داتا و گەڕان', 'واجهة الاستعراض والخريطة والتوثيق التفاعلي باللغتين': 'ڕووکاری دووزمانی بینین، نەخشە و بەڵگەنامە',
        'ملف ': 'فایلی ', ' هو سجل المحافظات. لكل سجل ملف أقضية يطابق اسمه قيمة ': ' تۆماری پارێزگاکانە. هەر پارێزگایەک فایلی قەزای هەیە کە ناوەکەی لەسەر بنەمای ', '، مثل ': '، وەک ', 'قيمة ': 'بڕی ', ' في كل قضاء تساوي ': ' لە هەر قەزایەکدا یەکسانە بە ', ' للمحافظة.': 'ی پارێزگاکە.', 'بادئة وامتداد اسم ملف المحافظة يطابقان ': 'پێشگر و کۆتایی ناوی فایلی پارێزگا یەکسانن بە ', ' ومعرفات الأقضية فريدة على مستوى مجموعة البيانات.': ' و ناسنامەکانی قەزا لە سەرانسەری داتا جیاوازن.', 'الملفات JSON بترميز UTF-8 وبمصفوفة في المستوى الأعلى.': 'فایلە JSON ـەکان بە UTF-8 ـن و لە ئاستی سەرەوەدا پەیکەرێکیان هەیە.', ' contains governorate boundaries in GeoJSON format. The page uses ': ' سنووری پارێزگاکان بە فۆرماتی GeoJSON لەخۆدەگرێت. پەڕەکە بەکاردەهێنێت ', 'The file contains boundaries only, not coordinates inside city or district records.': 'فایلەکە تەنها سنوورەکانە، نەک کۆئۆردیناتی ناو تۆمارەکانی شار یان قەزا.', 'استخدم ': 'بەکاربهێنە ', ' كمعرفات مستقرة، ولا تعتمد على الاسم العربي كمفتاح فريد.': ' وەک ناسنامەی جێگیر. ناوی عەرەبی وەک کلیلی تاک بەکارمەهێنە.', 'قد تكون قيمة ': 'ڕەنگە بڕی ', ' فارغة ': ' بەتاڵ بێت ', '، وهذا يعني أن الربط الاختياري غير متوفر.': '؛ ئەمە واتە بەستنەوەی هەڵبژاردە بەردەست نییە.'
    };

    const staticTranslations = {
        'الخريطة التفاعلية للمحافظات والأقضية': 'Iraqi Governorates and Districts Interactive Map',
        'مرر المؤشر فوق المحافظة لمشاهدة التفاصيل والأقضية التابعة لها تلقائياً': 'Hover over a governorate to view its details and districts.',
        'التنقل في الصفحة': 'Page navigation', 'استعراض البيانات': 'Browse data', 'التوثيق الكامل': 'Full documentation', 'أمثلة الاستخدام': 'Usage examples',
        'المحافظة المحددة': 'Selected governorate', 'لوحة الاستعراض السريع': 'Quick browser', 'تحديث حي': 'Live data',
        'ضع مؤشر الماوس فوق أي محافظة في الخريطة لعرض الأقضية مباشرة': 'Hover over a governorate on the map to view its districts.',
        'إعادة ضبط زاوية الخريطة': 'Reset map view', 'ابحث باسم المحافظة، القضاء، أو الناحية...': 'Search by governorate, district, or subdistrict...',
        'مرجع البيانات': 'Data reference', 'توثيق قاعدة بيانات المدن والأقضية العراقية': 'Iraqi Cities and Districts Data Documentation',
        'هيكل المجلدات والملفات': 'Folder and file structure', 'قواعد العلاقة بين الملفات': 'Relationships between files', 'دليل ملفات المشروع': 'Project file guide',
        'قائمة ملفات البيانات': 'Data files', 'بنية سجل المحافظة': 'Governorate record schema', 'بنية سجل القضاء': 'District record schema',
        'فحص صحة البيانات:': 'Dataset validation:', 'ملاحظات مهمة': 'Important notes', 'نوع': 'Type', 'الوصف': 'Description', 'الحقل': 'Field',
        'معرف المحافظة': 'Governorate identifier', 'الاسم العربي': 'Arabic display name', 'رمز لاتيني من 3 أحرف': 'Three-letter Latin code',
        'رمز ISO، مثل IQ-NA': 'ISO code, such as IQ-NA', 'معرف الدولة': 'Country identifier', 'معرف تكامل Ebhar': 'Ebhar integration identifier', 'معرف تكامل Alwaseet': 'Alwaseet integration identifier',
        'معرف القضاء': 'District identifier', 'اسم القضاء أو الناحية': 'District or subdistrict name', 'مرجع المحافظة': 'Governorate reference', 'حالة دعم Prime': 'Prime support status', 'معرف Prime': 'Prime identifier', 'معرف Ebhar الاختياري': 'Optional Ebhar identifier',
        'أمثلة الاستخدام': 'Usage examples', 'لا تحتاج أمثلة Node.js وPython إلى حزم خارجية. شغّلها من جذر المشروع.': 'The Node.js and Python examples use only standard language features. Run them from the project root.',
        'البيانات لا تدعي مصدراً رسمياً أو ضماناً للاكتمال أو جدول تحديث ثابت.': 'The dataset does not currently claim an official source, completeness guarantee, or fixed update schedule.',
        'هذا المستودع يوفر بيانات JSON مفتوحة للمحافظات العراقية والأقضية والنواحي التابعة لها، مع معرفات ثابتة مناسبة لنماذج العناوين، وتكاملات التوصيل، والبحث الجغرافي. الأسماء المعروضة محفوظة باللغة العربية كما وردت في البيانات.': 'This repository provides open JSON data for Iraqi governorates and their districts and subdistricts, with stable identifiers for address forms, delivery integrations, and geographic lookups. Display names are preserved in Arabic as supplied by the dataset.',
        'محافظة مسجلة': 'registered governorates', 'سجل قضاء وناحية': 'district records', 'ملف محافظة': 'governorate files', 'ملف GeoJSON': 'GeoJSON file',
        'ملف ': 'The ', ' هو سجل المحافظات. لكل سجل ملف أقضية يطابق اسمه قيمة ': ' is the governorate registry. Each governorate has a district file whose name follows the ', '، مثل ': ', such as ',
        'قيمة ': 'The ', ' في كل قضاء تساوي ': ' in each district equals ', ' للمحافظة.': ' of its governorate.',
        'بادئة وامتداد اسم ملف المحافظة يطابقان ': 'The filename prefix and suffix match ', ' ومعرفات الأقضية فريدة على مستوى مجموعة البيانات.': ' and district IDs are unique across the dataset.', 'الملفات JSON بترميز UTF-8 وبمصفوفة في المستوى الأعلى.': 'JSON files are UTF-8 encoded and contain top-level arrays.',
        'نظرة عامة، التشغيل، الترخيص، والملاحظات': 'Overview, setup, license, and notes', 'تعريف الحقول وقواعد العلاقات': 'Field definitions and relationships', 'بيانات المشروع وأمر التحقق': 'Project metadata and validation command', 'فحص JSON والمفاتيح والروابط': 'JSON, key, and relationship checks', 'مثال قراءة البيانات باستخدام Node.js': 'Node.js data-reading example', 'مثال قراءة البيانات باستخدام Python': 'Python data-reading example', 'بيانات صغيرة للاختبارات والأمثلة': 'Small fixture for tests and documentation', 'الأنماط المشتركة والوضعان الداكن والفاتح': 'Shared layout and dark/light theme styles', 'منطق الخريطة والبيانات والبحث المشترك': 'Shared map, data, and search logic', 'واجهة الاستعراض والخريطة والتوثيق التفاعلي باللغتين': 'Bilingual interactive browser, map, and documentation',
        ' يحتوي حدود المحافظات بصيغة GeoJSON. يستخدم التطبيق ': ' contains governorate boundaries in GeoJSON format. The page uses ', '، مثل ': ', such as ', '، لربط الشكل بالمحافظة في ': ', to connect each shape to ', 'الملف يحدد الحدود فقط ولا يضيف إحداثيات داخل سجلات المدن أو الأقضية.': 'The file contains boundaries only, not coordinates inside city or district records.',
        'استخدم ': 'Use ', ' كمعرفات مستقرة، ولا تعتمد على الاسم العربي كمفتاح فريد.': ' as stable identifiers. Do not use Arabic names as unique keys.', 'قد تكون قيمة ': ' may be ', ' فارغة ': ' ', '، وهذا يعني أن الربط الاختياري غير متوفر.': '; this means the optional mapping is unavailable.',
        'فحص صحة البيانات: ': 'Dataset validation: ', 'نسخ': 'Copy'
    };

    const translationTables = { ar: Object.fromEntries(Object.keys(staticTranslations).map(key => [key, key])), en: staticTranslations, ku: kurdishTranslations };
    let currentLanguage = localStorage.getItem('language') || 'ar';
    let text = languages[currentLanguage] || languages.ar;
    const DATA_BASE_URL = './data';
    const districtsMap = new Map();
    const cityLayerMap = new Map();
    let citiesList = [];
    let map;
    let geojsonLayer;
    let activeSelectedCity = null;
    let activeLayer = null;
    let expandedCityId = null;

    const contentTranslations = {
        pageTitle: {
            ar: '🇮🇶 الخريطة التفاعلية للمحافظات والأقضية',
            en: '🇮🇶 Iraqi Governorates and Districts Interactive Map', ku: '🇮🇶 نەخشەی کارلێکخەری پارێزگا و قەزا عێراقییەکان'
        },
        footerCredit: {
            ar: 'صُنع بحب <svg class="footer-heart" aria-hidden="true" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0 7.78Z"></path></svg>',
            en: 'Made with <svg class="footer-heart" aria-hidden="true" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0 7.78Z"></path></svg> by',
            ku: 'بە خۆشەویستی دروستکراوە <svg class="footer-heart" aria-hidden="true" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0 7.78Z"></path></svg>'
        },
        fileReadme: { ar: 'نظرة عامة، التشغيل، الترخيص، والملاحظات', en: 'Overview, setup, license, and notes', ku: 'پوختە، دامەزراندن، مۆڵەت و تێبینییەکان' },
        fileReadmeAr: { ar: 'نسخة README باللغة العربية', en: 'Arabic README translation', ku: 'وەرگێڕانی README بە عەرەبی' },
        fileReadmeKu: { ar: 'نسخة README بالكوردية السورانية', en: 'Sorani Kurdish README translation', ku: 'وەشانی README بە کوردیی سۆرانی' },
        fileDictionaryAr: { ar: 'قاموس البيانات بالعربية', en: 'Arabic data dictionary', ku: 'فەرهەنگی داتا بە عەرەبی' },
        fileDictionaryKu: { ar: 'قاموس البيانات بالكردية', en: 'Sorani Kurdish data dictionary', ku: 'فەرهەنگی داتا بە کوردیی سۆرانی' },
        fileContributing: { ar: 'قواعد المساهمة باللغة الإنجليزية', en: 'English contribution guidelines', ku: 'ڕێنمایی بەشداری بە ئینگلیزی' },
        fileContributingAr: { ar: 'قواعد المساهمة بالعربية', en: 'Arabic contribution guidelines', ku: 'ڕێنمایی بەشداری بە عەرەبی' },
        fileContributingKu: { ar: 'قواعد المساهمة بالكردية', en: 'Sorani Kurdish contribution guidelines', ku: 'ڕێنمایی بەشداری بە کوردیی سۆرانی' },
        relationshipsTitle: { ar: 'قواعد العلاقة بين الملفات', en: 'Relationships between files', ku: 'یاساکانی پەیوەندی نێوان فایلەکان' },
        relationshipStateId: { ar: 'قيمة <code class="text-emerald-300">state_id</code> في كل قضاء تساوي <code class="text-emerald-300">id</code> للمحافظة.', en: 'Each district’s <code class="text-emerald-300">state_id</code> equals the governorate’s <code class="text-emerald-300">id</code>.', ku: 'بڕی <code class="text-emerald-300">state_id</code> لە هەر قەزایەکدا یەکسانە بە <code class="text-emerald-300">id</code> ـی پارێزگاکە.' },
        relationshipFilename: { ar: 'بادئة وامتداد اسم ملف المحافظة يطابقان <code class="text-emerald-300">id</code> و<code class="text-emerald-300">key</code>.', en: 'The governorate filename prefix and suffix match its <code class="text-emerald-300">id</code> and <code class="text-emerald-300">key</code>.', ku: 'پێشگر و کۆتایی ناوی فایلی پارێزگا یەکسانن بە <code class="text-emerald-300">id</code> و <code class="text-emerald-300">key</code> ـەکەی.' },
        relationshipUniqueIds: { ar: 'معرفات الأقضية فريدة على مستوى مجموعة البيانات.', en: 'District IDs are unique across the dataset.', ku: 'ناسنامەکانی قەزا لە سەرانسەری داتا جیاوازن.' },
        fieldHeader: { ar: 'الحقل', en: 'Field', ku: 'خانە' }, typeHeader: { ar: 'النوع', en: 'Type', ku: 'جۆر' }, descriptionHeader: { ar: 'الوصف', en: 'Description', ku: 'وەسف' },
        folderDescription: {
            ar: 'ملف <span class="text-emerald-300">cities.json</span> هو سجل المحافظات. لكل سجل ملف أقضية يطابق اسمه قيمة <span class="text-emerald-300">id-key</span>، مثل <span class="text-emerald-300">1-NJF.json</span>.',
            en: '<span class="text-emerald-300">cities.json</span> is the governorate registry. Each governorate has a district file whose name follows the <span class="text-emerald-300">id-key</span> pattern, such as <span class="text-emerald-300">1-NJF.json</span>.',
            ku: '<span class="text-emerald-300">cities.json</span> تۆماری پارێزگاکانە. هەر پارێزگایەک فایلی قەزای هەیە کە ناوەکەی لەسەر بنەمای <span class="text-emerald-300">id-key</span> ـە، وەک <span class="text-emerald-300">1-NJF.json</span>.'
        },
        geoJsonDescription: {
            ar: '<span class="text-sky-300 font-mono-num">geoBoundaries-IRQ-ADM1_simplified.geojson</span> يحتوي حدود المحافظات بصيغة GeoJSON. يستخدم التطبيق <code class="text-slate-200">properties.shapeISO</code>، مثل <code class="text-slate-200">IQ-KA</code>، لربط الشكل بالمحافظة في <code class="text-slate-200">cities.json</code>. الملف يحدد الحدود فقط ولا يضيف إحداثيات داخل سجلات المدن أو الأقضية.',
            en: '<span class="text-sky-300 font-mono-num">geoBoundaries-IRQ-ADM1_simplified.geojson</span> contains governorate boundaries in GeoJSON format. The page uses <code class="text-slate-200">properties.shapeISO</code>, such as <code class="text-slate-200">IQ-KA</code>, to connect each shape to its governorate in <code class="text-slate-200">cities.json</code>. The file contains boundaries only, not coordinates inside city or district records.',
            ku: '<span class="text-sky-300 font-mono-num">geoBoundaries-IRQ-ADM1_simplified.geojson</span> سنووری پارێزگاکان بە فۆرماتی GeoJSON لەخۆدەگرێت. پەڕەکە <code class="text-slate-200">properties.shapeISO</code>، وەک <code class="text-slate-200">IQ-KA</code>، بەکاردەهێنێت بۆ بەستنەوەی هەر شێوەیەک بە پارێزگاکەی لە <code class="text-slate-200">cities.json</code>. فایلەکە تەنها سنوورەکانە، نەک کۆئۆردیناتی ناو تۆمارەکانی شار یان قەزا.'
        },
        stableIdsNote: {
            ar: 'استخدم <code class="text-amber-200">id</code> و<code class="text-amber-200">key</code> كمعرفات مستقرة، ولا تعتمد على الاسم العربي كمفتاح فريد.',
            en: 'Use <code class="text-amber-200">id</code> and <code class="text-amber-200">key</code> as stable identifiers. Do not use Arabic names as unique keys.', ku: '<code class="text-amber-200">id</code> و <code class="text-amber-200">key</code> وەک ناسنامەی جێگیر بەکاربهێنە. ناوی عەرەبی وەک کلیلی تاک بەکارمەهێنە.'
        },
        optionalMappingNote: {
            ar: 'قد تكون قيمة <code class="text-amber-200">ebhar_id</code> فارغة <code class="text-amber-200">null</code>، وهذا يعني أن الربط الاختياري غير متوفر.',
            en: '<code class="text-amber-200">ebhar_id</code> may be <code class="text-amber-200">null</code>; this means the optional mapping is unavailable.', ku: 'ڕەنگە <code class="text-amber-200">ebhar_id</code> <code class="text-amber-200">null</code> بێت؛ ئەمە واتە بەستنەوەی هەڵبژاردە بەردەست نییە.'
        }
    };

    const canonicalHeart = '<svg class="footer-heart" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.02 6.02 0 0 1 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35Z" clip-rule="evenodd"></path></svg>';
    contentTranslations.footerCredit = {
        ar: `صُنع بحب ${canonicalHeart}`,
        en: `Made with ${canonicalHeart} by`,
        ku: `بە خۆشەویستی دروستکراوە ${canonicalHeart}`
    };

    function applyStaticTranslations() {
        document.documentElement.lang = currentLanguage;
        document.documentElement.dir = currentLanguage === 'en' ? 'ltr' : 'rtl';
        document.title = currentLanguage === 'en' ? 'Iraqi Cities and Districts Data | Interactive Map' : currentLanguage === 'ku' ? 'داتای شار و قەزاکانی عێراق | نەخشەی کارلێکخەر' : 'دليل خريطة المحافظات والأقضية العراقية | Iraqi Interactive Map';
        document.querySelectorAll('[data-i18n-content]').forEach(element => {
            const translation = contentTranslations[element.dataset.i18nContent];
            if (translation) element.innerHTML = translation[currentLanguage];
        });
        const translate = node => {
            if (node.nodeType === Node.TEXT_NODE) {
                const value = node.nodeValue.trim();
                const source = Object.keys(translationTables).reduce((found, language) => found || Object.keys(translationTables[language]).find(key => translationTables[language][key] === value), null) || value;
                const translated = translationTables[currentLanguage][source];
                if (translated) node.nodeValue = node.nodeValue.replace(value, translated);
            } else if (node.nodeType === Node.ELEMENT_NODE && !['SCRIPT', 'STYLE'].includes(node.tagName) && node.id !== 'citiesGrid' && node.id !== 'sidebarContent' && node.id !== 'fileList') {
                node.childNodes.forEach(translate);
            }
        };
        document.body.childNodes.forEach(translate);
        const search = document.getElementById('searchInput');
        if (search) search.placeholder = translationTables[currentLanguage]['ابحث باسم المحافظة، القضاء، أو الناحية...'] || 'ابحث باسم المحافظة، القضاء، أو الناحية...';
        const sidebar = document.getElementById('sidebarContent');
        if (sidebar && !citiesList.length) sidebar.innerHTML = `<div class="text-slate-400 text-sm">${text.selectPrompt}</div>`;
        const toggle = document.getElementById('languageToggle');
        if (toggle) {
            const languageNames = { ar: 'العربية', en: 'English', ku: 'کوردی' };
            toggle.querySelector('[data-language-current]').textContent = languageNames[currentLanguage];
            toggle.setAttribute('aria-label', `${languageNames[currentLanguage]} - اختيار اللغة`);
            document.querySelectorAll('[data-language]').forEach(option => option.classList.toggle('is-active', option.dataset.language === currentLanguage));
        }
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const label = document.documentElement.classList.contains('light-mode') ? text.darkMode : text.lightMode;
            themeToggle.setAttribute('aria-label', label);
            themeToggle.setAttribute('title', label);
        }
    }

    function initLanguage() {
        applyStaticTranslations();
        const toggle = document.getElementById('languageToggle');
        const menu = document.getElementById('languageMenu');
        toggle?.addEventListener('click', () => {
            const isOpen = menu?.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
            menu?.setAttribute('aria-hidden', String(!isOpen));
        });
        menu?.querySelectorAll('[data-language]').forEach(option => option.addEventListener('click', () => {
            currentLanguage = option.dataset.language;
            text = languages[currentLanguage];
            localStorage.setItem('language', currentLanguage);
            applyStaticTranslations();
            renderCities(citiesList);
            renderDocumentation();
            resetSelection();
            menu.classList.remove('is-open');
            toggle?.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-hidden', 'true');
        }));
        document.addEventListener('click', event => {
            if (!event.target.closest('.language-switcher')) {
                menu?.classList.remove('is-open');
                toggle?.setAttribute('aria-expanded', 'false');
                menu?.setAttribute('aria-hidden', 'true');
            }
        });
    }

    function initSmoothScrolling() {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        document.addEventListener('click', event => {
            const link = event.target.closest('a[href^="#"]');
            if (!link) return;
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;

            event.preventDefault();
            if (reduceMotion.matches) {
                target.scrollIntoView();
            } else {
                const start = window.scrollY;
                const destination = target.getBoundingClientRect().top + start - 16;
                const distance = destination - start;
                const duration = Math.min(950, Math.max(450, Math.abs(distance) * 0.55));
                const startedAt = performance.now();
                const easeInOut = progress => progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                const animate = now => {
                    const progress = Math.min((now - startedAt) / duration, 1);
                    window.scrollTo(0, start + distance * easeInOut(progress));
                    if (progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
            }
            history.pushState(null, '', link.getAttribute('href'));
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
        });
    }

    function initNavigationSpy() {
        const links = [...document.querySelectorAll('.top-navigation a[href^="#"]')];
        const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
        if (!links.length || !sections.length) return;

        const setActive = sectionId => {
            links.forEach(link => {
                const isActive = link.getAttribute('href') === `#${sectionId}`;
                link.classList.toggle('is-active', isActive);
                if (isActive) link.setAttribute('aria-current', 'page');
                else link.removeAttribute('aria-current');
            });
        };

        let ticking = false;
        const updateActiveSection = () => {
            const toolbar = document.querySelector('.top-toolbar');
            const activationLine = (toolbar?.getBoundingClientRect().bottom || 0) + 24;
            let activeSection = sections[0];

            sections.forEach(section => {
                if (section.getBoundingClientRect().top <= activationLine) activeSection = section;
            });

            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
                activeSection = sections[sections.length - 1];
            }
            setActive(activeSection.id);
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateActiveSection);
                ticking = true;
            }
        }, { passive: true });
        window.addEventListener('resize', updateActiveSection);
        updateActiveSection();
    }

    function initTheme() {
        const toggle = document.getElementById('themeToggle');
        const applyTheme = isLight => {
            document.body.classList.toggle('light-mode', isLight);
            document.documentElement.classList.toggle('light-mode', isLight);
            toggle?.setAttribute('aria-pressed', String(isLight));
            if (toggle) {
                const label = isLight ? text.darkMode : text.lightMode;
                toggle.setAttribute('aria-label', label);
                toggle.setAttribute('title', label);
            }
        };
        applyTheme(localStorage.getItem('theme') === 'light');
        toggle?.addEventListener('click', () => {
            const isLight = !document.body.classList.contains('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            applyTheme(isLight);
        });
    }

    function initMap() {
        map = L.map('map', { center: [33.2232, 43.6793], zoom: 5.5, zoomControl: false, attributionControl: false });
        L.control.zoom({ position: 'topleft' }).addTo(map);
        map.on('click', event => { if (!event.originalEvent._stopped) resetSelection(); });
        document.getElementById('resetViewBtn')?.addEventListener('click', resetSelection);
    }

    function resetSelection() {
        activeSelectedCity = null;
        expandedCityId = null;
        if (activeLayer && geojsonLayer) { geojsonLayer.resetStyle(activeLayer); activeLayer = null; }
        map.setView([33.2232, 43.6793], 5.5);
        document.querySelectorAll('.city-card').forEach(card => card.classList.remove('ring-2', 'ring-emerald-500', 'border-emerald-500'));
        document.querySelectorAll('.city-card').forEach(card => { card.classList.remove('is-open'); card.setAttribute('aria-expanded', 'false'); });
        const sidebar = document.getElementById('sidebarContent');
        if (sidebar) sidebar.innerHTML = `<div class="text-slate-400 text-sm">${text.selectPrompt}</div>`;
    }

    async function loadDistricts(cities) {
        await Promise.all(cities.map(async city => {
            try {
                const response = await fetch(`${DATA_BASE_URL}/${city.id}-${city.key}.json`);
                if (!response.ok) throw new Error();
                const data = await response.json();
                districtsMap.set(Number(city.id), { status: 'success', data: Array.isArray(data) ? data : (data.districts || data.data || []) });
            } catch { districtsMap.set(Number(city.id), { status: 'error', data: [] }); }
        }));
    }

    function findMatchedCity(properties) {
        if (!properties) return null;
        const shapeISO = (properties.shapeISO || properties.ISO_1 || '').toUpperCase().trim();
        if (shapeISO) { const match = citiesList.find(city => city.iso_code === shapeISO); if (match) return match; }
        const shapeName = (properties.shapeName || properties.name || '').toLowerCase().trim();
        return citiesList.find(city => shapeName.includes((city.key || '').toLowerCase()) || shapeName.includes((city.name || '').toLowerCase()));
    }

    function getDistrictName(district) {
        if (typeof district === 'string') return district;
        return district?.name || district?.ar_name || district?.name_ar || '';
    }

    function featureStyle() { return { fillColor: '#0ea5e9', weight: 1.5, opacity: 0.8, color: '#334155', fillOpacity: 0.25 }; }
    function highlightStyle() { return { fillColor: '#10b981', fillOpacity: 0.55, weight: 2, color: '#34d399' }; }

    function onEachFeature(feature, layer) {
        const city = findMatchedCity(feature.properties);
        const cityName = city ? city.name : (feature.properties.shapeName || feature.properties.name || feature.properties.shapeISO || text.governorate);
        if (city) cityLayerMap.set(Number(city.id), layer);
        const state = city ? districtsMap.get(Number(city.id)) : null;
        const count = state ? state.data.length : 0;
        layer.bindTooltip(`<div><div class="font-bold text-sm text-white">${cityName}</div><div class="text-[11px] text-emerald-400 font-mono mt-0.5">${count} ${text.districts}</div></div>`, { permanent: false, direction: 'center', sticky: false, className: 'custom-tooltip' });
        layer.on({
            mouseover: event => { const target = event.target; if (target.getBounds) target.openTooltip(target.getBounds().getCenter()); if (!activeSelectedCity) { target.setStyle(highlightStyle()); target.bringToFront(); updateSidebar(city, cityName); } },
            mouseout: event => { const target = event.target; if (target !== activeLayer) geojsonLayer.resetStyle(target); if (!activeSelectedCity) document.getElementById('sidebarContent').innerHTML = `<div class="text-slate-400 text-sm">${text.selectPrompt}</div>`; },
            click: event => { event.originalEvent._stopped = true; selectCity(city, layer); }
        });
    }

    function selectCity(city, layer, scroll = false) {
        if (!city || !layer) return;
        if (activeLayer && activeLayer !== layer) geojsonLayer.resetStyle(activeLayer);
        activeSelectedCity = city; activeLayer = layer;
        layer.setStyle(highlightStyle()); layer.bringToFront();
        map.fitBounds(layer.getBounds(), { padding: [25, 25] });
        updateSidebar(city, city.name); expandCard(city.id); highlightCard(city.id);
        if (scroll) document.getElementById('map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function highlightCard(cityId) {
        document.querySelectorAll('.city-card').forEach(card => card.classList.remove('ring-2', 'ring-emerald-500', 'border-emerald-500'));
        document.getElementById(`city-card-${cityId}`)?.classList.add('ring-2', 'ring-emerald-500', 'border-emerald-500');
    }

    function expandCard(cityId) {
        expandedCityId = Number(cityId);
        document.querySelectorAll('.city-card').forEach(card => {
            const isOpen = card.id === `city-card-${expandedCityId}`;
            card.classList.toggle('is-open', isOpen);
            card.setAttribute('aria-expanded', String(isOpen));
        });
    }

    function toggleCard(cityId) {
        const numericCityId = Number(cityId);
        if (expandedCityId === numericCityId) {
            expandedCityId = null;
            document.querySelectorAll('.city-card').forEach(card => {
                card.classList.remove('is-open');
                card.setAttribute('aria-expanded', 'false');
            });
            return;
        }
        expandCard(numericCityId);
    }

    function updateSidebar(city, fallbackName) {
        const sidebar = document.getElementById('sidebarContent');
        if (!sidebar) return;
        if (!city) { sidebar.innerHTML = `<h3 class="text-lg font-bold text-white mb-1">${fallbackName}</h3><p class="text-xs text-slate-400">${text.noDetails}</p>`; return; }
        const districts = districtsMap.get(Number(city.id))?.data || [];
        sidebar.innerHTML = `<div class="mb-3"><h3 class="text-xl font-bold text-emerald-400 mb-1">${city.name}</h3><span class="text-xs text-slate-500 font-mono uppercase">${city.key} • ISO: ${city.iso_code || 'N/A'}</span></div><div class="mt-4"><div class="text-xs font-semibold text-slate-300 mb-2">${text.districtList} (${districts.length}):</div><div class="flex flex-wrap gap-1.5 max-h-56 overflow-y-auto pr-1">${districts.length ? districts.map(district => `<span class="text-xs bg-slate-800 text-slate-200 border border-slate-700/80 px-2.5 py-1 rounded-lg">${getDistrictName(district)}</span>`).join('') : `<span class="text-xs text-slate-500">${text.noData}</span>`}</div></div>`;
    }

    function renderCities(items) {
        const grid = document.getElementById('citiesGrid');
        if (!grid) return;
        grid.innerHTML = '';
        if (!items.length) { grid.innerHTML = `<div class="col-span-full text-center py-12 bg-slate-900/40 border border-slate-800/80 rounded-2xl"><p class="text-slate-400 font-medium">${text.noResults}</p></div>`; return; }
        items.forEach(city => {
            const districts = districtsMap.get(Number(city.id))?.data || [];
            const card = document.createElement('div');
            card.id = `city-card-${city.id}`;
            card.className = `city-card ${expandedCityId === Number(city.id) ? 'is-open' : ''} bg-slate-900/70 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between`;
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-expanded', String(expandedCityId === Number(city.id)));
            card.innerHTML = `<div><div class="flex items-start justify-between gap-2 mb-3"><div><h2 class="text-xl font-bold text-white">${city.name}</h2><span class="text-xs text-slate-500 font-mono capitalize">${city.key} • ${city.iso_code || ''}</span></div><div class="flex items-center gap-2"><span class="text-xs font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 px-2 py-0.5 rounded-md">${districts.length} ${text.districtLabel}</span><span class="card-chevron" aria-hidden="true"></span></div></div><div class="card-expand-hint">${text.expandCard}</div><div class="city-card-details mt-4 pt-3 border-t border-slate-800/80"><div class="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1">${districts.length ? districts.map(district => `<span class="text-xs bg-slate-800/90 text-slate-300 border border-slate-700/60 px-2 py-0.5 rounded-md">${getDistrictName(district)}</span>`).join('') : `<span class="text-xs text-slate-500">${text.noDistricts}</span>`}</div></div></div><div class="city-card-actions mt-5 pt-3 border-t border-slate-800/50 flex justify-end"><button onclick="handleCardShowOnMap(${city.id})" class="text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/50 px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 cursor-pointer"><span>${text.showOnMap}</span><span aria-hidden="true">⌖</span></button></div>`;
            const handleCardToggle = event => { if (event.target.closest('button')) return; toggleCard(city.id); };
            card.addEventListener('click', handleCardToggle);
            card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); handleCardToggle(event); } });
            grid.appendChild(card);
        });
    }

    function renderDocumentation() {
        const fileList = document.getElementById('fileList');
        if (fileList) fileList.innerHTML = citiesList.map(city => `<a href="./data/${city.id}-${city.key}.json" target="_blank" rel="noopener" class="file-link"><b>${city.id}-${city.key}.json</b><span>${districtsMap.get(Number(city.id))?.data.length || 0} ${text.records}</span></a>`).join('');
        const total = citiesList.reduce((sum, city) => sum + (districtsMap.get(Number(city.id))?.data.length || 0), 0);
        document.querySelector('[data-stat="cities"]')?.replaceChildren(document.createTextNode(citiesList.length.toLocaleString('en-US')));
        document.querySelector('[data-stat="districts"]')?.replaceChildren(document.createTextNode(total.toLocaleString('en-US')));
    }

    function bindSearch() {
        document.getElementById('searchInput')?.addEventListener('input', event => {
            const query = event.target.value.toLowerCase().trim();
            if (!query) return renderCities(citiesList);
            renderCities(citiesList.filter(city => {
                const districts = districtsMap.get(Number(city.id))?.data || [];
                return (city.name || '').toLowerCase().includes(query) || (city.key || '').toLowerCase().includes(query) || districts.some(district => getDistrictName(district).toLowerCase().includes(query));
            }));
        });
    }

    function bindCodeEditors() {
        document.querySelectorAll('[data-copy-target]').forEach(button => {
            button.addEventListener('click', async () => {
                const code = document.getElementById(button.dataset.copyTarget);
                if (!code) return;
                await navigator.clipboard?.writeText(code.textContent);
                button.textContent = text.copied;
                window.setTimeout(() => { button.textContent = text.copy; }, 1400);
            });
        });
    }

    window.handleCardShowOnMap = cityId => { const city = citiesList.find(item => Number(item.id) === Number(cityId)); const layer = cityLayerMap.get(Number(cityId)); if (city && layer) selectCity(city, layer, true); };

    async function init() {
        initLanguage(); initTheme(); initMap(); bindSearch(); bindCodeEditors(); initSmoothScrolling(); initNavigationSpy();
        try {
            const response = await fetch(`${DATA_BASE_URL}/cities.json`);
            if (!response.ok) throw new Error(`Failed to load cities.json: ${response.status}`);
            citiesList = (await response.json()).map(city => ({ ...city, id: Number(city.id) }));
            await loadDistricts(citiesList);
            renderCities(citiesList); renderDocumentation();
            const geoResponse = await fetch(`${DATA_BASE_URL}/geoBoundaries-IRQ-ADM1_simplified.geojson`);
            if (!geoResponse.ok) throw new Error(`GeoJSON fetch error status: ${geoResponse.status}`);
            geojsonLayer = L.geoJSON(await geoResponse.json(), { style: featureStyle, onEachFeature }).addTo(map);
        } catch (error) { console.error('Initialization error:', error); }
    }

    init();
})();

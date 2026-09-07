# بيانات المدن والأقضية العراقية

[English](README.md) | [العربية](README_ar.md) | [کوردی](README_ku.md)

بيانات JSON مفتوحة للمحافظات العراقية والأقضية والنواحي التابعة لها. صُممت
البيانات لنماذج العناوين، وتكاملات التوصيل، والبحث الجغرافي، والتطبيقات التي
تحتاج إلى معرفات مستقرة للمدن والأقضية.

![Project preview](image.png)

[Live preview](https://tawfek.github.io/Iraqi-Cities-and-Districts-data/)

## محتويات المستودع

```text
data/
  cities.json       # سجل 18 محافظة
  1-NJF.json        # أقضية النجف
  2-KRB.json        # أقضية كربلاء
  ...
  18-MOS.json       # أقضية الموصل
  geoBoundaries-IRQ-ADM1_simplified.geojson  # حدود المحافظات
examples/
  data/najaf-sample.json
  javascript/read.js
  python/read.py
scripts/validate.js
shared.css           # الأنماط المشتركة والسمات
shared.js            # منطق الخريطة والبيانات والبحث واللغات
```

الصفحة الوحيدة `index.html` هي متصفح تفاعلي للبيانات، وتحتوي على خريطة
Leaflet، والبحث، وبطاقات قابلة للطي، والوضع الداكن/الفاتح، ودعم العربية
والإنجليزية والكردية السورانية. يمكن إضافة لغة جديدة إلى سجل اللغات في
`shared.js` دون إنشاء صفحة HTML أخرى.

كل ملف محافظة هو مصفوفة JSON. يحدد `cities.json` المحافظة التي ينتمي إليها
كل ملف، ويطابق الرقم والرمز اللاتيني في اسم الملف قيمتي `id` و`key`.
تحتوي البيانات حالياً على 18 محافظة و3,933 سجل قضاء وناحية، مع إبقاء الأسماء
العربية كما وردت في المصدر.

## الحدود الجغرافية

الملف `data/geoBoundaries-IRQ-ADM1_simplified.geojson` هو ملف GeoJSON من نوع
`FeatureCollection` يحتوي على مضلعات مبسطة لحدود المحافظات في المستوى الإداري
ADM1. تتضمن الخصائص `shapeName` و`shapeISO` و`shapeID` و`shapeGroup` و`shapeType`.
تستخدم الصفحة `shapeISO`، مثل `IQ-NA` و`IQ-KA`، لربط الشكل بقيمة
`cities.json.iso_code`.

يحتوي ملف GeoJSON على الهندسة الجغرافية فقط. لا تحتوي سجلات المدن أو الأقضية
على إحداثيات خطوط الطول والعرض.

## GitHub Pages

يتضمن المستودع الملف `.github/workflows/pages.yml` الذي ينشر الموقع الثابت
تلقائياً عند دفع التغييرات إلى `main`. من إعدادات مستودع GitHub، افتح
**Settings > Pages** واختر **GitHub Actions** كمصدر للنشر. سيكون الرابط:

```text
https://<owner>.github.io/<repository>/
```

لا يحتاج الموقع إلى خادم أو أمر بناء. تستخدم الخريطة وملفات JSON وGeoJSON
وCSS وJavaScript وروابط التوثيق مسارات نسبية، ولذلك تعمل من المسار الفرعي
لمشروع GitHub Pages.

## البدء السريع

### JavaScript / Node.js

```bash
node examples/javascript/read.js
```

```js
const cities = require('./data/cities.json');
const districts = require('./data/1-NJF.json');
const najaf = cities.find((city) => city.key === 'NJF');
console.log(najaf.name, districts.length);
```

### Python

```bash
python examples/python/read.py
```

```python
import json
from pathlib import Path

root = Path("data")
cities = json.loads((root / "cities.json").read_text(encoding="utf-8"))
najaf = next(city for city in cities if city["key"] == "NJF")
print(najaf["name"])
```

## التوثيق والتحقق

راجع [DATA_DICTIONARY.md](DATA_DICTIONARY.md) أو
[DATA_DICTIONARY_ar.md](DATA_DICTIONARY_ar.md) لتعريف الحقول والعلاقات.
واقرأ [CONTRIBUTING.md](CONTRIBUTING.md) أو
[CONTRIBUTING_ar.md](CONTRIBUTING_ar.md) قبل تعديل البيانات أو الكود.

```bash
npm run validate
```

يتحقق الفاحص من صيغة JSON والحقول المطلوبة وأسماء الملفات والمفاتيح الأجنبية
وتكرار معرفات الأقضية. ولا يتحقق حالياً من طوبولوجيا GeoJSON أو مصدر الحدود
الخارجي.

## ملاحظات مهمة

- الأسماء العربية للعرض وليست مفاتيح فريدة.
- يجب الحفاظ على `id` و`key` و`iso_code` ومعرفات مزودي الخدمة عند المزامنة.
- قد تكون قيمة `ebhar_id` هي `null`، وهذا يعني عدم توفر الربط الاختياري.
- `is_prime_supported` قيمة منطقية، وقد يبقى `prime_id` محفوظاً حتى عندما تكون
  القيمة `false`.
- لا يدعي المستودع حالياً مصدراً رسمياً أو ضماناً للاكتمال أو جدول تحديث ثابت.

## الترخيص

البيانات مرخصة بموجب [Creative Commons Attribution 4.0](LICENSE)، أما الأدوات
والتوثيق البرمجي فبموجب [MIT](LICENSE-CODE). احتفظ بنسبة المصدر عند إعادة
التوزيع.

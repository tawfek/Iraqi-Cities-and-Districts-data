# داتای شار و قەزاکانی عێراق

[English](README.md) | [العربية](README_ar.md) | [کوردی](README_ku.md)

داتای JSON ـی کراوە بۆ پارێزگا عێراقییەکان و قەزا و ناحیەکانیان. ئەم داتایە
بۆ فۆڕمی ناونیشان، یەکخستنەکانی گەیاندن، گەڕانی جوگرافی و ئەو بەرنامانەیە
کە پێویستیان بە ناسنامەی جێگیری شار و قەزا هەیە.

## ناوەڕۆکی پڕۆژە

```text
data/
  cities.json       # تۆماری 18 پارێزگا
  1-NJF.json        # قەزاکانی نەجەف
  2-KRB.json        # قەزاکانی کەربەلا
  ...
  18-MOS.json       # قەزاکانی موسڵ
  geoBoundaries-IRQ-ADM1_simplified.geojson  # سنووری پارێزگاکان
examples/
  data/najaf-sample.json
  javascript/read.js
  python/read.py
scripts/validate.js
shared.css           # ستایل و دۆخی هاوبەش
shared.js            # لۆجیکی نەخشە و داتا و گەڕان و زمان
```

تەنها پەڕەی `index.html` وێبگەڕێکی کارلێکخەرە بۆ داتا. نەخشەی Leaflet، گەڕان،
کاردی قابلەی داخستن، دۆخی تاریک/ڕوون، و زمانی عەرەبی و ئینگلیزی و کوردیی
سۆرانی لەخۆدەگرێت. زمانێکی نوێ دەتوانرێت لە تۆماری زمانەکانی `shared.js`
زیاد بکرێت، بەبێ دروستکردنی پەڕەی HTML ـی نوێ.

هەر فایلی پارێزگا پەیکەرێکی JSON ـە. `cities.json` دیاری دەکات هەر فایلێک
بۆ کام پارێزگایە، و ژمارە و کۆدی لاتینی ناوی فایلەکە لەگەڵ `id` و `key`
یەکسانە. داتا پێکەوە 18 پارێزگا و 3,933 تۆماری قەزا و ناحیەی هەیە.
ناوەکان بە عەرەبی وەک لە سەرچاوەکە هەڵگیراون.

## سنووری جوگرافی

`data/geoBoundaries-IRQ-ADM1_simplified.geojson` فایلێکی GeoJSON ـی جۆری
`FeatureCollection` ـە و پۆلیگۆنی سادەکراوی سنووری پارێزگاکان لە ئاستی ADM1 ـدا
لەخۆدەگرێت. تایبەتمەندییەکانی وەک `shapeName` و `shapeISO` و `shapeID` و
`shapeGroup` و `shapeType` هەیە. پەڕەکە `shapeISO`، وەک `IQ-NA` و `IQ-KA`، بە
`cities.json.iso_code` دەبەستێتەوە.

فایلی GeoJSON تەنها هندسەی سنوورەکانە. تۆمارەکانی شار و قەزا کۆئۆردیناتی
درێژی و پانیان تێدا نییە.

## GitHub Pages

پڕۆژەکە فایل `.github/workflows/pages.yml` ـی هەیە کە ماڵپەڕە ستاتیکەکە
خۆکارانە دوای ناردنی گۆڕانکاری بۆ `main` بڵاو دەکاتەوە. لە ڕێکخستنەکانی
کۆگای GitHub، **Settings > Pages** بکەرەوە و **GitHub Actions** وەک سەرچاوەی
بڵاوکردنەوە هەڵبژێرە. بەستەرەکە دەبێت:

```text
https://<owner>.github.io/<repository>/
```

هیچ سێرڤەر یان فەرمانی build پێویست نییە. نەخشە و فایلەکانی JSON و GeoJSON
و CSS و JavaScript و بەستەرەکانی بەڵگەنامە ڕێڕەوی ڕێژەیی بەکاردەهێنن و لە
subpath ـی GitHub Pages ـدا کار دەکەن.

## دەستپێکردنی خێرا

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

## بەڵگەنامە و پشکنین

بۆ پێناسەی خانە و پەیوەندییەکان سەیری [DATA_DICTIONARY.md](DATA_DICTIONARY.md)
یان [DATA_DICTIONARY_ku.md](DATA_DICTIONARY_ku.md) بکە. پێش گۆڕینی داتا یان
کۆد [CONTRIBUTING.md](CONTRIBUTING.md) یان
[CONTRIBUTING_ku.md](CONTRIBUTING_ku.md) بخوێنەوە.

```bash
npm run validate
```

پشکنەرەکە شێوەی JSON، خانە پێویستەکان، ناوی فایل، پەیوەندییەکان و دووبارەبوونی
ناسنامەکانی قەزا دەپشکنێت. لە ئێستادا تۆپۆلۆژیی GeoJSON یان سەرچاوەی سنوورە
دەرەکییەکان ناپشکنێت.

## تێبینییە گرنگەکان

- ناوە عەرەبییەکان بۆ پیشاندانن و کلیلی تاک نین.
- `id` و `key` و `iso_code` و ناسنامەکانی دابینکەر لە کاتی هاوکاتکردن بپارێزە.
- `ebhar_id` ڕەنگە `null` بێت؛ ئەمە واتە بەستنەوەی هەڵبژاردە بەردەست نییە.
- `is_prime_supported` بۆلینە و `prime_id` دەتوانێت تەنانەت لەگەڵ `false` ـیش
  هەڵبگیرێت.
- پڕۆژەکە بانگەشەی سەرچاوەی فەرمی، دڵنیایی تەواوی یان خشتەی نوێکردنەوەی
  دیاریکراو ناکات.

## مۆڵەت

داتا بە [Creative Commons Attribution 4.0](LICENSE) و ئامراز و بەڵگەنامەی
کۆد بە [MIT](LICENSE-CODE) بڵاوکراونەتەوە. لە کاتی دووبارە بڵاوکردنەوەدا
سەرچاوەکە بنووسە.

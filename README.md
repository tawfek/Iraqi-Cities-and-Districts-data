# Iraqi Cities and Districts Data

Open JSON reference data for Iraqi cities and their districts (subdistricts).
The dataset is designed for address forms, delivery integrations, geographic
lookups, and other applications that need stable city and district identifiers.

## What is included

```text
iraqi-cities-districts-data/
  cities.json       # Registry of 18 Iraqi cities
  1-NJF.json        # Districts for Najaf
  2-KRB.json        # Districts for Karbala
  ...
  18-MOS.json       # Districts for Mosul
```

Each city file is a JSON array. `cities.json` is the registry that explains
which city a file belongs to. The numeric prefix and three-letter suffix in a
filename match the city's `id` and `key`.

The source data currently contains 18 cities and 3,933 district records. Names
are preserved in Arabic as supplied by the dataset.

## Quick start

### JavaScript / Node.js

No third-party packages are required:

```bash
node examples/javascript/read.js
```

Use the data in an application:

```js
const cities = require('./iraqi-cities-districts-data/cities.json');
const najafDistricts = require('./iraqi-cities-districts-data/1-NJF.json');

const najaf = cities.find((city) => city.key === 'NJF');
console.log(najaf.name, najafDistricts.length);
```

### Python

The example uses only Python's standard library:

```bash
python examples/python/read.py
```

```python
import json
from pathlib import Path

root = Path("iraqi-cities-districts-data")
cities = json.loads((root / "cities.json").read_text(encoding="utf-8"))
najaf = next(city for city in cities if city["key"] == "NJF")
districts = json.loads((root / "1-NJF.json").read_text(encoding="utf-8"))
print(najaf["name"], len(districts))
```

## Data model

See [DATA_DICTIONARY.md](DATA_DICTIONARY.md) for field definitions, file
relationships, and identifier guidance.

Example records are available in [examples/data](examples/data), including a
small Najaf fixture suitable for tests and documentation.

## Validate the dataset

The repository includes a dependency-free validator for JSON syntax, required
fields, city/file relationships, and duplicate IDs:

```bash
npm run validate
```

You can also run it directly with Node.js:

```bash
node scripts/validate.js
```

## Important notes

- `name` values are Arabic display names and should not be used as unique keys.
- `id`, `key`, and the provider IDs are retained as supplied; applications
  should avoid changing them when syncing records.
- `ebhar_id` may be `null` for a district. Treat that as an absent optional
  mapping, not as an empty string.
- `is_prime_supported` is a boolean indicating whether the district is marked
  as supported by Prime. `prime_id` is retained even when that flag is false.
- The repository does not currently claim an official source, completeness
  guarantee, or update schedule. Contributions that add provenance should
  document it explicitly.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before changing data or code.
Changes should preserve valid UTF-8 JSON, the existing field names, and the
city-to-file relationship. Run `npm run validate` before opening a pull
request.

## License

The dataset is released under the [Creative Commons Attribution 4.0
International license](LICENSE). The helper scripts and documentation are
released under the MIT license in [LICENSE-CODE](LICENSE-CODE).

When redistributing the dataset, retain attribution to this repository and link
to the applicable license.
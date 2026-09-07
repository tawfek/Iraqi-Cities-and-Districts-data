# Data Dictionary

## `data/cities.json`

An array of governorate records.

| Field | Type | Description |
| --- | --- | --- |
| `id` | integer | Internal city/state identifier. |
| `name` | string | Arabic display name. |
| `key` | string | Three-letter Latin code used in filenames and lookups. |
| `iso_code` | string | ISO 3166-2-style Iraq subdivision code used to match GeoJSON features, such as `IQ-NA`. |
| `country_id` | integer | Country identifier; currently `1` for all records. |
| `ebhar_id` | UUID string | Identifier used by the Ebhar integration. |
| `alwaseet_id` | integer | Identifier used by the Alwaseet integration. |

## City district files

Files use the format `<city-id>-<city-key>.json`, for example
`1-NJF.json`. Each file contains the districts belonging to that city.

| Field | Type | Nullable | Description |
| --- | --- | --- | --- |
| `id` | integer | No | District record identifier. |
| `name` | string | No | Arabic district display name. |
| `state_id` | integer | No | Foreign key to `cities.json.id`. |
| `is_prime_supported` | boolean | No | Whether the district is marked as Prime-supported. |
| `prime_id` | integer | No | Prime provider identifier retained by the source data. |
| `ebhar_id` | UUID string | Yes | Optional Ebhar provider identifier. |

## Relationship rules

1. Every city file's `state_id` must equal the `id` of one city in
   `cities.json`.
2. A city file's prefix and suffix must match that city's `id` and `key`.
3. District `id` values should be unique within the dataset.
4. JSON files are UTF-8 encoded and use arrays at the top level.

Provider identifiers are integration keys, not geographic coordinates. Their
meaning and continued validity depend on the corresponding provider.

## `data/geoBoundaries-IRQ-ADM1_simplified.geojson`

The file is a GeoJSON `FeatureCollection` of simplified ADM1 governorate
boundaries. Each feature contains a polygon or multipolygon geometry and may
include these properties:

| Property | Type | Description |
| --- | --- | --- |
| `shapeName` | string | Source display name for the governorate. |
| `shapeISO` | string | ISO-style code used by the page to match `cities.json.iso_code`. |
| `shapeID` | string | Boundary source feature identifier. |
| `shapeGroup` | string | Country/group code; currently `IRQ`. |
| `shapeType` | string | Administrative level; currently `ADM1`. |

GeoJSON coordinates use the standard `[longitude, latitude]` order. The
boundary file is a geographic visualization layer and is not a district
database.

## Interactive documentation assets

`index.html` is the single bilingual/trilingual documentation and browser
page. `shared.js` owns map rendering, GeoJSON matching, data loading, search,
language switching, theme persistence, card expansion, and copy controls.
`shared.css` owns the shared layout, responsive styles, themes, editors, and
scrollbars.
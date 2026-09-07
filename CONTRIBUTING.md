# Contributing

Thanks for helping improve the Iraqi cities and districts dataset.

## Before you change data

- Confirm the change against a reliable source and include that source in the
  pull request description.
- Preserve the existing JSON field names and UTF-8 encoding.
- Keep Arabic names exactly as verified unless the change is specifically a
  spelling correction.
- When adding or changing a governorate, keep its `id`, `key`, and `iso_code`
  consistent with `cities.json`, its district filename, and the matching
  GeoJSON `shapeISO` value.
- Keep the GeoJSON file a valid `FeatureCollection` and preserve standard
  coordinate order: `[longitude, latitude]`.
- Do not replace `null` provider IDs with empty strings or invented values.
- Do not reuse an existing `id`.

## Local checks

Run the dependency-free validator from the repository root:

```bash
npm run validate
```

The validator checks JSON syntax, required fields, file naming, foreign keys,
and duplicate district IDs. It does not currently validate GeoJSON topology or
verify external geographic provenance, so review boundary changes carefully.

## Pull requests

Describe what changed, why it changed, the source used for verification, and
whether any downstream provider mapping or GeoJSON matching is affected. If
you change the interactive page, keep Arabic, English, and Sorani Kurdish
translations in sync and preserve the shared `shared.js`/`shared.css`
architecture. Keep unrelated formatting or generated-file changes out of the
pull request.
# Contributing

Thanks for helping improve the Iraqi cities and districts dataset.

## Before you change data

- Confirm the change against a reliable source and include that source in the
  pull request description.
- Preserve the existing JSON field names and UTF-8 encoding.
- Keep Arabic names exactly as verified unless the change is specifically a
  spelling correction.
- Do not replace `null` provider IDs with empty strings or invented values.
- Do not reuse an existing `id`.

## Local checks

Run the dependency-free validator from the repository root:

```bash
npm run validate
```

The validator checks JSON syntax, required fields, file naming, foreign keys,
and duplicate district IDs.

## Pull requests

Describe what changed, why it changed, the source used for verification, and
whether any downstream provider mapping is affected. Keep unrelated formatting
or generated-file changes out of the pull request.
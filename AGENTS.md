# Repository Guidelines

## Package release

Publish workspace dependencies before their consumers. Never publish a generated React package against unpublished `@ant-design/icons-svg` changes.

Release `@ant-design/icons` without Lerna:

1. Check whether `packages/icons-svg` contains changes that are not in its latest published version.
2. When SVG changes are pending, bump `packages/icons-svg/package.json`, update the `@ant-design/icons-svg` dependency floor in `packages/icons-react/package.json` to the new version, and run `npm run prepublishOnly` from `packages/icons-svg`.
3. Bump `packages/icons-react/package.json` and run `FATHER_CACHE=none ut react:ci` from the repository root.
4. Commit the release changes and push them to `master`.
5. When required, run `npm publish` from `packages/icons-svg` first and verify the new version on the public npm registry.
6. Run `npm publish` from `packages/icons-react`. Its `prepublishOnly` script regenerates the icons, compiles the package, lints the source, and runs the tests before publishing.
7. Verify both published versions against `https://registry.npmjs.org`.

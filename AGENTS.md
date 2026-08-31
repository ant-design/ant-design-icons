# Repository Guidelines

## React package release

Release `@ant-design/icons` from `packages/icons-react` without Lerna:

1. Update `version` in `packages/icons-react/package.json`.
2. Run `FATHER_CACHE=none ut react:ci` from the repository root.
3. Commit the version bump and push it to `master`.
4. Run `npm publish` from `packages/icons-react`. The `prepublishOnly` script regenerates the icons, compiles the package, lints the source, and runs the tests before publishing.
5. Verify the published version with `npm view @ant-design/icons version --registry=https://registry.npmjs.org`.

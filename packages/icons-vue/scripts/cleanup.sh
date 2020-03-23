#!/bin/sh
ls | grep -v .jest.js | grep -v .eslintrc.js | grep -e '.d.ts' -e '.js$' | xargs rm
# keep one d.ts to make vscode auto import working with corrcet path
rm ./lib/icons/*.d.ts || echo
rm ./es/icons/*.d.ts || echo

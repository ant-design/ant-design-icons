#!/bin/sh
ls | grep -v .fatherrc.js | grep -v jest.config.js | grep -v .eslintrc.js | grep -e '.d.ts' -e '.js$' | xargs rm
# keep one d.ts to make vscode auto import working with corrcet path
rm ./es/icons/*.d.ts || echo

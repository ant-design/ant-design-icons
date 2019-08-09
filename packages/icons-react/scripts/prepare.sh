#!/bin/sh
ls | grep -v .fatherrc.js | grep -v jest.config.js | grep -v .eslintrc.js | grep -e '.d.ts' -e '.js$' | xargs rm
cp ./lib/icons/*.d.ts ./
# keep one d.ts to make vscode auto import working with corrcet path
rm ./es/icons/*.d.ts

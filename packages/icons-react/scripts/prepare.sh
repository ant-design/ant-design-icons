#!/bin/sh
ls | grep -v .fatherrc.js | grep -v jest.config.js | grep -v .eslintrc.js | grep -e '.d.ts' -e '.js$' | xargs rm
cp ./lib/icons/*.d.ts ./

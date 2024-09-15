const fs = require('fs-extra');
const path = require('path');

function copyAssets() {
    const from = path.resolve(__dirname, '../src/inline-svg');
    const to = path.resolve(__dirname, '../dist/icons/src/inline-svg');
    fs.copy(from, to);
}

copyAssets();

const fs = require('fs-extra');
const path = require('path');

function clean() {
    const iconDist = path.resolve(__dirname, '../dist/icons');
    fs.removeSync(iconDist);
}

clean();

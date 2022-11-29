const fs = require('fs-extra');
const path = require('path');

function clean() {
    const iconDist = path.resolve(__dirname, '../dist/icons');
    console.log(iconDist);
    fs.removeSync(iconDist);
}

clean();

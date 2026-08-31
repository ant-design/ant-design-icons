'use strict';

const fs = require('fs');
const path = require('path');

const cjsIconPrefix = '@ant-design/icons-svg/lib/asn/';
const esmIconPrefix = '@ant-design/icons-svg/es/asn/';

function rewriteEsmIconImports(iconsDir) {
  const files = fs.readdirSync(iconsDir).filter((file) => file.endsWith('.js'));
  let iconImports = 0;
  let rewrittenFiles = 0;
  let rewrittenImports = 0;

  files.forEach((file) => {
    const filePath = path.join(iconsDir, file);
    const source = fs.readFileSync(filePath, 'utf8');
    const cjsMatches = source.split(cjsIconPrefix).length - 1;
    const esmMatches = source.split(esmIconPrefix).length - 1;

    iconImports += cjsMatches + esmMatches;

    if (cjsMatches === 0) {
      return;
    }

    fs.writeFileSync(filePath, source.split(cjsIconPrefix).join(esmIconPrefix));
    rewrittenFiles += 1;
    rewrittenImports += cjsMatches;
  });

  if (iconImports === 0) {
    throw new Error(`No generated icon imports found in ${iconsDir}`);
  }

  return { files: files.length, iconImports, rewrittenFiles, rewrittenImports };
}

if (require.main === module) {
  const iconsDir = path.resolve(__dirname, '../es/icons');
  const result = rewriteEsmIconImports(iconsDir);
  console.log(
    `Checked ${result.iconImports} ESM icon imports; rewrote ${result.rewrittenImports} in ${result.rewrittenFiles} files.`,
  );
}

module.exports = { rewriteEsmIconImports };

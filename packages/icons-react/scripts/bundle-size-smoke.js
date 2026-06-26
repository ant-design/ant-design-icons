'use strict';

const esbuild = require('esbuild');
const path = require('path');
const { gzipSync } = require('zlib');

const rootDir = path.resolve(__dirname, '../../..');

const cases = [
  {
    name: 'react-one-outlined-direct-es',
    code:
      "import AccountBookOutlined from './packages/icons-react/es/icons/AccountBookOutlined.js'; console.log(AccountBookOutlined);",
  },
  {
    name: 'react-one-twotone-direct-es',
    code:
      "import AccountBookTwoTone from './packages/icons-react/es/icons/AccountBookTwoTone.js'; console.log(AccountBookTwoTone);",
  },
  {
    name: 'react-three-root-named-es',
    code:
      "import { AccountBookOutlined, AlertFilled, SmileTwoTone } from './packages/icons-react/es/index.js'; console.log(AccountBookOutlined, AlertFilled, SmileTwoTone);",
  },
  {
    name: 'svg-one-asn-direct-es',
    code:
      "import AccountBookOutlined from './packages/icons-svg/es/asn/AccountBookOutlined.js'; console.log(AccountBookOutlined);",
  },
  {
    name: 'react-root-compat-cjs',
    code:
      "const AccountBookOutlined = require('./packages/icons-react/AccountBookOutlined.js'); console.log(AccountBookOutlined);",
    format: 'cjs',
    platform: 'node',
  },
];

async function bundleCase(item) {
  const result = await esbuild.build({
    stdin: {
      contents: item.code,
      resolveDir: rootDir,
      sourcefile: `${item.name}.js`,
      loader: 'js',
    },
    bundle: true,
    write: false,
    minify: true,
    treeShaking: true,
    format: item.format || 'esm',
    platform: item.platform || 'browser',
    external: ['react', 'react-dom'],
    define: {
      'process.env.NODE_ENV': '"production"',
    },
  });

  const text = result.outputFiles[0].text;

  return {
    name: item.name,
    bytes: Buffer.byteLength(text),
    gzip: gzipSync(text).length,
  };
}

(async () => {
  const rows = [];

  for (const item of cases) {
    rows.push(await bundleCase(item));
  }

  console.table(rows);
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});

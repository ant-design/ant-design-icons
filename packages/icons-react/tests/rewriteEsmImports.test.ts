import fs from 'fs';
import os from 'os';
import path from 'path';

const { rewriteEsmIconImports } = require('../scripts/rewrite-esm-imports.cjs');

describe('rewriteEsmIconImports', () => {
  let iconsDir: string;

  beforeEach(() => {
    iconsDir = fs.mkdtempSync(path.join(os.tmpdir(), 'icons-react-esm-'));
  });

  afterEach(() => {
    fs.rmSync(iconsDir, { recursive: true, force: true });
  });

  it('rewrites only generated ESM icon imports', () => {
    const iconPath = path.join(iconsDir, 'SmileOutlined.js');
    const unrelatedPath = path.join(iconsDir, 'index.js');

    fs.writeFileSync(
      iconPath,
      "import icon from '@ant-design/icons-svg/lib/asn/SmileOutlined';\nexport default icon;\n",
    );
    fs.writeFileSync(unrelatedPath, "export { default } from './SmileOutlined';\n");

    expect(rewriteEsmIconImports(iconsDir)).toEqual({
      files: 2,
      iconImports: 1,
      rewrittenFiles: 1,
      rewrittenImports: 1,
    });
    expect(fs.readFileSync(iconPath, 'utf8')).toContain(
      '@ant-design/icons-svg/es/asn/SmileOutlined',
    );
    expect(fs.readFileSync(unrelatedPath, 'utf8')).toBe(
      "export { default } from './SmileOutlined';\n",
    );
  });

  it('is idempotent after the first rewrite', () => {
    const iconPath = path.join(iconsDir, 'SmileOutlined.js');

    fs.writeFileSync(
      iconPath,
      "import icon from '@ant-design/icons-svg/lib/asn/SmileOutlined';\nexport default icon;\n",
    );

    rewriteEsmIconImports(iconsDir);

    expect(rewriteEsmIconImports(iconsDir)).toEqual({
      files: 1,
      iconImports: 1,
      rewrittenFiles: 0,
      rewrittenImports: 0,
    });
  });

  it('fails when the expected generated imports are absent', () => {
    fs.writeFileSync(path.join(iconsDir, 'index.js'), 'export const icons = {};\n');

    expect(() => rewriteEsmIconImports(iconsDir)).toThrow('No generated icon imports found');
  });
});

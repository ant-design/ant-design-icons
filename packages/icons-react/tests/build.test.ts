import fs from 'fs';
import path from 'path';

describe('build output', () => {
  it('requires the icons-svg release containing MetaFilled and NetflixFilled', () => {
    const packageJson = JSON.parse(
      fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf8'),
    );

    expect(packageJson.dependencies['@ant-design/icons-svg']).toBe('^4.6.0');
  });

  it('uses matching icon definition modules', () => {
    const esIcon = fs.readFileSync(
      path.resolve(process.cwd(), 'es/icons/SmileOutlined.js'),
      'utf8',
    );
    const libIcon = fs.readFileSync(
      path.resolve(process.cwd(), 'lib/icons/SmileOutlined.js'),
      'utf8',
    );

    expect(esIcon).toContain('@ant-design/icons-svg/es/asn/SmileOutlined');
    expect(libIcon).toContain('@ant-design/icons-svg/lib/asn/SmileOutlined');
  });

  it('marks package entry points as client modules', () => {
    const esEntry = fs.readFileSync(
      path.resolve(process.cwd(), 'es/index.js'),
      'utf8',
    );
    const libEntry = fs.readFileSync(
      path.resolve(process.cwd(), 'lib/index.js'),
      'utf8',
    );

    expect(esEntry).toMatch(/^['"]use client['"];?$/m);
    expect(libEntry).toMatch(/^['"]use client['"];?$/m);
  });
});

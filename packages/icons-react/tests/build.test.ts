import fs from 'fs';
import path from 'path';

describe('build output', () => {
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
});

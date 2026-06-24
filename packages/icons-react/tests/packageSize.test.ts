import fs from 'fs';
import path from 'path';

describe('package size', () => {
  it('generated icon sources should not embed base64 SVG previews', () => {
    const iconSource = fs.readFileSync(
      path.join(__dirname, '../src/icons/AccountBookOutlined.tsx'),
      'utf8',
    );

    expect(iconSource).not.toContain('data:image/svg+xml;base64');
  });

  it('generated icon sources should use default React import to avoid CJS wildcard helpers', () => {
    const iconSource = fs.readFileSync(
      path.join(__dirname, '../src/icons/AccountBookOutlined.tsx'),
      'utf8',
    );

    expect(iconSource).toContain("import React from 'react'");
    expect(iconSource).not.toContain("import * as React from 'react'");
  });
});

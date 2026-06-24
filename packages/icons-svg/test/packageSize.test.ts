import pkg from '../package.json';

describe('package size', () => {
  it('should not publish duplicate ESM declaration files', () => {
    expect(pkg.files).toContain('!es/**/*.d.ts');
  });
});

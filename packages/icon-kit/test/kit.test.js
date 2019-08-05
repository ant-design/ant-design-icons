'use strict';

const Kit = require('../src');
const path = require('path');
const fs = require('fs-extra');
const resolveUserConfig = require('../src/resolvers/resolveUserConfig').default;

describe('Kit', () => {
  it('should export Service', () => {
    expect(typeof Kit.Service).toBe('function');
  });
});

describe('Kit BlackBox', () => {
  const fixtures = fs.readdirSync(path.resolve(__dirname, './blackbox'));

  for (const projectName of fixtures) {
    const ctx = path.resolve(__dirname, './blackbox', projectName);
    it(`Project:"${projectName}" should work.`, async () => {
      const userConfig = await resolveUserConfig({ cwd: ctx });
      expect(userConfig).not.toBeFalsy();
      expect(Array.isArray(userConfig.sources)).toBe(true);
      const service = new Kit.Service(userConfig);
      await service.run('generate');
    });
  }
});

'use strict';

const Kit = require('..');

describe('Kit', () => {
  it('should export Service', () => {
    expect(typeof Kit.Service).toBe('function');
  });
});

import { IdentifierMeta, getIdentifier } from '../build/helpers';

describe('getIdentifier', () => {
  const examples: IdentifierMeta[] = [
    { name: 'smile', themeSuffix: 'Filled' },
    { name: 'summer-holiday', themeSuffix: 'Outlined' },
    { name: 'summer-holiday', themeSuffix: 'TwoTone' },
    { name: 'heskeybaozi', themeSuffix: 'TwoTone' },
    { name: 'HeskeyBaozi', themeSuffix: 'TwoTone' },
    { name: 'HeskeyBaozi', themeSuffix: void 0 },
    { name: 'HeskeyBaozi', themeSuffix: '' as any },
    { name: `__test_what's that??`, themeSuffix: 'Filled' }
  ];
  it('should computed identifiers correctly.', () => {
    expect(examples.map((meta) => getIdentifier(meta))).toStrictEqual([
      'SmileFilled',
      'SummerHolidayOutlined',
      'SummerHolidayTwoTone',
      'HeskeybaoziTwoTone',
      'HeskeyBaoziTwoTone',
      'HeskeyBaozi',
      'HeskeyBaozi',
      'TestWhatsThatFilled'
    ]);
  });
});

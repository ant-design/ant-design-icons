// version < antd@3.9
export const oldIconNames = [
  'step-backward',
  'step-forward',
  'fast-backward',
  'fast-forward',
  'forward',
  'backward',
  'caret-up',
  'caret-down',
  'caret-left',
  'caret-right',
  'retweet',
  'swap-left',
  'swap-right',
  'loading',
  'loading-3-quarters',
  'coffee',
  'bars',
  'file-jpg',
  'inbox',
  'shopping-cart',
  'safety',
  'medium-workmark'
];

export const twoToneColors = {
  primary: ['#333'],
  secondary: ['#E6E6E6', '#D9D9D9', '#D8D8D8']
};

export const twoToneIdentifiers = {
  primaryColor: 'primaryColor',
  secondaryColor: 'secondaryColor'
};

// "{{ }}" or '{{ }}'
export const vueLikeQuoteInterpolate = /['"]{{([\s\S]+?)}}['"]/g;

export const ThemeLowerCaseEnum: {
  filled: 'filled';
  outlined: 'outlined';
  twotone: 'twotone';
} = {
  filled: 'filled',
  outlined: 'outlined',
  twotone: 'twotone'
};

export const ThemeUpperCaseEnum: {
  Filled: 'Filled';
  Outlined: 'Outlined';
  TwoTone: 'TwoTone';
} = {
  Filled: 'Filled',
  Outlined: 'Outlined',
  TwoTone: 'TwoTone'
};

export { ThemeType, ThemeTypeUpperCase } from './templates/types';

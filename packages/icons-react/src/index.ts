import { insertCss } from 'insert-css';
import { iconStyles } from './utils';

let cssInjectedFlag = false;

if (!cssInjectedFlag) {
  insertCss(iconStyles);
  cssInjectedFlag = true;
}

export * from './icons';
export * from './components/twoTonePrimaryColor';
export { default as createFromIconfontCN } from './components/IconFont';
export { default } from './components/Icon';

import * as React from 'react';
import { createFromIconfontCN } from '../src';

const IconFont = createFromIconfontCN({
  // scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  scriptUrl: ['//at.alicdn.com/t/font_1728622_jaz3y5gulz.js', '//at.alicdn.com/t/font_1517974_d9tp7huqb5r.js'],
});

const IconfontCN = () => (
  <div>
    <h1>Icons from iconfont.cn</h1>
    <IconFont type="scanpay" />
    <IconFont type="icon-facebook" />
    <IconFont type="icon-twitter" />
  </div>
);

export default IconfontCN;

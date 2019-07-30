import * as React from 'react';
import { createFromIconfontCN } from '../src';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

export default class IconfontCN extends React.Component<{}> {
  render() {
    return (
      <div>
        <h1>Icons from iconfont.cn</h1>
        <IconFont type="icon-tuichu" />
        <IconFont type="icon-facebook" />
        <IconFont type="icon-twitter" />
      </div>
    );
  }
}

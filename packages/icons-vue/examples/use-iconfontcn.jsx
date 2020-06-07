import { createApp } from 'vue';
import { createFromIconfontCN } from '../src';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  // scriptUrl: ['//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'],
});

const SimpleDemo = {
  render() {
    return (
      <div>
        <h1>Icons from iconfont.cn</h1>
        <IconFont
          type="icon-tuichu"
          onClick={e => {
            console.log(e);
          }}
        />
        <IconFont type="icon-facebook" />
        <IconFont type="icon-twitter" />
      </div>
    );
  },
};

createApp(SimpleDemo).mount('#__vue-content>div');

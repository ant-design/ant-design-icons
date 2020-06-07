import { createApp } from 'vue';
import { AntDesignOutlined, DashboardOutlined, TwitterOutlined } from '../src';
import './index.less';

const displaySize = ['64px', '48px', '32px', '24px', '16px', '12px', '8px'];
const relatedHref =
  'https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4';
const SimpleDemo = {
  methods: {
    renderStatement(fontSize) {
      const style = {
        fontSize,
        color: (fontSize === '48px' && 'lightblue') || 'inherit',
      };
      return (
        <div class="simple-wrap" key={fontSize} style={style}>
          {fontSize}
          Ant Design
          <AntDesignOutlined />
          0123
          <DashboardOutlined />
          你好
          <TwitterOutlined />
        </div>
      );
    },
    renderStatements() {
      return displaySize.map(fontSize => {
        return this.renderStatement(fontSize);
      });
    },
  },

  render() {
    return (
      <div>
        <h1>Simple Demo - Icons Alignments</h1>
        {this.renderStatements()}
        See{' '}
        <a href={relatedHref} target={'_blank'}>
          related blog
        </a>{' '}
        for detail.
      </div>
    );
  },
};

createApp(SimpleDemo).mount('#__vue-content>div');

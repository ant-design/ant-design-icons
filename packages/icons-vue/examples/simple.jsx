import Vue from 'vue'
import { AntDesignOutline, DashboardOutline, TwitterOutline } from '@ant-design/icons';
import AntdIcon from '../src';
import './index.less'

AntdIcon.add(DashboardOutline);

const displaySize = ['64px', '48px', '32px', '24px', '16px', '12px', '8px']
const relatedHref = 'https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4'
const  SimpleDemo = {
  methods: {
    renderStatement(fontSize) {
      const style = {
        fontSize,
        color: (fontSize === '48px' && 'lightblue') || 'inherit'
      };
      return (
        <div class="simple-wrap" key={fontSize} style={style}>
          {fontSize}
          Ant Design
          <AntdIcon style="vertical-align: -0.125em;" type={AntDesignOutline} />
          0123
          <AntdIcon style="vertical-align: -0.125em;" type={'dashboard-o'} />
          你好
          <AntdIcon style="vertical-align: -0.125em;" type={TwitterOutline} />
        </div>
      );
    },
  
    renderStatements() {
      return displaySize.map((fontSize) => {
        return this.renderStatement(fontSize);
      });
    }
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
  }
}

new Vue({
  el: '#__vue-content',
  render(){
    return <SimpleDemo/>
  }
})
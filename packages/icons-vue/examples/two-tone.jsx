import Vue from 'vue'
import * as icons from '@ant-design/icons/lib/dist';
import AntdIcon from '../src';
import './index.less'

const allIcons = icons;

const iconsList = Object.keys(allIcons).map((key) => allIcons[key]);
const manifest = iconsList
  .filter((icon) => icon.theme === 'twotone')
  .map(({name}) => `${name}-twotone`);
AntdIcon.add(...iconsList);

const AllIconDemo = {
  data () {
    return {
      primaryColor: '#1890ff'
    }
  },
  beforeMount() {
    AntdIcon.setTwoToneColors({
      primaryColor: this.primaryColor
    });
  },
  methods: {
    onPrimaryColorChange (e) {
      console.log(e.currentTarget.value);
      AntdIcon.setTwoToneColors({
        primaryColor: e.currentTarget.value
      })
      this.primaryColor = e.currentTarget.value
    },
    renderIcons(names) {
      return names.map((name) => (
        <div class="card" key={name}>
          <AntdIcon style={{ fontSize: '16px' }} key={name} type={name} />
          <p class="name-description">{name}</p>
        </div>
      ));
    },
  },
  render() {
    return (
      <div class="two-tone-wrap" style={{ color: '#555' }}>
        <h1 style={{ textAlign: 'center' }}>Two Tone</h1>
        <div style={{ textAlign: 'center' }}>
          <h2>Primary Color</h2>
          <input
            type={'color'}
            value={this.primaryColor}
            onChange={this.onPrimaryColorChange}
          />
          <span class="text">{this.primaryColor}</span>
        </div>
        <div class="container">{this.renderIcons(manifest)}</div>
      </div>
    );
  }
}



new Vue({
  el: '#__vue-content>div',
  render(){
    return <AllIconDemo/>
  }
})
import Vue from 'vue'
import * as icons from '@ant-design/icons/lib/dist';
import manifest from '@ant-design/icons/lib/manifest';

import AntdIcon from '../src';
import './index.less'

const antDesignIcons = icons;

AntdIcon.add(...Object.keys(antDesignIcons).map((key) => antDesignIcons[key]));

const AllIconDemo = {
  data() {
    return {
      names: manifest,
      currentTheme: 'outline',
    }
  },
  computed: {
    Icons() {
      return this.names[this.currentTheme].map((name) => {
        let computedName = name;
        switch (this.currentTheme) {
          case 'fill':
            computedName += '-fill';
            break;
          case 'outline':
            computedName += '-o';
            break;
          case 'twotone':
            computedName += '-twotone';
            break;
          default:
            throw new TypeError(`Unknown theme ${this.currentTheme}`);
        }
        return (
          <div class="card" key={name}>
            <AntdIcon
              style={{ fontSize: '24px' }}
              key={computedName}
              type={computedName}
            />
            <p class="name-description">{computedName}</p>
          </div>
        );
      });
    },
  },
  methods: {
    handleSelectChange(e) {
      const value = e.currentTarget.value;
      this.currentTheme = value;
    }
  },
  render() {
    return (
      <div class="all-icons-wrap" style={{ color: '#555' }}>
        <h1 style={{ textAlign: 'center' }}>All Icons</h1>
        <div style={{ textAlign: 'center' }}>
          <select
            name={'theme-select'}
            value={this.currentTheme}
            onChange={this.handleSelectChange}
          >
            <option value={'fill'}>Filled</option>
            <option value={'outline'}>Outlined</option>
            <option value={'twotone'}>Two-Tone</option>
          </select>
        </div>
        <div class="container">{this.Icons}</div>
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

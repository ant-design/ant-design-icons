import { createApp } from 'vue';
import { setTwoToneColor } from '../src';
import * as AntdIcons from '../src/icons';
import './index.less';

const allIcons = AntdIcons;

const iconsList = Object.keys(allIcons)
  .map(iconName => allIcons[iconName])
  .filter(icon => icon.name.includes('TwoTone'));

const AllIconDemo = {
  data() {
    return {
      primaryColor: '#1890ff',
    };
  },
  beforeMount() {
    setTwoToneColor(this.primaryColor);
  },
  methods: {
    onPrimaryColorChange(e) {
      console.log(e.currentTarget.value);
      setTwoToneColor(e.currentTarget.value);
      this.primaryColor = e.currentTarget.value;
    },
  },
  render() {
    return (
      <div class="two-tone-wrap" style={{ color: '#555' }}>
        <h1 style={{ textAlign: 'center' }}>Two Tone</h1>
        <div style={{ textAlign: 'center' }}>
          <h2>Primary Color</h2>
          <input type={'color'} value={this.primaryColor} onChange={this.onPrimaryColorChange} />
          <span class="text">{this.primaryColor}</span>
        </div>
        <div class="container">
          {iconsList.map(Component => (
            <div class="card" key={Component.displayName}>
              <Component style={{ fontSize: '26px' }} class="test" />
              <p class="name-description">{Component.displayName}</p>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

createApp(AllIconDemo).mount('#__vue-content>div');

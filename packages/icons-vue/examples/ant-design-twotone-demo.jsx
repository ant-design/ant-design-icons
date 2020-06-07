import { createApp } from 'vue';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '../src';
import './index.less';

const Demo = {
  render() {
    return (
      <div class="icons-list">
        <SmileTwoTone />
        <HeartTwoTone twoToneColor="#eb2f96" />
        <HeartTwoTone />
        <CheckCircleTwoTone twoToneColor="#52c41a" />
      </div>
    );
  },
};

createApp(Demo).mount('#__vue-content>div');

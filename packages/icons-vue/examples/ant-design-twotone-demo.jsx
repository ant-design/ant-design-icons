import Vue from 'vue';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '../src';
import './index.less';

new Vue({
  el: '#__vue-content>div',
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
});

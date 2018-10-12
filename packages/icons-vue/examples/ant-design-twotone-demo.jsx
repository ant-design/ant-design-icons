import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone
} from '@ant-design/icons';
import Vue from 'vue'
import AntdIcon from '../src';
import './index.less'

AntdIcon.add(SmileTwoTone, HeartTwoTone, CheckCircleTwoTone);

new Vue({
  el: '#__vue-content>div',
  render(){
    return (
      <div class='icons-list'>
        <AntdIcon type='smile-twotone' />
        <AntdIcon type='heart-twotone' primaryColor='#eb2f96' />
        <AntdIcon type='heart-twotone' />
        <AntdIcon type='check-circle-twotone' primaryColor='#52c41a' />
      </div>
    )
  }
})

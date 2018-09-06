import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone
} from '@ant-design/icons';
import * as React from 'react';
import { render } from 'react-dom';
import AntdIcon from '../src';
AntdIcon.add(SmileTwoTone, HeartTwoTone, CheckCircleTwoTone);

render(
  <div className='icons-list'>
    <AntdIcon type='smile-twotone' />
    <AntdIcon type='heart-twotone' primaryColor='#eb2f96' />
    <AntdIcon type='heart-twotone' />
    <AntdIcon type='check-circle-twotone' primaryColor='#52c41a' />
  </div>,
  document.getElementById('__react-content')
);

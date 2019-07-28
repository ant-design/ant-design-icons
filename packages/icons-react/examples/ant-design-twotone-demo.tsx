import * as React from 'react';
import { render } from 'react-dom';

import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '../src';

render(
  <div className='icons-list'>
    <SmileTwoTone />
    <HeartTwoTone twoToneColor='#eb2f96' />
    <HeartTwoTone />
    <CheckCircleTwoTone twoToneColor='#52c41a' />
  </div>,
  document.getElementById('__react-content')
);

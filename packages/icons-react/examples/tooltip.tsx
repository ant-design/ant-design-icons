import * as React from 'react';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/index.css';
import { AccountBookFilled } from '../src';

const TooltipDemo = () => (
  <div style={{ color: '#555' }}>
    <h1 style={{ textAlign: 'center' }}>Two Tone</h1>
    <div style={{ textAlign: 'center', padding: 50 }}>
      <h2>Primary Color</h2>
      <Tooltip placement="topLeft" title="Prompt Text">
        <AccountBookFilled style={{ fontSize: 30 }} />
      </Tooltip>
    </div>
  </div>
);

export default TooltipDemo;

import * as React from 'react';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/index.css';
import { AntDesignOutlined } from '../src';

const TooltipDemo = () => (
  <div style={{ color: '#555' }}>
    <h1 style={{ textAlign: 'center' }}>Tooltip Demo</h1>
    <div style={{ textAlign: 'center', padding: 50 }}>
      <h2>Hover this icon</h2>
      <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
        <AntDesignOutlined style={{ fontSize: 30 }} />
      </Tooltip>
    </div>
  </div>
);

export default TooltipDemo;

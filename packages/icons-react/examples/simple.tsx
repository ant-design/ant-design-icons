import { Alibaba, Dashboard, DashboardFill, Twitter } from '@ant-design/icons';
import * as React from 'react';
import { render } from 'react-dom';
import AntdIcon from '../src';

AntdIcon.add(Dashboard, DashboardFill);

class SimpleDemo extends React.Component<{}> {
  render() {
    return (
      <div>
        <h1>Simple Demo</h1>
        <AntdIcon type={Alibaba} />
        <AntdIcon type={'dashboard'} />
        <AntdIcon type={'dashboard-fill'} />
        <AntdIcon type={Twitter} />
      </div>
    );
  }
}

render(<SimpleDemo />, document.getElementById('__react-content'));

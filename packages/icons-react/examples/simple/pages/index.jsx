import * as React from 'react';
import styles from './index.less';
import { Alibaba, Dashboard, DashboardFill, Twitter } from '@ant-design/icons/esm';
import AntdIcon from '@ant-design/icons-react/esm';

AntdIcon.library.add(Alibaba, Dashboard, DashboardFill);

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <AntdIcon type={'alibaba'} />
        <AntdIcon type={'dashboard-fill'} />
        <AntdIcon type={Twitter} />
        <div>
          <span style={{ fontSize: '64px' }}>
            64px ABC
          </span>
          <AntdIcon data-test={'test'} style={{ fontSize: '64px' }} type={Twitter} />
          <p>SVG element could not align to text.<br/>You should set <code>vertical-align: -.125em</code></p>
        </div>
      </div>
    );
  }
}

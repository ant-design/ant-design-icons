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
      </div>
    );
  }
}

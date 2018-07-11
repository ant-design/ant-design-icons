# React Antd Icons

## Install
```bash
yarn add antd-icons
yarn add react-antd-icons
```

## Usage

First, you should add the icons that you need into the library.

```ts
import { library, Alibaba } from 'antd-icons/esm';
library.add(Alibaba);
```

After that, you can use antd icons in your React components as simply as this:

```jsx
// examples/simple/pages/index.jsx
import * as React from 'react';
import styles from './index.less';
import { library, Alibaba, Dashboard, DashboardFill } from 'antd-icons/esm';
import AntdIcon from 'react-antd-icons/esm';

library.add(Alibaba, Dashboard, DashboardFill);

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <AntdIcon type={'alibaba'} />
        <AntdIcon type={'dashboard'} />
        <AntdIcon type={'dashboard-fill'} />
        <AntdIcon type={'it will cause error'} />
      </div>
    );
  }
}
```

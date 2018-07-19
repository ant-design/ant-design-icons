# React Antd Icons

## Install
```bash
yarn add @ant-design/icons
yarn add @ant-design/icons-react
```

## Usage

First, you should add the icons that you need into the library.

```ts
import { Alibaba, Dashboard, DashboardFill, Twitter } from '@ant-design/icons/esm';
import AntdIcon from '@ant-design/icons-react/esm';
AntdIcon.add(Alibaba, Dashboard, DashboardFill);
```

After that, you can use antd icons in your React components as simply as this:

```jsx
// examples/simple/pages/index.jsx
import * as React from 'react';
import styles from './index.less';
import { Alibaba, Dashboard, DashboardFill, Twitter } from '@ant-design/icons/esm';
import AntdIcon from '@ant-design/icons-react/esm';

AntdIcon.add(Alibaba, Dashboard, DashboardFill);

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
```

## Component Interface
```ts
interface AntdIconProps {
    type: string | IconDefinition;
    className?: string;
    onClick?: React.MouseEventHandler<SVGSVGElement>;
    style?: React.CSSProperties;
}
```

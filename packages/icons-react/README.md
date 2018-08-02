# Ant Design Icons for React

## Install

```bash
yarn add @ant-design/icons
yarn add @ant-design/icons-react
```

## Usage

First, you should add the icons that you need into the library.

```ts
import { Alibaba, Dashboard, Twitter } from '@ant-design/icons';
import AntdIcon from '@ant-design/icons-react';
AntdIcon.add(Alibaba, Dashboard);
```

After that, you can use antd icons in your React components as simply as this:

```jsx
<AntdIcon type={'alibaba'} />
<AntdIcon type={'dashboard-fill'} />
<AntdIcon type={Twitter} />
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

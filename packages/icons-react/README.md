<h1 align="center">
Ant Design Icons for React
</h1>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/@ant-design/icons-react.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-react)
[![NPM downloads](http://img.shields.io/npm/dm/@ant-design/icons-react.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-react)

</div>

## Install

```bash
yarn add @ant-design/icons
yarn add @ant-design/icons-react
```

## Usage

First, you should add the icons that you need into the library.

```ts
import { AntDesign, Dashboard, Twitter } from '@ant-design/icons';
import AntdIcon from '@ant-design/icons-react';
AntdIcon.add(AntDesign, Dashboard);
```

After that, you can use antd icons in your React components as simply as this:

```jsx
<AntdIcon type="ant-design" />
<AntdIcon type="dashboard" />
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

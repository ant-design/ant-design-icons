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

## Basic Usage

// Directly import


// 
import { SmileOutline } from 'antd/icons';

You can import it directly or destructure from `antd/icons` when tree-shaking enabled.

```ts
import SmileOutline from 'antd/icons/SmileOutline';
import { SmileOutline } from 'antd/icons';
```

After that, you can use antd icons in your React components as simply as this:

```jsx
<AntdIcon type="ant-design-o" />
<AntdIcon type="dashboard-o" />
<AntdIcon type={TwitterOutline} />
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

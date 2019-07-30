<h1 align="center">
Ant Design Icons for React
</h1>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/@ant-design/icons.svg?style=flat)](https://npmjs.org/package/@ant-design/icons)
[![NPM downloads](http://img.shields.io/npm/dm/@ant-design/icons.svg?style=flat)](https://npmjs.org/package/@ant-design/icons)

</div>

## Install

```bash
yarn add @ant-design/icons-svg
yarn add @ant-design/icons
```

## Basic Usage

You can import it directly or destructure from `@ant-design/icons` when tree-shaking enabled.

```ts
import SmileOutline from '@ant-design/icons/SmileOutline';
import { SmileOutline } from '@ant-design/icons';
```

## Component Interface

```ts
interface AntdIconProps {
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
}
```

## Release

```bash
npm run generate
npm run compile
npm publish
```

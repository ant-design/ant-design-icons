<h1 align="center">
Ant Design Icons
</h1>

<p align="center">
⭐ The abstract trees of the Ant Design SVG icons.
</p>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/@ant-design/icons.svg?style=flat)](https://npmjs.org/package/@ant-design/icons)
[![NPM downloads](http://img.shields.io/npm/dm/@ant-design/icons.svg?style=flat)](https://npmjs.org/package/@ant-design/icons)

</div>

## Install

```bash
yarn add @ant-design/icons # or npm install @ant-design/icons --save
```

## Use Library Adapter

- React: See [@ant-design/icons-react](./packages/icons-react) to learn about detail usage.

## Usage
```ts
import { AntDesign } from '@ant-design/icons/es';

console.log(AntDesign);
// Output:
// { name: 'ant-design',
//   tag: 'svg',
//   attrs:
//    { xmlns: 'http://www.w3.org/2000/svg',
//      viewBox: '0 0 1024 1024' },
//   children:
//    [ { tag: 'path', attrs: [Object], children: [] },
//      { tag: 'path', attrs: [Object], children: [] } ] }
```

## Interface

This library export all SVG files as `IconDefinition`.

```ts
interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children: AbstractNode[];
}

interface IconDefinition extends AbstractNode {
  name: string; // kebab-case-style
}
```

## Build
```bash
npm run generate # Generate files to ./src
npm run build # Build library
npm run test # Runing Test
```

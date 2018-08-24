<h1 align="center">
Ant Design Icons
</h1>

<p align="center">
⭐ The abstract trees of the Ant Design SVG icons.
</p>

[![NPM version](https://img.shields.io/npm/v/@ant-design/icons.svg?style=flat)](https://npmjs.org/package/@ant-design/icons)
[![NPM downloads](http://img.shields.io/npm/dm/@ant-design/icons.svg?style=flat)](https://npmjs.org/package/@ant-design/icons)

## Status: **Beta**

The APIs and icons may change in the future, please **do NOT** use in any production environment.

## Install

```bash
yarn add @ant-design/icons # or npm install @ant-design/icons --save
```

## Use Library Adapter

- React: See [@ant-design/icons-react](./packages/icons-react)

## Usage
```ts
import { AntDesign } from '@ant-design/icons/es';

console.log(AntDesign);

// Output:
// { width: 1024,
//   height: 1024,
//   viewBox: '0 0 1024 1024',
//   style: '',
//   children:
//    [ { tag: 'path', attrs: [Object] },
//      { tag: 'path', attrs: [Object] } ],
//   name: 'ant-design' }
```

## Interface

This library export all SVG files as `IconDefinition`.

```ts
interface IconDefinition extends AbstractTree {
  name: string; // kebab-case-style
}

interface AbstractTree {
  width: number;
  height: number;
  viewBox: string;
  style?: string;
  children: Array<{ tag: string, attrs: { [key: string]: string } }>;
}
```

## Build
```bash
npm run generate # Generate files to ./src
npm run build # Build library
npm run test # Runing Test
```

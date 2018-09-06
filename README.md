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
yarn add @ant-design/icons@next # or npm install @ant-design/icons@next --save
```

## Use Library Adapter

- React: See [@ant-design/icons-react](./packages/icons-react) to learn about detail usage.

## Usage
```ts
import { AlertOutline } from '@ant-design/icons';

console.log(AlertOutline);
// Output:
// {
//     name: 'alert',
//     theme: 'outline',
//     icon: {
//         tag: 'svg',
//         attrs: { viewBox: '0 0 1024 1024' },
//         children: [
//             {
//                 tag: 'path',
//                 attrs: {
//                     d: 'M193 796a32 32 0 0 0 32 32h574a32....'
//                 }
//             }
//         ]
//     }
// }
```

## Interface

This library export all SVG files as `IconDefinition`.

```ts
interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children?: AbstractNode[];
}

interface IconDefinition {
  name: string; // kebab-case-style
  theme: ThemeType;
  icon:
    | ((primaryColor: string, secondaryColor: string) => AbstractNode)
    | AbstractNode;
}
```

## Build
```bash
npm run generate # Generate files to ./src
npm run build # Build library
npm run test # Runing Test
```

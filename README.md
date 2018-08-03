# Ant Design Icons

⭐ The abstract trees of the Ant Design SVG icons.

## Status: **Alpha**

The APIs and icons may change in the future, please **do NOT** use in any production environment.

## Install

```bash
yarn add @ant-design/icons # or npm install @ant-design/icons --save
```

## Use Library Adapter

- React: See [@ant-design/icons-react](./packages/icons-react)
- Vue: WIP
- Angular: WIP

## Usage
```ts
import { Alibaba } from '@ant-design/icons/es';

console.log(Alibaba);

// Output:
// { width: 1024,
//   height: 1024,
//   viewBox: '0 0 1024 1024',
//   style: '',
//   children:
//    [ { tag: 'path', attrs: [Object] },
//      { tag: 'path', attrs: [Object] } ],
//   name: 'alibaba' }
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
npm run generate # generate src/svgs.ts
npm run build # generate module bundle
```

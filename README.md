# Ant Design Icons

## status: **Alpha**

The APIs and icons may change in the future, please **do NOT** use in any production environment.

## Install

```bash
yarn add antd-icons # or npm install antd-icons
```

## Use Library Adapter

- React: See [react-antd-icons](./packages/react-antd-icons)
- Vue: WIP
- Angular: WIP

## Usage
```ts
import { library, Alibaba } from 'antd-icons/esm';

library.add(Alibaba);
```

## Build
```bash
npm run generate # generate src/svgs.ts
npm run build # generate module bundle
```

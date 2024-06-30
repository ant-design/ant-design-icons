<h1 align="center">
Ant Design Icons for React Native
</h1>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/@ant-design/icons-react-native.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-react-native)
[![NPM downloads](http://img.shields.io/npm/dm/@ant-design/icons-react-native.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-react-native)

</div>

## Install

```bash
yarn add @ant-design/icons-react-native
```


## Linking

<details>
<summary>react-native version < 0.69.0</summary>

```bash
react-native link @ant-design/icons-react-native
```
</details>
<br/>
<details open>
<summary><b>react-native version >= 0.69.0</b> <i>(recommend in all version)</i></summary>
<br/>

- Add assets to your `react-native.config.js` ( If not exist, please create in project’s root directory )

```js
module.exports = {
  assets: ['node_modules/@ant-design/icons-react-native/fonts'],
};
```

- Run the [`react-native-asset`](https://github.com/unimonkiez/react-native-asset)'s command and linking + unlinking is automatic

```bash
npx react-native-asset
```
<br/>
</details>


will copy fonts to `ios` and `android` assets folder.

After linking succeeded you need run your app from `xcode` or `android studio` or start it from terminal `react-native run-ios` or `react-native run-android`

## Basic Usage

```tsx
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
```

After that, you can use antd icons in your React components as simply as this:

```jsx
<IconFill name="account-book" />
<IconOutline name="account-book" />
```

## Component Interface

```ts
interface IconFillProps extends TextProps {
  name: FillGlyphMapType;
  size?: number;
  color?: string;
}
```

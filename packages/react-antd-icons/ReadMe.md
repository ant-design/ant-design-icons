# React Antd Icons

## Install
```bash
yarn add antd-icons
yarn add react-antd-icons
```

## Usage

First, you should add the icons that you need into the library.

```ts
import { library, Alibaba } from 'antd-icons';
library.add(Alibaba);
```

After that, you can use antd icons in your React components as simply as this:

```jsx
import { AntdIcon } from 'react-antd-icons';
import { render } from 'ract-dom';

render(<AntdIcon className={'my-icon'} type={'alibaba'} />, mountedNode);
```

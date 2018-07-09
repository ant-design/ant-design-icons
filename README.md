# Ant Design Icons

## status: **Alpha**

## Install

```bash
yarn add antd-icons # or npm install antd-icons
```

## Usage

Use a SVG icon.

```ts
import { library, Alibaba, prefix } from 'antd-icons';

library.add(Alibaba); // add icon to the library.
```

If you are using `React`...
```tsx
import * as React from 'react';
import { library, Alibaba, prefix } from 'antd-icons';

library.add(Alibaba, Instagram);

export default class Index extends React.Component<{}> {
  componentDidMount() {
    library.dom.mount('__ANT_DESIGN_ICON_MOUNTED_NODE__');
  }

  componentWillUnmount() {
    library.dom.unmount();
  }

  render() {
    return (
      <div>
        <div style={{ color: 'lightblue', fontSize: '3rem' }}>
          <span>Test Icon</span>
          <svg width="1em" height="1em" fill="currentColor">
            <use xlinkHref={`#${prefix}instagram`} />
          </svg>
        </div>
      </div>
    );
  }
}
```

## Build
```bash
npm run generate # generate react-component
npm run build # generate es module bundle
```

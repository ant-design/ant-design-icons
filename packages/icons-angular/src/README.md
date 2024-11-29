<h1 align="center">
Ant Design Icons for Angular
</h1>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/@ant-design/icons-angular.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-angular)
[![NPM downloads](http://img.shields.io/npm/dm/@ant-design/icons-angular.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-angular)

</div>

![](./demo.png)

## Installation

```bash
ng add @ant-design/icons-angular

# or npm install @ant-design/icons-angular
```

## Usage

You should import `IconDirective` in your component.

```ts
import { IconDirective } from '@ant-design/icons-angular';

@Component({
  imports: [ IconDirective ]
})
export class AppComponent {}
```

And register the icons that you need to `IconService` (all or explicitly, we call it **static loading**):

> ATTENTION! We strongly suggest you not to register all icons. That would increase your bundle's size dramatically.

```ts
import { Component } from '@angular/core';
import { IconService } from '@ant-design/icons-angular';
import { AccountBookFill } from '@ant-design/icons-angular/icons'
// import * as AllIcons from 'ant-icons-angular/icons';

@Component({
  // ...
})
export class AppComponent {
  constructor(private _iconService: IconService) {
    // Import all. NOT RECOMMENDED. ❌
    // const antDesignIcons = AllIcons as {
      // [key: string]: IconDefinition;
    // };
    // this._iconService.addIcon(...Object.keys(antDesignIcons).map(key => antDesignIcons[key]));

    // Import what you need! ✔️
    this._iconService.addIcon(...[ AccountBookFill ]);
    this._iconService.twoToneColor = { primaryColor: '#1890ff' };
  }
}
```

You can also provide icons you need in the `app.config.ts`:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideAntIcons } from '@ant-design/icons-angular';
import { AccountBookFill } from '@ant-design/icons-angular/icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAntIcons([ AccountBookFill ])
  ]
};
```

When you want to render an icon:

```html
<span antIcon type="ant-cloud" theme="outline"></span>
```

Checkout the demo for more details.

For icons provided by Ant Design, we provide **dynamic loading** strategy to reduce bundle's size. Just config your `angular.json` and you even don't need to register the icons! Checkout our `examples` dir and `angular.json` file for more details.

### Namespace

Namespace is first introduced in `2.0.0-beta.2`. It allows users to register their own icons with simple API, support both dynamic loading and static loading.

Say you want to add a `panda` icon in `animal` namespace. For static loading, you should call `addIconLiteral('animal:panda', '<svg>...</svg>')`. For dynamic loading, just put `panda.svg` under `assets/animal`. And render a panda like: `<span antIcon type="animal:panda">`.

Please checkout the demo for more details.

## Development

You can find the source code [here](https://github.com/ant-design/ant-design-icons).

### Setup

Install dependencies of `@ant-design/icons-angular`, and run `npm run generate`.

### Demo

Run `npm run generate` and then `npm run start`.

### Build

Run `npm run build:lib`.

### Extension

You can simply extend this package by creating directives or services that extends `IconDirective` and `IconService`. And it is worth mentioning that `_changeIcon` method returns a `Promise<svg>` using which you could add extra modifications.

[ng-zorro-antd](https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/icon) is a good example of extending this package.

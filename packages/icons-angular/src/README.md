<h1 align="center">
Ant Design Icons for Angular
</h1>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/@ant-design/icons-angular.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-angular)
[![NPM downloads](http://img.shields.io/npm/dm/@ant-design/icons-angular.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-angular)

</div>

![](./demo.png)

## Install

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

And register the icons you need to `IconService` (all or explicitly, we call it **static loading**):

> ATTENTION! We strongly suggest you not to register all icons, which would increase the bundle size dramatically.

```ts
import { Component, inject } from '@angular/core';
import { IconService } from '@ant-design/icons-angular';
import { AccountBookFill } from '@ant-design/icons-angular/icons'
// import * as AllIcons from 'ant-icons-angular/icons';

@Component({
  // ...
})
export class AppComponent {
  readonly iconService = inject(IconService);
  
  constructor() {
    // Import all. NOT RECOMMENDED. ❌
    // const antDesignIcons = AllIcons as {
      // [key: string]: IconDefinition;
    // };
    // this.iconService.addIcon(...Object.keys(antDesignIcons).map(key => antDesignIcons[key]));

    // Import what you need! ✔️
    this.iconService.addIcon(...[ AccountBookFill ]);
    this.iconService.twoToneColor = { primaryColor: '#1890ff' };
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

Please checkout the demo for more details.

For icons provided by Ant Design, we provide **dynamic loading** strategy to reduce bundle's size. 
Just config your `angular.json` and even don't need to register the icons! Checkout the `examples` folder and `angular.json` for more details.

### Namespace

Namespace allows users to register their own icons with simple API, support both dynamic loading and static loading.

If you want to add a `panda` icon in `animal` namespace:

- for static loading, you can call `addIconLiteral('animal:panda', '<svg>...</svg>')`;
- for dynamic loading, just put `panda.svg` under `assets/animal`. And render a panda like: `<span antIcon type="animal:panda">`.

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

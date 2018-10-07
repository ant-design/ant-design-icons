<h1 align="center">
Ant Design Icons for Angular
</h1>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/@ant-design/icons-angular.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-angular)
[![NPM downloads](http://img.shields.io/npm/dm/@ant-design/icons-angular.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-angular)

</div>

## Install

```bash
ng add @ant-design/icons-angular
# or npm install @ant-design/icons-angular
```

## Usage

You should import `IconModule` in your application's root module.

```ts
import { IconModule } from '@ant-design/icons-angular';

@NgModule({
  imports: [
    IconModule
  ]
})
export class AppModule { }
```

And register the icons that you need to `IconService` (all or explicitly):

```ts
import { Component, OnInit } from '@angular/core';
import { IconDefinition, IconService } from 'ant-icons-angular';
import * as AllIcons from 'ant-icons-angular/icons';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _iconService: IconService) {
    const antDesignIcons = AllIcons as {
      [key: string]: IconDefinition;
    };
    this._iconService.addIcon(...Object.keys(antDesignIcons).map(key => antDesignIcons[key]));
    this._iconService.twoToneColor = { primaryColor: '#1890ff' };
  }
}
```

When you want to render an icon:

```html
<i antIcon [type]="ant-cloud" [theme]="'outline'"></i>
```

Checkout the example for more information.

For icons provided by Ant Design, we provide dynamic loading strategy to reduce bundled size. Just config your `angular.json` and you even don't need to register the icons! Checkout our `examples` dir.

### Directive Inputs

```ts
class IconDirevtive {
  @Input() type: string | StringifyIconDefinition;
  @Input() theme: ThemeType;
  @Input() twoToneColor: string;
}
```

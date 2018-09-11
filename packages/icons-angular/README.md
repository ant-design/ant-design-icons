<h1 align="center">
Ant Design Icons for Angular
</h1>

## Install

```bash
ng add @ant-design/icons-angular

npm install @ant-design/icons-angular
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
import manifest from '@ant-design/icons/lib/manifest';
import { IconDefinition } from '@ant-design/icons/lib/types';
import * as AllIcons from '@ant-design/icons/lib/dist';
import { IconService } from '../../src/component/icon.service';
import { Manifest, ThemeType } from '../../src/types';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentTheme: ThemeType = 'fill';
  changed = true;
  names: Manifest = manifest;
  icons: string[] = [];

  changeIcons(): void {
    this.icons = this.names[this.currentTheme];
  }

  constructor(private _iconService: IconService) {
    const antDesignIcons = AllIcons as {
      [key: string]: IconDefinition;
    };
    this._iconService.addIcon(...Object.keys(antDesignIcons).map(key => antDesignIcons[key]));
    this._iconService.twoToneColor = { primaryColor: '#1890ff' };
  }

  ngOnInit(): void {
    this.changeIcons();
  }
}

```

When you want to render an icon:

```html
<i antIcon [type]="ant-cloud" [theme]="'outline'"></i>
```

Checkout the example for more information.

For icons provided by Ant Design, we provide dynamic loading strategy to reduce bundled size. Just config your `angular.json` and you even don't need to register the icons! Checkout our `examples` dir.

import { Component, OnInit } from '@angular/core';
import { Manifest, ThemeType, IconService, manifest, IconDefinition } from '@ant-design/icons-angular';
// import * as AllIcons from '@ant-design/icons-angular/icons';
// import { AccountBookFill } from '@ant-design/icons-angular/icons';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentTheme: ThemeType = 'fill';
  names: Manifest = manifest;
  icons: string[] = [];

  changeIcons(): void {
    this.icons = this.names[this.currentTheme];
  }

  constructor(private _iconService: IconService) {
    // ===== Comment us to try dynamic loading =====
    // const antDesignIcons = AllIcons as {
    //   [key: string]: IconDefinition;
    // };
    // this._iconService.addIcon(...Object.keys(antDesignIcons).map(key => antDesignIcons[key]));
    // ===== Comment above =====
    // this._iconService.addIcon(AccountBookFill);
    this._iconService.twoToneColor = { primaryColor: '#1890ff' };
  }

  ngOnInit(): void {
    this.changeIcons();
  }
}

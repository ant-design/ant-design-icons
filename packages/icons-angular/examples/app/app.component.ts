import { Component, OnInit } from '@angular/core';
import manifest from '@ant-design/icons/lib/manifest';
import { IconDefinition, Manifest, ThemeType, IconService } from 'ant-icons-angular';
import * as AllIcons from 'ant-icons-angular/icons';

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
    // ===== Comment us to try dynamic loading =====
    const antDesignIcons = AllIcons as {
      [key: string]: IconDefinition;
    };
    this._iconService.addIcon(...Object.keys(antDesignIcons).map(key => antDesignIcons[key]));
    // ===== Comment above =====
    this._iconService.twoToneColor = { primaryColor: '#1890ff' };
  }

  ngOnInit(): void {
    this.changeIcons();
  }
}

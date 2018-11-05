import { Component, OnInit } from '@angular/core';
import { Manifest, ThemeType, IconService, manifest } from '@ant-design/icons-angular';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  currentTheme: ThemeType = 'fill';
  names: Manifest = manifest;
  icons: string[] = [];

  changeIcons(): void {
    this.icons = this.names[ this.currentTheme ];
  }

  constructor(private _iconService: IconService) {
    this._iconService.twoToneColor = { primaryColor: '#1890ff' };
  }

  ngOnInit(): void {
    this.changeIcons();
  }
}

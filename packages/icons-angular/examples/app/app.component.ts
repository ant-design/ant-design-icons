import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { manifest, IconService, Manifest, ThemeType, IconDirective } from '@ant-design/icons-angular';

@Component({
  selector: 'app-root',
  imports: [FormsModule, IconDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
    this._iconService.useJsonpLoading();
    // this._iconService.addIconLiteral('animal:panda', pandaLiteral);
  }

  ngOnInit(): void {
    this.changeIcons();
  }
}

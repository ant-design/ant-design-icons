import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconDirective } from './icon.directive';
import { IconService } from './icon.service';

@NgModule({
  imports: [CommonModule],
  exports: [IconDirective],
  declarations: [IconDirective],
  providers: [IconService]
})
export class IconModule { }

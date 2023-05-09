import { NgModule } from '@angular/core';
import { IconDirective } from './icon.directive';
import { IconService } from './icon.service';

@NgModule({
  exports: [IconDirective],
  declarations: [IconDirective],
  providers: [IconService]
})
export class IconModule { }

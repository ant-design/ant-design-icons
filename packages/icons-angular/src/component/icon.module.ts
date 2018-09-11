import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconService } from './icon.service';
import { IconDirective } from './icon.directive';

@NgModule({
  imports     : [ CommonModule ],
  exports     : [ IconDirective ],
  declarations: [ IconDirective ],
  providers   : [ IconService ]
})
export class IconModule {
}

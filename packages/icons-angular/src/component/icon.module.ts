import { NgModule } from '@angular/core';
import { IconDirective } from './icon.directive';


/**
 * @deprecated Please use `IconDirective` instead, will be removed in v20.
 */
@NgModule({
  imports: [IconDirective],
  exports: [IconDirective]
})
export class IconModule {}

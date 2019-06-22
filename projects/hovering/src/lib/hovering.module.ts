import { HoveringTextDirective } from './directives/hovering-text.directive';
import { HoveringIconDirective } from './directives/hovering-icon.directive';
import { HoveringCircleComponent } from './hovering-circle/hovering-circle.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HoveringCircleComponent, HoveringIconDirective, HoveringTextDirective],
  imports: [],
  exports: [HoveringCircleComponent, HoveringIconDirective, HoveringTextDirective]
})
export class HoveringModule {}

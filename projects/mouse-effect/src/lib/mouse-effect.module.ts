import { MouseRotateEffectDirective } from './directives/mouse-rotate-effect.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseMoveEffectComponent } from './components/mouse-move-effect/mouse-move-effect.component';
import { ImageMouseEffectDirective } from './directives/image-mouse-effect.directive';

@NgModule({
  declarations: [
    MouseMoveEffectComponent,
    MouseRotateEffectDirective,
    ImageMouseEffectDirective
  ],
  imports: [CommonModule],
  exports: [
    MouseMoveEffectComponent,
    MouseRotateEffectDirective,
    ImageMouseEffectDirective
  ]
})
export class MouseEffectModule {}

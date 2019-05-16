import { CommonModule } from '@angular/common';
import { OverlayMenuDirective } from './directives/overlay-menu.directive';
import { NgModule } from '@angular/core';
import { OverlayMenuEffectComponent } from './components/overlay-menu-effect/overlay-menu-effect.component';
import { OverlayTextEffectComponent } from './components/overlay-text-effect/overlay-text-effect.component';

@NgModule({
  declarations: [
    OverlayMenuEffectComponent,
    OverlayTextEffectComponent,
    OverlayMenuDirective
  ],
  imports: [CommonModule],
  exports: [
    OverlayMenuEffectComponent,
    OverlayTextEffectComponent,
    OverlayMenuDirective
  ]
})
export class OverlayMenuEffectModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FadeScrollItemComponent } from './components/fade-scroll-item/fade-scroll-item.component';
import { FadeScrollWrapperComponent } from './components/fade-scroll-wrapper/fade-scroll-wrapper.component';

@NgModule({
  declarations: [FadeScrollWrapperComponent, FadeScrollItemComponent],
  imports: [CommonModule],
  exports: [FadeScrollWrapperComponent, FadeScrollItemComponent]
})
export class FadeScrollEffectModule {}

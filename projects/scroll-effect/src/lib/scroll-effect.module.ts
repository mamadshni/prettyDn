import { NgModule } from '@angular/core';
import { ScrollEffectComponent } from './components/scroll-effect.component';
import { ScrollTitleDirective } from './directives/scroll-title.directive';
import { ScrollBackdropDirective } from './directives/scroll-backdrop.directive';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ScrollEffectComponent,
    ScrollTitleDirective,
    ScrollBackdropDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    ScrollEffectComponent,
    ScrollTitleDirective,
    ScrollBackdropDirective
  ]
})
export class ScrollEffectModule { }

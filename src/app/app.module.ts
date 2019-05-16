import { OverlayMenuEffectModule } from 'overlay-menu-effect';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScrollEffectModule } from 'scroll-effect';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { HeroContentComponent } from './sections/hero-section/hero-content/hero-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    HeroContentComponent
  ],
  imports: [BrowserModule, ScrollEffectModule, OverlayMenuEffectModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './route/app-router.module';
import { MouseEffectModule } from 'mouse-effect';
import { OverlayMenuEffectModule } from 'overlay-menu-effect';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScrollEffectModule } from 'scroll-effect';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { HeroContentComponent } from './sections/hero-section/hero-content/hero-content.component';
import { BackgroundStyleComponent } from './background-style/background-style.component';
import { CategorySectionComponent } from './sections/category-section/category-section.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { CategoryItemCardComponent } from './sections/category-section/category-item-card/category-item-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    HeroContentComponent,
    BackgroundStyleComponent,
    CategorySectionComponent,
    CategoryItemCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollEffectModule,
    OverlayMenuEffectModule,
    MouseEffectModule,
    AppRoutingModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

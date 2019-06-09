import { FadeScrollEffectModule } from 'fade-scroll-effect';
import { MouseEffectModule } from 'mouse-effect';
import { OverlayMenuEffectModule } from 'overlay-menu-effect';
import { ScrollEffectModule } from 'scroll-effect';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { AppRoutingModule } from './route/app-router.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { HeroContentComponent } from './sections/hero-section/hero-content/hero-content.component';
import { BackgroundStyleComponent } from './background-style/background-style.component';
import { CategorySectionComponent } from './sections/category-section/category-section.component';
import { CategoryItemCardComponent } from './sections/category-section/category-item-card/category-item-card.component';
import { GalleryWrapperSectionComponent } from './sections/gallery-section/gallery-wrapper-section.component';
import { GalleryCardComponent } from './sections/gallery-section/gallery-card/gallery-card.component';

import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    HeroContentComponent,
    BackgroundStyleComponent,
    CategorySectionComponent,
    CategoryItemCardComponent,
    GalleryWrapperSectionComponent,
    GalleryCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollEffectModule,
    OverlayMenuEffectModule,
    MouseEffectModule,
    AppRoutingModule,
    AngularFullpageModule,
    FadeScrollEffectModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

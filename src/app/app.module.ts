import { CommonModule } from '@angular/common';
import { FadeScrollEffectModule } from 'fade-scroll-effect';
import { MouseEffectModule } from 'mouse-effect';
import { OverlayMenuEffectModule } from 'overlay-menu-effect';
import { ScrollEffectModule } from 'scroll-effect';
import { HoveringModule } from 'hovering';

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

import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { GallerySearchFilterPipe } from './pipes/gallery-search-filter.pipe';
import { GalleryFilterComponent } from './sections/gallery-section/gallery-filter/gallery-filter.component';
import { GalleryCatFilterPipe } from './pipes/gallery-cat-filter.pipe';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { AboutContentComponent } from './sections/about-section/about-content/about-content.component';
import { GalleryShowComponent } from './sections/gallery-section/gallery-show/gallery-show.component';
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
    GalleryCardComponent,
    FooterComponent,
    GallerySearchFilterPipe,
    GalleryFilterComponent,
    GalleryCatFilterPipe,
    AboutSectionComponent,
    AboutContentComponent,
    GalleryShowComponent
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
    HoveringModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

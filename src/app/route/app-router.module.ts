import { AboutSectionComponent } from './../sections/about-section/about-section.component';
import { CategorySectionComponent } from './../sections/category-section/category-section.component';
import { NgModule } from '@angular/core';
import { HeroSectionComponent } from '../sections/hero-section/hero-section.component';
import { Routes, RouterModule } from '@angular/router';
import { GalleryWrapperSectionComponent } from '../sections/gallery-section/gallery-wrapper-section.component';

export const routes: Routes = [
  {
    path: 'main',
    component: CategorySectionComponent,
    data: { isLight: true }
  },
  {
    path: 'about',
    component: AboutSectionComponent,
    data: { isLight: false }
  },
  {
    path: 'category/:id',
    component: HeroSectionComponent,
    data: { isLight: true }
  },

  {
    path: 'gallery',
    component: GalleryWrapperSectionComponent,
    data: { isLight: true }
  },

  { path: '**', redirectTo: 'main' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

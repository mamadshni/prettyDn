import { CategorySectionComponent } from './../sections/category-section/category-section.component';
import { NgModule } from '@angular/core';
import { HeroSectionComponent } from '../sections/hero-section/hero-section.component';
import { Routes, RouterModule } from '@angular/router';
import { GalleryWrapperSectionComponent } from '../sections/gallery-section/gallery-wrapper-section.component';

export const routes: Routes = [
  {
    path: '',
    component: CategorySectionComponent,
    data: { isLight: true },
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: HeroSectionComponent,
    data: { isLight: false, isChild: true }
  },
  {
    path: 'category/:id',
    component: HeroSectionComponent,
    data: { isLight: true, isChild: false }
  },

  {
    path: 'gallery',
    component: GalleryWrapperSectionComponent,
    data: { isLight: true }
  },

  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

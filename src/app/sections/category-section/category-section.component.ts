import { CategoryInterface } from './../../data/category-data/category-data.interface';
import { CategoryDataService } from './../../data/category-data/category-data.service';
import { Component, OnInit } from '@angular/core';
// tslint:disable:variable-name

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss']
})
export class CategorySectionComponent implements OnInit {
  items: CategoryInterface[];
  enterIndex = 0;

  config;
  fullpage_api;

  constructor(private categoryDataService: CategoryDataService) {
    this.config = {
      lockAnchors: true,
      touchSensitivity: 25,
      sectionSelector: '.full-page-scroll',
      scrollingSpeed: 1000,
      max: 3,
      perspective: 1000,
      reverse: true,
      speed: 400,
      easingcss3: 'cubic-bezier(.84,.05,.3,1.05)',

      onLeave: (origin, destination, direction) => {
        this.enterIndex = destination.index;
        // this.categoryAnimationConfig.direction = direction;
      }
    };
  }

  ngOnInit() {
    this.items = this.categoryDataService.getCategories();
  }
}

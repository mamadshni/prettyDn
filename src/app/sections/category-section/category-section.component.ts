import { FullpageService } from './fullpage.service';
import { CategoryInterface } from './../../data/category-data/category-data.interface';
import { CategoryDataService } from './../../data/category-data/category-data.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
// tslint:disable:variable-name

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategorySectionComponent implements OnInit {
  items: CategoryInterface[];
  enterIndex = 0;

  config;

  constructor(
    private categoryDataService: CategoryDataService,
    private fullpageService: FullpageService
  ) {
    this.config = {
      lockAnchors: true,
      touchSensitivity: 25,
      sectionSelector: '.full-page-scroll',
      scrollingSpeed: 800,
      max: 3,
      perspective: 1000,
      reverse: true,
      easingcss3: 'cubic-bezier(.84,.05,.3,1.05)',

      onLeave: (origin, destination, direction) => {
        this.enterIndex = destination.index;
        // this.categoryAnimationConfig.direction = direction;
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpageService.fullpageApi = fullPageRef;
  }

  ngOnInit() {
    this.items = this.categoryDataService.getCategories();
  }
}

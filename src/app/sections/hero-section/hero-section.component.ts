import { CategoryInterface } from './../../data/category-data/category-data.interface';
import { CategoryDataService } from './../../data/category-data/category-data.service';
import { ActivatedRoute } from '@angular/router';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent implements OnInit {
  backDrop: CategoryInterface = {
    imageUrl: '../assets/bg.jpg',
    title: 'About',
    description: 'Lorem ipsum dolor sit.'
  };

  constructor(
    private route: ActivatedRoute,
    private categoryDataService: CategoryDataService
  ) {}

  ngOnInit() {
    const categoryIndex: number = +this.route.snapshot.params.id;

    if (this.route.snapshot.routeConfig.path === 'about') {
    } else {
      this.backDrop = this.categoryDataService.getCategory(categoryIndex);
    }
  }
}

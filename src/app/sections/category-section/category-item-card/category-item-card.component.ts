import { CategoryInterface } from './../../../data/category-data/category-data.interface';
import { CategoryDataService } from './../../../data/category-data/category-data.service';
import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { TweenLite, Power2 } from 'gsap';
// tslint:disable:use-host-property-decorator

@Component({
  selector: 'app-category-item-card',
  templateUrl: './category-item-card.component.html',
  styleUrls: ['./category-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'item-card'
  }
})
export class CategoryItemCardComponent implements OnInit {
  category: CategoryInterface;

  @Input() indexCategory: number;

  @ViewChild('categoryWrapper') categoryWrapper: ElementRef;
  @ViewChild('imageWrapper') imageWrapper: ElementRef;
  @ViewChild('captionWrapper') captionWrapper: ElementRef;

  constructor(
    private router: Router,
    private categoryDataService: CategoryDataService
  ) {}

  ngOnInit() {
    this.category = this.categoryDataService.getCategory(this.indexCategory);
  }

  toHeroSection() {
    if (this.categoryWrapper.nativeElement.vanillaTilt) {
      this.categoryWrapper.nativeElement.vanillaTilt.destroy();
    }
    TweenLite.to(this.categoryWrapper.nativeElement, 0.5, {
      css: { width: '100%', height: '100vh' },
      onComplete: this.navigation.bind(this),
      ease: Power2.easeOut
    });
    TweenLite.to(this.imageWrapper.nativeElement, 0.5, {
      opacity: 0.6,
      ease: Power2.easeOut
    });
    TweenLite.to(this.captionWrapper.nativeElement, 0.35, {
      opacity: 0,
      y: '30%',
      ease: Power2.easeOut
    });
  }

  navigation() {
    this.router.navigate([`/category/${this.indexCategory}`]);
  }
}

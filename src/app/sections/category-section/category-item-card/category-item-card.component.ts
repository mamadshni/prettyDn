import { CategoryInterface } from './../../../data/category-data/category-data.interface';
import { CategoryDataService } from './../../../data/category-data/category-data.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { TweenLite, Power2 } from 'gsap';

@Component({
  selector: 'app-category-item-card',
  templateUrl: './category-item-card.component.html',
  styleUrls: ['./category-item-card.component.scss']
})
export class CategoryItemCardComponent implements OnInit {
  category: CategoryInterface;

  @Input() indexCategory: number;

  @Input('enterItem') set enterItem(condition: boolean) {
    if (condition) {
      this.imageCard.nativeElement.classList.add('active');
      this.imageCardMirror.nativeElement.classList.add('active');
      this.captionText.nativeElement.classList.add('active');
    } else {
      this.imageCard.nativeElement.classList.remove('active');
      this.imageCardMirror.nativeElement.classList.remove('active');
      this.captionText.nativeElement.classList.remove('active');
    }
  }

  @ViewChild('categoryWrapper') categoryWrapper: ElementRef;
  @ViewChild('imageSplit') imageSplit: ElementRef;
  @ViewChild('imageCard') imageCard: ElementRef;
  @ViewChild('imageCardMirror') imageCardMirror: ElementRef;
  @ViewChild('captionWrapper') captionWrapper: ElementRef;
  @ViewChild('captionText') captionText: ElementRef;

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
    TweenLite.to(this.imageSplit.nativeElement, 0.5, {
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

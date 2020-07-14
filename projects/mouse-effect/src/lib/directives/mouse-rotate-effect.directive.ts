import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  OnDestroy
} from '@angular/core';
// tslint:disable:directive-selector

import 'vanilla-tilt';
declare var VanillaTilt;

@Directive({
  selector: '[MouseRotateEffect]'
})
export class MouseRotateEffectDirective implements OnInit, OnDestroy {
  @HostListener('window:resize') onResize() {
    if (window.innerWidth > 1024) {
      this.addVanilla();
    } else {
      if (this.elemRef.nativeElement.vanillaTilt) {
        this.removeVanilla();
      }
    }
  }

  constructor(private elemRef: ElementRef) {}

  ngOnInit(): void {
    if (window.innerWidth > 1024) {
      this.addVanilla();
    }
  }

  ngOnDestroy(): void {
    if (this.elemRef.nativeElement.vanillaTilt) {
      this.removeVanilla();
    }
  }

  addVanilla(): void {
    VanillaTilt.init(this.elemRef.nativeElement, {
      max: 3,
      perspective: 1000,
      reverse: true,
      speed: 400,
      easing: 'cubic-bezier(.19,.48,.53,.96)'
    });
  }

  removeVanilla(): void {
    this.elemRef.nativeElement.vanillaTilt.destroy();
  }
}

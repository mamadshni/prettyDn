import { Directive, ElementRef } from '@angular/core';
import { LIB_PREFIX } from '../module/params';
// tslint:disable:directive-selector

@Directive({
  selector: '[hIcon] , [h-icon]'
})
export class HoveringIconDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add(`${LIB_PREFIX}-icon`);
  }
}

import { Directive, ElementRef } from '@angular/core';
import { LIB_PREFIX } from '../module/params';
// tslint:disable:directive-selector

@Directive({
  selector: '[hText] , [h-text] ,h-text , hText'
})
export class HoveringTextDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add(`${LIB_PREFIX}-text`);
  }
}

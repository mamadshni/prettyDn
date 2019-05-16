// tslint:disable:directive-selector
// tslint:disable:use-host-property-decorator
// tslint:disable:object-literal-key-quotes

import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[scrollBackdrop]',
})
export class ScrollBackdropDirective {

  constructor(public tmpRef: TemplateRef<ScrollBackdropDirective>) { }

}

// tslint:disable:directive-selector
import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[overlayMenu]'
})
export class OverlayMenuDirective {
  constructor(public tmpRef: TemplateRef<OverlayMenuDirective>) {}
}

import { Directive, TemplateRef } from '@angular/core';
// tslint:disable:directive-selector

@Directive({
  selector: '[imageMouseEffect]'
})
export class ImageMouseEffectDirective {
  constructor(public tmpRef: TemplateRef<ImageMouseEffectDirective>) {}
}

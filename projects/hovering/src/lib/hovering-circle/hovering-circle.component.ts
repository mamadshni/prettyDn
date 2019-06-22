import { HoveringLineFrom, HoveringLineTo } from './../module/interfaces';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  Renderer2,
  Attribute,
  AfterViewInit
} from '@angular/core';

// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator

@Component({
  selector: 'hovering-circle',
  templateUrl: './hovering-circle.component.html',
  styleUrls: ['./hovering-circle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'hovering-circle'
  }
})
export class HoveringCircleComponent implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,

    @Attribute('from') private lineFrom: HoveringLineFrom,
    @Attribute('to') private lineTo: HoveringLineTo
  ) {}

  ngAfterViewInit() {
    if (HoveringLineFrom[this.lineFrom] != null) {
      if (HoveringLineTo[this.lineTo] != null) {
        this.renderer.addClass(
          this.el.nativeElement,
          `${this.lineFrom}-${this.lineTo}`
        );
      } else {
        console.error('Wrong Value For "To" Attribute in "Hovering Component"');
      }
    } else {
      console.error('Wrong Value For "From" Attribute in "Hovering Component"');
    }
  }
}

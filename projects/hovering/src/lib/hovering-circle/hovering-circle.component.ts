import { HoveringLineFrom, HoveringTextPos } from './../module/interfaces';
import {
  Component,
  ViewEncapsulation,
  ElementRef,
  Renderer2,
  Attribute,
  AfterViewInit
} from '@angular/core';
import { LIB_PREFIX } from '../module/params';

// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator

@Component({
  selector: 'hovering-circle',
  templateUrl: './hovering-circle.component.html',
  styleUrls: ['./hovering-circle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: `${LIB_PREFIX}-circle`
  }
})
export class HoveringCircleComponent implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,

    @Attribute('from') private lineFrom: HoveringLineFrom,
    @Attribute('textPos') private textPose: HoveringTextPos
  ) {}

  ngAfterViewInit() {
    if (this.lineFrom) {
      if (HoveringLineFrom[this.lineFrom] != null) {
        this.renderer.addClass(this.el.nativeElement, `line-${this.lineFrom}`);
      } else {
        console.error(
          'Wrong Value For "From" Attribute in "Hovering Component"'
        );
      }
    }

    if (this.textPose) {
      if (HoveringTextPos[this.textPose] != null) {
        this.renderer.addClass(this.el.nativeElement, `text-${this.textPose}`);
      } else {
        console.error(
          'Wrong Value For "textPose" Attribute in "Hovering Component"'
        );
      }
    }
  }
}

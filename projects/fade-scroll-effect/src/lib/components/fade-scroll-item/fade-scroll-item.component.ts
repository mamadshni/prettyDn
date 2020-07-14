import { FadeScrollEffectService } from './../../fade-scroll-effect.service';
import { Component, OnInit, ElementRef } from '@angular/core';
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator

@Component({
  selector: 'fade-scroll-item',
  templateUrl: './fade-scroll-item.component.html',
  styleUrls: [ './fade-scroll-item.component.scss' ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'fade-scroll__item'
  }
})
export class FadeScrollItemComponent implements OnInit {
  private card = this.elem.nativeElement;
  constructor(
    private elem: ElementRef,
    private fadeScrollService: FadeScrollEffectService
  ) {}

  ngOnInit() {
    this.fadeScrollService.scrollPos.subscribe((val: [number, number]) => {
      const posCardTop = this.offset(this.elem.nativeElement);
      const posCardBot = this.card.offsetHeight + posCardTop;

      if (val[0] <= posCardBot && val[1] >= posCardTop) {
        this.elem.nativeElement.style.transform = `translateY(0px)`;

        this.card.style.opacity = `1`;
      } else if (val[0] <= posCardBot) {
        this.card.style.transform = `translateY(20vh)`;

        this.card.style.opacity = `0`;
      } else if (val[1] >= posCardTop) {
        this.card.style.transform = `translateY(-20vh)`;

        this.card.style.opacity = `0`;
      }
    });
  }

  private offset(elem: any) {
    let result = 0;

    while (elem.offsetParent) {
      result += elem.offsetTop;
      elem = elem.offsetParent;
    }

    return result;
  }
}

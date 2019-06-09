import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgZone,
  ContentChildren,
  QueryList,
  ElementRef,
  ViewEncapsulation,
  AfterContentInit
} from '@angular/core';
import { FadeScrollItemComponent } from '../fade-scroll-item/fade-scroll-item.component';
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator

@Component({
  selector: 'fade-scroll-wrapper',
  templateUrl: 'fade-scroll-wrapper.component.html',
  styleUrls: ['fade-scroll-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'fade-scroll__wrapper'
  }
})
export class FadeScrollWrapperComponent implements OnInit, AfterContentInit {
  @ContentChildren(FadeScrollItemComponent)
  fadeScrollItemComponent: QueryList<FadeScrollItemComponent>;

  private bindScrollEvent = this.onScroll.bind(this);

  private fadeScrollItems: HTMLElement[];

  private elemOffset: number;

  constructor(private zone: NgZone, private elem: ElementRef) {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.fadeScrollItems = this.fadeScrollItemComponent.map(
      (item: FadeScrollItemComponent) => {
        return item.elem.nativeElement;
      }
    );
    this.elemOffset = this.offset(this.elem.nativeElement);

    this.zone.runOutsideAngular(this.initScrollListener.bind(this));
  }

  private offset(elem: any) {
    let result = 0;

    while (elem.offsetParent) {
      result += elem.offsetTop;
      elem = elem.offsetParent;
    }

    return result;
  }

  private initScrollListener() {
    window.addEventListener('scroll', this.bindScrollEvent);
  }

  private onScroll(e: Event) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollBot = scrollTop + window.innerHeight;

    this.fadeScrollItems.forEach((card: HTMLElement, i: number) => {
      const posCardTop = card.offsetTop + this.elemOffset;
      const posCardBot = card.offsetHeight + posCardTop;

      if (scrollTop <= posCardBot && scrollBot >= posCardTop) {
        card.style.transform = `translateY(0px)`;

        card.style.opacity = `1`;
      } else if (scrollTop <= posCardBot) {
        card.style.transform = `translateY(20vh)`;

        card.style.opacity = `0`;
      } else if (scrollBot >= posCardTop) {
        card.style.transform = `translateY(-20vh)`;

        card.style.opacity = `0`;
      }
    });
  }
}

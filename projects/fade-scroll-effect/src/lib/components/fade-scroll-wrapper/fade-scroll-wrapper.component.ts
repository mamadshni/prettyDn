import { FadeScrollEffectService } from './../../fade-scroll-effect.service';
import {
  Component,
  OnInit,
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
  styleUrls: [ 'fade-scroll-wrapper.component.scss' ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'fade-scroll__wrapper'
  }
})
export class FadeScrollWrapperComponent implements OnInit, AfterContentInit {
  private bindScrollEvent = this.onScroll.bind(this);

  constructor(
    private zone: NgZone,
    private fadeScrollService: FadeScrollEffectService
  ) {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.zone.runOutsideAngular(this.initScrollListener.bind(this));
  }

  private initScrollListener() {
    window.addEventListener('scroll', this.bindScrollEvent);
  }

  private onScroll(e: Event) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollBot = scrollTop + window.innerHeight;

    this.fadeScrollService.scrollPos.next([ scrollTop, scrollBot ]);
  }
}

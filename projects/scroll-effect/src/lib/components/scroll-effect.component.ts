import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit
} from '@angular/core';
import { ScrollBackdropDirective } from '../directives/scroll-backdrop.directive';
import { ScrollTitleDirective } from '../directives/scroll-title.directive';
import { fadeInOutAnim, opacity } from '../animation';
// tslint:disable:use-host-property-decorator
// tslint:disable:component-selector
// tslint:disable:object-literal-key-quotes

const SCROLL_BOUND = 250;
const MAX_TITLE_Y_POSITION = 150;
const MIN_TITLE_Y_POSITION = 50;

@Component({
  selector: 'scroll-effect',
  templateUrl: 'scroll-effect.component.html',
  styleUrls: ['scroll-effect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [fadeInOutAnim('1s'), opacity('500ms')],
  host: {
    class: 'scroll-effect__container'
  }
})
export class ScrollEffectComponent implements OnInit, AfterViewInit {
  public showTemplates = true;

  @ContentChild(ScrollTitleDirective) titleDirective: ScrollTitleDirective;
  @ContentChild(ScrollBackdropDirective)
  backDropDirective: ScrollBackdropDirective;

  @ViewChild('titleElem') titleElem: ElementRef<HTMLDivElement>;
  @ViewChild('backdropElem') backdropElem: ElementRef<HTMLDivElement>;

  constructor(private zone: NgZone, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.zone.runOutsideAngular(this.initScrollListener.bind(this));
  }

  ngAfterViewInit() {}

  private initScrollListener() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  private onScroll(e: Event) {
    const scrollY = window.scrollY;

    // OUT OF BOUND -> HIDE ALL
    if (scrollY > SCROLL_BOUND) {
      this.showTemplates = false;
      this.cd.detectChanges();

      // IN BOUND -> ANIMATE TITLE
    } else {
      this.showTemplates = true;
      this.cd.detectChanges();

      if (this.titleElem) {
        const factor =
          (MAX_TITLE_Y_POSITION - MIN_TITLE_Y_POSITION) / SCROLL_BOUND;
        const newYPosition = factor * scrollY + MIN_TITLE_Y_POSITION;

        const newOpacity = 1 - (1 / SCROLL_BOUND) * scrollY;

        this.titleElem.nativeElement.style.transform = `translate(-50%, ${-newYPosition}%)`;
        this.titleElem.nativeElement.style.opacity = newOpacity.toString();
      }
    }
  }
}

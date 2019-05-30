import { Subscription } from 'rxjs';
import { OverlayMenuEffectService } from 'overlay-menu-effect';
import { ImageMouseEffectDirective } from '../../directives/image-mouse-effect.directive';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  NgZone,
  ElementRef,
  ViewChild,
  ContentChild,
  Input,
  OnDestroy,
  ChangeDetectorRef,
  HostListener
} from '@angular/core';
// tslint:disable:use-host-property-decorator
// tslint:disable:no-input-rename
// tslint:disable:component-selector
import { TweenLite } from 'gsap';

const movementSpeed = 80;
@Component({
  selector: 'mouse-move-effect',
  templateUrl: 'mouse-move-effect.component.html',
  styleUrls: ['mouse-move-effect.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [],
  host: {
    class: 'mouse-effect__container'
  }
})
export class MouseMoveEffectComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  private subscription: Subscription;
  private bindMouseEvent = this.mouseMoveFunction.bind(this);

  @ContentChild(ImageMouseEffectDirective)
  imageDirective: ImageMouseEffectDirective;

  @ViewChild('mouseWrapper') mouseWrapper: ElementRef<HTMLDivElement>;
  @ViewChild('imageWrapper') imageWrapper: ElementRef<HTMLDivElement>;

  @HostListener('window:resize') onResize() {
    if (!this.isMenuOpen) {
      if (window.innerWidth > 1024) {
        this.addEffect();
      } else {
        this.deleteEffect();
      }
    }
  }

  constructor(
    private zone: NgZone,
    private elemRef: ElementRef,
    private overlayMenuService: OverlayMenuEffectService
  ) {}

  ngOnInit() {
    this.subscription = this.overlayMenuService.isMenuOpened.subscribe(
      (condition: boolean) => {
        if (condition) {
          this.deleteEffect();
          this.blurEffect();
        } else {
          this.addEffect();
        }
        this.isMenuOpen = condition;
      }
    );
    this.addEffect();
  }

  ngOnDestroy() {
    this.deleteEffect();
    this.subscription.unsubscribe();
  }

  addEffect() {
    if (window.innerWidth > 1024) {
      this.zone.runOutsideAngular(() =>
        this.elemRef.nativeElement.addEventListener(
          'mousemove',
          this.bindMouseEvent
        )
      );
    }
    this.removeBlur();
  }

  deleteEffect() {
    TweenLite.to(this.mouseWrapper.nativeElement, 0.2, { x: 0, y: 0 });
    this.zone.runOutsideAngular(() =>
      this.elemRef.nativeElement.removeEventListener(
        'mousemove',
        this.bindMouseEvent
      )
    );
  }

  blurEffect() {
    TweenLite.to(this.imageWrapper.nativeElement, 0.3, {
      scale: 1.2,
      webkitFilter: 'blur(10px)'
    });
  }

  removeBlur() {
    TweenLite.to(this.imageWrapper.nativeElement, 0.3, {
      scale: 1.1,
      webkitFilter: 'blur(0px)'
    });
  }

  mouseMoveFunction(event: MouseEvent) {
    const posX = event.pageX - this.elemRef.nativeElement.offsetLeft;
    const posY = event.pageY - this.elemRef.nativeElement.offsetTop;

    const mouseX = posX - this.elemRef.nativeElement.offsetWidth / 2;
    const mouseY = posY - this.elemRef.nativeElement.offsetHeight / 2;

    const mouseXPercent =
      -(mouseX / this.elemRef.nativeElement.offsetWidth) * movementSpeed;
    const mouseYPercent =
      -(mouseY / this.elemRef.nativeElement.offsetHeight) * movementSpeed;

    TweenLite.to(this.mouseWrapper.nativeElement, 1, {
      x: mouseXPercent,
      y: mouseYPercent
    });
  }
}

import { OverlayMenuEffectService } from '../../overlay-menu-effect.service';
import { OverlayMenuDirective } from '../../directives/overlay-menu.directive';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ContentChild,
  OnDestroy,
  Input
} from '@angular/core';
import { overlayMenuAnimation } from '../../overlay.animation';
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator
// tslint:disable:no-input-rename

@Component({
  selector: 'overlay-menu-effect',
  templateUrl: 'overlay-menu-effect.component.html',
  styleUrls: ['overlay-menu-effect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [overlayMenuAnimation()],
  host: {
    class: 'overlay-menu__container',
    '[@overlayMenuAnimation]': 'isOpen'
  }
})
export class OverlayMenuEffectComponent implements OnInit, OnDestroy {
  isOpen: boolean;
  @Input('isOpen') set changeState(open: boolean) {
    this.isOpen = open;
    this.overlayMenuEffectService.isMenuOpened.next(open);
  }

  @ContentChild(OverlayMenuDirective) menuDirective: OverlayMenuDirective;

  constructor(private overlayMenuEffectService: OverlayMenuEffectService) {}

  ngOnInit() {}

  ngOnDestroy() {}
}

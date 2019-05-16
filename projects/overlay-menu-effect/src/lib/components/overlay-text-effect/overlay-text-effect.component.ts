import { OverlayMenuEffectService } from './../../overlay-menu-effect.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import { overlayTextAnimation } from '../../overlay.animation';
// tslint:disable:component-selector

@Component({
  selector: 'overlay-text-effect',
  templateUrl: './overlay-text-effect.component.html',
  styleUrls: ['./overlay-text-effect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [overlayTextAnimation()]
})
export class OverlayTextEffectComponent implements OnInit, OnDestroy {
  isOpen = false;
  subscription: Subscription;
  constructor(
    private overlayMenuEffectService: OverlayMenuEffectService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.overlayMenuEffectService.isMenuOpened.subscribe(
      (condition: boolean) => {
        this.isOpen = condition;
        this.cd.detectChanges();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

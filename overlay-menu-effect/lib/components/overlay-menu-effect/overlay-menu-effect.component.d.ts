import { OverlayMenuEffectService } from '../../overlay-menu-effect.service';
import { OverlayMenuDirective } from '../../directives/overlay-menu.directive';
import { OnInit, OnDestroy } from '@angular/core';
export declare class OverlayMenuEffectComponent implements OnInit, OnDestroy {
    private overlayMenuEffectService;
    isOpen: boolean;
    changeState: boolean;
    menuDirective: OverlayMenuDirective;
    constructor(overlayMenuEffectService: OverlayMenuEffectService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

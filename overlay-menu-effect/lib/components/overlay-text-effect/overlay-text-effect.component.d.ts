import { OverlayMenuEffectService } from './../../overlay-menu-effect.service';
import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
export declare class OverlayTextEffectComponent implements OnInit, OnDestroy {
    private overlayMenuEffectService;
    private cd;
    isOpen: boolean;
    subscription: Subscription;
    constructor(overlayMenuEffectService: OverlayMenuEffectService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

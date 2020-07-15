import { ElementRef, OnInit, OnDestroy } from '@angular/core';
import 'vanilla-tilt';
export declare class MouseRotateEffectDirective implements OnInit, OnDestroy {
    private elemRef;
    onResize(): void;
    constructor(elemRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    addVanilla(): void;
    removeVanilla(): void;
}

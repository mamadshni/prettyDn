import { ImageMouseEffectDirective } from '../../directives/image-mouse-effect.directive';
import { OnInit, NgZone, ElementRef, OnDestroy } from '@angular/core';
export declare class MouseMoveEffectComponent implements OnInit, OnDestroy {
    private zone;
    private elemRef;
    isMenuOpen: boolean;
    private bindMouseEvent;
    imageDirective: ImageMouseEffectDirective;
    mouseWrapper: ElementRef<HTMLDivElement>;
    onResize(): void;
    constructor(zone: NgZone, elemRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    addEffect(): void;
    deleteEffect(): void;
    mouseMoveFunction(event: MouseEvent): void;
}

import { HoveringLineFrom, HoveringTextPos } from './../module/interfaces';
import { ElementRef, Renderer2, AfterViewInit } from '@angular/core';
export declare class HoveringCircleComponent implements AfterViewInit {
    private el;
    private renderer;
    private lineFrom;
    private textPose;
    constructor(el: ElementRef, renderer: Renderer2, lineFrom: HoveringLineFrom, textPose: HoveringTextPos);
    ngAfterViewInit(): void;
}

import { FadeScrollEffectService } from './../../fade-scroll-effect.service';
import { OnInit, NgZone, AfterContentInit } from '@angular/core';
export declare class FadeScrollWrapperComponent implements OnInit, AfterContentInit {
    private zone;
    private fadeScrollService;
    private bindScrollEvent;
    constructor(zone: NgZone, fadeScrollService: FadeScrollEffectService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    private initScrollListener;
    private onScroll;
}

import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef, ElementRef, NgZone, OnInit, OnDestroy } from '@angular/core';
import { ScrollBackdropDirective } from '../directives/scroll-backdrop.directive';
import { ScrollTitleDirective } from '../directives/scroll-title.directive';
export declare class ScrollEffectComponent implements OnInit, OnDestroy {
    private zone;
    private cd;
    private route;
    showTemplates: boolean;
    isChild: boolean;
    private bindScrollEvent;
    titleDirective: ScrollTitleDirective;
    backDropDirective: ScrollBackdropDirective;
    titleElem: ElementRef<HTMLDivElement>;
    backdropElem: ElementRef<HTMLDivElement>;
    constructor(zone: NgZone, cd: ChangeDetectorRef, route: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private initScrollListener;
    private deleteScrollListener;
    private onScroll;
}

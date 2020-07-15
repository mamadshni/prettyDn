import { FadeScrollEffectService } from './../../fade-scroll-effect.service';
import { OnInit, ElementRef } from '@angular/core';
export declare class FadeScrollItemComponent implements OnInit {
    private elem;
    private fadeScrollService;
    private card;
    constructor(elem: ElementRef, fadeScrollService: FadeScrollEffectService);
    ngOnInit(): void;
    private offset;
}

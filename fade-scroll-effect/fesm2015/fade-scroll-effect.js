import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Injectable, Component, ElementRef, defineInjectable, NgModule, ViewEncapsulation, NgZone } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FadeScrollEffectService {
    constructor() {
        this.scrollPos = new Subject();
    }
}
FadeScrollEffectService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FadeScrollEffectService.ctorParameters = () => [];
/** @nocollapse */ FadeScrollEffectService.ngInjectableDef = defineInjectable({ factory: function FadeScrollEffectService_Factory() { return new FadeScrollEffectService(); }, token: FadeScrollEffectService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator
class FadeScrollWrapperComponent {
    /**
     * @param {?} zone
     * @param {?} fadeScrollService
     */
    constructor(zone, fadeScrollService) {
        this.zone = zone;
        this.fadeScrollService = fadeScrollService;
        this.bindScrollEvent = this.onScroll.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.zone.runOutsideAngular(this.initScrollListener.bind(this));
    }
    /**
     * @private
     * @return {?}
     */
    initScrollListener() {
        window.addEventListener('scroll', this.bindScrollEvent);
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    onScroll(e) {
        /** @type {?} */
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        /** @type {?} */
        const scrollBot = scrollTop + window.innerHeight;
        this.fadeScrollService.scrollPos.next([scrollTop, scrollBot]);
    }
}
FadeScrollWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'fade-scroll-wrapper',
                template: "<ng-content></ng-content>\r\n",
                // changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'fade-scroll__wrapper'
                },
                styles: [".fade-scroll__item:nth-child(3n+1){transition:.6s cubic-bezier(.215,.61,.355,1) .1s}.fade-scroll__item:nth-child(3n+2){transition:.6s cubic-bezier(.215,.61,.355,1) .2s}.fade-scroll__item:nth-child(3n+3){transition:.6s cubic-bezier(.215,.61,.355,1) .3s}.fade-scroll__content{transition:.15s linear}"]
            }] }
];
/** @nocollapse */
FadeScrollWrapperComponent.ctorParameters = () => [
    { type: NgZone },
    { type: FadeScrollEffectService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator
class FadeScrollItemComponent {
    /**
     * @param {?} elem
     * @param {?} fadeScrollService
     */
    constructor(elem, fadeScrollService) {
        this.elem = elem;
        this.fadeScrollService = fadeScrollService;
        this.card = this.elem.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.fadeScrollService.scrollPos.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            /** @type {?} */
            const posCardTop = this.offset(this.elem.nativeElement);
            /** @type {?} */
            const posCardBot = this.card.offsetHeight + posCardTop;
            if (val[0] <= posCardBot && val[1] >= posCardTop) {
                this.elem.nativeElement.style.transform = `translateY(0px)`;
                this.card.style.opacity = `1`;
            }
            else if (val[0] <= posCardBot) {
                this.card.style.transform = `translateY(20vh)`;
                this.card.style.opacity = `0`;
            }
            else if (val[1] >= posCardTop) {
                this.card.style.transform = `translateY(-20vh)`;
                this.card.style.opacity = `0`;
            }
        }));
    }
    /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    offset(elem) {
        /** @type {?} */
        let result = 0;
        while (elem.offsetParent) {
            result += elem.offsetTop;
            elem = elem.offsetParent;
        }
        return result;
    }
}
FadeScrollItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'fade-scroll-item',
                template: "<ng-content></ng-content>\n",
                // changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'fade-scroll__item'
                },
                styles: [""]
            }] }
];
/** @nocollapse */
FadeScrollItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FadeScrollEffectService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FadeScrollEffectModule {
}
FadeScrollEffectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FadeScrollWrapperComponent, FadeScrollItemComponent],
                imports: [CommonModule],
                exports: [FadeScrollWrapperComponent, FadeScrollItemComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FadeScrollEffectService, FadeScrollWrapperComponent, FadeScrollEffectModule, FadeScrollItemComponent as ɵa };

//# sourceMappingURL=fade-scroll-effect.js.map
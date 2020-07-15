import { ActivatedRoute } from '@angular/router';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { Injectable, Directive, TemplateRef, NgModule, defineInjectable, Component, ChangeDetectionStrategy, ViewEncapsulation, NgZone, ChangeDetectorRef, ContentChild, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollEffectService = /** @class */ (function () {
    function ScrollEffectService() {
    }
    ScrollEffectService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ScrollEffectService.ctorParameters = function () { return []; };
    /** @nocollapse */ ScrollEffectService.ngInjectableDef = defineInjectable({ factory: function ScrollEffectService_Factory() { return new ScrollEffectService(); }, token: ScrollEffectService, providedIn: "root" });
    return ScrollEffectService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollBackdropDirective = /** @class */ (function () {
    function ScrollBackdropDirective(tmpRef) {
        this.tmpRef = tmpRef;
    }
    ScrollBackdropDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[scrollBackdrop]',
                },] }
    ];
    /** @nocollapse */
    ScrollBackdropDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return ScrollBackdropDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollTitleDirective = /** @class */ (function () {
    function ScrollTitleDirective(tmpRef) {
        this.tmpRef = tmpRef;
    }
    ScrollTitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[scrollTitle]',
                },] }
    ];
    /** @nocollapse */
    ScrollTitleDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return ScrollTitleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} duration
 * @return {?}
 */
function fadeInOutAnim(duration) {
    if (duration === void 0) { duration = '200ms'; }
    return trigger('fadeInOut', [
        transition('void => true', [
            style({ opacity: 0 }),
            animate(duration + " ease", style({ opacity: 1 }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate(duration + " ease", style({ opacity: 0 }))
        ])
    ]);
}
/**
 * @param {?=} duration
 * @return {?}
 */
function opacity(duration) {
    if (duration === void 0) { duration = '200ms'; }
    return trigger('opacity', [
        state('false', style({ opacity: 1 })),
        state('true', style({ opacity: 0 })),
        transition('false => true', animate(duration + " cubic-bezier(.22,.68,.43,1.01)")),
        transition('true => false', animate(duration + " cubic-bezier(.56,.07,.78,.57)"))
    ]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:use-host-property-decorator
// tslint:disable:component-selector
// tslint:disable:object-literal-key-quotes
/** @type {?} */
var SCROLL_BOUND = 250;
/** @type {?} */
var MAX_TITLE_Y_POSITION = 150;
/** @type {?} */
var MIN_TITLE_Y_POSITION = 50;
var ScrollEffectComponent = /** @class */ (function () {
    function ScrollEffectComponent(zone, cd, route) {
        this.zone = zone;
        this.cd = cd;
        this.route = route;
        this.showTemplates = true;
        this.isChild = false;
        this.bindScrollEvent = this.onScroll.bind(this);
    }
    /**
     * @return {?}
     */
    ScrollEffectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.zone.runOutsideAngular(this.initScrollListener.bind(this));
        this.isChild = this.route.snapshot.data.isChild;
    };
    /**
     * @return {?}
     */
    ScrollEffectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.zone.runOutsideAngular(this.deleteScrollListener.bind(this));
    };
    /**
     * @private
     * @return {?}
     */
    ScrollEffectComponent.prototype.initScrollListener = /**
     * @private
     * @return {?}
     */
    function () {
        window.addEventListener('scroll', this.bindScrollEvent);
    };
    /**
     * @private
     * @return {?}
     */
    ScrollEffectComponent.prototype.deleteScrollListener = /**
     * @private
     * @return {?}
     */
    function () {
        window.removeEventListener('scroll', this.bindScrollEvent);
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    ScrollEffectComponent.prototype.onScroll = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var scrollY = window.scrollY;
        // OUT OF BOUND -> HIDE ALL
        if (scrollY > SCROLL_BOUND) {
            this.showTemplates = false;
            // IN BOUND -> ANIMATE TITLE
        }
        else {
            this.showTemplates = true;
            this.isChild = true;
            if (this.titleElem) {
                /** @type {?} */
                var factor = (MAX_TITLE_Y_POSITION - MIN_TITLE_Y_POSITION) / SCROLL_BOUND;
                /** @type {?} */
                var newYPosition = factor * scrollY + MIN_TITLE_Y_POSITION;
                /** @type {?} */
                var newOpacity = 1 - (1 / SCROLL_BOUND) * scrollY;
                this.titleElem.nativeElement.style.transform = "translate(-50%, " + -newYPosition + "%)";
                this.titleElem.nativeElement.style.opacity = newOpacity.toString();
            }
        }
        this.cd.detectChanges();
    };
    ScrollEffectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'scroll-effect',
                    template: "<div\r\n  #titleElem\r\n  class=\"scroll-effect__title\"\r\n  [style.opacity]=\"showTemplates ? '1' : '0'\"\r\n>\r\n  <ng-container *ngTemplateOutlet=\"titleDirective.tmpRef\"></ng-container>\r\n</div>\r\n\r\n<div\r\n  #backdropElem\r\n  [@fadeInOut]=\"isChild\"\r\n  *ngIf=\"showTemplates\"\r\n  class=\"scroll-effect__backdrop\"\r\n>\r\n  <ng-container *ngTemplateOutlet=\"backDropDirective.tmpRef\"></ng-container>\r\n</div>\r\n\r\n<div [@opacity]=\"showTemplates\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    animations: [fadeInOutAnim('1s'), opacity('500ms')],
                    host: {
                        class: 'scroll-effect__container'
                    },
                    styles: [".scroll-effect__container{display:block}.scroll-effect__title{z-index:6;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff}.scroll-effect__backdrop{background:#111;z-index:5;position:fixed;width:100vw;height:100vh;top:0;left:0}"]
                }] }
    ];
    /** @nocollapse */
    ScrollEffectComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: ActivatedRoute }
    ]; };
    ScrollEffectComponent.propDecorators = {
        titleDirective: [{ type: ContentChild, args: [ScrollTitleDirective,] }],
        backDropDirective: [{ type: ContentChild, args: [ScrollBackdropDirective,] }],
        titleElem: [{ type: ViewChild, args: ['titleElem',] }],
        backdropElem: [{ type: ViewChild, args: ['backdropElem',] }]
    };
    return ScrollEffectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollEffectModule = /** @class */ (function () {
    function ScrollEffectModule() {
    }
    ScrollEffectModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ScrollEffectComponent,
                        ScrollTitleDirective,
                        ScrollBackdropDirective
                    ],
                    imports: [
                        CommonModule,
                        BrowserAnimationsModule
                    ],
                    exports: [
                        ScrollEffectComponent,
                        ScrollTitleDirective,
                        ScrollBackdropDirective
                    ]
                },] }
    ];
    return ScrollEffectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ScrollEffectService, ScrollEffectComponent, ScrollEffectModule, fadeInOutAnim as ɵa, opacity as ɵb, ScrollBackdropDirective as ɵd, ScrollTitleDirective as ɵc };

//# sourceMappingURL=scroll-effect.js.map
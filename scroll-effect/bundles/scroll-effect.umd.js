(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('@angular/animations'), require('@angular/core'), require('@angular/common'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('scroll-effect', ['exports', '@angular/router', '@angular/animations', '@angular/core', '@angular/common', '@angular/platform-browser/animations'], factory) :
    (factory((global['scroll-effect'] = {}),global.ng.router,global.ng.animations,global.ng.core,global.ng.common,global.ng.platformBrowser.animations));
}(this, (function (exports,router,animations,i0,common,animations$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScrollEffectService = /** @class */ (function () {
        function ScrollEffectService() {
        }
        ScrollEffectService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ScrollEffectService.ctorParameters = function () { return []; };
        /** @nocollapse */ ScrollEffectService.ngInjectableDef = i0.defineInjectable({ factory: function ScrollEffectService_Factory() { return new ScrollEffectService(); }, token: ScrollEffectService, providedIn: "root" });
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
            { type: i0.Directive, args: [{
                        selector: '[scrollBackdrop]',
                    },] }
        ];
        /** @nocollapse */
        ScrollBackdropDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
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
            { type: i0.Directive, args: [{
                        selector: '[scrollTitle]',
                    },] }
        ];
        /** @nocollapse */
        ScrollTitleDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
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
        if (duration === void 0) {
            duration = '200ms';
        }
        return animations.trigger('fadeInOut', [
            animations.transition('void => true', [
                animations.style({ opacity: 0 }),
                animations.animate(duration + " ease", animations.style({ opacity: 1 }))
            ]),
            animations.transition(':leave', [
                animations.style({ opacity: 1 }),
                animations.animate(duration + " ease", animations.style({ opacity: 0 }))
            ])
        ]);
    }
    /**
     * @param {?=} duration
     * @return {?}
     */
    function opacity(duration) {
        if (duration === void 0) {
            duration = '200ms';
        }
        return animations.trigger('opacity', [
            animations.state('false', animations.style({ opacity: 1 })),
            animations.state('true', animations.style({ opacity: 0 })),
            animations.transition('false => true', animations.animate(duration + " cubic-bezier(.22,.68,.43,1.01)")),
            animations.transition('true => false', animations.animate(duration + " cubic-bezier(.56,.07,.78,.57)"))
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
            { type: i0.Component, args: [{
                        selector: 'scroll-effect',
                        template: "<div\r\n  #titleElem\r\n  class=\"scroll-effect__title\"\r\n  [style.opacity]=\"showTemplates ? '1' : '0'\"\r\n>\r\n  <ng-container *ngTemplateOutlet=\"titleDirective.tmpRef\"></ng-container>\r\n</div>\r\n\r\n<div\r\n  #backdropElem\r\n  [@fadeInOut]=\"isChild\"\r\n  *ngIf=\"showTemplates\"\r\n  class=\"scroll-effect__backdrop\"\r\n>\r\n  <ng-container *ngTemplateOutlet=\"backDropDirective.tmpRef\"></ng-container>\r\n</div>\r\n\r\n<div [@opacity]=\"showTemplates\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        animations: [fadeInOutAnim('1s'), opacity('500ms')],
                        host: {
                            class: 'scroll-effect__container'
                        },
                        styles: [".scroll-effect__container{display:block}.scroll-effect__title{z-index:6;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff}.scroll-effect__backdrop{background:#111;z-index:5;position:fixed;width:100vw;height:100vh;top:0;left:0}"]
                    }] }
        ];
        /** @nocollapse */
        ScrollEffectComponent.ctorParameters = function () {
            return [
                { type: i0.NgZone },
                { type: i0.ChangeDetectorRef },
                { type: router.ActivatedRoute }
            ];
        };
        ScrollEffectComponent.propDecorators = {
            titleDirective: [{ type: i0.ContentChild, args: [ScrollTitleDirective,] }],
            backDropDirective: [{ type: i0.ContentChild, args: [ScrollBackdropDirective,] }],
            titleElem: [{ type: i0.ViewChild, args: ['titleElem',] }],
            backdropElem: [{ type: i0.ViewChild, args: ['backdropElem',] }]
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
            { type: i0.NgModule, args: [{
                        declarations: [
                            ScrollEffectComponent,
                            ScrollTitleDirective,
                            ScrollBackdropDirective
                        ],
                        imports: [
                            common.CommonModule,
                            animations$1.BrowserAnimationsModule
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

    exports.ScrollEffectService = ScrollEffectService;
    exports.ScrollEffectComponent = ScrollEffectComponent;
    exports.ScrollEffectModule = ScrollEffectModule;
    exports.ɵa = fadeInOutAnim;
    exports.ɵb = opacity;
    exports.ɵd = ScrollBackdropDirective;
    exports.ɵc = ScrollTitleDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=scroll-effect.umd.js.map
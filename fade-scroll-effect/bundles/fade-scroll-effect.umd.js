(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('fade-scroll-effect', ['exports', 'rxjs', '@angular/common', '@angular/core'], factory) :
    (factory((global['fade-scroll-effect'] = {}),global.rxjs,global.ng.common,global.ng.core));
}(this, (function (exports,rxjs,common,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FadeScrollEffectService = /** @class */ (function () {
        function FadeScrollEffectService() {
            this.scrollPos = new rxjs.Subject();
        }
        FadeScrollEffectService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FadeScrollEffectService.ctorParameters = function () { return []; };
        /** @nocollapse */ FadeScrollEffectService.ngInjectableDef = i0.defineInjectable({ factory: function FadeScrollEffectService_Factory() { return new FadeScrollEffectService(); }, token: FadeScrollEffectService, providedIn: "root" });
        return FadeScrollEffectService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:component-selector
    // tslint:disable:use-host-property-decorator
    var FadeScrollWrapperComponent = /** @class */ (function () {
        function FadeScrollWrapperComponent(zone, fadeScrollService) {
            this.zone = zone;
            this.fadeScrollService = fadeScrollService;
            this.bindScrollEvent = this.onScroll.bind(this);
        }
        /**
         * @return {?}
         */
        FadeScrollWrapperComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        FadeScrollWrapperComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.zone.runOutsideAngular(this.initScrollListener.bind(this));
            };
        /**
         * @private
         * @return {?}
         */
        FadeScrollWrapperComponent.prototype.initScrollListener = /**
         * @private
         * @return {?}
         */
            function () {
                window.addEventListener('scroll', this.bindScrollEvent);
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        FadeScrollWrapperComponent.prototype.onScroll = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                /** @type {?} */
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                /** @type {?} */
                var scrollBot = scrollTop + window.innerHeight;
                this.fadeScrollService.scrollPos.next([scrollTop, scrollBot]);
            };
        FadeScrollWrapperComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fade-scroll-wrapper',
                        template: "<ng-content></ng-content>\r\n",
                        // changeDetection: ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            class: 'fade-scroll__wrapper'
                        },
                        styles: [".fade-scroll__item:nth-child(3n+1){transition:.6s cubic-bezier(.215,.61,.355,1) .1s}.fade-scroll__item:nth-child(3n+2){transition:.6s cubic-bezier(.215,.61,.355,1) .2s}.fade-scroll__item:nth-child(3n+3){transition:.6s cubic-bezier(.215,.61,.355,1) .3s}.fade-scroll__content{transition:.15s linear}"]
                    }] }
        ];
        /** @nocollapse */
        FadeScrollWrapperComponent.ctorParameters = function () {
            return [
                { type: i0.NgZone },
                { type: FadeScrollEffectService }
            ];
        };
        return FadeScrollWrapperComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:component-selector
    // tslint:disable:use-host-property-decorator
    var FadeScrollItemComponent = /** @class */ (function () {
        function FadeScrollItemComponent(elem, fadeScrollService) {
            this.elem = elem;
            this.fadeScrollService = fadeScrollService;
            this.card = this.elem.nativeElement;
        }
        /**
         * @return {?}
         */
        FadeScrollItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.fadeScrollService.scrollPos.subscribe(( /**
                 * @param {?} val
                 * @return {?}
                 */function (val) {
                    /** @type {?} */
                    var posCardTop = _this.offset(_this.elem.nativeElement);
                    /** @type {?} */
                    var posCardBot = _this.card.offsetHeight + posCardTop;
                    if (val[0] <= posCardBot && val[1] >= posCardTop) {
                        _this.elem.nativeElement.style.transform = "translateY(0px)";
                        _this.card.style.opacity = "1";
                    }
                    else if (val[0] <= posCardBot) {
                        _this.card.style.transform = "translateY(20vh)";
                        _this.card.style.opacity = "0";
                    }
                    else if (val[1] >= posCardTop) {
                        _this.card.style.transform = "translateY(-20vh)";
                        _this.card.style.opacity = "0";
                    }
                }));
            };
        /**
         * @private
         * @param {?} elem
         * @return {?}
         */
        FadeScrollItemComponent.prototype.offset = /**
         * @private
         * @param {?} elem
         * @return {?}
         */
            function (elem) {
                /** @type {?} */
                var result = 0;
                while (elem.offsetParent) {
                    result += elem.offsetTop;
                    elem = elem.offsetParent;
                }
                return result;
            };
        FadeScrollItemComponent.decorators = [
            { type: i0.Component, args: [{
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
        FadeScrollItemComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FadeScrollEffectService }
            ];
        };
        return FadeScrollItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FadeScrollEffectModule = /** @class */ (function () {
        function FadeScrollEffectModule() {
        }
        FadeScrollEffectModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [FadeScrollWrapperComponent, FadeScrollItemComponent],
                        imports: [common.CommonModule],
                        exports: [FadeScrollWrapperComponent, FadeScrollItemComponent]
                    },] }
        ];
        return FadeScrollEffectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.FadeScrollEffectService = FadeScrollEffectService;
    exports.FadeScrollWrapperComponent = FadeScrollWrapperComponent;
    exports.FadeScrollEffectModule = FadeScrollEffectModule;
    exports.ɵa = FadeScrollItemComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=fade-scroll-effect.umd.js.map
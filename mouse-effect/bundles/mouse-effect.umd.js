(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('gsap'), require('vanilla-tilt'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('mouse-effect', ['exports', 'gsap', 'vanilla-tilt', '@angular/core', '@angular/common'], factory) :
    (factory((global['mouse-effect'] = {}),global.gsap,null,global.ng.core,global.ng.common));
}(this, (function (exports,gsap,vanillaTilt,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MouseEffectService = /** @class */ (function () {
        function MouseEffectService() {
        }
        MouseEffectService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MouseEffectService.ctorParameters = function () { return []; };
        /** @nocollapse */ MouseEffectService.ngInjectableDef = i0.defineInjectable({ factory: function MouseEffectService_Factory() { return new MouseEffectService(); }, token: MouseEffectService, providedIn: "root" });
        return MouseEffectService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:directive-selector
    var ImageMouseEffectDirective = /** @class */ (function () {
        function ImageMouseEffectDirective(tmpRef) {
            this.tmpRef = tmpRef;
        }
        ImageMouseEffectDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[imageMouseEffect]'
                    },] }
        ];
        /** @nocollapse */
        ImageMouseEffectDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return ImageMouseEffectDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var movementSpeed = 80;
    var MouseMoveEffectComponent = /** @class */ (function () {
        function MouseMoveEffectComponent(zone, elemRef) {
            this.zone = zone;
            this.elemRef = elemRef;
            this.isMenuOpen = false;
            this.bindMouseEvent = this.mouseMoveFunction.bind(this);
        }
        /**
         * @return {?}
         */
        MouseMoveEffectComponent.prototype.onResize = /**
         * @return {?}
         */
            function () {
                if (!this.isMenuOpen) {
                    if (window.innerWidth > 1024) {
                        this.addEffect();
                    }
                    else {
                        this.deleteEffect();
                    }
                }
            };
        /**
         * @return {?}
         */
        MouseMoveEffectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.addEffect();
            };
        /**
         * @return {?}
         */
        MouseMoveEffectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.deleteEffect();
            };
        /**
         * @return {?}
         */
        MouseMoveEffectComponent.prototype.addEffect = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (window.innerWidth > 1024) {
                    this.zone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        return _this.elemRef.nativeElement.addEventListener('mousemove', _this.bindMouseEvent);
                    }));
                }
            };
        /**
         * @return {?}
         */
        MouseMoveEffectComponent.prototype.deleteEffect = /**
         * @return {?}
         */
            function () {
                var _this = this;
                gsap.TweenLite.to(this.mouseWrapper.nativeElement, 0.2, { x: 0, y: 0 });
                this.zone.runOutsideAngular(( /**
                 * @return {?}
                 */function () {
                    return _this.elemRef.nativeElement.removeEventListener('mousemove', _this.bindMouseEvent);
                }));
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MouseMoveEffectComponent.prototype.mouseMoveFunction = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var posX = event.pageX - this.elemRef.nativeElement.offsetLeft;
                /** @type {?} */
                var posY = event.pageY - this.elemRef.nativeElement.offsetTop;
                /** @type {?} */
                var mouseX = posX - this.elemRef.nativeElement.offsetWidth / 2;
                /** @type {?} */
                var mouseY = posY - this.elemRef.nativeElement.offsetHeight / 2;
                /** @type {?} */
                var mouseXPercent = -(mouseX / this.elemRef.nativeElement.offsetWidth) * movementSpeed;
                /** @type {?} */
                var mouseYPercent = -(mouseY / this.elemRef.nativeElement.offsetHeight) * movementSpeed;
                gsap.TweenLite.to(this.mouseWrapper.nativeElement, 1, {
                    x: mouseXPercent,
                    y: mouseYPercent
                });
            };
        MouseMoveEffectComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mouse-move-effect',
                        template: "<div class=\"mouse-effect__wrapper\" #mouseWrapper>\r\n\r\n  <div class=\"mouse-effect__image\">\r\n    <ng-container *ngTemplateOutlet=\"imageDirective.tmpRef\"></ng-container>\r\n  </div>\r\n\r\n</div>\r\n",
                        encapsulation: i0.ViewEncapsulation.None,
                        animations: [],
                        host: {
                            class: 'mouse-effect__container'
                        },
                        styles: [".mouse-effect__container{display:block}.mouse-effect__wrapper{width:100%;height:100%}.mouse-effect__image{width:100%;height:100%;-webkit-transform:scale(1.1);transform:scale(1.1)}"]
                    }] }
        ];
        /** @nocollapse */
        MouseMoveEffectComponent.ctorParameters = function () {
            return [
                { type: i0.NgZone },
                { type: i0.ElementRef }
            ];
        };
        MouseMoveEffectComponent.propDecorators = {
            imageDirective: [{ type: i0.ContentChild, args: [ImageMouseEffectDirective,] }],
            mouseWrapper: [{ type: i0.ViewChild, args: ['mouseWrapper',] }],
            onResize: [{ type: i0.HostListener, args: ['window:resize',] }]
        };
        return MouseMoveEffectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MouseRotateEffectDirective = /** @class */ (function () {
        function MouseRotateEffectDirective(elemRef) {
            this.elemRef = elemRef;
        }
        /**
         * @return {?}
         */
        MouseRotateEffectDirective.prototype.onResize = /**
         * @return {?}
         */
            function () {
                if (window.innerWidth > 1024) {
                    this.addVanilla();
                }
                else {
                    if (this.elemRef.nativeElement.vanillaTilt) {
                        this.removeVanilla();
                    }
                }
            };
        /**
         * @return {?}
         */
        MouseRotateEffectDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (window.innerWidth > 1024) {
                    this.addVanilla();
                }
            };
        /**
         * @return {?}
         */
        MouseRotateEffectDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.elemRef.nativeElement.vanillaTilt) {
                    this.removeVanilla();
                }
            };
        /**
         * @return {?}
         */
        MouseRotateEffectDirective.prototype.addVanilla = /**
         * @return {?}
         */
            function () {
                VanillaTilt.init(this.elemRef.nativeElement, {
                    max: 3,
                    perspective: 1000,
                    reverse: true,
                    speed: 400,
                    easing: 'cubic-bezier(.19,.48,.53,.96)'
                });
            };
        /**
         * @return {?}
         */
        MouseRotateEffectDirective.prototype.removeVanilla = /**
         * @return {?}
         */
            function () {
                this.elemRef.nativeElement.vanillaTilt.destroy();
            };
        MouseRotateEffectDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[MouseRotateEffect]'
                    },] }
        ];
        /** @nocollapse */
        MouseRotateEffectDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        MouseRotateEffectDirective.propDecorators = {
            onResize: [{ type: i0.HostListener, args: ['window:resize',] }]
        };
        return MouseRotateEffectDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MouseEffectModule = /** @class */ (function () {
        function MouseEffectModule() {
        }
        MouseEffectModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            MouseMoveEffectComponent,
                            MouseRotateEffectDirective,
                            ImageMouseEffectDirective
                        ],
                        imports: [common.CommonModule],
                        exports: [
                            MouseMoveEffectComponent,
                            MouseRotateEffectDirective,
                            ImageMouseEffectDirective
                        ]
                    },] }
        ];
        return MouseEffectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.MouseEffectService = MouseEffectService;
    exports.MouseMoveEffectComponent = MouseMoveEffectComponent;
    exports.MouseEffectModule = MouseEffectModule;
    exports.ɵa = ImageMouseEffectDirective;
    exports.ɵb = MouseRotateEffectDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mouse-effect.umd.js.map
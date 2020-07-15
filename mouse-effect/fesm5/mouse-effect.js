import { TweenLite } from 'gsap';
import 'vanilla-tilt';
import { Injectable, Directive, TemplateRef, ElementRef, HostListener, defineInjectable, NgModule, Component, ViewEncapsulation, NgZone, ContentChild, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MouseEffectService = /** @class */ (function () {
    function MouseEffectService() {
    }
    MouseEffectService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MouseEffectService.ctorParameters = function () { return []; };
    /** @nocollapse */ MouseEffectService.ngInjectableDef = defineInjectable({ factory: function MouseEffectService_Factory() { return new MouseEffectService(); }, token: MouseEffectService, providedIn: "root" });
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
        { type: Directive, args: [{
                    selector: '[imageMouseEffect]'
                },] }
    ];
    /** @nocollapse */
    ImageMouseEffectDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
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
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
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
        TweenLite.to(this.mouseWrapper.nativeElement, 0.2, { x: 0, y: 0 });
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
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
        TweenLite.to(this.mouseWrapper.nativeElement, 1, {
            x: mouseXPercent,
            y: mouseYPercent
        });
    };
    MouseMoveEffectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mouse-move-effect',
                    template: "<div class=\"mouse-effect__wrapper\" #mouseWrapper>\r\n\r\n  <div class=\"mouse-effect__image\">\r\n    <ng-container *ngTemplateOutlet=\"imageDirective.tmpRef\"></ng-container>\r\n  </div>\r\n\r\n</div>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    animations: [],
                    host: {
                        class: 'mouse-effect__container'
                    },
                    styles: [".mouse-effect__container{display:block}.mouse-effect__wrapper{width:100%;height:100%}.mouse-effect__image{width:100%;height:100%;-webkit-transform:scale(1.1);transform:scale(1.1)}"]
                }] }
    ];
    /** @nocollapse */
    MouseMoveEffectComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef }
    ]; };
    MouseMoveEffectComponent.propDecorators = {
        imageDirective: [{ type: ContentChild, args: [ImageMouseEffectDirective,] }],
        mouseWrapper: [{ type: ViewChild, args: ['mouseWrapper',] }],
        onResize: [{ type: HostListener, args: ['window:resize',] }]
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
        { type: Directive, args: [{
                    selector: '[MouseRotateEffect]'
                },] }
    ];
    /** @nocollapse */
    MouseRotateEffectDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MouseRotateEffectDirective.propDecorators = {
        onResize: [{ type: HostListener, args: ['window:resize',] }]
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
        { type: NgModule, args: [{
                    declarations: [
                        MouseMoveEffectComponent,
                        MouseRotateEffectDirective,
                        ImageMouseEffectDirective
                    ],
                    imports: [CommonModule],
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

export { MouseEffectService, MouseMoveEffectComponent, MouseEffectModule, ImageMouseEffectDirective as ɵa, MouseRotateEffectDirective as ɵb };

//# sourceMappingURL=mouse-effect.js.map
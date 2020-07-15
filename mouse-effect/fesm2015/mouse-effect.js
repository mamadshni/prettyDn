import { TweenLite } from 'gsap';
import 'vanilla-tilt';
import { Injectable, Directive, TemplateRef, ElementRef, HostListener, NgModule, defineInjectable, Component, ViewEncapsulation, NgZone, ContentChild, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MouseEffectService {
    constructor() { }
}
MouseEffectService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MouseEffectService.ctorParameters = () => [];
/** @nocollapse */ MouseEffectService.ngInjectableDef = defineInjectable({ factory: function MouseEffectService_Factory() { return new MouseEffectService(); }, token: MouseEffectService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:directive-selector
class ImageMouseEffectDirective {
    /**
     * @param {?} tmpRef
     */
    constructor(tmpRef) {
        this.tmpRef = tmpRef;
    }
}
ImageMouseEffectDirective.decorators = [
    { type: Directive, args: [{
                selector: '[imageMouseEffect]'
            },] }
];
/** @nocollapse */
ImageMouseEffectDirective.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const movementSpeed = 80;
class MouseMoveEffectComponent {
    /**
     * @param {?} zone
     * @param {?} elemRef
     */
    constructor(zone, elemRef) {
        this.zone = zone;
        this.elemRef = elemRef;
        this.isMenuOpen = false;
        this.bindMouseEvent = this.mouseMoveFunction.bind(this);
    }
    /**
     * @return {?}
     */
    onResize() {
        if (!this.isMenuOpen) {
            if (window.innerWidth > 1024) {
                this.addEffect();
            }
            else {
                this.deleteEffect();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.addEffect();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.deleteEffect();
    }
    /**
     * @return {?}
     */
    addEffect() {
        if (window.innerWidth > 1024) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => this.elemRef.nativeElement.addEventListener('mousemove', this.bindMouseEvent)));
        }
    }
    /**
     * @return {?}
     */
    deleteEffect() {
        TweenLite.to(this.mouseWrapper.nativeElement, 0.2, { x: 0, y: 0 });
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.elemRef.nativeElement.removeEventListener('mousemove', this.bindMouseEvent)));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    mouseMoveFunction(event) {
        /** @type {?} */
        const posX = event.pageX - this.elemRef.nativeElement.offsetLeft;
        /** @type {?} */
        const posY = event.pageY - this.elemRef.nativeElement.offsetTop;
        /** @type {?} */
        const mouseX = posX - this.elemRef.nativeElement.offsetWidth / 2;
        /** @type {?} */
        const mouseY = posY - this.elemRef.nativeElement.offsetHeight / 2;
        /** @type {?} */
        const mouseXPercent = -(mouseX / this.elemRef.nativeElement.offsetWidth) * movementSpeed;
        /** @type {?} */
        const mouseYPercent = -(mouseY / this.elemRef.nativeElement.offsetHeight) * movementSpeed;
        TweenLite.to(this.mouseWrapper.nativeElement, 1, {
            x: mouseXPercent,
            y: mouseYPercent
        });
    }
}
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
MouseMoveEffectComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef }
];
MouseMoveEffectComponent.propDecorators = {
    imageDirective: [{ type: ContentChild, args: [ImageMouseEffectDirective,] }],
    mouseWrapper: [{ type: ViewChild, args: ['mouseWrapper',] }],
    onResize: [{ type: HostListener, args: ['window:resize',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MouseRotateEffectDirective {
    /**
     * @param {?} elemRef
     */
    constructor(elemRef) {
        this.elemRef = elemRef;
    }
    /**
     * @return {?}
     */
    onResize() {
        if (window.innerWidth > 1024) {
            this.addVanilla();
        }
        else {
            if (this.elemRef.nativeElement.vanillaTilt) {
                this.removeVanilla();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (window.innerWidth > 1024) {
            this.addVanilla();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.elemRef.nativeElement.vanillaTilt) {
            this.removeVanilla();
        }
    }
    /**
     * @return {?}
     */
    addVanilla() {
        VanillaTilt.init(this.elemRef.nativeElement, {
            max: 3,
            perspective: 1000,
            reverse: true,
            speed: 400,
            easing: 'cubic-bezier(.19,.48,.53,.96)'
        });
    }
    /**
     * @return {?}
     */
    removeVanilla() {
        this.elemRef.nativeElement.vanillaTilt.destroy();
    }
}
MouseRotateEffectDirective.decorators = [
    { type: Directive, args: [{
                selector: '[MouseRotateEffect]'
            },] }
];
/** @nocollapse */
MouseRotateEffectDirective.ctorParameters = () => [
    { type: ElementRef }
];
MouseRotateEffectDirective.propDecorators = {
    onResize: [{ type: HostListener, args: ['window:resize',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MouseEffectModule {
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
import { Injectable, Directive, ElementRef, defineInjectable, NgModule, Component, ViewEncapsulation, Renderer2, Attribute } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HoveringService {
    constructor() { }
}
HoveringService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HoveringService.ctorParameters = () => [];
/** @nocollapse */ HoveringService.ngInjectableDef = defineInjectable({ factory: function HoveringService_Factory() { return new HoveringService(); }, token: HoveringService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const HoveringLineFrom = {
    'top-left': 0,
    'left-top': 1,
    'top-right': 2,
    'right-top': 3,
    'bottom-left': 4,
    'left-bottom': 5,
    'bottom-right': 6,
    'right-bottom': 7,
};
HoveringLineFrom[HoveringLineFrom['top-left']] = 'top-left';
HoveringLineFrom[HoveringLineFrom['left-top']] = 'left-top';
HoveringLineFrom[HoveringLineFrom['top-right']] = 'top-right';
HoveringLineFrom[HoveringLineFrom['right-top']] = 'right-top';
HoveringLineFrom[HoveringLineFrom['bottom-left']] = 'bottom-left';
HoveringLineFrom[HoveringLineFrom['left-bottom']] = 'left-bottom';
HoveringLineFrom[HoveringLineFrom['bottom-right']] = 'bottom-right';
HoveringLineFrom[HoveringLineFrom['right-bottom']] = 'right-bottom';
/** @enum {number} */
const HoveringTextPos = {
    'top': 0,
    'left': 1,
    'right': 2,
    'bottom': 3,
};
HoveringTextPos[HoveringTextPos['top']] = 'top';
HoveringTextPos[HoveringTextPos['left']] = 'left';
HoveringTextPos[HoveringTextPos['right']] = 'right';
HoveringTextPos[HoveringTextPos['bottom']] = 'bottom';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PREFIX = 'hovering';
/** @type {?} */
const LIB_PREFIX = `lib-${PREFIX}`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator
class HoveringCircleComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} lineFrom
     * @param {?} textPose
     */
    constructor(el, renderer, lineFrom, textPose) {
        this.el = el;
        this.renderer = renderer;
        this.lineFrom = lineFrom;
        this.textPose = textPose;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.lineFrom) {
            if (HoveringLineFrom[this.lineFrom] != null) {
                this.renderer.addClass(this.el.nativeElement, `line-${this.lineFrom}`);
            }
            else {
                console.error('Wrong Value For "From" Attribute in "Hovering Component"');
            }
        }
        if (this.textPose) {
            if (HoveringTextPos[this.textPose] != null) {
                this.renderer.addClass(this.el.nativeElement, `text-${this.textPose}`);
            }
            else {
                console.error('Wrong Value For "textPose" Attribute in "Hovering Component"');
            }
        }
    }
}
HoveringCircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'hovering-circle',
                template: "<div class=\"lib-hovering-circle-svg__wrapper\">\n\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80 80\" xml:space=\"preserve\">\n    <circle class=\"lib-hovering-circle-svg__inner\" cx=\"50%\" cy=\"50%\" r=\"47.5%\"></circle>\n    <circle class=\"lib-hovering-circle-svg__outer\" cx=\"50%\" cy=\"50%\" r=\"47.5%\"></circle>\n  </svg>\n\n  <ng-content select=\"[hIcon] , [h-icon]\"></ng-content>\n\n  <div class=\"lib-hovering-circle__line\">\n    <div class=\"lib-hovering-circle__line-in\"></div>\n  </div>\n\n  <div class=\"lib-hovering-circle__text\">\n    <ng-content select=\"[hText] , [h-text] , h-text, hText\"></ng-content>\n  </div>\n\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: `${LIB_PREFIX}-circle`
                },
                styles: [".lib-hovering-circle{position:absolute;box-sizing:border-box;padding:10px;width:60px;height:60px;font-size:1.3em}.lib-hovering-circle-svg__wrapper{position:relative;height:100%;width:100%;margin-top:0;pointer-events:initial;cursor:pointer;box-sizing:border-box}.lib-hovering-circle-svg__inner{fill:transparent;stroke:#000;stroke-width:5%;opacity:1;stroke-dashoffset:0;stroke-dasharray:360,1000}.lib-hovering-circle-svg__outer{fill:transparent;stroke:#000;stroke-width:5%;stroke-dasharray:239;stroke-dashoffset:239;-webkit-transform-origin:50%;transform-origin:50%;-webkit-transform:rotateX(180deg) rotateZ(270deg);transform:rotateX(180deg) rotateZ(270deg)}.lib-hovering-circle__line{width:100%;height:5%;position:absolute;bottom:0;right:50%;-webkit-transform-origin:100% -900%;transform-origin:100% -900%}.lib-hovering-circle__line-in{background-color:#000;width:0%;height:100%;position:relative}.lib-hovering-circle__text{width:10px;height:10px;color:#000;font-weight:600;font-size:.65em;text-align:left;white-space:nowrap;margin:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.lib-hovering-circle:hover .lib-hovering-circle-svg__inner{opacity:.2;transition:.3s}.lib-hovering-circle:hover .lib-hovering-circle-svg__outer{transition:stroke-dashoffset .3s ease-out .2s;stroke-dashoffset:0}.lib-hovering-circle:hover .lib-hovering-circle__line-in{-webkit-animation:.2s ease-in .1s lib-hoveringLine;animation:.2s ease-in .1s lib-hoveringLine}.lib-hovering-circle:hover .lib-hovering-icon{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);transition:.2s ease-out .3s}.lib-hovering-circle:hover .lib-hovering-text{transition:.3s ease-out .28s;opacity:1;right:2.5em;visibility:visible}.lib-hovering-icon{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) scale(.5);transform:translate(-50%,-50%) scale(.5);opacity:0;font-size:1em;transition:.2s ease-in-out}.lib-hovering-text{position:absolute;right:4em;top:50%;opacity:0;visibility:hidden;transition:.2s ease-in-out;margin:0;-webkit-transform:translate(0,-50%);transform:translate(0,-50%)}.line-top-left .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(180deg) rotateZ(180deg);transform:rotateX(180deg) rotateZ(180deg)}.line-top-left .lib-hovering-circle__line{-webkit-transform:rotateY(0) rotateZ(90deg);transform:rotateY(0) rotateZ(90deg)}.line-left-top .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(0) rotateZ(270deg);transform:rotateX(0) rotateZ(270deg)}.line-left-top .lib-hovering-circle__line{-webkit-transform:rotateZ(180deg) rotateY(180deg);transform:rotateZ(180deg) rotateY(180deg)}.line-right-top .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(180deg) rotateZ(90deg);transform:rotateX(180deg) rotateZ(90deg)}.line-right-top .lib-hovering-circle__line{-webkit-transform:rotateZ(180deg) rotateY(0);transform:rotateZ(180deg) rotateY(0)}.line-top-right .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(0) rotateZ(0);transform:rotateX(0) rotateZ(0)}.line-top-right .lib-hovering-circle__line{-webkit-transform:rotateZ(270deg) rotateY(180deg);transform:rotateZ(270deg) rotateY(180deg)}.line-bottom-right .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(180deg) rotateZ(0);transform:rotateX(180deg) rotateZ(0)}.line-bottom-right .lib-hovering-circle__line{-webkit-transform:rotateZ(270deg) rotateY(0);transform:rotateZ(270deg) rotateY(0)}.line-right-bottom .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(0) rotateZ(90deg);transform:rotateX(0) rotateZ(90deg)}.line-right-bottom .lib-hovering-circle__line{-webkit-transform:rotateZ(0) rotateY(180deg);transform:rotateZ(0) rotateY(180deg)}.line-left-bottom .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(180deg) rotateZ(270deg);transform:rotateX(180deg) rotateZ(270deg)}.line-left-bottom .lib-hovering-circle__line{-webkit-transform:rotateZ(0);transform:rotateZ(0)}.line-bottom-left .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(0) rotateZ(180deg);transform:rotateX(0) rotateZ(180deg)}.line-bottom-left .lib-hovering-circle__line{-webkit-transform:rotateZ(90deg) rotateY(180deg);transform:rotateZ(90deg) rotateY(180deg)}.text-top .lib-hovering-circle__text{-webkit-transform:translate(-50%,-50%) rotateZ(90deg);transform:translate(-50%,-50%) rotateZ(90deg)}.text-top .lib-hovering-text{-webkit-transform:translate(0,-50%) rotateZ(0);transform:translate(0,-50%) rotateZ(0)}.text-right .lib-hovering-circle__text{-webkit-transform:translate(-50%,-50%) rotateZ(180deg);transform:translate(-50%,-50%) rotateZ(180deg)}.text-right .lib-hovering-text{-webkit-transform:translate(0,-50%) rotateZ(180deg);transform:translate(0,-50%) rotateZ(180deg)}.text-bottom .lib-hovering-circle__text{-webkit-transform:translate(-50%,-50%) rotateZ(270deg);transform:translate(-50%,-50%) rotateZ(270deg)}.text-bottom .lib-hovering-text{-webkit-transform:translate(0,-50%) rotateZ(180deg);transform:translate(0,-50%) rotateZ(180deg)}.text-left .lib-hovering-circle__text{-webkit-transform:translate(-50%,-50%) rotateZ(0);transform:translate(-50%,-50%) rotateZ(0)}.text-left .lib-hovering-text{-webkit-transform:translate(0,-50%) rotateZ(0);transform:translate(0,-50%) rotateZ(0)}@-webkit-keyframes lib-hoveringLine{0%{left:-100%;width:0%}50%{left:20%;width:85%}100%{left:95%;width:5%}}@keyframes lib-hoveringLine{0%{left:-100%;width:0%}50%{left:20%;width:85%}100%{left:95%;width:5%}}"]
            }] }
];
/** @nocollapse */
HoveringCircleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: HoveringLineFrom, decorators: [{ type: Attribute, args: ['from',] }] },
    { type: HoveringTextPos, decorators: [{ type: Attribute, args: ['textPos',] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:directive-selector
class HoveringTextDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.el.nativeElement.classList.add(`${LIB_PREFIX}-text`);
    }
}
HoveringTextDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hText] , [h-text] ,h-text , hText'
            },] }
];
/** @nocollapse */
HoveringTextDirective.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:directive-selector
class HoveringIconDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.el.nativeElement.classList.add(`${LIB_PREFIX}-icon`);
    }
}
HoveringIconDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hIcon] , [h-icon]'
            },] }
];
/** @nocollapse */
HoveringIconDirective.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HoveringModule {
}
HoveringModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HoveringCircleComponent, HoveringIconDirective, HoveringTextDirective],
                imports: [],
                exports: [HoveringCircleComponent, HoveringIconDirective, HoveringTextDirective]
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

export { HoveringService, HoveringCircleComponent, HoveringModule, HoveringIconDirective as ɵd, HoveringTextDirective as ɵe, HoveringLineFrom as ɵb, HoveringTextPos as ɵc, LIB_PREFIX as ɵa };

//# sourceMappingURL=hovering.js.map
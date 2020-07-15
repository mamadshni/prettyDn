import { Subject } from 'rxjs';
import { trigger, state, style, transition, animate, query, stagger, group } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Injectable, Directive, TemplateRef, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, defineInjectable, NgModule, Input, ContentChild } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OverlayMenuEffectService = /** @class */ (function () {
    function OverlayMenuEffectService() {
        this.isMenuOpened = new Subject();
    }
    OverlayMenuEffectService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    OverlayMenuEffectService.ctorParameters = function () { return []; };
    /** @nocollapse */ OverlayMenuEffectService.ngInjectableDef = defineInjectable({ factory: function OverlayMenuEffectService_Factory() { return new OverlayMenuEffectService(); }, token: OverlayMenuEffectService, providedIn: "root" });
    return OverlayMenuEffectService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OverlayMenuDirective = /** @class */ (function () {
    function OverlayMenuDirective(tmpRef) {
        this.tmpRef = tmpRef;
    }
    OverlayMenuDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[overlayMenu]'
                },] }
    ];
    /** @nocollapse */
    OverlayMenuDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return OverlayMenuDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} duration
 * @return {?}
 */
function overlayTextAnimation(duration) {
    if (duration === void 0) { duration = 400; }
    return trigger('overlayTextAnimation', [
        state('in', style({ opacity: 1, transform: 'translateY(0px)' })),
        state('out', style({ opacity: 0, transform: 'translateY(200px)' })),
        state('void', style({ opacity: 0, transform: 'translateY(200px)' })),
        transition('* => in', [
            animate(duration + "ms 450ms cubic-bezier(.22,.68,.43,1.01)")
        ]),
        transition('in => out', [
            animate(duration - 100 + "ms 100ms cubic-bezier(.56,.07,.78,.57)", style({ opacity: 0, transform: 'translateY(-150px)' }))
        ])
    ]);
}
/**
 * @return {?}
 */
function overlayMenuAnimation() {
    return trigger('overlayMenuAnimation', [
        state('true', style({ zIndex: 90 })),
        state('*', style({ zIndex: 0 })),
        transition('false => true', [
            animate('0s 0s', style({ zIndex: 90 })),
            query('[listItems]', style({ opacity: 0, transform: 'translateY(70px)' })),
            query('[overlayMenuShadow]', style({ opacity: 0 })),
            group([
                query('[listItems]', stagger('100ms', [
                    animate('0.3s 300ms cubic-bezier(.22,.68,.43,1.01)', style({ opacity: 1, transform: 'translateY(0px)' }))
                ])),
                query('[overlayMenuShadow]', animate('0.3s 200ms cubic-bezier(.22,.68,.43,1.01)', style({ opacity: 0.6 })))
            ])
        ]),
        transition('true => false', [
            query('[listItems]', style({ opacity: 1 })),
            query('[overlayMenuShadow]', style({ opacity: 0.6 })),
            group([
                query('[listItems]', stagger('50ms', [
                    animate('0.25s 50ms cubic-bezier(.56,.07,.78,.57)', style({ opacity: 0, transform: 'translateY(-80px)' }))
                ])),
                query('[overlayMenuShadow]', animate('0.3s 300ms cubic-bezier(.22,.68,.43,1.01)', style({ opacity: 0 })))
            ])
        ])
    ]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator
// tslint:disable:no-input-rename
var OverlayMenuEffectComponent = /** @class */ (function () {
    function OverlayMenuEffectComponent(overlayMenuEffectService) {
        this.overlayMenuEffectService = overlayMenuEffectService;
    }
    Object.defineProperty(OverlayMenuEffectComponent.prototype, "changeState", {
        set: /**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            this.isOpen = open;
            this.overlayMenuEffectService.isMenuOpened.next(open);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OverlayMenuEffectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    OverlayMenuEffectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    OverlayMenuEffectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'overlay-menu-effect',
                    template: "<div class=overlay-menu__shadow overlayMenuShadow *ngIf=\"isOpen\"></div>\r\n<div class=\"overlay-menu__wrapper\" *ngIf=\"isOpen\">\r\n\r\n  <ng-container *ngTemplateOutlet=\"menuDirective.tmpRef\"></ng-container>\r\n\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    animations: [overlayMenuAnimation()],
                    host: {
                        class: 'overlay-menu__container',
                        '[@overlayMenuAnimation]': 'isOpen'
                    },
                    styles: [".overlay-menu__shadow{width:100%;height:100%;position:absolute;background:#eee;-webkit-filter:blur(20px);filter:blur(20px);opacity:.6}.overlay-menu__container{display:block;position:fixed;top:0;left:0;height:100%;width:100%}.overlay-menu__container.light .overlay-menu__shadow{background:#010101}.overlay-menu__container.light .overlay-menu__wrapper a{color:#eee}.overlay-menu__wrapper{position:relative;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;z-index:50}.overlay-menu__wrapper span{padding:2px 0;cursor:pointer;color:#000;line-height:64px;font-size:54px;font-weight:600;position:relative;font-family:Poppins,sans-serif}.overlay-menu__wrapper span a{color:#101010;text-decoration:none}@media only screen and (max-width:1466px){.overlay-menu__wrapper span{line-height:58px;font-size:48px}}@media only screen and (max-width:479px){.overlay-menu__wrapper span{line-height:46px;font-size:36px}}"]
                }] }
    ];
    /** @nocollapse */
    OverlayMenuEffectComponent.ctorParameters = function () { return [
        { type: OverlayMenuEffectService }
    ]; };
    OverlayMenuEffectComponent.propDecorators = {
        changeState: [{ type: Input, args: ['isOpen',] }],
        menuDirective: [{ type: ContentChild, args: [OverlayMenuDirective,] }]
    };
    return OverlayMenuEffectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:component-selector
var OverlayTextEffectComponent = /** @class */ (function () {
    function OverlayTextEffectComponent(overlayMenuEffectService, cd) {
        this.overlayMenuEffectService = overlayMenuEffectService;
        this.cd = cd;
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    OverlayTextEffectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription = this.overlayMenuEffectService.isMenuOpened.subscribe((/**
         * @param {?} condition
         * @return {?}
         */
        function (condition) {
            _this.isOpen = condition;
            _this.cd.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    OverlayTextEffectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    OverlayTextEffectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'overlay-text-effect',
                    template: "<div [@overlayTextAnimation]=\"isOpen ? 'out' : 'in'\">\n  <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    animations: [overlayTextAnimation()],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    OverlayTextEffectComponent.ctorParameters = function () { return [
        { type: OverlayMenuEffectService },
        { type: ChangeDetectorRef }
    ]; };
    return OverlayTextEffectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OverlayMenuEffectModule = /** @class */ (function () {
    function OverlayMenuEffectModule() {
    }
    OverlayMenuEffectModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        OverlayMenuEffectComponent,
                        OverlayTextEffectComponent,
                        OverlayMenuDirective
                    ],
                    imports: [CommonModule],
                    exports: [
                        OverlayMenuEffectComponent,
                        OverlayTextEffectComponent,
                        OverlayMenuDirective
                    ]
                },] }
    ];
    return OverlayMenuEffectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { OverlayMenuEffectService, OverlayMenuEffectComponent, OverlayMenuEffectModule, OverlayTextEffectComponent as ɵd, OverlayMenuDirective as ɵc, overlayMenuAnimation as ɵb, overlayTextAnimation as ɵa };

//# sourceMappingURL=overlay-menu-effect.js.map
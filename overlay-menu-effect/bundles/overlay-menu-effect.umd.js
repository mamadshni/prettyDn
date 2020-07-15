(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/animations'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('overlay-menu-effect', ['exports', 'rxjs', '@angular/animations', '@angular/common', '@angular/core'], factory) :
    (factory((global['overlay-menu-effect'] = {}),global.rxjs,global.ng.animations,global.ng.common,global.ng.core));
}(this, (function (exports,rxjs,animations,common,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OverlayMenuEffectService = /** @class */ (function () {
        function OverlayMenuEffectService() {
            this.isMenuOpened = new rxjs.Subject();
        }
        OverlayMenuEffectService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        OverlayMenuEffectService.ctorParameters = function () { return []; };
        /** @nocollapse */ OverlayMenuEffectService.ngInjectableDef = i0.defineInjectable({ factory: function OverlayMenuEffectService_Factory() { return new OverlayMenuEffectService(); }, token: OverlayMenuEffectService, providedIn: "root" });
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
            { type: i0.Directive, args: [{
                        selector: '[overlayMenu]'
                    },] }
        ];
        /** @nocollapse */
        OverlayMenuDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
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
        if (duration === void 0) {
            duration = 400;
        }
        return animations.trigger('overlayTextAnimation', [
            animations.state('in', animations.style({ opacity: 1, transform: 'translateY(0px)' })),
            animations.state('out', animations.style({ opacity: 0, transform: 'translateY(200px)' })),
            animations.state('void', animations.style({ opacity: 0, transform: 'translateY(200px)' })),
            animations.transition('* => in', [
                animations.animate(duration + "ms 450ms cubic-bezier(.22,.68,.43,1.01)")
            ]),
            animations.transition('in => out', [
                animations.animate(duration - 100 + "ms 100ms cubic-bezier(.56,.07,.78,.57)", animations.style({ opacity: 0, transform: 'translateY(-150px)' }))
            ])
        ]);
    }
    /**
     * @return {?}
     */
    function overlayMenuAnimation() {
        return animations.trigger('overlayMenuAnimation', [
            animations.state('true', animations.style({ zIndex: 90 })),
            animations.state('*', animations.style({ zIndex: 0 })),
            animations.transition('false => true', [
                animations.animate('0s 0s', animations.style({ zIndex: 90 })),
                animations.query('[listItems]', animations.style({ opacity: 0, transform: 'translateY(70px)' })),
                animations.query('[overlayMenuShadow]', animations.style({ opacity: 0 })),
                animations.group([
                    animations.query('[listItems]', animations.stagger('100ms', [
                        animations.animate('0.3s 300ms cubic-bezier(.22,.68,.43,1.01)', animations.style({ opacity: 1, transform: 'translateY(0px)' }))
                    ])),
                    animations.query('[overlayMenuShadow]', animations.animate('0.3s 200ms cubic-bezier(.22,.68,.43,1.01)', animations.style({ opacity: 0.6 })))
                ])
            ]),
            animations.transition('true => false', [
                animations.query('[listItems]', animations.style({ opacity: 1 })),
                animations.query('[overlayMenuShadow]', animations.style({ opacity: 0.6 })),
                animations.group([
                    animations.query('[listItems]', animations.stagger('50ms', [
                        animations.animate('0.25s 50ms cubic-bezier(.56,.07,.78,.57)', animations.style({ opacity: 0, transform: 'translateY(-80px)' }))
                    ])),
                    animations.query('[overlayMenuShadow]', animations.animate('0.3s 300ms cubic-bezier(.22,.68,.43,1.01)', animations.style({ opacity: 0 })))
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
             */ function (open) {
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
            { type: i0.Component, args: [{
                        selector: 'overlay-menu-effect',
                        template: "<div class=overlay-menu__shadow overlayMenuShadow *ngIf=\"isOpen\"></div>\r\n<div class=\"overlay-menu__wrapper\" *ngIf=\"isOpen\">\r\n\r\n  <ng-container *ngTemplateOutlet=\"menuDirective.tmpRef\"></ng-container>\r\n\r\n</div>\r\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        animations: [overlayMenuAnimation()],
                        host: {
                            class: 'overlay-menu__container',
                            '[@overlayMenuAnimation]': 'isOpen'
                        },
                        styles: [".overlay-menu__shadow{width:100%;height:100%;position:absolute;background:#eee;-webkit-filter:blur(20px);filter:blur(20px);opacity:.6}.overlay-menu__container{display:block;position:fixed;top:0;left:0;height:100%;width:100%}.overlay-menu__container.light .overlay-menu__shadow{background:#010101}.overlay-menu__container.light .overlay-menu__wrapper a{color:#eee}.overlay-menu__wrapper{position:relative;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;z-index:50}.overlay-menu__wrapper span{padding:2px 0;cursor:pointer;color:#000;line-height:64px;font-size:54px;font-weight:600;position:relative;font-family:Poppins,sans-serif}.overlay-menu__wrapper span a{color:#101010;text-decoration:none}@media only screen and (max-width:1466px){.overlay-menu__wrapper span{line-height:58px;font-size:48px}}@media only screen and (max-width:479px){.overlay-menu__wrapper span{line-height:46px;font-size:36px}}"]
                    }] }
        ];
        /** @nocollapse */
        OverlayMenuEffectComponent.ctorParameters = function () {
            return [
                { type: OverlayMenuEffectService }
            ];
        };
        OverlayMenuEffectComponent.propDecorators = {
            changeState: [{ type: i0.Input, args: ['isOpen',] }],
            menuDirective: [{ type: i0.ContentChild, args: [OverlayMenuDirective,] }]
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
                this.subscription = this.overlayMenuEffectService.isMenuOpened.subscribe(( /**
                 * @param {?} condition
                 * @return {?}
                 */function (condition) {
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
            { type: i0.Component, args: [{
                        selector: 'overlay-text-effect',
                        template: "<div [@overlayTextAnimation]=\"isOpen ? 'out' : 'in'\">\n  <ng-content></ng-content>\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        animations: [overlayTextAnimation()],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        OverlayTextEffectComponent.ctorParameters = function () {
            return [
                { type: OverlayMenuEffectService },
                { type: i0.ChangeDetectorRef }
            ];
        };
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
            { type: i0.NgModule, args: [{
                        declarations: [
                            OverlayMenuEffectComponent,
                            OverlayTextEffectComponent,
                            OverlayMenuDirective
                        ],
                        imports: [common.CommonModule],
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

    exports.OverlayMenuEffectService = OverlayMenuEffectService;
    exports.OverlayMenuEffectComponent = OverlayMenuEffectComponent;
    exports.OverlayMenuEffectModule = OverlayMenuEffectModule;
    exports.ɵd = OverlayTextEffectComponent;
    exports.ɵc = OverlayMenuDirective;
    exports.ɵb = overlayMenuAnimation;
    exports.ɵa = overlayTextAnimation;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=overlay-menu-effect.umd.js.map
import { Injectable, NgModule, defineInjectable, Component, ViewEncapsulation } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryService = /** @class */ (function () {
    function GalleryService() {
    }
    GalleryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GalleryService.ctorParameters = function () { return []; };
    /** @nocollapse */ GalleryService.ngInjectableDef = defineInjectable({ factory: function GalleryService_Factory() { return new GalleryService(); }, token: GalleryService, providedIn: "root" });
    return GalleryService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PREFIX = "galley";
/** @type {?} */
var LIB_PREFIX = "lib-" + PREFIX;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator
var GalleryLibWrapperComponent = /** @class */ (function () {
    function GalleryLibWrapperComponent() {
    }
    /**
     * @return {?}
     */
    GalleryLibWrapperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    GalleryLibWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-lib-wrapper',
                    template: "test\r\n",
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: LIB_PREFIX + "-circle"
                    },
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    GalleryLibWrapperComponent.ctorParameters = function () { return []; };
    return GalleryLibWrapperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    GalleryModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [GalleryLibWrapperComponent],
                    imports: [],
                    exports: [GalleryLibWrapperComponent]
                },] }
    ];
    return GalleryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GalleryService, GalleryLibWrapperComponent, GalleryModule, LIB_PREFIX as ɵa };

//# sourceMappingURL=gallery.js.map
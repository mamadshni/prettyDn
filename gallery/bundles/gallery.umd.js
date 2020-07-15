(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('gallery', ['exports', '@angular/core'], factory) :
    (factory((global.gallery = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GalleryService = /** @class */ (function () {
        function GalleryService() {
        }
        GalleryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GalleryService.ctorParameters = function () { return []; };
        /** @nocollapse */ GalleryService.ngInjectableDef = i0.defineInjectable({ factory: function GalleryService_Factory() { return new GalleryService(); }, token: GalleryService, providedIn: "root" });
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
            { type: i0.Component, args: [{
                        selector: 'gallery-lib-wrapper',
                        template: "test\r\n",
                        encapsulation: i0.ViewEncapsulation.None,
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
            { type: i0.NgModule, args: [{
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

    exports.GalleryService = GalleryService;
    exports.GalleryLibWrapperComponent = GalleryLibWrapperComponent;
    exports.GalleryModule = GalleryModule;
    exports.ɵa = LIB_PREFIX;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=gallery.umd.js.map
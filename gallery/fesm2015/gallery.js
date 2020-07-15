import { Injectable, NgModule, defineInjectable, Component, ViewEncapsulation } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryService {
    constructor() { }
}
GalleryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GalleryService.ctorParameters = () => [];
/** @nocollapse */ GalleryService.ngInjectableDef = defineInjectable({ factory: function GalleryService_Factory() { return new GalleryService(); }, token: GalleryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PREFIX = `galley`;
/** @type {?} */
const LIB_PREFIX = `lib-${PREFIX}`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator
class GalleryLibWrapperComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
GalleryLibWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-lib-wrapper',
                template: "test\r\n",
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: `${LIB_PREFIX}-circle`
                },
                styles: [""]
            }] }
];
/** @nocollapse */
GalleryLibWrapperComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryModule {
}
GalleryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GalleryLibWrapperComponent],
                imports: [],
                exports: [GalleryLibWrapperComponent]
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

export { GalleryService, GalleryLibWrapperComponent, GalleryModule, LIB_PREFIX as ɵa };

//# sourceMappingURL=gallery.js.map
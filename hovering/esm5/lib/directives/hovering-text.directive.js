/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { LIB_PREFIX } from '../module/params';
// tslint:disable:directive-selector
var HoveringTextDirective = /** @class */ (function () {
    function HoveringTextDirective(el) {
        this.el = el;
        this.el.nativeElement.classList.add(LIB_PREFIX + "-text");
    }
    HoveringTextDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[hText] , [h-text] ,h-text , hText'
                },] }
    ];
    /** @nocollapse */
    HoveringTextDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return HoveringTextDirective;
}());
export { HoveringTextDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HoveringTextDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXJpbmctdGV4dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ob3ZlcmluZy8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2hvdmVyaW5nLXRleHQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRzlDO0lBSUUsK0JBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2hDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUksVUFBVSxVQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkFORixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztpQkFDL0M7Ozs7Z0JBTm1CLFVBQVU7O0lBVzlCLDRCQUFDO0NBQUEsQUFQRCxJQU9DO1NBSlkscUJBQXFCOzs7Ozs7SUFDcEIsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMSUJfUFJFRklYIH0gZnJvbSAnLi4vbW9kdWxlL3BhcmFtcyc7XG4vLyB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtc2VsZWN0b3JcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2hUZXh0XSAsIFtoLXRleHRdICxoLXRleHQgLCBoVGV4dCdcbn0pXG5leHBvcnQgY2xhc3MgSG92ZXJpbmdUZXh0RGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke0xJQl9QUkVGSVh9LXRleHRgKTtcbiAgfVxufVxuIl19
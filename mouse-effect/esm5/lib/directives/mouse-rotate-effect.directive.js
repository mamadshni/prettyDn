/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
// tslint:disable:directive-selector
import 'vanilla-tilt';
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
export { MouseRotateEffectDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MouseRotateEffectDirective.prototype.elemRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2Utcm90YXRlLWVmZmVjdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb3VzZS1lZmZlY3QvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9tb3VzZS1yb3RhdGUtZWZmZWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUdiLE1BQU0sZUFBZSxDQUFDOztBQUd2QixPQUFPLGNBQWMsQ0FBQztBQUd0QjtJQWNFLG9DQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQUcsQ0FBQzs7OztJQVZaLDZDQUFROzs7SUFBdkM7UUFDRSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUlELDZDQUFROzs7SUFBUjtRQUNFLElBQUksTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7OztJQUVELGdEQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO1lBQzFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7SUFFRCwrQ0FBVTs7O0lBQVY7UUFDRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQzNDLEdBQUcsRUFBRSxDQUFDO1lBQ04sV0FBVyxFQUFFLElBQUk7WUFDakIsT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSwrQkFBK0I7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGtEQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuRCxDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2hDOzs7O2dCQVpDLFVBQVU7OzsyQkFjVCxZQUFZLFNBQUMsZUFBZTs7SUFxQy9CLGlDQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0F0Q1ksMEJBQTBCOzs7Ozs7SUFXekIsNkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yXG5cbmltcG9ydCAndmFuaWxsYS10aWx0JztcbmRlY2xhcmUgdmFyIFZhbmlsbGFUaWx0O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbTW91c2VSb3RhdGVFZmZlY3RdJ1xufSlcbmV4cG9ydCBjbGFzcyBNb3VzZVJvdGF0ZUVmZmVjdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpIG9uUmVzaXplKCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjQpIHtcbiAgICAgIHRoaXMuYWRkVmFuaWxsYSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQudmFuaWxsYVRpbHQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWYW5pbGxhKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjQpIHtcbiAgICAgIHRoaXMuYWRkVmFuaWxsYSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC52YW5pbGxhVGlsdCkge1xuICAgICAgdGhpcy5yZW1vdmVWYW5pbGxhKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkVmFuaWxsYSgpOiB2b2lkIHtcbiAgICBWYW5pbGxhVGlsdC5pbml0KHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LCB7XG4gICAgICBtYXg6IDMsXG4gICAgICBwZXJzcGVjdGl2ZTogMTAwMCxcbiAgICAgIHJldmVyc2U6IHRydWUsXG4gICAgICBzcGVlZDogNDAwLFxuICAgICAgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKC4xOSwuNDgsLjUzLC45NiknXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVWYW5pbGxhKCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LnZhbmlsbGFUaWx0LmRlc3Ryb3koKTtcbiAgfVxufVxuIl19
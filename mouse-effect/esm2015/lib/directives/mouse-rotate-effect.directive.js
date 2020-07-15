/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
// tslint:disable:directive-selector
import 'vanilla-tilt';
export class MouseRotateEffectDirective {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    MouseRotateEffectDirective.prototype.elemRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2Utcm90YXRlLWVmZmVjdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb3VzZS1lZmZlY3QvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9tb3VzZS1yb3RhdGUtZWZmZWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUdiLE1BQU0sZUFBZSxDQUFDOztBQUd2QixPQUFPLGNBQWMsQ0FBQztBQU10QixNQUFNLE9BQU8sMEJBQTBCOzs7O0lBV3JDLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFBRyxDQUFDOzs7O0lBVlosUUFBUTtRQUNyQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUlELFFBQVE7UUFDTixJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQzNDLEdBQUcsRUFBRSxDQUFDO1lBQ04sV0FBVyxFQUFFLElBQUk7WUFDakIsT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSwrQkFBK0I7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkQsQ0FBQzs7O1lBeENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOzs7O1lBWkMsVUFBVTs7O3VCQWNULFlBQVksU0FBQyxlQUFlOzs7Ozs7O0lBVWpCLDZDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvclxuXG5pbXBvcnQgJ3ZhbmlsbGEtdGlsdCc7XG5kZWNsYXJlIHZhciBWYW5pbGxhVGlsdDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW01vdXNlUm90YXRlRWZmZWN0XSdcbn0pXG5leHBvcnQgY2xhc3MgTW91c2VSb3RhdGVFZmZlY3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKSBvblJlc2l6ZSgpIHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDI0KSB7XG4gICAgICB0aGlzLmFkZFZhbmlsbGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LnZhbmlsbGFUaWx0KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVmFuaWxsYSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDI0KSB7XG4gICAgICB0aGlzLmFkZFZhbmlsbGEoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQudmFuaWxsYVRpbHQpIHtcbiAgICAgIHRoaXMucmVtb3ZlVmFuaWxsYSgpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFZhbmlsbGEoKTogdm9pZCB7XG4gICAgVmFuaWxsYVRpbHQuaW5pdCh0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudCwge1xuICAgICAgbWF4OiAzLFxuICAgICAgcGVyc3BlY3RpdmU6IDEwMDAsXG4gICAgICByZXZlcnNlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDQwMCxcbiAgICAgIGVhc2luZzogJ2N1YmljLWJlemllciguMTksLjQ4LC41MywuOTYpJ1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlVmFuaWxsYSgpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC52YW5pbGxhVGlsdC5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==
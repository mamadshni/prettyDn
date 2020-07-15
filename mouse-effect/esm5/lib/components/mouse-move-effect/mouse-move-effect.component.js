/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ImageMouseEffectDirective } from '../../directives/image-mouse-effect.directive';
import { Component, ViewEncapsulation, NgZone, ElementRef, ViewChild, ContentChild, HostListener } from '@angular/core';
// tslint:disable:use-host-property-decorator
// tslint:disable:no-input-rename
// tslint:disable:component-selector
import { TweenLite } from 'gsap';
/** @type {?} */
var movementSpeed = 80;
var MouseMoveEffectComponent = /** @class */ (function () {
    function MouseMoveEffectComponent(zone, elemRef) {
        this.zone = zone;
        this.elemRef = elemRef;
        this.isMenuOpen = false;
        this.bindMouseEvent = this.mouseMoveFunction.bind(this);
    }
    /**
     * @return {?}
     */
    MouseMoveEffectComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        if (!this.isMenuOpen) {
            if (window.innerWidth > 1024) {
                this.addEffect();
            }
            else {
                this.deleteEffect();
            }
        }
    };
    /**
     * @return {?}
     */
    MouseMoveEffectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.addEffect();
    };
    /**
     * @return {?}
     */
    MouseMoveEffectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.deleteEffect();
    };
    /**
     * @return {?}
     */
    MouseMoveEffectComponent.prototype.addEffect = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (window.innerWidth > 1024) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                return _this.elemRef.nativeElement.addEventListener('mousemove', _this.bindMouseEvent);
            }));
        }
    };
    /**
     * @return {?}
     */
    MouseMoveEffectComponent.prototype.deleteEffect = /**
     * @return {?}
     */
    function () {
        var _this = this;
        TweenLite.to(this.mouseWrapper.nativeElement, 0.2, { x: 0, y: 0 });
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            return _this.elemRef.nativeElement.removeEventListener('mousemove', _this.bindMouseEvent);
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MouseMoveEffectComponent.prototype.mouseMoveFunction = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var posX = event.pageX - this.elemRef.nativeElement.offsetLeft;
        /** @type {?} */
        var posY = event.pageY - this.elemRef.nativeElement.offsetTop;
        /** @type {?} */
        var mouseX = posX - this.elemRef.nativeElement.offsetWidth / 2;
        /** @type {?} */
        var mouseY = posY - this.elemRef.nativeElement.offsetHeight / 2;
        /** @type {?} */
        var mouseXPercent = -(mouseX / this.elemRef.nativeElement.offsetWidth) * movementSpeed;
        /** @type {?} */
        var mouseYPercent = -(mouseY / this.elemRef.nativeElement.offsetHeight) * movementSpeed;
        TweenLite.to(this.mouseWrapper.nativeElement, 1, {
            x: mouseXPercent,
            y: mouseYPercent
        });
    };
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
    MouseMoveEffectComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef }
    ]; };
    MouseMoveEffectComponent.propDecorators = {
        imageDirective: [{ type: ContentChild, args: [ImageMouseEffectDirective,] }],
        mouseWrapper: [{ type: ViewChild, args: ['mouseWrapper',] }],
        onResize: [{ type: HostListener, args: ['window:resize',] }]
    };
    return MouseMoveEffectComponent;
}());
export { MouseMoveEffectComponent };
if (false) {
    /** @type {?} */
    MouseMoveEffectComponent.prototype.isMenuOpen;
    /**
     * @type {?}
     * @private
     */
    MouseMoveEffectComponent.prototype.bindMouseEvent;
    /** @type {?} */
    MouseMoveEffectComponent.prototype.imageDirective;
    /** @type {?} */
    MouseMoveEffectComponent.prototype.mouseWrapper;
    /**
     * @type {?}
     * @private
     */
    MouseMoveEffectComponent.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    MouseMoveEffectComponent.prototype.elemRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2UtbW92ZS1lZmZlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW91c2UtZWZmZWN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbW91c2UtbW92ZS1lZmZlY3QvbW91c2UtbW92ZS1lZmZlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQ0wsU0FBUyxFQUdULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxZQUFZLEVBSVosWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDOzs7O0FBSXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBRTNCLGFBQWEsR0FBRyxFQUFFO0FBQ3hCO0lBOEJFLGtDQUFvQixJQUFZLEVBQVUsT0FBbUI7UUFBekMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFuQjdELGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFWCxtQkFBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFpQkssQ0FBQzs7OztJQVZsQywyQ0FBUTs7O0lBQXZDO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2xCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUlELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCw0Q0FBUzs7O0lBQVQ7UUFBQSxpQkFTQztRQVJDLElBQUksTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztZQUFDO2dCQUMxQixPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUN6QyxXQUFXLEVBQ1gsS0FBSSxDQUFDLGNBQWMsQ0FDcEI7WUFIRCxDQUdDLEVBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7OztJQUVELCtDQUFZOzs7SUFBWjtRQUFBLGlCQVFDO1FBUEMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCOzs7UUFBQztZQUMxQixPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUM1QyxXQUFXLEVBQ1gsS0FBSSxDQUFDLGNBQWMsQ0FDcEI7UUFIRCxDQUdDLEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsb0RBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQWlCOztZQUMzQixJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVOztZQUMxRCxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTOztZQUV6RCxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxDQUFDOztZQUMxRCxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxDQUFDOztZQUUzRCxhQUFhLEdBQ2pCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsYUFBYTs7WUFDOUQsYUFBYSxHQUNqQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLGFBQWE7UUFFckUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUU7WUFDL0MsQ0FBQyxFQUFFLGFBQWE7WUFDaEIsQ0FBQyxFQUFFLGFBQWE7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBN0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QiwyTkFBK0M7b0JBRS9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxVQUFVLEVBQUUsRUFBRTtvQkFDZCxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLHlCQUF5QjtxQkFDakM7O2lCQUNGOzs7O2dCQXhCQyxNQUFNO2dCQUNOLFVBQVU7OztpQ0E2QlQsWUFBWSxTQUFDLHlCQUF5QjsrQkFHdEMsU0FBUyxTQUFDLGNBQWM7MkJBRXhCLFlBQVksU0FBQyxlQUFlOztJQTBEL0IsK0JBQUM7Q0FBQSxBQTlFRCxJQThFQztTQXBFWSx3QkFBd0I7OztJQUNuQyw4Q0FBbUI7Ozs7O0lBRW5CLGtEQUEyRDs7SUFFM0Qsa0RBQzBDOztJQUUxQyxnREFBb0U7Ozs7O0lBWXhELHdDQUFvQjs7Ozs7SUFBRSwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEltYWdlTW91c2VFZmZlY3REaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2ltYWdlLW1vdXNlLWVmZmVjdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgTmdab25lLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIENvbnRlbnRDaGlsZCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIHRzbGludDpkaXNhYmxlOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuLy8gdHNsaW50OmRpc2FibGU6bm8taW5wdXQtcmVuYW1lXG4vLyB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3JcbmltcG9ydCB7IFR3ZWVuTGl0ZSB9IGZyb20gJ2dzYXAnO1xuXG5jb25zdCBtb3ZlbWVudFNwZWVkID0gODA7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtb3VzZS1tb3ZlLWVmZmVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnbW91c2UtbW92ZS1lZmZlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbW91c2UtbW92ZS1lZmZlY3QuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ21vdXNlLWVmZmVjdF9fY29udGFpbmVyJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE1vdXNlTW92ZUVmZmVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaXNNZW51T3BlbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgYmluZE1vdXNlRXZlbnQgPSB0aGlzLm1vdXNlTW92ZUZ1bmN0aW9uLmJpbmQodGhpcyk7XG5cbiAgQENvbnRlbnRDaGlsZChJbWFnZU1vdXNlRWZmZWN0RGlyZWN0aXZlKVxuICBpbWFnZURpcmVjdGl2ZTogSW1hZ2VNb3VzZUVmZmVjdERpcmVjdGl2ZTtcblxuICBAVmlld0NoaWxkKCdtb3VzZVdyYXBwZXInKSBtb3VzZVdyYXBwZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKSBvblJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNNZW51T3Blbikge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNCkge1xuICAgICAgICB0aGlzLmFkZEVmZmVjdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWxldGVFZmZlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRkRWZmZWN0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlbGV0ZUVmZmVjdCgpO1xuICB9XG5cbiAgYWRkRWZmZWN0KCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjQpIHtcbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxuICAgICAgICB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgICAgIHRoaXMuYmluZE1vdXNlRXZlbnRcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVFZmZlY3QoKSB7XG4gICAgVHdlZW5MaXRlLnRvKHRoaXMubW91c2VXcmFwcGVyLm5hdGl2ZUVsZW1lbnQsIDAuMiwgeyB4OiAwLCB5OiAwIH0pO1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxuICAgICAgdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ21vdXNlbW92ZScsXG4gICAgICAgIHRoaXMuYmluZE1vdXNlRXZlbnRcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbW91c2VNb3ZlRnVuY3Rpb24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCBwb3NYID0gZXZlbnQucGFnZVggLSB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgIGNvbnN0IHBvc1kgPSBldmVudC5wYWdlWSAtIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcDtcblxuICAgIGNvbnN0IG1vdXNlWCA9IHBvc1ggLSB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgY29uc3QgbW91c2VZID0gcG9zWSAtIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG5cbiAgICBjb25zdCBtb3VzZVhQZXJjZW50ID1cbiAgICAgIC0obW91c2VYIC8gdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgpICogbW92ZW1lbnRTcGVlZDtcbiAgICBjb25zdCBtb3VzZVlQZXJjZW50ID1cbiAgICAgIC0obW91c2VZIC8gdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSAqIG1vdmVtZW50U3BlZWQ7XG5cbiAgICBUd2VlbkxpdGUudG8odGhpcy5tb3VzZVdyYXBwZXIubmF0aXZlRWxlbWVudCwgMSwge1xuICAgICAgeDogbW91c2VYUGVyY2VudCxcbiAgICAgIHk6IG1vdXNlWVBlcmNlbnRcbiAgICB9KTtcbiAgfVxufVxuIl19
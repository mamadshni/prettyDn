/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, NgZone, ViewChild, ViewEncapsulation } from '@angular/core';
import { ScrollBackdropDirective } from '../directives/scroll-backdrop.directive';
import { ScrollTitleDirective } from '../directives/scroll-title.directive';
import { fadeInOutAnim, opacity } from '../animation';
// tslint:disable:use-host-property-decorator
// tslint:disable:component-selector
// tslint:disable:object-literal-key-quotes
/** @type {?} */
var SCROLL_BOUND = 250;
/** @type {?} */
var MAX_TITLE_Y_POSITION = 150;
/** @type {?} */
var MIN_TITLE_Y_POSITION = 50;
var ScrollEffectComponent = /** @class */ (function () {
    function ScrollEffectComponent(zone, cd, route) {
        this.zone = zone;
        this.cd = cd;
        this.route = route;
        this.showTemplates = true;
        this.isChild = false;
        this.bindScrollEvent = this.onScroll.bind(this);
    }
    /**
     * @return {?}
     */
    ScrollEffectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.zone.runOutsideAngular(this.initScrollListener.bind(this));
        this.isChild = this.route.snapshot.data.isChild;
    };
    /**
     * @return {?}
     */
    ScrollEffectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.zone.runOutsideAngular(this.deleteScrollListener.bind(this));
    };
    /**
     * @private
     * @return {?}
     */
    ScrollEffectComponent.prototype.initScrollListener = /**
     * @private
     * @return {?}
     */
    function () {
        window.addEventListener('scroll', this.bindScrollEvent);
    };
    /**
     * @private
     * @return {?}
     */
    ScrollEffectComponent.prototype.deleteScrollListener = /**
     * @private
     * @return {?}
     */
    function () {
        window.removeEventListener('scroll', this.bindScrollEvent);
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    ScrollEffectComponent.prototype.onScroll = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var scrollY = window.scrollY;
        // OUT OF BOUND -> HIDE ALL
        if (scrollY > SCROLL_BOUND) {
            this.showTemplates = false;
            // IN BOUND -> ANIMATE TITLE
        }
        else {
            this.showTemplates = true;
            this.isChild = true;
            if (this.titleElem) {
                /** @type {?} */
                var factor = (MAX_TITLE_Y_POSITION - MIN_TITLE_Y_POSITION) / SCROLL_BOUND;
                /** @type {?} */
                var newYPosition = factor * scrollY + MIN_TITLE_Y_POSITION;
                /** @type {?} */
                var newOpacity = 1 - (1 / SCROLL_BOUND) * scrollY;
                this.titleElem.nativeElement.style.transform = "translate(-50%, " + -newYPosition + "%)";
                this.titleElem.nativeElement.style.opacity = newOpacity.toString();
            }
        }
        this.cd.detectChanges();
    };
    ScrollEffectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'scroll-effect',
                    template: "<div\r\n  #titleElem\r\n  class=\"scroll-effect__title\"\r\n  [style.opacity]=\"showTemplates ? '1' : '0'\"\r\n>\r\n  <ng-container *ngTemplateOutlet=\"titleDirective.tmpRef\"></ng-container>\r\n</div>\r\n\r\n<div\r\n  #backdropElem\r\n  [@fadeInOut]=\"isChild\"\r\n  *ngIf=\"showTemplates\"\r\n  class=\"scroll-effect__backdrop\"\r\n>\r\n  <ng-container *ngTemplateOutlet=\"backDropDirective.tmpRef\"></ng-container>\r\n</div>\r\n\r\n<div [@opacity]=\"showTemplates\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    animations: [fadeInOutAnim('1s'), opacity('500ms')],
                    host: {
                        class: 'scroll-effect__container'
                    },
                    styles: [".scroll-effect__container{display:block}.scroll-effect__title{z-index:6;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff}.scroll-effect__backdrop{background:#111;z-index:5;position:fixed;width:100vw;height:100vh;top:0;left:0}"]
                }] }
    ];
    /** @nocollapse */
    ScrollEffectComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: ActivatedRoute }
    ]; };
    ScrollEffectComponent.propDecorators = {
        titleDirective: [{ type: ContentChild, args: [ScrollTitleDirective,] }],
        backDropDirective: [{ type: ContentChild, args: [ScrollBackdropDirective,] }],
        titleElem: [{ type: ViewChild, args: ['titleElem',] }],
        backdropElem: [{ type: ViewChild, args: ['backdropElem',] }]
    };
    return ScrollEffectComponent;
}());
export { ScrollEffectComponent };
if (false) {
    /** @type {?} */
    ScrollEffectComponent.prototype.showTemplates;
    /** @type {?} */
    ScrollEffectComponent.prototype.isChild;
    /**
     * @type {?}
     * @private
     */
    ScrollEffectComponent.prototype.bindScrollEvent;
    /** @type {?} */
    ScrollEffectComponent.prototype.titleDirective;
    /** @type {?} */
    ScrollEffectComponent.prototype.backDropDirective;
    /** @type {?} */
    ScrollEffectComponent.prototype.titleElem;
    /** @type {?} */
    ScrollEffectComponent.prototype.backdropElem;
    /**
     * @type {?}
     * @private
     */
    ScrollEffectComponent.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    ScrollEffectComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    ScrollEffectComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWVmZmVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zY3JvbGwtZWZmZWN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2Nyb2xsLWVmZmVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUVsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7SUFLaEQsWUFBWSxHQUFHLEdBQUc7O0lBQ2xCLG9CQUFvQixHQUFHLEdBQUc7O0lBQzFCLG9CQUFvQixHQUFHLEVBQUU7QUFFL0I7SUF1QkUsK0JBQ1UsSUFBWSxFQUNaLEVBQXFCLEVBQ3JCLEtBQXFCO1FBRnJCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQWR4QixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQWFoRCxDQUFDOzs7O0lBRUosd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7OztJQUVPLGtEQUFrQjs7OztJQUExQjtRQUNFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRU8sb0RBQW9COzs7O0lBQTVCO1FBQ0UsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7O0lBRU8sd0NBQVE7Ozs7O0lBQWhCLFVBQWlCLENBQVE7O1lBQ2pCLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztRQUU5QiwyQkFBMkI7UUFDM0IsSUFBSSxPQUFPLEdBQUcsWUFBWSxFQUFFO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBRTNCLDRCQUE0QjtTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztvQkFDWixNQUFNLEdBQ1YsQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLFlBQVk7O29CQUN4RCxZQUFZLEdBQUcsTUFBTSxHQUFHLE9BQU8sR0FBRyxvQkFBb0I7O29CQUV0RCxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxHQUFHLE9BQU87Z0JBRW5ELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcscUJBQW1CLENBQUMsWUFBWSxPQUFJLENBQUM7Z0JBQ3BGLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3BFO1NBQ0Y7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQXRFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDhnQkFBMkM7b0JBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSwwQkFBMEI7cUJBQ2xDOztpQkFDRjs7OztnQkEzQkMsTUFBTTtnQkFKTixpQkFBaUI7Z0JBSFYsY0FBYzs7O2lDQXdDcEIsWUFBWSxTQUFDLG9CQUFvQjtvQ0FDakMsWUFBWSxTQUFDLHVCQUF1Qjs0QkFHcEMsU0FBUyxTQUFDLFdBQVc7K0JBQ3JCLFNBQVMsU0FBQyxjQUFjOztJQWtEM0IsNEJBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQTVEWSxxQkFBcUI7OztJQUNoQyw4Q0FBNEI7O0lBQzVCLHdDQUF1Qjs7Ozs7SUFDdkIsZ0RBQW1EOztJQUVuRCwrQ0FBeUU7O0lBQ3pFLGtEQUMyQzs7SUFFM0MsMENBQThEOztJQUM5RCw2Q0FBb0U7Ozs7O0lBR2xFLHFDQUFvQjs7Ozs7SUFDcEIsbUNBQTZCOzs7OztJQUM3QixzQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nyb2xsQmFja2Ryb3BEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3Njcm9sbC1iYWNrZHJvcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2Nyb2xsVGl0bGVEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3Njcm9sbC10aXRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZmFkZUluT3V0QW5pbSwgb3BhY2l0eSB9IGZyb20gJy4uL2FuaW1hdGlvbic7XG4vLyB0c2xpbnQ6ZGlzYWJsZTp1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3Jcbi8vIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvclxuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwta2V5LXF1b3Rlc1xuXG5jb25zdCBTQ1JPTExfQk9VTkQgPSAyNTA7XG5jb25zdCBNQVhfVElUTEVfWV9QT1NJVElPTiA9IDE1MDtcbmNvbnN0IE1JTl9USVRMRV9ZX1BPU0lUSU9OID0gNTA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Njcm9sbC1lZmZlY3QnLFxuICB0ZW1wbGF0ZVVybDogJ3Njcm9sbC1lZmZlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2Nyb2xsLWVmZmVjdC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW2ZhZGVJbk91dEFuaW0oJzFzJyksIG9wYWNpdHkoJzUwMG1zJyldLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdzY3JvbGwtZWZmZWN0X19jb250YWluZXInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsRWZmZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgc2hvd1RlbXBsYXRlcyA9IHRydWU7XG4gIHB1YmxpYyBpc0NoaWxkID0gZmFsc2U7XG4gIHByaXZhdGUgYmluZFNjcm9sbEV2ZW50ID0gdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpO1xuXG4gIEBDb250ZW50Q2hpbGQoU2Nyb2xsVGl0bGVEaXJlY3RpdmUpIHRpdGxlRGlyZWN0aXZlOiBTY3JvbGxUaXRsZURpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChTY3JvbGxCYWNrZHJvcERpcmVjdGl2ZSlcbiAgYmFja0Ryb3BEaXJlY3RpdmU6IFNjcm9sbEJhY2tkcm9wRGlyZWN0aXZlO1xuXG4gIEBWaWV3Q2hpbGQoJ3RpdGxlRWxlbScpIHRpdGxlRWxlbTogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2JhY2tkcm9wRWxlbScpIGJhY2tkcm9wRWxlbTogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcih0aGlzLmluaXRTY3JvbGxMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmlzQ2hpbGQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGEuaXNDaGlsZDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcih0aGlzLmRlbGV0ZVNjcm9sbExpc3RlbmVyLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0U2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuYmluZFNjcm9sbEV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgZGVsZXRlU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuYmluZFNjcm9sbEV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgb25TY3JvbGwoZTogRXZlbnQpIHtcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICAvLyBPVVQgT0YgQk9VTkQgLT4gSElERSBBTExcbiAgICBpZiAoc2Nyb2xsWSA+IFNDUk9MTF9CT1VORCkge1xuICAgICAgdGhpcy5zaG93VGVtcGxhdGVzID0gZmFsc2U7XG5cbiAgICAgIC8vIElOIEJPVU5EIC0+IEFOSU1BVEUgVElUTEVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93VGVtcGxhdGVzID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNDaGlsZCA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLnRpdGxlRWxlbSkge1xuICAgICAgICBjb25zdCBmYWN0b3IgPVxuICAgICAgICAgIChNQVhfVElUTEVfWV9QT1NJVElPTiAtIE1JTl9USVRMRV9ZX1BPU0lUSU9OKSAvIFNDUk9MTF9CT1VORDtcbiAgICAgICAgY29uc3QgbmV3WVBvc2l0aW9uID0gZmFjdG9yICogc2Nyb2xsWSArIE1JTl9USVRMRV9ZX1BPU0lUSU9OO1xuXG4gICAgICAgIGNvbnN0IG5ld09wYWNpdHkgPSAxIC0gKDEgLyBTQ1JPTExfQk9VTkQpICogc2Nyb2xsWTtcblxuICAgICAgICB0aGlzLnRpdGxlRWxlbS5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoLTUwJSwgJHstbmV3WVBvc2l0aW9ufSUpYDtcbiAgICAgICAgdGhpcy50aXRsZUVsZW0ubmF0aXZlRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gbmV3T3BhY2l0eS50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19
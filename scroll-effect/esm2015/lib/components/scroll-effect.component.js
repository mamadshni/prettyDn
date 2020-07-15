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
const SCROLL_BOUND = 250;
/** @type {?} */
const MAX_TITLE_Y_POSITION = 150;
/** @type {?} */
const MIN_TITLE_Y_POSITION = 50;
export class ScrollEffectComponent {
    /**
     * @param {?} zone
     * @param {?} cd
     * @param {?} route
     */
    constructor(zone, cd, route) {
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
    ngOnInit() {
        this.zone.runOutsideAngular(this.initScrollListener.bind(this));
        this.isChild = this.route.snapshot.data.isChild;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.zone.runOutsideAngular(this.deleteScrollListener.bind(this));
    }
    /**
     * @private
     * @return {?}
     */
    initScrollListener() {
        window.addEventListener('scroll', this.bindScrollEvent);
    }
    /**
     * @private
     * @return {?}
     */
    deleteScrollListener() {
        window.removeEventListener('scroll', this.bindScrollEvent);
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    onScroll(e) {
        /** @type {?} */
        const scrollY = window.scrollY;
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
                const factor = (MAX_TITLE_Y_POSITION - MIN_TITLE_Y_POSITION) / SCROLL_BOUND;
                /** @type {?} */
                const newYPosition = factor * scrollY + MIN_TITLE_Y_POSITION;
                /** @type {?} */
                const newOpacity = 1 - (1 / SCROLL_BOUND) * scrollY;
                this.titleElem.nativeElement.style.transform = `translate(-50%, ${-newYPosition}%)`;
                this.titleElem.nativeElement.style.opacity = newOpacity.toString();
            }
        }
        this.cd.detectChanges();
    }
}
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
ScrollEffectComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: ActivatedRoute }
];
ScrollEffectComponent.propDecorators = {
    titleDirective: [{ type: ContentChild, args: [ScrollTitleDirective,] }],
    backDropDirective: [{ type: ContentChild, args: [ScrollBackdropDirective,] }],
    titleElem: [{ type: ViewChild, args: ['titleElem',] }],
    backdropElem: [{ type: ViewChild, args: ['backdropElem',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWVmZmVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zY3JvbGwtZWZmZWN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2Nyb2xsLWVmZmVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUVsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7TUFLaEQsWUFBWSxHQUFHLEdBQUc7O01BQ2xCLG9CQUFvQixHQUFHLEdBQUc7O01BQzFCLG9CQUFvQixHQUFHLEVBQUU7QUFhL0IsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBWWhDLFlBQ1UsSUFBWSxFQUNaLEVBQXFCLEVBQ3JCLEtBQXFCO1FBRnJCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQWR4QixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQWFoRCxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBRU8sa0JBQWtCO1FBQ3hCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRU8sb0JBQW9CO1FBQzFCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUVPLFFBQVEsQ0FBQyxDQUFROztjQUNqQixPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87UUFFOUIsMkJBQTJCO1FBQzNCLElBQUksT0FBTyxHQUFHLFlBQVksRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUUzQiw0QkFBNEI7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXBCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7c0JBQ1osTUFBTSxHQUNWLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxZQUFZOztzQkFDeEQsWUFBWSxHQUFHLE1BQU0sR0FBRyxPQUFPLEdBQUcsb0JBQW9COztzQkFFdEQsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsR0FBRyxPQUFPO2dCQUVuRCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDLFlBQVksSUFBSSxDQUFDO2dCQUNwRixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwRTtTQUNGO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUF0RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qiw4Z0JBQTJDO2dCQUUzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25ELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsMEJBQTBCO2lCQUNsQzs7YUFDRjs7OztZQTNCQyxNQUFNO1lBSk4saUJBQWlCO1lBSFYsY0FBYzs7OzZCQXdDcEIsWUFBWSxTQUFDLG9CQUFvQjtnQ0FDakMsWUFBWSxTQUFDLHVCQUF1Qjt3QkFHcEMsU0FBUyxTQUFDLFdBQVc7MkJBQ3JCLFNBQVMsU0FBQyxjQUFjOzs7O0lBVHpCLDhDQUE0Qjs7SUFDNUIsd0NBQXVCOzs7OztJQUN2QixnREFBbUQ7O0lBRW5ELCtDQUF5RTs7SUFDekUsa0RBQzJDOztJQUUzQywwQ0FBOEQ7O0lBQzlELDZDQUFvRTs7Ozs7SUFHbEUscUNBQW9COzs7OztJQUNwQixtQ0FBNkI7Ozs7O0lBQzdCLHNDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JvbGxCYWNrZHJvcERpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvc2Nyb2xsLWJhY2tkcm9wLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTY3JvbGxUaXRsZURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvc2Nyb2xsLXRpdGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBmYWRlSW5PdXRBbmltLCBvcGFjaXR5IH0gZnJvbSAnLi4vYW5pbWF0aW9uJztcbi8vIHRzbGludDpkaXNhYmxlOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuLy8gdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1rZXktcXVvdGVzXG5cbmNvbnN0IFNDUk9MTF9CT1VORCA9IDI1MDtcbmNvbnN0IE1BWF9USVRMRV9ZX1BPU0lUSU9OID0gMTUwO1xuY29uc3QgTUlOX1RJVExFX1lfUE9TSVRJT04gPSA1MDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Nyb2xsLWVmZmVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnc2Nyb2xsLWVmZmVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzY3JvbGwtZWZmZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBhbmltYXRpb25zOiBbZmFkZUluT3V0QW5pbSgnMXMnKSwgb3BhY2l0eSgnNTAwbXMnKV0sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3Njcm9sbC1lZmZlY3RfX2NvbnRhaW5lcidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxFZmZlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBzaG93VGVtcGxhdGVzID0gdHJ1ZTtcbiAgcHVibGljIGlzQ2hpbGQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBiaW5kU2Nyb2xsRXZlbnQgPSB0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcyk7XG5cbiAgQENvbnRlbnRDaGlsZChTY3JvbGxUaXRsZURpcmVjdGl2ZSkgdGl0bGVEaXJlY3RpdmU6IFNjcm9sbFRpdGxlRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKFNjcm9sbEJhY2tkcm9wRGlyZWN0aXZlKVxuICBiYWNrRHJvcERpcmVjdGl2ZTogU2Nyb2xsQmFja2Ryb3BEaXJlY3RpdmU7XG5cbiAgQFZpZXdDaGlsZCgndGl0bGVFbGVtJykgdGl0bGVFbGVtOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnYmFja2Ryb3BFbGVtJykgYmFja2Ryb3BFbGVtOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKHRoaXMuaW5pdFNjcm9sbExpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMuaXNDaGlsZCA9IHRoaXMucm91dGUuc25hcHNob3QuZGF0YS5pc0NoaWxkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKHRoaXMuZGVsZXRlU2Nyb2xsTGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRTY3JvbGxMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5iaW5kU2Nyb2xsRXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxldGVTY3JvbGxMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5iaW5kU2Nyb2xsRXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblNjcm9sbChlOiBFdmVudCkge1xuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgIC8vIE9VVCBPRiBCT1VORCAtPiBISURFIEFMTFxuICAgIGlmIChzY3JvbGxZID4gU0NST0xMX0JPVU5EKSB7XG4gICAgICB0aGlzLnNob3dUZW1wbGF0ZXMgPSBmYWxzZTtcblxuICAgICAgLy8gSU4gQk9VTkQgLT4gQU5JTUFURSBUSVRMRVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dUZW1wbGF0ZXMgPSB0cnVlO1xuICAgICAgdGhpcy5pc0NoaWxkID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMudGl0bGVFbGVtKSB7XG4gICAgICAgIGNvbnN0IGZhY3RvciA9XG4gICAgICAgICAgKE1BWF9USVRMRV9ZX1BPU0lUSU9OIC0gTUlOX1RJVExFX1lfUE9TSVRJT04pIC8gU0NST0xMX0JPVU5EO1xuICAgICAgICBjb25zdCBuZXdZUG9zaXRpb24gPSBmYWN0b3IgKiBzY3JvbGxZICsgTUlOX1RJVExFX1lfUE9TSVRJT047XG5cbiAgICAgICAgY29uc3QgbmV3T3BhY2l0eSA9IDEgLSAoMSAvIFNDUk9MTF9CT1VORCkgKiBzY3JvbGxZO1xuXG4gICAgICAgIHRoaXMudGl0bGVFbGVtLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgtNTAlLCAkey1uZXdZUG9zaXRpb259JSlgO1xuICAgICAgICB0aGlzLnRpdGxlRWxlbS5uYXRpdmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBuZXdPcGFjaXR5LnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FadeScrollEffectService } from './../../fade-scroll-effect.service';
import { Component, NgZone, ViewEncapsulation } from '@angular/core';
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator
export class FadeScrollWrapperComponent {
    /**
     * @param {?} zone
     * @param {?} fadeScrollService
     */
    constructor(zone, fadeScrollService) {
        this.zone = zone;
        this.fadeScrollService = fadeScrollService;
        this.bindScrollEvent = this.onScroll.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.zone.runOutsideAngular(this.initScrollListener.bind(this));
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
     * @param {?} e
     * @return {?}
     */
    onScroll(e) {
        /** @type {?} */
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        /** @type {?} */
        const scrollBot = scrollTop + window.innerHeight;
        this.fadeScrollService.scrollPos.next([scrollTop, scrollBot]);
    }
}
FadeScrollWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'fade-scroll-wrapper',
                template: "<ng-content></ng-content>\r\n",
                // changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'fade-scroll__wrapper'
                },
                styles: [".fade-scroll__item:nth-child(3n+1){transition:.6s cubic-bezier(.215,.61,.355,1) .1s}.fade-scroll__item:nth-child(3n+2){transition:.6s cubic-bezier(.215,.61,.355,1) .2s}.fade-scroll__item:nth-child(3n+3){transition:.6s cubic-bezier(.215,.61,.355,1) .3s}.fade-scroll__content{transition:.15s linear}"]
            }] }
];
/** @nocollapse */
FadeScrollWrapperComponent.ctorParameters = () => [
    { type: NgZone },
    { type: FadeScrollEffectService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FadeScrollWrapperComponent.prototype.bindScrollEvent;
    /**
     * @type {?}
     * @private
     */
    FadeScrollWrapperComponent.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    FadeScrollWrapperComponent.prototype.fadeScrollService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS1zY3JvbGwtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWRlLXNjcm9sbC1lZmZlY3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYWRlLXNjcm9sbC13cmFwcGVyL2ZhZGUtc2Nyb2xsLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM3RSxPQUFPLEVBQ0wsU0FBUyxFQUVULE1BQU0sRUFJTixpQkFBaUIsRUFFbEIsTUFBTSxlQUFlLENBQUM7OztBQWV2QixNQUFNLE9BQU8sMEJBQTBCOzs7OztJQUdyQyxZQUNVLElBQVksRUFDWixpQkFBMEM7UUFEMUMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFKNUMsb0JBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUtoRCxDQUFDOzs7O0lBRUosUUFBUSxLQUFJLENBQUM7Ozs7SUFFYixrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFTyxrQkFBa0I7UUFDeEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLENBQVE7O2NBQ2pCLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUzs7Y0FDcEUsU0FBUyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVztRQUVoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFFLFNBQVMsRUFBRSxTQUFTLENBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IseUNBQWlEOztnQkFHakQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsc0JBQXNCO2lCQUM5Qjs7YUFDRjs7OztZQXBCQyxNQUFNO1lBSkMsdUJBQXVCOzs7Ozs7O0lBMEI5QixxREFBbUQ7Ozs7O0lBR2pELDBDQUFvQjs7Ozs7SUFDcEIsdURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFkZVNjcm9sbEVmZmVjdFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL2ZhZGUtc2Nyb2xsLWVmZmVjdC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBOZ1pvbmUsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBFbGVtZW50UmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQWZ0ZXJDb250ZW50SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhZGVTY3JvbGxJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vZmFkZS1zY3JvbGwtaXRlbS9mYWRlLXNjcm9sbC1pdGVtLmNvbXBvbmVudCc7XG4vLyB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3Jcbi8vIHRzbGludDpkaXNhYmxlOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWRlLXNjcm9sbC13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdmYWRlLXNjcm9sbC13cmFwcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbICdmYWRlLXNjcm9sbC13cmFwcGVyLmNvbXBvbmVudC5zY3NzJyBdLFxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZmFkZS1zY3JvbGxfX3dyYXBwZXInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRmFkZVNjcm9sbFdyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIGJpbmRTY3JvbGxFdmVudCA9IHRoaXMub25TY3JvbGwuYmluZCh0aGlzKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGZhZGVTY3JvbGxTZXJ2aWNlOiBGYWRlU2Nyb2xsRWZmZWN0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIodGhpcy5pbml0U2Nyb2xsTGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRTY3JvbGxMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5iaW5kU2Nyb2xsRXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblNjcm9sbChlOiBFdmVudCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHNjcm9sbEJvdCA9IHNjcm9sbFRvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIHRoaXMuZmFkZVNjcm9sbFNlcnZpY2Uuc2Nyb2xsUG9zLm5leHQoWyBzY3JvbGxUb3AsIHNjcm9sbEJvdCBdKTtcbiAgfVxufVxuIl19
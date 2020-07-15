/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FadeScrollEffectService } from './../../fade-scroll-effect.service';
import { Component, NgZone, ViewEncapsulation } from '@angular/core';
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator
var FadeScrollWrapperComponent = /** @class */ (function () {
    function FadeScrollWrapperComponent(zone, fadeScrollService) {
        this.zone = zone;
        this.fadeScrollService = fadeScrollService;
        this.bindScrollEvent = this.onScroll.bind(this);
    }
    /**
     * @return {?}
     */
    FadeScrollWrapperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    FadeScrollWrapperComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.zone.runOutsideAngular(this.initScrollListener.bind(this));
    };
    /**
     * @private
     * @return {?}
     */
    FadeScrollWrapperComponent.prototype.initScrollListener = /**
     * @private
     * @return {?}
     */
    function () {
        window.addEventListener('scroll', this.bindScrollEvent);
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    FadeScrollWrapperComponent.prototype.onScroll = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        /** @type {?} */
        var scrollBot = scrollTop + window.innerHeight;
        this.fadeScrollService.scrollPos.next([scrollTop, scrollBot]);
    };
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
    FadeScrollWrapperComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: FadeScrollEffectService }
    ]; };
    return FadeScrollWrapperComponent;
}());
export { FadeScrollWrapperComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS1zY3JvbGwtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWRlLXNjcm9sbC1lZmZlY3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYWRlLXNjcm9sbC13cmFwcGVyL2ZhZGUtc2Nyb2xsLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM3RSxPQUFPLEVBQ0wsU0FBUyxFQUVULE1BQU0sRUFJTixpQkFBaUIsRUFFbEIsTUFBTSxlQUFlLENBQUM7OztBQUt2QjtJQWFFLG9DQUNVLElBQVksRUFDWixpQkFBMEM7UUFEMUMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFKNUMsb0JBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUtoRCxDQUFDOzs7O0lBRUosNkNBQVE7OztJQUFSLGNBQVksQ0FBQzs7OztJQUViLHVEQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFTyx1REFBa0I7Ozs7SUFBMUI7UUFDRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFFTyw2Q0FBUTs7Ozs7SUFBaEIsVUFBaUIsQ0FBUTs7WUFDakIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTOztZQUNwRSxTQUFTLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXO1FBRWhELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQix5Q0FBaUQ7O29CQUdqRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxzQkFBc0I7cUJBQzlCOztpQkFDRjs7OztnQkFwQkMsTUFBTTtnQkFKQyx1QkFBdUI7O0lBaURoQyxpQ0FBQztDQUFBLEFBbENELElBa0NDO1NBeEJZLDBCQUEwQjs7Ozs7O0lBQ3JDLHFEQUFtRDs7Ozs7SUFHakQsMENBQW9COzs7OztJQUNwQix1REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWRlU2Nyb2xsRWZmZWN0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vZmFkZS1zY3JvbGwtZWZmZWN0LnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE5nWm9uZSxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFkZVNjcm9sbEl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9mYWRlLXNjcm9sbC1pdGVtL2ZhZGUtc2Nyb2xsLWl0ZW0uY29tcG9uZW50Jztcbi8vIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvclxuLy8gdHNsaW50OmRpc2FibGU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhZGUtc2Nyb2xsLXdyYXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJ2ZhZGUtc2Nyb2xsLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsgJ2ZhZGUtc2Nyb2xsLXdyYXBwZXIuY29tcG9uZW50LnNjc3MnIF0sXG4gIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdmYWRlLXNjcm9sbF9fd3JhcHBlcidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBGYWRlU2Nyb2xsV3JhcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgYmluZFNjcm9sbEV2ZW50ID0gdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgZmFkZVNjcm9sbFNlcnZpY2U6IEZhZGVTY3JvbGxFZmZlY3RTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcih0aGlzLmluaXRTY3JvbGxMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFNjcm9sbExpc3RlbmVyKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmJpbmRTY3JvbGxFdmVudCk7XG4gIH1cblxuICBwcml2YXRlIG9uU2Nyb2xsKGU6IEV2ZW50KSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgY29uc3Qgc2Nyb2xsQm90ID0gc2Nyb2xsVG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgdGhpcy5mYWRlU2Nyb2xsU2VydmljZS5zY3JvbGxQb3MubmV4dChbIHNjcm9sbFRvcCwgc2Nyb2xsQm90IF0pO1xuICB9XG59XG4iXX0=
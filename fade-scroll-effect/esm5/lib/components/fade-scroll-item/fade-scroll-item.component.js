/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FadeScrollEffectService } from './../../fade-scroll-effect.service';
import { Component, ElementRef } from '@angular/core';
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator
var FadeScrollItemComponent = /** @class */ (function () {
    function FadeScrollItemComponent(elem, fadeScrollService) {
        this.elem = elem;
        this.fadeScrollService = fadeScrollService;
        this.card = this.elem.nativeElement;
    }
    /**
     * @return {?}
     */
    FadeScrollItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fadeScrollService.scrollPos.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var posCardTop = _this.offset(_this.elem.nativeElement);
            /** @type {?} */
            var posCardBot = _this.card.offsetHeight + posCardTop;
            if (val[0] <= posCardBot && val[1] >= posCardTop) {
                _this.elem.nativeElement.style.transform = "translateY(0px)";
                _this.card.style.opacity = "1";
            }
            else if (val[0] <= posCardBot) {
                _this.card.style.transform = "translateY(20vh)";
                _this.card.style.opacity = "0";
            }
            else if (val[1] >= posCardTop) {
                _this.card.style.transform = "translateY(-20vh)";
                _this.card.style.opacity = "0";
            }
        }));
    };
    /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    FadeScrollItemComponent.prototype.offset = /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        /** @type {?} */
        var result = 0;
        while (elem.offsetParent) {
            result += elem.offsetTop;
            elem = elem.offsetParent;
        }
        return result;
    };
    FadeScrollItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fade-scroll-item',
                    template: "<ng-content></ng-content>\n",
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'fade-scroll__item'
                    },
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FadeScrollItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FadeScrollEffectService }
    ]; };
    return FadeScrollItemComponent;
}());
export { FadeScrollItemComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FadeScrollItemComponent.prototype.card;
    /**
     * @type {?}
     * @private
     */
    FadeScrollItemComponent.prototype.elem;
    /**
     * @type {?}
     * @private
     */
    FadeScrollItemComponent.prototype.fadeScrollService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS1zY3JvbGwtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWRlLXNjcm9sbC1lZmZlY3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYWRlLXNjcm9sbC1pdGVtL2ZhZGUtc2Nyb2xsLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSTlEO0lBV0UsaUNBQ1UsSUFBZ0IsRUFDaEIsaUJBQTBDO1FBRDFDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUg1QyxTQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFJcEMsQ0FBQzs7OztJQUVKLDBDQUFROzs7SUFBUjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEdBQXFCOztnQkFDekQsVUFBVSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7O2dCQUNqRCxVQUFVLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVTtZQUV0RCxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRTtnQkFDaEQsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztnQkFFNUQsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzthQUMvQjtpQkFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUU7Z0JBQy9CLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztnQkFFL0MsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzthQUMvQjtpQkFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUU7Z0JBQy9CLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztnQkFFaEQsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzthQUMvQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sd0NBQU07Ozs7O0lBQWQsVUFBZSxJQUFTOztZQUNsQixNQUFNLEdBQUcsQ0FBQztRQUVkLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN4QixNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQTlDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsdUNBQWdEOztvQkFHaEQsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxtQkFBbUI7cUJBQzNCOztpQkFDRjs7OztnQkFaMkIsVUFBVTtnQkFEN0IsdUJBQXVCOztJQW9EaEMsOEJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQXRDWSx1QkFBdUI7Ozs7OztJQUNsQyx1Q0FBdUM7Ozs7O0lBRXJDLHVDQUF3Qjs7Ozs7SUFDeEIsb0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFkZVNjcm9sbEVmZmVjdFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL2ZhZGUtc2Nyb2xsLWVmZmVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3Jcbi8vIHRzbGludDpkaXNhYmxlOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWRlLXNjcm9sbC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhZGUtc2Nyb2xsLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsgJy4vZmFkZS1zY3JvbGwtaXRlbS5jb21wb25lbnQuc2NzcycgXSxcbiAgLy8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2ZhZGUtc2Nyb2xsX19pdGVtJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEZhZGVTY3JvbGxJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBjYXJkID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbTogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGZhZGVTY3JvbGxTZXJ2aWNlOiBGYWRlU2Nyb2xsRWZmZWN0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mYWRlU2Nyb2xsU2VydmljZS5zY3JvbGxQb3Muc3Vic2NyaWJlKCh2YWw6IFtudW1iZXIsIG51bWJlcl0pID0+IHtcbiAgICAgIGNvbnN0IHBvc0NhcmRUb3AgPSB0aGlzLm9mZnNldCh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgICBjb25zdCBwb3NDYXJkQm90ID0gdGhpcy5jYXJkLm9mZnNldEhlaWdodCArIHBvc0NhcmRUb3A7XG5cbiAgICAgIGlmICh2YWxbMF0gPD0gcG9zQ2FyZEJvdCAmJiB2YWxbMV0gPj0gcG9zQ2FyZFRvcCkge1xuICAgICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgwcHgpYDtcblxuICAgICAgICB0aGlzLmNhcmQuc3R5bGUub3BhY2l0eSA9IGAxYDtcbiAgICAgIH0gZWxzZSBpZiAodmFsWzBdIDw9IHBvc0NhcmRCb3QpIHtcbiAgICAgICAgdGhpcy5jYXJkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKDIwdmgpYDtcblxuICAgICAgICB0aGlzLmNhcmQuc3R5bGUub3BhY2l0eSA9IGAwYDtcbiAgICAgIH0gZWxzZSBpZiAodmFsWzFdID49IHBvc0NhcmRUb3ApIHtcbiAgICAgICAgdGhpcy5jYXJkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0yMHZoKWA7XG5cbiAgICAgICAgdGhpcy5jYXJkLnN0eWxlLm9wYWNpdHkgPSBgMGA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9mZnNldChlbGVtOiBhbnkpIHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcblxuICAgIHdoaWxlIChlbGVtLm9mZnNldFBhcmVudCkge1xuICAgICAgcmVzdWx0ICs9IGVsZW0ub2Zmc2V0VG9wO1xuICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FadeScrollEffectService } from './../../fade-scroll-effect.service';
import { Component, ElementRef } from '@angular/core';
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator
export class FadeScrollItemComponent {
    /**
     * @param {?} elem
     * @param {?} fadeScrollService
     */
    constructor(elem, fadeScrollService) {
        this.elem = elem;
        this.fadeScrollService = fadeScrollService;
        this.card = this.elem.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.fadeScrollService.scrollPos.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            /** @type {?} */
            const posCardTop = this.offset(this.elem.nativeElement);
            /** @type {?} */
            const posCardBot = this.card.offsetHeight + posCardTop;
            if (val[0] <= posCardBot && val[1] >= posCardTop) {
                this.elem.nativeElement.style.transform = `translateY(0px)`;
                this.card.style.opacity = `1`;
            }
            else if (val[0] <= posCardBot) {
                this.card.style.transform = `translateY(20vh)`;
                this.card.style.opacity = `0`;
            }
            else if (val[1] >= posCardTop) {
                this.card.style.transform = `translateY(-20vh)`;
                this.card.style.opacity = `0`;
            }
        }));
    }
    /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    offset(elem) {
        /** @type {?} */
        let result = 0;
        while (elem.offsetParent) {
            result += elem.offsetTop;
            elem = elem.offsetParent;
        }
        return result;
    }
}
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
FadeScrollItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FadeScrollEffectService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS1zY3JvbGwtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWRlLXNjcm9sbC1lZmZlY3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYWRlLXNjcm9sbC1pdGVtL2ZhZGUtc2Nyb2xsLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBYTlELE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBRWxDLFlBQ1UsSUFBZ0IsRUFDaEIsaUJBQTBDO1FBRDFDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUg1QyxTQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFJcEMsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEdBQXFCLEVBQUUsRUFBRTs7a0JBQzdELFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDOztrQkFDakQsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVU7WUFFdEQsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7Z0JBRTVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7YUFDL0I7aUJBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7Z0JBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7YUFDL0I7aUJBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7Z0JBRWhELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7YUFDL0I7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLE1BQU0sQ0FBQyxJQUFTOztZQUNsQixNQUFNLEdBQUcsQ0FBQztRQUVkLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN4QixNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsdUNBQWdEOztnQkFHaEQsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxtQkFBbUI7aUJBQzNCOzthQUNGOzs7O1lBWjJCLFVBQVU7WUFEN0IsdUJBQXVCOzs7Ozs7O0lBZTlCLHVDQUF1Qzs7Ozs7SUFFckMsdUNBQXdCOzs7OztJQUN4QixvREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWRlU2Nyb2xsRWZmZWN0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vZmFkZS1zY3JvbGwtZWZmZWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvclxuLy8gdHNsaW50OmRpc2FibGU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhZGUtc2Nyb2xsLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFkZS1zY3JvbGwtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyAnLi9mYWRlLXNjcm9sbC1pdGVtLmNvbXBvbmVudC5zY3NzJyBdLFxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZmFkZS1zY3JvbGxfX2l0ZW0nXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRmFkZVNjcm9sbEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGNhcmQgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZmFkZVNjcm9sbFNlcnZpY2U6IEZhZGVTY3JvbGxFZmZlY3RTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZhZGVTY3JvbGxTZXJ2aWNlLnNjcm9sbFBvcy5zdWJzY3JpYmUoKHZhbDogW251bWJlciwgbnVtYmVyXSkgPT4ge1xuICAgICAgY29uc3QgcG9zQ2FyZFRvcCA9IHRoaXMub2Zmc2V0KHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGNvbnN0IHBvc0NhcmRCb3QgPSB0aGlzLmNhcmQub2Zmc2V0SGVpZ2h0ICsgcG9zQ2FyZFRvcDtcblxuICAgICAgaWYgKHZhbFswXSA8PSBwb3NDYXJkQm90ICYmIHZhbFsxXSA+PSBwb3NDYXJkVG9wKSB7XG4gICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKDBweClgO1xuXG4gICAgICAgIHRoaXMuY2FyZC5zdHlsZS5vcGFjaXR5ID0gYDFgO1xuICAgICAgfSBlbHNlIGlmICh2YWxbMF0gPD0gcG9zQ2FyZEJvdCkge1xuICAgICAgICB0aGlzLmNhcmQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoMjB2aClgO1xuXG4gICAgICAgIHRoaXMuY2FyZC5zdHlsZS5vcGFjaXR5ID0gYDBgO1xuICAgICAgfSBlbHNlIGlmICh2YWxbMV0gPj0gcG9zQ2FyZFRvcCkge1xuICAgICAgICB0aGlzLmNhcmQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoLTIwdmgpYDtcblxuICAgICAgICB0aGlzLmNhcmQuc3R5bGUub3BhY2l0eSA9IGAwYDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb2Zmc2V0KGVsZW06IGFueSkge1xuICAgIGxldCByZXN1bHQgPSAwO1xuXG4gICAgd2hpbGUgKGVsZW0ub2Zmc2V0UGFyZW50KSB7XG4gICAgICByZXN1bHQgKz0gZWxlbS5vZmZzZXRUb3A7XG4gICAgICBlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19
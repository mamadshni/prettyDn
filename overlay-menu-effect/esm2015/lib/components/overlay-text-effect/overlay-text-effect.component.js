/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { OverlayMenuEffectService } from './../../overlay-menu-effect.service';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { overlayTextAnimation } from '../../overlay.animation';
// tslint:disable:component-selector
export class OverlayTextEffectComponent {
    /**
     * @param {?} overlayMenuEffectService
     * @param {?} cd
     */
    constructor(overlayMenuEffectService, cd) {
        this.overlayMenuEffectService = overlayMenuEffectService;
        this.cd = cd;
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription = this.overlayMenuEffectService.isMenuOpened.subscribe((/**
         * @param {?} condition
         * @return {?}
         */
        (condition) => {
            this.isOpen = condition;
            this.cd.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
OverlayTextEffectComponent.decorators = [
    { type: Component, args: [{
                selector: 'overlay-text-effect',
                template: "<div [@overlayTextAnimation]=\"isOpen ? 'out' : 'in'\">\n  <ng-content></ng-content>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [overlayTextAnimation()],
                styles: [""]
            }] }
];
/** @nocollapse */
OverlayTextEffectComponent.ctorParameters = () => [
    { type: OverlayMenuEffectService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    OverlayTextEffectComponent.prototype.isOpen;
    /** @type {?} */
    OverlayTextEffectComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    OverlayTextEffectComponent.prototype.overlayMenuEffectService;
    /**
     * @type {?}
     * @private
     */
    OverlayTextEffectComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS10ZXh0LWVmZmVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vdmVybGF5LW1lbnUtZWZmZWN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvb3ZlcmxheS10ZXh0LWVmZmVjdC9vdmVybGF5LXRleHQtZWZmZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUNMLFNBQVMsRUFFVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBRWpCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFXL0QsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFHckMsWUFDVSx3QkFBa0QsRUFDbEQsRUFBcUI7UUFEckIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUovQixXQUFNLEdBQUcsS0FBSyxDQUFDO0lBS1osQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUN0RSxDQUFDLFNBQWtCLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsMEdBQW1EO2dCQUVuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFVBQVUsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUM7O2FBQ3JDOzs7O1lBcEJRLHdCQUF3QjtZQU8vQixpQkFBaUI7Ozs7SUFlakIsNENBQWU7O0lBQ2Ysa0RBQTJCOzs7OztJQUV6Qiw4REFBMEQ7Ozs7O0lBQzFELHdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNZW51RWZmZWN0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vb3ZlcmxheS1tZW51LWVmZmVjdC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG92ZXJsYXlUZXh0QW5pbWF0aW9uIH0gZnJvbSAnLi4vLi4vb3ZlcmxheS5hbmltYXRpb24nO1xuLy8gdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ292ZXJsYXktdGV4dC1lZmZlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3ZlcmxheS10ZXh0LWVmZmVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL292ZXJsYXktdGV4dC1lZmZlY3QuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IFtvdmVybGF5VGV4dEFuaW1hdGlvbigpXVxufSlcbmV4cG9ydCBjbGFzcyBPdmVybGF5VGV4dEVmZmVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaXNPcGVuID0gZmFsc2U7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXlNZW51RWZmZWN0U2VydmljZTogT3ZlcmxheU1lbnVFZmZlY3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMub3ZlcmxheU1lbnVFZmZlY3RTZXJ2aWNlLmlzTWVudU9wZW5lZC5zdWJzY3JpYmUoXG4gICAgICAoY29uZGl0aW9uOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19
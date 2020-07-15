/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { OverlayMenuEffectService } from '../../overlay-menu-effect.service';
import { OverlayMenuDirective } from '../../directives/overlay-menu.directive';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ContentChild, Input } from '@angular/core';
import { overlayMenuAnimation } from '../../overlay.animation';
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator
// tslint:disable:no-input-rename
var OverlayMenuEffectComponent = /** @class */ (function () {
    function OverlayMenuEffectComponent(overlayMenuEffectService) {
        this.overlayMenuEffectService = overlayMenuEffectService;
    }
    Object.defineProperty(OverlayMenuEffectComponent.prototype, "changeState", {
        set: /**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            this.isOpen = open;
            this.overlayMenuEffectService.isMenuOpened.next(open);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OverlayMenuEffectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    OverlayMenuEffectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    OverlayMenuEffectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'overlay-menu-effect',
                    template: "<div class=overlay-menu__shadow overlayMenuShadow *ngIf=\"isOpen\"></div>\r\n<div class=\"overlay-menu__wrapper\" *ngIf=\"isOpen\">\r\n\r\n  <ng-container *ngTemplateOutlet=\"menuDirective.tmpRef\"></ng-container>\r\n\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    animations: [overlayMenuAnimation()],
                    host: {
                        class: 'overlay-menu__container',
                        '[@overlayMenuAnimation]': 'isOpen'
                    },
                    styles: [".overlay-menu__shadow{width:100%;height:100%;position:absolute;background:#eee;-webkit-filter:blur(20px);filter:blur(20px);opacity:.6}.overlay-menu__container{display:block;position:fixed;top:0;left:0;height:100%;width:100%}.overlay-menu__container.light .overlay-menu__shadow{background:#010101}.overlay-menu__container.light .overlay-menu__wrapper a{color:#eee}.overlay-menu__wrapper{position:relative;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;z-index:50}.overlay-menu__wrapper span{padding:2px 0;cursor:pointer;color:#000;line-height:64px;font-size:54px;font-weight:600;position:relative;font-family:Poppins,sans-serif}.overlay-menu__wrapper span a{color:#101010;text-decoration:none}@media only screen and (max-width:1466px){.overlay-menu__wrapper span{line-height:58px;font-size:48px}}@media only screen and (max-width:479px){.overlay-menu__wrapper span{line-height:46px;font-size:36px}}"]
                }] }
    ];
    /** @nocollapse */
    OverlayMenuEffectComponent.ctorParameters = function () { return [
        { type: OverlayMenuEffectService }
    ]; };
    OverlayMenuEffectComponent.propDecorators = {
        changeState: [{ type: Input, args: ['isOpen',] }],
        menuDirective: [{ type: ContentChild, args: [OverlayMenuDirective,] }]
    };
    return OverlayMenuEffectComponent;
}());
export { OverlayMenuEffectComponent };
if (false) {
    /** @type {?} */
    OverlayMenuEffectComponent.prototype.isOpen;
    /** @type {?} */
    OverlayMenuEffectComponent.prototype.menuDirective;
    /**
     * @type {?}
     * @private
     */
    OverlayMenuEffectComponent.prototype.overlayMenuEffectService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1tZW51LWVmZmVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vdmVybGF5LW1lbnUtZWZmZWN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvb3ZlcmxheS1tZW51LWVmZmVjdC9vdmVybGF5LW1lbnUtZWZmZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUNMLFNBQVMsRUFFVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFlBQVksRUFFWixLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFLL0Q7SUFxQkUsb0NBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQUcsQ0FBQztJQVAxRSxzQkFBcUIsbURBQVc7Ozs7O1FBQWhDLFVBQWlDLElBQWE7WUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsQ0FBQzs7O09BQUE7Ozs7SUFNRCw2Q0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7O0lBRWIsZ0RBQVc7OztJQUFYLGNBQWUsQ0FBQzs7Z0JBekJqQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsbVBBQWlEO29CQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFVBQVUsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUM7b0JBQ3BDLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUseUJBQXlCO3dCQUNoQyx5QkFBeUIsRUFBRSxRQUFRO3FCQUNwQzs7aUJBQ0Y7Ozs7Z0JBM0JRLHdCQUF3Qjs7OzhCQThCOUIsS0FBSyxTQUFDLFFBQVE7Z0NBS2QsWUFBWSxTQUFDLG9CQUFvQjs7SUFPcEMsaUNBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQWRZLDBCQUEwQjs7O0lBQ3JDLDRDQUFnQjs7SUFNaEIsbURBQXdFOzs7OztJQUU1RCw4REFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TWVudUVmZmVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9vdmVybGF5LW1lbnUtZWZmZWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgT3ZlcmxheU1lbnVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL292ZXJsYXktbWVudS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ29udGVudENoaWxkLFxuICBPbkRlc3Ryb3ksXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb3ZlcmxheU1lbnVBbmltYXRpb24gfSBmcm9tICcuLi8uLi9vdmVybGF5LmFuaW1hdGlvbic7XG4vLyB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3Jcbi8vIHRzbGludDpkaXNhYmxlOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuLy8gdHNsaW50OmRpc2FibGU6bm8taW5wdXQtcmVuYW1lXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ292ZXJsYXktbWVudS1lZmZlY3QnLFxuICB0ZW1wbGF0ZVVybDogJ292ZXJsYXktbWVudS1lZmZlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnb3ZlcmxheS1tZW51LWVmZmVjdC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW292ZXJsYXlNZW51QW5pbWF0aW9uKCldLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdvdmVybGF5LW1lbnVfX2NvbnRhaW5lcicsXG4gICAgJ1tAb3ZlcmxheU1lbnVBbmltYXRpb25dJzogJ2lzT3BlbidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBPdmVybGF5TWVudUVmZmVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBASW5wdXQoJ2lzT3BlbicpIHNldCBjaGFuZ2VTdGF0ZShvcGVuOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc09wZW4gPSBvcGVuO1xuICAgIHRoaXMub3ZlcmxheU1lbnVFZmZlY3RTZXJ2aWNlLmlzTWVudU9wZW5lZC5uZXh0KG9wZW4pO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZChPdmVybGF5TWVudURpcmVjdGl2ZSkgbWVudURpcmVjdGl2ZTogT3ZlcmxheU1lbnVEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5TWVudUVmZmVjdFNlcnZpY2U6IE92ZXJsYXlNZW51RWZmZWN0U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKSB7fVxufVxuIl19
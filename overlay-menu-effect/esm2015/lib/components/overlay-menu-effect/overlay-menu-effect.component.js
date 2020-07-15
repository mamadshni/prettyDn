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
export class OverlayMenuEffectComponent {
    /**
     * @param {?} overlayMenuEffectService
     */
    constructor(overlayMenuEffectService) {
        this.overlayMenuEffectService = overlayMenuEffectService;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    set changeState(open) {
        this.isOpen = open;
        this.overlayMenuEffectService.isMenuOpened.next(open);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
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
OverlayMenuEffectComponent.ctorParameters = () => [
    { type: OverlayMenuEffectService }
];
OverlayMenuEffectComponent.propDecorators = {
    changeState: [{ type: Input, args: ['isOpen',] }],
    menuDirective: [{ type: ContentChild, args: [OverlayMenuDirective,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1tZW51LWVmZmVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vdmVybGF5LW1lbnUtZWZmZWN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvb3ZlcmxheS1tZW51LWVmZmVjdC9vdmVybGF5LW1lbnUtZWZmZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUNMLFNBQVMsRUFFVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFlBQVksRUFFWixLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFpQi9ELE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFTckMsWUFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFBRyxDQUFDOzs7OztJQVAxRSxJQUFxQixXQUFXLENBQUMsSUFBYTtRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBTUQsUUFBUSxLQUFJLENBQUM7Ozs7SUFFYixXQUFXLEtBQUksQ0FBQzs7O1lBekJqQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsbVBBQWlEO2dCQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFVBQVUsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUM7Z0JBQ3BDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUseUJBQXlCO29CQUNoQyx5QkFBeUIsRUFBRSxRQUFRO2lCQUNwQzs7YUFDRjs7OztZQTNCUSx3QkFBd0I7OzswQkE4QjlCLEtBQUssU0FBQyxRQUFROzRCQUtkLFlBQVksU0FBQyxvQkFBb0I7Ozs7SUFObEMsNENBQWdCOztJQU1oQixtREFBd0U7Ozs7O0lBRTVELDhEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNZW51RWZmZWN0U2VydmljZSB9IGZyb20gJy4uLy4uL292ZXJsYXktbWVudS1lZmZlY3Quc2VydmljZSc7XG5pbXBvcnQgeyBPdmVybGF5TWVudURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvb3ZlcmxheS1tZW51LmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDb250ZW50Q2hpbGQsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvdmVybGF5TWVudUFuaW1hdGlvbiB9IGZyb20gJy4uLy4uL292ZXJsYXkuYW5pbWF0aW9uJztcbi8vIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvclxuLy8gdHNsaW50OmRpc2FibGU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1pbnB1dC1yZW5hbWVcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3ZlcmxheS1tZW51LWVmZmVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnb3ZlcmxheS1tZW51LWVmZmVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydvdmVybGF5LW1lbnUtZWZmZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBhbmltYXRpb25zOiBbb3ZlcmxheU1lbnVBbmltYXRpb24oKV0sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ292ZXJsYXktbWVudV9fY29udGFpbmVyJyxcbiAgICAnW0BvdmVybGF5TWVudUFuaW1hdGlvbl0nOiAnaXNPcGVuJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlNZW51RWZmZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpc09wZW46IGJvb2xlYW47XG4gIEBJbnB1dCgnaXNPcGVuJykgc2V0IGNoYW5nZVN0YXRlKG9wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzT3BlbiA9IG9wZW47XG4gICAgdGhpcy5vdmVybGF5TWVudUVmZmVjdFNlcnZpY2UuaXNNZW51T3BlbmVkLm5leHQob3Blbik7XG4gIH1cblxuICBAQ29udGVudENoaWxkKE92ZXJsYXlNZW51RGlyZWN0aXZlKSBtZW51RGlyZWN0aXZlOiBPdmVybGF5TWVudURpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXlNZW51RWZmZWN0U2VydmljZTogT3ZlcmxheU1lbnVFZmZlY3RTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBuZ09uRGVzdHJveSgpIHt9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HoveringLineFrom, HoveringTextPos } from './../module/interfaces';
import { Component, ViewEncapsulation, ElementRef, Renderer2, Attribute } from '@angular/core';
import { LIB_PREFIX } from '../module/params';
// tslint:disable:component-selector
// tslint:disable:use-host-property-decorator
var HoveringCircleComponent = /** @class */ (function () {
    function HoveringCircleComponent(el, renderer, lineFrom, textPose) {
        this.el = el;
        this.renderer = renderer;
        this.lineFrom = lineFrom;
        this.textPose = textPose;
    }
    /**
     * @return {?}
     */
    HoveringCircleComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.lineFrom) {
            if (HoveringLineFrom[this.lineFrom] != null) {
                this.renderer.addClass(this.el.nativeElement, "line-" + this.lineFrom);
            }
            else {
                console.error('Wrong Value For "From" Attribute in "Hovering Component"');
            }
        }
        if (this.textPose) {
            if (HoveringTextPos[this.textPose] != null) {
                this.renderer.addClass(this.el.nativeElement, "text-" + this.textPose);
            }
            else {
                console.error('Wrong Value For "textPose" Attribute in "Hovering Component"');
            }
        }
    };
    HoveringCircleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hovering-circle',
                    template: "<div class=\"lib-hovering-circle-svg__wrapper\">\n\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80 80\" xml:space=\"preserve\">\n    <circle class=\"lib-hovering-circle-svg__inner\" cx=\"50%\" cy=\"50%\" r=\"47.5%\"></circle>\n    <circle class=\"lib-hovering-circle-svg__outer\" cx=\"50%\" cy=\"50%\" r=\"47.5%\"></circle>\n  </svg>\n\n  <ng-content select=\"[hIcon] , [h-icon]\"></ng-content>\n\n  <div class=\"lib-hovering-circle__line\">\n    <div class=\"lib-hovering-circle__line-in\"></div>\n  </div>\n\n  <div class=\"lib-hovering-circle__text\">\n    <ng-content select=\"[hText] , [h-text] , h-text, hText\"></ng-content>\n  </div>\n\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: LIB_PREFIX + "-circle"
                    },
                    styles: [".lib-hovering-circle{position:absolute;box-sizing:border-box;padding:10px;width:60px;height:60px;font-size:1.3em}.lib-hovering-circle-svg__wrapper{position:relative;height:100%;width:100%;margin-top:0;pointer-events:initial;cursor:pointer;box-sizing:border-box}.lib-hovering-circle-svg__inner{fill:transparent;stroke:#000;stroke-width:5%;opacity:1;stroke-dashoffset:0;stroke-dasharray:360,1000}.lib-hovering-circle-svg__outer{fill:transparent;stroke:#000;stroke-width:5%;stroke-dasharray:239;stroke-dashoffset:239;-webkit-transform-origin:50%;transform-origin:50%;-webkit-transform:rotateX(180deg) rotateZ(270deg);transform:rotateX(180deg) rotateZ(270deg)}.lib-hovering-circle__line{width:100%;height:5%;position:absolute;bottom:0;right:50%;-webkit-transform-origin:100% -900%;transform-origin:100% -900%}.lib-hovering-circle__line-in{background-color:#000;width:0%;height:100%;position:relative}.lib-hovering-circle__text{width:10px;height:10px;color:#000;font-weight:600;font-size:.65em;text-align:left;white-space:nowrap;margin:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.lib-hovering-circle:hover .lib-hovering-circle-svg__inner{opacity:.2;transition:.3s}.lib-hovering-circle:hover .lib-hovering-circle-svg__outer{transition:stroke-dashoffset .3s ease-out .2s;stroke-dashoffset:0}.lib-hovering-circle:hover .lib-hovering-circle__line-in{-webkit-animation:.2s ease-in .1s lib-hoveringLine;animation:.2s ease-in .1s lib-hoveringLine}.lib-hovering-circle:hover .lib-hovering-icon{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);transition:.2s ease-out .3s}.lib-hovering-circle:hover .lib-hovering-text{transition:.3s ease-out .28s;opacity:1;right:2.5em;visibility:visible}.lib-hovering-icon{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) scale(.5);transform:translate(-50%,-50%) scale(.5);opacity:0;font-size:1em;transition:.2s ease-in-out}.lib-hovering-text{position:absolute;right:4em;top:50%;opacity:0;visibility:hidden;transition:.2s ease-in-out;margin:0;-webkit-transform:translate(0,-50%);transform:translate(0,-50%)}.line-top-left .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(180deg) rotateZ(180deg);transform:rotateX(180deg) rotateZ(180deg)}.line-top-left .lib-hovering-circle__line{-webkit-transform:rotateY(0) rotateZ(90deg);transform:rotateY(0) rotateZ(90deg)}.line-left-top .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(0) rotateZ(270deg);transform:rotateX(0) rotateZ(270deg)}.line-left-top .lib-hovering-circle__line{-webkit-transform:rotateZ(180deg) rotateY(180deg);transform:rotateZ(180deg) rotateY(180deg)}.line-right-top .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(180deg) rotateZ(90deg);transform:rotateX(180deg) rotateZ(90deg)}.line-right-top .lib-hovering-circle__line{-webkit-transform:rotateZ(180deg) rotateY(0);transform:rotateZ(180deg) rotateY(0)}.line-top-right .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(0) rotateZ(0);transform:rotateX(0) rotateZ(0)}.line-top-right .lib-hovering-circle__line{-webkit-transform:rotateZ(270deg) rotateY(180deg);transform:rotateZ(270deg) rotateY(180deg)}.line-bottom-right .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(180deg) rotateZ(0);transform:rotateX(180deg) rotateZ(0)}.line-bottom-right .lib-hovering-circle__line{-webkit-transform:rotateZ(270deg) rotateY(0);transform:rotateZ(270deg) rotateY(0)}.line-right-bottom .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(0) rotateZ(90deg);transform:rotateX(0) rotateZ(90deg)}.line-right-bottom .lib-hovering-circle__line{-webkit-transform:rotateZ(0) rotateY(180deg);transform:rotateZ(0) rotateY(180deg)}.line-left-bottom .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(180deg) rotateZ(270deg);transform:rotateX(180deg) rotateZ(270deg)}.line-left-bottom .lib-hovering-circle__line{-webkit-transform:rotateZ(0);transform:rotateZ(0)}.line-bottom-left .lib-hovering-circle-svg__outer{-webkit-transform:rotateX(0) rotateZ(180deg);transform:rotateX(0) rotateZ(180deg)}.line-bottom-left .lib-hovering-circle__line{-webkit-transform:rotateZ(90deg) rotateY(180deg);transform:rotateZ(90deg) rotateY(180deg)}.text-top .lib-hovering-circle__text{-webkit-transform:translate(-50%,-50%) rotateZ(90deg);transform:translate(-50%,-50%) rotateZ(90deg)}.text-top .lib-hovering-text{-webkit-transform:translate(0,-50%) rotateZ(0);transform:translate(0,-50%) rotateZ(0)}.text-right .lib-hovering-circle__text{-webkit-transform:translate(-50%,-50%) rotateZ(180deg);transform:translate(-50%,-50%) rotateZ(180deg)}.text-right .lib-hovering-text{-webkit-transform:translate(0,-50%) rotateZ(180deg);transform:translate(0,-50%) rotateZ(180deg)}.text-bottom .lib-hovering-circle__text{-webkit-transform:translate(-50%,-50%) rotateZ(270deg);transform:translate(-50%,-50%) rotateZ(270deg)}.text-bottom .lib-hovering-text{-webkit-transform:translate(0,-50%) rotateZ(180deg);transform:translate(0,-50%) rotateZ(180deg)}.text-left .lib-hovering-circle__text{-webkit-transform:translate(-50%,-50%) rotateZ(0);transform:translate(-50%,-50%) rotateZ(0)}.text-left .lib-hovering-text{-webkit-transform:translate(0,-50%) rotateZ(0);transform:translate(0,-50%) rotateZ(0)}@-webkit-keyframes lib-hoveringLine{0%{left:-100%;width:0%}50%{left:20%;width:85%}100%{left:95%;width:5%}}@keyframes lib-hoveringLine{0%{left:-100%;width:0%}50%{left:20%;width:85%}100%{left:95%;width:5%}}"]
                }] }
    ];
    /** @nocollapse */
    HoveringCircleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: HoveringLineFrom, decorators: [{ type: Attribute, args: ['from',] }] },
        { type: HoveringTextPos, decorators: [{ type: Attribute, args: ['textPos',] }] }
    ]; };
    return HoveringCircleComponent;
}());
export { HoveringCircleComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HoveringCircleComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    HoveringCircleComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    HoveringCircleComponent.prototype.lineFrom;
    /**
     * @type {?}
     * @private
     */
    HoveringCircleComponent.prototype.textPose;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXJpbmctY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hvdmVyaW5nLyIsInNvdXJjZXMiOlsibGliL2hvdmVyaW5nLWNpcmNsZS9ob3ZlcmluZy1jaXJjbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0UsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLFNBQVMsRUFDVCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFLOUM7SUFVRSxpQ0FDVSxFQUFjLEVBQ2QsUUFBbUIsRUFFQSxRQUEwQixFQUN2QixRQUF5QjtRQUovQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUVBLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBQ3RELENBQUM7Ozs7SUFFSixpREFBZTs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFRLElBQUksQ0FBQyxRQUFVLENBQUMsQ0FBQzthQUN4RTtpQkFBTTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUNYLDBEQUEwRCxDQUMzRCxDQUFDO2FBQ0g7U0FDRjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFRLElBQUksQ0FBQyxRQUFVLENBQUMsQ0FBQzthQUN4RTtpQkFBTTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUNYLDhEQUE4RCxDQUMvRCxDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUM7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsdXJCQUErQztvQkFFL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUssVUFBVSxZQUFTO3FCQUM5Qjs7aUJBQ0Y7Ozs7Z0JBbEJDLFVBQVU7Z0JBQ1YsU0FBUztnQkFMRixnQkFBZ0IsdUJBNEJwQixTQUFTLFNBQUMsTUFBTTtnQkE1Qk0sZUFBZSx1QkE2QnJDLFNBQVMsU0FBQyxTQUFTOztJQXdCeEIsOEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQTlCWSx1QkFBdUI7Ozs7OztJQUVoQyxxQ0FBc0I7Ozs7O0lBQ3RCLDJDQUEyQjs7Ozs7SUFFM0IsMkNBQXFEOzs7OztJQUNyRCwyQ0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb3ZlcmluZ0xpbmVGcm9tLCBIb3ZlcmluZ1RleHRQb3MgfSBmcm9tICcuLy4uL21vZHVsZS9pbnRlcmZhY2VzJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgQXR0cmlidXRlLFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTElCX1BSRUZJWCB9IGZyb20gJy4uL21vZHVsZS9wYXJhbXMnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3Jcbi8vIHRzbGludDpkaXNhYmxlOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob3ZlcmluZy1jaXJjbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG92ZXJpbmctY2lyY2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG92ZXJpbmctY2lyY2xlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogYCR7TElCX1BSRUZJWH0tY2lyY2xlYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEhvdmVyaW5nQ2lyY2xlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXG4gICAgQEF0dHJpYnV0ZSgnZnJvbScpIHByaXZhdGUgbGluZUZyb206IEhvdmVyaW5nTGluZUZyb20sXG4gICAgQEF0dHJpYnV0ZSgndGV4dFBvcycpIHByaXZhdGUgdGV4dFBvc2U6IEhvdmVyaW5nVGV4dFBvc1xuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmxpbmVGcm9tKSB7XG4gICAgICBpZiAoSG92ZXJpbmdMaW5lRnJvbVt0aGlzLmxpbmVGcm9tXSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBgbGluZS0ke3RoaXMubGluZUZyb219YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdXcm9uZyBWYWx1ZSBGb3IgXCJGcm9tXCIgQXR0cmlidXRlIGluIFwiSG92ZXJpbmcgQ29tcG9uZW50XCInXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGV4dFBvc2UpIHtcbiAgICAgIGlmIChIb3ZlcmluZ1RleHRQb3NbdGhpcy50ZXh0UG9zZV0gIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYHRleHQtJHt0aGlzLnRleHRQb3NlfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnV3JvbmcgVmFsdWUgRm9yIFwidGV4dFBvc2VcIiBBdHRyaWJ1dGUgaW4gXCJIb3ZlcmluZyBDb21wb25lbnRcIidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
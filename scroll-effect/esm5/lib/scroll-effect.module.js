/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ScrollEffectComponent } from './components/scroll-effect.component';
import { ScrollTitleDirective } from './directives/scroll-title.directive';
import { ScrollBackdropDirective } from './directives/scroll-backdrop.directive';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var ScrollEffectModule = /** @class */ (function () {
    function ScrollEffectModule() {
    }
    ScrollEffectModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ScrollEffectComponent,
                        ScrollTitleDirective,
                        ScrollBackdropDirective
                    ],
                    imports: [
                        CommonModule,
                        BrowserAnimationsModule
                    ],
                    exports: [
                        ScrollEffectComponent,
                        ScrollTitleDirective,
                        ScrollBackdropDirective
                    ]
                },] }
    ];
    return ScrollEffectModule;
}());
export { ScrollEffectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWVmZmVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zY3JvbGwtZWZmZWN0LyIsInNvdXJjZXMiOlsibGliL3Njcm9sbC1lZmZlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUUvRTtJQUFBO0lBZ0JrQyxDQUFDOztnQkFoQmxDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osdUJBQXVCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLHVCQUF1QjtxQkFDeEI7aUJBQ0Y7O0lBQ2lDLHlCQUFDO0NBQUEsQUFoQm5DLElBZ0JtQztTQUF0QixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nyb2xsRWZmZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Njcm9sbC1lZmZlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFNjcm9sbFRpdGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Njcm9sbC10aXRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2Nyb2xsQmFja2Ryb3BEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2Nyb2xsLWJhY2tkcm9wLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTY3JvbGxFZmZlY3RDb21wb25lbnQsXG4gICAgU2Nyb2xsVGl0bGVEaXJlY3RpdmUsXG4gICAgU2Nyb2xsQmFja2Ryb3BEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2Nyb2xsRWZmZWN0Q29tcG9uZW50LFxuICAgIFNjcm9sbFRpdGxlRGlyZWN0aXZlLFxuICAgIFNjcm9sbEJhY2tkcm9wRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsRWZmZWN0TW9kdWxlIHsgfVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, style, animate, transition, state } from '@angular/animations';
/**
 * @param {?=} duration
 * @return {?}
 */
export function fadeInOutAnim(duration = '200ms') {
    return trigger('fadeInOut', [
        transition('void => true', [
            style({ opacity: 0 }),
            animate(`${duration} ease`, style({ opacity: 1 }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate(`${duration} ease`, style({ opacity: 0 }))
        ])
    ]);
}
/**
 * @param {?=} duration
 * @return {?}
 */
export function opacity(duration = '200ms') {
    return trigger('opacity', [
        state('false', style({ opacity: 1 })),
        state('true', style({ opacity: 0 })),
        transition('false => true', animate(`${duration} cubic-bezier(.22,.68,.43,1.01)`)),
        transition('true => false', animate(`${duration} cubic-bezier(.56,.07,.78,.57)`))
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2Nyb2xsLWVmZmVjdC8iLCJzb3VyY2VzIjpbImxpYi9hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsS0FBSyxFQUNOLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRTdCLE1BQU0sVUFBVSxhQUFhLENBQUMsUUFBUSxHQUFHLE9BQU87SUFDOUMsT0FBTyxPQUFPLENBQUMsV0FBVyxFQUFFO1FBQzFCLFVBQVUsQ0FBQyxjQUFjLEVBQUU7WUFDekIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLFFBQVEsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25ELENBQUM7UUFDRixVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxRQUFRLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuRCxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPO0lBQ3hDLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUN4QixLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFcEMsVUFBVSxDQUNSLGVBQWUsRUFDZixPQUFPLENBQUMsR0FBRyxRQUFRLGlDQUFpQyxDQUFDLENBQ3REO1FBQ0QsVUFBVSxDQUNSLGVBQWUsRUFDZixPQUFPLENBQUMsR0FBRyxRQUFRLGdDQUFnQyxDQUFDLENBQ3JEO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgdHJpZ2dlcixcclxuICBzdHlsZSxcclxuICBhbmltYXRlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgc3RhdGVcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWRlSW5PdXRBbmltKGR1cmF0aW9uID0gJzIwMG1zJykge1xyXG4gIHJldHVybiB0cmlnZ2VyKCdmYWRlSW5PdXQnLCBbXHJcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IHRydWUnLCBbXHJcbiAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCB9KSxcclxuICAgICAgYW5pbWF0ZShgJHtkdXJhdGlvbn0gZWFzZWAsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSlcclxuICAgIF0pLFxyXG4gICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSksXHJcbiAgICAgIGFuaW1hdGUoYCR7ZHVyYXRpb259IGVhc2VgLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXHJcbiAgICBdKVxyXG4gIF0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BhY2l0eShkdXJhdGlvbiA9ICcyMDBtcycpIHtcclxuICByZXR1cm4gdHJpZ2dlcignb3BhY2l0eScsIFtcclxuICAgIHN0YXRlKCdmYWxzZScsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSksXHJcbiAgICBzdGF0ZSgndHJ1ZScsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXHJcblxyXG4gICAgdHJhbnNpdGlvbihcclxuICAgICAgJ2ZhbHNlID0+IHRydWUnLFxyXG4gICAgICBhbmltYXRlKGAke2R1cmF0aW9ufSBjdWJpYy1iZXppZXIoLjIyLC42OCwuNDMsMS4wMSlgKVxyXG4gICAgKSxcclxuICAgIHRyYW5zaXRpb24oXHJcbiAgICAgICd0cnVlID0+IGZhbHNlJyxcclxuICAgICAgYW5pbWF0ZShgJHtkdXJhdGlvbn0gY3ViaWMtYmV6aWVyKC41NiwuMDcsLjc4LC41NylgKVxyXG4gICAgKVxyXG4gIF0pO1xyXG59XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, style, animate, transition, state } from '@angular/animations';
/**
 * @param {?=} duration
 * @return {?}
 */
export function fadeInOutAnim(duration) {
    if (duration === void 0) { duration = '200ms'; }
    return trigger('fadeInOut', [
        transition('void => true', [
            style({ opacity: 0 }),
            animate(duration + " ease", style({ opacity: 1 }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate(duration + " ease", style({ opacity: 0 }))
        ])
    ]);
}
/**
 * @param {?=} duration
 * @return {?}
 */
export function opacity(duration) {
    if (duration === void 0) { duration = '200ms'; }
    return trigger('opacity', [
        state('false', style({ opacity: 1 })),
        state('true', style({ opacity: 0 })),
        transition('false => true', animate(duration + " cubic-bezier(.22,.68,.43,1.01)")),
        transition('true => false', animate(duration + " cubic-bezier(.56,.07,.78,.57)"))
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2Nyb2xsLWVmZmVjdC8iLCJzb3VyY2VzIjpbImxpYi9hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsS0FBSyxFQUNOLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRTdCLE1BQU0sVUFBVSxhQUFhLENBQUMsUUFBa0I7SUFBbEIseUJBQUEsRUFBQSxrQkFBa0I7SUFDOUMsT0FBTyxPQUFPLENBQUMsV0FBVyxFQUFFO1FBQzFCLFVBQVUsQ0FBQyxjQUFjLEVBQUU7WUFDekIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBSSxRQUFRLFVBQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuRCxDQUFDO1FBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNuQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDckIsT0FBTyxDQUFJLFFBQVEsVUFBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25ELENBQUM7S0FDSCxDQUFDLENBQUM7QUFDTCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsUUFBa0I7SUFBbEIseUJBQUEsRUFBQSxrQkFBa0I7SUFDeEMsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBQ3hCLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVwQyxVQUFVLENBQ1IsZUFBZSxFQUNmLE9BQU8sQ0FBSSxRQUFRLG9DQUFpQyxDQUFDLENBQ3REO1FBQ0QsVUFBVSxDQUNSLGVBQWUsRUFDZixPQUFPLENBQUksUUFBUSxtQ0FBZ0MsQ0FBQyxDQUNyRDtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHRyaWdnZXIsXHJcbiAgc3R5bGUsXHJcbiAgYW5pbWF0ZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHN0YXRlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmFkZUluT3V0QW5pbShkdXJhdGlvbiA9ICcyMDBtcycpIHtcclxuICByZXR1cm4gdHJpZ2dlcignZmFkZUluT3V0JywgW1xyXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiB0cnVlJywgW1xyXG4gICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXHJcbiAgICAgIGFuaW1hdGUoYCR7ZHVyYXRpb259IGVhc2VgLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpXHJcbiAgICBdKSxcclxuICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxIH0pLFxyXG4gICAgICBhbmltYXRlKGAke2R1cmF0aW9ufSBlYXNlYCwgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxyXG4gICAgXSlcclxuICBdKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wYWNpdHkoZHVyYXRpb24gPSAnMjAwbXMnKSB7XHJcbiAgcmV0dXJuIHRyaWdnZXIoJ29wYWNpdHknLCBbXHJcbiAgICBzdGF0ZSgnZmFsc2UnLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpLFxyXG4gICAgc3RhdGUoJ3RydWUnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpLFxyXG5cclxuICAgIHRyYW5zaXRpb24oXHJcbiAgICAgICdmYWxzZSA9PiB0cnVlJyxcclxuICAgICAgYW5pbWF0ZShgJHtkdXJhdGlvbn0gY3ViaWMtYmV6aWVyKC4yMiwuNjgsLjQzLDEuMDEpYClcclxuICAgICksXHJcbiAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAndHJ1ZSA9PiBmYWxzZScsXHJcbiAgICAgIGFuaW1hdGUoYCR7ZHVyYXRpb259IGN1YmljLWJlemllciguNTYsLjA3LC43OCwuNTcpYClcclxuICAgIClcclxuICBdKTtcclxufVxyXG4iXX0=
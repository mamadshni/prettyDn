import {
  trigger,
  state,
  style,
  transition,
  animate,
  stagger,
  query,
  group
} from '@angular/animations';

const cubic = 'cubic-bezier(.22,.68,.43,1.01)';

export const fadeShowGallery = trigger('fadeFilter', [
  state('in', style({ opacity: 1 })),

  transition(':enter', [
    group([
      query(':self', [ style({ opacity: 0 }), animate(150) ]),

      query('[detailImage]', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        stagger('100ms', [
          animate(
            `300ms 200ms ${cubic}`,
            style({ opacity: 1, transform: 'translateY(0px)' })
          )
        ])
      ]),

      query('[rightBtn]', [
        style({ opacity: 0, transform: 'translate(100px,-50%)' }),
        stagger('100ms', [
          animate(
            `300ms 200ms ${cubic}`,
            style({ opacity: 1, transform: 'translate(0%,-50%)' })
          )
        ])
      ]),

      query('[leftBtn]', [
        style({ opacity: 0, transform: 'translate(-100px,-50%)' }),
        stagger('100ms', [
          animate(
            `300ms 200ms ${cubic}`,
            style({ opacity: 1, transform: 'translate(0%,-50%)' })
          )
        ])
      ])
    ])
  ]),

  transition(':leave', [
    group([
      query('[detailImage]', [
        stagger('80ms', [
          animate(
            `250ms 0ms ${cubic}`,
            style({ opacity: 0, transform: 'translateY(50px)' })
          )
        ])
      ]),

      query('[rightBtn]', [
        stagger('100ms', [
          animate(
            `300ms 200ms ${cubic}`,
            style({ opacity: 0, transform: 'translate(100px,-50%)' })
          )
        ])
      ]),

      query('[leftBtn]', [
        stagger('100ms', [
          animate(
            `300ms 200ms ${cubic}`,
            style({ opacity: 0, transform: 'translate(-100px,-50%)' })
          )
        ])
      ])
    ]),

    animate(100, style({ opacity: 0 }))
  ])
]);

export const imageChangeGallery = trigger('move', [
  transition(':decrement', [
    group([
      query('[moveImage]', [
        style({ transform: 'translateX(200px)' }),
        animate(`300ms ${cubic}`, style({ transform: 'translateX(0px)' }))
      ]),
      query('[detailImage]', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        stagger('100ms', [
          animate(
            `300ms 200ms ${cubic}`,
            style({ opacity: 1, transform: 'translateY(0px)' })
          )
        ])
      ])
    ])
  ]),
  transition(':increment', [
    group([
      query('[moveImage]', [
        style({ transform: 'translateX(-200px)' }),
        animate(`300ms ${cubic}`, style({ transform: 'translateX(0px)' }))
      ]),
      query('[detailImage]', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        stagger('100ms', [
          animate(
            `300ms 200ms ${cubic}`,
            style({ opacity: 1, transform: 'translateY(0px)' })
          )
        ])
      ])
    ])
  ])
]);

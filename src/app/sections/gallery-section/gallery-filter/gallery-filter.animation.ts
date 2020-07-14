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

export const fadeGalleryFilter = trigger('fadeFilter', [
  state('in', style({ opacity: 1 })),

  transition(':enter', [
    group([
      query(':self', [ style({ opacity: 0 }), animate(150) ]),

      query('[filterItems]', [
        style({ opacity: 0, transform: 'translateY(100px)' }),
        stagger('100ms', [
          animate(
            `300ms 200ms ${cubic}`,
            style({ opacity: 1, transform: 'translateY(0px)' })
          )
        ])
      ])
    ])
  ]),

  transition(':leave', [
    query('[filterItems]', [
      stagger('80ms', [
        animate(
          `250ms 0ms ${cubic}`,
          style({ opacity: 0, transform: 'translateY(100px)' })
        )
      ])
    ]),

    animate(100, style({ opacity: 0 }))
  ])
]);

export const filterItems = trigger('transformFilterItems', [
  transition(':enter', [])
]);

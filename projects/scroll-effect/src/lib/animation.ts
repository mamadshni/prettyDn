import {
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/animations';

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

export function opacity(duration = '200ms') {
  return trigger('opacity', [
    state('false', style({ opacity: 1 })),
    state('true', style({ opacity: 0 })),

    transition(
      'false => true',
      animate(`${duration} cubic-bezier(.22,.68,.43,1.01)`)
    ),
    transition(
      'true => false',
      animate(`${duration} cubic-bezier(.56,.07,.78,.57)`)
    )
  ]);
}

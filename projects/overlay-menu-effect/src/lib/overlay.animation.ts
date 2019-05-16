import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger
} from '@angular/animations';

export function overlayTextAnimation(duration = 400) {
  return trigger('overlayTextAnimation', [
    state('in', style({ opacity: 1, transform: 'translateY(0px)' })),
    state('out', style({ opacity: 0, transform: 'translateY(200px)' })),
    state('void', style({ opacity: 0, transform: 'translateY(200px)' })),

    transition('* => in', [
      animate(`${duration}ms 450ms cubic-bezier(.22,.68,.43,1.01)`)
    ]),

    transition('in => out', [
      animate(
        `${duration - 100}ms 100ms cubic-bezier(.56,.07,.78,.57)`,
        style({ opacity: 0, transform: 'translateY(-150px)' })
      )
    ])
  ]);
}

export function overlayMenuAnimation() {
  return trigger('overlayMenuAnimation', [
    transition(':enter', [
      query(
        '[listItems]',
        style({ opacity: 0, transform: 'translateY(70px)' })
      ),
      query(
        '[listItems]',
        stagger('100ms', [
          animate(
            '0.3s 300ms cubic-bezier(.22,.68,.43,1.01)',
            style({ opacity: 1, transform: 'translateY(0px)' })
          )
        ])
      )
    ]),
    transition(':leave', [
      query('[listItems]', style({ opacity: 1 })),
      query(
        '[listItems]',
        stagger('50ms', [
          animate(
            '0.25s 50ms cubic-bezier(.56,.07,.78,.57)',
            style({ opacity: 0, transform: 'translateY(-80px)' })
          )
        ])
      )
    ])
  ]);
}


import { animate, style, transition, trigger, query, stagger, keyframes } from "@angular/animations";

export const staggerWords = trigger('staggerWords', [
    transition('* => *', [ 
      query(':enter', [
          style({
            opacity: 0,
            transform: 'translateY(0%)'
        }),
          stagger(100, [
            animate('1s ease-in',keyframes([
                style({ opacity: 0.3, transform: 'translateY(0%)'}),
                style({ opacity: 0.8 }),
                style({ opacity: 1 }),
            ])),
          ])
        ], { optional: true }
      )
    ])
  ])

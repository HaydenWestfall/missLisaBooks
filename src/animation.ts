import { animate, state, style, transition, trigger } from "@angular/animations";



export const animatedBackground = trigger('animatedBackground', [
    state('animate', style({
        left: '10px', // use interpolation
    }), {params: {left: '10px'}}), // default parameters values required
]);

export const showForm = trigger('showForm', [
    transition(":enter", [
        style({ bottom: '-100%', }), //apply default styles before animation starts
        animate( "500ms ease-in-out", style({ bottom: 0 }))
    ]),
    transition(":leave", [
        style({ bottom: 0, }), //apply default styles before animation starts
        animate( "425ms ease-out", style({ bottom: '-100%' }))
    ]),
]);

export const fadeInOut = trigger('fadeInOut', [
    transition(":enter", [
        style({ opacity: 0 }), //apply default styles before animation starts
        animate( "500ms ease-in-out", style({ opacity: 1 }))
    ]),
    transition(":leave", [
        style({ opacity: 1, }), //apply default styles before animation starts
        animate( "425ms ease-out", style({ opacity: 0 }))
    ]),
]);

export const fadeInOutQuick = trigger('fadeInOutQuick', [
    transition(":enter", [
        style({ opacity: 0 }), //apply default styles before animation starts
        animate( "250ms 150ms ease-in-out", style({ opacity: 1 }))
    ]),
    transition(":leave", [
        style({ opacity: 1, }), //apply default styles before animation starts
        animate( "250ms ease-out", style({ opacity: 0 }))
    ]),
]);
    
    
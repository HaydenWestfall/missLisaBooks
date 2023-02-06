import { animate, style, transition, trigger } from "@angular/animations";



export const panelSlideIn = trigger('panelSlideIn', [
    transition(":enter", [
        style({ left: '100vw', }), //apply default styles before animation starts
        animate( "500ms ease-in-out", style({ left: 0 }))
    ]),
    transition(":leave", [
        style({ left: 0, }), //apply default styles before animation starts
        animate( "425ms ease-out", style({ left: '100vw' }))
    ]),
]);

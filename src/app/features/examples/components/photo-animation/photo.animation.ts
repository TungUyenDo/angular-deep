import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const photoAnimation = trigger('photoAnimation', [
    state('show', style({
        opacity: 1
    })),
    
    state('hide', style({
        opacity: 0
    })),
    
    state('enlarge', style({
        transform: 'scale(1.5)',
    })),
    
    state('spin', style({
        transform: ' rotateZ(180deg)',
    })),
    
    state('move', style({
        transform: 'translateX(-100%)',
    })),
    
    
    transition('* => move',
            animate('2000ms', keyframes([
                        style({transform: 'translateX(0)    rotateY(0)', offset: 0}),
                        style({transform: 'translateX(50%)  rotateY(90deg)', offset: 0.33}),
                        style({transform: 'translateY(-75%) rotateY(180deg)', offset: 0.66}),
                        style({transform: 'translateX(-100%)', offset: 1.0})
                    ])
            )),
    
    transition('* => *', animate('700ms ease')),
]);

import {animate, group, keyframes, sequence, state, style, transition, trigger} from '@angular/animations';


export const complexSequenceAnimation = trigger('complexSequenceAnimation', [
    state('red', style({
        backgroundColor: 'red'
    })),
    state('blue', style({
        backgroundColor: 'blue'
    })),
    transition('* => *', [
        group([
            animate('2s', style({
                backgroundColor: 'violet',
            })),
    
            animate('1s', style({
                height: '50rem',
            }))
        ])
        // animate('3s', keyframes([
        //     style({
        //         backgroundColor: 'violet',
        //         height: '5rem',
        //         offset: 0.2
        //     }),
        //     style({
        //         backgroundColor: 'green',
        //         height: '20rem',
        //         offset: 0.8
        //     }),
        //     style({
        //         backgroundColor: 'brown',
        //         height: '50rem',
        //         offset: 1
        //     })
        // ]))
    ])
]);

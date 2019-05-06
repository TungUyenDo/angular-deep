import {animate, state, style, transition, trigger} from '@angular/animations';


export const basicAnimation = trigger('basicAnimation', [
    state('red', style({
        backgroundColor: 'red'
    })),
    state('blue', style({
        backgroundColor: 'blue'
    })),
        transition('* => *', [
            animate('1s', style({
                backgroundColor: 'green',
                height: '50rem'
            }))
        ])
        // transition('void <=> *', [
        //         animate('2s', style({
        //             backgroundColor: 'green'
        //         }))
        // ]),
        // transition('red <=> blue', [
        //         animate('1s', style({
        //             height: '50rem'
        //         }))
        // ])
]);

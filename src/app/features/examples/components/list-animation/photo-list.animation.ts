import {animate, group, query, stagger, style, transition, trigger} from '@angular/animations';

export const photoListAnimation = trigger('photoListAnimation', [
    
    transition('* => *', [
        group([
            animate('500ms',
                    style({
                                'background-color': 'black'
                            }
                    )),
            query(':enter', [
                style({
                    transform: 'translateX(-400%)'
                }),
                stagger(100, [
                    animate(500, style({transform: 'translateX(0)'}))
                ])
            ], {optional: true}),
            
            query(':leave', [
                stagger(100, [
                    animate(500, style({transform: 'translateX(-400%)'}))
                ])
            ], {optional: true})
        ])
    ]),
]);

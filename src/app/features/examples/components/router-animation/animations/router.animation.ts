import {
    trigger,
    animate,
    transition,
    style,
    query, group, useAnimation, AnimationReferenceMetadata, animation, AnimationGroupMetadata
} from '@angular/animations';
import {slideInLeft, slideInRight} from '../../../../../shared/animations/slide-in';
import {slideOutLeft, slideOutRight} from '../../../../../shared/animations/slide-out';

const leftTransition: AnimationGroupMetadata = group([
    query(
            ':enter',
            [
                useAnimation(slideInRight)
            ],
            {optional: true}
    ),
    query(
            ':leave',
            [
                useAnimation(slideOutLeft)
            ],
            {optional: true}
    ),
]);

const rightTransition: AnimationGroupMetadata = group([
    query(
            ':enter',
            [
                useAnimation(slideInLeft)
            ],
            {optional: true}
    ),
    query(
            ':leave',
            [
                useAnimation(slideOutRight)
            ],
            {optional: true}
    ),
]);

export const routerAnimation = trigger('routerAnimation', [
    transition('void => *', [
        style({
            opacity: 0
        }),
        animate('1s', style({
            opacity: 1
        }))
    ]),
    transition('* => right', [rightTransition]),
    transition('* => left', [leftTransition]),
]);

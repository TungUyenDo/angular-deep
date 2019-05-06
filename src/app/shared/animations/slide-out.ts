import {animate, animation, AnimationReferenceMetadata, keyframes, style} from '@angular/animations';

export const slideOutRight: AnimationReferenceMetadata = animation(
        [
            animate(
                    500,
                    keyframes([
                        style({
                            transform: `translate3d(-100%, 0, 0)`
                        }),
                        style({
                            transform: `translate3d(0, 0, 0)`,
                            visibility: 'hidden'
                        })
                    ])
            )
        ]
);

export const slideOutLeft: AnimationReferenceMetadata = animation(
        [
            animate(
                    500,
                    keyframes([
                        style({
                            transform: `translate3d(-100%, 0, 0)`
                        }),
                        style({
                            transform: `translate3d(-200%, 0, 0)`,
                            visibility: 'hidden'
                        })
                    ])
            )
        ]
);

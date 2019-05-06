import {animate, animation, AnimationReferenceMetadata, keyframes, style} from '@angular/animations';

export const slideInLeft: AnimationReferenceMetadata = animation(
        [
            animate(
                    500,
                    keyframes([
                        style({
                            transform: `translate3d(-100%, 0, 0)`,
                            visibility: 'visible'
                        }),
                        style({
                            transform: `translate3d(0, 0, 0)`
                        })
                    ])
            )
        ]
);

export const slideInRight: AnimationReferenceMetadata = animation(
        [
            animate(
                    500,
                    keyframes([
                        style({
                            transform: `translate3d(100%, 0, 0)`,
                            visibility: 'visible'
                        }),
                        style({
                            transform: `translate3d(0, 0, 0)`
                        })
                    ])
            )
        ]
);

import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {squash} from './squash.animation';

@Component({
    selector: 'counter-animation',
    templateUrl: './counter-animation.component.html',
    styleUrls: ['./counter-animation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [squash]
})
export class CounterAnimationComponent {
    
    version = 6;
    
    constructor(
            private cd: ChangeDetectorRef
    ) {
    }
    
    modify(n: number) {
        this.version += n;
        this.cd.detectChanges();
    }
    
}

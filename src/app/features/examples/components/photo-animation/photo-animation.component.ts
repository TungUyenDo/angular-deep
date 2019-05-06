import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {photoAnimation} from './photo.animation';

@Component({
    selector: 'photo-animation',
    templateUrl: './photo-animation.component.html',
    styleUrls: ['./photo-animation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [photoAnimation]
})
export class PhotoAnimationComponent implements OnInit, AfterViewInit, OnDestroy {
    
    animate = 'show';
    
    constructor(
            private cd: ChangeDetectorRef
    ) {
    }
    
    ngOnInit() {
    
    }
    
    ngAfterViewInit(): void {
    
    }
    
    ngOnDestroy(): void {
    }
    
    changeAnimationState = (state = 'show') => {
        this.animate = state;
        this.cd.detectChanges();
    }
    
}

import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaygroundComponent implements OnInit, AfterViewInit, OnDestroy {
    
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
    
    
}

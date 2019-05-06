import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'examples',
    templateUrl: './examples.component.html',
    styleUrls: ['./examples.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit, AfterViewInit, OnDestroy {
    
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

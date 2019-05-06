import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {basicAnimation} from './basic.animation';

@Component({
    selector: 'basic',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss'],
    animations: [
        basicAnimation
    ]
})
export class BasicComponent implements OnInit, AfterViewInit, OnDestroy {
    
    animateState: 'red' | 'blue' = 'red';
    
    active = true;
    
    constructor() {
    }
    
    ngOnInit() {
    
    }
    
    ngAfterViewInit(): void {
    
    }
    
    ngOnDestroy(): void {
    }
    
    modify = (state: 'red' | 'blue') => {
        this.animateState = state;
    };
    
    toggle = () => {
        this.active = !this.active;
    };
}

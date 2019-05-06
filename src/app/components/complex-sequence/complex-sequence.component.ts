import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {complexSequenceAnimation} from './complex-sequence.animation';

@Component({
  selector: 'complex-sequence',
  templateUrl: './complex-sequence.component.html',
  styleUrls: ['./complex-sequence.component.scss'],
  animations: [
    complexSequenceAnimation
  ]
})
export class ComplexSequenceComponent implements OnInit, AfterViewInit, OnDestroy {
  
  animateState: 'red' | 'blue' = 'red';
  
  active = true;

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

import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'fourth-page',
  template: `<p>fourth-page  works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FourthPageComponent implements OnInit, AfterViewInit, OnDestroy {

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

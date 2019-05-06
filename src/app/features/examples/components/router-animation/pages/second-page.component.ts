import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'second-page',
  template: `<p>second-page  works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondPageComponent implements OnInit, AfterViewInit, OnDestroy {

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

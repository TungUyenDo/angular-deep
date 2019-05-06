import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'third-page',
  template: `<p>third-page  works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdPageComponent implements OnInit, AfterViewInit, OnDestroy {

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

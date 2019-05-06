import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'first-page',
  template: `<p>first-page  works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstPageComponent implements OnInit, AfterViewInit, OnDestroy {

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

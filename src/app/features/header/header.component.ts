import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

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

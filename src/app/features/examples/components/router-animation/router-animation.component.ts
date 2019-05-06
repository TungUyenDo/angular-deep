import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {routerAnimation} from './animations/router.animation';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterOutlet} from '@angular/router';


@Component({
    selector: 'router-animation',
    templateUrl: './router-animation.component.html',
    styleUrls: ['./router-animation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [routerAnimation]
})
export class RouterAnimationComponent implements OnInit, AfterViewInit, OnDestroy {
    
    transitionState: 'default' | 'left' | 'right' = 'default';
    
    previousRouteIndex = 0;
    
    constructor(
            private cd: ChangeDetectorRef,
            private router: Router,
            private _route: ActivatedRoute
    ) {
    }
    
    ngOnInit() {
        
        this.previousRouteIndex = this._route.snapshot.firstChild.data['index'];
        
        this.router.events.subscribe((e) => {
            
            
            if (e instanceof NavigationStart) {
                this.transitionState = 'default';
                this.cd.detectChanges();
            }
            if (e instanceof NavigationEnd) {
                const currentRouteIndex = this._route.snapshot.firstChild.data['index'];
                
                this.transitionState = this.previousRouteIndex > currentRouteIndex ? 'left' : 'right';
                
                this.previousRouteIndex = currentRouteIndex;
                
                this.cd.detectChanges();
            }
        });
    }
    
    ngAfterViewInit(): void {
    
    }
    
    ngOnDestroy(): void {
    }
    
    animationStart = (e) => {
        console.log(e);
    };
    
    animationDone = (e) => {
        console.log(e);
    };
    
}

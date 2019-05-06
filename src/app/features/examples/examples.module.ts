import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExamplesComponent} from './examples.component';
import {RouterModule} from '@angular/router';
import {PhotoAnimationComponent} from './components/photo-animation/photo-animation.component';
import {AzoraModule} from 'azora';
import {ListAnimationComponent} from './components/list-animation/list-animation.component';
import {RouterAnimationComponent} from './components/router-animation/router-animation.component';
import {FirstPageComponent} from './components/router-animation/pages/first-page.component';
import {SecondPageComponent} from './components/router-animation/pages/second-page.component';
import {ThirdPageComponent} from './components/router-animation/pages/third-page.component';
import {FourthPageComponent} from './components/router-animation/pages/fourth-page.component';
import {examplesRoutes} from './examples.routes';
import { CounterAnimationComponent } from './components/counter-animation/counter-animation.component';


@NgModule({
    imports: [
        CommonModule,
        AzoraModule,
        RouterModule.forChild(examplesRoutes)
    ],
    declarations: [
        ExamplesComponent,
        PhotoAnimationComponent,
        ListAnimationComponent,
        RouterAnimationComponent,
        FirstPageComponent,
        SecondPageComponent,
        ThirdPageComponent,
        FourthPageComponent,
        CounterAnimationComponent
    ]
})
export class ExamplesModule {
}

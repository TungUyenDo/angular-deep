import {Routes} from '@angular/router';
import {ExamplesComponent} from './examples.component';
import {FirstPageComponent} from './components/router-animation/pages/first-page.component';
import {SecondPageComponent} from './components/router-animation/pages/second-page.component';
import {ThirdPageComponent} from './components/router-animation/pages/third-page.component';
import {FourthPageComponent} from './components/router-animation/pages/fourth-page.component';

export const examplesRoutes: Routes = [
    {
        path: '', component: ExamplesComponent, children: [
            {path: '', redirectTo: 'page-1', pathMatch: 'full'},
            {path: 'page-1', component: FirstPageComponent, data: {index: 0}},
            {path: 'page-2', component: SecondPageComponent, data: {index: 1}},
            {path: 'page-3', component: ThirdPageComponent, data: {index: 2}},
            {path: 'page-4', component: FourthPageComponent, data: {index: 3}}
        ]
    }
];

import {Routes} from '@angular/router';

export const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'playground'},
    {path: 'playground', loadChildren: './features/playground/playground.module#PlaygroundModule'},
    {path: 'examples', loadChildren: './features/examples/examples.module#ExamplesModule'},
];

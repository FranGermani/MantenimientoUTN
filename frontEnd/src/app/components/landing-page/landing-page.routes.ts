import {Routes} from '@angular/router';
import { BodyComponent } from './body/body.component';

export const landingPageRoutes: Routes = [
    {
        path:'', 
        component: BodyComponent,
        data: {title: 'Landing Page'}
    }
];
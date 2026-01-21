import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataBidingConcept } from './concepts/data-biding-concept/data-biding-concept';
import { DirectivesComponent } from './concepts/directive-concept/directive.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'data-binding',component:DataBidingConcept},
    {path:'directives', component:DirectivesComponent}
];

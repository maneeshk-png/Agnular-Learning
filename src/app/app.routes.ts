import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataBidingConcept } from './concepts/data-biding-concept/data-biding-concept';
import { DirectivesComponent } from './concepts/directive-concept/directive.component';
import { ParentComponent } from './concepts/component-communication-concept/parent/parent.component';
import { ObservableComponent } from './concepts/observable-concept/observable.component';
import { RxjsComponent } from './concepts/rxjs-concept/rxjs.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'data-binding',component:DataBidingConcept},
    {path:'directives', component:DirectivesComponent},
    {path:'component-communication',component:ParentComponent},
    {path:'observable',component:ObservableComponent},
    {path:'rxjs' ,component:RxjsComponent}
];

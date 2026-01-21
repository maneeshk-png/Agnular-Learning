import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataBidingConcept } from './concepts/data-biding-concept/data-biding-concept';
import { DirectivesComponent } from './concepts/directive-concept/directive.component';
import { ParentComponent } from './concepts/component-communication-concept/parent/parent.component';
import { ObservableComponent } from './concepts/observable-concept/observable.component';
import { RxjsComponent } from './concepts/rxjs-concept/rxjs.component';
import { TemplateFormComponent } from './concepts/template-form-concept/template-form.component';
import { ReactiveFormComponent } from './concepts/reactive-form-concept/reactive-form.component';
import { LoginComponent } from './concepts/guards-concept/pages/login/login.component';
import { DashboardComponent } from './concepts/guards-concept/pages/dashboard/dashboard.component';
import { AuthGuard } from './concepts/guards-concept/gaurd/auth.guard';
//import { ApiTestComponent } from './concepts/interceptor-concept/pages/api-test/api-test.component';
import { UiStateComponent } from './concepts/ui-state-concept/pages/ui-state.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'data-binding',component:DataBidingConcept},
    {path:'directives', component:DirectivesComponent},
    {path:'component-communication',component:ParentComponent},
    {path:'observable',component:ObservableComponent},
    {path:'rxjs' ,component:RxjsComponent},
    {path:'forms',component:TemplateFormComponent},
    {path:'reactive-forms',component:ReactiveFormComponent},
    {path:'guard' ,component:LoginComponent},
    {path:'guards/login',component:LoginComponent},
    {path: 'guards/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
    },
    {
        path:'ui-state',
        component:UiStateComponent
    }

];

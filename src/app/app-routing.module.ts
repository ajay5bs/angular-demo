import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { NgZoneTestComponent } from './ng-zone-test/ng-zone-test.component';

const routes: Routes = [
  { path: 'reactiveforms', component: ReactiveFormsComponent },
  { path: 'lifecycle', component: LifeCycleComponent },
  { path: '',   redirectTo: '/reactiveforms', pathMatch: 'full' }, // redirect to `EmployeeRegistrationComponent`
  { path: 'ngZone', component: NgZoneTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

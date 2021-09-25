import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { NgZoneTestComponent } from './ng-zone-test/ng-zone-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    LifeCycleComponent,
    NgZoneTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

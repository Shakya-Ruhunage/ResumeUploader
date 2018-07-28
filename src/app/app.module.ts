import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginModule } from '@app/login';
import { AdminModule } from '@app/admin';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { routing } from './app.routing';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    LoginModule,
    AdminModule,
    // route module
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

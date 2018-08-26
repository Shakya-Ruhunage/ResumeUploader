import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login-view/login.component';
import { routing } from './login.routing';

import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

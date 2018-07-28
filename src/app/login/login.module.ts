import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login-view/login.component';
import { routing } from './login.routing';
import { RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    routing
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

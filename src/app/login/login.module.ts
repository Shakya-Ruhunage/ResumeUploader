import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login-view/login.component';
import { routing } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    routing
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

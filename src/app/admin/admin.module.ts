import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin-view/admin.component';
import { FileUploadComponent } from './file-upload-view/file-upload.component';
import { SearchComponent } from './search-view/search.component';
import {FileUpdateViewComponent} from './file-update-view/file-update-view.component'

import { routing } from './admin-routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot() 
  ],
  declarations: [
    AdminComponent,
    FileUploadComponent,
    SearchComponent,
    FileUpdateViewComponent
    
  ]
})
export class AdminModule { }

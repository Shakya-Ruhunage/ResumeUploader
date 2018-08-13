import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin-view/admin.component';
import { FileUploadComponent } from './file-upload-view/file-upload.component';
import { SearchComponent } from './search-view/search.component';

import { routing } from './admin-routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    AdminComponent,
    FileUploadComponent,
    SearchComponent
  ]
})
export class AdminModule { }
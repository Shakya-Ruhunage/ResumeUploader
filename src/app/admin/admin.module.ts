import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin-view/admin.component';
import { FileUploadComponent } from './file-upload-view/file-upload.component';
import { SearchComponent } from './search-view/search.component';

import { routing } from './admin-routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    AdminComponent,
    FileUploadComponent,
    SearchComponent
  ]
})
export class AdminModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  options = ['Select an Option','Sales','Human Resources','IT','Law','Other'];
  
  constructor() { }

  ngOnInit() {
  }

}

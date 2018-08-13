import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isFileUpload : boolean ;
  isSearch : boolean;
  isUpdate : boolean;
  panelTypes: Object;

  constructor() {
    this.panelTypes = {
      'upload': true,
      'search': false,
      'update': false
    }
   }

  ngOnInit() {
  }

  public showFileUploadPanel(): void {
    this.isFileUpload = true;
    this.isSearch = false;
    this.isUpdate = false;
  }

  public showSearchPanel() : void{
    this.isSearch = true;
    this.isFileUpload = false;
    this.isUpdate = false;
  }

  public showPanel(showKey: string): void {
    console.log('showKey', showKey)
     for (let key in this.panelTypes) {
       key === showKey ? this.panelTypes[key] = true: 
                        this.panelTypes[key] = false; 
      console.log( this.panelTypes[key], ' this.panelTypes[key]');
     }
  }
  
}

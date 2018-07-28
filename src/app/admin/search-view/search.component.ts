import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  options = ['Select an Option','Sales','Human Resources','IT','Law','Other'];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-olist',
  templateUrl: './olist.component.html',
  styleUrls: ['./olist.component.css']
})
export class OlistComponent implements OnInit {
  public odata:'I am a child';
  constructor() { }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {
public display :string;
  constructor() { }
  ngOnInit() {
   
  }
onClick(name:string):void
{
alert(name)
}
}

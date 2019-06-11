import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})

export class SpinnerComponent implements OnInit {

  constructor() { }
  @Output() SpinEvent = new EventEmitter<boolean>();
  Spin = false;
  ngOnInit() {
  }

}

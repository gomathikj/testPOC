import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-p',
  // templateUrl: './child-p.component.html',
  template:`<h3>{{message}}</h3>
  <button (click)="sendmessage()">send message</button>`,
  styleUrls: ['./child-p.component.css']
})
export class ChildPComponent implements OnInit {

@Input() message:string;

messagefromchild:string="message from child";
@Output() messageEvent=new EventEmitter<string>();
@Output() SpinEvent= new EventEmitter<boolean>();
spinstart:boolean=false;

constructor() { }

LoadSpin($event)
{
  this.spinstart=$event;
}

sendmessage()
{
 this.spinstart=true;
 this.SpinEvent.emit(true);
 setTimeout(() => {
 this.messageEvent.emit(this.messagefromchild)  
 }, 100);
 this.SpinEvent.emit(false);
}

ngOnInit() {
}

}

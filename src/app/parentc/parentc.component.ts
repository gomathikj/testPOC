import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { GetsiblingsComponent } from '../getsiblings/getsiblings.component';
//import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { ChildPComponent } from '../child-p/child-p.component';

@Component({
  selector: 'app-parentc',
  // <app-child-p (messageEvent)="receivemessagefromchild($event)"></app-child-p>
  //templateUrl: './parentc.component.html',  <app-child-p [message]="message" ></app-child-p>
  template:` 
  <h1>Parent view</h1>
  message:{{messagefromchild}}
  <app-child-p (messageEvent)="receivemessagefromchild($event)"></app-child-p>

  <app-getsiblings></app-getsiblings>
  msval:{{val1}}{{val2}}{{val3}}
  msspin:{{spinstart}}
  <app-spinner *ngIf="spinstart"></app-spinner>
   `,
  styleUrls: ['./parentc.component.css']
})

//<app-child-p (spinStart)="LoadSpin($event)"</app-child-p>
//   <div *ngIf="spinstart" ></div>
export class ParentcComponent implements AfterViewInit {
  
  @ViewChild(GetsiblingsComponent) child;
  //@ViewChild(SpinnerComponent) spinning;
  @ViewChild(ChildPComponent) bspin;

  constructor() { }
  message :string;
  val1: string;
  val2:string;
  val3:number; 
  messagefromchild="i am a parent";
  spinstart: boolean=false;

 ngOnInit() {
 this.val1 =this.child.val1;
 this.val2= this.child.val2;
 this.val3= this.child.val3;
 } 

ngAfterViewInit(){
 
}

LoadSpin($event)
{
  this.spinstart=$event;
}

receivemessagefromchild($event)
{
  this.LoadSpin(true);
 // this.spinning=this.spinstart;
 //this.spinstart=this.bspin;
  setTimeout(() => {
  this.messagefromchild=$event
  this.LoadSpin(false);
  //this.spinning=false;
  //this.spinstart=false;
}, 10000);

}

}

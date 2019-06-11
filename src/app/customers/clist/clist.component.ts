import { Component, OnInit,Input,Output,EventEmitter, ElementRef, OnChanges } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import {NgxPrintModule} from 'ngx-print';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'app-clist',
  templateUrl: './clist.component.html',

  // template: `<h1>Hello {{pname}}!</h1>`,
  // template: `<h3 (click)="onClick.emit('Neo')">This is the hello component. I received a string '{{MyInputTest}}' from the app component. Click me to see the effect</h3>`,
  styleUrls: ['./clist.component.css']
})
export class ClistComponent  implements OnChanges {
  emp :Employee={
    EmployeeId:1,
    EmplName:'gomathi',
    Address:'blr',
    Department:'software'
  }
  ss= 'Passed value from ts';

  embed1= "width=\"100%\"";
  embed2= "height=\"100%\"/>";
  embed="<embed   type=\"application/pdf\" src=\"assets/images/HolidayCalendar.pdf\" id=\"pdfDocument\"" + this.embed1 +this.embed2 
  
  hclick(event)
  {
    console.log('test writing to the log file')
    document.write(this.embed);
  }
  
@Input() MyInputname: string;
@Input() name: string;
@Input() MyInputTest : string;
@Output() onClick=new EventEmitter()
@Input('section') section:string;
@Output() sectionChange = new EventEmitter<any>(); 
show :boolean=true;

//public pdata:'I am a parent';
constructor(private ele:ElementRef){
  if(this.section===undefined)
  this.section = '';
}
 ngOnInit() {
}
ngOnChanges(changes){
  if(changes.section && changes.section.currentValue!==undefined
  && changes.section.currentValue!==''){
     
  }
}

afterPrint(){
  console.log("after print");
  this.ele.nativeElement.children[0].innerHTML = '';
  this.sectionChange.emit(''); 
  this.section = '';
}

Show()
{
  this.show=!this.show;
}

ss5(){
  var printContents = document.getElementById('printpage').innerHTML;
    var popup = window.open('', '_blank', 'width=800,height=600');
    popup.document.open();
    popup.document.write('<html><head>' +
      +'<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css"'
      + ' media="all">'
      + '<link rel="stylesheet" href="style.css" media="all">'
      + '</head><body onload="window.print()">' + printContents + '</html>');
    popup.document.close();
  
}

  printDiv() {
    var printContents = document.getElementById('printpage').innerHTML;
    if (window) {
      if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var popup = window.open('', '_blank',
          'width=600,height=600,scrollbars=no,menubar=no,toolbar=no,'
          + 'location=no,status=no,titlebar=no');

        popup.window.focus();
        popup.document.write('<!DOCTYPE html><html><head>  '
          + '<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css" '
          + 'media="screen,print">'
          + '<link rel="stylesheet" href="style.css" media="screen,print">'
          + '</head><body onload="window.print()"><div class="reward-body">'
          + printContents + '</div></html>');
        popup.onbeforeunload = function (event) {
          popup.close();
          return '.\n';
        };
        popup.onabort = function (event) {
          popup.document.close();
          popup.close();
        }
      } else {
        var popup = window.open('', '_blank', 'width=800,height=600');
        popup.document.open();
        popup.document.write('<html><head>' +
          +'<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css"'
          + ' media="all">'
          + '<link rel="stylesheet" href="style.css" media="all">'
          + '</head><body onload="window.print()">' + printContents + '</html>');
        popup.document.close();
      }

      popup.document.close();
    }



   

  }

// fetchStylesheets(){
// var output:string= '';
// for(var i=0;i<document.styleSheets.length;i++){
//  output = output +' <link rel="stylesheet" type="text/css" href="'+    
//           window.document.styleSheets[0].href +'" /> ';
// }
// return output;
// }

// fetchscriptSheets(){
// var output:string= '';
// for(var i=0;i<document.scripts.length;i++){
//  output = output +' <script type="text/javascript" src="'+    
//           window.document.scripts[0].src +'" /> ';
// }
// return output;
// }
}

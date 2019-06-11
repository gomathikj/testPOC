import { Component } from '@angular/core';
//import {NgxPrintModule} from 'ngx-print';
import { DomSanitizer } from '@angular/platform-browser';
import { Http, ResponseContentType } from '@angular/http';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
ng ='Angualar test'
result=''
title = 'testpoc';
name = 'Angular 5';
fileUrl;
url = '';

embed1= "width=\"100%\"";
embed2= "height=\"100%\"/>";
embed="<embed   type=\"application/pdf\" src=\"assets/images/HolidayCalendar.pdf\" id=\"pdfDocument\"" + this.embed1 +this.embed2 

constructor(private sanitizer: DomSanitizer) {  }
ngOnInit() {   
}

upCase(st: string) {
  this.result=st.toUpperCase()
}

onSelectFile(event)
{  
let reader = new FileReader();
reader.onload = function (event){
    let fileUrl1 = (<FileReader>event.target).result;
    document.getElementById('iVBORw0KGgoAAAANSUhEUgAAAQoAAAFmCAMAAACiIyTaAAABv1BMVEUAAAB5S0dJSkpISkpLTU3pSzzoTD3oSzzoTD3kSjvoTD1GRUbeSDpFREVCQULpSzzoTD3c3d3gSTrg4uDm5uZFRETbRznoTD3oTD1JR0iXlYXaRzncRzhBQUDnSjtNS0zUzsdnZmVLSEpMSEoyNjPm5eSZmYfm6ekzNTOloI42ODbm6Oiioo/h4eEzODbm5+eop5SiopCiopDl396hloaDg3ToTD3m5uZMS03///9RTlAAAADy8vIgICA2NzY4OzYPM0fa29qgoI7/zMnj4+PW19VGRkbqPi7v7/D6+vr09fXyTj4rKSvhSTo/Pj/oSDnlMyLsNCI0MTP0///tTT7ZRjizOi+6PDDmLRyenZ7oKRfExMT/TzvobGEVFBWGhYUAGjLW8/ToXVADLUZ8e33/2tfRRTdWVFTFQDT1u7aSkZIADib+5eFwcHHW+/z70tDwkIesPTPW6+teXV2xsbG7u7vY4+Lre3DMzM2qp6jilIxsPT7lg3kdO07m/f4AJjuwsJzftK/fpZ7woJjoVUZBWGj1zMdTaXfcvrrzq6Tby8f+8u8wSlYZNDaQRUKfr7d9j5lpf4vx5ePMsLF/o64s+PNlAAAANnRSTlMAC1IoljoZWm2yloPRGWiJfdjEEk037Esq7Pn24EKjpiX+z7rJNNWB5pGxZ1m2mZY/gXOlr43C+dBMAAAmkklEQVR42uzay86bMBAF4MnCV1kCeQFIRn6M8xZe+v1fpVECdtPSy5822Bi+JcujmfEApl3IIRhBFyIJ3Em6UMTDSKfHsOB0dhILQ2fX4+4aF0tVXC3yJJB4OrcJV1msIhJN52avslhpZOfcvyepfceIaARw5t2CWTwYRhSQTdSum1TGqE5Mr0kg6Ukj66hZ3GExaEaJQsYIWXzmd6P2KHxn6NjG4/BDMEQ6R').onchange = (e: any) => {
      let files = e.target.files[0];
}
}
}

onPrintFile(event) {
var popupWin;
var printContents;
const data = 'D:\Tryouts\testpoc\src\assets\images\MichaelFarris.jpg';
const image = new Blob([data],  { type: 'application/octet-stream' });
this.fileUrl='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='

printContents = document.getElementById('print-section').innerHTML;
popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
popupWin.document.open();
popupWin.document.write("\n      <html>\n        <head>\n          <title></title>\n        </head>\n    <body onload=\"window.print();window.close()\">" + this.embed+ printContents + "</body>\n      </html>");
popupWin.document.close();
}

printDocument(event) {
var doc = document.getElementById('print-section').innerHTML;
var popupWin;
popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
popupWin.document.open();
popupWin.document.write("\n      <html>\n        <head>\n          <title></title>\n        </head>\n    <body onload=\"window.print();window.close()\">" +  doc + "</body>\n      </html>");
popupWin.document.close();
}

/* Print File */
onPrintFileTest(event)  {
   var popupWin;
  
   const data = 'D:\Tryouts\testpoc\src\assets\images\MichaelFarris.jpg';
  // return this.loanService.downloadTempDocument('idd.pdf').toPromise().then((data: any) => {
    const image = new Blob([data], { type: 'application/pdf' });
  
    const fileURL = window.URL.createObjectURL(image);
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
   
    var iframe = "<iframe onload=\"isLoaded()\" id=\"pdf\" name=\"pdf\" src='" + fileURL + "' width=\"100%\" height=\"100%\"></iframe>";
   
    var isLoaded = "<script> function isLoaded() { setTimeout(function(){  var pdfFrame = window.frames[\"pdf\"]; pdfFrame.focus(); pdfFrame.print(); pdfFrame.close();},1000); } </script> ";
    popupWin.document.write("\n      <html>\n        <head>\n          <title></title>\n        </head>\n    <body onload=\"window.print();window.close()\"> \n" +  this.embed + "</body>\n      </html>");
    //popupWin.document.write("\n <html>\n <head>\n<title>Print Document</title>\n </head>\n<body> pdfFrame.print(); pdfFrame.close()" + embed  + "</body>\n  </html>");
    popupWin.document.close();
  //   Promise.resolve(true);
  // });
}  

Loading()
{
  setTimeout(() => {
    
  }, 1000);
}

process()
{

}
// /* Print File */
// onPrintFileTest(documentId: number, mimeType: string): Promise<any> {
//   var popupWin;

//   return this.loanService.downloadTempDocument('idd.pdf').toPromise().then((data: any) => {
//     const image = new Blob([data], { type: 'application/pdf' });
  
//     const fileURL = window.URL.createObjectURL(image);
//     popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
   
//     var iframe = "<iframe onload=\"isLoaded()\" id=\"pdf\" name=\"pdf\" src='" + fileURL + "' width=\"100%\" height=\"100%\"></iframe>";
//     var isLoaded = "<script> function isLoaded()      { setTimeout(function(){  var pdfFrame = window.frames[\"pdf\"];         pdfFrame.focus();        pdfFrame.print(); pdfFrame.close();},1000);     } </script> ";


//     popupWin.document.write("\n <html>\n <head>\n<title>Print Document</title>\n </head>\n<body>" + iframe  + isLoaded + "</body>\n  </html>");
//     popupWin.document.close();
//     Promise.resolve(true);
//   });
// }  

}
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

 public spinnerObsevable = new Subject <boolean>();

 ShowonLoad() {
   this.spinnerObsevable.next(true);
 }
 HideLoadComplete() {
   this.spinnerObsevable.next(false);
 }
}

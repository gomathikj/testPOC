import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClistComponent} from './clist/clist.component';

const routes: Routes = [
  {
    path:'',
    component: ClistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

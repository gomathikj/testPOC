import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OlistComponent} from './olist/olist.component';

const routes: Routes = [
  {path:'',
  component:OlistComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }

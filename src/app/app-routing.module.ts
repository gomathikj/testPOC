import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exe1Component } from './exe1/exe1.component';
import { ParentcComponent } from './parentc/parentc.component';


const routes: Routes = [
  {
path:'customers',
loadChildren:'./customers/customers.module#CustomersModule'
},
{
path: 'orders',
loadChildren: './orders/orders.module#OrdersModule'
},
{
  path:'Employeeinfo',
loadChildren:'./Employeeinfo/emp.module#EmpModule'
},
{
  path: 'exe1',
component: Exe1Component
},
{
  path: 'parentc',
  component: ParentcComponent
},
// {
// path: '',
// redirectTo: '',
// pathMatch: 'full'
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

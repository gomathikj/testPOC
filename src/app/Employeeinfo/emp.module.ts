import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpRoutingModule } from './emp-routing.module';
import { EmplistComponent } from './emplist/emplist.component';


@NgModule({
  declarations: [EmplistComponent],

  imports: [
    CommonModule,
    EmpRoutingModule
  ]
})
export class EmpModule {
 }

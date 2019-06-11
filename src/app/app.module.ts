import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { Exe1Component } from './exe1/exe1.component';
import { ParentcComponent } from './parentc/parentc.component';
import { ChildPComponent } from './child-p/child-p.component';

import { SpinnerComponent } from './shared/spinner/spinner.component';
import { GetsiblingsComponent } from './getsiblings/getsiblings.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftbarComponent,
    Exe1Component,
    ParentcComponent,
    ChildPComponent,
    SpinnerComponent,
    GetsiblingsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

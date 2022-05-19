import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { GetLoanComponent } from './get-loan/get-loan.component';
import { RemoveLoanComponent } from './remove-loan/remove-loan.component';


@NgModule({
  declarations: [
    AppComponent,
    AddLoanComponent,
    GetLoanComponent,
    RemoveLoanComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

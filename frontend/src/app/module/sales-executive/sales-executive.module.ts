import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesExecutiveRoutingModule } from './sales-executive-routing.module';
import { CustomerAllDocComponent } from './customer-all-doc/customer-all-doc.component';
import { LoanRequestApplicationComponent } from './loan-request-application/loan-request-application.component';
import { PendingApplicationComponent } from './pending-application/pending-application.component';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SalesDashboardComponent,
    LoanRequestApplicationComponent,
    CustomerAllDocComponent,
    PendingApplicationComponent,
    ViewApplicationComponent
  ],
  imports: [
    CommonModule,
    SalesExecutiveRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SalesExecutiveModule { }

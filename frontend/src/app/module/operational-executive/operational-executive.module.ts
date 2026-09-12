import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalExecutiveRoutingModule } from './operational-executive-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewEnquiryComponent } from './new-enquiry/new-enquiry.component';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { EnquiryDetailComponent } from './enquiry-detail/enquiry-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    NewEnquiryComponent,
    EnquiryListComponent,
    EnquiryDetailComponent,

  ],
  imports: [
    CommonModule,
    OperationalExecutiveRoutingModule,
    ReactiveFormsModule

    
  ]
})
export class OperationalExecutiveModule { }

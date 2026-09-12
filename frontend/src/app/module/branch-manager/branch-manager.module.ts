import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchManagerRoutingModule } from './branch-manager-routing.module';
import { ApplicantDocComponent } from './applicant-doc/applicant-doc.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApprovalStatusComponent } from './approval-status/approval-status.component';


@NgModule({
  declarations: [
    ApplicantDocComponent,
    ApplicantDetailComponent,
    ApplicantComponent,
    DashboardComponent,
    ApprovalStatusComponent
  ],
  imports: [
    CommonModule,
    BranchManagerRoutingModule,
    ReactiveFormsModule
  ]
})
export class BranchManagerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountHeadRoutingModule } from './account-head-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VarifiedApplicantComponent } from './varified-applicant/varified-applicant.component';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';
import { SanctionApplicantComponent } from './sanction-applicant/sanction-applicant.component';
import { UploadSanctionLetterComponent } from './upload-sanction-letter/upload-sanction-letter.component';


@NgModule({
  declarations: [
    DashboardComponent,
    VarifiedApplicantComponent,
    SanctionLetterComponent,
    SanctionApplicantComponent,
    UploadSanctionLetterComponent
  ],
  imports: [
    CommonModule,
    AccountHeadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountHeadModule { }

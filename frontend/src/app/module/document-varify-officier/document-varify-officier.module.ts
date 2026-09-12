import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentVarifyOfficierRoutingModule } from './document-varify-officier-routing.module';
import { DocumentVarificationComponent } from './document-varification/document-varification.component';
import { VarificationStatusComponent } from './varification-status/varification-status.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DocumentVarificationComponent,
    VarificationStatusComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DocumentVarifyOfficierRoutingModule,
    ReactiveFormsModule
  ]
})
export class DocumentVarifyOfficierModule { }

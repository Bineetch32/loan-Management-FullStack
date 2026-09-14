import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadgerOfficerRoutingModule } from './leadger-officer-routing.module';
import { LedgerComponent } from './ledger/ledger.component';

@NgModule({
  declarations: [LedgerComponent],
  imports: [
    CommonModule,
    LeadgerOfficerRoutingModule
  ]
})
export class LeadgerOfficerModule { }

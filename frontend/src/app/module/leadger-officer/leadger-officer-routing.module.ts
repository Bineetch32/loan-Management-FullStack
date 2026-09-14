import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LedgerComponent } from './ledger/ledger.component';

const routes: Routes = [
  { path: '', component: LedgerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadgerOfficerRoutingModule { }

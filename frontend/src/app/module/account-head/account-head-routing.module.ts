import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VarifiedApplicantComponent } from './varified-applicant/varified-applicant.component';
import { SanctionApplicantComponent } from './sanction-applicant/sanction-applicant.component';
import { UploadSanctionLetterComponent } from './upload-sanction-letter/upload-sanction-letter.component';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';

const routes: Routes = [
  { path: '', redirectTo: 'ah/va', pathMatch: 'full' },
  {
    path: 'ah',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'va', pathMatch: 'full' },
      { path: 'va', component: VarifiedApplicantComponent },
      { path: 'sa', component: SanctionApplicantComponent },
      { path: 'sl', component: SanctionLetterComponent },
      { path: 'sl/:id', component: SanctionLetterComponent },
      { path: 'usl', component: UploadSanctionLetterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountHeadRoutingModule { }

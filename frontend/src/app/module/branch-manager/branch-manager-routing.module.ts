import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import { ApplicantDocComponent } from './applicant-doc/applicant-doc.component';

const routes: Routes = [

  {
    path:'', redirectTo:'bd',pathMatch:'full'
     },
     
  {
    path:'bd',component:DashboardComponent,
    children:[
     
      {
        path:'applicant',component:ApplicantComponent,
        children:[
      {
            path:'ad/:id',component:ApplicantDetailComponent

      }]},
      
      {
        path:'adoc',component:ApplicantDocComponent
  }
        
      
    ]
  }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchManagerRoutingModule { }

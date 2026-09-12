import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';
import { LoanRequestApplicationComponent } from './loan-request-application/loan-request-application.component';
import { PendingApplicationComponent } from './pending-application/pending-application.component';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { CustomerAllDocComponent } from './customer-all-doc/customer-all-doc.component';

const routes: Routes = [

  {
    path:'', redirectTo:'sd',pathMatch:'full'
     },
  {
    path:'sd',component:SalesDashboardComponent,
    children:[
      {
        path:'lra',component:LoanRequestApplicationComponent
      },
      {
        path:'pa',component:PendingApplicationComponent
      },
      {
        path:'va',component:ViewApplicationComponent
      },
      {
        path:'cad',component:CustomerAllDocComponent
      }
    ]
  }



];






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesExecutiveRoutingModule { }

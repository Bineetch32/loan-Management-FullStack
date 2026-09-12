import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VarificationStatusComponent } from './varification-status/varification-status.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentVarificationComponent } from './document-varification/document-varification.component';

const routes: Routes = [

  {
    path:'', redirectTo:'dvod',pathMatch:'full'
     },
     
  {
    path:'dvod',component:DashboardComponent,
    children:[
     
      {
        path:'doc',component:DocumentVarificationComponent,
      },
      {
            path:'vs',component:VarificationStatusComponent
      }  
      
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentVarifyOfficierRoutingModule { }

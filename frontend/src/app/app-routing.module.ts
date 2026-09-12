import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path:'salesexecutive',
    loadChildren: () => import('./module/sales-executive/sales-executive.module').then(m => m.SalesExecutiveModule)
  },
  {
    path:'operationalexecutive',
    loadChildren: () => import('./module/operational-executive/operational-executive.module').then(m => m.OperationalExecutiveModule)
  },
  {
    path:'documentverificationofficer',
    loadChildren: () => import('./module/document-varify-officier/document-varify-officier.module').then(m => m.DocumentVarifyOfficierModule)
  },
  {
    path:'accounthead',
    loadChildren: () => import('./module/account-head/account-head.module').then(m => m.AccountHeadModule)
  },

  {
    path:'leadegr',
    loadChildren: () => import('./module/leadger-officer/leadger-officer.module').then(m =>m.LeadgerOfficerModule)
  

  },
  {
    path:'branchmanager',
    loadChildren: () => import('./module/branch-manager/branch-manager.module').then(m =>m.BranchManagerModule)
  },

  { path: "**", redirectTo: "/home", pathMatch: 'full' }, // Redirect to HomeComponent for unmatched routes
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }


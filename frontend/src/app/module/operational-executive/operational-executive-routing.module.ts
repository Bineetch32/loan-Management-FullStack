import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryDetailComponent } from './enquiry-detail/enquiry-detail.component';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { NewEnquiryComponent } from './new-enquiry/new-enquiry.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'od/ne',
    pathMatch: 'full'
  },
  {
    path: 'od',
    component: DashboardComponent,
    children: [
      {
        path: 'ne',
        component: NewEnquiryComponent
      },
      {
        path: 'el',
        component: EnquiryListComponent
      },
      {
        path: 'ed/:id',
        component: EnquiryDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalExecutiveRoutingModule { }

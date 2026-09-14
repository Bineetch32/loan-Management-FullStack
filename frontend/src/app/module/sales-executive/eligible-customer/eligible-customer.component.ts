import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry } from '../../../model/enquiry';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-eligible-customer',
  templateUrl: './eligible-customer.component.html',
  styleUrl: './eligible-customer.component.css'
})
export class EligibleCustomerComponent implements OnInit {

  eligibleCustomers: Enquiry[] = [];

  constructor(private commonservice: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.commonservice.getEnquiryall().subscribe(enquiries => {
      this.commonservice.getApplicationData().subscribe(applications => {
        const appliedEnquiryIds = new Set<number>();
        const appliedMobiles = new Set<string>();
        const appliedPans = new Set<string>();

        applications.forEach((application: CustomerDetails) => {
          if (application.enq?.id != null) {
            appliedEnquiryIds.add(application.enq.id);
          }
          if (application.customerMobileno != null) {
            appliedMobiles.add(String(application.customerMobileno));
          }
          if (application.customerPanNo) {
            appliedPans.add(application.customerPanNo.trim().toUpperCase());
          }
        });

        const uniqueCustomers = new Map<number, Enquiry>();

        enquiries
          .filter(enq => enq.eligiblity && enq.eligiblity.toLowerCase() === 'eligible')
          .filter(enq => !appliedEnquiryIds.has(enq.id)
            && !appliedMobiles.has(String(enq.customerMobileno))
            && !appliedPans.has((enq.customerPanNo || '').trim().toUpperCase()))
          .forEach(enq => {
            if (enq.id != null && !uniqueCustomers.has(enq.id)) {
              uniqueCustomers.set(enq.id, enq);
            }
          });

        this.eligibleCustomers = Array.from(uniqueCustomers.values());
      });
    });
  }

  proceed(id: number): void {
    this.router.navigate(['/salesexecutive/sd/lra'], {
      queryParams: { enquiryId: id }
    });
  }
}

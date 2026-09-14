import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../../../model/enquiry';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-eligible-customer',
  templateUrl: './eligible-customer.component.html',
  styleUrl: './eligible-customer.component.css'
})
export class EligibleCustomerComponent implements OnInit {

  eligibleCustomers: Enquiry[] = [];

  constructor(private commonservice: CommonService) { }

  ngOnInit(): void {
    this.commonservice.getEnquiryall().subscribe(data => {
      const uniqueCustomers = new Map<number, Enquiry>();

      data
        .filter(enq => enq.eligiblity && enq.eligiblity.toLowerCase() === 'eligible')
        .forEach(enq => {
          if (enq.id != null && !uniqueCustomers.has(enq.id)) {
            uniqueCustomers.set(enq.id, enq);
          }
        });

      this.eligibleCustomers = Array.from(uniqueCustomers.values());
    });
  }
}

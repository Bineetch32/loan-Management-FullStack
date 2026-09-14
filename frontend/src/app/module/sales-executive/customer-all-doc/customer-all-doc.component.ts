import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-customer-all-doc',
  templateUrl: './customer-all-doc.component.html',
  styleUrl: './customer-all-doc.component.css'
})
export class CustomerAllDocComponent implements OnInit {
  retrievedDoc: CustomerDetails[] = [];
  selectedCustomer: CustomerDetails;

  constructor(private commonservice: CommonService, private location: Location) { }

  ngOnInit(): void {
    this.commonservice.getApplicationData().subscribe(data => {
      this.retrievedDoc = data;
    });
  }

  viewDocuments(customer: CustomerDetails): void {
    this.selectedCustomer = customer;
  }

  back(): void {
    this.selectedCustomer = undefined;
  }
}

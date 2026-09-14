import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-applicant-detail',
  templateUrl: './applicant-detail.component.html',
  styleUrl: './applicant-detail.component.css'
})
export class ApplicantDetailComponent implements OnInit {

  customerObject: CustomerDetails;

  constructor(
    private routes: ActivatedRoute,
    private common: CommonService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.routes.paramMap.subscribe(param1 => {
      const id = Number(param1.get('id'));

      this.common.getCustomerDetailsById(id).subscribe(data => {
        this.customerObject = data;
      });
    });
  }

  getback() {
    this.location.back();
  }
}

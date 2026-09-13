import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enquiry } from '../../../model/enquiry';
import { CommonService } from '../../../service/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-enquiry-detail',
  templateUrl: './enquiry-detail.component.html',
  styleUrls: ['./enquiry-detail.component.css']
})
export class EnquiryDetailComponent implements OnInit {

  enquirydetail: Enquiry;

  constructor(private routes: ActivatedRoute, private common: CommonService, private location: Location) { }

  ngOnInit(): void {
    this.routes.paramMap.subscribe(param => {
      this.common.getEnquiryDetailsById(parseInt(param.get('id'))).subscribe(data => {
        this.enquirydetail = data;
      });
    });
  }

  getback() {
    this.location.back();
  }
}

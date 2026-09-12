import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enquiry } from '../../../model/enquiry';
import { CommonService } from '../../../service/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-enquiry-detail',
  templateUrl: './enquiry-detail.component.html',
  styleUrls: ['./enquiry-detail.component.css'] // Change styleUrl to styleUrls
})
export class EnquiryDetailComponent implements OnInit{


  enquirydetail:Enquiry;
  

  constructor(private routes:ActivatedRoute, private common:CommonService, private location:Location) { }

  ngOnInit(): void {
console.table(this.enquirydetail);
alert("Customer Details Retriving.....")
    this.routes.paramMap.subscribe(param1=>{
      this.common.getEnquiryDetailsById(parseInt(param1.get('id'))).subscribe(data=>{
        this.enquirydetail=data;
      })
    })

}

getback()
{
  this.location.back();
}
}

import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-varified-applicant',
  templateUrl: './varified-applicant.component.html',
  styleUrl: './varified-applicant.component.css'
})
export class VarifiedApplicantComponent implements OnInit{

  retrievedDoc:CustomerDetails[];
  constructor(public commonservice:CommonService) { }

  ngOnInit(): void {
    this.commonservice.getApplicationData().subscribe(data=>{
      this.retrievedDoc=data;
      console.log(this.retrievedDoc);
    })
  }


}

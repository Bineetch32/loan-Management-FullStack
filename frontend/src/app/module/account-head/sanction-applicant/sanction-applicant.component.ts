import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-sanction-applicant',
  templateUrl: './sanction-applicant.component.html',
  styleUrl: './sanction-applicant.component.css'
})
export class SanctionApplicantComponent implements OnInit{

  retrievedDoc:CustomerDetails[];
  constructor(private commonservice:CommonService) { }

  ngOnInit(): void
   
  {
    this.commonservice.getApplicationData().subscribe(data=>{
      this.retrievedDoc=data;
      console.log(this.retrievedDoc);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-applicant-doc',
  templateUrl: './applicant-doc.component.html',
  styleUrl: './applicant-doc.component.css'
})
export class ApplicantDocComponent implements OnInit{

  constructor(private commonservice:CommonService) { }
  retrievedDoc:CustomerDetails[];
  selectedFile:File;
  
  ngOnInit(): void {
      this.commonservice.getApplicationData().subscribe(data=>{
        this.retrievedDoc=data;
        console.log(this.retrievedDoc);
      })
     
  }

}

import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrl: './applicant.component.css'
})
export class ApplicantComponent implements OnInit{

  constructor(private commonservice:CommonService) { }
  retrievedDoc:CustomerDetails[];
  selectedFile:File;
  
  

  ngOnInit(): void {

    this.commonservice.getApplicationData().subscribe(data=>{
      this.retrievedDoc=data;
     
    });
   
   
}




approvedCall(c:CustomerDetails)
{
  alert("Loan Status:"+c.loanStatus)
  alert("Application Approved.....");
  c.loanStatus="Approved";
  alert("loan status:"+c.loanStatus);
  this.commonservice.putApproval(c).subscribe();

}
rejectedCall(c:CustomerDetails)
{
  alert("Application Rejected.....");
  c.loanStatus="Rejected";
  alert("loan status:"+c.loanStatus);
  this.commonservice.rejectApproval(c).subscribe();
  

}
}

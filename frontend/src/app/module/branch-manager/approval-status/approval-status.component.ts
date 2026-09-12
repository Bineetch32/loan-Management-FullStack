import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-approval-status',
  templateUrl: './approval-status.component.html',
  styleUrl: './approval-status.component.css'
})
export class ApprovalStatusComponent implements OnInit{


  constructor(private commonservice:CommonService) { }
  retrievedDoc:CustomerDetails[];
 
  
  

  ngOnInit(): void {
      this.commonservice.getApplicationData().subscribe(data=>{
        this.retrievedDoc=data;
        console.table(this.retrievedDoc);
      })

      this.commonservice.getApplicationData().subscribe((data:CustomerDetails[])=>{
        this.retrievedDoc=data;
      })
     
  }
  

  approvedCall(c:CustomerDetails)
  {
    alert("Application Approved.....");
    c.loanStatus="Approved";
    this.commonservice.putApproval(c).subscribe();
  
  }
  rejectedCall(c:CustomerDetails)
  {
    alert("Application Rejected.....");
    c.loanStatus="Rejected";
    this.commonservice.rejectApproval(c).subscribe();
  }

  mailsend(id:number){
    this.commonservice.sendMailForCustomer(id).subscribe();
    console.log("mail sent")
  }
}

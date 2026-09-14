import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrl: './applicant.component.css'
})
export class ApplicantComponent implements OnInit {

  retrievedDoc: CustomerDetails[] = [];

  constructor(private commonservice: CommonService) { }

  ngOnInit(): void {
    this.loadApplicants();
  }

  loadApplicants() {
    this.commonservice.getApplicationData().subscribe(data => {
      this.retrievedDoc = data;
    });
  }

  approvedCall(c: CustomerDetails) {
    if (!confirm('Approve this loan application?')) {
      return;
    }

    this.commonservice.putApproval(c).subscribe({
      next: () => {
        alert('Loan Approved Successfully.');
        this.loadApplicants();
      },
      error: () => {
        alert('Loan approval failed.');
      }
    });
  }

  rejectedCall(c: CustomerDetails) {
    if (!confirm('Reject this loan application?')) {
      return;
    }

    this.commonservice.rejectApproval(c).subscribe({
      next: () => {
        alert('Loan Rejected.');
        this.loadApplicants();
      },
      error: () => {
        alert('Loan rejection failed.');
      }
    });
  }
}

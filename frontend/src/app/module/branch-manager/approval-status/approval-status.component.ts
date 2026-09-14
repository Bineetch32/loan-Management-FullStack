import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-approval-status',
  templateUrl: './approval-status.component.html',
  styleUrl: './approval-status.component.css'
})
export class ApprovalStatusComponent implements OnInit {

  retrievedDoc: CustomerDetails[] = [];

  constructor(private commonservice: CommonService) { }

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications() {
    this.commonservice.getApplicationData().subscribe(data => {
      this.retrievedDoc = data;
    });
  }

  mailsend(id: number) {
    this.commonservice.sendMailForCustomer(id).subscribe({
      next: () => alert('Mail sent successfully.'),
      error: () => alert('Mail could not be sent.')
    });
  }
}

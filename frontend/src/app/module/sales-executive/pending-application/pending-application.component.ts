import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-pending-application',
  templateUrl: './pending-application.component.html',
  styleUrl: './pending-application.component.css'
})
export class PendingApplicationComponent implements OnInit {

  pendingApplications: CustomerDetails[] = [];

  constructor(private commonservice: CommonService) { }

  ngOnInit(): void {
    this.commonservice.getApplicationData().subscribe(data => {
      this.pendingApplications = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-document-varification',
  templateUrl: './document-varification.component.html',
  styleUrl: './document-varification.component.css'
})
export class DocumentVarificationComponent implements OnInit {

  retrievedDoc: CustomerDetails[] = [];
  selectedCustomer: CustomerDetails = null;

  constructor(private commonservice: CommonService) { }

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications() {
    this.commonservice.getApplicationData().subscribe(data => {
      this.retrievedDoc = data;
    });
  }

  viewDocuments(c: CustomerDetails) {
    this.selectedCustomer = c;
  }

  back() {
    this.selectedCustomer = null;
  }

  verificationCall(c: CustomerDetails) {
    c.verificationn = "Varified";
    this.commonservice.verifyDocument(c).subscribe(() => {
      alert("Documents verified successfully.");
      this.loadApplications();
    });
  }

  rejectCall(c: CustomerDetails) {
    c.verificationn = "UnVarified";
    this.commonservice.UnverifyDocument(c).subscribe(() => {
      alert("Documents rejected.");
      this.loadApplications();
    });
  }
}

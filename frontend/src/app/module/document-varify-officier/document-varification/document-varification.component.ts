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
  activeTab = 'details';
  selectedDocument = null;

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
    this.activeTab = 'details';
    this.selectedDocument = null;
  }

  showDocuments() {
    this.activeTab = 'documents';
    this.selectedDocument = null;
  }

  showDetails() {
    this.activeTab = 'details';
    this.selectedDocument = null;
  }

  viewDocument(documentName: string, documentData: any) {
    this.selectedDocument = {
      name: documentName,
      data: documentData
    };
  }

  closeDocument() {
    this.selectedDocument = null;
  }

  back() {
    this.selectedCustomer = null;
    this.selectedDocument = null;
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

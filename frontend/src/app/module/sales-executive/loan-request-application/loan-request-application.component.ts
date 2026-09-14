import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDetails } from '../../../model/customer-details';
import { Enquiry } from '../../../model/enquiry';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-loan-request-application',
  templateUrl: './loan-request-application.component.html',
  styleUrl: './loan-request-application.component.css'
})
export class LoanRequestApplicationComponent implements OnInit {
  cdd: CustomerDetails[];
  basic: boolean = true;
  upload: boolean = false;
  agreeTerms: boolean = false;
  submitting: boolean = false;
  selectedEnquiry: Enquiry;

  basicdetailsave: any;
  basicdetails: FormGroup;
  documentUpload: FormGroup;
  selectedPanCopy: any;
  selectedUidCopy: any;
  selectedBankPassbookCopy: any;
  selectedPhoto: any;
  selectedSignature: any;
  selectedCancelledCheque: any;
  selectedSalarySlip: any;
  selectedsanctionLetter: any;
  imageSrc1: any;
  imageSrc2: any;
  imageSrc3: any;
  imageSrc4: any;
  imageSrc5: any;
  imageSrc6: any;
  imageSrc7: any;
  imageSrc8: any;

  constructor(public fb: FormBuilder, public common: CommonService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.basicdetails = this.fb.group({
      customerName: [''],
      customerMobileno: [''],
      customerDOB: [''],
      customerEmailId: [''],
      customerPanNo: [''],
      customerAadharNo: [''],
      customerGender: [''],
      customerIncome: [''],
      loanStatus: [''],
      verificationn: [''],
      customerlocalAddress: this.fb.group({ pincode: [''], areaName: [''], cityName: [''], district: [''], state: [''] }),
      customerPermanentAddress: this.fb.group({ pincode: [''], areaName: [''], cityName: [''], district: [''], state: [''] }),
      guarantorDetails: this.fb.group({ guarantorMobileNo: [''], guarantorName: [''], guarantorEmailId: [''], guarantorAddress: [''] }),
      customerBankAccountDetails: this.fb.group({ accountNumber: [''], ifscCode: [''], bankName: [''], address: [''] })
    });
    this.documentUpload = this.fb.group({ documentId: [''] });

    const enquiryId = this.route.snapshot.queryParamMap.get('enquiryId');
    if (enquiryId) {
      this.common.getEnquiryDetailsById(Number(enquiryId)).subscribe(enquiry => {
        this.selectedEnquiry = enquiry;
        this.basicdetails.patchValue({
          customerName: enquiry.customerName,
          customerMobileno: enquiry.customerMobileno,
          customerEmailId: enquiry.customerEmailId,
          customerPanNo: enquiry.customerPanNo
        });
      });
    }
  }

  onSelectedFile1(event: any) { this.selectedPanCopy = event.target.files[0]; }
  onSelectedFile2(event: any) { this.selectedUidCopy = event.target.files[0]; }
  onSelectedFile3(event: any) { this.selectedBankPassbookCopy = event.target.files[0]; }
  onSelectedFile4(event: any) { this.selectedPhoto = event.target.files[0]; }
  onSelectedFile5(event: any) { this.selectedSignature = event.target.files[0]; }
  onSelectedFile6(event: any) { this.selectedCancelledCheque = event.target.files[0]; }
  onSelectedFile7(event: any) { this.selectedSalarySlip = event.target.files[0]; }
  onSelectedFile8(event: any) { this.selectedsanctionLetter = event.target.files[0]; }

  basics() {
    this.upload = true;
    this.basic = false;
    this.basicdetailsave = this.basicdetails.controls;
  }

  submit() {
    if (!this.agreeTerms) {
      alert('Please agree to the terms and conditions.');
      return;
    }

    const requiredFiles = [
      this.selectedPanCopy, this.selectedUidCopy, this.selectedBankPassbookCopy,
      this.selectedPhoto, this.selectedSignature, this.selectedCancelledCheque,
      this.selectedSalarySlip, this.selectedsanctionLetter
    ];

    if (requiredFiles.some(file => !file)) {
      alert('Please select all 8 documents.');
      return;
    }

    const uploadDocument = new FormData();
    uploadDocument.append('panCopy', this.selectedPanCopy);
    uploadDocument.append('uidCopy', this.selectedUidCopy);
    uploadDocument.append('bankPassBookCopy', this.selectedBankPassbookCopy);
    uploadDocument.append('photo', this.selectedPhoto);
    uploadDocument.append('signature', this.selectedSignature);
    uploadDocument.append('cancelledCheck', this.selectedCancelledCheque);
    uploadDocument.append('salarySlips', this.selectedSalarySlip);
    uploadDocument.append('sanctionLetter', this.selectedsanctionLetter);

    const applicationData: any = this.basicdetails.value;
    if (this.selectedEnquiry) {
      applicationData.enq = this.selectedEnquiry;
    }
    uploadDocument.append('document1', JSON.stringify(applicationData));

    this.submitting = true;
    this.common.postDocument(uploadDocument).subscribe({
      next: () => {
        this.submitting = false;
        this.router.navigateByUrl('/salesexecutive/sd');
      },
      error: (error) => {
        this.submitting = false;
        console.error(error);
        if (error.status === 409) {
          alert('This customer already has a loan application. Duplicate application was not created.');
        } else {
          alert('Unable to save the application. Please try again.');
        }
      }
    });
  }
}

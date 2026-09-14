import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  imageSrc1: any;
  imageSrc2: any;
  imageSrc3: any;
  imageSrc4: any;
  imageSrc5: any;
  imageSrc6: any;
  imageSrc7: any;

  constructor(public fb: FormBuilder, public common: CommonService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.basicdetails = this.fb.group({
      customerName: [''],
      customerMobileno: [''],
      customerDOB: [''],
      customerEmailId: [''],
      customerPanNo: [''],
      customerAadharNo: [''],
      customerGender: ['', Validators.required],
      customerIncome: ['', [Validators.required, Validators.min(30000)]],
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

  onPanInput(event: any) {
    const pan = event.target.value.toUpperCase();
    event.target.value = pan;
    this.basicdetails.get('customerPanNo')?.setValue(pan, { emitEvent: false });
  }

  onSelectedFile1(event: any) { this.selectedPanCopy = event.target.files[0]; }
  onSelectedFile2(event: any) { this.selectedUidCopy = event.target.files[0]; }
  onSelectedFile3(event: any) { this.selectedBankPassbookCopy = event.target.files[0]; }
  onSelectedFile4(event: any) { this.selectedPhoto = event.target.files[0]; }
  onSelectedFile5(event: any) { this.selectedSignature = event.target.files[0]; }
  onSelectedFile6(event: any) { this.selectedCancelledCheque = event.target.files[0]; }
  onSelectedFile7(event: any) { this.selectedSalarySlip = event.target.files[0]; }

  basics() {
    const gender = this.basicdetails.get('customerGender')?.value;
    const income = Number(this.basicdetails.get('customerIncome')?.value);

    if (!gender) {
      alert('Please select customer gender.');
      return;
    }

    if (!income || income < 30000) {
      alert('Customer income should be at least ₹30,000.');
      return;
    }

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
      this.selectedSalarySlip
    ];

    if (requiredFiles.some(file => !file)) {
      alert('Please select all 7 documents.');
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

    const applicationData: any = this.basicdetails.value;
    if (this.selectedEnquiry) {
      applicationData.enq = this.selectedEnquiry;
    }
    uploadDocument.append('document1', JSON.stringify(applicationData));

    this.submitting = true;
    this.common.postDocument(uploadDocument).subscribe({
      next: () => {
        this.submitting = false;
        alert('Application submitted successfully.');
        this.router.navigateByUrl('/salesexecutive/sd/pa');
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

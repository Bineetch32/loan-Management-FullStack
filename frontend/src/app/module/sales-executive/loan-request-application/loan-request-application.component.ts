import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerDetails } from '../../../model/customer-details';
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
  confirm: boolean = false;

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
  selectedsanctionLetter:any;
  // reader=new FileReader();
  imageSrc1:any;
  imageSrc2:any;
  imageSrc3:any;
  imageSrc4:any;
  imageSrc5:any;
  imageSrc6:any;
  imageSrc7:any;
  imageSrc8:any;

  constructor(public fb: FormBuilder, public common: CommonService) {}

  ngOnInit(): void {
    (this.basicdetails = this.fb.group({
      customerName: [""],
      customerMobileno: [""],
      customerDOB: [""],
      customerEmailId: [""],
      customerPanNo: [""],
      customerAadharNo: [""],
      customerGender: [""],
      customerIncome: [""],
      // cibil: [""],
      loanStatus:[""],
      verificationn:[""],

      customerlocalAddress: this.fb.group({
        pincode: [""],
        areaName: [""],
        cityName: [""],
        district: [""],
        state: [""],
      }),
      customerPermanentAddress: this.fb.group({
        pincode: [""],
        areaName: [""],
        cityName: [""],
        district: [""],
        state: [""],
      }),

      guarantorDetails: this.fb.group({
        guarantorMobileNo: [""],
        guarantorName: [""],
        guarantorEmailId: [""],
        guarantorAddress: [""],
      }),

      customerBankAccountDetails: this.fb.group({
        accountNumber: [""],
        ifscCode: [""],
        bankName: [""],
        address: [""],
      }),
    })),
      (this.documentUpload = this.fb.group({
        documentId: [""],
      }));
  }


  // onSelectedFile1(event: any) {
  //   alert("file..Added");
  //   this.selectedPanCopy = event.target.files[0];
  //    this.reader.onload = e => this.imageSrc1 = this.reader.result;
  // this.reader.readAsDataURL(this.selectedPanCopy);
  // }

  onSelectedFile1(event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc1 = reader.result as string;
    };
this.selectedPanCopy = event.target.files[0];
  reader.readAsDataURL(this.selectedPanCopy);
  }

  
  // onSelectedFile2(event: any) {
  //   alert("file..Added");
  //   this.selectedUidCopy = event.target.files[0];
  //    this.reader.onload = e => this.imageSrc2 = this.reader.result;
  // this.reader.readAsDataURL(this.selectedUidCopy);
  // }


  onSelectedFile2(event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc2 = reader.result as string;
    };
this.selectedUidCopy = event.target.files[0];
  reader.readAsDataURL(this.selectedUidCopy);
  }

  // onSelectedFile3(event: any) {
  //   alert("file..Added");
  //   this.selectedBankPassbookCopy = event.target.files[0];
  //    this.reader.onload = e => this.imageSrc3 = this.reader.result;
  // this.reader.readAsDataURL(this.selectedBankPassbookCopy);
  // }

  onSelectedFile3(event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc3 = reader.result as string;
    };
this.selectedBankPassbookCopy = event.target.files[0];
  reader.readAsDataURL(this.selectedBankPassbookCopy);
  }


  // onSelectedFile4(event: any) {
  //   alert("file..Added");
  //   this.selectedPhoto = event.target.files[0];
  //    this.reader.onload = e => this.imageSrc4 = this.reader.result;
  // this.reader.readAsDataURL(this.selectedPhoto);
  // }

  onSelectedFile4(event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc4 = reader.result as string;
    };
this.selectedPhoto = event.target.files[0];
  reader.readAsDataURL(this.selectedPhoto);
  }

  // onSelectedFile5(event: any) {
  //   alert("file..Added");
  //   this.selectedSignature = event.target.files[0];
  //    this.reader.onload = e => this.imageSrc5 = this.reader.result;
  // this.reader.readAsDataURL(this.selectedSignature);
  // }

  onSelectedFile5(event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc5 = reader.result as string;
    };
this.selectedSignature = event.target.files[0];
  reader.readAsDataURL(this.selectedSignature);
  }


  // onSelectedFile6(event: any) {
  //   alert("file..Added");
  //   this.selectedCancelledCheque = event.target.files[0];
  //    this.reader.onload = e => this.imageSrc6 = this.reader.result;
  // this.reader.readAsDataURL(this.selectedCancelledCheque);
  // }

  onSelectedFile6(event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc6 = reader.result as string;
    };
this.selectedCancelledCheque = event.target.files[0];
  reader.readAsDataURL(this.selectedCancelledCheque);
  }


  // onSelectedFile7(event: any) {
  //   alert("file..Added");
  //   this.selectedSalarySlip = event.target.files[0];
  //    this.reader.onload = e => this.imageSrc7 = this.reader.result;
  // this.reader.readAsDataURL(this.selectedSalarySlip);
  // }

  onSelectedFile7(event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc7 = reader.result as string;
    };
this.selectedSalarySlip = event.target.files[0];
  reader.readAsDataURL(this.selectedSalarySlip);
  }

  // onSelectedFile8(event: any) {
  //   alert("file..Added");
  //   this.selectedsanctionLetter = event.target.files[0];
  //    this.reader.onload = e => this.imageSrc8 = this.reader.result;
  // this.reader.readAsDataURL(this.selectedsanctionLetter);
  // }

  onSelectedFile8(event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc8 = reader.result as string;
    };
this.selectedsanctionLetter = event.target.files[0];
  reader.readAsDataURL(this.selectedsanctionLetter);
  }



  basics() {
    alert("Customer Name=" + this.basicdetails.controls["customerName"].value);
    this.upload = true;
    this.basic = false;
    console.log(this.basicdetails.controls["customerName"].value);
    this.basicdetailsave = this.basicdetails.controls;
    console.log(this.basicdetailsave);
  }
  
  submit() {
    const requiredFiles = [
      this.selectedPanCopy,
      this.selectedUidCopy,
      this.selectedBankPassbookCopy,
      this.selectedPhoto,
      this.selectedSignature,
      this.selectedCancelledCheque,
      this.selectedSalarySlip,
      this.selectedsanctionLetter
    ];

    if (requiredFiles.some(file => !file)) {
      alert("Please upload all required documents before submitting.");
      return;
    }
    const document1 = JSON.stringify(this.basicdetails.value);
    const uploadDocument = new FormData();

    uploadDocument.append("panCopy", this.selectedPanCopy);
    uploadDocument.append("uidCopy", this.selectedUidCopy);
    uploadDocument.append("bankPassBookCopy", this.selectedBankPassbookCopy);
    uploadDocument.append("photo", this.selectedPhoto);
    uploadDocument.append("signature", this.selectedSignature);
    uploadDocument.append("cancelledCheck", this.selectedCancelledCheque);
    uploadDocument.append("salarySlips", this.selectedSalarySlip);
    uploadDocument.append("sanctionLetter", this.selectedsanctionLetter);

    uploadDocument.append("document1", document1);
      this.common.postDocument(uploadDocument).subscribe({
        next: () => {
          alert("Data Saved Successfully");
          this.confirm = true;
          this.upload = false;
          this.basic = false;
        },
        error: (error) => {
          console.error("Loan application submission failed", error);
          alert("Unable to save the application. Please try again.");
        }
      });
  }

  uploadDoc() {
    this.confirm = true;
    this.upload = false;
    this.basic = false;

    // this.documentSave = this(value);
    // this.basicdetailsave.push(this.documentSave);
  }
  }

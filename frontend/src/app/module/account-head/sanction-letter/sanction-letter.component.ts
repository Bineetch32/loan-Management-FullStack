import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from 'pdfmake/interfaces';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

class Invoice {
  applicationId: number;
  customerName: string = '';
  address: string = '';
  contactNo: number;
  email: string = '';
  interest: number;
  loanAmount: number;
  tenureYears: number;
  additionalDetails: string = '';
}

@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent implements OnInit {

  invoice = new Invoice();

  constructor(
    public service: CommonService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.getCustomerDetailsById(Number(id)).subscribe({
        next: (data) => {
          this.invoice.applicationId = data.id;
          this.invoice.customerName = data.customerName;
          this.invoice.email = data.customerEmailId;
          this.invoice.contactNo = data.customerMobileno;
          this.invoice.address = this.getAddress(data);
        },
        error: () => {
          alert('Unable to load customer details.');
        }
      });
    }
  }

  private getAddress(data: any): string {
    const address = data.customerlocalAddress;

    if (!address) {
      return '';
    }

    return `${address.areaName || ''}, ${address.cityName || ''}, ${address.district || ''}, ${address.state || ''}, ${address.pincode || ''}`;
  }

  getback() {
    this.location.back();
  }

  getEmi(): number {
    if (!this.invoice.loanAmount || !this.invoice.interest || !this.invoice.tenureYears) {
      return 0;
    }

    const monthlyRate = this.invoice.interest / 12 / 100;
    const months = this.invoice.tenureYears * 12;

    if (monthlyRate === 0) {
      return this.invoice.loanAmount / months;
    }

    return this.invoice.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) /
      (Math.pow(1 + monthlyRate, months) - 1);
  }

  generatePDF() {
    if (!this.invoice.customerName || !this.invoice.loanAmount ||
        !this.invoice.interest || !this.invoice.tenureYears) {
      alert('Please enter loan amount, interest rate and loan tenure.');
      return;
    }

    const emi = this.getEmi();

    const docDefinition: TDocumentDefinitions = {
      content: [
        {
          text: 'Home Loan Sanction Letter',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline'
        },
        {
          text: 'Customer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              { text: this.invoice.customerName, bold: true },
              { text: this.invoice.address },
              { text: this.invoice.email },
              { text: `Mobile: ${this.invoice.contactNo}` },
              { text: `Application ID: ${this.invoice.applicationId}` }
            ],
            [
              { text: `Date: ${new Date().toLocaleDateString()}`, alignment: 'right' }
            ]
          ]
        },
        {
          text: 'Sanction Details',
          style: 'sectionHeader'
        },
        {
          table: {
            widths: ['*', '*'],
            body: [
              ['Loan Amount', `₹${this.invoice.loanAmount}`],
              ['Interest Rate', `${this.invoice.interest}% per annum`],
              ['Loan Tenure', `${this.invoice.tenureYears} years`],
              ['Estimated Monthly EMI', `₹${emi.toFixed(2)}`]
            ]
          }
        },
        {
          text: `Dear ${this.invoice.customerName}, your home loan application has been reviewed and the proposed loan amount is ₹${this.invoice.loanAmount} at an interest rate of ${this.invoice.interest}% per annum for ${this.invoice.tenureYears} years. The estimated monthly EMI is ₹${emi.toFixed(2)}.`,
          margin: [0, 20, 0, 10]
        },
        {
          text: this.invoice.additionalDetails || 'No additional sanction details.',
          margin: [0, 10, 0, 10]
        },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
          ul: [
            'Interest will be payable as per the agreed loan schedule.',
            'The sanction is subject to applicable terms, conditions and final Branch Manager approval.',
            'The customer must comply with all required legal and loan documentation.'
          ]
        },
        {
          text: 'Thanks & Regards,\nAccount Head\nHome Loan Department',
          margin: [0, 30, 0, 0]
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 10]
        }
      }
    };

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => {
      const formData = new FormData();
      formData.append('sanctionLetter', blob, `Sanction-Letter-${this.invoice.applicationId}.pdf`);
      formData.append('loanAmount', this.invoice.loanAmount.toString());
      formData.append('interestRate', this.invoice.interest.toString());
      formData.append('tenureYears', this.invoice.tenureYears.toString());

      this.service.saveSanctionLetter(this.invoice.applicationId, formData).subscribe({
        next: (message) => {
          pdfMake.createPdf(docDefinition).download(`Sanction-Letter-${this.invoice.applicationId}.pdf`);
          alert(message);
        },
        error: () => {
          alert('Sanction letter could not be saved.');
        }
      });
    });
  }
}

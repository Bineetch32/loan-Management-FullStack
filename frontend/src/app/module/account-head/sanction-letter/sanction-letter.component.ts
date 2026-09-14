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
  additionalDetails: string = '';
}

@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent implements OnInit {

  invoice = new Invoice();
  customer: any;

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
          this.customer = data;
          this.invoice.applicationId = data.id;
          this.invoice.customerName = data.customerName;
          this.invoice.email = data.customerEmailId;
          this.invoice.contactNo = data.customerMobileno;
          this.invoice.address = this.getAddress(data);
        },
        error: (error) => {
          console.error('Unable to load customer details', error);
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

  generatePDF(action = 'download') {
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
              {
                text: `Date: ${new Date().toLocaleDateString()}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Home Loan Details',
          style: 'sectionHeader'
        },
        {
          text: `Dear ${this.invoice.customerName}, we are pleased to inform you that your home loan application has been reviewed. The proposed loan amount is ₹${this.invoice.loanAmount} at an interest rate of ${this.invoice.interest}% subject to the applicable terms and conditions.`,
          margin: [0, 10, 0, 10]
        },
        {
          text: this.invoice.additionalDetails || 'No additional details.',
          margin: [0, 10, 0, 10]
        },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
          ul: [
            'Interest will be payable as per the agreed loan schedule.',
            'Legal verification and other applicable checks may be required.',
            'Final approval is subject to Branch Manager approval.'
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

    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download(`Sanction-Letter-${this.invoice.applicationId}.pdf`);
    }
  }
}

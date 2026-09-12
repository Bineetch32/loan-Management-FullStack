import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { Location } from '@angular/common';

import pdfMake from "pdfmake/build/pdfmake";  
import pdfFonts from "pdfmake/build/vfs_fonts";  
import { TDocumentDefinitions } from 'pdfmake/interfaces';


pdfMake.vfs = pdfFonts.pdfMake.vfs;



class Invoice {
  customerName: string;
  address: string;
  contactNo: number;
  email: string;
  interest: number;
  sanAmount: number;
  loanAmount: number;
  additionalDetails: string;
}

@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent implements OnInit {
  
  constructor(public service: CommonService, private location: Location) { }
  
  app: any;
  invoice = new Invoice();
  
  ngOnInit(): void {
    // Initialize any required logic here
  }
  
  getback() {
    this.location.back();
  }
  
  submit() {
    this.app = this.service.app;
    if (this.app) {
      this.invoice.customerName = `${this.app.firstName} ${this.app.lastName}`;
      this.invoice.email = this.app.email;
      this.invoice.address = `${this.app.currentAddress.areaName}, ${this.app.currentAddress.cityName}, ${this.app.currentAddress.district}, ${this.app.currentAddress.pincode}`;
      this.invoice.contactNo = this.app.mobileNumber;
      // Assign other properties if needed
    } else {
      console.error('Application data is not available.');
    }
  }

  generatePDF(action = 'open') {
    const docDefinition: TDocumentDefinitions = {
      content: [
        {
          text: 'Home Loan Sanction Letter',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'red'
        },
        {
          text: 'Customer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [{
              text: this.invoice.customerName,
              bold: true
            },
            { text: this.invoice.address },
            { text: this.invoice.email },
            { text: this.invoice.contactNo }
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              {
                text: `Loan No : ${((Math.random() * 10000).toFixed(0))}`,
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
          text: `Dear '${this.invoice.customerName}' We thank you for choosing DelloiteHomeLoanSystems. We are pleased to inform you that we have in principle approved loan amount ${this.invoice.loanAmount} at interest rate is ${this.invoice.interest}% to you as per Terms & Conditions mentioned below. Thank You !
          Thanks & Regards,
          DelloiteHomeLoanSystems`,
          margin: [0, 20, 0, 0]
        },
        {
          columns: [
            [{ text: 'Signature', alignment: 'right', italics: true }]
          ],
          margin: [0, 20, 0, 0]
        },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader',
          margin: [0, 20, 0, 0]
        },
        {
          ul: [
            'Collecting finance DelloiteHomeLoanSystems',
            'Interest would be payable monthly on the last date of each month',
            'Legal vetting and search to be done',
          ],
          margin: [0, 10, 0, 0]
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      }
    };
    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download();
    }

  }}

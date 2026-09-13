import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../../../model/enquiry';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrl: './enquiry-list.component.css'
})
export class EnquiryListComponent implements OnInit {

  enqlist: Enquiry[] = [];
  mailStatus: string;
  checkingCibilId: number = null;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.loadEnquiries();
  }

  loadEnquiries() {
    this.common.getEnquiryall().subscribe({
      next: (list: Enquiry[]) => {
        this.enqlist = list;
      },
      error: (error: any) => {
        console.error('Error fetching enquiry list:', error);
      }
    });
  }

  mailsend(id: number) {
    this.common.sendMailForEnquiry(id).subscribe({
      next: () => {
        console.log("Mail sent successfully for ID:", id);
      },
      error: (error) => {
        console.error("Error sending mail for ID:", id, "Error:", error);
      }
    });
  }

  checkcibilscore(enq: Enquiry) {
    if (this.checkingCibilId === enq.id) {
      return;
    }

    this.checkingCibilId = enq.id;

    this.common.getcibilscore(enq).subscribe({
      next: () => {
        this.common.getEnquiryDetailsById(enq.id).subscribe({
          next: (updatedEnquiry: Enquiry) => {
            const index = this.enqlist.findIndex(item => item.id === enq.id);
            if (index !== -1) {
              this.enqlist[index] = updatedEnquiry;
            }
            this.checkingCibilId = null;
          },
          error: (error) => {
            console.error('Error getting updated enquiry:', error);
            this.checkingCibilId = null;
          }
        });
      },
      error: (error) => {
        console.error('Error checking CIBIL:', error);
        this.checkingCibilId = null;
        alert('Unable to check CIBIL. Please try again.');
      }
    });
  }
}

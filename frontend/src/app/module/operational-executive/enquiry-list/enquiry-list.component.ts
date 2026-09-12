import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../../../model/enquiry';
import { CommonService } from '../../../service/common.service';


@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrl: './enquiry-list.component.css'
})
export class EnquiryListComponent  implements OnInit{

  enqlist: Enquiry[];
  mailStatus: string;

  constructor(private common: CommonService) { }
  ngOnInit(): void {
    this.common.getEnquiryall().subscribe({
      next: (list: Enquiry[]) => {
        this.enqlist = list;
      },
      error: (error: any) => {
        console.error('Error fetching enquiry list:', error);
      }
    });
  }
  




  // //sendMailForEnquiry
  // mailsend(id:number){
  //   this.common.sendMailForEnquiry(id).subscribe();
  //   console.log("mail sent")
  // }

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
  

  //check cibil
  checkcibilscore(enq:Enquiry)
  {
    console.table(enq);
    this.common.getcibilscore(enq).subscribe();
}
}

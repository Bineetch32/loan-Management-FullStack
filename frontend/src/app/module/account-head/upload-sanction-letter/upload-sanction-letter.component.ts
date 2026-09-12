import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'; // Importing FormGroup and FormBuilder for reactive forms
import { CommonService } from '../../../service/common.service'; // Importing CommonService for API calls
import { Location } from '@angular/common'; // Importing Location for routing

@Component({
  selector: 'app-upload-sanction-letter',
  templateUrl: './upload-sanction-letter.component.html',
  styleUrls: ['./upload-sanction-letter.component.css']
})
export class UploadSanctionLetterComponent implements OnInit {

  selectedSanctionCopy:any
  updateCustomerDetails: FormGroup;
  emailForm: FormGroup;
  selectedPanCopy: any;
  imageSrc1: any;
  reader=new FileReader();

  constructor(public common:CommonService, private location:Location , private formBuilder:FormBuilder) { }

  ngOnInit(): void
  {
   
   
      this.emailForm=this.formBuilder.group({
      
        toEmail:[""],
        // fromEmail:[""],
        // subject:[""],
        // testBody:[""],
        subject:['Regarding Loan Sanction'],
        testBody:['Dear sir Vinay Chauhan...Thanks For Choose Our Bank...! Regarding Your Loan Request, After Your Document verification, the lender issues a home loan sanction letter which entails basic loan details such as loan amount, loan tenure, interest rate type etc. & the terms & conditions. '],
        
        
      })

    }
  
    onSelectedFile1(event: any) {
      this.selectedPanCopy = event.target.files[0];
       this.reader.onload = e => this.imageSrc1 = this.reader.result;
    this.reader.readAsDataURL(this.selectedPanCopy);
    }

    sendd(){
      if (!this.selectedPanCopy) {
        alert("Please select an attachment.");
        return;
      }

      const document1 = JSON.stringify(this.emailForm.value);
      const emailsender = new FormData();
      emailsender.append("attachment", this.selectedPanCopy);
      emailsender.append("email", document1);

      this.common.sendmailwithattachment(emailsender).subscribe({
        next: () => {
          alert("Email sent successfully.");
          window.location.reload();
        },
        error: (error) => {
          console.error("Error sending email:", error);
          alert("Unable to send email. Please try again.");
        }
      });
    }

  // Function to navigate back
  getback() {
    this.location.back();
  }

}

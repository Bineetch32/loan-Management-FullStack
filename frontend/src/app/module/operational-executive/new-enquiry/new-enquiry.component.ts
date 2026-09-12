import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-new-enquiry',
  templateUrl: './new-enquiry.component.html',
  styleUrl: './new-enquiry.component.css'
})
export class NewEnquiryComponent implements OnInit{


  constructor(private formBuilder: FormBuilder, public commonservice: CommonService) { }
  loginForm: FormGroup;
 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id:[],
      customerName:[],
      customerMobileno:[],
      customerEmailId:[],
      customerPanNo:[],
      cibil:[],
      loanStatus:[],


    })
  }


  submitCall() {
    if (this.loginForm.valid) 
    {
      alert("Submit method called..")
      console.log("Submit method");
 this.commonservice.postData(this.loginForm.value).subscribe();
      window.location.reload();
    }

  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-new-enquiry',
  templateUrl: './new-enquiry.component.html',
  styleUrl: './new-enquiry.component.css'
})
export class NewEnquiryComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private commonservice: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      customerName: [''],
      customerMobileno: [''],
      customerEmailId: [''],
      customerPanNo: ['']
    });
  }

  submitCall() {
    if (this.loginForm.valid) {
      this.commonservice.postData(this.loginForm.value).subscribe({
        next: () => {
          alert('Enquiry Saved Successfully');
          this.router.navigateByUrl('/operationalexecutive/od/el');
        },
        error: (error) => {
          console.error(error);
          alert('Unable to save enquiry. Please try again.');
        }
      });
    }
  }
}

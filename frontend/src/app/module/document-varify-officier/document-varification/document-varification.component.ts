import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-document-varification',
  templateUrl: './document-varification.component.html',
  styleUrl: './document-varification.component.css'
})
export class DocumentVarificationComponent implements OnInit{

  constructor(private commonservice:CommonService) { }
  retrievedDoc:CustomerDetails[];
  // uploadverification:FormGroup;
  // selectedFile:File;
  a:true;

  ngOnInit(): void {

    this.commonservice.getApplicationData().subscribe(data=>{
      this.retrievedDoc=data;
    })
  }

  verificationCall(c:CustomerDetails)
  {
    alert(c.verificationn);
    c.verificationn="Verified";
    this.commonservice.verifyDocument(c).subscribe();
  }

  rejectCall(c: CustomerDetails)
  {
    alert(c.verificationn);
    c.verificationn="Unvarified";
    this.commonservice.UnverifyDocument(c).subscribe();
  }


}

import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-customer-all-doc',
  templateUrl: './customer-all-doc.component.html',
  styleUrl: './customer-all-doc.component.css'
})
export class CustomerAllDocComponent implements OnInit{


  constructor(private commonservice:CommonService) { }
  retrievedDoc:CustomerDetails[];
  selectedFile:File;
  
  ngOnInit(): void {
      this.commonservice.getApplicationData().subscribe(data=>{
        this.retrievedDoc=data;
        console.log(this.retrievedDoc);
      })
     
  }

}

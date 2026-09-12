import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrl: './view-application.component.css'
})
export class ViewApplicationComponent implements OnInit {



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

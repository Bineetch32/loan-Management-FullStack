import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-varification-status',
  templateUrl: './varification-status.component.html',
  styleUrl: './varification-status.component.css'
})
export class VarificationStatusComponent implements OnInit{

  retrievedDoc:CustomerDetails[];
  constructor(private commonservice:CommonService) { }

  ngOnInit(): void 
  {
    this.commonservice.getApplicationData().subscribe(data=>{
      this.retrievedDoc=data;
      console.log(this.retrievedDoc);
    })
  }

}

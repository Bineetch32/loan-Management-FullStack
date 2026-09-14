import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrl: './view-application.component.css'
})
export class ViewApplicationComponent implements OnInit {
  customer: CustomerDetails;

  constructor(private route: ActivatedRoute, private commonservice: CommonService, private location: Location) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.commonservice.getApplicationDetailsById(id).subscribe(data => {
      this.customer = data;
    });
  }

  getBack(): void {
    this.location.back();
  }
}

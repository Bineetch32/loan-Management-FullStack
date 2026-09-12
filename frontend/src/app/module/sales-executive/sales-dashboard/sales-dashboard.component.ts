import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.css']
})
export class SalesDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // //Toggle Click Function
    // (<any>$("#menu-toggle")).click(function(e) {
    //   e.preventDefault();
    //   $("#wrapper").toggleClass("toggled");
    // });
  }
}

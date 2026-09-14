import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  customers: CustomerDetails[] = [];

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.loadLoans();
  }

  loadLoans(): void {
    this.service.getApplicationData().subscribe(data => {
      this.customers = data.filter(c => c.loanStatus === 'Sanctioned');
    });
  }

  getEmi(c: CustomerDetails): number {
    if (!c.sanctionedLoanAmount || !c.interestRate || !c.tenureYears) {
      return 0;
    }

    const monthlyRate = c.interestRate / 12 / 100;
    const months = c.tenureYears * 12;

    if (monthlyRate === 0) {
      return c.sanctionedLoanAmount / months;
    }

    return c.sanctionedLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) /
      (Math.pow(1 + monthlyRate, months) - 1);
  }
}

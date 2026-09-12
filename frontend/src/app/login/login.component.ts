import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
 
  msg: string; // This variable will store error messages
  user: string; // This variable will store the entered username
  pass: string; // This variable will store the entered password
  role: string; // This variable will store the selected role

  constructor(private routes: Router) {}

  login(){
    // Checking the entered username and password
    if('Sales'===this.user && 'sales@123'===this.pass){
      this.role = 'Sales';
      this.routes.navigateByUrl('salesexecutive');
    }
    else if('oprational'===this.user && 'oprational@123'===this.pass ){
      this.role = 'Operational';
      this.routes.navigateByUrl('operationalexecutive');
    }
    else if('document'===this.user && 'document@123'===this.pass ){
      this.role = 'Document Verification Officer';
      this.routes.navigateByUrl('documentverificationofficer');
    }
    else if('account'===this.user && 'account@123'===this.pass ){
      this.role = 'Account Head';
      this.routes.navigateByUrl('accounthead');
    }
    else if('ledger'===this.user && 'ledger@123'===this.pass ){
      this.role = 'Ledger';
      this.routes.navigateByUrl('ledger');
    }
    else if('branch'===this.user && 'branch@123'===this.pass ){
      this.role = 'Branch Manager';
      this.routes.navigateByUrl('branchmanager');
    }
    else {
      this.msg = "Wrong userid or password!!!";
      alert("Enter correct username and password");
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDetails } from '../model/customer-details';
import { Enquiry } from '../model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  setcustdata:string="http://localhost:8081/setCustomerAllDetail";
  getalldata:string="http://localhost:8081/getallgetData";
  urlgetbyid:string="http://localhost:8081/getdataByid";
  urlpostenquiry: string = "http://localhost:8081/delloitefinance/service/setEnquiryDetail";
  urlgetenquiry:string="http://localhost:8081/delloitefinance/service/getEnquiryDetail";

  userData:CustomerDetails;

  constructor(private hc: HttpClient) { }

  m: Enquiry = {
    id: null,
    customerName: '',
    customerMobileno: 0,
    customerEmailId: '',
    customerPanNo: '',
    cibil: 0,
    eligiblity:""
  };

  getData(): Observable<Enquiry[]> {
    return this.hc.get<Enquiry[]>(this.urlgetenquiry);
  }

  postData(n: Enquiry) {
    return this.hc.post(this.urlpostenquiry, n, { responseType: 'text' });
  }

  getEnquiryall(): Observable<Enquiry[]> {
    return this.hc.get<Enquiry[]>(this.urlgetenquiry);
  }

  getEnquiryDetailsById(id:number){
    return this.hc.get<Enquiry>("http://localhost:8081/getEnquiryById"+"/"+id);
  }

  getcibilscore(enq:Enquiry):Observable<Enquiry>{
    return this.hc.put<Enquiry>("http://localhost:8081/checkcibilscore"+"/"+enq.id,enq);
  }

  postDocument(uploadDocument: any) {
    return this.hc.post<CustomerDetails>(this.setcustdata,uploadDocument);
  }

  getApplicationData() {
    return this.hc.get<CustomerDetails[]>(this.getalldata);
  }

  getCustomerDetailsById(id:number){
    return this.hc.get<CustomerDetails>(this.urlgetbyid+"/"+id);
  }

  verifyDocument(c:CustomerDetails) {
    return this.hc.put<CustomerDetails>("http://localhost:8081/VarifyCust"+"/"+c.id,c);
  }

  UnverifyDocument(c:CustomerDetails) {
    return this.hc.put<CustomerDetails>("http://localhost:8081/Unvarifiedcust"+"/"+c.id,c);
  }

  putApproval(c: CustomerDetails) {
    return this.hc.put<CustomerDetails>("http://localhost:8081/AcceptCustomer/"+c.id,c);
  }

  rejectApproval(c: CustomerDetails) {
    return this.hc.put<CustomerDetails>("http://localhost:8081/RejectCustomer"+"/"+c.id,c);
  }

  getbyid(id:number): Observable<CustomerDetails> {
    return this.hc.get<CustomerDetails>(`http://localhost:8081/getdataByid/${id}`);
  }

  sendMailForEnquiry(id:number){
    return this.hc.get("http://localhost:8081/sendmailforenquiry"+"/"+id);
  }

  sendMailForCustomer(id:number){
    return this.hc.get("http://localhost:8081/sendmailforcustomer"+"/"+id);
  }

  sendmailwithattachment(uploadDocument:any) {
    return this.hc.post("http://localhost:8081/emailWithAttachment",uploadDocument);
  }
}

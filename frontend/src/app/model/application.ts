import { CustomerLocalAddress } from "./customer-local-address";

export class Application {

    public customerId:number;
	public  firstName:string;
	public  lastName:string;
    public  email:string;
    public  mobileNumber:number;
	public  loanStatus:string;
    public adharCardNumber:Number;
    public  panNumber:string;
    public cibilScore:number;
    public  documentStatus:string;
    public  document:Document;
   
    public currentAddress:CustomerLocalAddress; 
}

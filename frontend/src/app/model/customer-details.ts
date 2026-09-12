import { CustomerAllDocument } from "./customer-all-document";
import { CustomerBankAccountDetails } from "./customer-bank-account-details";
import { CustomerLocalAddress } from "./customer-local-address";
import { CustomerPermanentAddress } from "./customer-permanent-address";
import { GuarantorDetails } from "./guarantor-details";

export class CustomerDetails {

    id: number;
    customerName: string;
    customerMobileno: number;
    customerDOB: string;
    customerEmailId: string;
    customerPanNo: string;
    customerAadharNo: string;
    customerGender: string;
    customerIncome: string;
    cibil: string;
    loanStatus: string;
    verificationn:string;
  
    customerlocalAddress: CustomerLocalAddress;
    customerPermanentAddress: CustomerPermanentAddress;
    guarantorDetails: GuarantorDetails;
    customerBankAccountDetails: CustomerBankAccountDetails;
    customerAllDocument: CustomerAllDocument;
}


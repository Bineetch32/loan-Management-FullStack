import { CustomerAllDocument } from "./customer-all-document";
import { CustomerBankAccountDetails } from "./customer-bank-account-details";
import { CustomerLocalAddress } from "./customer-local-address";
import { CustomerPermanentAddress } from "./customer-permanent-address";
import { Enquiry } from "./enquiry";
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
    sanctionedLoanAmount: number;
    interestRate: number;
    tenureYears: number;
    sanctionDate: string;
    loanAccountNumber: string;
    enq: Enquiry;
    customerlocalAddress: CustomerLocalAddress;
    customerPermanentAddress: CustomerPermanentAddress;
    guarantorDetails: GuarantorDetails;
    customerBankAccountDetails: CustomerBankAccountDetails;
    customerAllDocument: CustomerAllDocument;
}

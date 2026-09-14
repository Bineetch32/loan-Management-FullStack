package com.homeloan.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "CustomerDetails")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDetails {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    public String customerName;
    private long customerMobileno;
    private String customerDOB;
    private String customerEmailId;
    private String customerPanNo;
    private long customerAadharNo;
    private String customerGender;
    private double customerIncome;
    private String loanStatus;
    private String verificationn;

    private double sanctionedLoanAmount;
    private double interestRate;
    private int tenureYears;
    private String sanctionDate;
    private String loanAccountNumber;

    @OneToOne public Enquiry enq;
    @OneToOne(cascade = javax.persistence.CascadeType.ALL) private CustomerAllDocument customerAllDocument;
    @OneToOne(cascade = javax.persistence.CascadeType.ALL) private CustomerLocalAddress customerlocalAddress;
    @OneToOne(cascade = javax.persistence.CascadeType.ALL) private CustomerPermanentAddress customerPermanentAddress;
    @OneToOne(cascade = javax.persistence.CascadeType.ALL) private GuarantorDetails guarantorDetails;
    @OneToOne(cascade = javax.persistence.CascadeType.ALL) private CustomerBankAccountDetails customerBankAccountDetails;
}

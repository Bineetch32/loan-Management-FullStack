package com.homeloan.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerBankAccountDetails {
    @Id
    private long accountNumber;
    private String ifscCode;
    private String bankName;
    private String address;
}

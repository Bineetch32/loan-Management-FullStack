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
public class GuarantorDetails {
    @Id
    private String guarantorName;
    private String guarantorEmailId;
    private long guarantorMobileNo;
    private String guarantorAddress;
}

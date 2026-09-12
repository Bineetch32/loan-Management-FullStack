package com.homeloan.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Enquiry {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String customerName;
    private long customerMobileno;
    private String customerEmailId;
    private String customerPanNo;
    private String eligiblity;
    private Integer cibil;
    @OneToOne(cascade = CascadeType.ALL) public CustomerDetails c;
}

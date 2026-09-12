package com.homeloan.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerAllDocument {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer documentId;
    @Lob private byte[] panCopy;
    @Lob private byte[] uidCopy;
    @Lob private byte[] bankPassBookCopy;
    @Lob private byte[] photo;
    @Lob private byte[] signature;
    @Lob private byte[] cancelledCheck;
    @Lob private byte[] salarySlip;
    @Lob private byte[] sanctionLetter;
}

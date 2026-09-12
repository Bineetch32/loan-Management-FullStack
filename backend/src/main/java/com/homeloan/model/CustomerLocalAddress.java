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
public class CustomerLocalAddress {
    @Id private String pincode;
    private String areaName;
    private String cityName;
    private String district;
    private String state;
}

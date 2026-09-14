package com.homeloan.service;

import java.util.List;
import java.util.Optional;
import com.homeloan.model.CustomerDetails;

public interface HomeLoanService {
    CustomerDetails saveCustomer(CustomerDetails cust);
    List<CustomerDetails> viewCustomers();
    Optional<CustomerDetails> searchEmployeee(Integer cid);
    CustomerDetails findCust(Integer id);
    boolean isDuplicateCustomer(long mobile, String pan, Integer enquiryId);
    CustomerDetails saveSanctionLetter(Integer id, byte[] sanctionLetter);
}

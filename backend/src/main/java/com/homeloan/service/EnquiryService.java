package com.homeloan.service;

import java.util.List;
import com.homeloan.model.Enquiry;

public interface EnquiryService {
    Enquiry saveEnquiry(Enquiry enq);
    List<Enquiry> viewEnquiry();
    Integer checkCibil(Integer id);
    Enquiry findEnq(int id);
}

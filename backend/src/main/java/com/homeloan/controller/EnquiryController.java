package com.homeloan.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.homeloan.model.Enquiry;
import com.homeloan.service.EnquiryService;

@CrossOrigin("*")
@RestController
public class EnquiryController {
    @Autowired EnquiryService es;

    @PostMapping("/delloitefinance/service/setEnquiryDetail")
    public String saveEnquiry(@RequestBody Enquiry e) {
        Enquiry enq = new Enquiry();
        enq.setCustomerName(e.getCustomerName());
        enq.setCustomerMobileno(e.getCustomerMobileno());
        enq.setCustomerEmailId(e.getCustomerEmailId());
        enq.setCustomerPanNo(e.getCustomerPanNo());
        enq.setCibil(e.getCibil());
        es.saveEnquiry(enq);
        return "data send Successfully";
    }

    @GetMapping("/delloitefinance/service/getEnquiryDetail")
    public List<Enquiry> getEnquiries() { return es.viewEnquiry(); }

    @PutMapping("/checkcibilscore/{id}")
    public String checkcibilscore(@PathVariable("id") Integer cid) {
        es.checkCibil(cid);
        return "in";
    }

    @GetMapping("/getEnquiryById/{id}")
    public Enquiry findEnquiryById(@PathVariable Integer id) { return es.findEnq(id); }
}

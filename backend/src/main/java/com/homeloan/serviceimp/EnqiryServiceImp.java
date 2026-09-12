package com.homeloan.serviceimp;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.homeloan.model.Enquiry;
import com.homeloan.repository.EnquiryRepository;
import com.homeloan.service.EnquiryService;

@Service
public class EnqiryServiceImp implements EnquiryService {
    @Autowired EnquiryRepository er;

    @Override public Enquiry saveEnquiry(Enquiry enq) { return er.save(enq); }
    @Override public List<Enquiry> viewEnquiry() { return er.findAll(); }

    @Override
    public Integer checkCibil(Integer id) {
        int min = 300, max = 900;
        int b = (int) (Math.random() * (max - min + 1) + min);
        Optional<Enquiry> data = er.findById(id);
        if (data.isPresent()) {
            Enquiry enq = data.get();
            enq.setCibil(b);
            enq.setEligiblity(b > 750 ? "Eligible" : "Not Eligible");
            er.save(enq);
        }
        return b;
    }

    @Override
    public Enquiry findEnq(int id) {
        return er.findById(id).orElse(null);
    }
}

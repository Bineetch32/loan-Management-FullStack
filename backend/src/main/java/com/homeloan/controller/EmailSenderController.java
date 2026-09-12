package com.homeloan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.homeloan.model.CustomerDetails;
import com.homeloan.model.EmailSender;
import com.homeloan.model.Enquiry;
import com.homeloan.service.EmailSenderService;
import com.homeloan.service.EnquiryService;
import com.homeloan.service.HomeLoanService;

@CrossOrigin("*")
@RestController
public class EmailSenderController {
    @Autowired public EmailSenderService ess;
    @Autowired EnquiryService eqs;
    @Autowired HomeLoanService hls;

    @Value("${spring.mail.username}")
    String fromEmail;

    @GetMapping("/sendmailforenquiry/{id}")
    public String sendEmail(@PathVariable Integer id) {
        Enquiry e = eqs.findEnq(id);
        EmailSender es = new EmailSender();
        es.setFromEmail(fromEmail);
        es.setToEmail(e.getCustomerEmailId());
        es.setSubject("Loan Eligibility");
        es.setTestBody("Dear " + e.getCustomerName() + " your CIBIL Score is " + e.getCibil() + " You Are " + e.getEligiblity() + " For Loan In Deloite Finance..!");
        ess.sendEmail(es);
        return "Mail Sent SuccessFully\n" + "To" + e.getCustomerEmailId();
    }

    @GetMapping("/sendmailforcustomer/{id}")
    public String sendEmailForCustomer(@PathVariable Integer id) {
        CustomerDetails e = hls.findCust(id);
        EmailSender es = new EmailSender();
        es.setFromEmail(fromEmail);
        es.setToEmail(e.getCustomerEmailId());
        es.setSubject("Loan Status");
        es.setTestBody("Dear " + e.getCustomerName() + " Your Loan Application Form Has Been " + e.getLoanStatus() + "....! Every Customer Are Valuable For US");
        ess.sendEmail(es);
        return "Mail Sent SuccessFully\n" + "To" + e.getCustomerEmailId();
    }

    @RequestMapping(value = "/emailWithAttachment", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String sendMailWithAttachment(@RequestPart(required = true, value = "attachment") MultipartFile at, @RequestPart("email") String e4) {
        try {
            ObjectMapper o = new ObjectMapper();
            EmailSender es = o.readValue(e4, EmailSender.class);
            EmailSender em = new EmailSender();
            em.setFromEmail(fromEmail);
            em.setSubject(es.getSubject());
            em.setTestBody(es.getTestBody());
            em.setToEmail(es.getToEmail());
            ess.sendattachement(em, at);
        } catch (Exception e2) {
            e2.printStackTrace();
        }
        return "Email sent Successfully...!";
    }
}

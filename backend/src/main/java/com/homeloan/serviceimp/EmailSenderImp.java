package com.homeloan.serviceimp;

import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.homeloan.model.EmailSender;
import com.homeloan.service.EmailSenderService;

@Service
public class EmailSenderImp implements EmailSenderService {
    @Autowired JavaMailSender jms;

    @Override
    public void sendEmail(EmailSender e) {
        try {
            SimpleMailMessage smm = new SimpleMailMessage();
            smm.setFrom(e.getFromEmail());
            smm.setTo(e.getToEmail());
            smm.setSubject(e.getSubject());
            smm.setText(e.getTestBody());
            jms.send(smm);
        } catch (Exception e2) {
            e2.printStackTrace();
        }
    }

    @Override
    public void sendattachement(EmailSender e, MultipartFile onSelectedFile1) {
        try {
            MimeMessage mm = jms.createMimeMessage();
            MimeMessageHelper mmh = new MimeMessageHelper(mm, true);
            mmh.setFrom(e.getFromEmail());
            mmh.setTo(e.getToEmail());
            mmh.setText(e.getTestBody());
            mmh.setSubject(e.getSubject());
            mmh.addAttachment(onSelectedFile1.getOriginalFilename(), onSelectedFile1);
            jms.send(mm);
        } catch (Exception e1) {
            e1.printStackTrace();
        }
    }
}

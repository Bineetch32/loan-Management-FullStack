package com.homeloan.service;

import com.homeloan.model.EmailSender;
import org.springframework.web.multipart.MultipartFile;

public interface EmailSenderService {
    void sendEmail(EmailSender e);
    void sendattachement(EmailSender e, MultipartFile file);
}

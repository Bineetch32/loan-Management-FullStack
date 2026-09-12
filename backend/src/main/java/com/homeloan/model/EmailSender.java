package com.homeloan.model;

import lombok.Data;

@Data
public class EmailSender {
    private String fromEmail;
    public String toEmail;
    private String testBody;
    private String subject;
}

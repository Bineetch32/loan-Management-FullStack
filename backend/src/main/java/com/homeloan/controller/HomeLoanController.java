package com.homeloan.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.homeloan.model.CustomerAllDocument;
import com.homeloan.model.CustomerBankAccountDetails;
import com.homeloan.model.CustomerDetails;
import com.homeloan.model.CustomerLocalAddress;
import com.homeloan.model.CustomerPermanentAddress;
import com.homeloan.model.EmailSender;
import com.homeloan.model.GuarantorDetails;
import com.homeloan.service.EmailSenderService;
import com.homeloan.service.HomeLoanService;

@CrossOrigin("*")
@RestController
public class HomeLoanController {

	@Autowired HomeLoanService hls;
	@Autowired EmailSenderService ess;

	@Value("${spring.mail.username}")
	String fromEmail;

	@PostMapping(value = "/setCustomerAllDetail", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<String> saveCustomer(@RequestPart(value = "panCopy") MultipartFile doc1,
			@RequestPart(value = "uidCopy") MultipartFile doc2,
			@RequestPart(value = "bankPassBookCopy") MultipartFile doc3,
			@RequestPart(value = "photo") MultipartFile doc4,
			@RequestPart(value = "signature") MultipartFile doc5,
			@RequestPart(value = "cancelledCheck") MultipartFile doc6,
			@RequestPart(value = "salarySlips") MultipartFile doc7,
			@RequestPart(value = "sanctionLetter", required = false) MultipartFile doc8,
			@RequestPart(value = "document1") String document1) throws IOException {
		ObjectMapper om = new ObjectMapper();
		CustomerDetails c = om.readValue(document1, CustomerDetails.class);

		if (c.getCustomerIncome() < 30000) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body("Customer income should be at least ₹30,000.");
		}

		Integer enquiryId = c.getEnq() != null ? c.getEnq().getId() : null;
		if (hls.isDuplicateCustomer(c.getCustomerMobileno(), c.getCustomerPanNo(), enquiryId)) {
			return ResponseEntity.status(HttpStatus.CONFLICT)
					.body("This customer already has a loan application.");
		}

		CustomerAllDocument cad = new CustomerAllDocument();
		cad.setPanCopy(doc1.getBytes());
		cad.setUidCopy(doc2.getBytes());
		cad.setBankPassBookCopy(doc3.getBytes());
		cad.setPhoto(doc4.getBytes());
		cad.setSignature(doc5.getBytes());
		cad.setCancelledCheck(doc6.getBytes());
		cad.setSalarySlip(doc7.getBytes());
		if (doc8 != null) {
			cad.setSanctionLetter(doc8.getBytes());
		}

		CustomerBankAccountDetails cbd = new CustomerBankAccountDetails();
		cbd.setAccountNumber(c.getCustomerBankAccountDetails().getAccountNumber());
		cbd.setIfscCode(c.getCustomerBankAccountDetails().getIfscCode());
		cbd.setBankName(c.getCustomerBankAccountDetails().getBankName());
		cbd.setAddress(c.getCustomerBankAccountDetails().getAddress());

		CustomerLocalAddress cla = new CustomerLocalAddress();
		cla.setPincode(c.getCustomerlocalAddress().getPincode());
		cla.setAreaName(c.getCustomerlocalAddress().getAreaName());
		cla.setCityName(c.getCustomerlocalAddress().getCityName());
		cla.setDistrict(c.getCustomerlocalAddress().getDistrict());
		cla.setState(c.getCustomerlocalAddress().getState());

		CustomerPermanentAddress cpa = new CustomerPermanentAddress();
		cpa.setPincode(c.getCustomerPermanentAddress().getPincode());
		cpa.setAreaName(c.getCustomerPermanentAddress().getAreaName());
		cpa.setCityName(c.getCustomerPermanentAddress().getCityName());
		cpa.setDistrict(c.getCustomerPermanentAddress().getDistrict());
		cpa.setState(c.getCustomerPermanentAddress().getState());

		GuarantorDetails gd = new GuarantorDetails();
		gd.setGuarantorName(c.getGuarantorDetails().getGuarantorName());
		gd.setGuarantorEmailId(c.getGuarantorDetails().getGuarantorEmailId());
		gd.setGuarantorMobileNo(c.getGuarantorDetails().getGuarantorMobileNo());
		gd.setGuarantorAddress(c.getGuarantorDetails().getGuarantorAddress());

		CustomerDetails customer = new CustomerDetails();
		customer.setCustomerName(c.getCustomerName());
		customer.setCustomerMobileno(c.getCustomerMobileno());
		customer.setCustomerDOB(c.getCustomerDOB());
		customer.setCustomerEmailId(c.getCustomerEmailId());
		customer.setCustomerPanNo(c.getCustomerPanNo());
		customer.setCustomerAadharNo(c.getCustomerAadharNo());
		customer.setCustomerGender(c.getCustomerGender());
		customer.setCustomerIncome(c.getCustomerIncome());
		customer.setLoanStatus("Pending");
		customer.setVerificationn("Pending");
		customer.setEnq(c.getEnq());
		customer.setCustomerAllDocument(cad);
		customer.setCustomerBankAccountDetails(cbd);
		customer.setCustomerlocalAddress(cla);
		customer.setCustomerPermanentAddress(cpa);
		customer.setGuarantorDetails(gd);

		hls.saveCustomer(customer);

		try {
			EmailSender es = new EmailSender();
			es.setFromEmail(fromEmail);
			es.setToEmail(customer.getCustomerEmailId());
			es.setSubject("Home Loan Application Submitted Successfully");
			es.setTestBody("Dear " + customer.getCustomerName()
					+ ", your home loan application form has been submitted successfully."
					+ " Your application status is Pending."
					+ " Our team will verify your documents and contact you for the next steps."
					+ "\n\nThank you,\nDeloite Finance");
			ess.sendEmail(es);
		} catch (Exception emailError) {
			System.out.println("Application saved, but confirmation email could not be sent.");
			emailError.printStackTrace();
		}

		return ResponseEntity.ok("Form Submitted SuccessFully");
	}

	@GetMapping("/getallgetData")
	public ResponseEntity<List<CustomerDetails>> getEmployee() {
		List<CustomerDetails> list = hls.viewCustomers();
		if (list.isEmpty()) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@GetMapping("/getdataByid/{id}")
	public Optional<CustomerDetails> searchCustomer(@PathVariable Integer id) {
		return hls.searchEmployeee(id);
	}

	@PutMapping("/AcceptCustomer/{id}")
	public String approveStatus(@PathVariable("id") Integer id, CustomerDetails loanStatus) {
		CustomerDetails st = hls.findCust(id);
		st.setLoanStatus("Approved");
		hls.saveCustomer(st);
		return "redirect:/getallgetData/" + loanStatus;
	}

	@PutMapping("/RejectCustomer/{id}")
	public String rejectStatus(@PathVariable("id") Integer id, String loanStatus) {
		CustomerDetails st = hls.findCust(id);
		st.setLoanStatus("Rejected");
		hls.saveCustomer(st);
		return "redirect:/getallgetData/" + loanStatus;
	}

	@PutMapping("/VarifyCust/{id}")
	public String varifiedStatus(@PathVariable("id") Integer id, String verificationn) {
		CustomerDetails st = hls.findCust(id);
		st.setVerificationn("Varified");
		hls.saveCustomer(st);
		return "redirect:/getallgetData/" + verificationn;
	}

	@PutMapping("/Unvarifiedcust/{id}")
	public String Unvarified(@PathVariable("id") Integer id, String verificationn) {
		CustomerDetails st = hls.findCust(id);
		st.setVerificationn("UnVarified");
		hls.saveCustomer(st);
		return "redirect:/getallgetData/" + verificationn;
	}
}

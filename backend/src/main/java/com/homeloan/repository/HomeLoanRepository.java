package com.homeloan.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.homeloan.model.CustomerDetails;

@Repository
public interface HomeLoanRepository extends JpaRepository<CustomerDetails, Integer> {
    Optional<CustomerDetails> findById(CustomerDetails cust);
    Optional<CustomerDetails> findById(Integer id);
    Optional<CustomerDetails> findByCustomerMobileno(long customerMobileno);
    Optional<CustomerDetails> findByCustomerPanNo(String customerPanNo);
    Optional<CustomerDetails> findByEnq_Id(Integer enquiryId);
}

package com.bosch.whm.service;

import com.bosch.whm.model.InBoundRequesitionForm;
//import com.bosch.whm.model.Product;
import com.bosch.whm.repository.ProductInboundRepository;
//import com.bosch.whm.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class InBoundRequesitionFormBOService {

    @Autowired
    private ProductInboundRepository productInboundRepository;

//    public void saveInBoundRequesition(InBoundRequesitionForm inBoundRequesitionForm) {
//        inBoundRequesitionFormBO.saveInBoundRequesition(inBoundRequesitionForm);
//    }
    
    public List<InBoundRequesitionForm> getAllInBoundRequisitions() {
        return productInboundRepository.findAll();
    }
    
    public InBoundRequesitionForm getProductInboundById(int productInboundId) {
    	return productInboundRepository.getById(productInboundId);
    }
    
    public InBoundRequesitionForm createProductInbound(InBoundRequesitionForm inBoundRequesitionForm) {
    	return productInboundRepository.save(inBoundRequesitionForm);
    }

//    public InBoundRequesitionForm updateInBoundRequesition(Long productInboundId, InBoundRequesitionForm inBoundRequesitionForm) {
//        if(productInboundRepository.existsById(productInboundId)) {
//        	inBoundRequesitionForm.setId(productInboundId);
//        	return productInboundRepository.save(inBoundRequesitionForm);
//        }
//        return null;
//    }
    
//    public void deleteInBoundRequesition(Long productInboundId) {
//    	productInboundRepository.deleteById(productInboundId);
//    }
}

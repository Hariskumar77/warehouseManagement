package com.bosch.whm.controller;

import com.bosch.whm.model.InBoundRequesitionForm;
import com.bosch.whm.service.InBoundRequesitionFormBOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inbound")
public class InBoundRequesitionFormController {

    @Autowired
    private InBoundRequesitionFormBOService inBoundRequesitionFormBOService;
    
    @GetMapping
    public List<InBoundRequesitionForm> getAllInBoundRequisitions() {
    	return inBoundRequesitionFormBOService.getAllInBoundRequisitions();
    }
    
    @GetMapping("/{id}")
    public InBoundRequesitionForm getProductInboundById(@PathVariable int productInboundId) {
    	return inBoundRequesitionFormBOService.getProductInboundById(productInboundId);
    }
    
    @PostMapping("/{productId}")
    public InBoundRequesitionForm createProductInbound(@RequestBody InBoundRequesitionForm inBoundRequesitionForm) {
    	return inBoundRequesitionFormBOService.createProductInbound(inBoundRequesitionForm);
    }
}

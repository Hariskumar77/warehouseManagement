package com.bosch.whm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bosch.whm.model.InBoundRequesitionForm;

@Repository
public interface ProductInboundRepository extends JpaRepository<InBoundRequesitionForm, Integer> {

}
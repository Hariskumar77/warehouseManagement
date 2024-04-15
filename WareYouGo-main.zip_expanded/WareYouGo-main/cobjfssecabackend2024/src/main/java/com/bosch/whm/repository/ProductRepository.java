package com.bosch.whm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bosch.whm.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>  {

}

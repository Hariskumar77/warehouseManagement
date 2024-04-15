//package com.bosch.whm.model;
//
//import org.springframework.stereotype.Component;
////import org.springframework.transaction.annotation.Transactional;
//
//import javax.persistence.EntityManager;
//import javax.persistence.PersistenceContext;
//import java.util.List;
//
//@Component
//public class InBoundRequesitionFormBO {
//
//    @PersistenceContext
//    private EntityManager entityManager;
//
////    @Transactional
//    public void saveInBoundRequesition(InBoundRequesitionForm inBoundRequesitionForm) {
//        entityManager.persist(inBoundRequesitionForm);
//    }
//
////    @Transactional
//    public void editInBoundRequesition(InBoundRequesitionForm inBoundRequesitionForm) {
//        entityManager.merge(inBoundRequesitionForm);
//    }
//
////    @Transactional
//    public void deleteInBoundRequesition(Long productInboundId) {
//        InBoundRequesitionForm requisitionForm = entityManager.find(InBoundRequesitionForm.class, productInboundId);
//        if (requisitionForm != null) {
//            entityManager.remove(requisitionForm);
//        }
//    }
//
//    public List<InBoundRequesitionForm> getAllInBoundRequisitions() {
//        return entityManager.createQuery("SELECT i FROM InBoundRequesitionForm i", InBoundRequesitionForm.class).getResultList();
//    }
//
//    // Additional methods as needed
//}

package com.bosch.whm.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Robot3")
public class Robot {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
     private int id;
     private double maxCapacity;
     private int currentStatus;
     
	public Robot(int id, double maxCapacity, int currentStatus) {
		super();
		this.id = id;
		this.maxCapacity = maxCapacity;
		this.currentStatus = currentStatus;
	}

	public Robot() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Double getMaxCapacity() {
		return maxCapacity;
	}

	public void setMaxCapacity(double maxCapacity) {
		this.maxCapacity = maxCapacity;
	}

	public int getCurrentStatus() {
		return currentStatus;
	}

	public void setCurrentStatus(int currentStatus) {
		this.currentStatus = currentStatus;
	}
		
     
     
}

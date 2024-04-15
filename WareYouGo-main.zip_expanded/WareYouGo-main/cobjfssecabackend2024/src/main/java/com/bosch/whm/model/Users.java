package com.bosch.whm.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
@Entity
public class Users {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
    private String name;
    private String email;
    private String password; 
    private String mobileNumber;
	private UserType userType;
	private UserStatus userStatus;
  
    public Users() { 
    }

	public Users(int empId, String name, String email, String password, String mobileNumber, UserType userType, UserStatus userStatus) {
    	this.id = empId;
    	this.name = name;
    	this.email = email;
    	this.password = password;
    	this.mobileNumber = mobileNumber;
    	this.userType = userType.NULL;
    	this.userStatus = userStatus;
    }
    
    public int getEmpId() {
    	return this.id;
    }
    
    public void setEmpId(int empId) {
    	this.id = empId;
    }
    
    public String getName() {
    	return this.name;
    }
    
    public void setName(String name) {
    	this.name = name;
    }
    
    public String getEmail() {
    	return this.email;
    }
    
    public void setEmail(String email) {
    	this.email = email;
    }
    
    public String getPassword() {
    	return this.password;
    }
    
    public void setPassword(String password) {
    	this.password = password;
    }
    
    public String getMobileNumber() {
    	return this.mobileNumber;
    }
    
    public void setMobileNumber(String mobileNumber) {
    	this.mobileNumber = mobileNumber;
    }
    
    public UserType getUserType() {
    	return this.userType;
    }
    
    public void setUserType(UserType userType) {
    	this.userType= userType;
    }
    
    public UserStatus getUserStatus() {
		return this.userStatus;
	}

	public void setUserStatus(UserStatus status) {
		this.userStatus = status;
	}
}
package com.bosch.whm.service;

import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.nio.charset.StandardCharsets;
import org.springframework.beans.factory.annotation.Autowired;
import com.bosch.whm.model.*;
import com.bosch.whm.repository.*;

import java.util.Date;


@Service
public class UserBOService {
	
		@Autowired 
		private UserRepository userRepository;
		
		public String hashPassword(String password) {
			try {
				MessageDigest md = MessageDigest.getInstance("SHA-256");
				byte[] hash = md.digest(password.getBytes(StandardCharsets.UTF_8));
				BigInteger number = new BigInteger(1, hash);
				StringBuilder hexString = new StringBuilder(number.toString(16));
				while (hexString.length() < 32) {
					hexString.insert(0, '0');
				}
				return hexString.toString();
			} catch (NoSuchAlgorithmException e) {
				throw new RuntimeException(e);
			}
		}
	
		public Boolean authenticate(Users temp) {
			Users user = userRepository.findByEmail(temp.getEmail());
			if (user != null) {
				if (user.getPassword().equals(hashPassword(temp.getPassword()))) {
					if (user.getUserStatus() == UserStatus.ACCEPTED)
						return true;
				}
			}
			return false;
		}
		
		
		public boolean changePassword(Users temp) {
		        Users user = userRepository.findByEmail(temp.getEmail());
		        if (user != null) {
		            user.setPassword(hashPassword(temp.getPassword()));
		            userRepository.save(user);
		            return true;
		        }
		        return false; // User with the given email not found
		}
		 
		public boolean modifyUserProfile(Users temp) {
		        Users user = userRepository.findByEmail(temp.getEmail());
		        if (user != null) {
		            user.setName(temp.getName());
		            user.setMobileNumber(temp.getMobileNumber());
		            userRepository.save(user);
		            return true;
		        }
		        return false; // User with the given email not found
		}
		
		public boolean resetPassword(Users temp) {
	        Users user = userRepository.findByEmail(temp.getEmail());
	        if (user != null && user.getMobileNumber().equals(temp.getMobileNumber()) && !user.getPassword().equals(hashPassword(temp.getPassword()))) {
	            user.setPassword(hashPassword(temp.getPassword()));
	            userRepository.save(user);
	            return true;
	        }
	        return false; // User with the given email and mobile number not found
	    }
		
		public Users fetchUser(Users temp) {
			Users user = userRepository.findByEmail(temp.getEmail());
			return user;
		}
		
		public List<Users> fetchAllUsers() {
			return userRepository.findAll();
		}
		
		public Users requestAccess(Users temp) {
			Users user = userRepository.findByEmail(temp.getEmail());
	        if (user != null) {
	        	return null;
	        }
	        else {
	        	temp.setPassword(hashPassword(temp.getPassword()));
	        	temp.setUserStatus(UserStatus.PENDING);
		        return userRepository.save(temp);
	        }
	    }
		
		public boolean acceptUser(Users temp) {
			Users user = userRepository.findByEmail(temp.getEmail());
			if (user != null) {
				temp.setUserStatus(UserStatus.ACCEPTED);
				userRepository.save(temp);
				return true;
			}
			return false;
		}
		
		public boolean rejectUser(Users temp) {
			Users user = userRepository.findByEmail(temp.getEmail());
			if (user != null) {
				temp.setUserStatus(UserStatus.DENIED);
				userRepository.save(temp);
				return true;
			}
			return false;
		}
	
	 	public List<Users> getAllUsers() {
	        return userRepository.findAll();
	    }
	 	
	 	public List<Users> fetchPendingRequests() {
	 		List<Users> temp = userRepository.findAll();
	 		List<Users> pendingList = new ArrayList<>();
	 		for (Users user : temp) {
	 			if (user.getUserStatus() == UserStatus.PENDING) {
	 				pendingList.add(user);
	 			}
	 		}
	 		return pendingList;
	 	}

	    public Optional<Users> getUserById(int id) {
	        return userRepository.findById(id);
	    }

	    public Users createUser(Users user) {
	    	user.setPassword(hashPassword(user.getPassword()));
	        return userRepository.save(user);
	    }

	    public Users updateUser(int id, Users user) {
	        if (userRepository.existsById(id)) {
	            user.setEmpId(id);
	            return userRepository.save(user);
	        }
	        return null; // You may consider throwing an exception here instead of returning null
	    }

	    public void deleteUser(int id) {
	    	userRepository.deleteById(id);
	    }
	    
	    
}







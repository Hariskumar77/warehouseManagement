package com.bosch.whm.model;

import java.util.ArrayList;
import java.util.List;

import com.bosch.whm.controller.UserController;
import com.bosch.whm.model.Users;

class UserBO{
	List<Users> list=new ArrayList<Users>();
	private UserController userController;
	
	public String createUser(Users user) {
		return null;
}

	public String authenticate(Users user) {
		return null;
	}

	public String modifyeUserProfile(Users user) {
		
		return null;
	}

	public String deleteUser(int userId) {
		return null;
	}
	
	public void userLandingPage(Users user){//epic-1}//Logic as per the user module(eg:Admin-1,manager-2,WH Operator-3)

	}
}
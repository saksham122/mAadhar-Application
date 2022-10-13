package com.example.backedapp.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backedapp.Repository.UserRepository;
import com.example.backedapp.bean.User;



@Service
public class UserService {
	@Autowired
	UserRepository userrepository;
	
	public String storeUser(User user) 
	{
		userrepository.save(user);
		return "User Store Successfully";
	}
	
	public List<User> getAllUser()
	{
		return userrepository.findAll();
	}
	
	public String findUserById(int uid) 
	{
		Optional<User> result =userrepository.findById(uid);
		if(result.isPresent()) 
		{
			User u = result.get();
			return u.toString();
		}
		else 
		{
		    return "User not Present";	
		}
		
	}
 public List<User> findUserByuadhar(float uadhar)
 {
	 return userrepository.findUserByuadhar(uadhar);
 }
 
 
 public String DeleteUser(int uid) 
	{
		Optional<User> result =userrepository.findById(uid);
		if(result.isPresent()) 
		{
			User u = result.get();
			userrepository.delete(u);
			return "User deleted successfully";
		}
		else 
		{
		    return "User not Present";	
		}
		
	}
 
 
 
 public String updateUser(User user) 
	{
		Optional<User> result =userrepository.findById(user.getUid());
		if(result.isPresent()) 
		{
			User u = result.get();
			u.setUname(user.getUname());
			u.setUrl(user.getUrl());
			u.setUadhar(user.getUadhar());
			userrepository.saveAndFlush(u);
			return "User updated successfully";
		}
		else 
		{
		    return "User not Present";	
		}
		
	}

 
}

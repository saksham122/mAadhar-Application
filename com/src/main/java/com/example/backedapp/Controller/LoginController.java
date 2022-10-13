package com.example.backedapp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backedapp.Service.LoginService;
import com.example.backedapp.bean.Login;

@RestController
@RequestMapping("login")
@CrossOrigin
public class LoginController {
	@Autowired
	LoginService loginservice;
    
	@PostMapping(value="signIn",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String signIn(@RequestBody Login login)
	{
		return loginservice.signIn(login);
	}
	@PostMapping(value="signUp",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String signUp(@RequestBody Login login)
	{
		return loginservice.signUp(login);
	}
}

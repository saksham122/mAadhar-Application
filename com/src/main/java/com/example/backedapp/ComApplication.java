package com.example.backedapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages="com.example.backedapp")
@EntityScan(basePackages="com.example.backedapp.bean")
@EnableJpaRepositories(basePackages="com.example.backedapp.Repository")
public class ComApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComApplication.class, args);
		System.out.println("server run on port number 9095");
	}

}

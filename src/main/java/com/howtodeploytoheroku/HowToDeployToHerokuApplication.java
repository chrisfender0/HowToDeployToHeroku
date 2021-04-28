package com.howtodeploytoheroku;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.howtodeploytoheroku.controller","com.howtodeploytoheroku.rest", "com.howtodeploytoheroku.entity", "com.howtodeploytoheroku.repository"})
public class HowToDeployToHerokuApplication {

	public static void main(String[] args) {
		SpringApplication.run(HowToDeployToHerokuApplication.class, args);
	}

}

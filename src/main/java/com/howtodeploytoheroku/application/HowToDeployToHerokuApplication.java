package com.howtodeploytoheroku.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.howtodeploytoheroku.controller"})
public class HowToDeployToHerokuApplication {

	public static void main(String[] args) {
		SpringApplication.run(HowToDeployToHerokuApplication.class, args);
	}

}

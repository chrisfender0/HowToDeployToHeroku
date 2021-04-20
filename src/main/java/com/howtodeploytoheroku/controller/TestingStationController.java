package com.howtodeploytoheroku.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.howtodeploytoheroku.entity.Mytable;
import com.howtodeploytoheroku.repository.MytableRepository;

@Controller
public class TestingStationController {
	
	@Autowired
	MytableRepository MytableRepo;
	
	@RequestMapping(value={"test", "Test", "TEST", "TestingStation", "testingstation", "Testingstation", "testingStation"})
	public ModelAndView testingStationController(ModelAndView mv) {
		mv.setViewName("TestingStation/TestingStation");
		System.out.println(MytableRepo.findAll());
		List<Mytable> mytable = MytableRepo.findAll();
		for (Mytable mytable2 : mytable) {
			System.out.println("name=" + mytable2.getFirstName());
		}
		return mv;
	}

}

package com.howtodeploytoheroku.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AWSController {

	@RequestMapping("/aws")
	public ModelAndView awsController(ModelAndView mv) {
		mv.setViewName("AWSAPI/awsapi");
		return mv;
	}
	
}

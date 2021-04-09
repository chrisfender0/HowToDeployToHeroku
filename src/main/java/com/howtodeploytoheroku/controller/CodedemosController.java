package com.howtodeploytoheroku.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CodedemosController {

	@RequestMapping("/javascriptDemo")
	public ModelAndView javascriptDemo(ModelAndView mv) {
		mv.setViewName("code_demos/JavascriptDemo");
		return mv;
	}
	
}

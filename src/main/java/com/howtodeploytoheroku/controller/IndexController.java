package com.howtodeploytoheroku.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {

	@RequestMapping(value={"","/","index","index.html"})
	public ModelAndView indexController(ModelAndView mv) {
		mv.setViewName("index");
		return mv;
	}
	
}

package com.howtodeploytoheroku.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AjaxPageController {
	
	@RequestMapping("/ajaxPage")
	public ModelAndView ajaxPageController(ModelAndView mv) {
		mv.setViewName("Ajax/AjaxPage");
		return mv;
	}

}

package com.howtodeploytoheroku.rest;

import org.springframework.web.bind.annotation.RestController;
import com.howtodeploytoheroku.entity.*;
import com.howtodeploytoheroku.repository.*;
import com.howtodeploytoheroku.services.CountryService;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@RestController
public class CountryResponse {
	
	@Autowired
	CountryRepo cRepo;
	
	@RequestMapping("country/{input}")
	@ResponseBody
	public List<Country> countryResponse(@PathVariable String input){
		List<Country> potentialCountries = CountryService.getResults(input, cRepo.findAll());
		potentialCountries.stream().forEach(c -> System.out.println(c.getNicename()));
		return potentialCountries;
	}

}

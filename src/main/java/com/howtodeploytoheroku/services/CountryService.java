package com.howtodeploytoheroku.services;

import java.util.List;
import java.util.stream.Collectors;

import com.howtodeploytoheroku.entity.Country;

public class CountryService {
	
	public static List<Country> getResults(String input, List<Country> allCountries){
		return allCountries.stream()
			.filter(c -> c.getNicename().toLowerCase().startsWith(input))
			.limit(10)
			.collect(Collectors.toList());
	}

}

package com.howtodeploytoheroku.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.howtodeploytoheroku.entity.*;

public interface CountryRepo extends JpaRepository<Country, Integer>{

}

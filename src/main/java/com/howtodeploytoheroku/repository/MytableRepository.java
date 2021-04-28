package com.howtodeploytoheroku.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.howtodeploytoheroku.entity.Mytable;

@Repository
public interface MytableRepository extends JpaRepository<Mytable, Integer>{
	
}

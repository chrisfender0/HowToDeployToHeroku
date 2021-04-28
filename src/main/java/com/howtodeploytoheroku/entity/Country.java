package com.howtodeploytoheroku.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="country")
public class Country {
	@Id
	private int id;
	String nicename;
//	private int numcode, phonecode;
//	private String iso, nicename, iso3;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNicename() {
		return nicename;
	}
	public void setNicename(String nicename) {
		this.nicename = nicename;
	}
//	public int getNumcode() {
//		return numcode;
//	}
//	public void setNumcode(int numcode) {
//		this.numcode = numcode;
//	}
//	public int getPhonecode() {
//		return phonecode;
//	}
//	public void setPhonecode(int phonecode) {
//		this.phonecode = phonecode;
//	}
//	public String getIso() {
//		return iso;
//	}
//	public void setIso(String iso) {
//		this.iso = iso;
//	}
//	
//	public String getIso3() {
//		return iso3;
//	}
//	public void setIso3(String iso3) {
//		this.iso3 = iso3;
//	}
	
	

}

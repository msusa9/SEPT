package com.sept.rest.webservices.restfulwebservices.group;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Group {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String description;

	public Group(Long id, String name, String description) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
	}
	
	public void setID(Long id) {
		this.id=id;
	}
	
	public Long getID() {
		return id;
	}
	
	public void setName(String name) {
		this.name=name;
	}
	
	public String getName() {
		return name;
	}
	
	public void setDescription(String description) {
		this.description=description;
	}
	
	public String getDescription() {
		return description;
	}

	
}
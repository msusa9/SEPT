package com.sept.rest.webservices.restfulwebservices.course;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Course {
	@Id
	@GeneratedValue
	private long id;
	private String name, description, username;

	//constructor
	public Course(long id, String name, String description, String username) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.username = username;
	}
	
	//ID
	public void setID(long id) {
		this.id=id;
	}
	
	public long getID() {
		return id;
	}
	
	//Name
	public void setName(String name) {
		this.name=name;
	}
	
	public String getName() {
		return name;
	}
	
	//Description
	public void setDescription(String description) {
		this.description=description;
	}
	
	public String getDescription() {
		return description;
	}
	
	//Username
	public void setUsername(String username) {
		this.username=username;
	}
	
	public String getUsername() {
		return username;
	}
}

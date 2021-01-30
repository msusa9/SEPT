package com.sept.rest.webservices.restfulwebservices.classes;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Class {
	@Id
	@GeneratedValue
	private Long id;
	private String teacher;
	private String type;
	private String classDay;
	private String classTime;
	private String course;
	private String username;

	//constructor
	public Class(long id, String teacher, String type, String classDay, String classTime, String course, String username) {
		super();
		this.id = id;
		this.teacher = teacher;
		this.type = type;
		this.classDay = classDay;
		this.classTime = classTime;
		this.course = course;
		this.username = username;
	}

	//ID
	public void setID(long id) {
		this.id=id;
	}
	
	public long getID() {
		return id;
	}
	
	//Teacher
	public void setTeacher(String teacher) {
		this.teacher=teacher;
	}
	
	public String getTeacher() {
		return teacher;
	}
	
	//Course
	public void setCourse(String course) {
		this.course=course;
	}
	
	public String getCourse() {
		return course;
	}
	
	//Type
	public void setType(String type) {
		this.type=type;
	}
	
	public String getType() {
		return type;
	}
	
	//class day
	public void setClassDay(String classDay) {
		this.classDay=classDay;
	}
		
	public String getClassDay() {
		return classDay;
	}

	//class time
	public void setClassTime(String classTime) {
		this.classTime=classTime;
	}
	
	public String getClassTime() {
		return classTime;
	}
	
	//Username
	public void setUsername(String username) {
		this.username=username;
	}
	
	public String getUsername() {
		return username;
	}
	
}

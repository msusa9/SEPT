package com.sept.rest.webservices.restfulwebservices.classes;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class ClassHardCode {

	private static List<Class> classes = new ArrayList<>();
	private static long idCounter = 0;
	
	//static method that adds three classes
	static {
		classes.add(new Class(++idCounter, "Homy", "Practical", "Friday", "8:30", "Computing Theory","holder"));
		classes.add(new Class(++idCounter, "Mr Smith", "Lecture", "Friday", "8:30","Computing Theory","holder"));
		classes.add(new Class(++idCounter, "Mr Johnson", "Tutorial", "Friday", "8:30","Computing Theory","holder"));
	}

	//finds and returns all classes stored
	public List<Class> findAll() {
		List<Class> classess = new ArrayList<>();
		List<Long> ids = new ArrayList<>();

		//array that makes sure no duplicates are added to the returned List
		for(int i=0; i<classes.size(); i++) {
			boolean found=false;
			for(int j=0; j<ids.size(); j++) {
				if(classes.get(i).getID()==ids.get(j)) {
					found=true;
				}
			}
			if(found==false) {
				classess.add(classes.get(i));
				ids.add(classes.get(i).getID());
			}
		}
		return classess;
	}
	
	//finds all classes that "username" is in
	public List<Class> findByUsername(String username){
		List<Class> classess = new ArrayList<>();
		for(int i=0; i<classes.size(); i++) {
			if(classes.get(i).getUsername().equals(username)) {
				classess.add(classes.get(i));
			}
		}
		return classess;
	}
	
	//creates class
	public Class addClass(String teacher, String type, String classDay, String classTime, String course) {
		Class classess = new Class(++idCounter,teacher,type,classDay,classTime,course,"holder");
		classes.add(classess);
		return classess;
	}
	
	//adds a student to a class
	public Class addStudentClass(long id,String username) {
		for(int i=0; i<classes.size(); i++) {
			if(classes.get(i).getID()==id && classes.get(i).getUsername().equals(username)) {
				return null;
			}
		}
		for(int i=0; i<classes.size(); i++) {
			if(classes.get(i).getID()==id) {
				Class classess = new Class(id,classes.get(i).getTeacher(),classes.get(i).getType(),classes.get(i).getClassDay(),classes.get(i).getClassTime(),classes.get(i).getCourse(),username);
				classes.add(classess);
				return classess;
			}
		}
		return null;
	}
	
	//deletes class
	public boolean deleteClass(long id) {
		boolean deleted=false;
		for(int i=0; i<classes.size(); i++) {
			if(classes.get(i).getID()==id) {
				classes.remove(i);
				deleted=true;
			}
		}
		return deleted;
	}
}

package com.sept.rest.webservices.restfulwebservices.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CourseHardCode {

	private static List<Course> courses = new ArrayList<>();
	private static long idCounter = 0;
	
	//static courses
	static {
		courses.add(new Course(++idCounter, "Computing Theory", "Learn Hard Stuff", "holder"));
		courses.add(new Course(++idCounter, "SEPT", "Learn Group Work", "holder"));
		courses.add(new Course(++idCounter, "Artificial Intelligence", "Learn AI", "holder"));
	}

	//finds and returns all courses stored
	public List<Course> findAll() {
		List<Course> userCourses = new ArrayList<>();
		List<Long> ids = new ArrayList<>();
		//loop that only returns one of the course, incase 2 of the same are present
		for(int i=0; i<courses.size(); i++) {
			boolean found=false;
			for(int j=0; j<ids.size(); j++) {
				if(courses.get(i).getID()==ids.get(j)) {
					found=true;
				}
			}
			if(found==false) {
				userCourses.add(courses.get(i));
				ids.add(courses.get(i).getID());
			}
		}
		return userCourses;
	}
	
	//creates course
	public Course addCourse(String name, String description) {
		Course course = new Course(++idCounter,name,description,"holder");
		courses.add(course);
		return course;
	}
	
	//deletes course based on ID
	public boolean deleteCourse(long id) {
		boolean deleted=false;
		for(int i=0; i<courses.size(); i++) {
			if(courses.get(i).getID()==id) {
				courses.remove(i);
				deleted=true;
			}
		}
		return deleted;
	}
	
	//adds a student to a course
	public Course addStudentCourse(long id,String username) {
		for(int i=0; i<courses.size(); i++) {
			if(courses.get(i).getID()==id && courses.get(i).getUsername().equals(username)) {
				return null;
			}
		}
		for(int i=0; i<courses.size(); i++) {
			if(courses.get(i).getID()==id) {
				Course userCourses = new Course(id,courses.get(i).getName(),courses.get(i).getDescription(),username);
				courses.add(userCourses);
				return userCourses;
			}
		}
		return null;
	}
	
	//finds a course by username
	public List<Course> findByUsername(String username){
		List<Course> userCourses = new ArrayList<>();
		for(int i=0; i<courses.size(); i++) {
			if(courses.get(i).getUsername().equals(username)) {
				userCourses.add(courses.get(i));
			}
		}
		return userCourses;
	}
}

package com.sept.rest.webservices.restfulwebservices.course;

import java.io.IOException;
import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.cloud.bigquery.JobException;

//Controller
@CrossOrigin(origins = "*")
@RestController
//
public class CourseJpaResource {

	long ID = 0;

	// instance of hardcoded methods
	@Autowired
	CourseSQL cSQL;

	public CourseJpaResource(){
		cSQL = new CourseSQL();
	}

	// finds and returns list of courses
	@GetMapping("jpa/courses/{username}")
	public List<Course> coursePathVariable(@PathVariable String username)
			throws JobException, InterruptedException, IOException {
		
		//if username is "admin" returns all courses
		if(username.equals("admin")) {
			return cSQL.findAll();
		}

		//if username is something else returns username specific courses
		else {
			return cSQL.findByUsername(username);
		}
	}
	
	//deletes course based on ID
	@DeleteMapping("jpa/course/{id}")
	public ResponseEntity<Void> deleteCourse(
			@PathVariable long id) throws InterruptedException, IOException {
		cSQL.deleteCourse(id);

		return ResponseEntity.noContent().build();
	}
	
	//creates course
	@PostMapping("jpa/course/{name}/{description}")
	public ResponseEntity<Void> createCourse(
			@PathVariable String name,@PathVariable String description) throws InterruptedException, IOException {
		
			cSQL.addCourse(name, description);
		
		return ResponseEntity.noContent().build();
	}
	
	//adds a student to a course
	@PostMapping("jpa/addStudentCourse/{id}/{username}")
	public ResponseEntity<Void> addStudentCourse(
			@PathVariable long id, @PathVariable String username) throws ParseException, JobException, InterruptedException, IOException {
		cSQL.addStudentCourse(id, username);
		
		return ResponseEntity.noContent().build();
	}
	
	//finds all students in a certain class
	@GetMapping("jpa/getStudentsCourse/{id}")
	public List<String> displayStudents(@PathVariable long id) throws InterruptedException, JobException, IOException {
		return cSQL.displayStudentsCourse(id);
	}
}

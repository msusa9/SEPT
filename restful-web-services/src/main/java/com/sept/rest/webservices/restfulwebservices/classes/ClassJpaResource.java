package com.sept.rest.webservices.restfulwebservices.classes;

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
public class ClassJpaResource {

	// create instance of classSQL
	@Autowired
	ClassSQL cSQL = new ClassSQL();

	// finds all classes depending on either if they are a student or admin
	@GetMapping("jpa/classes/{username}")
	public List<Class> classPathVariable(@PathVariable String username) throws InterruptedException, IOException {
		// returns all classes if admin
		if (username.equals("admin")) {
			return cSQL.findAll();
		}

		// returns all classes student is in if not admin
		else {
			return cSQL.findByUsername(username);
		}
	}

	// deletes course
	@DeleteMapping("jpa/class/{id}")
	public ResponseEntity<Void> deleteCourse(@PathVariable long id) throws InterruptedException, IOException {
		cSQL.deleteClass(id);

		return ResponseEntity.noContent().build();
	}

	// creates course
	@PostMapping("jpa/class/{teacher}/{type}/{classDay}/{classTime}/{course}")
	public ResponseEntity<Void> createCourse(@PathVariable String teacher, @PathVariable String type,
			@PathVariable String classDay, @PathVariable String classTime, @PathVariable String course)
			throws ParseException, InterruptedException, IOException {
		cSQL.addClass(teacher, type, classDay, classTime, course);

		return ResponseEntity.noContent().build();
	}

	// adds a student to the class
	@PostMapping("jpa/addStudentClass/{id}/{username}")
	public ResponseEntity<Void> addStudentClass(@PathVariable long id, @PathVariable String username)
			throws ParseException, JobException, InterruptedException, IOException {
		cSQL.addStudentClass(id, username);
		
		return ResponseEntity.noContent().build();
	}

	//finds all students in a certain class
	@GetMapping("jpa/getStudentsClass/{id}")
	public List<String> displayStudents(@PathVariable long id) throws InterruptedException, JobException, IOException {
		return cSQL.displayStudentsClass(id);
	}
}

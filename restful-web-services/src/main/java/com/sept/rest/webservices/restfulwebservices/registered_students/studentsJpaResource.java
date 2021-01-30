package com.sept.rest.webservices.restfulwebservices.registered_students;

import java.io.IOException;
import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.cloud.bigquery.JobException;
import com.sept.rest.webservices.restfulwebservices.registered_students.registerStudentsSQL;

//Controller
@CrossOrigin(origins = { "*" })
@RestController
public class studentsJpaResource {

	// instance of hardcoded methods
	@Autowired
	registerStudentsSQL cSQL = new registerStudentsSQL();

	// registers student to database
	@PostMapping("/jpa/addStudent/{username}/{password}/{email}")
	public ResponseEntity<Void> addStudent(@PathVariable String username, @PathVariable String password,
			@PathVariable String email) throws ParseException, JobException, InterruptedException, IOException {
		cSQL.addStudent(username, password, email);
		return ResponseEntity.noContent().build();
	}

}
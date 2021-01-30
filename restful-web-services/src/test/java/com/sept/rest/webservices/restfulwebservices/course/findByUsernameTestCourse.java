package com.sept.rest.webservices.restfulwebservices.course;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class findByUsernameTestCourse {

	public CourseHardCode cHC;
	List<Course> courses;
	@Before
	public void setUp() throws Exception {
		cHC = new CourseHardCode();
		courses = new ArrayList<>();
		cHC.addStudentCourse(1L,"sept");
		
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test() {
		courses.add(new Course(1L, "Computing Theory", "Learn Hard Stuff", "sept")); 
		Assert.assertEquals(courses.get(0).getUsername(), cHC.findByUsername("sept").get(0).getUsername());
	}

}

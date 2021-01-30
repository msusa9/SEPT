package com.sept.rest.webservices.restfulwebservices.course;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class addStudentCourseTest {
	
	public CourseHardCode cHC;
	List<Course> courses;

	@Before
	public void setUp() throws Exception {
		cHC = new CourseHardCode();
		courses = new ArrayList<>();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test() {
		cHC.addCourse("test", "test");
		
		courses = cHC.findAll();
		
		for(int i=0; i<courses.size(); i++) {
			if(courses.get(i).getName()=="Test") {
				cHC.addStudentCourse(1L, "Test");
			}
		}
		
		Assert.assertNotNull(cHC.findByUsername("Test"));
	}

}

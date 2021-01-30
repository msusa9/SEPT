package com.sept.rest.webservices.restfulwebservices.course;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class deleteCourseTest {
	
	public CourseHardCode cHC;
	List<Course> course;
	List<Course> courseTest;

	@Before
	public void setUp() throws Exception {
		cHC = new CourseHardCode();
		course = new ArrayList<>();
		courseTest = new ArrayList<>();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test() {
		//deleting course 1L which is Computing Theory
		cHC.deleteCourse(1L);
		
		courseTest = cHC.findAll();
		
		Assert.assertNotEquals(courseTest.get(0).getName(), "Computing Theory");
	}

}

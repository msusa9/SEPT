package com.sept.rest.webservices.restfulwebservices.course;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class addCourseTest {
	
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
		cHC.addCourse("Test", "Test");
		
		course = cHC.findAll();
		
		for(int i=0; i<course.size(); i++) {
			if(course.get(i).getDescription()=="Test") {
				courseTest.add(course.get(i));
			}
		}
		
		Assert.assertEquals(courseTest.get(0).getDescription(), "Test");
	}

}

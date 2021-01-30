package com.sept.rest.webservices.restfulwebservices.course;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class getCoursesTest {

	public CourseHardCode cHC;

	@Before
	public void setUp() throws Exception {
		cHC = new CourseHardCode();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test() {
		Assert.assertNotNull(cHC.findAll());
	}

}

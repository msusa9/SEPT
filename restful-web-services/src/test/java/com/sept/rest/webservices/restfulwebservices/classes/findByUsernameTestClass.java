package com.sept.rest.webservices.restfulwebservices.classes;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class findByUsernameTestClass {

	public ClassHardCode cHC;
	List<Class> classes;
	@Before
	public void setUp() throws Exception {
		cHC = new ClassHardCode();
		classes = new ArrayList<>();
		cHC.addStudentClass(1L,"sept");
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test() {
		classes.add(new Class(1L, "Mr Johnson", "Lecture", "Tuesday", "10:30", "Computing Theory", "sept")); 
		Assert.assertEquals(classes.get(0).getUsername(), cHC.findByUsername("sept").get(0).getUsername());
	}

}

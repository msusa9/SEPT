package com.sept.rest.webservices.restfulwebservices.classes;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class deleteClassTest {
	
	public ClassHardCode cHC;
	List<Class> classes;
	List<Class> classesTest;

	@Before
	public void setUp() throws Exception {
		cHC = new ClassHardCode();
		classes = new ArrayList<>();
		classesTest = new ArrayList<>();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test() {
		cHC.deleteClass(1L);
		
		classes = cHC.findAll();
	
		
		Assert.assertNotEquals(classes.get(0).getTeacher(), "Homy");
	}

}

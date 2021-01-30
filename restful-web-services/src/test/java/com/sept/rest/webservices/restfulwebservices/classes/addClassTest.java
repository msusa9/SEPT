package com.sept.rest.webservices.restfulwebservices.classes;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class addClassTest {
	
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
		cHC.addClass("Test", "Test", "Test", "Test", "Test");
		
		classes = cHC.findAll();
		
		for(int i=0; i<classes.size(); i++) {
			if(classes.get(i).getTeacher()=="Test") {
				classesTest.add(classes.get(i));
			}
		}
		
		Assert.assertEquals(classesTest.get(0).getType(), "Test");
	}

}

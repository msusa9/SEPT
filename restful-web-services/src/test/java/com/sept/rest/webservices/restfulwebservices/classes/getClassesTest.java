package com.sept.rest.webservices.restfulwebservices.classes;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class getClassesTest {

	public ClassHardCode cHC;

	@Before
	public void setUp() throws Exception {
		cHC = new ClassHardCode();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test() {
		Assert.assertNotNull(cHC.findAll());
	}

}

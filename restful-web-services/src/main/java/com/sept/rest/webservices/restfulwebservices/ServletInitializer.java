package com.sept.rest.webservices.restfulwebservices;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import com.sept.rest.webservices.restfulwebservices.RestfulWebServicesApplication;

public class ServletInitializer extends SpringBootServletInitializer
{

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(RestfulWebServicesApplication.class);
    }

}

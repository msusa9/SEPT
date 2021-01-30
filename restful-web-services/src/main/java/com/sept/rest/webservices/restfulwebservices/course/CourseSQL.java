package com.sept.rest.webservices.restfulwebservices.course;


import java.io.IOException;

import java.util.ArrayList;
import java.util.List;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.bigquery.FieldValueList;
import com.google.cloud.bigquery.JobException;
import com.google.cloud.bigquery.TableResult;

import org.springframework.stereotype.Service;

import com.sept.rest.webservices.restfulwebservices.course.Course;
import com.sept.rest.webservices.restfulwebservices.Helper;

@Service
public class CourseSQL {
    GoogleCredentials credentials;
    ArrayList<Integer> idUsed = new ArrayList<Integer>();;

    // finds and returns all course stored
    public List<Course> findAll() throws InterruptedException, IOException {
        List<Course> allCourses = new ArrayList<>();

        String query = String.format("SELECT *" + "FROM `appDataset.courses` " + "WHERE username = 'admin' ");
        TableResult result = Helper.sqlQuery(query);

        for (FieldValueList row : result.iterateAll()) {
            long id = row.get("id").getLongValue();
            String name = row.get("name").getStringValue();
            String description = row.get("description").getStringValue();
            String username = row.get("username").getStringValue();

            allCourses.add(new Course(id, name, description, username));
        }

        return allCourses;
    }

    // finds all course that "username" is in
    public List<Course> findByUsername(String username) throws InterruptedException, IOException {
        List<Course> userCourses = new ArrayList<>();

        String query = String.format("SELECT * FROM `appDataset.courses` WHERE username = '%s'", username);
		TableResult result = Helper.sqlQuery(query);

        for (FieldValueList row : result.iterateAll()) {
            long id = row.get("id").getLongValue();
            String name = row.get("name").getStringValue();
            String description = row.get("description").getStringValue();
            userCourses.add(new Course(id, name, description, username));
        }

		return userCourses;
	}

    //creates class
    public void addCourse(String name, String description) throws InterruptedException, IOException {
        int id = -1;
        while(id == -1) {
            id = Helper.pickNumberNotUsed(idUsed);
        }
        idUsed.add(id);
        String query = String.format("INSERT INTO appDataset.courses VALUES(%d,'%s','%s','admin')",id,name,description);
        Helper.sqlQuery(query);
    }

    //adds a student to a course, checks for duplicate first
	public boolean addStudentCourse(long id,String username) throws JobException, InterruptedException, IOException {
        //checking if duplicate add of student
        String query = String.format("SELECT * FROM `appDataset.courses` WHERE username = '%s' AND id = %d",username,id);
        TableResult result = Helper.sqlQuery(query);

        for (FieldValueList row : result.iterateAll()) {
            long ids = row.get("id").getLongValue();
            String usernames = row.get("username").getStringValue();
            
            if(ids==id && usernames==username){
                return false;
            }
        }

        //adding student
        query = String.format("SELECT * FROM `appDataset.courses` WHERE id = %d",id);
        result = Helper.sqlQuery(query);

        String name = null;
        String description = null;
        for (FieldValueList row : result.iterateAll()) {
            name = row.get("name").getStringValue();
            description = row.get("description").getStringValue();
        }

        query = String.format("INSERT INTO appDataset.courses VALUES(%d,'%s','%s','%s')",id,name,description,username);
		Helper.sqlQuery(query);

        return true;
    }
    
    //deletes class
	public void deleteCourse(long id) throws InterruptedException, IOException {
		String query = String.format("DELETE FROM appDataset.courses WHERE id='%d'",id);
		Helper.sqlQuery(query);
    }
    
    //finds all students in a course
    public List<String> displayStudentsCourse(long id) throws InterruptedException, IOException {
        List<String> students = new ArrayList<>();

        String query = String.format("SELECT username FROM `appDataset.courses` WHERE id = %d",id);
        TableResult result = Helper.sqlQuery(query);

        for (FieldValueList row : result.iterateAll()) {
            String username = row.get("username").getStringValue();

            students.add(username);
        }
        
        return students;
    }
}

package com.sept.rest.webservices.restfulwebservices.classes;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.bigquery.FieldValueList;
import com.google.cloud.bigquery.JobException;

import com.google.cloud.bigquery.TableResult;
import com.sept.rest.webservices.restfulwebservices.Helper;

import org.springframework.stereotype.Service;

@Service
public class ClassSQL {

    GoogleCredentials credentials;
    ArrayList<Integer> idUsed = new ArrayList<Integer>();

    // finds and returns all classes stored
    public List<Class> findAll() throws InterruptedException, IOException {
        List<Class> classes = new ArrayList<>();

        String query = "SELECT *" + "FROM `appDataset.classes` " + "WHERE username = 'admin' ";
        TableResult result = Helper.sqlQuery(query);

        for (FieldValueList row : result.iterateAll()) {
            long id = row.get("id").getLongValue();
            String teacher = row.get("teacher").getStringValue();
            String type = row.get("type").getStringValue();
            String classDay = row.get("classDay").getStringValue();
            String classTime = row.get("classTime").getStringValue();
            String course = row.get("course").getStringValue();
            String username = row.get("username").getStringValue();
            classes.add(new Class(id, teacher, type, classDay, classTime, course, username));

        }
        return classes;
    }

    // finds all classes that "username" is in
    public List<Class> findByUsername(String username) throws JobException, InterruptedException, IOException {
        List<Class> classess = new ArrayList<>();

        String query = String.format("SELECT * FROM `appDataset.classes` WHERE username = '%s'", username);
        TableResult result = Helper.sqlQuery(query);

        for (FieldValueList row : result.iterateAll()) {
            long id = row.get("id").getLongValue();
            String teacher = row.get("teacher").getStringValue();
            String type = row.get("type").getStringValue();
            String classDay = row.get("classDay").getStringValue();
            String classTime = row.get("classTime").getStringValue();
            String course = row.get("course").getStringValue();
            String usernames = row.get("username").getStringValue();
            Class classes = new Class(id, teacher, type, classDay, classTime, course, usernames);

            classess.add(classes);
        }
        return classess;
    }

    // creates class
    public void addClass(String teacher, String type, String classDay, String classTime, String course)
            throws InterruptedException, IOException {
                int id = -1;
        while(id == -1) {
            id = Helper.pickNumberNotUsed(idUsed);
        }
        idUsed.add(id);
        String query = String.format("INSERT INTO appDataset.classes VALUES(%d,'%s','%s','%s','%s','%s','admin')", id,
                teacher, type, classDay, classTime, course);
        Helper.sqlQuery(query);
    }

    // adds a student to a class, does not add duplicate student
    public boolean addStudentClass(long id, String username) throws JobException, InterruptedException, IOException {
        
        // checking if duplicate add of student
        String query = String.format("SELECT * FROM `appDataset.classes` WHERE username = '%s' AND id = %d", username, id);
        TableResult result = Helper.sqlQuery(query);

        for (FieldValueList row : result.iterateAll()) {
            long ids = row.get("id").getLongValue();
            String usernames = row.get("username").getStringValue();

            if (ids == id && usernames == username) {
                return false;
            }
        }

        // adding student
        query = String.format("SELECT * FROM `appDataset.classes` WHERE id = %d", id);
        result = Helper.sqlQuery(query);

        String teacher = null;
        String type = null;
        String classDay = null;
        String classTime = null;
        String course = null;

        for (FieldValueList row : result.iterateAll()) {
            teacher = row.get("teacher").getStringValue();
            type = row.get("type").getStringValue();
            classDay = row.get("classDay").getStringValue();
            classTime = row.get("classTime").getStringValue();
            course = row.get("course").getStringValue();
        }

        query = String.format("INSERT INTO appDataset.classes VALUES(%d,'%s','%s','%s','%s','%s','%s')", id, teacher,
                type, classDay, classTime, course, username);
        Helper.sqlQuery(query);

        return true;

    }

    // deletes class
    public void deleteClass(long id) throws InterruptedException, IOException {
        String query = String.format("DELETE FROM appDataset.classes WHERE id='%d'", id);
        Helper.sqlQuery(query);
    }

    public List<String> displayStudentsClass(long id) throws JobException, InterruptedException, IOException {
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

package com.sept.rest.webservices.restfulwebservices.registered_students;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.bigquery.FieldValueList;
import com.google.cloud.bigquery.JobException;

import com.google.cloud.bigquery.TableResult;

import java.io.IOException;

import org.springframework.stereotype.Service;

import com.sept.rest.webservices.restfulwebservices.Helper;
import com.sept.rest.webservices.restfulwebservices.registered_students.registerStudentsSQL;

@Service
public class registerStudentsSQL {
    GoogleCredentials credentials;

    public boolean addStudent(String username, String password, String email)
            throws JobException, InterruptedException, IOException {
        //checking if duplicate add of student
        String query = String.format("SELECT * FROM `appDataset.students` WHERE username = '%s'",username);
        TableResult result = Helper.sqlQuery(query);

        for (FieldValueList row : result.iterateAll()) {
            String usernames = row.get("username").getStringValue();          
            if(usernames.equals(username)){
                return false;
            }
        }

        query = String.format("INSERT INTO appDataset.students VALUES('%s','%s','%s','%s','%s','%s')",username,password,email,null,null,null);
		Helper.sqlQuery(query);
        return true;
    }
}
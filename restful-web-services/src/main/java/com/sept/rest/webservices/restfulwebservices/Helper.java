package com.sept.rest.webservices.restfulwebservices;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Random;
import java.util.UUID;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.auth.oauth2.ServiceAccountCredentials;
import com.google.cloud.bigquery.BigQuery;
import com.google.cloud.bigquery.BigQueryOptions;
import com.google.cloud.bigquery.Job;
import com.google.cloud.bigquery.JobId;
import com.google.cloud.bigquery.JobInfo;
import com.google.cloud.bigquery.QueryJobConfiguration;
import com.google.cloud.bigquery.TableResult;

public class Helper {

    public static TableResult sqlQuery(String query) throws InterruptedException, IOException {
        GoogleCredentials credentials;

        File credentialsPath = new File("key/GroupOf5-61c449fa8496.json");

        try (FileInputStream serviceAccountStream = new FileInputStream(credentialsPath)) {
            credentials = ServiceAccountCredentials.fromStream(serviceAccountStream);
        } catch(FileNotFoundException e) {
            throw new RuntimeException("Credentials File Not Found");
        }

        BigQuery bigQuery = BigQueryOptions.newBuilder().setCredentials(credentials).build().getService();
        QueryJobConfiguration queryConfig =
            QueryJobConfiguration.newBuilder(query)
                // Use standard SQL syntax for queries.
                // See: https://cloud.google.com/bigquery/sql-reference/
                .setUseLegacySql(false)
                .build();

        // Create a job ID so that we can safely retry.
        JobId jobId = JobId.of(UUID.randomUUID().toString());
        Job queryJob = bigQuery.create(JobInfo.newBuilder(queryConfig).setJobId(jobId).build());

        // Wait for the query to complete.
        queryJob = queryJob.waitFor();

        // Check for errors
        if (queryJob == null) {
            throw new RuntimeException("Job no longer exists");
        } else if (queryJob.getStatus().getError() != null) {
            // You can also look at queryJob.getStatus().getExecutionErrors() for all
            // errors, not just the latest one.
            throw new RuntimeException(queryJob.getStatus().getError().toString());
        }

        TableResult result = queryJob.getQueryResults();
        return result;
    }

    public static int pickNumberNotUsed(ArrayList<Integer> idUsed) {
        Random r = new Random();
        int id = r.nextInt((1000 - 1) + 1) + 1;
        boolean found = false;
        for (Integer i : idUsed) {
            if (i.intValue() == id) {
                found = true;
            }
        }

        return found == false ? id : -1;
    }
}
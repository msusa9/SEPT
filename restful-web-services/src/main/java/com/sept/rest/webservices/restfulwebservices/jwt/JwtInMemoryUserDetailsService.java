package com.sept.rest.webservices.restfulwebservices.jwt;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.auth.oauth2.ServiceAccountCredentials;
import com.google.cloud.bigquery.BigQuery;
import com.google.cloud.bigquery.BigQueryOptions;
import com.google.cloud.bigquery.FieldValueList;
import com.google.cloud.bigquery.Job;
import com.google.cloud.bigquery.JobException;
import com.google.cloud.bigquery.JobId;
import com.google.cloud.bigquery.JobInfo;
import com.google.cloud.bigquery.QueryJobConfiguration;
import com.google.cloud.bigquery.QueryResponse;
import com.google.cloud.bigquery.TableResult;
import java.util.UUID;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {
  GoogleCredentials credentials;
  long id = 3L;
  BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    UserDetails thisStudent = null;
    try {
      thisStudent = searchStudentSQL(username);
    } catch (InterruptedException e) {
      e.printStackTrace();
    } catch (IOException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
    // if no students are found
    if (thisStudent == null) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }
    // if student is found
    return thisStudent;
  }

  // searches for student in the cloud databse, returns null if no student is
  // found.
  public UserDetails searchStudentSQL(String username) throws InterruptedException, IOException {
    File credentialsPath = new File("key/GroupOf5-61c449fa8496.json");  // TODO: update to your key path.
        try (FileInputStream serviceAccountStream = new FileInputStream(credentialsPath)) {
        credentials = ServiceAccountCredentials.fromStream(serviceAccountStream);
        }

        BigQuery bigquery = BigQueryOptions.newBuilder().setCredentials(credentials).build().getService();


    // search for user with username
    String query = String.format("SELECT * FROM `appDataset.students` WHERE username = '%s'", username);

    QueryJobConfiguration queryConfig = QueryJobConfiguration.newBuilder(query)
        // Use standard SQL syntax for queries.
        // See: https://cloud.google.com/bigquery/sql-reference/
        .setUseLegacySql(false).build();

    // Create a job ID so that we can safely retry.
    JobId jobId = JobId.of(UUID.randomUUID().toString());
    Job queryJob = bigquery.create(JobInfo.newBuilder(queryConfig).setJobId(jobId).build());

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

    for (FieldValueList row : result.iterateAll()) {
      String usernames = row.get("username").getStringValue();
      if (usernames.equals(username)) {
        id++;
        return new JwtUserDetails(id, username, passwordEncoder.encode(row.get("password").getStringValue()),
            row.get("email").getStringValue(), "ROLE_USER_2");
      }
    }

    return null;
  }

}

FROM java:8-jdk-alpine

COPY ./target/restful-web-services-0.0.1-SNAPSHOT.jar app.jar

WORKDIR /app

RUN sh -c 'touch restful-web-services-0.0.1-SNAPSHOT.jar'
#RUN sh -c 'touch restful-web-services-0.0.1-SNAPSHOT.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
#ENTRYPOINT ["java","-jar","restful-web-services-0.0.1-SNAPSHOT.jar"]
#ENTRYPOINT ["java","-cp","app:app/lib/*","com.sept.rest.webservices.restfulwebservices.RestfulWebServicesApplication"]
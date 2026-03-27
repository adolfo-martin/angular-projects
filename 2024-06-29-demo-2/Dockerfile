FROM amazoncorretto:21.0.3
WORKDIR /app
ADD ./demo/target/demo-0.0.1-SNAPSHOT.jar /app.jar
EXPOSE 8080
CMD ["java", "-jar", "/app.jar"]

# docker build -t java-demo:0.1 .
# docker run -itd --name java-demo -p 8080:8080 java-demo:0.1


# FROM tomcat:jre21
# ADD ./demo/target/demo-0.0.1-SNAPSHOT.jar /usr/local/tomcat/webapps/
# EXPOSE 8080
# CMD ["catalina.sh", "run"]

# docker build -t tomcat:0.1 .
# docker run -itd --name tomcat-demo -p 8080:8080 tomcat:0.1
FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
ADD build/libs/loggins-cassandra-1.0-SNAPSHOT.jar app.jar
#RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar", "-ha"]

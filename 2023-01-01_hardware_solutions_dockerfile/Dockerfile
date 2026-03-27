FROM mysql:8.0.36-debian
ENV MYSQL_DATABASE hardware_solutions
ENV MYSQL_ROOT_PASSWORD Hola1234
ENV MYSQL_USER hardware_solutions
ENV MYSQL_PASSWORD Hola1234
ADD ./hardwaresolutions.sql /docker-entrypoint-initdb.d
EXPOSE 80

# docker build -t hardware_solutions:1.2 .
# docker tag hardware_solutions:1.2 adomargon/hardware_solutions:1.2
# docker push adomargon/hardware_solutions:1.2
# docker run --name hardware_solutions --publish 3306:80 hardware_solutions:1.2
# docker exec -it hardware_solutions mysql -u root -p

# mysql --host hardwaresolutionsdb.gua4axcfehegfcgw.francecentral.azurecontainer.io --port 80 -u root -p

# GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '<MY_PASSWORD>';
# FLUSH PRIVILEGES;
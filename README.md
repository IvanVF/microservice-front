# MicroserviceFront

A bicycle store microservice REST application

URL front: https://bicycle-shop-angular-java.herokuapp.com/
URL back-core: https://bicycle-shop-back-core.herokuapp.com/ return string "Microservice back core works!"

## Technologies Stack

Front: TS, Angular, Bootstrap.
Back: Java, Spring, Postgres, Liquibase, Spring-Data-Jpa, Lombok.

### Deploy to Heroku
1) For successful deploying needs server. Here using lightweight server "express": "^4.17.2" (package.json).
2) Server config described in server.js in root directory (root - it is microservice-front).
3) In server.js must be described app.use and app.get, where path should be definitely correct from "/dist" folder.
4) In package.json some devDependencies should be copied to dependencies (@angular/cli, angular/compiler-cli, typescript).
5) In package.json zone.js should be added to dependencies.
6) In package.json "engine" should be added with node & npm correct version.
7) In package.json postinstall script should be added with "ng build --aot --prod".
8) May be smth else...



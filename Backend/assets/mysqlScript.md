``` sql 
CREATE DATABASE vidstock_db;

CREATE TABLE users(uid INT AUTO_INCREMENT PRIMARY KEY , username VARCHAR(255) UNIQUE, password VARCHAR(255) );
CREATE TABLE videos(vid INT AUTO_INCREMENT PRIMARY KEY, uid INT, likes INT DEFAULT 0, name TEXT);
CREATE TABLE comments(cid INT AUTO_INCREMENT PRIMARY KEY, vid INT, uid INT, text TEXT);


INSERT INTO users(username , password) values(? , ?);

SELECT uid , username from users WHERE username = ? AND password = ?;

INSERT INTO videos(uid, name) values(?, ?);
```
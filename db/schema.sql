CREATE TABLE tracks(
  id int NOT NULL AUTO_INCREMENT,
  trackName varchar(100) NOT NULL,
  numReposts int NOT NULL DEFAULT 0,
  numPlays int NOT NULL DEFAULT 0,
  trackImgUrl varchar(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE artist(
  id int NOT NULL AUTO_INCREMENT,
  artistImgUrl varchar(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE user(
  id int NOT NULL AUTO_INCREMENT,
  userImgUrl varchar(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE trackLikes(

);


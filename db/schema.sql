DROP DATABASE IF EXISTS sosaCloud;

CREATE DATABASE sosaCloud;

USE sosaCloud;

CREATE TABLE tracks(
  id int NOT NULL AUTO_INCREMENT,
  trackName varchar(100) NOT NULL,
  artistName varchar(80) NOT NULL,
  numReposts int NOT NULL DEFAULT 0,
  numPlays int NOT NULL DEFAULT 0,
  trackImgUrl varchar(100) NOT NULL,
  numComments int DEFAULT 0,
  PRIMARY KEY(id)
);

CREATE TABLE users(
  id int NOT NULL AUTO_INCREMENT,
  userName varchar(80),
  userImgUrl varchar(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE playlists(
  id int NOT NULL AUTO_INCREMENT,
  playlistImgUrl varchar(100) NOT NULL,
  userName varchar(80),
  likes int DEFAULT 0,
  PRIMARY KEY(id)
);

CREATE TABLE likes_tracks(
  user_id int,
  track_id int,
  FOREIGN KEY (user_id)
    REFERENCES users(id),
  FOREIGN KEY (track_id)
    REFERENCES tracks(id)
);

CREATE TABLE playlist_tracks(
  track_id int,
  playlist_id int,
  FOREIGN KEY (track_id)
    REFERENCES tracks(id),
  FOREIGN KEY (playlist_id)
    REFERENCES playlists(id)
);

CREATE TABLE reposts_track(
  user_id int,
  track_id int,
  FOREIGN KEY (user_id)
    REFERENCES users(id),
  FOREIGN KEY (track_id)
    REFERENCES tracks(id)
);

LOAD DATA LOCAL INFILE 'db/testData.txt' 
  INTO TABLE tracks
  FIELDS TERMINATED BY ','
  (trackName, artistName, numReposts, numPlays, trackImgUrl, numComments);

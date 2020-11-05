-- Drop tables in case they already exist

DROP TABLE if exists work_experience;
DROP TABLE if exists education;
DROP TABLE if exists profiles;
DROP TABLE if exists users;


-- Create tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email    VARCHAR(200) NOT NULL,
  role     VARCHAR(15) NOT NULL,
  password VARCHAR(200) NOT NULL
);

CREATE TABLE profiles (
  id  SERIAL PRIMARY KEY,
  profile_public_id  INT REFERENCES users(id),
  applicant_id       VARCHAR(200) NOT NULL,
  location           VARCHAR(100) NOT NULL,
  bio                VARCHAR(200) NOT NULL,
  job_title          VARCHAR(50) NOT NULL
);

CREATE TABLE education (
id  SERIAL PRIMARY KEY,
profile_id           INT REFERENCES profiles(id),
institution          VARCHAR(100) NOT NULL,
qualification        VARCHAR(100) NOT NULL,
course_title         VARCHAR(80) NOT NULL,
start_date           DATE NOT NULL,
end_date             DATE NOT NULL
);

CREATE TABLE work_experience (
id  SERIAL PRIMARY KEY,
profile_id          INT REFERENCES profiles(id),
company             VARCHAR(100) NOT NULL,
job_title           VARCHAR(50) NOT NULL,
description         VARCHAR(250) NOT NULL,
start_date          DATE NOT NULL,
end_date            DATE NOT NULL
);
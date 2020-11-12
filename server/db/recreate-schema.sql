-- Drop tables in case they already exist

DROP TABLE if exists work_experience;
DROP TABLE if exists education;
DROP TABLE if exists profile;
DROP TYPE if exists employment_status_type;
DROP TABLE if exists users;


-- Create tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email    VARCHAR(200) NOT NULL,
  role     VARCHAR(15) NOT NULL,
  password VARCHAR(200) NOT NULL
);

CREATE TYPE employment_status_type AS ENUM (
  'full_time',
  'part_time',
  'not_looking'
);

CREATE TABLE profile (
  id  SERIAL PRIMARY KEY,
  profile_public_id  VARCHAR(50),
  applicant_id       INT REFERENCES users(id),
  location           VARCHAR(100),
  bio                TEXT,
  job_title          VARCHAR(50),
  employment_status employment_status_type DEFAULT 'full_time'
);


CREATE TABLE education (
id  SERIAL PRIMARY KEY,
profile_id           INT REFERENCES profile(id),
institution          VARCHAR(100),
qualification        VARCHAR(100),
course_title         VARCHAR(80),
start_date           DATE,
end_date             DATE
);

CREATE TABLE work_experience (
id  SERIAL PRIMARY KEY,
profile_id          INT REFERENCES profile(id),
company             VARCHAR(100),
job_title           VARCHAR(50),
description         VARCHAR(250),
start_date          DATE,
end_date            DATE
);
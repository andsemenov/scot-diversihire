-- Users seed data
-- Note: Do NOT add passwords you use in real life. Passwords are now saved as clear text. This is very bad from security point of view. We will have a task to encrypt the passwords
INSERT INTO users (email, role, password) values ('admin@cyf.org', 'applicant', 'admin_password');
INSERT INTO users (email, role, password) values ('user@cyf.org', 'applicant', 'user_password');
INSERT INTO users (email, role, password) values ('user2@cyf.org', 'applicant', 'user_password'); 
INSERT INTO users (email, role, password) values ('user3@cyf.org', 'applicant', 'user_password'); 

INSERT INTO profile (profile_public_id, applicant_id, location, bio, job_title) values ( '1Xtq-304SMKRwLJQWw-mR', 1, 'Glasgow', 'Lorem ipsum dolor sit amet.', 'Content Strategist'); 
INSERT INTO profile (profile_public_id, applicant_id, location, bio, job_title) values ( 'hKUE5--pXEA7FGoz7jr1t', 2, 'London', 'Fusce fermentum mi quis eros ullamcorper interdum.', 'Aspiring Writer'); 
INSERT INTO profile (profile_public_id, applicant_id, location, bio, job_title) values ( 'Fb7FGDnGIO9ZrygF5ENfe', 3, 'Edinburgh', 'Ut tincidunt enim elementum fringilla volutpat.', 'Software Engineer');
INSERT INTO profile (profile_public_id, applicant_id, location, bio, job_title) values ( 'yaDe3RDQ49LidXiu6WfR6', 4, 'Bristol', 'Nulla at justo ut quam mattis eleifend nec eu elit.', 'Javascript Developer');  

INSERT INTO education (profile_id, institution, qualification, course_title, start_date, end_date) values (2, 'University of A', 'degree', 'Liberal Arts', '2012-01-08', '2015-08-30'); 
INSERT INTO education (profile_id, institution, qualification, course_title, start_date, end_date) values (3, 'University of B', 'degree', 'Investment Banking', '2011-08-08', '2014-08-30'); 
INSERT INTO education (profile_id, institution, qualification, course_title, start_date, end_date) values (4, 'CodeYourFuture', 'certificate', 'Web Development', '2012-01-08', '2015-08-30'); 
INSERT INTO education (profile_id, institution, qualification, course_title, start_date, end_date) values (4, 'University of C', 'degree', 'Finance', '2011-08-08', '2014-08-30'); 

INSERT INTO work_experience (profile_id, company, job_title, description, start_date, end_date) values (1, 'ABC Media', 'Content Strategist', 'In vehicula lorem at interdum malesuada', '2020-05-30', '2020-11-11');
INSERT INTO work_experience (profile_id, company, job_title, description, start_date, end_date) values (3, 'Orange Bank Plc', 'Software Engineer', 'In vehicula lorem at interdum malesuada', '2009-08-01', '2020-05-30');
INSERT INTO work_experience (profile_id, company, job_title, description, start_date, end_date) values (4, 'CYF Plc', 'Trainee Web Developer', 'In vehicula lorem at interdum malesuada', '2020-05-30', '2020-11-11');
INSERT INTO work_experience (profile_id, company, job_title, description, start_date, end_date) values (4, 'Pay-ed Financial Services', 'Financial Analyst', 'In vehicula lorem at interdum malesuada', '2009-08-01', '2020-05-30');

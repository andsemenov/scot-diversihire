-- Users seed data
-- Note: Do NOT add passwords you use in real life. Passwords are now saved as clear text. This is very bad from security point of view. We will have a task to encrypt the passwords
INSERT INTO users (email, role, password) values ('admin@cyf.org', 'applicant', 'admin_password');
INSERT INTO users (email, role, password) values ('user@cyf.org', 'applicant', 'user_password');
INSERT INTO users (email, role, password) values ('recruiter@cyf.org', 'recruiter', 'user_password');
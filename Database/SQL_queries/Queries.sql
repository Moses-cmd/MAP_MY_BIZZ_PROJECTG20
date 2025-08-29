--Insert user
INSERT INTO users(user_id,name,surname,phone_number,email,password,home_address,gender)
VALUES
(1,'Moses','Kabza', '0123456789','mybizz@gmail.com','mybizz','07 fortuna bedworthpark veereeniging ','M');

--Insert Modules
INSERT INTO Modules(module_id,title,description,difficulty_level)
VALUES
(1,"M1","Introduction to Business","Learn the basics of running and managing a business.","Beginner");
/*("M2","Module 2","This is module 2"),
("M3","Module 3","This is module 3"),
("M4","Module 4","This is module 4"),
("M5","Module 5","This is module 5");*/

--Insert Progress
/*INSERT INTO Progress(user_id,module_id,score,completed)
VALUES
(1,"M1",85,FALSE);*/

INSERT INTO Rewards(user_id,reward_id,reward_name,badge_image,points)
VALUES
(1,1,"GOLD","Gold.jpg",10),
(1,2,"SILVER","Silver.jpg",8),
(1,3,"BRONZE","Bronze.jpg",5);

INSERT INTO Business(user_id,business_id,business_name,category,businessLocation,phone_number,business_email,business_description,business_certificate)
VALUES
(1,1,"","","","","","","");
  

create extension if not exists "uuid-ossp";

CREATE TABLE billing(
    sl_no int, 
    item_name varchar(255),
    first_inches varchar(255),
    mm varchar(255), 
    inches varchar(255), 
    cost float8,
    unique_id uuid PRIMARY KEY DEFAULT uuid_generate_v4()
     );


INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'COUPLER','','20','1/2',7.00);

INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'ELBOW','','25','3/4',7.50);

 INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'10KG ELBOW','2','63','"',86.50);

 INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'END CAP','','20','1/2',4.00);

  INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'FTA','','20','1/2',7.00);

  INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'TH. END CAP','1','40','1/4',16.00);

 INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'MTA','','20','1/2',6.00);

 INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'SERVICE SADDLE','2','63','',143.00);

  INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'TEE','','20','1/2',11.00);

INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'10KG TEE','2','63','',115.00);

 INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'TAIL PIECE','2','63','',35.00);

  INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'BALL VALVE','','20','1/2',96.00);

   INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'ELBOW 45','','20','1/2',8.50);

  INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'THREAD ELBOW','','20','1/2',17.00);

INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'REDUCER','','25','',7.00);

 INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'RED BUSH','','25','',4.50);

INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'RED TEE','','25','',19.00);

 INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'RED FTA','','25','',8.00);

  INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'RED ELBOW','','25','',14.50);

 INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'BRASS FTA','','25','',128.00);

 INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'BRASS TEE','','25','',139.50);

 INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'BRASS ELBOW','','25','',133.50);

 INSERT INTO finOlex(sl_no , item_name, inches,first_inches,mm, cost)
 VALUES(1,'RED MTA','','25','',8.00);

--  signin

CREATE EXTENSION pgcrypto;

CREATE TABLE signin (Email VARCHAR(255), password TEXT NOT NULL);

INSERT INTO  signin (Email, password) VALUES ('gjp@gmail.com',crypt('gjpmassjai', gen_salt('bf')));

CREATE TABLE craete_billing(
    sl_no int,
item_name varchar(255),
first_inches varchar(255),
mm varchar(255), 
inches varchar(255), 
cost float8,
unique_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), 
count int DEFAULT 1,
total_cost float8,
percentage float,
name varchar(255)
);

CREATE TABLE History(
    user_name varchar(255)
    item_name varchar(255), 
    cost float8, 
     Qty int, 
     date varchar(255),
     time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP );

CREATE TABLE Other(
    sl_no int,
    name varchar(255), 
    item_name varchar(255),
    first_inches varchar(255),
    cost float8,
    nameItem varchar(255),
    unique_id uuid PRIMARY KEY DEFAULT uuid_generate_v4()
     );
CREATE TABLE PVC(
    sl_no int,
    name varchar(255),
    item_name varchar(255),
    first_inches varchar(255),
    cost float8,
    nameItem varchar(255),
    unique_id uuid PRIMARY KEY DEFAULT uuid_generate_v4()
     );


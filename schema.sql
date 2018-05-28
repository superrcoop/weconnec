drop database if exists weconnec;
create database weconnec; 
\c weconnec;

drop table if exists users;
create table users(
	id int,
	username varchar(80),
	password varchar(255),
	firstname varchar(80),
	lastname varchar(80),
	email varchar(80),
	biography varchar(300),
	profile_photo varchar(80),
	joined_on date,
	primary key (user_id)
);

drop table if exists uploads;
create table uploads(
	id varchar(80),
	user_id int,
	URI varchar(80),
	description varchar(120),
	tags varchar(120),
	created_on date,
	primary key (post_id),
	foreign key (user_id) references users(user_id) on delete cascade on update cascade

);

drop table if exists follows;
create table follows(
	id int,
	user_id int,
	follower_id int,
	primary key (follows_id),
	foreign key (user_id) references users(user_id) on delete cascade on update cascade
);
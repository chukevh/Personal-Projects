create table car (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	make VARCHAR(100) NOT NULL,
	model VARCHAR(100) NOT NULL,
	price DECIMAL(19,2) NOT NULL
);

create table person (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(100),
	gender VARCHAR(7) NOT NULL,
	date_of_birth DATE NOT NULL,
	country_of_birth VARCHAR(50),
    car_id BIGINT REFERENCES car (id), UNIQUE(car_id)
);



insert into person (first_name, last_name, email, gender, date_of_birth, country_of_birth) values ('Wayland', 'McCheyne', 'wmccheyne0@meetup.com', 'Male', '18-05-2015', 'United States');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_birth) values ('Pearce', 'Parks', 'pparks1@narod.ru', 'Male', '24-02-2019', 'Germany');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_birth) values ('Lillian', 'Brayfield', 'lbrayfield2@xing.com', 'Female', '17-03-2016', 'Sweden');

insert into car (id, make, model, price) values (1, 'Kia', 'Rondo', 599197.64);
insert into car (id, make, model, price) values (2, 'Mitsubishi', 'Galant', 252459.56);

-- LINK TABLES
UPDATE person SET car_id = 1 WHERE id = 1;

-- INNER JOINS: shows all matching records
SELECT * FROM person JOIN car ON person.car_id = car.id;
SELECT person.first_name, car.make, car.model, car.price FROM person JOIN car ON person.car_id = car.id;
// LEFT JOIN: shows all records
SELECT * FROM person LEFT JOIN car ON car.id = person.car_id;
--USING only if name is same
SELECT * FROM person JOIN car USING (car_id);

-- DELETE Note: have to delete from main table before deleting in car due to foreign key constraint

\copy (SELECT * FROM person JOIN car ON car.id = person.car_id) TO 'C:/Users/Kevin/Desktop/Personal-Projects/sql/results.csv' DELIMITER ',' CSV HEADER; 
ALTER SEQUENCE person_id_seq RESTART WITH 4;
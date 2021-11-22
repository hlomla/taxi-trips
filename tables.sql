create table routes (
id serial not null primary key,
name text not null,
fare decimal (10,2)
);

create table taxi (
id serial not null primary key,
name text not null,
reg_number text not null
);

create table trip (
id serial not null primary key,
name text not null,
trips_made int not null,
taxi_id int not null,
foreign key (trips_made) references routes(id),
foreign key (taxi_id) references taxi(id)
);

create table region (
id serial not null primary key,
name text not null,
routes_id int not null,
trip_id int not null,
taxi_id int not null,
foreign key (routes_id) references routes(id),
foreign key (trip_id) references trip(id),
foreign key (taxi_id) references taxi(id)
);

insert into routes(name, fare) values ('Cape Town - Bellvile', 14.50);
insert into routes(name, fare) values ('Gauteng - Sandton', 18.00);
insert into routes(name, fare) values ('Durban - Ballisto', 25.00);
alter table routes add constraint uniq_desc_constraint unique(name);
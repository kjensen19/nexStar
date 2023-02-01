-- DB name is 'nexstar', please use this or change in pool.js

DROP TABLE IF EXISTS breweries CASCADE;
CREATE TABLE "breweries" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" VARCHAR(128)default '?',
  "street" VARCHAR(255),
  "city" VARCHAR(255),
  "state" VARCHAR(255) default 'Minnesota',
  "postal_code" VARCHAR(255),
  "phone" VARCHAR(15),
  "website_url" VARCHAR(255),
  "favorite" BOOLEAN, 
  "user_id" int references "user" NOT NULL
);
DROP TABLE IF EXISTS "user" CASCADE;
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
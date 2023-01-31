DROP TABLE IF EXISTS breweries;
CREATE TABLE "breweries" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" VARCHAR(128) NOT NULL,
  "street" VARCHAR(255),
  "city" VARCHAR(255),
  "state" VARCHAR(255) NOT NULL,
  "postal_code" VARCHAR(255),
  "website_url" VARCHAR(255),
);
DROP TABLE IF EXISTS "user";
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

DROP TABLE IF EXISTS "favorite";
CREATE TABLE "favorite" (
	"id" SERIAL PRIMARY KEY,
	"user_id" int references "user" not null,
	"brewery_id" int references "breweries" not null);
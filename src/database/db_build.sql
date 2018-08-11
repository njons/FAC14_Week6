-- BUILD THE SCHEMA: A TEMPLATE FOR YOUR HOW YOUR DATABASE WILL STORE DATA
-- transaction: everything or nothing between BEGIN and COMMIT runs
BEGIN;

-- remove the database to save the updated version
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS users_id_seq CASCADE;

-- create table BOOKINGS
CREATE TABLE users (
  -- add in the serial
  id SERIAL PRIMARY KEY,
  -- set data type for text, cannot be empty
  name VARCHAR(50) NOT NULL,
  -- set data type for the birthdate
  birthdate DATE NOT NULL,
  -- set data type for the deathdate
  deathdate DATE
);

INSERT INTO users (name, birthdate, deathdate) VALUES
('Nathalie', '1984-11-13', '2033-06-03'),
('Ingmar', '1918-07-14', '2007-07-30'),
('Ronja', '1994-07-02', '2011-11-22');

COMMIT;

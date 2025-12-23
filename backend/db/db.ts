import Database from "bun:sqlite";

const db = Database.open("./pokedex.db");

db.query(`CREATE TABLE IF NOT EXISTS pokemon (
    id INTEGER PRIMARY KEY NOT NULL,
    national_id INTEGER,
    name TEXT NOT NULL,
    type1 TEXT NOT NULL,
    type2 TEXT,
    total INTEGER NOT NULL,
    hp INTEGER  NOT NULL,
    attack INTEGER NOT NULL,
    defense INTEGER NOT NULL,
    sp_attack INTEGER NOT NULL,
    sp_defense INTEGER NOT NULL,
    speed INTEGER NOT NULL,
    generation INTEGER,
    legendary BOOLEAN
);`);
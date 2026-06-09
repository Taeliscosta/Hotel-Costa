import sqlite3 from "sqlite3";

const db = new sqlite3.Database(
  "./src/database/hotel.db",
  err => {
    if (err) {
      console.error(err.message);
      return;
    }

    console.log("Banco SQLite conectado.");
  }
);

export default db;
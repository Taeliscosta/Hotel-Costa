import fs from "fs";
import db from "./connection.js";

const schema = fs.readFileSync(
  "./src/database/schema.sql",
  "utf8"
);

db.exec(schema, err => {
  if (err) {
    console.error(err.message);
    return;
  }

  console.log("Schema criado com sucesso.");
});
import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection()
  .then(async (connection) => {
    console.log("createConnection success.");
  })
  .catch((error) => console.log(error));

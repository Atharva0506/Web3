import { Client } from "pg";
import express from "express";

const app = express();

app.use(express.json());
const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "root",
  ssl: false,
});

app.post("/insert-data", async (req, res) => {
  try {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    client.connect();
    await client.query(
      `INSERT INTO users(username,email,password) VALUES ('${username}','${email}','${password}')`
    );
   res.send({
    "message":"user signed-up/created"
   })
  } catch (error) {
    res.send({
        "message":"Error While sign-up"
    })
  }
});

app.listen(3000, () => {
  console.log("APp running 3000");
});

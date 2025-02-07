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

client.connect();
app.post("/insert-data", async (req, res) => {
  try {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
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

app.get('/get-data',async (req,res)=>{
    try {
        const username = req.body.username;
        const user =await client.query(
            `SELECT * FROM users WHERE username='${username}';`
          );
         res.send({
            data:user.rows
         })

    } catch (error) {
        res.send({
            "message":"Error While getting data"
        })
    }
})
app.get('/all-data',async (req,res)=>{
    try {
        let {rows} = await client.query(
            `SELECT * FROM users;`
          );
          res.send({
            "data" : rows
          })
    } catch (error) {
        res.send({
            "message":"Error While getting data"
        })
    }
})
app.listen(3000, () => {
  console.log("APp running 3000");
});

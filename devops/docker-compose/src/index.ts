import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const client = new PrismaClient();


app.use(express.json())
app.get("/", async (req, res) => {
  const data = (await client.user.findFirst()) || "No User";

  res.json(data);
});

app.post("/", async (req, res) => {
  const { username, password } = req.body;

  if(!username || !password){
    res.json({"message":"Invaild Data"})
  }
  const data = await client.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  res.json(data);
});
app.listen(3000);

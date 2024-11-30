import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "root",
  ssl: false,
});

async function main() {
  client.connect();
  await client.query("INSERT INTO users(username,email,password) VALUES ('nami','nami@onepiece.com','nami')");
  let data = await client.query("SELECT * FROM users;");
  console.log(data.rows)
}

main()

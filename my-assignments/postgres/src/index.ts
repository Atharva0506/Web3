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
  let data = await client.query("SELECT * FROM users;");
  console.log(data.rows)
}

main()

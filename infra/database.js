import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.development.POSTGRES_HOST,
    port: process.env.development.POSTGRES_PORT,
    user: process.env.development.POSTGRES_USER,
    database: process.env.development.POSTGRES_DB,
    password: process.env.development.POSTGRES_PASSWORD,
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};

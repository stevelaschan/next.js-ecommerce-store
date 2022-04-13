import camelcaseKeys from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';
import setPostgresDefaultsOnHeroku from './setPostgresDefaultsOnHeroku.js';

setPostgresDefaultsOnHeroku();

config();

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL) {
    sql = postgres();
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.postgresSqlClient) {
      globalThis.postgresSqlClient = postgres();
    }
    sql = globalThis.postgresSqlClient;
  }
  return sql;
}

// connect to PostgreSQL
const sql = connectOneTimeToDatabase();

// PRODUCTS
export type Product = {
  id: number;
  name: string;
  type: string;
  price: string;
};

// READ
export async function getProducts() {
  const products = await sql<[Product[]]>`
  SELECT * FROM products;
  `;
  return products.map((product: Product) => camelcaseKeys(product));
}

export async function getProductById(id: number) {
  const [product] = await sql`
  SELECT * FROM products WHERE ID = ${id};
  `;
  return camelcaseKeys(product);
}

// USER
export type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
};

// CREATE
export async function createUser(
  firstName: string,
  lastName: string,
  username: string,
  passwordHash: string,
) {
  const [user] = await sql<[User]>`
    INSERT INTO users
      (first_name, last_name, username, password_hash)
    VALUES
      (${firstName}, ${lastName}, ${username}, ${passwordHash})
    RETURNING
      id,
      first_name,
      last_name,
      username
  `;
  return camelcaseKeys(user);
}

export async function getUserByValidSessionToken(token: string | undefined) {
  if (!token) return undefined;
  const [user] = await sql<[User | undefined]>`
    SELECT
      users.id,
      users.username,
      users.first_name,
      users.last_name
    FROM
      users,
      sessions
    WHERE
      sessions.token = ${token} AND
      sessions.user_id = users.id AND
      sessions.expiry_timestamp > now()
  `;
  return user && camelcaseKeys(user);
}

// SESSION
export type Session = {
  id: number;
  token: string;
  userId: number;
};

export async function deleteExpiredSessions() {
  const sessions = await sql<Session[]>`
    DELETE FROM
      sessions
    WHERE
      expiry_timestamp < NOW()
    RETURNING *
  `;

  return sessions.map((session: Session) => camelcaseKeys(session));
}

// by valid session token
export async function getValidSessionByToken(token: string | undefined) {
  if (!token) return undefined;
  const [session] = await sql<[Session | undefined]>`
    SELECT
      *
    FROM
      sessions
    WHERE
      token = ${token} AND
      expiry_timestamp > now()
  `;

  await deleteExpiredSessions();

  return session && camelcaseKeys(session);
}

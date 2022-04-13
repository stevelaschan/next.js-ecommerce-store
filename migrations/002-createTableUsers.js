exports.up = async (sql) => {
  await sql`
    CREATE TABLE users (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      first_name varchar(20) NOT NULL,
      last_name varchar(30) NOT NULL,
      username varchar(20) NOT NULL UNIQUE,
      password_hash varchar(80) NOT NULL
    )
  `;
};

exports.down = async (sql) => {
  await sql`
    DROP TABLE users
  `;
};

exports.up = async (sql) => {
  console.log('Dropping table products...');
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(20) NOT NULL,
      type varchar(30) NOT NULL,
      price integer NOT NULL
    )
  `;
};

exports.down = async (sql) => {
  console.log('Dropping table products...');
  await sql`
    DROP TABLE products
  `;
};

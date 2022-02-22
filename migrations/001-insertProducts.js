const products = [
  { id: 1, name: 'apple', type: 'fruits_and_vegetables', price: 850 },
  { id: 2, name: 'carrot', type: 'fruits_and_vegetables', price: 850 },
  { id: 3, name: 'potato', type: 'fruits_and_vegetables', price: 950 },
  { id: 4, name: 'lemon', type: 'fruits_and_vegetables', price: 650 },
  { id: 5, name: 'milk', type: 'dairy', price: 650 },
  { id: 6, name: 'cheese', type: 'dairy', price: 1050 },
  { id: 7, name: 'yoghurt', type: 'dairy', price: 650 },
  { id: 8, name: 'butter', type: 'dairy', price: 550 },
  { id: 9, name: 'bread', type: 'grain', price: 1050 },
  { id: 10, name: 'noodle', type: 'grain', price: 850 },
  { id: 11, name: 'flour', type: 'grain', price: 650 },
  { id: 12, name: 'oatmeal', type: 'grain', price: 650 },
  { id: 13, name: 'beef', type: 'meat', price: 1250 },
  { id: 14, name: 'chicken', type: 'meat', price: 1050 },
  { id: 15, name: 'pork', type: 'meat', price: 1050 },
  { id: 16, name: 'lamb', type: 'meat', price: 1350 },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO products ${sql(products, 'name', 'type', 'price')}
  `;
};

exports.down = async (sql) => {
  for (const product of products) {
    await sql`
      DELETE FROM
        products
      WHERE
        name = ${product.name} AND
        type = ${product.type} AND
        price = ${product.price}
    `;
  }
};

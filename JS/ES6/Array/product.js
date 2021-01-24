let product = [
  { product_Name: "Iphone", price: 10000 },
  { product_Name: "Iphone 12 ", price: 60000 },
  { product_Name: "Iphone 11", price: 80000 },
];

// create new Array based product.
let newProduct = [...product];

console.log(newProduct);

/* for (let i = 0; i <= product.length - 1; i++) {
  newProduct[i] = product[i];
} */

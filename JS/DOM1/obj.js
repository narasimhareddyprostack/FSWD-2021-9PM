let products = {
  product: { name: "iphone", price: 50000 },
  cartItems: null,
  status: "delivered",
};
console.log(products.product.name);

let { product } = products;
let { name } = product;
console.log(name);

/* // Object Destructuring

let { product, status } = products;

// Array Destructuring

let size = [10, 20, 30];

let [a, b] = size;

console.log(a, b);

 */

let size = [1, 2, 3, 4]; //size is array or we called iterable object.

let a = size.forEach((x) => {
  console.log(x);
  return x;
}); // implicit return

console.log(a);

//2.Map
let b = size.map((x) => {
  console.log(x);
  return x * 10;
}); // implicit return
console.log(b);

//when we have use?

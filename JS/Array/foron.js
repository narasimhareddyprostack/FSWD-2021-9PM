let kids = {
  name: "Kids Shirt",
  price: 70000,
  qty: 50,
  category: "Kids",
  description: "Kids Testing Testing",
  usage: "Kids Testing Testing",
};

//console.log(kids.category);
let x;
for (x in kids) {
  console.log(kids[x]);
}

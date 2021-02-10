//Fat Arrow or Arrow Function
/*
()=>{}

1. Concise Code/shorter / readable code
2. implicit Return
3. this, return minmal object
4. Function Overring - conflicts will resolve 
*/

/* function Order() {
  console.log(this);
  return "Delivered";
}

let status = Order();
console.log(status); */

let Order = () => {
  console.log(this);
  return "Delivered";
};
let status = Order();
console.log(status);

let cars = [
  {
    brand: "hyundai",
    color: "red",
    name: "i10 Nios",
    type: "sportz",
  },
  {
    brand: "tata",
    color: "red",
    name: "tiago",
    type: "model1",
  },
  {
    brand: "tata",
    color: "white",
    name: "safari",
    type: "newone",
  },
];
/* // Array.find function returns only one object.
let find1 = cars.find((car) => car.color === "red");
console.log(find1); 

//array.find() - return first values fo function condition.

*/

//If we need to find all red cars we need to use Array.filter function
let find2 = cars.filter((car) => car.color === "red");
console.log(find2);
//array.filter method , return array based on your function condition.
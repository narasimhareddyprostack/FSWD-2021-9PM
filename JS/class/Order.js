class Order {
  status = "delivered";
  message = () => {
    console.log("Order Status: ", this.status);
  };
}

let x = new Order();
x.message();

console.log("Class Property:", x.status);

//How to access Class Members(properties and methods)

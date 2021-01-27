let add = () => {
  console.log(this);
};

add();

add = () => {
  console.log("Hello");
  console.log("GA");
};
add();

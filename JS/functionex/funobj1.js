let emp = {
  fistName: "Naraimha",
  lastName: "Reddy",
  fullName: function (x) {
    return this.fistName + this.lastName + "location :" + x;
  },
};

console.log(emp);
console.log(emp.fistName);
console.log(emp.fullName("Bangalore"));

console.log(emp.sal);
//console.log(emp.eligible_Hike());
/*
Note:
1. If we are accessing a property, which is not existed in ojbect , - undefined.
2. if we are accessing/invoking a function, which is not existed in object - error - type error.
*/
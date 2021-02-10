var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var filtered = array.filter(function (value, index, arr) {
  return value > 5;
});

var filternew = array.forEach((value) => value > 5);
console.log(filternew);

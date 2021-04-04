let numbers = [1, 2, 3, 4, 5, 6];
let sumeven = 0;
let sumodd = 0;
for (num of numbers) {
  if (num % 2 === 0) {
    sumeven = +num;
  } else {
    sumodd += num;
  }
}
console.log(sumeven - sumodd);

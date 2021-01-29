let arr = [32, 33, 23, 5];
let temp = 0;
let temp2 = 0;

arr.forEach((Element) => {
  temp += Element;
});
console.log(temp);

let brr = [
  [2, 3, 4],
  [7, 3, 6],
  [5, 2, 5],
];

for (let i = 0; i < brr.length; i++) {
  brr[i].forEach((Element) => {
    temp2 += Element;
  });
}
console.log(temp2);

let sum = 0;
for (let i = 0; i < brr.length; i++) {
  for (let j = 0; j <= i; i++) {
    sum += brr[i][j];
  }
}
console.log(".....", sum);

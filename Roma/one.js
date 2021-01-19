let n = [30, 20, 6, 40, 50];

let i = 0;
let small = n[0];

do {
  if (small > n[i]) {
    small = n[i];
  }
  i++;
} while (i < n.length);
console.log(small);

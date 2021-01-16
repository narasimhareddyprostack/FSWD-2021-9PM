const num = 235;
// const digits = (num, count = 0) => {
//   if (num) {
//     return digits(Math.floor(num / 10), ++count);
//   }
//   return count;
// };
// console.log(digits(num));
//-----------------

function digits(num, count = 0) {
  if (num) {
    return digits(Math.floor(num / 10), ++count);
  }
  return count;
}

console.log(digits(num));

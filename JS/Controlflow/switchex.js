/* to Display day of the week using Date Obj */
//let day = new Date().getDay;

let today = new Date();
let day = today.getDay() - 1;
switch (day) {
  case 0:
    console.log("Today is Sunday", day);
    break;
  case 1:
    console.log("Today is Monday", day);
    break;
  case 2:
    console.log("Today is Tueday", day);
    break;
  case 3:
    console.log("Today is Wedday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Happy Day");
}

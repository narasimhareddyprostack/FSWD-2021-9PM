//map - function iterate array values, return true / false based condition

let countries = ["usa", "india", "usa", "uk", "thailand", "ireland"];

let newValues = countries.filter((c) => c.length > 2);

console.log(newValues);

//first Iteration , c = usa : 3>2 :  true
//second iteration ,c = india: 5>2 : true
//

/*
        .filter(   ()=>{} )

*/
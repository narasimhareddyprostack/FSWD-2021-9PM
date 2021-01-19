const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];
//FILTER MEMBERS IN TEAM "RED"
const filterArray = array.filter((word) => word.team === "red");
console.log(filterArray);

//FILTER MEMBERS IN TEAM Not "RED"
const filterArrayOne = array.filter((word) => word.team !== "red");
console.log(filterArrayOne);

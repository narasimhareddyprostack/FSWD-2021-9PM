//function with paramenter

function emp_Info(emp_Name, Sal) {
  let hike = Sal + "100";

  console.log("Employee Name:", emp_Name, hike);
}

function emp_Info(emp_Name, Sal, loc) {
  let hike = Sal + "100";

  console.log("Employee Name:", emp_Name, hike, "Emp Loc:", loc);
}
emp_Info("Jai", 50000, "London");

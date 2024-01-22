// let grade = prompt("Enter Your Grade");
// let result = grade == "A" || grade == "B" || grade == "C" || grade == "D" ? "Pass" : "Fail";
// console.log(result);

let per = prompt("Enter Your Percentage");
let grade = prompt("Enter Your Grade");
let result = grade == "A" && per=="90" || grade == "B" && per=="80" || grade == "C" && per=="70" || grade == "D" && per=="60" ? "Pass" : "Fail";
console.log(result);
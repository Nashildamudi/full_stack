let per = 75;
let grade = "";

if (per >= 80) {
    grade = "A"
}  else if (per >= 60) {
    grade = "B"
}  else if (per >= 40) {
    grade = "C"
}  else {
    grade = "D"
}

console.log(grade);

let result;

switch (grade) {
  case "A":
    result = "you got distintion";
    break;
  case "B":
    result = "you got first class";
    break;
  case "C":
    result = "you got second class";
    break;
  case "D":
    result = "you failed";
  default:
    break;
}
console.log(result);

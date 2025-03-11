// 1. Basic switch-case Statement

let day = 3;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}


// 2. switch-case with Strings

let fruit = "Apple";

switch (fruit) {
  case "Mango":
    console.log("Mango is sweet.");
    break;
  case "Apple":
    console.log("Apple keeps the doctor away.");
    break;
  case "Banana":
    console.log("Banana is rich in potassium.");
    break;
  default:
    console.log("Unknown fruit.");
}

// 3. switch-case Without break (Fall-through)

let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
  case "C":
    console.log("Good Job!");
    break;
  case "D":
    console.log("Needs Improvement.");
    break;
  default:
    console.log("Invalid Grade");
}

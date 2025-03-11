// 1. Basic if Statement
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote!");
}


// 2. if-else Statement
let num = 10;
if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}


// 3. if-else if-else Statement

let marks = 75;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}


// 4. Nested if Statement

let username = "admin";
let password = "1234";

if (username === "admin") {
  if (password === "1234") {
    console.log("Login successful");
  } else {
    console.log("Incorrect password");
  }
} else {
  console.log("User not found");
}


// 5. Using if-else with Logical Operators
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Welcome, Admin!");
} else if (isLoggedIn && !isAdmin) {
  console.log("Welcome, User!");
} else {
  console.log("Please log in.");
}

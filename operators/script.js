// Arithmetic Operators

let a = 10, b = 5;
console.log(a + b); // 15 (Addition)
console.log(a - b); // 5 (Subtraction)
console.log(a * b); // 50 (Multiplication)
console.log(a / b); // 2 (Division)
console.log(a % b); // 0 (Modulus - Remainder)
console.log(a ** b); // 100000 (Exponentiation a^b)


// Assignment Operators

let x = 10; 
x += 5; // x = x + 5
console.log(x); // 15

x -= 3; // x = x - 3
console.log(x); // 12

x *= 2; // x = x * 2
console.log(x); // 24

x /= 4; // x = x / 4
console.log(x); // 6

x %= 5; // x = x % 5
console.log(x); // 1

x **= 2; // x = x^2
console.log(x); // 1


// Comparison Operators
let p = 10, q = 5;
console.log(p == q); // false (Equal to)
console.log(p === "10"); // false (Strict Equal - datatype check pannum)
console.log(p != q); // true (Not Equal)
console.log(p !== "10"); // true (Strict Not Equal)
console.log(p > q); // true (Greater than)
console.log(p < q); // false (Less than)
console.log(p >= 10); // true (Greater than or equal to)
console.log(p <= 5); // false (Less than or equal to)


//  Logical Operators
let isAdult = true, hasID = false;
console.log(isAdult && hasID); // false (AND - both should be true)
console.log(isAdult || hasID); // true (OR - at least one should be true)
console.log(!isAdult); // false (NOT - reverses the value)


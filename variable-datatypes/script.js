
let str = "Hello, JavaScript!"; // String
let num = 100; // Number
let decimal = 99.99; // Number (float)
let isActive = true; // Boolean
let x; // Undefined
let y = null; // Null
let bigNumber = 123456789012345678901234567890n; // BigInt
let uniqueId = Symbol('id'); // Symbol

console.log(typeof str);  // "string"
console.log(typeof num);  // "number"
console.log(typeof decimal); // "number"
console.log(typeof isActive);  // "boolean"
console.log(typeof x);  // "undefined"
console.log(typeof y);  // "object" (JavaScript bug, should be null)
console.log(typeof bigNumber);  // "bigint"
console.log(typeof uniqueId);  // "symbol"

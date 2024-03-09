// Arithmetic operators

// Addition of two numbers 
let a = 5;
let b = 2;

let sum = a+b;
console.log("Addition of a + b = "+sum);

// Substraction of two numbers
let sub = a - b;
console.log("Substraction of a + b = "+sub);

// Multiplication of two numbers
let mul = a * b;
console.log("Multiplication of a + b = "+mul);

// Division of two numbers
let div = a / b;
console.log("Division of a / b = "+div);

// Modulus operator
let mod = a % b;
console.log("Remainder = Modulus Operator: a % b = "+mod);

// Exponentiation Operator
let exp = a**b; // a^b
console.log("Exponentiation of a ** b = "+exp);

// Increment and Decrement Operators
a++; // Post increment
console.log(++a); // Pre increment
--a; // Post decrement
console.log(--a); // Pre decrement
// Logical Operators
// AND (&&)
let isValidUser1 = true && false;
console.log('isValidUser1 : '+isValidUser1);
// OR (||)
let isValidUser2 = true || false;
console.log('isValidUser2 : '+isValidUser2);
// NOT (!)
let isNotValidUser = !true;
console.log('isNotValidUser : '+isNotValidUser);
// Ternary Operator
let age = 30;
let message = (age >= 18)? "You are an adult" : "You are not an adult";
console.log(message);

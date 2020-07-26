"use strict";

//In these first 6 questions, replace `null` with the answer

//1. create a string variable, it can contain anything
const newString = 'Autumn';

//2. create a number variable, it an be any number
const newNum = 30;

//3. create a boolean variable
const newBool = true;

//4. solve the following math problem
const newSubtract = 10 - 5 === 5;

//5. Solve the following math problem
const newMultiply = 10 * 4 === 40;

//6. Solve the following math problem:
const newModulo = 21 % 5 === 1;

//In the next 22 problems you will compete the function. All of your code will go inside of the function braces.
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work.
//Do not change any of the function names

// 7
function returnString(str) {
  return str;
}

// 8
function add(x, y) {
  return x + y;
}

// 9
function subtract(x, y) {
  return x - y;
}

// 10
function multiply(x, y) {
  return x * y;
}

// 11
function divide(x, y) {
  return x % y;
}

// 12
function areEqual(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

// 13
function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

// 14
function lessThanNinety(num) {
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}

// 15
function greaterThanFifty(num) {
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}

// 16
function getRemainder(x, y) {
  return x % y;
}

// 17
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// 18
function isOdd(num) {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
//19
function square(num) {
  return num * num;
}
// 20
function cube(num) {
  return Math.pow(num, 3);
}

// 21
function raiseToPower(num, exponent) {
  return Math.pow(num, exponent);
}

// 22
function roundNumber(num) {
  return Math.ceil(num);
}

// 23
function roundUp(num) {
  return Math.round(num);
}

// 24
function addExclamationPoint(str) {
  return `${str}!`;
}



// 25
function combineNames(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// 26
function getGreeting(name) {
  return `Hello ${name}!`;
}


// The next three questions will have you implement math area formulas.
// If you can't remember these area formulas then head over to Google.

// 27
function getRectangleArea(length, width) {
  return length * width;
  // return the area of the rectangle by using length and width
  // code here
}

// 28
function getTriangleArea(base, height) {
  return (base * height)/ 2; 
} 


// return the area of the triangle by using base and height
// code here

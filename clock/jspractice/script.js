// 1.Variables
// These are how a variable gets their value and which can be changed and which cannot be changed

// const myName = "Basanta"; .....> This variable cannot be reassigned since its decleared as const
// const age = 22; .....> This variable cannot be reassigned since its decleared as const
// let favHobby = "Playing Guitar"; .....> This variable can be reassigned since its decleared as let

// myName += "Khatri";
// favHobby += " PLaying Cricket";
// console.log(favHobby)

// 2.Data Types

// const myName = "Basanta"
// let age = 22
// let isAlive = true
// const dob = null
// const myTopThreeLanguages = ['javascript','python','R']
// const car = {
//     brand:"BMW",
//     model: "X5",
//     year:2022,
//     owner: {  //Nested object inside 1 object
//         name:'Basanta',
//         age:22,
//         city:"Butwal"
//     }
// }

// console.log(`I know a friend his name is ${car.owner.name} from ${car.owner.city}.
//     He is ${car.owner.age} years old. He has a ${car.brand} ${car.model} of ${car.year}`)

// const num1 = 10 ;
// const num2 = 20 ;
// const sum = num1 + num2;
// const difference = num2 - num1;
// const product = num2 * num1;
// console.log("The sum is "+sum +" difference is "+difference + " and product is "+product)

// const isEqual = num1 === 10
// const isGreater = num2 > 20

// const age = 34
// const isAlive = true

// const checkCondition = age>21 || isAlive

// const num = 0

// if(num > 0) {
//     console.log("This number is Positive")
// }else{
//     if(num<0) {
//         console.log("The number is negative")
//     }else{
//         console.log("The number is Zero")
//     }
// }

// const mark = 76
// if(mark >= 85) {
//     console.log("A")
// }else if(mark >= 70) {
//     console.log("B")
// }else{
//     console.log("C")
// }

// // a for loop to print all even numbers from 0 to 20

// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // a while loop that prints numbers from 10 to 1 in descending order.

// let num = 10
// while (num >= 1) {
//     console.log(num)
//     num--
// }

// Write a switch statement to check the day of the week (from 0 to 6) and print the corresponding day name (0 = "Sunday", 1 = "Monday", etc.).
// If the day is not valid (outside the range 0-6), print "Invalid day".
// let day = 7;
// switch (day) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid day given");
// }

// Use the ternary operator to check if a number is even or odd and assign the result to a variable ("Even" or "Odd").

// const checkingNumber = 20

// const result = (checkingNumber % 2 === 0)? "Even":"Odd"

// console.log(`The Number ${checkingNumber} is ${result}`)

// Write a function called addNumbers(a, b) that takes two numbers as arguments and returns their sum.

// function addNumbers(a, b) {
//    const sum = a + b
//   console.log("The sum of the numbers are " + sum);
// }

// addNumbers(9,5)

// Write a function called isEven(num) that checks if a number is even and returns true if it is, otherwise returns false.

// function isEven (num) {
//     if(num%2 === 0) {
//         return true;
//     }else{
//         return false;
//     }
// }

// const result = (isEven(89)) ? "The number is even": "The number is odd"
// console.log(result)

// ------------------------------------------Functions-------------------------------------------------------//

// Write a function expression to multiply two numbers.

const multiplication = function (a, b) {
  return `The multiplication of ${a} and ${b} is ${a * b} `;
};
console.log(multiplication(4, 5));

// Convert the isEven function you wrote earlier into an arrow function.

const isEven = (num) => num % 2;

console.log(isEven(80) ? "Odd" : "Even");

// Write a function to convert a temperature from Celsius to Fahrenheit:
// Formula: F = (C × 9/5) + 32

const convertToFarnheit = (c) => (c * 9) / 5 + 32;
console.log(convertToFarnheit(40));

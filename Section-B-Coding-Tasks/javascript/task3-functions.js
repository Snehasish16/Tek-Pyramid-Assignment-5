// Task 3: Functions Practice 

//=====> Task 3.1: Create a function calculator that takes two numbers and an operation (add, subtract, multiply, divide) and returns the result. Use default parameters. 

function calculator(a = 9, b = 5, operation) {
    return operation(a, b)
}

function add(x, y) {
    return x + y
}
function subtract(x, y) {
    return x - y
}
function multiply(x, y) {
    return x * y
}
function divide(x, y) {
    if (y !== 0) {
        return x / y
    }
    else return "invalid operation"
}

console.log(calculator(5, 6, add))    //11
console.log(calculator(50, 16, subtract)) //34
console.log(calculator(25, 6, multiply))  //150
console.log(calculator(15, 5, divide))    //3

//OR
// function calculator(num1 = 0, num2 = 0, operation = "add") {
//     switch (operation) {
//         case "add":
//             return num1 + num2;

//         case "subtract":
//             return num1 - num2;

//         case "multiply":
//             return num1 * num2;

//         case "divide":
//             if (num2 === 0) {
//                 return "Cannot divide by zero";
//             }
//             return num1 / num2;

//         default:
//             return "Invalid operation";
//     }
// }
// console.log(calculator(10, 5, "add"));        
// console.log(calculator(10, 5, "subtract"));  
// console.log(calculator(10, 5, "multiply"));   
// console.log(calculator(10, 5, "divide"));     
// console.log(calculator());                   


//=====> Task 3.2: Write an arrow function that takes unlimited numbers as arguments using rest parameters and returns their sum. 
let sum = (...arr) => {
    let res = 0
    for (let val of arr) {
        res += val
    }
    return res
}
console.log(sum(1, 2, 3, 4, 5))     //15
console.log(sum(20, 15, 105, 99))     //239

//=====> Task 3.3: Create an IIFE that declares private variables and returns an object with methods to access them. 
let iife = (function () {
    let count = 0;
    let message = "this is a private message";

    return {
        increment: function (){
            return ++count;
        },
        decrement: function (){
            return --count;
        },
        getCount: function(){
            return count;
        },
        getMessage: function(){
            return message
        }
    }
})();
console.log(iife.increment())   //1
console.log(iife.decrement())   //0
console.log(iife.getCount())    //0
console.log(iife.getMessage())  //this is a private message

//=====> Write a function that demonstrates the difference between function declaration and function expression hoisting. 

function main(){
    declarationFn() //function declaration is executing
    expressionFn()  //expressionFn is not a function
}
main()

function declarationFn(){
    console.log("function declaration is executing")
}
var expressionFn = function (){
    console.log("function expressing is executing")
}
//var expressionFn = undefined, so we are calling undefined() as a function. That is why error is coming

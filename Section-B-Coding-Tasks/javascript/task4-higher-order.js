//Higher Order Function

//=====> Task 4.1: Create a higher-order function repeat(n, action) that takes a number and a callback function, and executes the callback n times. 
function higherOrder(n, action) {
    for (let i = 1; i <= n; i++) {
        action(i)
    }
}
function add(a) {
    console.log("iteration", a)
}
higherOrder(5, add)


//=====>Task 4.2: Create a higher-order function filterArray(arr, condition) where condition is a callback function that returns true/false. 
let array = [2, 3, 4, 5, 6, 7, 8, 9]

function filterArray(arr, condition) {
    let resArr = []
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            resArr.push(arr[i])
        }
    }
    return resArr
}
console.log(filterArray(array, isEven))

function isEven(a) {
    if (a % 2 == 0) {
        return true
    }
}

//=====> Task 4.3: Create a function multiplyBy(factor) that returns another function which multiplies its argument by the factor (function returning function). 
function multiplyBy(factor) {
    return function (num) {
        return num * factor
    }
}
let res1=multiplyBy(5)

console.log(res1(6)) //30

//=====> Task 4.4: Create a higher-order function operate(a, b, operation) where operation is a callback that performs different math operations. 
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

//=====>  Implement a custom forEach function that takes an array and a callback function. 
let array1=[1,2,3,4,5]

function myForEach(arr,callback){
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }

}
myForEach(array1,m1)

function m1(value,index,array){
    console.log(value,index,array)
}
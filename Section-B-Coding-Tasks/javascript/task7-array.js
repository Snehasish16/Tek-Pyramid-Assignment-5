//Task 7: Array Methods 

/* =====> Task 7.1: Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]: 
● Use map() to create a new array with each number squared 
● Use filter() to get only even numbers 
● Use reduce() to find the sum of all numbers 
● Chain map(), filter(), and reduce() to get the sum of squares of even numbers */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mapArray = numbers.map((ele) => Math.pow(ele, 2))
console.log(mapArray)       //[ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

const filteredArray = numbers.filter((ele) => ele % 2 == 0)
console.log(filteredArray)      //[ 2, 4, 6, 8, 10 ]

const reducedArray = numbers.reduce((acc, ele) => {
    return acc + ele
}, 0)
console.log(reducedArray)       //55

const combination = numbers.filter((ele) => ele % 2 == 0).map((ele) => Math.pow(ele, 2)).reduce((acc, ele) => acc + ele)
console.log(combination)       //220

/* Task 7.2: Given an array of objects: 
const users = [ 
{ name: "John", age: 25, salary: 50000 }, 
{ name: "Jane", age: 30, salary: 60000 }, 
{ name: "Bob", age: 35, salary: 55000 }, 
{ name: "Alice", age: 28, salary: 65000 } 
]; 
● Use map() to create an array of just names 
● Use filter() to get users with age > 28 
● Use reduce() to calculate total salary 
● Use reduce() to group users by age */
const users = [
    { name: "John", age: 25, salary: 50000 },
    { name: "Jane", age: 30, salary: 60000 },
    { name: "Bob", age: 35, salary: 55000 },
    { name: "Alice", age: 28, salary: 65000 }
];

const userMap = users.map((ele) => ele.name)
console.log(userMap)    //[ 'John', 'Jane', 'Bob', 'Alice' ]

const userFilter = users.filter(ele => ele.age > 28)
console.log(userFilter)     
// [
//   { name: 'Jane', age: 30, salary: 60000 },
//   { name: 'Bob', age: 35, salary: 55000 }
// ]

const userReduceSal = users.reduce((acc, ele) => {
    return acc + ele.salary
}, 0)
console.log(userReduceSal)  //230000

const userReduceAge = users.reduce((acc, user) => {
    if (!acc["20-30"]) acc["20-30"] = [];

    if (!acc["30-40"]) acc["30-40"] = [];

    if (user.age >= 20 && user.age <= 30) {
        acc["20-30"].push(user);
    } else {
        acc["30-40"].push(user);
    }
    return acc;

}, {})
console.log(userReduceAge)
// {
//   '20-30': [
//     { name: 'John', age: 25, salary: 50000 },
//     { name: 'Jane', age: 30, salary: 60000 },
//     { name: 'Alice', age: 28, salary: 65000 }
//   ],
//   '30-40': [ { name: 'Bob', age: 35, salary: 55000 } ]
// }

//=====>Task 7.3: Write polyfills for map(), filter(), and reduce() methods.
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myMap = function (callback) {
    if (typeof callback !== "function") {
        throw new Error("Callback must be a function");
    }

    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
}
let resArray = numbers2.myMap(ele => ele * 10)
console.log(resArray)   //[10, 20, 30, 40,  50, 60, 70, 80, 90, 100]

Array.prototype.myFilter = function (callback) {
    if (typeof callback !== "function") {
        throw new Error("Callback must be a function");
    }

    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
}
let resArray2 = numbers2.myFilter(ele => ele % 2 == 0)
console.log(resArray2)  //[ 2, 4, 6, 8, 10 ]

Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== "function") {
        throw new Error("Callback must be a function");
    }

    let accumulator;
    let startIndex;

    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}
let resArray3 = numbers2.myReduce((acc, ele) => acc + ele)
console.log(resArray3)  //55


//=====> Task 7.4: Given an array of students with marks, add 20 grace marks to students who scored less than 60, then filter students with marks > 60, and finally calculate the total marks using method chaining.

const students = [
    { name: "John", marks: 45 },
    { name: "Jane", marks: 75 },
    { name: "Bob", marks: 55 },
    { name: "Alice", marks: 65 }
];
const modifiedStudent = students.map((ele) => {
    if (ele.marks < 60) {
        return { ...ele, marks: ele.marks + 20 }
    }else{
        return ele
    }
}).filter((ele) => {
    return ele.marks > 60
}).reduce((acc, ele) => {
    return acc + ele.marks
}, 0)

console.log(modifiedStudent)    //280
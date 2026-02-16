//Task 9: Data Types & Comparison

//=====> Task 9.1: Create examples demonstrating type coercion in JavaScript (at least 5 examples). 

console.log(5 == "5");       //true
console.log('10' * '20');     //200
console.log(true == '1');   //true
console.log(null + 5);      //5
console.log([] + 1);        //"1"


//=====> Task 9.2: Write a function that checks the data type of a variable and returns appropriate message for all primitive and reference types. 

function checkType(value) {

    if (value === null) {
        return "Typeof null is object (primitive)";
    }

    const type = typeof value;

    if (type !== "object") {
        return `Type is ${type} (primitive)`;
    }
    if (Array.isArray(value)) {
        return "Type is array (reference type)";
    }
    if (value instanceof Date) {
        return "Type is Date object (reference type)";
    }
    if (value instanceof Map) {
        return "Type is Map (reference type)";
    }
    if (value instanceof Set) {
        return "Type is Set (reference type)";
    }
    return "Type is object (reference type)";
}

console.log(checkType("hello"));    //Type is string (primitive)
console.log(checkType(25));     //Type is number (primitive)
console.log(checkType(true));      //Type is boolean (primitive)
console.log(checkType(undefined));     //Type is undefined (primitive)
console.log(checkType(null));       //Typeof null is object (primitive)
console.log(checkType([1, 2, 3]));      //Type is array (reference type)
console.log(checkType({ name: "Mohit" }));      //Type is object (reference type)
console.log(checkType(new Date()));     //Type is Date object (reference type)
console.log(checkType(new Map()));      //Type is Map (reference type)

//=====> Task 9.3: Demonstrate the difference between == and === with 10 different examples.

console.log(5 == "5");   // true
console.log(5 === "5");  // false

console.log(true == 1);   // true
console.log(true === 1);  // false

console.log(false == 0);   // true
console.log(false === 0);  // false

console.log(null == undefined);   // true
console.log(null === undefined);  // false

console.log("" == 0);   // true
console.log("" === 0);  // false

console.log([] == "");   // true
// console.log([] === "");  // false

console.log([] == 0);   // true
// console.log([] === 0);  // false

console.log({} == {});   // false
// console.log({} === {});  // false

console.log([1,2] == [1,2]);   // false
// console.log([1,2] === [1,2]);  // false

console.log("01" == 1);   // true
console.log("01" === 1);  // false

console.log(true == "1")    //true
console.log(true === "1")   //false

//=====> Task 9.4: Create a function that identifies truthy and falsy values from an array. 

const data = [0, 1, "", "hello", null, undefined, NaN, true, false, [], {}, "0"];

function truthyOrFalsy(arr) {

    const result = {
        truthy: [],
        falsy: []
    };

    for (let value of arr) {
        if (value) {
            result.truthy.push(value);
        } else {
            result.falsy.push(value);
        }
    }

    return result;
}
const output = truthyOrFalsy(data);

console.log("Truthy Values:", output.truthy);   //Truthy Values: [ 1, 'hello', true, [], {}, '0' ]
console.log("Falsy Values:", output.falsy);     //Falsy Values: [ 0, '', null, undefined, NaN, false ]





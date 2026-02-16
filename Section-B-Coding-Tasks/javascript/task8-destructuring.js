//Task 8: Destructuring Practice 

/*Task 8.1: Destructure the following array and object: 
const arr = [10, 20, 30, 40, 50]; 
const person = { 
firstName: "John", 
lastName: "Doe", 
age: 30, 
address: { 
city: "Bangalore", 
state: "Karnataka" 
} 
}; 
● Extract first two elements from array and rest in another array 
● Extract firstName, age, and city from person object 
● Rename firstName to fName during destructuring 
*/

const arr = [10, 20, 30, 40, 50]; 
const person = { 
firstName: "John", 
lastName: "Doe", 
age: 30, 
address: { 
city: "Bangalore", 
state: "Karnataka" 
} 
}; 
const [a,b,...c] = arr
console.log(c)
console.log(`the value of a=${a}, b=${b}, c=${JSON.stringify(c)}`)  //the value of a=10, b=20, c=[30,40,50]

const {firstName:fName,age,address:{city}} = person
console.log(`perosn's first name is ${fName}, age is ${age}, city is ${city}`)  //perosn's first name is John, age is 30, city is Bangalore


//=====> Task 8.2: Write a function that accepts an object parameter and uses destructuring in the function parameters itself. 
const student = {
    name: "Mohit",
    age: 21,
    course: "Computer Science"
};

function displayUser(obj) {
    let { name, age, course }=obj
    console.log(`Name: ${name}, Age: ${age}, Course: ${course}`);
}

displayUser(student);   //Name: Mohit, Age: 21, Course: Computer Science

//=====> Task 8.3: Swap two variables using array destructuring. 
let x=10;
let y=30;

[y,x]=[x,y]

console.log(`x: ${x} , y: ${y}`)    //x: 30 , y: 10


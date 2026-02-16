//Task 6: Objects Practice 

//=====>Task 6.1: Create an object student with properties: name, age, course, and a method getDetails() that returns student information. 
let student = {
    name: "snehasish",
    age: 24,
    course: "MERN",
    getDetails: function () {
        return `Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`;
    }
}

console.log(student.getDetails()) //this keyword refers to the object that calls the method (student).

//=====> Task 6.2: Write a function that performs deep cloning of an object (handle nested objects). 
let user = {
    name: 'mohit',
    age: 21,
    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
}

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const objCopy = {};
    for (let key in obj) {
        if (Object.hasOwn(obj, key)) {
            objCopy[key] = deepClone(obj[key]);
        }
    }

    return objCopy;
}

const clonedUser = deepClone(user);

clonedUser.address.city = "delhi"

console.log(clonedUser.address.city) //delhi
console.log(user.address.city)  //bangalore

//=====> Task 6.3: Create an object with computed property names based on user input. 

function createUserObject(key, value) {
    return {
        [key]: value
    };
}

const userInputKey = "email";
const userInputValue = "mohit@gmail.com";

const user1 = createUserObject(userInputKey, userInputValue);

console.log(user1);

//Task 6.4: Write code to demonstrate the difference between shallow copy and deep copy using an object with nested properties. 
let user2 = {
    name: 'sharma ji',
    age: 51,
    address: {
        city: "Hyderabad",
        state: "Telengana"
    }
}
let shallowCopy={...user2}
let deepCopy=JSON.parse(JSON.stringify(user2))

deepCopy.address.city="vizag"
console.log(deepCopy.address.city) //vizag
console.log(user2.address.city)     //Hyderabad

shallowCopy.address.state="Andhra Pradesh"
console.log(shallowCopy.address.state) //Andhra Pradesh
console.log(user2.address.state)     //Andhra Pradesh

//shallow copy, copies only the outer layer(i.e. only the first level), the nested objects still share the same reference. But deep copy complete the make an independent copy of the original incuding the nested ones.

//=====> Task 6.5: Use Object.keys(), Object.values(), and Object.entries() to iterate through an object and display its contents. 
let sampleObj={
    name:"kiran",
    age: 18,
    subject:"Math",
    marks: 89
}

function createObject(obj){
    let keys = Object.keys(obj)
    let values = Object.values(obj)

    let newObj={}
    for(let i=0;i<keys.length;i++){
        newObj[keys[i]]=values[i]               //by using Object.keys(objRef) & Object.values(objRef)
    }
    console.log(newObj)


    let entries = Object.entries(obj)
    let entryObj={}
    for(let i=0;i<entries.length;i++){
        entryObj[entries[i][0]]=entries[i][1]   //by using Object.entries(objRef)
    }
    console.log(entryObj)
}
createObject(sampleObj)
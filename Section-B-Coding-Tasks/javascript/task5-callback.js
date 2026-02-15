// Task 5: Callback Functions 
//=====> Task 5.1: Create a function processArray(arr, callback) that processes each element using the callback function[web:52]. 

let array=[1,2,3,4,5]

function processArray(arr,callback){
    let result=[]
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i],i,arr))
    }
    return result
}
console.log(processArray(array,m1))

function m1(ele,index,array){
    return ele+3
}

//=====> Create a function calculator(a, b, operationCallback) where operations (add, subtract, multiply, divide) are passed as
//  callbacks.
function calculator(a, b, operation) {
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

//=====> Simulate asynchronous behavior: Create fetchData(callback) that uses setTimeout to mimic API call and executes callback with data after 2 seconds.  
function fetchData(callback){
    console.log("fetching data...")
    setTimeout(()=>{
        const data = {
            id: 1,
            name: "Snehasish",
            role: "Software Engineer"
        };
        callback(data)
    },3000)
}
fetchData(message)

function message(response){
    console.log("data recieved:",response)
}

//=====> Task 5.4: Create downloadFile(filename, onSuccess, onError) that randomly succeeds or fails and calls appropriate callback. 
function downloadFile(filename, onSuccess, onError){
    console.log("Starting download:", filename);

    setTimeout(() => {

        const isSuccessful = Math.random() > 0.5; // 50% chance

        if (isSuccessful) {
            onSuccess(`File "${filename}" downloaded successfully.`);
        } else {
            onError(`Failed to download "${filename}".`);
        }

    }, 2000);
}

downloadFile(
    "resume.pdf",
    function (message) {
        console.log("SUCCESS:", message);
    },
    function (error) {
        console.log("ERROR:", error);
    }
);

//=====> Implement a custom sort function that accepts an array and a comparison callback function. 
function customSort(arr, compare) {

    const result = [...arr];

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - 1 - i; j++) {

            if (compare(result[j], result[j + 1]) > 0) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    return result;
}

let compare=(a,b)=>a-b;

const numbers = [5, 2, 9, 1, 3];
const sorted = customSort(numbers, (a, b) => a - b);
console.log(sorted);

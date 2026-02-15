//Task 2: Variable & Hoisting Practice 

//=====> Task 2.1: Predict and explain the output of the following code:

console.log(a); //undefined (var keyword variable gets hoisted and initialized with undefined.)
var a = 10;
console.log(a); //10

console.log(b); //reference error: cannot access 'b' before initialization (let and const keywords get hoisted but they remain in Temporal Dead Zone, so you cannot access it before initialization)
let b = 20;
console.log(b); // this line will never get execute



//=====> Task 2.2: Create a function that demonstrates the difference between var, let, and const in loops.

function varLoopExample() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log("var:", i);
        }, 1000);
    }
}

varLoopExample(); //3
                  //3
                  //3
//var is function-scoped,there is only one i. By the time setTimeout runs, the loop has finished, i is now 3. All callbacks reference the same variable.

function letLoopExample() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log("let:", i);
        }, 1000);
    }
}

letLoopExample(); //0
                  //1
                  //2
//let is block-scoped, each loop iteration gets a new i. Each callback closes over its own i. So values are preserved correctly.


function constLoopExample() {
    for (const i = 0; i < 3; i++) {
        console.log(i);
    }
}
constLoopExample(); //TypeError: Assignment to constant variable.
//const cannot be reassigned. i++ tries to modify i.


//=====> Task 2.3: Write code that demonstrates Temporal Dead Zone with let and const
function demoLetTDZ() {
    console.log(a);   //reference error: cannot access a before its initiallization

    let a = 10;

    console.log(a);
}

demoLetTDZ();

function demoConstTDZ() {
    console.log(a);   //reference error: cannot access a before its initiallization

    let a = 10;

    console.log(a);
}

demoConstTDZ();

//here 'a' and 'b' are a is hoisted but it is not initialized. It lives in the Temporal Dead Zone(TDZ).



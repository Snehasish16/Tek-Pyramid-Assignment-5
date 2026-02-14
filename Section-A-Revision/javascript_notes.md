# A.3 JavaScript Introduction & V8 Engine

## JavaScript is a single-threaded, interpreted programming language

- Single-threaded – JavaScript executes one task at a time using a single Call Stack.
- It processes code sequentially (line by line).
- If one task blocks the thread, other tasks must wait.
- Asynchronous features (setTimeout, promises, event loop) help avoid blocking.

- Interpreted – JavaScript code is executed directly without manual compilation.
- Modern engines use JIT (Just-In-Time) compilation to improve performance.
- Code is parsed and executed at runtime.

---

## Example (Single-threaded Behavior)

```javascript
console.log("Start");

for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log("End");
```

Output:
Start  
0  
1  
2  
End

- Code executes in order.
- Each statement waits for the previous one to finish.

---

## V8 Engine Architecture

- Parser – Reads JavaScript source code and checks for syntax errors. It converts the code into an Abstract Syntax Tree (AST).

- AST (Abstract Syntax Tree) – A structured tree representation of the code. It represents the logical structure of the program.

- Ignition (Interpreter) – Converts the AST into bytecode.Executes the bytecode line by line.

- TurboFan (Optimizing Compiler) – Optimizes frequently executed (hot) code.
  Converts bytecode into highly optimized machine code.

---

## 3. JIT (Just-In-Time) Compilation

- JIT compiles code during execution.
- Improves performance by optimizing frequently used code.
- Combines interpretation and compilation.

---

## 4. Memory Heap and Call Stack

- Memory Heap – A region of memory where objects and reference data are stored.
- Stores objects, arrays, and functions.
- Memory is allocated dynamically.
- Managed automatically by JavaScript’s garbage collector.

- Call Stack – A data structure that keeps track of function execution.
- Works in LIFO (Last In, First Out) order.
- Stores execution contexts of functions.
- When a function finishes, it is removed from the stack.

---

## 5. Event Loop and Asynchronous Execution

- JavaScript is single-threaded but supports asynchronous behavior.
- The Event Loop allows non-blocking execution.
- It continuously checks the Call Stack and Callback Queue.
- If the Call Stack is empty, it pushes callbacks from the queue to the stack.

---

### Key Components

- Call Stack – Executes synchronous code.
- Web APIs – Handle async tasks (setTimeout, DOM events, fetch).
- Callback Queue – Stores completed async callbacks.
- Event Loop – Moves callbacks to Call Stack when it is empty.

---

### Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Inside Timeout");
}, 0);

console.log("End");
```

Output:
Start  
End  
Inside Timeout

---

### Execution Flow

1. "Start" goes to Call Stack → printed.
2. setTimeout is sent to Web APIs.
3. "End" executes.
4. After timer completes, callback moves to Callback Queue.
5. Event Loop pushes callback to Call Stack.
6. "Inside Timeout" prints.

---

## Interview Questions

## 1. Explain the V8 engine architecture and how it executes JavaScript code

- V8 is Google’s JavaScript engine used in Chrome and Node.js.
- It converts JavaScript code into machine code for faster execution.
- It uses a combination of interpretation and optimization (JIT compilation).

---

### V8 Execution Process

1. Parser
    - Reads the JavaScript source code.
    - Checks for syntax errors.
    - Converts code into an Abstract Syntax Tree (AST).

2. AST (Abstract Syntax Tree)
    - Structured tree representation of the code.
    - Defines the logical structure of the program.

3. Ignition (Interpreter)
    - Converts AST into bytecode.
    - Executes bytecode line by line.

4. TurboFan (Optimizing Compiler)
    - Identifies frequently executed (hot) code.
    - Converts bytecode into optimized machine code.
    - Improves performance.

---

### Execution Flow

JavaScript Code  
→ Parser  
→ AST  
→ Ignition (Bytecode)  
→ TurboFan (Optimized Machine Code)  
→ Output

---

### Example

```javascript
function multiply(a, b) {
    return a * b;
}

multiply(5, 3);
```

- Parser converts code into AST.
- Ignition converts AST to bytecode.
- If `multiply()` runs frequently, TurboFan optimizes it.
- Optimized machine code executes faster.

## 2. What is the role of Ignition and TurboFan in V8?

- Ignition and TurboFan are key components of the V8 JavaScript engine.
- They work together to execute and optimize JavaScript code

### Ignition (Interpreter)

- Converts JavaScript code (via AST) into bytecode.
- Executes bytecode line by line.
- Starts execution quickly.
- Suitable for running code immediately.

---

### TurboFan (Optimizing Compiler)

- Identifies frequently executed (hot) code.
- Converts bytecode into highly optimized machine code.
- Improves performance for repeated executions.
- Replaces slower interpreted code with optimized code.

---

## 3. How does JIT compilation improve performance?

- JIT (Just-In-Time) compilation compiles JavaScript code during execution.
- It combines interpretation and compilation for better speed.
- Frequently executed (hot) code is optimized into machine code.
- Optimized machine code runs faster than interpreted bytecode.

---

### How It Works

1. JavaScript code is parsed into AST.
2. Ignition converts AST into bytecode.
3. Code runs normally at first.
4. If some functions run repeatedly, TurboFan compiles them into optimized machine code.
5. Future executions use optimized code instead of slower bytecode.

---

## 4. What is the difference between Call Stack and Memory Heap?

- Memory Heap – A region of memory where objects and reference data are stored.
- Stores objects, arrays, and functions.
- Memory is allocated dynamically.
- Managed automatically by JavaScript’s garbage collector.

- Call Stack – A data structure that keeps track of function execution.
- Works in LIFO (Last In, First Out) order.
- Stores execution contexts of functions.
- When a function finishes, it is removed from the stack.

---

# A.4 Variables (var, let, const)

## Key Points

- var – Function-scoped, hoisted with undefined.
- let – Block-scoped, hoisted but in Temporal Dead Zone.
- const – Block-scoped, hoisted but in Temporal Dead Zone. must be initialized, cannot be reassigned.
- Scope chain – Access to variables from outer scope.
### Lexical scoping –
 - Lexical scoping means scope is determined by where variables are written in the code.
- A function can access variables from its own scope and its outer (parent) scope.
- Scope is defined at the time of writing the code, not at runtime.
- Inner functions remember variables from their outer function.

---

## Interview Questions

## 1. Compare var, let, and const with examples

- var – Function-scoped, hoisted with undefined, can be redeclared and reassigned.
- let – Block-scoped, hoisted but in Temporal Dead Zone, cannot be redeclared in same scope, can be reassigned.
- const – Block-scoped, must be initialized, cannot be redeclared or reassigned.

---

## Example

```javascript
function example() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  console.log(a); // 10
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}

example();
```

- var is accessible outside the block because it is function-scoped.
- let and const are not accessible outside the block.

---

## Reassignment & Redeclaration

```javascript
var x = 1;
var x = 2;   // Allowed
x = 3;       // Allowed

let y = 1;
// let y = 2; // Error (cannot redeclare)
y = 3;       // Allowed

const z = 1;
// z = 2;     // Error (cannot reassign)
```

---

## Hoisting Behavior

```javascript
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;

console.log(c); // ReferenceError
const c = 15;
```

- var is hoisted and initialized with undefined.
- let and const are hoisted but stay in the Temporal Dead Zone.


### 2. What is Temporal Dead Zone (TDZ)?

- The time between variable hoisting and initialization.
- Accessing let or const before declaration causes ReferenceError.

---

### 3. What happens when you access let before declaration?

- It throws a ReferenceError.

---

### 4. Can you reassign const object properties?

- Yes, properties can change.
- But the reference cannot be reassigned.

---

# A.5 Hoisting

## Key Points

- Hoisting moves declarations to the top.
- var is hoisted with undefined.
- let and const are hoisted but in TDZ.
- Function declarations are fully hoisted.
- Function expressions are not fully hoisted.

---

## Example

```javascript
console.log(a);
var a = 10;
```

Output: undefined

---

## Interview Questions

### 1. Explain hoisting with var, let, and const

- var → undefined.
- let/const → reference error(TDZ).

---

### 2. Function declaration vs expression hoisting

- Function declaration is fully hoisted.
- Function expression behaves like variable, so it dependson its keyword(i.e. let,var and const)

---

### 3. Creation Phase and Execution Phase

- Creation phase → Memory allocation.
- Execution phase → Code execution.

---
---

## A.5 Functions 

### Types of Functions

```javascript
function greet() {}
const greetExp = function () {};
const greetArrow = () => {};
```

- Function declaration – Fully hoisted.
- Function expression – Assigned to variable.
- Arrow function – Short syntax, no own this.

---


### Function Declaration vs Function Expression vs Arrow Function

- Function Declaration – Defined using `function` keyword, fully hoisted.
- Function Expression – Function stored in a variable, not fully hoisted.
- Arrow Function – Short syntax, does not have its own `this`.

```javascript
function a() {}
const b = function() {};
const c = () => {};
```

---

### Parameters vs Arguments

- Parameters – Variables defined in function definition.
- Arguments – Actual values passed to the function.

```javascript
function sum(a, b) {}  // a, b → Parameters
sum(2, 3);             // 2, 3 → Arguments
```

---

### Default Parameters

- Assign default values if no argument is passed.

```javascript
function greet(name = "Guest") {
  return name;
}
```

---

### Rest Parameters and Spread Operator

- Rest (`...`) – Collects multiple arguments into an array.
- Spread (`...`) – Expands elements of an array.

```javascript
function sum(...nums) {}
const arr = [1, 2];
console.log(...arr);
```

---

### Return Statement

- Sends a value back from a function.
- Stops function execution.

```javascript
function add(a, b) {
  return a + b;
}
```

---

### Function Scope vs Block Scope

- Function Scope – Variables declared with `var` are accessible within function.
- Block Scope – Variables declared with `let` and `const` are limited to `{}` block.

---

### IIFE (Immediately Invoked Function Expression)

- Function that runs immediately after being defined.
- Used to avoid global scope pollution.

```javascript
(function() {
  console.log("IIFE");
})();
```

---

### First-Class Functions

- Functions can be stored in variables.
- Can be passed as arguments.
- Can be returned from other functions.


---

## Interview Questions

## 1. Difference between function declaration, expression, and arrow function

- Function Declaration – Defined using the `function` keyword with a name and fully hoisted.
- Function Expression – Function stored inside a variable and not fully hoisted.
- Arrow Function – Short syntax function introduced in ES6 with lexical `this`.

---

### Syntax Examples

### Function Declaration

```javascript
function greet() {
  return "Hello";
}
```

- Fully hoisted.
- Can be called before definition.

---

### Function Expression

```javascript
const greet = function() {
  return "Hello";
};
```

- Not fully hoisted.
- Cannot be called before definition.
- Treated like a variable.

---

### Arrow Function

```javascript
const greet = () => {
  return "Hello";
};
```

- Shorter syntax.
- Does not have its own `this`.
- Not hoisted like function declarations.

---

### Hoisting Difference

```javascript
sayHello(); // Works
function sayHello() {
  console.log("Hello");
}

sayHi(); // Error
const sayHi = function() {
  console.log("Hi");
};
```

- Function declaration is hoisted.
- Function expression and arrow function behave like variables.

---

### `this` Behavior

```javascript
const obj = {
  name: "JS",
  regular: function() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};
```

- Regular function → `this` refers to object.
- Arrow function → `this` refers to outer (lexical) scope.


## 2. What are default parameters and rest parameters?

- Default parameters allow you to assign a default value to a function parameter if no argument is provided.
- Rest parameters collect multiple arguments into a single array using `...`.

---

### Default Parameter Example

```javascript
function greet(name = "Guest") {
  return "Hello " + name;
}

greet();        // Hello Guest
greet("John");  // Hello John
```

- If no argument is passed, the default value is used.

---

### Rest Parameter Example

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4);  // 10
```

- `...numbers` collects all arguments into an array.
- Useful when number of arguments is unknown.


## 3. Explain IIFE and its use cases

- IIFE (Immediately Invoked Function Expression) is a function that runs immediately after it is defined.
- It is wrapped inside parentheses to make it an expression.
- Used to create a private scope and avoid global variable pollution.

---

### Syntax

```javascript
(function() {
  console.log("IIFE executed");
})();
```

- First pair of parentheses → Converts function into expression.
- Second pair of parentheses → Immediately invokes it.

---

### Example with Parameters

```javascript
(function(name) {
  console.log("Hello " + name);
})("John");
```

---

### Use Cases

- Avoid global scope pollution.
- Create private variables.
- Execute initialization code immediately.
- Used in module pattern before ES6 modules.

---

### Example (Private Scope)

```javascript
(function() {
  let count = 0;

  console.log(count);
})();
```

- `count` cannot be accessed outside the IIFE.


## 4. How do arrow functions differ from regular functions?

- Arrow functions do not have their own `this`; regular functions do.
- Arrow functions are not suitable as object methods when `this` is required.
- Arrow functions cannot be used as constructors.
- Arrow functions do not have their own `arguments` object.
- Arrow functions have shorter syntax.

---

## Syntax Difference

### Regular Function

```javascript
function greet(name) {
  return "Hello " + name;
}
```

### Arrow Function

```javascript
const greet = (name) => {
  return "Hello " + name;
};
```

---

## `this` Behavior

```javascript
const obj = {
  name: "JavaScript",
  regular: function() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

obj.regular(); // JavaScript
obj.arrow();   // undefined (or global scope)
```

- Regular function → `this` refers to the object.
- Arrow function → `this` refers to outer (lexical) scope.

---

## Constructor Difference

```javascript
function Person(name) {
  this.name = name;
}

const p1 = new Person("John"); // Works

const PersonArrow = (name) => {
  this.name = name;
};

const p2 = new PersonArrow("John"); // Error
```

- Arrow functions cannot be used with `new`.

## 5. What does it mean that functions are first-class citizens in JavaScript?

- Functions can be assigned to variables.
- Functions can be passed as arguments to other functions.
- Functions can be returned from other functions.
- Functions can be stored inside objects and arrays.

This ability makes functions behave like normal values
.
# A.7 Higher-Order Functions

## Key Points

- Definition – A higher-order function is a function that takes another function as an argument or returns a function.
- Enabled by first-class functions – Since functions can be passed and returned, higher-order functions are possible.
- Common higher-order functions – `map()`, `filter()`, `reduce()`, `forEach()`.
- Custom higher-order function – You can create your own function that accepts a callback.
- Function composition – Combining multiple functions to build reusable logic.
- Abstraction – Hides complex logic and makes code cleaner.
- Use cases – Array manipulation, event handling, asynchronous operations.


---

## Interview Questions

## 1. What is a higher-order function?

- A higher-order function is a function that takes another function as an argument or returns a function.
- It is possible because functions are first-class citizens in JavaScript.
- It helps in writing reusable and cleaner code.

---

### Example (Function as Argument)

```javascript
function greet(name) {
  return "Hello " + name;
}

function processUser(fn, user) {
  return fn(user);
}

console.log(processUser(greet, "John")); // Hello John
```

- `processUser` is a higher-order function.
- It takes another function `greet` as argument.

---

### Example (Function Returning Function)

```javascript
function multiplyBy(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10
```

- `multiplyBy` returns a function.
- This is also a higher-order function.


## 2. How is map() a higher-order function?

- It takes a callback function as argument. Then that callback function takes three parameters(i.e. element,index and array)

---

## 3. Custom HOF Example

- A custom higher-order function is a function that takes another function as an argument or returns a function.
- It allows reusable and flexible logic.

---

### Example (Function as Argument)

```javascript
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(2, 3, add));       // 5
console.log(calculate(2, 3, multiply));  // 6
```

- `calculate` is a higher-order function.
- It receives another function (`add` or `multiply`) as an argument.

---

### Example (Function Returning Function)

```javascript
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10
```

- `createMultiplier` returns a function.
- This is also a custom higher-order function.

## 4. Why are HOFs important?

- Promote code reusability by allowing functions to be reused with different behaviors.
- Reduce code duplication by abstracting common logic.
- Improve readability and maintainability.
- Enable functional programming patterns.
- Make asynchronous programming easier (callbacks, promises).

---

### Example

```javascript
const numbers = [1, 2, 3, 4];

const squared = numbers.map(num => num * num);
const even = numbers.filter(num => num % 2 === 0);
```

- `map()` and `filter()` are higher-order functions.
- They allow applying different logic without rewriting loops.

---

### Key Benefit

- Write once, use many times with different callback functions.


# A.8 Callback Functions

# A.7 Callback Functions – Short Notes

- Definition – A callback function is a function passed as an argument to another function.
- It is executed after the main function finishes its task.
- Enabled by first-class functions in JavaScript.

---

## Types of Callbacks

- Synchronous callbacks – Executed immediately (e.g., `map()`, `filter()`, `sort()`).
- Asynchronous callbacks – Executed later (e.g., `setTimeout()`, event listeners, API calls).

---

## Example (Synchronous)

```javascript
const numbers = [1, 2, 3];

numbers.map(function(num) {
  return num * 2;
});
```

- The callback runs immediately for each element.

---

## Example (Asynchronous)

```javascript
setTimeout(function() {
  console.log("Hello");
}, 1000);
```

- The callback runs after 1 second.

---

## Callback Execution Flow

- Main function starts execution.
- Callback is passed as argument.
- Callback executes either immediately (sync) or later (async).

---

## Passing Arguments to Callbacks

```javascript
function process(value, callback) {
  callback(value);
}
```

- Arguments can be passed from parent function to callback.

---

## Anonymous vs Named Callbacks

- Anonymous – Function without a name.
- Named – Function with a name, reusable.

---

## Advantages

- Promotes code reusability.
- Helps handle asynchronous operations.
- Makes code modular and flexible.
---
---

## Interview Questions

## 1. What is a callback function and why is it used?

- A callback function is a function passed as an argument to another function.
- It is executed after the main function completes its task.
- Used to make code reusable and flexible.
- Commonly used for handling asynchronous operations.

---

### Example

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function done() {
  console.log("Greeting completed");
}

greet("John", done);
```

- `done` is the callback function.

---

## 2. Difference between synchronous and asynchronous callbacks

- Synchronous callback – Executes immediately during function execution.
- Asynchronous callback – Executes later after an event or delay.

### Synchronous Example

```javascript
[1, 2, 3].map(num => num * 2);
```

### Asynchronous Example

```javascript
setTimeout(() => {
  console.log("Delayed");
}, 1000);
```

---

## 3. How do you pass arguments to a callback function?

```javascript
function process(value, callback) {
  callback(value);
}

process(5, function(num) {
  console.log(num * 2);
});
```

- Arguments are passed from the main function to the callback.

---

## 4. Give 3 real-world examples of callbacks in JavaScript

- Handling button click events.
- Fetching data from an API.
- Running code after a timer using `setTimeout()`.

---

### Example (Event Listener)

```javascript
document.addEventListener("click", function() {
  console.log("Button clicked");
});
```


# A.8 Objects

## Object Creation Methods

- Literal – Create object using `{}`.
- Constructor – Create using `new Object()`.
- Object.create() – Creates object with specified prototype.

```javascript
const obj1 = { name: "John" };

const obj2 = new Object();
obj2.age = 25;

const obj3 = Object.create({});
obj3.city = "Delhi";
```

---

## Accessing Properties (Dot Notation vs Bracket Notation)

- Dot notation – Access object properties using `object.propertyName`.
- Bracket notation – Access properties using `object["propertyName"]`.
- Bracket notation is useful when property name is dynamic or contains spaces/special characters.

---

### Example

```javascript
const user = {
  name: "John",
  age: 25,
  "user role": "Admin"
};
```

### Dot Notation

```javascript
console.log(user.name); // John
console.log(user.age);  // 25
```

- Simple and commonly used.
- Cannot be used with spaces in property names.

---

### Bracket Notation

```javascript
console.log(user["name"]);       // John
console.log(user["user role"]);  // Admin
```

- Required when property name has spaces.
- Used for dynamic property access.

---

### Dynamic Property Example

```javascript
const key = "name";
console.log(user[key]); // John
```

- Dot notation cannot use variables.
- Bracket notation allows dynamic keys.


## Adding, Modifying, Deleting Properties

```javascript
const user = { name: "John" };

user.age = 30;          // Add
user.name = "Doe";      // Modify
delete user.age;        // Delete
```

---

## Object Methods

- Functions inside objects are called methods.

```javascript
const person = {
  name: "John",
  greet: function() {
    return "Hello";
  }
};
```

---

## `this` Keyword in Objects

- `this` refers to the current object.

```javascript
const obj = {
  name: "JS",
  show() {
    console.log(this.name);
  }
};
```

---

## Object Destructuring

- Extract values from objects easily.

```javascript
const user = { name: "John", age: 25 };
const { name, age } = user;
```

---

## Object Methods (Built-in)

- Object.keys() – Returns array of keys.
- Object.values() – Returns array of values.
- Object.entries() – Returns array of [key, value] pairs.

```javascript
Object.keys(user);
Object.values(user);
Object.entries(user);
```

---

## Shallow Copy vs Deep Copy

- Shallow copy – Copies only the top-level properties. Nested objects still share the same reference.
- Deep copy – Copies all nested objects separately. No shared references.

---

## Shallow Copy Example

```javascript
const user = {
  name: "John",
  address: {
    city: "Delhi"
  }
};

const copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city); // Mumbai (Original object changed)
```

- Spread operator creates a shallow copy.
- Nested objects are still linked.

---

## Deep Copy Example

```javascript
const user = {
  name: "John",
  address: {
    city: "Delhi"
  }
};

const deepCopy = JSON.parse(JSON.stringify(user));

deepCopy.address.city = "Mumbai";

console.log(user.address.city); // Delhi (Original unchanged)
```

- Deep copy creates completely separate nested objects.
- Changes do not affect the original object.

---

## Key Difference

- Shallow copy → Copies reference for nested objects.
- Deep copy → Creates independent copy of entire object.


## Interview Questions

## 1. Difference between shallow and deep copy?

- Shallow copy – Copies only the top-level properties. Nested objects still share the same reference.
- Deep copy – Copies all nested objects separately. No shared references.

---

### Shallow Copy Example

```javascript
const user = {
  name: "John",
  address: {
    city: "Delhi"
  }
};

const copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city); // Mumbai (Original object changed)
```

- Spread operator creates a shallow copy.
- Nested objects are still linked.

---

### Deep Copy Example

```javascript
const user = {
  name: "John",
  address: {
    city: "Delhi"
  }
};

const deepCopy = JSON.parse(JSON.stringify(user));

deepCopy.address.city = "Mumbai";

console.log(user.address.city); // Delhi (Original unchanged)
```

- Deep copy creates completely separate nested objects.
- Changes do not affect the original object.

---

### Key Difference

- Shallow copy → Copies reference for nested objects.
- Deep copy → Creates independent copy of entire object.


# A.9 Arrays & Array Methods

## Array Creation and Initialization

- Using array literal.
- Using Array constructor.

```javascript
const arr1 = [1, 2, 3];
const arr2 = new Array(4, 5, 6);
```

---

## Common Array Methods

- map() – Transforms each element and returns a new array.
- filter() – Filters elements based on condition and returns a new array.
- reduce() – Reduces array to a single value.
- forEach() – Executes function for each element (does not return new array).

---

## map()

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);
// [2, 4, 6]
```

- Transforms each element.
- Returns a new array.

---

## filter()

```javascript
const numbers = [1, 2, 3, 4];

const even = numbers.filter(num => num % 2 === 0);
// [2, 4]
```

- Filters elements based on condition.
- Returns a new array.

---

## reduce()

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// 10
```

- Combines elements into a single value.
- Uses an accumulator.

---

## Chaining Array Methods

```javascript
const result = [1, 2, 3, 4]
  .filter(num => num % 2 === 0)
  .map(num => num * 2);
// [4, 8]
```

- Methods can be chained.
- Each returns a new array (except reduce).

---

## forEach() vs map()

- forEach() – Executes function, iterate array elements but returns undefined.
- map() – It also iterate array elements and returns a new transformed array with modified elements.

```javascript
[1, 2, 3].forEach(num => console.log(num));
```

---
---
## Interview Questions

## 1. Explain map(), filter(), and reduce() with examples

- map() – Transforms each element and returns a new array.
- filter() – Filters elements based on a condition and returns a new array.
- reduce() – Reduces the array to a single value using an accumulator.

---

### map() Example

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

- Each element is transformed.
- Returns a new array.

---

### filter() Example

```javascript
const numbers = [1, 2, 3, 4];

const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]
```

- Keeps elements that match the condition.
- Returns a new array.

---

### reduce() Example

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

- Combines all elements into one value.
- `acc` (accumulator) stores the result.
- `0` is the initial value.

---

### Key Difference

- map() → Transformation.
- filter() → Selection.
- reduce() → Aggregation.

## 2. Difference between map() and forEach()

- map() returns a new array.
- forEach() does not return anything (returns undefined).
- map() is used when you want to transform data.
- forEach() is used for side effects (logging, updating external variables).
- map() supports chaining.
- forEach() does not support chaining directly.

---

## Example

```javascript
const numbers = [1, 2, 3];
```

### Using map()

```javascript
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

- Returns a new transformed array.

---

### Using forEach()

```javascript
const result = numbers.forEach(num => num * 2);
console.log(result); // undefined
```

- Does not return a new array.
- Mainly used for executing code for each element.

---

### Key Difference

- map() → Transformation.
- forEach() → Execution without returning new array.

## 3. How to chain map(), filter(), and reduce()?

- Since map(), filter(), and reduce() return new values, they can be chained.
- Chaining allows multiple operations in a single statement.
- Execution happens from left to right.

---

### Example

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(num => num % 2 === 0)   // [2, 4]
  .map(num => num * 2)            // [4, 8]
  .reduce((acc, curr) => acc + curr, 0); // 12

console.log(result); // 12
```

- filter() filter out elements from an array.
- map() transforms them.
- reduce() combines them into one value.

---

## 4. What does reduce() return and how does accumulator work?

- reduce() returns a single value.
- It can return a number, string, object, or array.
- The accumulator stores the running result.

---

### Example

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10
```

---

## How Accumulator Works

Step-by-step:

Initial value → acc = 0  

Iteration 1 → acc = 0 + 1 = 1  
Iteration 2 → acc = 1 + 2 = 3  
Iteration 3 → acc = 3 + 3 = 6  
Iteration 4 → acc = 6 + 4 = 10  

Final returned value → 10


# A.11 Destructuring

## Array Destructuring

- Extract values from arrays into variables.

```javascript
const arr = [10, 20, 30];
const [a, b, c] = arr;

console.log(a); // 10
```

---

## Object Destructuring

- Extract properties from objects into variables.

```javascript
const user = { name: "John", age: 25 };
const { name, age } = user;

console.log(name); // John
```

---

## Default Values in Destructuring

- Default values are used when a property or element is undefined.
- If the value exists, the default is ignored.
- Works for both arrays and objects.

---

### Array Default Values

```javascript
const arr = [10];

const [a, b = 20] = arr;

console.log(a); // 10
console.log(b); // 20
```

- `b` gets default value because second element is undefined.

---

### Object Default Values

```javascript
const user = { name: "John" };

const { name, age = 25 } = user;

console.log(name); // John
console.log(age);  // 25
```

- `age` gets default value because it does not exist in object.

---

### Important Note

- Default value works only if value is undefined.
- It does NOT apply if value is null.

```javascript
const { x = 5 } = { x: null };
console.log(x); // null
```


## Rest Operator in Destructuring

- Collect remaining elements into a new array or object.

```javascript
const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]

const { name, ...others } = { name: "John", age: 25, city: "Delhi" };
console.log(others); // { age: 25, city: "Delhi" }
```

---

## Nested Destructuring

- Extract values from nested arrays or objects.

```javascript
const user = {
  name: "John",
  address: { city: "Delhi" }
};

const { address: { city } } = user;
console.log(city); // Delhi
```

---

## Renaming Variables During Destructuring

- Assign property to a new variable name.

```javascript
const { name: userName } = { name: "John" };

console.log(userName); // John
```


# A.11 Data Types & Comparison


## Primitive Types

- String – Text values.
- Number – Numeric values (integers & decimals).
- Boolean – true or false.
- Null – Intentional empty value.
- Undefined – Variable declared but not assigned.
- Symbol – Unique and immutable value.
- BigInt – Large integers beyond Number limit.

```javascript
let str = "Hello";
let num = 10;
let isTrue = true;
let value = null;
let data;
let sym = Symbol("id");
let big = 12345678901234567890n;
```

---

## Reference Types

- Object – Collection of key-value pairs.
- Array – Ordered list of values.
- Function – Reusable block of code.

```javascript
const obj = { name: "John" };
const arr = [1, 2, 3];
function greet() {}
```

---

## typeof Operator

- Used to check data type.

```javascript
typeof "Hello";   // string
typeof 10;        // number
typeof true;      // boolean
typeof undefined; // undefined
typeof null;      // object (special case)
```

---

## Type Coercion

- Implicit – Automatic type conversion.
- Explicit – Manual conversion using functions.

```javascript
"5" + 1;        // "51" (Implicit)
Number("5");    // 5 (Explicit)
```

---

## == vs ===

- == (Loose equality) – Compares values after type conversion.
- === (Strict equality) – Compares value and type without conversion.

```javascript
5 == "5";   // true
5 === "5";  // false
```

---

## Truthy and Falsy Values

- Falsy values → false, 0, "", null, undefined, NaN.
- All other values are truthy.

```javascript
if ("Hello") {
  console.log("Truthy");
}
```

---

## NaN and isNaN()

- NaN – Represents invalid number.
- isNaN() – Checks whether a value is NaN.

```javascript
0 / 0;        // NaN
isNaN("abc"); // true
```
---

## Interview questions
## 1. List all primitive and reference data types

### Primitive Types

- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt

Primitive values are immutable and stored by value.

---

### Reference Types

- Object
- Array
- Function

Reference types are stored by reference in memory.

---

## 2. Difference between == and ===

- == (Loose equality) – Compares values after type conversion.
- === (Strict equality) – Compares both value and data type without type conversion.

---

### Example

```javascript
5 == "5";   // true (type conversion happens)
5 === "5";  // false (different types)
```

- === is recommended for safer comparisons.

---

## 3. What are truthy and falsy values?

- Falsy values → false, 0, "", null, undefined, NaN.
- All other values are truthy.

```javascript
if ("Hello") {
  console.log("Truthy");
}
```

- Non-empty strings, objects, and arrays are truthy.

---

## 4. Explain type coercion with examples

- Type coercion is automatic or manual type conversion.
- Implicit coercion happens automatically.
- Explicit coercion is done using functions.

### Implicit Example

```javascript
"5" + 1;   // "51"
```

### Explicit Example

```javascript
Number("5");   // 5
String(10);    // "10"
```



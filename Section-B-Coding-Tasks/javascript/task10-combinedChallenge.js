// Task 10: Combined Challenge 

/* 
Task 10.1: Create a Bank Account object with the following: 
● Properties: accountNumber, accountHolder, balance 
● Methods: deposit(amount), withdraw(amount), getBalance(), getStatement() 
● Use closures to make balance private 
● Implement proper validation 
*/

function createBankAccount(accountNumber, accountHolder, initialBalance = 0) {
    let balance = initialBalance;

    let transactions = []

    if (!accountHolder || !accountNumber) {
        throw new Error("Account number and account holder name are required.")
    }
    if (initialBalance < 0) {
        throw new Error("Initial balance cannot be negative.");
    }

    return {
        accountNumber,
        accountHolder,
        deposit(amount) {
            if (typeof amount !== "number" || amount <= 0) {
                return "Invalid deposit amount.";
            }

            balance += amount;
            transactions.push(`Deposited: ${amount}`);
            return `Successfully deposited ${amount}`;
        },

        withdraw(amount) {
            if (typeof amount !== "number" || amount <= 0) {
                return "Invalid withdrawal amount.";
            }

            if (amount > balance) {
                return "Insufficient balance.";
            }

            balance -= amount;
            transactions.push(`Withdrew: ${amount}`);
            return `Successfully withdrew ${amount}`;
        },
        getBalance() {
            return `Current Balance: ${balance}`;
        },
        getStatement() {
            return {
                accountNumber,
                accountHolder,
                balance,
                transactions
            };
        }
    }
}
const account = createBankAccount("123456", "Mohit", 1000);

console.log(account.deposit(500));      //Successfully deposited 500
console.log(account.withdraw(200));     //Successfully withdrew 200
console.log(account.getBalance());      //Current Balance: 1300

console.log(account.getStatement());    //{accountNumber: '123456',
// accountHolder: 'Mohit',
// balance: 1300, 
// transactions: [ 'Deposited: 500', 'Withdrew: 200' ]}



/* =====> Task 10.2: Create an array of products with properties: id, name, price, category. Implement the following:
● Function to filter products by category 
● Function to find products within a price range 
● Function to calculate total value of all products 
● Function to get the most expensive product 
● Use appropriate array methods */

const products = [
    { id: 1, name: "Laptop", price: 80000, category: "Electronics" },
    { id: 2, name: "Phone", price: 40000, category: "Electronics" },
    { id: 3, name: "Shoes", price: 3000, category: "Fashion" },
    { id: 4, name: "Watch", price: 5000, category: "Fashion" },
    { id: 5, name: "Desk", price: 15000, category: "Furniture" }
];

function filterByCategory(category) {
    return products.filter(product => product.category === category)
}
console.log(filterByCategory("Electronics"));
//[
//   { id: 1, name: 'Laptop', price: 80000, category: 'Electronics' },
//   { id: 2, name: 'Phone', price: 40000, category: 'Electronics' }
// ]


function findByPriceRange(min, max) {
    return products.filter(product => product.price >= min && product.price <= max)
}
console.log(findByPriceRange(10000, 50000))
// [
//   { id: 2, name: 'Phone', price: 40000, category: 'Electronics' },
//   { id: 5, name: 'Desk', price: 15000, category: 'Furniture' }
// ]

function totalSumOfProducts() {
    return products.reduce((acc, prod) => {
        return acc + prod.price
    }, 0)
}
console.log(totalSumOfProducts())   //143000

function mostExpensive() {
    return products.reduce((max, product) => {
        return product.price > max.price ? product : max
    })
}
console.log(mostExpensive())    //{ id: 1, name: 'Laptop', price: 80000, category: 'Electronics' }



/* =====>Task 10.3: Create a Student Management System: 
● Array of student objects with: id, name, marks (array of subjects) 
● Calculate average marks for each student using map() and reduce() 
● Filter students with average > 75 
● Find the topper student 
● Generate a report card for each student */

const students = [
    {
        id: 1,
        name: "John",
        marks: [80, 75, 90, 85]
    },
    {
        id: 2,
        name: "Jane",
        marks: [60, 70, 65, 72]
    },
    {
        id: 3,
        name: "Bob",
        marks: [95, 92, 88, 91]
    },
    {
        id: 4,
        name: "Alice",
        marks: [50, 55, 60, 58]
    }
];

const studentsWithAverage = students.map((student) => {
    total = student.marks.reduce((acc,mark) => {
        return acc+mark
    }, 0)
    average = total/student.marks.length
    return {...student,average:average}
}
)
console.log(studentsWithAverage)
// [
//   { id: 1, name: 'John', marks: [ 80, 75, 90, 85 ], average: 82.5 },
//   { id: 2, name: 'Jane', marks: [ 60, 70, 65, 72 ], average: 66.75 },
//   { id: 3, name: 'Bob', marks: [ 95, 92, 88, 91 ], average: 91.5 },
//   { id: 4, name: 'Alice', marks: [ 50, 55, 60, 58 ], average: 55.75 }
// ]

const averageAbove75 = studentsWithAverage.filter((student)=>student.average>75)
console.log(averageAbove75)
// [
//   { id: 1, name: 'John', marks: [ 80, 75, 90, 85 ], average: 82.5 },
//   { id: 3, name: 'Bob', marks: [ 95, 92, 88, 91 ], average: 91.5 }
// ]

const topperStudent = studentsWithAverage.reduce((topper,student)=>{
    return topper.average > student.average ? topper : student
})
console.log(topperStudent)  //{ id: 3, name: 'Bob', marks: [ 95, 92, 88, 91 ], average: 91.5 }

const reportCards = studentsWithAverage.map(student => {
  return `
  ----------------------------
  ID: ${student.id}
  Name: ${student.name}
  Marks: ${student.marks.join(", ")}
  Average: ${student.average}
  Result: ${student.average >= 40 ? "Pass" : "Fail"}
  ----------------------------
  `;
});

reportCards.forEach(card => console.log(card));
// ----------------------------
//   ID: 1
//   Name: John
//   Marks: 80, 75, 90, 85
//   Average: 82.5
//   Result: Pass
//   ----------------------------


//   ----------------------------
//   ID: 2
//   Name: Jane
//   Marks: 60, 70, 65, 72
//   Average: 66.75
//   Result: Pass
//   ----------------------------


//   ----------------------------
//   ID: 3
//   Name: Bob
//   Marks: 95, 92, 88, 91
//   Average: 91.5
//   Result: Pass
//   ----------------------------


//   ----------------------------
//   ID: 4
//   Name: Alice
//   Marks: 50, 55, 60, 58
//   Average: 55.75
//   Result: Pass
//   ----------------------------

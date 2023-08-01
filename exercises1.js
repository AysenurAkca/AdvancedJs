// Exercise 1
let userr = {
  name: "John",
  years: 30
}

const {name, years:age, isAdmin} = userr;

// Exercise 2
let ourPlanet;
let currentVisitor;

// Exercise 3
// It will be "Hello, John". Because the sayHi function can reach out both of the variable that are called phrase and user. Phrase has global scope. Also user and the SayHi function are in the same block.

// Exercise 4
const user = {} ;
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Exercise 5
// At this example we've changed the property of the object not object. We set the object,array,fuction names with const, it refers the references in memory. If we change the property, it doesn't affect the object's reference. So, we can reset the user.name= "Pete".

// Exercise 6
let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
}

let sum=0;
let eachSalary = Object.values(salaries);
for(let i=0; i<eachSalary.length ; i++){
    sum += eachSalary[i]
}
console.log(sum);

// Exercise 7
const result = a + b < 4 ?  'Below' :  'Over';


// Exercise 8

let message = login == 'Employee' ? "Hello" 
: login == 'Director' ? "Greetings"
: login == '' ? "No login"
: "";

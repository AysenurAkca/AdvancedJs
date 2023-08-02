// Exercise 1

// const checkAge = age => age > 18 ? true : confirm('Do you have your parents permission to access this page?')

// console.log(checkAge(10));

// Exercise 2

// const pow = (x,n) => {
//     let result = 1
//     if(n<2){
//         return `You should enter higher number 1`
//     } 
//     for(let i=0; i<n ; i++){
//         result *= x ;
//     }
//     return result
// }

// console.log(pow(100,2));

// Exercise 3

// const ask = (question, yes, no) => (confirm(question)) ? yes() : no ()
// ask(
//     "Do you agree?",
//     function() { alert("You agreed.") },
//     function() { alert("You canceled the execution.") }
//   )

// Exercise 4

const calculator = {
    num1 : 0 ,
    num2 : 0,
    read(){
        this.num1 = Number(prompt("First number"));
        this.num2 = Number(prompt("Second number"));
    },
    sum(){
        return this.num1+ this.num2
    },
    mul(){
        return this.num1 * this.num2
    }
}
calculator.read()
alert(calculator.sum())
alert(calculator.mul())


// Exercise 5
// const min = (a,b) => a<b ? a : b 

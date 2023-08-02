//Exercise 1

let arr = [5, 3, 8, 1]

const filterRange = (arr,a,b) => {
    const filtered = [];
    for(let x of arr){
        if ((x >= a && x<= b) || (x <= a && x>= b)){
            filtered.push(x);
        }
    }
    return filtered
}

console.log(filterRange(arr,1,4));

//Exercise 2

const userArr = [ { name: "John", age: 25 }, { name: "Pete", age: 30 }, { name: "Mary", age: 28 }];
const userNames = userArr.map(user => user.name)
console.log(userNames);

//Exercise 3
const userAgeArr = [ { name: "John", age: 25 }, { name: "Pete", age: 30 }, { name: "Mary", age: 25 }];
const getAverageAge = users => {
    let total = 0;
    let ages =users.map(user => user.age)
    for(let age of ages){
        total += age
    }
    return total/ ages.length
}

console.log(getAverageAge(userAgeArr));
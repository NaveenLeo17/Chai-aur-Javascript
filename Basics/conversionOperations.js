let score = "33"
// let score1 = "33abc"
// let score1 = null
// let score1 = undefined
let score1 = false

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

// ------------------------------------------------------------------ //

// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "abc"


let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "abc" => true

// ------------------------------------------------------------------ //
let someNumber = 33

let stirngNumber = String(someNumber)

console.log(typeof stirngNumber);
console.log(stirngNumber);
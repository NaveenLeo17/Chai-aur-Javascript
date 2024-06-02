// Primitive
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

// ***** JS is a statically typed language

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId); // false
// console.log(id); // Symbol(123)
// console.log(anotherId); // Symbol(123)

const bigNumber = 3342332323554432235325325235235n
const score = null


// Non primitive (Reference type) [There return type is object]
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}
const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber); // bigint
console.log(typeof score); // object
console.log(typeof myfunction); // function (object function)
console.log(typeof heros); // object 

// **********************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "hiteshchoudharydotcom"
let anothername = myYoutubeName
anothername = "chaiaurcode"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "user@gamil.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
// array

const myArr = [0,1,2,3,4,5]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // It insert the element at the start of the array
// myArr.shift() // remove the element from the start of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); // return -1 if the value does not exist


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// slice, splice
console.log("a ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("b ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("c ", myArr);

// splice change the original array and slice does not 
// spllice include the range and slice does not
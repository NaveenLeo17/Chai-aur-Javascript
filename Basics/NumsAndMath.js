const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNum = 23.8956
const otherNum1 = 123.8956
const otherNum2 = 1123.8956
// console.log(otherNum.toPrecision(3)); // convert number into string // 23.9
// console.log(otherNum1.toPrecision(3)); // 124
// console.log(otherNum2.toPrecision(3)); // 1.12e+3

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // convert number into string 
// console.log(hundreds.toLocaleString("en-IN"));


// ******************** Maths ************************

// console.log(Math); // Object [Math] {}

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

// console.log(Math.random());
// console.log((Math.random()*10) + 1); // +1 to avoid 0 edgecase

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min));
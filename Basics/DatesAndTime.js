// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 23)
// let myCreatedDate = new Date(2024, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // to convert into seconds

let newDate = new Date()
console.log(newDate.getDay());

console.log(newDate.toLocaleString("default", {
    weekday: "long"
}));
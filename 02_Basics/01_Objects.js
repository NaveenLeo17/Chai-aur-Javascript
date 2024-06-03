// singleton [when we create through constructor -> This object is only 1 of it kind]
// Object.create()

// Object literals

const mySym = Symbol("key1")

const jsuser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym] : "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);

// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(jsuser)
jsuser.email = "hitesh@microsoft.com"
// console.log(jsuser);

jsuser.greeting = function() {
    console.log("Hello JS user");
}

jsuser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
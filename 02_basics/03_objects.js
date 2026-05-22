const mysym = Symbol("key1");

let details = {
    name: "Raj",
    "full name": "Kachhadiya Raj Pravinbhai",
    age: 18,
    email: "kachhadiyaraj76@gmail.com",
    [mysym]: "mykey1"
}

console.log(details["email"]);
console.log(details.email);

console.log(details["full name"]);
console.log(details[mysym]);

// Object.freeze(details);
// details.email="xyz";
// console.log(details);


details.gretting = function(){
    console.log("Hello Js user");
}

details.grettingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(details.gretting());
console.log(details.grettingTwo());

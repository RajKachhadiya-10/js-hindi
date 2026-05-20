// Primitive : String, Number, Null, Undifined, Boolean, BigInt, Symbol
// Reference (Non Primitive) : Array, Object, Function

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId)

const hero = ["Jethala", "Hathi"]
 
let myobj = {
    name: "Raj",
    age: 18
}

const myfunc = function(){
    console.log("Hello World");
}

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "RajKachhadiyadotcom"

let anotherName = myYoutubeName
anotherName = "RajOnKeys" 

console.log(myYoutubeName);
console.log(anotherName);

let userOne ={
    name:"RAJ",
    email:"kachhadiyaraj76@gmail.com"
}

let userTwo = userOne

userTwo.name="Hetvi"

console.log(userTwo)
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


const array = [1,2,3,4,5,6]
console.log(array[1]); 

array.unshift(0);
console.log(array)

array.shift();
console.log(array)

array.shift();
console.log(array)

array.unshift(1);
console.log(array)

console.log(array.includes(9))
console.log(array.indexOf(9))
console.log(array.indexOf(3))

let newarray = array.join()
console.log(array);
console.log(newarray);
console.log(typeof(newarray));


console.log("A", array);
let myn1 = array.slice(1,3);
console.log(myn1);
console.log("B", array);
let myn2 = array.splice(1,3);
console.log(myn2);
console.log("C", array);



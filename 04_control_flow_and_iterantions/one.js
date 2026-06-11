const userEmail = "kachhadiyaraj@gmail.com";
if (userEmail) {
    console.log("Got user Email");
}
else {
    console.log("Don't Get user Email");
}

// falsy value: false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value: "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1);

const map = new Map();
map.set('In', "India");
map.set('USA', "united state of america");
map.set('Fr', "France");

console.log(map);

for (const [key, value] of map) {
    console.log(key);
}

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} is for shortcut ${myObject[key]}`);
}


const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

coding.forEach(function (item) {
    console.log(item);
})

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    { lenguageName: "javascript", lenguagefile: "js" }, 
    { lenguageName: "java", lenguagefile: "java" }, 
    { lenguageName: "python", lenguagefile: "py" }
]

myCoding.forEach((item) => {
    console.log(item.lenguageName);
})

const nums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = nums.filter( (num) => num>4)

// const newNums = nums.filter( (num) => {
//     return num>4;
// })

// const newNums = []
// nums.filter( (num) => {
//     if(num>4)newNums.push(num);
// })

// console.log(newNums);


// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => {return num+10})
// console.log(newNums);


// const newNums = myNumers
//                 .map( (num) => num*10)
//                 .map( (num) => num+1)
//                 .filter( (num) => num >= 40)
            
// console.log(newNums);

const myNumers = [1,2,3]
// const myTotal = myNumers.reduce(function (acc,cur) {
//     console.log(`acc: ${acc} and currval: ${cur}`);
//     return acc+cur;
// }, 0)
// console.log(myTotal);

const myTotal = myNumers.reduce( (acc,cur) => acc+cur, 0);
console.log(myTotal);


const shoppingCart = [
    {
        itemName : "mobile dev course",
        price: 5999
    },
    {
        itemName : "cpp course",
        price: 11999
    },
    {
        itemName : "python course",
        price: 8999
    },
    {
        itemName : "musician course",
        price: 11
    }
]

const  priceToPay = shoppingCart.reduce( (acc,cur) => acc+cur.price, 0)
console.log(priceToPay);

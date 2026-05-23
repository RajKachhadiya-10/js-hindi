function sayMyName(){
    console.log("R");
    console.log("a");
    console.log("j");
}

sayMyName()

function addTwoNumbers(number1, number2){
    return number1+number2;
}

const result = addTwoNumbers(5,3);
console.log("Result: ", result);

function loginUser(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
} 

console.log(loginUser("Raj"));
console.log(loginUser());


function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(100, 200, 300));

const user= {
    username: "Raj",
    spend: 200
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and he is spending ${anyObject.spend} `);
}

handleObject(user);
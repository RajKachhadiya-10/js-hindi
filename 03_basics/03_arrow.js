const user = {
    username: "Raj",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "Hetvi";
user.welcomeMessage();


console.log(this);

// function chai(){
//     console.log(this);
// }

// chai();

// in the function we can not use this 

// function chai() {
//     let username = "Raj"
//     console.log(this.username);
//     console.log(username);
// }

// chai();

const chai = () => {
    let username = "raj"
    console.log(this.username);
}
chai();

const addTwoNumbers = (num1,num2) => (num1+num2);
console.log(addTwoNumbers(3,4));
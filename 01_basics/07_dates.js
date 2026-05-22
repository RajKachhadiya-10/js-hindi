let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let myCreatedDate  = new Date(2026, 0, 23)
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime())

let newDate = new Date();

newDate.toLocaleString('default',{
    weekday:"long"
})
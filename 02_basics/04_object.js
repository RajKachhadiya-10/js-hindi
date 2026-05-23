const tinderUser = {}
tinderUser.name = "Jimmy"
tinderUser.email = "jimmy@gmail.com"
// console.log(tinderUser)

const regulerUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Raj",
            lastname: "Kachhadiya"
        }
    }
}

// console.log(regulerUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2, obj3}
// console.log(obj4);

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);
                   

// const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty("name"));

const course = {
    coursename: "js in hindi",
    price: "999",
    instructor: "RK"
}

const {instructor: ins} = course;
console.log(ins);



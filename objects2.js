const tinderuser = new Object();
tinderuser.id = 1235;
tinderuser.name = "ali";
tinderuser.email = "ali@gmail.com";

// console.log(tinderuser);

// const User = {
//   email: "sam@gmail.com",
//   fullname: {
//     firstname: "asd",
//     lastname: "qwe",
//   },
// };

// console.log(User.fullname);

let obj1 = { 1: "a", 2: "b" };
let obj2 = { 3: "c", 4: "d" };

// let obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    name: "lkj",
    email: "h@gmail.com",
  },

  {
    name: "qwe",
    email: "q@gmail.com",
  },
];

users[1].email;

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(Object.hasOwnProperty("name"));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseinstructor: "hitash",
};

const { courseinstructor: instructor } = course;

console.log(instructor);

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
// const obj3 = { ...obj1, ...obj2 };
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

// const course = {
//   coursename: "js in hindi",
//   price: "999",
//   courseinstructor: "hitash",
// };

// const { courseinstructor: instructor } = course;

// console.log(instructor);

const sym = Symbol("demo1");

const info = {
  name: "nouman",
  email: "nomi@gmail.com",
  age: 22,
  [sym]: "demo",
  names: ["ali,asad", "obaid"],
};

info.name = "ali";

Object.freeze(info);
info.name = "aaa";

console.log(info);

info.Hello = function () {
  console.log(`heloo ${name}`);
};

// console.log(info.name);
// console.log(info["email"]);
// console.log(info[sym]);

const tender1 = new Object();

tender1.id = "123";
tender1.name = "ten";
tender1.email = "t@gmail.com";

let obj11 = { 1: "a", 2: "b" };
let ob12 = { 3: "c", 4: "d" };

// let obj13 = { ...obj11, ...ob12 };
// console.log(obj13);

let demo = [
  {
    name: "asd",
    email: "asd@gmail.com",
  },
  {
    name: "sss",
    email: "sss@gmail.com",
  },
];
console.log(demo[1]);

let course1 = {
  cousename: "js in hindi",
  price: 5555,
  courseinstructor: "hitash",
};

const { cousename: cn, courseinstructor: cinstructor } = course1;

console.log(cn);
console.log(cinstructor);

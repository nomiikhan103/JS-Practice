// for (let index = 0; index < 10; index++) {
//   const element = index;
//   console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`outer loop ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`inner loop ${j} ${i}`);
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(` ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(` ${j} * ${i} = ${j * i}`);
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   const num = 5;
//   console.log(`${num} * ${i} = ${num * i}`);
// }

// myarray = ["abbas", "furqan", "nouman"];

// for (let i = 0; i < myarray.length; i++) {
//   console.log(myarray[i]);
// }

//               scopes       //

if (true) {
  const a = 10;
  let b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

// function scope() {
//   const username = "nouman";

//   function demo() {
//     const website = "demosite";

//     console.log(website);
//   }

//   console.log(username);
//   demo();
// }
// scope();

// this keyword

// const info = {
//   name: "nouman",
//   age: 25,

//   welcome: function () {
//     console.log(this);
//   },
// };

// info.welcome();
// info.name = "ali";
// info.welcome();

// arrow function

// hello = (a, b) => (a + b);
// hello = (user) => (user = "nouman khalil");
// console.log(hello());

// object-destructuring

// const test = {
//   firstname: "nouman",
//   lastname: "khalil",
//   courseinstructor: "abbas Shafi",
//   country,
// };

// const {
//   firstname: fname,
//   lastname,
//   courseinstructor,
//   country = "pakitan",
// } = test;

// console.log(fname);
// console.log(country);

const user1 = {
  id: 1,
  name: "nomi",
  profile: {
    user: "khan",
    email: "khan@gmail.com",
  },
};

const {
  name,
  profile: { user, email },
} = user1;
console.log(name);
console.log(user);

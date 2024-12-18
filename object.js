let mysym = Symbol("key1");

let my_info = {
  name: "nouman",
  fname: "Inam ullah",
  [mysym]: "mykey1",
  age: 25,
};
my_info.name = "nouman khalil";

// console.log(my_info.fname);
// console.log(my_info["age"]);
// console.log(typeof my_info[mysym]);
// console.log(my_info.name);

// Object.freeze(my_info);

// my_info.name = "nomii";
// console.log(my_info);

my_info.greeting = function () {
  console.log(`hello js user ${this.age}`);
};

console.log(my_info.greeting);

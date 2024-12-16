let mysym = Symbol("key1");

let my_info = {
  name: "nouman",
  fname: "Inam ullah",
  [mysym]: "mykey1",
  age: 25,
};

console.log(my_info.fname);
console.log(my_info["age"]);
console.log(typeof my_info[mysym]);

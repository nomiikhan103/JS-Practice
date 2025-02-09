const names = ["ali", "asad", "obaid"];

for (const name of names) {
  // console.log(name);
}
const map = new Map();
map.set("pak", "pakistan");
map.set("ind", "india");
map.set("fr", "france");
// console.log(map);
for (const [key, values] of map) {
  // console.log(key, ":-", values);
}

// const info = {
//   name: "asad",
//   email: "kha@gmail.com",
//   city: "peshawar",
// };

// for (const [key, value] of info) {
//   console.log(key, ":-", value);
// }

// forin loop

const info = {
  name: "asad",
  email: "kha@gmail.com",
  city: "peshawar",
};

for (const key in info) {
  // console.log(`this is keys of object ${key} and values are : ${info[key]}`);
}

const programming = ["js", "java", "python", "php"];

for (const program in programming) {
  // console.log(programming);
}

const myfriends = ["ali", "asad", "obaid", "usman"];

// myfriends.forEach(function (val) {
//   console.log(val);
// });

// myfriends.forEach((item) => {
//   console.log(item);
// });

// myfriends.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const coding = [
  {
    languagename: "javasript",
    languagefile: "js",
  },
  {
    languagename: "java",
    languagefile: "java",
  },

  {
    languagename: "python",
    languagefile: "py",
  },
];

coding.forEach((item) => {
  // console.log(item.languagename);
});

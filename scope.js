// var c = 300;
// if (true) {
//   let a = 10;
//   const b = 20;
//   c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  let username = "nouman";
  function two() {
    let website = "youtube";
    console.log(username);
    console.log(website);
  }

  two();
}

one();

if (true) {
  let username = "nouman";
  if (username == "nouman") {
    const website = "nomi-site";
    console.log(username + website);
  }
  // console.log(website);
  console.log(username);
}

console.log(addone(4));
function addone(num) {
  return num + 1;
}

console.log(addtwo(4));
const addtwo = function (num) {
  return num + 2;
};

const coding = ["js", "python", ".net", "php"];

// const values = coding.forEach((item) => {
//   // console.log(item);
//   return item;
// });
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, , 8, 9, 10];

// const Newnums = myNums.filter((num) => {
//   return num > 4;
// });

Newnums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     Newnums.push(num);
//   }
// });

// console.log(Newnums);

const books = [
  { title: "book1", genre: "history", publish: 1998, editon: 2004 },
  { title: "book2", genre: "sicece", publish: 2000, editon: 2006 },
  { title: "book3", genre: "history", publish: 2004, editon: 2009 },
  { title: "book4", genre: "eglish", publish: 2007, editon: 2011 },
];

const list = books.filter((bk) => bk.genre === "history");
const puh = books.filter((pub) => pub.publish > 2006);
console.log(list);
console.log(puh);

myarr = [1, 2, 3, 4];

// myarr.push(5);
// myarr.pop();
// console.log(`A : ${myarr}`);

// newarr = myarr.slice(1, 3);

// console.log(newarr);

// newarr = myarr.splice(1, 5);
// console.log(`A : ${myarr}`);
// console.log(newarr);

city_names = ["abbas", "abdul majid", "hassan"];
country_names = ["pakistan", "india", "china"];

// console.log(city_names);
// console.log(city_names[0][1]);

// const all_names = city_names.(country_names);
const all_names = [...city_names, ...country_names];
console.log(all_names);

let numbers = [1, 2, 3, [4, 5], 6, [1, 2, [3, 4]]];
console.log(numbers);
new_number = numbers.flat(1);
console.log(new_num|ber);

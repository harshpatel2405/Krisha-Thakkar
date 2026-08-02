num = [10, 20, 30, 40, 50];

// * returns first occurence where condition gets true(returns value) (undefined for not found)
let result = num.find((n) => n > 25);
console.log(result);

// * returns first occurence where condition gets true(returns index) (-1 for not found)
result = num.findIndex((n) => n > 25);
console.log(result);

fruits = "Apple,Mango,Chikoo";
resultArray = fruits.split(",");
console.log(resultArray);

resultString = resultArray.join("-");
console.log(resultString);
resultString = resultArray.join(" -> ");
console.log(resultString);
resultString = resultArray.join(" # ");
console.log(resultString);

ans = [11, 12, 13];
result = num.concat(resultArray, ans);
console.log(result);

num.fill(0, 2, 3);
console.log(num);

// * spread operator ...
let arr1 = [10, 20, 30];
let arr2 = [...arr1];
console.log(arr2);

arr2 = [10, ...arr1, 23];
console.log(arr2);

// * 1. dif between concat and spread operator
/*
+-----------------------+--------------------------+----------------------------+
| Feature               | concat()                | Spread Operator (...)      |
+-----------------------+--------------------------+----------------------------+
| Syntax                | arr1.concat(arr2)       | [...arr1, ...arr2]         |
+-----------------------+--------------------------+----------------------------+
| Type                  | Array Method            | ES6 Operator               |
+-----------------------+--------------------------+----------------------------+
| Placement             | Appends at the end      | Can insert anywhere        |
+-----------------------+--------------------------+----------------------------+
| Strings               | Adds as one element     | Splits into characters     |
| Strings               |"ABC" -> "ABC"           | "ABC" -> 'A','B','C'       |
+-----------------------+--------------------------+----------------------------+
| Objects               | Cannot merge objects    | Can merge objects          |
|                       |                          | ({...obj1, ...obj2})       |
+-----------------------+--------------------------+----------------------------+
| Original Array        | Not modified            | Not modified               |
+-----------------------+--------------------------+----------------------------+
| Return Value          | New Array              | New Array/Object           |
+-----------------------+--------------------------+----------------------------+
| Best Use              | Joining arrays          | Copying, Merging,          |
|                       |                         | Inserting elements         |
+-----------------------+--------------------------+----------------------------+
*/

// * array destructuring
let arr = [10, 20, 30, 40];
let [a, b, c] = arr;

console.log(a);
console.log(b);
console.log(c);

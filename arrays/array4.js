/*
map   
filter 
reduce 
some 
every 
flat 
flatmap
*/

num = [10, 20, 30, 40, 41];
console.log(num);

// * map - returns a new array -> same length as the original one
square = num.map((n) => n ** 2);
console.log(square);

even_odd = num.map((n) => (n % 2 == 0 ? "Even" : "Odd"));
console.log(even_odd);

// * 1. make a new array which has all names in uppercase
let names = ["shivansh", "jay", "ved", "hriday", "kanj"];
un = names.map((nm) => nm.toUpperCase());
console.log(un);

// * 2. add mr. before every name
let ns = ["shivansh", "jay", "ved", "hriday", "kanj"];
n = ns.map((nm) => "Mr. " + nm);
console.log(n);

// * 3. create email address from name
ns = ["shivansh", "jay", "ved", "hriday", "kanj"];
email = ns.map((nm) => nm + "@gmail.com");
console.log(email);

// * add 20% discount and then add 18% gst
amount = [100, 200, 300, 400, 500];
bill = amount.map((am) => am * 0.8 + am * 0.8 * 0.18);
console.log(bill);

// #################################################
// * filter
// * 1. print only those names who have length greater than 5
names = ["Harsh", "Krisha", "Shyama", "Krishna", "Dev", "Vasu"];
len = names.filter((nm) => nm.toUpperCase());
console.log(len);

num = [10, 20, 30, 40, 50, 60];
ans = num.filter((n) => n * n);
console.log(ans);

// * print only those names from the array which are starting from 'A' or 'a'
names = ["ayush", "shivansh", "jay", "ved", "hriday", "kanj", "Ariha", "Arth"];
nms = names.filter((nm) => nm.startsWith("A") || nm.startsWith("a"));
console.log(nms);

// * print only those marks of students who have got more than 80 marks
marks = [90, 23, 56, 99, 87, 67, 98];
pm = marks.filter((m) => m > 80);
console.log("marks greater than 80:  ", pm);

// * filter duplicate values
num = [10, 20, 10, 40, 50, 60];
dup = num.filter((value, index) => {
  return num.indexOf(value) != index;
});
console.log(dup);

// * print only even numbers which are greater than 20
n = [30, 1, 23, 78, 55, 90, 9, 54];
en = n.filter((num) => {
  if (num % 2 == 0 && num > 20) {
    return num ? "True" : "False";
  }
});
console.log("even nos. greater than 20 present in the array are " + en);


// * print only square of those numbers which are even and greater than 20
n = [30, 1, 23, 78, 55, 90, 9, 54];
en = n.filter((num) => {
  if (num % 2 == 0 && num > 20) {
    return num
  }
})
.map((n) => n**2);
console.log("even nos. greater than 20 present in the array are " + en);
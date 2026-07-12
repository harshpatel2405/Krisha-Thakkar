// * Print the number of digits in a number.
let n = 1234;

let count = 0;
while (n > 0) {
  console.log(n % 10);
  n = parseInt(n / 10);
  count++;
}
console.log("Count : ", count);

// * krishnamurthy / Strong --> 145 -=> 1! + 4! + 5!

n = 145;
let temp = n;
let ans = 0;
while (n > 0) {
  let rem = n % 10;
  let fact = 1;
  for (let i = 1; i <= rem; i++) {
    fact *= i;
  }
  ans += fact;
  n = parseInt(n / 10);
}

console.log(ans);
if (ans == temp) {
  console.log(temp + " is strong number");
} else {
  console.log(temp + " is not strong number");
}

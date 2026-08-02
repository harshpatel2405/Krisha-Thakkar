num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ans = num.reduce((acc, curr)=>acc+curr)
// ans = num.reduce((acc, curr) => {
//   console.log(acc, " -> ", curr);
//   return acc + curr;
// }, 0);
// console.log(ans);

/*
 * let arr = [
 *     [1,2],
 *     [3,4],
 *     [5,6],
 *     [7,8]
 * ];
 *
 * Tasks
 * - Flatten the array.
 * - Keep numbers divisible by 2.
 * - Multiply each by 10.
 * - Print every value using forEach().
 * - Find the total sum.
 * - Check if every number is divisible by 20.
 */
let arr = [
  [1, 2, [11, 12, 13]],
  [3, 4],
  [5, 6],
  [7, 8],
];
arr = arr
  .flat(2)
  .filter((a) => a % 2 == 0)
  .map((a) => a * 10)
arr.forEach((a) => {
  console.log(a);
});  

sum = arr.reduce((a, c) => a + c);
console.log("Sum : " + sum);

ans = arr.every((a) => a % 20 == 0);
console.log("All Divide by 20 : " + ans);

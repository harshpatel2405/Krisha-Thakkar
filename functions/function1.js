// * <=============================================================>Hoisting Allowed
function add() {
  console.log("Addition is " + (5 + 7));
}
add();

// -------------------------
function subtract(a, b) {
  console.log("Subtraction is " + (a - b));
}
subtract(10, 7);

// -------------------------
function multiply() {
  let a = 15,
    b = 7;
  return a * b;
}
console.log(multiply());
// -------------------------
function divide(a, b) {
  return a / b;
}
console.log(divide(10, 0));
// * <=============================================================> definition - Hoitsing not allowed
let ans = function greet() {
    console.log("Hello ");
};
ans()
// * <=============================================================> 


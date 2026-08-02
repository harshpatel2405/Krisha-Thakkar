// * let vs var vs const vs global

/*
Var declared anywhere in function --> is accessible throughout the function
let and const declared is only accesible within same block or it is parent 
global is accessible everywhere only after the memory is assigned(function called)
*/

function checkDemo() {
  let a = 45;
  var b = 90;
  const c = 135;
  d = 180;

  if (true) {
    var e = 111;
    let f = 222;
    if (true) {
      var g = 456;
      let h = 789;
    }
  }

  console.log("E : " + e);
  console.log("G : " + g);
  //   console.log("H : " + h)
  //   console.log("F : " + f)
}
checkDemo();

// console.log("A : " + a);
// console.log("B : " + b);
// console.log("C : " + c);
console.log("D : " + d);

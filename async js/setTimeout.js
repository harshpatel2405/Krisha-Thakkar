// console.log("A")
// console.log("B")
// console.log("C")

// console.log("A")

// setTimeout(()=>{
//     console.log("B")
// }, 1000)
// console.log("C")

// set timeout , a particular logic being executed once per call after a defined duration
// call stack , memory heap , web api , event loop , propagation ,delegation , capture/bubble , closure

// console.log("A");
// console.log("B");
setTimeout(() => {
  console.log("Executes after 3 seconds");
}, 3000);
// console.log("C");

// let time = 2 * 60 * 60 * 1000
let time = 5 * 1000;
setTimeout(() => {
  endQuiz();
}, time);

function endQuiz() {
  console.log("Quiz has been completed...");
  // screen.innerHTML = ''
//   console.log("FInal Score : __score__");
}

setTimeout(() => {
  console.log("A Parent");

  setTimeout(() => {
    console.log("B Parent");

    setTimeout(() => {
      console.log("C Parent ");
    }, 3000);

  }, 2000);
}, 1000);



// settimeout 3 sec  A
// settimeout 5 sec  B
// settimeout        C
//     |- 1         C-1
//     |- | - 2     C-2
//     |- | - | - 3  C-3


// A , B , C-1
// 3 , 5 , 1

// C-1 , A , C-2, B , C-3
// A Parent 
// Executes after 3 seconds
// B Parent
// Quiz has been completed...
// "C Parent 
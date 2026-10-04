// let count = 0;
// setInterval(()=>{
//     console.log(count++)
// },1000)

// let id = setInterval(()=>{
//     count++
//     console.log(count)

//     if(count == 5)
//     {
//         clearInterval(id )
//     }
// }, 1000)

// let count = 1;
// setInterval(() => {
//     console.log("Count : " + count++)
// }, 1000);

// setInterval(()=>{
//     console.log("Hello")
// }, 1000)

// setInterval(()=>{
//     console.log("world")
// }, 1000)

let count = 1;
let id = setInterval(() => {
    console.log("Count : " + count++)

    if(count == 5)
    {
        clearInterval(id)
    }
}, 1000);
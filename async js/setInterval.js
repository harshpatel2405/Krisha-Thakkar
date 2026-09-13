let count = 0;
// setInterval(()=>{
//     console.log(count++)
// },1000)

let id = setInterval(()=>{
    count++
    console.log(count)

    if(count == 5)
    {
        clearInterval(id )
    }
}, 1000)
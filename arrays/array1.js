// * this is empty array 
let fruits = []

// * direct access
let num = [10,20,30,40,89.56]
console.log(num)
console.log(typeof(num))

// * index access
console.log(num[4])
console.log(num[5])

// * mutable
num[3] = 456;
console.log(num)

console.log(num.length)

// * iterate
// for(let i = 0; i <  num.length;i++)
for(let i in num)
{
    console.log(num[i])
}

for(let i of num)
{
    console.log(i)
}



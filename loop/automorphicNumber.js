// *  a natural number whose square ends with the exact same digits as the number itself.

let n = 12
let square = n ** 2;

if(n % 10 == square % 10)
{
    console.log("Automorphic number")
}
else 
{
    console.log("Not automorphic number")
}

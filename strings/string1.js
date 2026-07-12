str1 = "Hello World";
console.log(str1);
console.log(typeof(str1))

str2 = "Hello World";
console.log(str2);
console.log(typeof(str2))

str3 = `Hello World`; // template literals
console.log(str3);
console.log(typeof(str3))

// * #########################################
let name = 'Harsh'

// & direct accessing
console.log("Name : " + name)

// * length 
// console.log("Length of " + name +  " is " + name.length)
console.log(`Length of ${name} is ${name.length}`)

 // & index accessing 
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(name[3])
// console.log(name[4])

for(let i = 0; i < name.length;i++)
{
    console.log(name[i])
}

// * is mutable - no
name[2] = 'k'
console.log(name)

// * converting to uppercase
console.log(name.toUpperCase())

// * converting to lowercase 
console.log(name.toLowerCase())
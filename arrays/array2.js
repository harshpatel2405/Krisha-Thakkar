let num =[10,20,30,40,'Harsh']

// * push -- add an element in last
num.push(56)
console.log(num)

// * unshift--  add in beginning
num.unshift(7)
console.log(num)

// * pop -- last element
num.pop()
console.log(num)

// * shift
num.shift()
console.log(num)

console.log(num.includes(10))
console.log(num.concat(11,22,33,44,55))
console.log(num.indexOf(-1))
console.log(num.at(3))
console.log(num.fill(100, 2,4))
console.log(num.join(' '))

// * remove an element 
// num.splice(1,3)
// console.log(num)

// * update 
// num.splice(1,1,30)
// console.log(num)

// * add
num.splice(1,0,30)
console.log(num)
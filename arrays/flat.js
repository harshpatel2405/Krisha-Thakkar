fruits = [
  ["Apple", "Magno"],
  ["PineApple", "StrawBerry"],
];
console.log(fruits[0]);
console.log(fruits[1]);

flattedFruits = fruits.flat();
console.log(flattedFruits);

num = [
  [10, 20, 30],
  [40, [50, 60], 70],
  [80, 90, 100],
];
// * depth is 1 (default)
ans = num.flat(2)
console.log(ans)

// * print num * 2 , with number 
num = [1,2,3]
// output = num.map((n)=> [n, n*2]).flat()
output = num.flatMap((n)=> [n, n*2])
console.log(output)

// * make an array from the
let sen = ["Hello World",'Programming']
output = sen.flatMap((s)=>s.split(" "))
console.log(output)

// * split every word into individual characters 
input = ['HI','JS']
output = input.flatMap((i) => i.split(""))
console.log(output)

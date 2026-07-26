const arr = [5,2,6,3,4, 5];

// * reverse
arr.reverse();
console.log("Reversed Array : " + arr);

// * sort
arr.sort((a, b) => b - a);
console.log(arr);

// * slice
console.log("Sliced Array : " + arr.slice(1,3))
console.log(arr);

// * lastindexOf
console.log(arr.lastIndexOf(5))

// * isArray -> Array 
console.log(Array.isArray(arr))

// * toString 
console.log(arr.toString())

// * find  -- first occurence where function is true 
let ans = arr.find((value)=> value % 2 != 0)
console.log(ans)


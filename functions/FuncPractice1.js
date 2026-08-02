// * Find max from the array
function arrayMax(n)
{
    let max = n[0];
    for(let i of n)
    {
        if(i > max)
        {
            max = i;
        }
    }
    return max
}

// * return sorted array
function arraySort(n) {
    n.sort((a, b) => a - b);
    
    return n;
}

num = [10, 9, 11, 7, 12];
console.log(arraySort(num));
console.log(arrayMax(num));

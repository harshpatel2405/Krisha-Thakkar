/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let s = String(digits)
    s = parseInt(s)
    let ans = s+1;
    ans = String(ans)
    ans = ans.split('')    

    return ans;
};

console.log
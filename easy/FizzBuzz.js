/**
 * Fizz Buzz - https://leetcode.com/problems/fizz-buzz/
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = new Array(n).fill(-1);
    for(let i=1; i<=n; i++){
        if((i%5 == 0) && (i%3 == 0)){
            res[i-1] = "FizzBuzz";
        }
        else if(i%3 == 0){
            res[i-1] = "Fizz";
        }
        else if(i%5 == 0){
            res[i-1] = "Buzz";
        }
        else {
            res[i-1] = "" + i;
        }
    }
    return res;
};
/**
 * 7. Reverse Integer - https://leetcode.com/problems/reverse-integer/description/
 */
/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
 * then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * 
 * Example 1:
 * Input: x = 123
 * Output: 321
 * 
 * Example 2:
 * Input: x = -123
 * Output: -321
 * 
 * Example 3:
 * Input: x = 120
 * Output: 21
 * 
 * Constraints:
 * -231 <= x <= 231 - 1
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let bit = Math.pow(2, 31) - 1;
  let result = 0;
  if (x < 0) {
    x = Math.abs(x);
    result = -1 * parseInt(x.toString().split("").reverse().join(""));
  } else result = parseInt(x.toString().split("").reverse().join(""));
  if (result > bit || result < -bit) return 0;
  return result;
};

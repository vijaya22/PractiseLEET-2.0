/** Palindrome Number -  https://leetcode.com/problems/palindrome-number/description/ */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let xStr = x.toString();
  let noOfDigits = xStr.length;
  for (let i = 0; i < noOfDigits; i++) {
    if (xStr[i] != xStr[noOfDigits - i - 1]) return false;
  }
  return true;
};

/**
 * 91. Decode Ways - https://leetcode.com/problems/decode-ways/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  createSet();
  let memo = new Array(s.length).fill(-1);
  let count = decodeWays(s, 0, memo);
  return count;
};
let numSet = new Set();
function createSet() {
  for (let i = 1; i <= 26; i++) {
    numSet.add("" + i);
  }
}

function isValid(str) {
  return numSet.has(str);
}

function decodeWays(str, index, memo) {
  if (index > str.length) return 0;
  if (index == str.length) return 1;
  if (memo[index] != -1) return memo[index];
  if (index == str.length - 1) {
    if (isValid(str[index])) return 1;
    else return 0;
  }
  let single = isValid(str[index]) ? decodeWays(str, index + 1, memo) : 0;
  let double = isValid(str[index] + str[index + 1])
    ? decodeWays(str, index + 2, memo)
    : 0;
  memo[index] = single + double;
  return single + double;
}

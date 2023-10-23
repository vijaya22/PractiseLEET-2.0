/**
 * Climbing Stairs - https://leetcode.com/problems/climbing-stairs/description/
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let memoize = new Array(n + 1).fill(-1);
  return recurse(0, n, memoize);
};

function recurse(x, n, memoize) {
  if (x > n) return 0;
  if (memoize[x] != -1) return memoize[x];
  if (x == n) return 1;
  let ans = recurse(x + 1, n, memoize) + recurse(x + 2, n, memoize);
  memoize[x] = ans;
  return ans;
}

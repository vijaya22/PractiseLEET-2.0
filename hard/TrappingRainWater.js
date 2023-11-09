/** 42. Trapping Rain Water - https://leetcode.com/problems/trapping-rain-water */
/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 * 
 * Example 1:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented
 * by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped.
 * 
 * Example 2:
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 * 
 * Constraints:
 * n == height.length
 * 1 <= n <= 2 * 104
 * 0 <= height[i] <= 105
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let n = height.length;
  let leftMaxArr = new Array(n).fill(0);

  let rightMaxArr = new Array(n).fill(0);

  leftMaxArr[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMaxArr[i] = Math.max(leftMaxArr[i - 1], height[i]);
  }

  rightMaxArr[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMaxArr[i] = Math.max(rightMaxArr[i + 1], height[i]);
  }

  let ans = 0;
  for (let i = 1; i < n - 1; i++) {
    ans = ans + (Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i]);
  }

  return ans;
};

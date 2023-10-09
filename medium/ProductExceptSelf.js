/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 *
 * Constraints:
 * 2 <= nums.length <= 105
 * -30 <= nums[i] <= 30
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length;
  if (n == 0 || n == 1) return [];
  let resultProductArr = new Array(n).fill(1);
  let rightProductArr = new Array(n).fill(1);
  let leftProductArr = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    leftProductArr[i] = leftProductArr[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    rightProductArr[i] = rightProductArr[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    resultProductArr[i] = leftProductArr[i] * rightProductArr[i];
  }

  return resultProductArr;
};

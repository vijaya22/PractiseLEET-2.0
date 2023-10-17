/**
 * Given two integer arrays nums1 and nums2,
 * return the maximum length of a subarray that appears in both arrays.
 *
 * Example 1:
 * Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
 * Output: 3
 * Explanation: The repeated subarray with maximum length is [3,2,1].
 *
 * Example 2:
 * Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
 * Output: 5
 * Explanation: The repeated subarray with maximum length is [0,0,0,0,0].
 *
 * Constraints:
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 100
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let max = 0;
  let dp = new Array(nums1.length)
    .fill(-1)
    .map((col) => new Array(nums2.length).fill(-1));
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let res = recurse2(i, j, nums1, nums2, dp);
      max = Math.max(res, max);
    }
  }
  return max;
};

function recurse(i, j, nums1, nums2) {
  let k = 0;
  while (
    i + k < nums1.length &&
    j + k < nums2.length &&
    nums1[i + k] == nums2[j + k]
  ) {
    k++;
  }
  return k;
}

function recurse2(i, j, nums1, nums2, dp) {
  if (i >= nums1.length || j >= nums2.length) return 0;
  if (dp[i][j] != -1) return dp[i][j];
  if (nums1[i] != nums2[j]) return 0;
  if (nums1[i] == nums2[j]) {
    dp[i][j] = recurse2(i + 1, j + 1, nums1, nums2, dp) + 1;
    return dp[i][j];
  }
}

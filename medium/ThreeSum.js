/** 3 Sum - https://leetcode.com/problems/3sum/description/ */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort();
  let len = nums.length;
  let res = [];
  for (let j = 0; j < len && nums[j] <= 0; j++) {
    if (j == 0 || nums[j - 1] != nums[j]) find2Sum(nums, j, res);
  }
  return res;
};

function find2Sum(arr, index, res) {
  let n = arr.length;
  let seen = new Set();
  for (let i = index + 1; i < n; i++) {
    let complement = -arr[index] - arr[i];
    if (seen.has(complement)) {
      res.push([complement, arr[i], arr[index]]);
      while (i + 1 < n && arr[i] == arr[i + 1]) ++i;
    }
    seen.add(arr[i]);
  }
}

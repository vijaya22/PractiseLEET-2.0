/**
 * Monotonic Array - https://leetcode.com/problems/monotonic-array/description/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    return monotonicIncreasing(nums) || monotonicDecreasing(nums);
};
function monotonicIncreasing(arr) {
    let n = arr.length;
    for(let i=1; i<n; i++){
        if(arr[i] < arr[i-1]) return false;
    }
    return true;
}
function monotonicDecreasing(arr) {
    let n = arr.length;
    for(let i=1; i<n; i++){
        if(arr[i] > arr[i-1]) return false;
    }
    return true;
}
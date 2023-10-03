/**
 * You are given an array of integers nums,
 * there is a sliding window of size k which is moving from the very left of the array to the very right.
 * You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * Return the max sliding window.
 * 
 * Example 1:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation: 
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * 1 [3  -1  -3] 5  3  6  7        3
 * 1  3 [-1  -3  5] 3  6  7        5
 * 1  3  -1 [-3  5  3] 6  7        5
 * 1  3  -1  -3 [5  3  6] 7        6
 * 1  3  -1  -3  5 [3  6  7]       7
 * 
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * 
 * Constraints:
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 * 1 <= k <= nums.length
*/

// Basic approach (O(n*2)) - gives TLE
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let n = nums.length;
    let res = [];
    for(let i=k; i<=n; i++){
        let max = maxInArray(nums.slice(i-k,i));
        res.push(max);
    }
    return res;

};

function maxInArray(arr){
    let max = Number.NEGATIVE_INFINITY;
    for(let i=0; i< arr.length; i++){
        max = Math.max(max, arr[i]);
    }
    return max;
}


// Optimized solution
// using monotonic decreasing deque 

function maximumSlidingWindow (nums, k) {
    let dq = [];
    let res = [];

    for(let i=0; i<nums.length; i++){
        while(dq.length > 0 && nums[i] > dq[dq.length-1])dq.pop();
        dq.push(nums[i]);
        const j = i +1 - k;
        if(j>=0){
            res.push(dq[0]);
            if(nums[i] == dq[0]) dq.shift();
        }
    }
    return res;
}
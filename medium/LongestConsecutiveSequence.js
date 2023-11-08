/**
 * 128. Longest Consecutive Sequence - https://leetcode.com/problems/longest-consecutive-sequence/
 */
/**
 * Given an unsorted array of integers nums,
 * return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * 
 * Example 1:
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 * 
 * Example 2:
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 * 
 * Constraints:
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0) return 0;
    // sort
    // then see if the numbers are consecutive , if yes, find maxlength & return max

    let maxConsecutiveLength = 0;
    nums.sort((a,b) => a-b);
    nums = removeDuplicates(nums);
    let count = 1;
    for(let i=0; i<nums.length-1; i++){
        if(nums[i] == nums[i+1]-1){
            count++;
            maxConsecutiveLength = Math.max(maxConsecutiveLength, count);
        }
        else count = 1;
    }
    maxConsecutiveLength = Math.max(maxConsecutiveLength, count);
    return maxConsecutiveLength
};

function removeDuplicates(arr){
    let set = new Set(arr);
    return Array.from(set);

}

// questions that could have been asked 
// whats the min length of nums
// what happens when nums == []
// can nums have duplicate values

// time complexity = O(n log n) - due to sorting
// space complexity = O(n) - due to set
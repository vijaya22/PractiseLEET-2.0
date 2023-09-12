/** K Empty Slots */
/**
 * 
 * You have n bulbs in a row numbered from 1 to n.
 * Initially, all the bulbs are turned off.'
 * We turn on exactly one bulb every day until all bulbs are on after n days.
 * 
 * You are given an array bulbs of length n where bulbs[i] = x means that on the (i+1)th day,
 * we will turn on the bulb at position x where i is 0-indexed and x is 1-indexed.
 * 
 * Given an integer k, return the minimum day number such that there exists two turned on bulbs that have exactly k bulbs between them that are all turned off.
 * If there isn't such day, return -1.
 * 
 * Example 1:
 * Input: bulbs = [1,3,2], k = 1
 * Output: 2
 * Explanation:
 * On the first day: bulbs[0] = 1, first bulb is turned on: [1,0,0]
 * On the second day: bulbs[1] = 3, third bulb is turned on: [1,0,1]
 * On the third day: bulbs[2] = 2, second bulb is turned on: [1,1,1]
 * We return 2 because on the second day, there were two on bulbs with one off bulb between them.
 * 
 * Example 2:
 * Input: bulbs = [1,2,3], k = 1
 * Output: -1
 * 
 * Constraints:
 * n == bulbs.length
 * 1 <= n <= 2 * 104
 * 1 <= bulbs[i] <= n
 * bulbs is a permutation of numbers from 1 to n.
 * 0 <= k <= 2 * 104
 */

/**
 * 
 * @param {number[]} bulbs 
 * @param {number} k 
 * @return number
 */
function kEmptySlots(bulbs, k) {
    let n = bulbs.length;
    let bulbsArr = new Array(n).fill(0);
    for(let i=0; i<n ; i++){
        let position = bulbs[i];
        bulbsArr[position-1] = 1;
        let result = checkIfKBulbsAreOff(bulbsArr, k)
        if(result) return i+1;
    }
    return -1;
}
/**
 * 
 * @param {number[]} bulbsArr 
 * @param {number} k 
 * @return boolean
 */
function checkIfKBulbsAreOff(bulbsArr, k){
    // use sliding window to check if k bulbs are off between them
    let n = bulbsArr.length;
    let start = 0;
    let end = 0;
    while(start<n && end<n){

        while(start<n && bulbsArr[start] != 1){
            start++;
        }
        if(start >= n) break;
        end = start+1;
        while(end<n && bulbsArr[end] != 1){
            end++;
        }
        if(end >= n) break;
        let diff = end-start-1;
        if(diff == k) return true;
        start++;
    }
    return false;
}


let bulbs1 = [1,3,2];
let k1 = 1;
let res1 = kEmptySlots(bulbs1, k1);
console.log('res1:::',res1);


let bulbs2 = [1,2,3];
let k2 = 1;
let res2 = kEmptySlots(bulbs2, k2);
console.log('res2:::',res2);
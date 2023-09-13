/** 1876. Substrings of Size Three with Distinct Characters */
/**
 * A string is good if there are no repeated characters.
 * Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
 * Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
 * A substring is a contiguous sequence of characters in a string.
 * 
 * Example 1:
 * Input: s = "xyzzaz"
 * Output: 1
 * Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
 * The only good substring of length 3 is "xyz".
 * 
 * Example 2:
 * Input: s = "aababcabc"
 * Output: 4
 * Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
 * The good substrings are "abc", "bca", "cab", and "abc".
 * 
 * Constraints:
 * 1 <= s.length <= 100
 * s​​​​​​ consists of lowercase English letters.
 */

/**
 * 
 * @param {string} s
 * @return {number} 
 */
function countGoodSubstrings(s){
    // use sliding window
    let n = s.length;
    let start = 0;
    let end = start+3;
    let count = 0;
    while(start<n && end <=n){
        let sub = s.substring(start, end);
        if(ifNoRepeatedChars(sub)) count++;
        start++;
        end++;
    }
    return count;
}

function ifNoRepeatedChars(str){
    let charSet = new Set();
    for(let i=0; i<3; i++){
        if(charSet.has(str[i])){
            return false;
        }
        else charSet.add(str[i]);
    }
    return true;
}


let s1 = "xyzzaz";
let res1 = countGoodSubstrings(s1);
console.log('res1:::', res1);

let s2 = "aababcabc";
let res2 = countGoodSubstrings(s2);
console.log('res2:::', res2);
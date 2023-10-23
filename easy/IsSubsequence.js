
/**
 * Is Subsequence - https://leetcode.com/problems/is-subsequence/description/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length == 0 ) return true;
    if(s.length == t.length){
        if(s == t) return true;
        else return false;
    }
    let m = t.length;
    let n = s.length;
    let j = 0;
    for(let i=0; i<m; i++){
        if(t[i] == s[j]){
            j++;
            if(j >= n ) return true;
        }
    }
    return j == n ;
};
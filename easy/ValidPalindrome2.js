/**
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 *
 * Example 1:
 * Input: s = "aba"
 * Output: true
 *
 * Example 2:
 * Input: s = "abca"
 * Output: true
 * Explanation: You could delete the character 'c'.
 *
 * Example 3:
 * Input: s = "abc"
 * Output: false
 *
 * Constraints:
 * 1 <= s.length <= 105
 * s consists of lowercase English letters.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] != s[end]) {
      return (
        checkPalindrome(start, end - 1, s) || checkPalindrome(start + 1, end, s)
      );
    }
    start++;
    end--;
  }
  return true;
};
function checkPalindrome(start, end, str) {
  while (start < end) {
    if (str[start] != str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

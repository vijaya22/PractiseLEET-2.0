/**
 * 383. Ransom Note - https://leetcode.com/problems/ransom-note/
 */
/**
 * Given two strings ransomNote and magazine,
 * return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 * 
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * 
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * 
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 * 
 * Constraints:
 * 1 <= ransomNote.length, magazine.length <= 105
 * ransomNote and magazine consist of lowercase English letters.
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine) return false;
  // the idea is check if all the letters in ransom note are present in magazine
  let magazineLetterMap = new Map();
  for (let i = 0; i < magazine.length; i++) {
    let letter = magazine[i];
    if (magazineLetterMap.has(letter)) {
      let count = magazineLetterMap.get(letter);
      magazineLetterMap.set(letter, count + 1);
    } else {
      magazineLetterMap.set(letter, 1);
    }
  }

  let ransomLetterMap = new Map();
  for (let i = 0; i < ransomNote.length; i++) {
    let letter = ransomNote[i];
    if (ransomLetterMap.has(letter)) {
      let count = ransomLetterMap.get(letter);
      ransomLetterMap.set(letter, count + 1);
    } else {
      ransomLetterMap.set(letter, 1);
    }
  }

  let ransomKeys = Array.from(ransomLetterMap.keys());

  for (let i = 0; i < ransomKeys.length; i++) {
    let key = ransomKeys[i];
    if (!magazineLetterMap.has(key)) return false;
    if (magazineLetterMap.get(key) < ransomLetterMap.get(key)) return false;
  }

  return true;

  // time complexity = O(n)
  // space complexity = O(n) where n being the max length of ransomNote &
};

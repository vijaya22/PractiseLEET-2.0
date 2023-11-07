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
  if (ransomNote.length > magazine.length) return false;
  // using one hashmap

  let magazineLetterMap = new Map();
  for (let i = 0; i < magazine.length; i++) {
    let letter = magazine[i];
    if (magazineLetterMap.has(letter)) {
      let count = magazineLetterMap.get(letter);
      magazineLetterMap.set(letter, count + 1);
    } else magazineLetterMap.set(letter, 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    let letter = ransomNote[i];
    if (!magazineLetterMap.has(letter)) return false;
    else {
      if (magazineLetterMap.get(letter) == 0) return false;
      let count = magazineLetterMap.get(letter);
      magazineLetterMap.set(letter, count - 1);
    }
  }
  return true;
};

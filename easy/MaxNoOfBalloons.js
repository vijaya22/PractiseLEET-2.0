/**
 * Given a string text, you want to use the characters of text
 * to form as many instances of the word "balloon" as possible.
 * You can use each character in text at most once.
 * Return the maximum number of instances that can be formed.
 *
 * Example 1:
 * Input: text = "nlaebolko"
 * Output: 1
 *
 * Example 2:
 * Input: text = "loonbalxballpoon"
 * Output: 2
 *
 * Example 3:
 * Input: text = "leetcode"
 * Output: 0
 *
 * Constraints:
 * 1 <= text.length <= 104
 * text consists of lower case English letters only.
 */
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let bCount = 0;
  let aCount = 0;
  let lCount = 0;
  let oCount = 0;
  let nCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == "b") {
      bCount++;
    }
    if (text[i] == "a") {
      aCount++;
    }
    if (text[i] == "l") {
      lCount++;
    }
    if (text[i] == "o") {
      oCount++;
    }
    if (text[i] == "n") {
      nCount++;
    }
  }

  let lCoun = Math.floor(lCount / 2);
  let oCoun = Math.floor(oCount / 2);

  let count = Math.min(bCount, aCount, lCoun, oCoun, nCount);
  return count;
};

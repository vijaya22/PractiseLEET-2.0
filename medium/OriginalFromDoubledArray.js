/**
 * An integer array original is transformed into a doubled array changed by appending twice the value of every element in original,
 * and then randomly shuffling the resulting array.
 * Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.
 *
 * Example 1:
 * Input: changed = [1,3,4,2,6,8]
 * Output: [1,3,4]Explanation: One possible original array could be [1,3,4]:
 * - Twice the value of 1 is 1 * 2 = 2.
 * - Twice the value of 3 is 3 * 2 = 6.
 * - Twice the value of 4 is 4 * 2 = 8.
 * Other original arrays could be [4,3,1] or [3,1,4].
 *
 * Example 2:
 * Input: changed = [6,3,0,1]
 * Output: []
 * Explanation: changed is not a doubled array.
 *
 * Example 3:
 * Input: changed = [1]
 * Output: []
 * Explanation: changed is not a doubled array.
 *
 * Constraints:
 * 1 <= changed.length <= 105
 * 0 <= changed[i] <= 105
 */

/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
  if (changed.length == 0) return [];
  if (changed.length % 2 !== 0) return [];
  changed.sort((a, b) => a - b);
  let n = changed.length;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (map.has(changed[i])) {
      count = map.get(changed[i]) + 1;
      map.set(changed[i], count);
    } else map.set(changed[i], 1);
  }
  let res = [];
  for (let i = 0; i < n; i++) {
    let num = changed[i];
    if (map.get(num) > 0) {
      map.set(num, map.get(num) - 1);
      if (map.has(num * 2) && map.get(num * 2) > 0) {
        map.set(num * 2, map.get(num * 2) - 1);
        res.push(num);
      } else return [];
    }
  }
  return res;
};

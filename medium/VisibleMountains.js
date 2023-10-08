/**
 * You are given a 0-indexed 2D integer array peaks where peaks[i] = [xi, yi]
 * states that mountain i has a peak at coordinates (xi, yi).
 * A mountain can be described as a right-angled isosceles triangle,
 * with its base along the x-axis and a right angle at its peak.
 * More formally, the gradients of ascending and descending the mountain are
 * 1 and -1 respectively. A mountain is considered visible
 * if its peak does not lie within another mountain
 * (including the border of other mountains).
 * Return the number of visible mountains.
 *
 * Example 1:
 * Input: peaks = [[2,2],[6,3],[5,4]]
 * Output: 2
 * Explanation: The diagram above shows the mountains.
 * - Mountain 0 is visible since its peak does not lie within another mountain or its sides.
 * - Mountain 1 is not visible since its peak lies within the side of mountain 2.
 * - Mountain 2 is visible since its peak does not lie within another mountain or its sides.
 * There are 2 mountains that are visible.
 *
 * Example 2:
 * Input: peaks = [[1,3],[1,3]]
 * Output: 0
 * Explanation: The diagram above shows the mountains (they completely overlap).
 * Both mountains are not visible since their peaks lie within each other.
 *
 * Constraints:
 * 1 <= peaks.length <= 105
 * peaks[i].length == 2
 * 1 <= xi, yi <= 105
 */
/**
 * @param {number[][]} peaks
 * @return {number}
 */
var visibleMountains = function (peaks) {
  let sortedPeaks = peaks.sort(([x, y], [a, b]) => x - a);
  let ans = [];
  for (let i = 0; i < sortedPeaks.length; i++) {
    let [x, y] = sortedPeaks[i];
    while (
      ans.length > 0 &&
      y - x >= ans[ans.length - 1][1] - ans[ans.length - 1][0]
    ) {
      ans.pop();
    }
    if (
      ans.length == 0 ||
      y + x > ans[ans.length - 1][0] + ans[ans.length - 1][1]
    ) {
      ans.push(sortedPeaks[i]);
    }
  }
  ans = removeDuplicates(peaks, ans);
  return ans.length;
};

function removeDuplicates(peaks, ans) {
  let map = new Map();
  let n = peaks.length;
  for (let i = 0; i < n; i++) {
    let peakStr = "" + peaks[i][0] + "," + peaks[i][1];
    if (map.has(peakStr)) {
      map.set(peakStr, map.get(peakStr) + 1);
    } else map.set(peakStr, 1);
  }
  return ans.filter((peak) => {
    let peakStr = "" + peak[0] + "," + peak[1];
    return map.get(peakStr) < 2;
  });
}

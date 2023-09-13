/** 681. Next Closest Time */
/**
 * Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits.
 * There is no limit on how many times a digit can be reused.
 * You may assume the given input string is always valid.
 * For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.
 *
 * Example 1:
 * Input: time = "19:34"
 * Output: "19:39"
 * Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.
 * It is not 19:33, because this occurs 23 hours and 59 minutes later.
 *
 * Example 2:
 * Input: time = "23:59"
 * Output: "22:22"
 * Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22.
 * It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.
 *
 * Constraints:
 * time.length == 5
 * time is a valid time in the form "HH:MM".
 * 0 <= HH < 24
 * 0 <= MM < 60
 */

/**
 *
 * @param {string} time
 * @return {string}
 */
function nextClosestTime(time) {
  let timeInNumber = parseInt(time.replace(":", ""));
  let minDiff = Number.POSITIVE_INFINITY;
  let smallestTime = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 6; k++) {
        for (let l = 0; l < 10; l++) {
          if (
            ifSameDigits(time, i) &&
            ifSameDigits(time, j) &&
            ifSameDigits(time, k) &&
            ifSameDigits(time, l)
          ) {
            let currentTime = 1000 * i + 100 * j + 10 * k + l;
            if (validTime(currentTime)) {
              let diff = currentTime - timeInNumber;
              if (diff <= 0) {
                diff = diff + 2400;
              }
              if (diff < minDiff) {
                minDiff = diff;
                smallestTime = ""+i+j+k+l; // if we do currentTime.toString() we will not be able to get 0000
              }
            }
          }
        }
      }
    }
  }
  return smallestTime.substring(0, 2) + ":" + smallestTime.substring(2, 4);
}

function ifSameDigits(timeInString, digit) {
  return timeInString.indexOf(digit.toString()) != -1;
}

function validTime(time){
    return time<=2359;
}

let time1 = "19:34";
let res1 = nextClosestTime(time1);
console.log("res1::", res1);

let time2 = "23:59";
let res2 = nextClosestTime(time2);
console.log("res2::", res2);

let time3 = "00:00";
let res3 = nextClosestTime(time3);
console.log("res3::", res3);

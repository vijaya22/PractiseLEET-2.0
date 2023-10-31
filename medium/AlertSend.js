/**
 * 1604. Alert Using Same Key-Card Three or More Times in a One Hour Period - https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/
 */
/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  let employeeKeyTimeMap = new Map();
  let n = keyName.length;
  for (let i = 0; i < n; i++) {
    let currEmployee = keyName[i];
    let currTime = keyTime[i];
    const [hour, minute] = currTime.split(":");
    let time = hour * 60 + +minute;
    if (employeeKeyTimeMap.has(currEmployee)) {
      let timeSheet = employeeKeyTimeMap.get(currEmployee);
      timeSheet.push(time);
      employeeKeyTimeMap.set(currEmployee, timeSheet);
    } else employeeKeyTimeMap.set(currEmployee, [time]);
  }

  let matchedEmployees = [];
  for (let entry of employeeKeyTimeMap) {
    let [employee, timesheet] = entry;
    if (findIfOneHour(timesheet)) {
      matchedEmployees.push(employee);
    }
  }
  return matchedEmployees.sort();
};

function findIfOneHour(timesheet) {
  // make triplets
  // check if first and last have diff of 1 hour
  let n = timesheet.length;
  timesheet.sort((a, b) => a - b);
  if (n < 3) return false;
  for (let i = 0; i < n - 2; i++) {
    let start = timesheet[i];
    let end = timesheet[i + 2];
    if (Math.abs(start - end) <= 60) return true;
  }
  return false;
}

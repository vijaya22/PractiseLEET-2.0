/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    // sort the intervals on start time and then end time
    // if any start time is less than end time of previous - > return false
    // complexity = sort complexity + O(n) == O (nlog n)
    // space = constant

    // sort
    intervals.sort((a,b) => a[0]-b[0]);

    let n = intervals.length;
    for(let i=1; i<n; i++){
        let [start, end] = intervals[i]
        if(start < intervals[i-1][1]){
            return false;
        }
    }
    return true;

};
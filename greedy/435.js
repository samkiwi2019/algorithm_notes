/**
 * Problem 435 (medium)
 * Given an array of intervals intervals where intervals[i] = [start, end],
 * return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
 *
 * Example 1:
 * Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
 * Output: 1
 * Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
 *
 * Example 2:
 * Input: intervals = [[1,2],[1,2],[1,2]]
 * Output: 2
 * Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
 *
 * Example 3:
 * Input: intervals = [[1,2],[2,3]]
 * Output: 0
 * Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 *
 * Constraints:
 * 1 <= intervals.length <= 2 * 10**4
 * intervals[i].length == 2
 * -2 * 104 <= starti < endi <= 2 * 10**4
 *
 * strategy:
 * I’d like to explain with the array [[1,2],[2,3],[3,4],[1,3]],
 * if the array is disorder array, I think it is imposibile to get a solusion.
 * so, firstly we need to sort it. but how?  based on start number or end number ?
 * The requirement asked us to get minimum nunber of intervals we need to remove.
 * So, to sort it with end number could be the best way.
 *
 * [[1,2],[1,3],[2,3],[3,4]]
 * After sorting, we can see [1,3] is not what we need.
 * so, we can image that when we traverse the array and current item start number doesn't equal prev item end number, the remove counter need to plus 1
 * and in this case, the result is 1. obviously, it is correct. we can start coding now.
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]); // sorting by end number
    let remove_count = 0,
        prev = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] !== prev) remove_count++;
        else prev = intervals[i][1];
    }
    return remove_count;
};

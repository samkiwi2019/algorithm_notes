/**
 * There are some spherical balloons spread in two-dimensional space.
 * For each balloon, provided input is the start and end coordinates of the horizontal diameter.
 * Since it's horizontal, y-coordinates don't matter,
 * and hence the x-coordinates of start and end of the diameter suffice.
 * The start is always smaller than the end.
 * An arrow can be shot up exactly vertically from different points along the x-axis.
 * A balloon with xstart and xend bursts by an arrow shot at x if xstart ≤ x ≤ xend.
 * There is no limit to the number of arrows that can be shot. An arrow once shot keeps traveling up infinitely.
 * Given an array points where points[i] = [xstart, xend],
 * return the minimum number of arrows that must be shot to burst all balloons.
 *
 * Example 1:
 * Input: points = [[10,16],[2,8],[1,6],[7,12]]
 * Output: 2
 * Explanation: One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11 (bursting the other two balloons).
 *
 * Example 2:
 * Input: points = [[1,2],[3,4],[5,6],[7,8]]
 * Output: 4
 * Example 3:
 * Input: points = [[1,2],[2,3],[3,4],[4,5]]
 * Output: 2
 *
 * Constraints:
 * 1 <= points.length <= 10**4
 * points[i].length == 2
 * -231 <= xstart < xend <= 231 - 1
 *
 * Stretage
 *
 * original: [[10,16],[2,8],[1,6],[7,12]]
 * sorted: [[1,6],[2,8],[7,12],[10,16]]
 *
 * There is a condition, one arrow can burst multiple balloons.
 * so first of all, we need to sort the ballons ==> sorted: [[1,6],[2,8],[7,12],[10,16]]
 * As you can see the first and second item have an intersection [2, 6]
 * So, one arrow has a chance to burst two balloons.
 * I was thinking if it is possible to burst more than two balloons by one shot.
 * I think so
 *
 * So, everytime when we find two balloons have a intersection we need to save this section. and check it with next item. and so on.
 *
 * if they don't have a intersection, which means we need an arrow to burst them. ==> arrows + 1
 * if they have, we just skip them and save the intersection to compare with next one.
 *
 * we can code now.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[1] - b[1]);
    let arrows = 1,
        prev = points[0][1];
    for (let i = 1; i < points.length; i++) {
        // if current item has a intersection , we need to compute the section's end edge  and then compare it with next item start edge.
        if (points[i][0] <= prev) {
            prev = Math.min(prev, points[i][1]);
        } else {
            prev = points[i][1]; // have no intersection, make current one become the prev one for next comparing
            arrows++;
        }
    }
    return arrows;
};

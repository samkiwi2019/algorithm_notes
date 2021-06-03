/**
 * Problem 135 (Hard)
 * There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
 * You are giving candys to these children subjected to the following requirements:
 *
 * Each child must have at least one candy.
 * Children with a higher rating get more candys than their neighbors.
 *
 * Return the minimum number of candys you need to have to distribute the candys to the children.
 *
 * Example:
 *
 * Input: ratings = [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2, 1, 2 candys respectively.
 *
 *
 * Constraints:
 * n == ratings.length
 * 1 <= n <= 2 * 10**4
 * 0 <= ratings[i] <= 2 * 10**4
 *
 *
 *
 * Strategy
 *
 * 1. Each child must have at least one candy.
 * 2. Children with a higher rating get more candys than their neighbors.
 *
 * So, firstly, we can give everyone a candy. and then think about how to check candy with children‘ height.
 * if we check children both left and right side at same time,it might be a little bit complicated.
 * So，I was thinking I can check right side first and then check left side.
 * it likes I get correct number from both sides, and the global result will be correct.
 */

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const len = ratings.length;
    // one child one candy, no need computing.
    if (len < 2) return len;

    // to give every child a candy.
    const candys = Array(len).fill(1);

    //checking letf side neighbor, if current child higher than left boy. current child will get the number of candys of left child's candy + 1
    for (let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) candys[i] = candys[i - 1] + 1;
    }

    // checking right side.  if current child higher than right boy. current child will get the number of candys of right child's candy + 1
    for (let i = len - 1; i > 0; i--) {
        if (ratings[i - 1] > ratings[i]) candys[i - 1] = Math.max(candys[i] + 1, candys[i - 1]);
    }

    return candys.reduce((acc, curr) => acc + curr, 0);
};

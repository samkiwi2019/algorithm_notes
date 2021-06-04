/**
 *  Problem 605 (Easy)
 *
 * You have a long flowerbed in which some of the plots are planted,
 * and some are not. However, flowers cannot be planted in adjacent plots.
 * Given an integer array flowerbed containing 0's and 1's,
 * where 0 means empty and 1 means not empty, and an integer n,
 * return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
 *
 * Example 1:
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: true
 *
 * Example 2:
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: false
 *
 * Constraints:
 * 1 <= flowerbed.length <= 2 * 10**4
 * flowerbed[i] is 0 or 1.
 * There are no two adjacent flowers in flowerbed.
 * 0 <= n <= flowerbed.length
 *
 * Stretage:
 *
 * [1,0,0,0,0,0,1] could be a good example for this case.
 * just image that when we travals the array, we have to check current item has no neighbor with a flower.
 * So, the third one could be an available spot. once we get a spot, we can make counter + 1 or the target number - 1
 * but if the current item is the fourth one, it looks like it still an option.
 * So, we need to mark the spot once we find it. it makes sure their neighbor will be checked with righteous. @_@!
 * ok lets coding now.
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
            n--;
            flowerbed[i] = 1; // mark the spot
        }
    }
    return n <= 0;
};

/**
 * Problem 455 (Easy):
 *
 * Assume you are an awesome parent and want to give your children some cookies.
 * But, you should give each child at most one cookie.
 * Each child i has a greed factor g[i],
 * which is the minimum size of a cookie that the child will be content with;
 * and each cookie j has a size s[j]. If s[j] >= g[i],
 * we can assign the cookie j to the child i, and the child i will be content.
 * Your goal is to maximize the number of your content children and output the maximum number.
 *
 * Example :
 *
 * Input: g = [1,2], s = [1,2,3]
 * Output: 2
 * Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
 * You have 3 cookies and their sizes are big enough to gratify all of the children,
 * You need to output 2.
 *
 * Constraints:
 * 1 <= g.length <= 3 * 10**4
 * 0 <= s.length <= 3 * 10**4
 * 1 <= g[i], s[j] <= 231 - 1
 *
 *
 * Strategy:
 * It is conceivable that each person in a group of children has different levels of hunger.
 * Meanwhile, all biscuits have different abilities to satisfy hunger.
 * Therefore, in order to ensure that the maximum number of children are satisfied,
 * cookies should be allocated to the children who are equal to or closest to their hunger.
 *
 * First, we sort the children and cookies from smallest to largest. Try to think about it.
 * When the first child is assigned, we go to the cookie queue to find the closest one from small to big.
 * Then the second child, because the hunger of the second child must be greater than the first one,
 * and the cookie is the same, so in this state, we only need to continue finding the next one based on the first result.
 *
 */

/**
 * @param {number[]} children
 * @param {number[]} cookies
 * @return {number}
 */
const findContentChildren = (children, cookies) => {
    children.sort((a, b) => a - b);
    cookies.sort((a, b) => a - b);
    let children_count = 0, // an index and also a counter.
        cookies_count = 0;
    while (children_count < children.length && cookies_count < cookies.length) {
        // when current child matchs the cookie's value, it indicates we fed a child.
        // so let's move to next one.
        if (children[children_count] <= cookies[cookies_count]) children_count++;
        // Regardless of whether the current cookie matches, we must move to the next one.
        cookies_count++;
    }
    return children_count;
};

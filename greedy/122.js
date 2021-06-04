/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * Find the maximum profit you can achieve.
 * You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
 * Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 *
 * Example 2:
 * Input: prices = [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
 * Note that you cannot buy on day 1,
 * buy on day 2 and sell them later,
 * as you are engaging multiple transactions at the same time.
 * You must sell before buying again.
 *
 * Example 3:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e., max profit = 0.
 *
 * Constraints:
 * 1 <= prices.length <= 3 * 10**4
 * 0 <= prices[i] <= 10**4
 *
 *
 * Strategy:
 *
 * when can people get profite ? ==> only next day price is higher than today's.
 * It doesn't matter how many times you used for buying and selling.
 * So only the only condition can be considered.
 *
 * if we can't buy or sell in the same day. maybe we can add a mark for selling and buyling as shown in maxProfit2
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profite = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profite += prices[i] - prices[i - 1];
        }
    }
    return profite;
};

var a = [7, 1, 5, 3, 6, 4];
maxProfit(a);
var a = [1, 2, 3, 4, 5];
maxProfit(a);
var a = [7, 6, 4, 3, 1];
maxProfit(a);
var a = [2, 1, 2, 0, 1];
maxProfit(a);

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
    let buy = -1; // price might be 0 so. mark it with -1 as a default status.
    let profite = 0;

    for (let i = 0; i < prices.length; i++) {
        // buy
        if (prices[i] < prices[i + 1] && buy === -1) {
            buy = prices[i];
            continue;
        }

        // sell
        if (
            (prices[i] > prices[i + 1] && buy !== -1) ||
            (i === prices.length - 1 && buy !== -1 && prices[i] > buy)
        ) {
            profite += prices[i] - buy;
            buy = -1;
            continue;
        }
    }

    return profite;
};

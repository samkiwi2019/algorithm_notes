/**
 * Problem 763 (medium)
 *
 * A string s of lowercase English letters is given.
 * We want to partition this string into as many parts as possible
 * so that each letter appears in at most one part,
 * and return a list of integers representing the size of these parts.
 *
 * Example 1:
 * Input: s = "ababcbacadefegdehijhklij"
 * Output: [9,7,8]
 *
 * Explanation:
 *
 * The partition is "ababcbaca", "defegde", "hijhklij".
 * This is a partition so that each letter appears in at most one part.
 * A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
 *
 * Note:
 * s will have length in range [1, 500].
 * s will consist of lowercase English letters ('a' to 'z') only.
 *
 *
 *
 * Statege：
 *
 * Just think about the problem,  we need to slice the string into many groups and every group doesn't have letters in the rest of groups.
 * Every group should be unique.
 * And every letter may show many times. so for every single letter, they have a scope. like [start, end]
 * for example: "ababcbacadefegdehijhklij"
 *
 *  a has a scope [0, 8] based on where it shows.
 *  b has a scope [1, 4], so, there is a intersection between a and b. they must belong to a same group.
 *
 * So first of all, we need to covert string s into an array with their coordinate information as shown below:
 *
    [
    { startIndex: 0, count: 4, endIndex: 8, label: 'a' },
    { startIndex: 1, count: 3, endIndex: 5, label: 'b' },
    { startIndex: 4, count: 2, endIndex: 7, label: 'c' },
    { startIndex: 9, count: 2, endIndex: 14, label: 'd' },
    { startIndex: 10, count: 3, endIndex: 15, label: 'e' },
    { startIndex: 11, count: 1, endIndex: 11, label: 'f' },
    { startIndex: 13, count: 1, endIndex: 13, label: 'g' },
    { startIndex: 16, count: 2, endIndex: 19, label: 'h' },
    { startIndex: 17, count: 2, endIndex: 22, label: 'i' },
    { startIndex: 18, count: 2, endIndex: 23, label: 'j' },
    { startIndex: 20, count: 1, endIndex: 20, label: 'k' },
    { startIndex: 21, count: 1, endIndex: 21, label: 'l' }
    ]

    we can start coding now.
*/

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const positions = {};
    const items = [];
    Array.prototype.forEach.call(s, (x, i) => {
        const info = {
            startIndex: positions[x] ? positions[x].startIndex : i,
            count: positions[x] ? positions[x].count + 1 : 1,
            endIndex: i,
            label: x,
        };
        positions[x] = info;
    });
    Object.keys(positions).forEach(key => {
        items.push(positions[key]);
    });

    // become a leetcode 452
    let count = items[0].count, //record first item because we start with 1.
        result = [],
        prev = items[0].endIndex;
    for (let i = 1; i < items.length; i++) {
        // when current element has an intersection with prev element.
        // the intersection scope should be extended to the bigger one of two scope.
        // I.E.  [16, 19] [17, 22]  => [16, 22]
        // instead, if they don't have intersection, set current item as the prev for next round.
        if (items[i].startIndex < prev) {
            count += items[i].count;
            prev = Math.max(prev, items[i].endIndex);
        } else {
            result.push(count);
            count = items[i].count;
            prev = items[i].endIndex;
        }
        // the last group should be push into the result.
        if (i === items.length - 1) {
            result.push(count);
        }
    }
    return result;
};

var s = 'ababcbacadefegdehijhklij';
partitionLabels(s);

/**
 * 
 * @param {String} str1 
 * @param {String} str2 
 * @returns {String}
 */
function getCommonPrefix(str1, str2) {
    const len = Math.min(str1.length, str2.length)
    let prefix = '';
    for (let i = 0; i < len; i++) {
        if (str1[i] !== str2[i]) break;
        prefix += str1[i]
    }
    return prefix
}
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const len = strs && strs.length;
    if (!len) return '';
    let prefix = strs[0] || '';
    for (let i = 1; i < len; i++) {
        if (!prefix) break;
        prefix = getCommonPrefix(prefix, strs[i])
    }
    return prefix;
};

---
title: [String]最长公前缀
link: https://leetcode-cn.com/problems/longest-common-prefix/
date: 2020-04-12 11:00:00
categories:
- [Leetcode,String]
- [刷题,Javascript]
- [Javascript,String]

tags: 
- Leetcode#String
- 简单题
  
summary: Leetcode#编写一个函数查找字符串数组中的最长的公共前缀
---

## 解法1 68ms 36.7MB

```js
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

```

## 解法2 56ms 33.9MB

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length ===0) return '';
    let prefix = strs[0];
    
    for (let i = 1; i<strs.length;i++) {
        while (strs[i].indexOf(prefix)!=0) {
            prefix = prefix.slice(0,prefix.length-1);
        }
    }
    return prefix
};
```

### # 思路

上面解法1的弊端在于需要调用外部函数，因此会消耗较多的内存，因此要优化内存的话，应该想办法把外部函数调用的地方用内置函数来替代。

```js
while (strs[i].indexOf(prefix)!=0) {
    prefix = prefix.slice(0,prefix.length-1);
}
```
上面这个 `while` 循环中通过判断 `strs[i].indexOf(prefix) !=0 `来进行前缀检索。应该清楚的是，这个语句得到 `0` 的情况有两种

- 一是 `strs[i]` 中包含了 `prefix`字串，且开始的索引是 `0`，也即字符串开头，这种情况就是得到的前一个字符串和当前字符串的最长公共前缀，则此时跳出 `while` 循环，再对下一个字符串进行相同处理


- 另一个则是在 `prefix` 是空字符串的时候，`strs[i].indexOf(prefix)` 也会得到0，这种情况说明两个字符串没有共同前缀，此时整个函数都可以直接 `return`一个空字符串了


## 参考

- [String.prototype.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
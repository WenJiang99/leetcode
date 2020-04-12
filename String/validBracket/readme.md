---
title: Leetcode#String 有效括号
date: 
summary: 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
tags: 
- Leetcode#简单题
categories:
- Leetcode#String
- 刷题#Javascript
- Javascript#String

link: https://leetcode-cn.com/problems/valid-parentheses/
---

## 题目

[LeetCode-题目链接](https://leetcode-cn.com/problems/valid-parentheses/)

![](./problem.png)


## 解法1 数组模拟堆栈 64ms 33.7MB

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case ')': {
                if (stack.pop() !== '(') return false;
                break;
            };
            case ']': {
                if (stack.pop() !== '[') return false;
                break;
            }
            case '}': {
                if (stack.pop() !== '{') return false;
                break;
            };
            default: stack.push(s[i])
        }
    }
    return stack.length === 0;
};
```
---
title: Leetcode#String 反转字符串
date: 2020-04-17 23:18:30 
catagories: 
- 刷题#Javascript 
- Leetcode#Javascript 
- Leetcode#String 
- Javascript#String 

tags: 
- Leetcode#刷题 
- Leetcode#简单题
- String#简单题

summary: 反转字符串
author: wenjiang
img: 
coverImg: 
top: false
cover: false
mathjax: false
keywords: 反转字符串
link: https://leetcode-cn.com/problems/reverse-string/
---

## 题目

[Leetcode-题目链接](https://leetcode-cn.com/problems/reverse-string/)   

[github-链接](https://github.com/WenJiang99/leetcode/tree/master/String/reverseString)

![](./problem.png)   
<!-- <--! select a type of post img ref --> -->
<!-- ![](https://raw.githubusercontent.com/WenJiang99/leetcode/master/String/reverseString/problem.png)    -->
![](./readme/problem.png)

## 解法

### 思路

这个 `javascript`中有相应的数组方法 `reverse` 来完成，直接调用就可以.

### 代码
```js 

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse()
};

```

### 效率
耗时：136ms, 64.18%
内存：46.6MB

## 解法2 逐个反转

### 思路
上面解法1显然过于依赖语言的特性，如果要从通用一点的解决思想来考虑的话，就是遍历一下数组（遍历到一半），然后收尾对应位置的字符调换位置即可

### 代码

```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]]
    }
    return s;
};
```

其中，下面这一句语句时使用了解构赋值来调换收尾两个元素的值
```js
[s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]]
```

相当于
```js
let temp = s[i];
s[i] = s[s.length - i - 1];
s[s.length - i - 1] = temp;
```

## 参考

- []()


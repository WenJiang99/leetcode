---
title: Leetcode 罗马数字转换成整数
categories:
- leetcode

tags: 
- string
- easy

link: https://leetcode-cn.com/problems/roman-to-integer/
summary: LeetCode#给定罗马数字将其转换成整数
date: 2020-04-11 14:00:00
---

## 题目

[Leetcode-题目链接](https://leetcode-cn.com/problems/roman-to-integer/)


## 正则表达式解法

```js
var seperator = '-'

function getNumber(key) {
    switch (key) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        case 'IV': return 4;
        case 'IX': return 9;
        case 'XL': return 40;
        case 'XC': return 90;
        case 'CD': return 400;
        case 'CM': return 900;
    }
}

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
    var total = 0;
    var normalString = String(s).replace(/(IV)|(IX)|(XL)|(XC)|(CD)|(CM)/ig, function (m) {
        if (!m) return;
        total += __charMap[m]
        return seperator
    })
    var target = normalString.replace(new RegExp(seperator, 'ig'), '').split('').reduce(function (sum, item) {
        if (!item) return sum;
        return sum + __charMap[item];
    }, total)
    return target;
};

console.log(romanToInt("MCMXCIV"))
```

### 思路
这个解法的思路是想到直接把输入的字符串拆开成每一个单个字符，然后映射到对应的整数，然后做个累加。但是因为有六个数字是由两个字符组合来表示的，所以需要先把这些特殊数字找出来先处理掉，留下的都是可以直接单个映射的字符，就可以直接拆开相加了。

下面的代码部分就是用来匹配六个特殊数字的，匹配到之后对其进行映射、累加，然后把字符串换成一个分隔符 `-`

```js
var normalString = String(s).replace(/(IV)|(IX)|(XL)|(XC)|(CD)|(CM)/ig, function (m) {
    if (!m) return;
    total += __charMap[m]
    return seperator
})
```

下面的部分则是对已经处理掉六个特殊字符的字符串直接拆开成单个字符进行映射累加得到结果了。调用的是数组的 `reduce` 方法
```js
var target = normalString.replace(new RegExp(seperator, 'ig'), '').split('').reduce(function (sum, item) {
    if (!item) return sum;
    return sum + __charMap[item];
}, total)

```

### 其他

开始写的解法是用来一个对象来做罗马数字和整数的映射,但是发现这样的写法效率会比 `switch case`要低一些，所以换成了一个 `switch case`

```js
var __charMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
}
```


## 正则表达式解法2

上面解法写完之后发现执行起来效率很低，因为存在着大量的正则匹配。后面发现其实可以直接把两个正则表达式合并在一起只处理一次就可以完成全部映射

```js
function getNumber(key) {
    switch (key) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        case 'IV': return 4;
        case 'IX': return 9;
        case 'XL': return 40;
        case 'XC': return 90;
        case 'CD': return 400;
        case 'CM': return 900;
    }
}

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
    var total = 0;
    String(s).replace(/(IV)|(IX)|(XL)|(XC)|(CD)|(CM)|([IVXLCDM])/ig, function (m) {
        if (!m) return;
        total += getNumber(m)
        return ''
    })
    return total
};

```

### 思路

因为罗马字符串一定是大的数字在小的数字的左边的，而字符串在匹配时候也是按照 **从左到右**的顺序进行检索，正则表达式匹配检测时候也按照 **从左到右**来检测，因此如果前面的分组匹配成功，就马上执行回调函数，然后只需要在回调函数里处理对应字符，然后匹配到的字符删去就可以

合并后的正则，六个特殊数字需要放在普通单个字符的前面
```js
String(s).replace(/(IV)|(IX)|(XL)|(XC)|(CD)|(CM)|([IVXLCDM])/ig, function (m) {
    if (!m) return;
    total += getNumber(m)
    return ''
})
```

## 数组遍历解法

### 代码

```js
/**
 * @param {string} s
 * @return {number}
 */
let dic = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
var romanToInt = function (s) {
    let sum = 0
    let last = dic[s[0]]
    for (let i = 1; i < s.length; i++) {
        let cur = dic[s[i]]
        if (cur <= last) {
            sum += last
        } else {
            sum -= last
        }
        last = cur
    }
    return sum + last
};
```

## 参考

- [RegExp-正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [String.prototype.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
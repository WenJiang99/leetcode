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
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


console.log(romanToInt("CXIII"))
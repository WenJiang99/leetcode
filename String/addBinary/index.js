/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    
    let [long, short] = a.length > b.length ? [a.split('').reverse(), b.split('').reverse()] : [b.split('').reverse(), a.split('').reverse()];
    let extra = 0;
    let target = []
    let unit;
    for (let i = 0; i < long.length; i++) {
        [unit, extra] = byteSum(long[i], i >= short.length ? 0 : short[i], extra)
        target.unshift(unit)
    }
    extra != 0 && target.unshift(extra);
    return target.join('')
};

function byteSum(byte1, byte2, extra) {
    const sum = Number(byte1) + Number(byte2) + Number(extra);
    return [sum % 2, sum > 2 ? 1 : 0]
}

/**
 * @param {String} str
 * @return {Number}
 */
function toDecimal(str) {
    const bytes = str.trim().split('');
    const target = bytes.reduce((sum, item, index) => {
        if (item.length < 1) return;
        return sum + Math.pow(2, bytes.length - index - 1) * Number(item)
    }, 0)
    return target;
}

const reverseString = function(str) {
    let res = '';
    for(let i = str.length; i >= 0; i--) {
        res += str.charAt(i);
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '');
    str = str.toLowerCase();

    let middleRight = Math.floor(str.length/2);
    let middleLeft;
    if(str.length % 2 === 0) middleLeft = middleRight - 1;
    else middleLeft = middleRight;

    for(let i = 0; i <= middleLeft; i++) {
        if(str.charAt(middleRight + i) !== str.charAt(middleLeft - i)) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;

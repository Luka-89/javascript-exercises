const sumAll = function(n1, n2) {
    if(!Number.isInteger(n1) || !Number.isInteger(n2) || n1 < 0 || n2 < 0) return 'ERROR';
    if(n1 > n2) {
        let a = n1;
        n1 = n2;
        n2 = a;
    }
    return (n2 - n1 + 1)/2*(n1 + n2);
};

// Do not edit below this line
module.exports = sumAll;

const fibonacci = function(a) {
    a = parseInt(a);
    if(isNaN(a) || a < 0) return "OOPS";
    if(a === 0) return 0;
    let prev = 1;
    let curr = 1;

    for(let i = 0; i < a - 2; i++) {
        curr = curr + prev;
        prev = curr - prev;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;

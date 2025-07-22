const removeFromArray = function(arr, ...arg) {
    let res = [];
    arr.forEach(item => {
        if(!arg.includes(item)) res.push(item);
    })
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;

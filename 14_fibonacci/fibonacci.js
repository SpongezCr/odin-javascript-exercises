const fibonacci = function(a) {
    a = parseInt(a);
    if (isNaN(a) || a < 0)
        return "OOPS";
    if (a === 0) return 0
    let result = 1;
    let prev = 0;
    for (let i = 1; i < a; i++) {
        let temp = prev;
        prev = result;
        result += temp;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;

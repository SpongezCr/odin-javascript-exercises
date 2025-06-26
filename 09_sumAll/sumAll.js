const sumAll = function(a, b) {

    if ( typeof a !== "number" || typeof b !== "number" || 
            a%1 !== 0 || b%1 !== 0 || a < 0 || b < 0) {
        return "ERROR";
    }


    let smaller = a < b ? a : b;
    let larger = a > b ? a : b;
    let total = 0
    for (let i = smaller; i <= larger; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;

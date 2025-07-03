const palindromes = function (str) {
    str = str.replace(/[\s\W]+/g, "").toLowerCase();
    let i = 0;
    let j = str.length - 1;
    while (j >= i) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++; j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

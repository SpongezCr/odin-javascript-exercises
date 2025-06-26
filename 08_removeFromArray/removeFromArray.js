const removeFromArray = function(arr, ...toRemove) {
    // for (let i = 0; i < arr.length;) {
    //     if (toRemove.includes(arr[i])) {
    //         arr.splice(i, 1);
    //     }
    //     else {
    //         i++;
    //     }
    // }
    // return arr;
    return arr.filter(item => !toRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

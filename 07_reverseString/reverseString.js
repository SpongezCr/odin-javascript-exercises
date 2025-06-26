const reverseString = function(string) {
    let characters = string.split("");
    return characters.reduce((reversed_string, char) => 
                                    char + reversed_string, "");
};

// Do not edit below this line
module.exports = reverseString;

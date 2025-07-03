const findTheOldest = function(people) {
    // return people.sort((a,b) => {
    //     if (a.yearOfDeath === undefined) 
    //         a.yearOfDeath = (new Date()).getFullYear();
    //     if (b.yearOfDeath === undefined)
    //         b.yearOfDeath = (new Date()).getFullYear();
    //     return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    // })[0];
    return people.reduce((acc, cur) => {
        if (acc.yearOfDeath === undefined)
            acc.yearOfDeath = (new Date()).getFullYear();
        if (cur.yearOfDeath === undefined)
            cur.yearOfDeath = (new Date()).getFullYear();
        return (acc.yearOfDeath - acc.yearOfBirth) > 
                (cur.yearOfDeath - cur.yearOfBirth) ? acc : cur;
    })
};

// Do not edit below this line
module.exports = findTheOldest;

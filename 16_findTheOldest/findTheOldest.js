const findTheOldest = function (people) {
    let res = {
        name: "Not a person",
        yearOfBirth: 0,
        yearOfDeath: 0,
    }

    return people.reduce((res, person) => {
        
        let resAge = res.yearOfDeath - res.yearOfBirth;
        let personAge = person.yearOfDeath - person.yearOfBirth;

        if(res.yearOfDeath === undefined) resAge = 2025 - res.yearOfBirth;
        else if(person.yearOfDeath === undefined) personAge = 2025 - person.yearOfBirth;
        
        if (resAge <= personAge) return person;
        else return res;
    }, res);
};

// Do not edit below this line
module.exports = findTheOldest;

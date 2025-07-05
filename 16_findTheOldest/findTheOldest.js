const findTheOldest = function(people) {

    function getAge(person) {
        return person.yearOfDeath === undefined ? new Date().getFullYear() - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth;
    }

    return people.reduce((oldest, person) => {

        const personAge = getAge(person);
        const oldestAge = getAge(oldest);

        return personAge > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;

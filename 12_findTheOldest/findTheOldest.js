const findTheOldest = function(person) {
    return person.reduce((oldest, current) =>
    {
        return(age(oldest) > age(current) ? oldest : current);
    })
};

const age = (person) => {
    if ("yearOfDeath" in person)
        return person.yearOfDeath - person.yearOfBirth;
    else
        return new Date().getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;

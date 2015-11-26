// refactored OldPeople
module.exports = function(people = []) {

    return {
        hasName,
        findName,
        allNames,
        firstPersonCard
    };

    function hasName(name) {
        return !!people.filter((person) => (person.name === name));
    }

    function findName(name) {
        return people.find(person => person.name === name);
    }
    // map :: people => names
    function allNames() {
        return people.map(el => el.name)
    }

    function firstPersonCard() {
        return `${people[0].name} is from:\n${people[0].address}`;
    }

};


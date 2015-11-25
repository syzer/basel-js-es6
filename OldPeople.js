module.exports = function(people) {

    var people = people || [];

    return {
        hasName: hasName,
        findName: findName,
        allNames: allNames,
        firstPersonCard: firstPersonCard
    };

    function hasName(name) {
        return !!people.filter(function(person) {
            return person.name === name;
        });
    }

    function findName(name) {
        return people.filter(function(person) {
            return person.name === name;
        })[0];
    }

    function allNames() {
        return people.map(function(el) {
            return el.name;
        })
    }

    function firstPersonCard() {
        return "" + people[0].name + ' is from:\n' + people[0].address;
    }

};

